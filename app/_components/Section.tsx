import React from "react";

export default function Section() {
  return (
    <div className="mx-auto w-screen max-w-7xl px-4 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto  text-center">
        <h1 className="text-[70px]! font-bold mt-10 text-gray-900 sm:text-5xl">
          Why Choose JobPortal?
        </h1>

        <p className="mt-4 max-w-prose mx-auto text-base text-pretty text-gray-700 sm:text-lg/relaxed">
          We've designed the most intuitive job search platform to help you find
          opportunities that align with your career goals.
        </p>
      </div>
      <section className="pt-20">
  <div className="max-w-6xl mx-auto px-4">
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <div className="p-12  bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
        <div className="text-5xl mb-4">🔍</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Powerful Search</h3>
        <p className="text-gray-600 leading-relaxed">
          Advanced
           filtering by job title, category, and more. Find exactly what you're looking for in seconds.
        </p>
      </div>

      <div className="p-12 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
        <div className="text-5xl mb-4">⭐</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Curated Opportunities</h3>
        <p className="text-gray-600 leading-relaxed">
          Carefully selected job postings from verified companies across industries and experience levels.
        </p>
      </div>

      <div className="p-12 bg-white border border-gray-200 rounded-xl  hover:shadow-md transition-shadow">
        <div className="text-5xl mb-4">✨</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">User-Friendly Interface</h3>
        <p className="text-gray-600 leading-relaxed">
          Intuitive design makes job hunting simple and enjoyable. Browse, filter, and explore with ease.
        </p>
      </div>

      <div className="p-12 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
        <div className="text-5xl mb-4">⚡</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Real-Time Updates</h3>
        <p className="text-gray-600 leading-relaxed">
          Instant notifications for new job postings. Never miss an opportunity that matches your profile.
        </p>
      </div>

    </div>
  </div>
</section>
    </div>
  );
}
