"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import contentfulClient from "@/lib/contentful";

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  img: string;
  category: string;
  date: string;
  slug: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      // Try different content type names (blog, Blog, BlogPost, etc.)
      let response;
      let lastError: any = null;
      
      // List of possible content type names to try (including Contentful template names)
      // Based on Contentful "page - Blog post" template
      const contentTypesToTry = [
        'pageBlogPost',        // Most likely for "page - Blog post"
        'pageBlogPostTemplate',
        'pageBlogPostTemplateV2',
        'page - Blog post',    // With spaces and dashes (unlikely but possible)
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
      
      // Try each content type name
      for (const contentType of contentTypesToTry) {
        try {
          response = await contentfulClient.getEntries({
            content_type: contentType,
            // Remove order parameter - we'll sort client-side
          });
          
          // If we get a response, break out of the loop
          if (response && response.items) {
            console.log(`✅ Successfully found content type: "${contentType}"`);
            console.log(`📊 Found ${response.total} total entries`);
            break;
          }
        } catch (e: any) {
          lastError = e;
          console.log(`❌ Content type "${contentType}" not found, trying next...`);
          continue;
        }
      }
      
      // If we still don't have a response, throw error
      if (!response || !response.items) {
        console.error('❌ All content type attempts failed. Last error:', lastError);
        throw new Error(
          `Content type not found. Tried: ${contentTypesToTry.join(', ')}. ` +
          `Please check your Contentful content type API Identifier. ` +
          `Go to Contentful → Content model → Your content type → Check the "API Identifier" field.`
        );
      }

      // Map fields from Contentful template structure
      // Template fields: title, subtitle, featuredImage, publishedDate, slug, content
      const allBlogs = response.items.map((item: any) => {
        const fields = item.fields;
        
        // Handle image - could be featuredImage or image
        const imageField = fields.featuredImage || fields.image;
        const imageUrl = imageField?.fields?.file?.url || imageField?.file?.url || '';
        const fullImageUrl = imageUrl ? `https:${imageUrl}` : '';

        // Handle title - could be localized, try en-US first, then fallback
        const title = fields.title?.en || fields.title?.['en-US'] || fields.title || fields.internalName || '';
        
        // Handle excerpt/subtitle - template uses subtitle, but we'll try both
        const excerpt = fields.subtitle?.en || fields.subtitle?.['en-US'] || fields.subtitle || fields.excerpt?.en || fields.excerpt || '';
        
        // Handle date - template uses publishedDate
        const dateField = fields.publishedDate || fields.date;
        const formattedDate = dateField ? new Date(dateField).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }) : '';

        // Handle slug
        const slug = fields.slug?.en || fields.slug?.['en-US'] || fields.slug || title?.toLowerCase().replace(/\s+/g, '-') || '';

        return {
          id: item.sys.id,
          title: title,
          excerpt: excerpt,
          img: fullImageUrl || 'https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg?auto=compress&w=600&q=80',
          category: fields.category?.en || fields.category || '', // Might not exist in template
          date: formattedDate,
          slug: slug,
          published: true, // Assume published if we can fetch it
        };
      });

      // Filter only published blogs (if published field exists)
      const publishedBlogs = allBlogs.filter((blog: any) => blog.published !== false);
      
      // Sort by date (newest first)
      const sortedBlogs = publishedBlogs.sort((a: any, b: any) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA;
      });
      
      setBlogs(sortedBlogs);
    } catch (error: any) {
      console.error("Failed to fetch blogs:", error);
      // Show user-friendly error message
      if (error.message) {
        console.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
            OUR BLOGS
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Stay informed with the latest tax tips, strategies, and insights
          </p>
          <div className="text-center py-12">
            <p className="text-gray-600">Loading blogs...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
          OUR BLOGS
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Stay informed with the latest tax tips, strategies, and insights
        </p>
        {blogs.length === 0 && !loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">No blogs available yet.</p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-2xl mx-auto mt-4">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Setup Instructions:</strong>
              </p>
              <ol className="text-left text-sm text-gray-600 space-y-2 ml-4">
                <li>1. Go to Contentful → Content model</li>
                <li>2. Create a content type with API Identifier: <code className="bg-gray-200 px-1 rounded">blog</code></li>
                <li>3. Add fields: title, excerpt, content, image, category, date, slug</li>
                <li>4. Go to Content → Add entry → Select your content type</li>
                <li>5. Fill in all fields and <strong>Publish</strong></li>
              </ol>
              <p className="text-xs text-gray-500 mt-3">
                Check the browser console (F12) for detailed error messages.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] flex flex-col group"
              >
                <Link href={`/blogs/${blog.slug}`}>
                  <div className="w-full h-48 relative overflow-hidden">
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#0B3D91] text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm text-gray-500 mb-2">{blog.date}</div>
                  <Link href={`/blogs/${blog.slug}`}>
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#0B3D91] transition-colors">
                      {blog.title}
                    </h3>
                  </Link>
                  <p className="text-gray-700 text-[15px] mb-4 flex-grow">
                    {blog.excerpt}
                  </p>
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="text-[#0B3D91] font-semibold text-sm mt-auto inline-flex items-center hover:text-[#ffc107] transition-colors"
                  >
                    READ MORE <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;

