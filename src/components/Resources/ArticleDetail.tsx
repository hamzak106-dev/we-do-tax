import React from "react";

interface ArticleDetailProps {
  title: string;
  content: React.ReactNode;
  bgImage: string;
}

const ArticleDetail = ({ title, content, bgImage }: ArticleDetailProps) => (
  <div className="relative min-h-[400px] flex flex-col items-center justify-center py-16 px-4 bg-gray-100">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    />
    <div className="relative z-10 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-black">
        {title}
      </h1>
      <div className="text-lg md:text-xl text-center text-black">{content}</div>
    </div>
  </div>
);

export default ArticleDetail;
