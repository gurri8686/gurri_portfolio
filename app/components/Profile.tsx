import React from 'react'
import Image from 'next/image'

const Profile = () => {
  return (
     <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Profile Image */}
                <div className="relative animate-scaleIn">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1.5 shadow-2xl">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-6xl font-bold text-gray-600 overflow-hidden">
                      <Image
                        src="/profile.jpg"
                        alt="Gurpreet Singh"
                        width={256}
                        height={256}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2 animate-pulse">
                    <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                    Available Now
                  </div>
                </div>
    
                {/* Hero Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 animate-fadeInLeft">
                    Gurpreet Singh
                  </h1>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-blue-100 mb-6 animate-fadeInLeft delay-100">
                    Senior Full-Stack for SaaS & AI Developer
                  </p>
                  <p className="text-lg text-blue-100 mb-8 max-w-2xl animate-fadeInLeft delay-200">
                    React, Next.js, Node.js | AI Automation Specialist
                  </p>
    
                  {/* Key Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 animate-fadeIn delay-100 hover:scale-105 transition-transform">
                      <div className="text-3xl font-bold">100%</div>
                      <div className="text-sm text-blue-100">Job Success</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 animate-fadeIn delay-200 hover:scale-105 transition-transform">
                      <div className="text-3xl font-bold">$200K+</div>
                      <div className="text-sm text-blue-100">Total Earnings</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 animate-fadeIn delay-300 hover:scale-105 transition-transform">
                      <div className="text-3xl font-bold">84</div>
                      <div className="text-sm text-blue-100">Jobs Completed</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 animate-fadeIn delay-400 hover:scale-105 transition-transform">
                      <div className="text-3xl font-bold">14K+</div>
                      <div className="text-sm text-blue-100">Total Hours</div>
                    </div>
                  </div>
    
                  {/* Badges */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 animate-fadeInLeft delay-300">
                    <span className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2 hover:scale-105 transition-transform">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Top Rated
                    </span>
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold text-sm hover:scale-105 transition-transform">
                      10+ Years Experience
                    </span>
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm hover:scale-105 transition-transform">
                      Verified Professional
                    </span>
                  </div>
                </div>
              </div>
            </div>
        </section>
  )
}

export default Profile;