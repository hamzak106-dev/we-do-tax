"use client";

import { useState, useEffect } from "react";
import contentfulClient from "@/lib/contentful";

export default function DebugContentful() {
  const [contentTypes, setContentTypes] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchContentTypes();
  }, []);

  const fetchContentTypes = async () => {
    try {
      // Try to get content types by fetching entries without content_type filter
      // This will show us what content types exist
      const response = await contentfulClient.getEntries({
        limit: 100,
      });

      // Extract unique content types from the response
      const types = new Set<string>();
      response.items.forEach((item: any) => {
        if (item.sys?.contentType?.sys?.id) {
          types.add(item.sys.contentType.sys.id);
        }
      });

      setContentTypes(Array.from(types).sort());
      setLoading(false);
    } catch (err: any) {
      setError(err.message || "Failed to fetch content types");
      setLoading(false);
    }
  };

  const testContentType = async (contentType: string) => {
    try {
      const response = await contentfulClient.getEntries({
        content_type: contentType,
        limit: 1,
      });
      return {
        success: true,
        count: response.total,
        message: `✅ Found ${response.total} entry/entries`,
      };
    } catch (err: any) {
      return {
        success: false,
        message: `❌ Error: ${err.message}`,
      };
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-black">Contentful Debug Tool</h1>

        {loading ? (
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600">Loading content types...</p>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
            <p className="text-red-700 font-semibold">Error:</p>
            <p className="text-red-600">{error}</p>
            <p className="text-sm text-red-500 mt-4">
              Check your .env.local file has correct NEXT_PUBLIC_CONTENTFUL_SPACE_ID and
              NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
            </p>
          </div>
        ) : (
          <>
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h2 className="text-xl font-semibold mb-4 text-black">
                Found Content Types in Your Space:
              </h2>
              {contentTypes.length === 0 ? (
                <p className="text-gray-600">
                  No content types found. Make sure you have entries published in Contentful.
                </p>
              ) : (
                <div className="space-y-3">
                  {contentTypes.map((type) => (
                    <div
                      key={type}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded border"
                    >
                      <code className="font-mono text-sm bg-gray-200 px-2 py-1 rounded">
                        {type}
                      </code>
                      <span className="text-sm text-gray-600">
                        {type === "blog" || type === "Blog" || type === "blogPost"
                          ? "✅ Use this in code!"
                          : "⚠️ Not configured"}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-black">What to Check:</h2>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  <div>
                    <strong>Content Type API Identifier:</strong>
                    <p className="text-sm text-gray-600 ml-4">
                      Go to Contentful → Content model → Click your content type → Check the{" "}
                      <strong>API Identifier</strong> field (not the display name)
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  <div>
                    <strong>Content Type Published:</strong>
                    <p className="text-sm text-gray-600 ml-4">
                      Make sure your content type is published (not just saved as draft)
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  <div>
                    <strong>Entries Published:</strong>
                    <p className="text-sm text-gray-600 ml-4">
                      Go to Content → Make sure your blog entries are published (green dot, not
                      gray)
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">4.</span>
                  <div>
                    <strong>API Keys:</strong>
                    <p className="text-sm text-gray-600 ml-4">
                      Settings → API keys → Make sure you're using Content Delivery API token (not
                      Management API)
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="mt-6 bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-black">Quick Fix:</h2>
              <p className="text-gray-700 mb-2">
                If you see content types above, use the exact API Identifier in your code. The code
                will automatically try: blog, Blog, blogPost, BlogPost, post, Post
              </p>
              <p className="text-sm text-gray-600">
                Check the browser console (F12) on your blogs page to see which content type name
                worked (or which ones failed).
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

