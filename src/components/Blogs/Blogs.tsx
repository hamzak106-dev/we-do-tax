/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Understanding Tax Deductions for Small Business Owners",
    excerpt: "Learn about the most important tax deductions available to small business owners and how to maximize your savings.",
    img: "https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg?auto=compress&w=600&q=80",
    date: "March 15, 2024",
    category: "Business Tax",
    link: "#",
  },
  {
    id: 2,
    title: "Tax Planning Strategies for 2024",
    excerpt: "Discover effective tax planning strategies to reduce your tax liability and keep more of your hard-earned money.",
    img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&w=600&q=80",
    date: "March 10, 2024",
    category: "Tax Planning",
    link: "#",
  },
  {
    id: 3,
    title: "IRS Audit: What to Expect and How to Prepare",
    excerpt: "A comprehensive guide on what happens during an IRS audit and the steps you should take to prepare.",
    img: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&w=600&q=80",
    date: "March 5, 2024",
    category: "IRS Audit",
    link: "#",
  },
  {
    id: 4,
    title: "Expat Tax Filing: Essential Guide for Americans Abroad",
    excerpt: "Everything you need to know about filing taxes as an American living or working overseas.",
    img: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&w=600&q=80",
    date: "February 28, 2024",
    category: "Expat Tax",
    link: "#",
  },
  {
    id: 5,
    title: "Quarterly Tax Payments: A Guide for Freelancers",
    excerpt: "Learn how to calculate and pay quarterly estimated taxes to avoid penalties and stay compliant.",
    img: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&w=600&q=80",
    date: "February 20, 2024",
    category: "Freelancer Tax",
    link: "#",
  },
  {
    id: 6,
    title: "Home Office Deduction: Maximizing Your Tax Benefits",
    excerpt: "Understand the rules and requirements for claiming a home office deduction on your tax return.",
    img: "https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg?auto=compress&w=600&q=80",
    date: "February 15, 2024",
    category: "Deductions",
    link: "#",
  },
  {
    id: 7,
    title: "State Tax Obligations: What You Need to Know",
    excerpt: "Navigate the complexities of state tax requirements and understand your obligations across different states.",
    img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&w=600&q=80",
    date: "February 10, 2024",
    category: "State Tax",
    link: "#",
  },
  {
    id: 8,
    title: "Year-End Tax Planning Checklist",
    excerpt: "A comprehensive checklist to help you optimize your tax situation before the end of the tax year.",
    img: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&w=600&q=80",
    date: "February 5, 2024",
    category: "Tax Planning",
    link: "#",
  },
  {
    id: 9,
    title: "Understanding Business Entity Tax Structures",
    excerpt: "Compare LLC, S-Corp, C-Corp, and Partnership tax structures to choose the best option for your business.",
    img: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&w=600&q=80",
    date: "January 30, 2024",
    category: "Business Tax",
    link: "#",
  },
];

const Blogs = () => (
  <section className="bg-white py-16 md:py-20">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
        OUR BLOGS
      </h2>
      <p className="text-center text-gray-600 mb-12 text-lg">
        Stay informed with the latest tax tips, strategies, and insights
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] flex flex-col group"
          >
            <Link href={blog.link}>
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
              <Link href={blog.link}>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#0B3D91] transition-colors">
                  {blog.title}
                </h3>
              </Link>
              <p className="text-gray-700 text-[15px] mb-4 flex-grow">
                {blog.excerpt}
              </p>
              <Link
                href={blog.link}
                className="text-[#0B3D91] font-semibold text-sm mt-auto inline-flex items-center hover:text-[#ffc107] transition-colors"
              >
                READ MORE <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Blogs;

