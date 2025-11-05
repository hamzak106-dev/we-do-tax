import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import contentfulClient from "@/lib/contentful";
import { notFound } from "next/navigation";

// Helper function to convert Rich text document to plain text
function convertRichTextToPlainText(richText: any): string {
  if (!richText || !richText.content) return '';
  
  let text = '';
  const processNode = (node: any) => {
    if (node.nodeType === 'text') {
      text += node.value || '';
    } else if (node.content && Array.isArray(node.content)) {
      node.content.forEach(processNode);
    }
  };
  
  if (Array.isArray(richText.content)) {
    richText.content.forEach(processNode);
  } else {
    processNode(richText);
  }
  
  return text;
}

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  img: string;
  category: string;
  date: string;
  slug: string;
}

async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    // Try different content type names (including Contentful template names)
    // Based on Contentful "page - Blog post" template
    const contentTypesToTry = [
      'pageBlogPost',        // Most likely for "page - Blog post"
      'pageBlogPostTemplate',
      'page - Blog post',
      'blog',
      'Blog',
      'blogPost',
      'BlogPost',
      'blogPostTemplate',
      'post',
      'Post',
      'article',
      'Article',
    ];

    let response;
    let lastError: any = null;

    for (const contentType of contentTypesToTry) {
      try {
        response = await contentfulClient.getEntries({
          content_type: contentType,
          'fields.slug': slug,
          limit: 1,
        });
        if (response && response.items.length > 0) {
          break;
        }
      } catch (e: any) {
        lastError = e;
        continue;
      }
    }

    if (!response || response.items.length === 0) {
      console.error('Contentful error:', lastError);
      return null;
    }

    const item = response.items[0];
    const fields = item.fields as any;
    
    // Handle image - template uses featuredImage
    const imageField = fields.featuredImage || fields.image;
    const imageUrl = imageField?.fields?.file?.url || imageField?.file?.url || '';
    const fullImageUrl = imageUrl ? `https:${imageUrl}` : '';

    // Handle title - could be localized
    const title = fields.title?.en || fields.title?.['en-US'] || fields.title || fields.internalName || '';
    
    // Handle excerpt/subtitle - template uses subtitle
    const excerpt = fields.subtitle?.en || fields.subtitle?.['en-US'] || fields.subtitle || fields.excerpt?.en || fields.excerpt || '';
    
    // Handle content - template uses Rich text, need to convert to string
    let content = '';
    if (fields.content) {
      // If it's a Rich text field (document structure), we need to convert it
      if (typeof fields.content === 'object' && fields.content.nodeType === 'document') {
        // Rich text document - convert to plain text or HTML
        content = convertRichTextToPlainText(fields.content);
      } else if (fields.content.en || fields.content['en-US']) {
        // Localized Rich text
        const localizedContent = fields.content.en || fields.content['en-US'];
        content = typeof localizedContent === 'string' ? localizedContent : convertRichTextToPlainText(localizedContent);
      } else {
        content = typeof fields.content === 'string' ? fields.content : '';
      }
    }
    
    // Handle date - template uses publishedDate
    const dateField = fields.publishedDate || fields.date;
    const formattedDate = dateField ? new Date(dateField).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }) : '';

    // Handle slug
    const slugFromFields = fields.slug?.en || fields.slug?.['en-US'] || fields.slug || '';

    return {
      id: item.sys.id,
      title: title,
      excerpt: excerpt,
      content: content,
      img: fullImageUrl || 'https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg?auto=compress&w=600&q=80',
      category: fields.category?.en || fields.category || '',
      date: formattedDate,
      slug: slugFromFields || slug,
    };
  } catch (error) {
    console.error("Failed to fetch blog:", error);
    return null;
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <Header />
      <article className="bg-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          {/* Back Button */}
          <Link
            href="/Blogs"
            className="text-[#0B3D91] hover:text-[#ffc107] font-semibold mb-6 inline-flex items-center transition-colors"
          >
            ← Back to Blogs
          </Link>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="bg-[#0B3D91] text-white text-xs font-semibold px-3 py-1 rounded-full">
              {blog.category}
            </span>
          </div>

          {/* Date */}
          <div className="text-sm text-gray-500 mb-4">{blog.date}</div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
            {blog.title}
          </h1>

          {/* Featured Image */}
          {blog.img && (
            <div className="w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Excerpt */}
          {blog.excerpt && (
            <p className="text-xl text-gray-700 mb-8 font-medium italic">
              {blog.excerpt}
            </p>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none text-gray-700">
            <div className="leading-[1.8] text-lg">
              {blog.content.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index} className="mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                )
              ))}
            </div>
          </div>

          {/* Back to Blogs Button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/Blogs"
              className="bg-[#0B3D91] text-white px-6 py-3 rounded hover:bg-blue-700 inline-block font-semibold transition-colors"
            >
              ← Back to All Blogs
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}

