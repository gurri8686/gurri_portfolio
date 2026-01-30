import React from 'react'

const About = () => {
  return (
      <section>
        <div className="relative -mt-[6%] -ml-[16%]">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#f0f7fe"
            />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100 animate-fadeIn hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center animate-scaleIn">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              I am a Senior Full-Stack Developer and AI Automation Specialist with 10+ years of experience building scalable web applications, SaaS platforms, and business automation solutions. I work with startups, agencies, and growing businesses to design and develop high-performance, secure, and maintainable systems.
              I also build AI-powered automations, internal tools, dashboards and workflow systems that reduce manual work and improve operational efficiency.
              I also build AI-powered automations, internal tools, dashboards and workflow systems that reduce manual work and improve operational efficiency.
              I take full ownership of projects from requirements analysis and system architecture to development, optimization, and deployment. Clients hire me for clear communication, on-time delivery and solutions that are scalable, SEO-friendly and performance-optimized.
            </p>
          </div>
        </div>
      </section>
  )
}

export default About