export default function AdminBlogs() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-black">Manage Blogs</h1>
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <p className="mb-4 text-gray-700">
            Manage your blogs through Contentful. Click the button below to open the Contentful dashboard.
          </p>
          <div className="flex gap-4">
            <a
              href="https://app.contentful.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0B3D91] text-white px-6 py-3 rounded hover:bg-blue-700 inline-block font-semibold"
            >
              Open Contentful Dashboard
            </a>
            <a
              href="/admin/debug-contentful"
              className="bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700 inline-block font-semibold"
            >
              🔍 Debug Content Types
            </a>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-black">Important Setup Instructions</h2>
          <div className="space-y-3 text-gray-700">
            <div>
              <strong className="text-black">1. Content Type Name:</strong>
              <p className="ml-4 mt-1">Your content type must be named exactly <code className="bg-gray-200 px-2 py-1 rounded">blog</code> (lowercase).</p>
              <p className="ml-4 mt-1 text-sm text-gray-600">Check this in Contentful: Content model → Your content type → API Identifier should be "blog"</p>
            </div>
            <div>
              <strong className="text-black">2. Required Fields:</strong>
              <ul className="ml-4 mt-1 list-disc list-inside text-sm">
                <li>title (Short text)</li>
                <li>excerpt (Short text)</li>
                <li>content (Long text)</li>
                <li>image (Media - Image)</li>
                <li>category (Short text)</li>
                <li>date (Date & time)</li>
                <li>slug (Short text)</li>
                <li>published (Boolean) - Optional, defaults to true</li>
              </ul>
            </div>
            <div>
              <strong className="text-black">3. Creating Blogs:</strong>
              <p className="ml-4 mt-1 text-sm">Go to Content → Add entry → Select "blog" → Fill in all fields → Publish</p>
            </div>
            <div>
              <strong className="text-black">4. Troubleshooting:</strong>
              <p className="ml-4 mt-1 text-sm">If you see an error about content type not found, check your Contentful API Identifier matches "blog" exactly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

