'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Aaron Stuart.",
      role: "CEO, Tech Startup",
      rating: 5.0,
      text: "Working with Gurpreet was one of the best experiences I've had on UpWork. Not only did he do full stack back and front end design and development, he was very intuitive and creative in the design of the platform. I highly recommend him for any projects. UI/UX skills are very good along with complex integrations. You will not be disappointed with his work.",
      badges: ["Clear Communicator", "Accountable for Outcomes"],
      badgeColors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800"]
    },
    {
      name: "Stacey Miller",
      role: "Product Manager",
      rating: 5.0,
      text: "Gurpreet was wonderful to work with. We had a very difficult project that required a highly skilled developer. Gurpreet was highly skilled, pleasant to work with and always in communication. You will not be disappointed.",
      badges: ["Clear Communicator", "Committed to Quality"],
      badgeColors: ["bg-purple-100 text-purple-800", "bg-blue-100 text-blue-800"]
    },
    {
      name: "David Chen",
      role: "Founder, SaaS Company",
      rating: 5.0,
      text: "Easy to work with professional. Highly recommended full stack developer with excellent communication and problem-solving skills.",
      badges: ["Professional", "Reliable"],
      badgeColors: ["bg-green-100 text-green-800", "bg-orange-100 text-orange-800"]
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
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
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
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

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(248, 250, 252)" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100 animate-fadeIn hover:shadow-2xl transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center animate-scaleIn">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            I am a Senior Full-Stack Developer and AI Automation Specialist with 10+ years of experience building scalable web applications, SaaS platforms, and business automation solutions. I work with startups, agencies, and growing businesses to design and develop high-performance, secure, and maintainable systems.
            I also build AI-powered automations, internal tools, dashboards and workflow systems that reduce manual work and improve operational efficiency.
            I take full ownership of projects from requirements analysis and system architecture to development, optimization, and deployment. Clients hire me for clear communication, on-time delivery and solutions that are scalable, SEO-friendly and performance-optimized.
          </p>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse delay-100"></div>
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-200"></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
        </div>
      </div>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600">Technologies I work with daily</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { name: 'React', color: 'from-cyan-500 to-blue-500', icon : '/images/react.png' },
            { name: 'Next.js', color: 'from-gray-700 to-gray-900' , icon : '/images/nextjs.png' },
            { name: 'Vue.js', color: 'from-gray-700 to-gray-900', icon : '/images/vuejs.png' },
            { name: 'Node.js', color: 'from-green-600 to-green-700' , icon : '/images/nodejs.png' },
            { name: 'TypeScript', color: 'from-blue-600 to-blue-700' , icon : '/images/typescript.png' },
            { name: 'JavaScript', color: 'from-yellow-500 to-yellow-600' , icon : '/images/javascript.png' },
            { name: 'HTML5', color: 'from-orange-500 to-orange-600' , icon : '/images/html.png' },
            { name: 'CSS3', color: 'from-blue-500 to-blue-600' , icon : '/images/css.png' },
            { name: 'Tailwind CSS', color: 'from-cyan-400 to-cyan-600' , icon : '/images/tailwind.png' },
            { name: 'PHP', color: 'from-purple-600 to-purple-700' , icon : '/images/php.png' },
            { name: 'Laravel', color: 'from-red-500 to-red-600' , icon : '/images/laravel.png' },
            { name: 'WordPress', color: 'from-blue-700 to-blue-800' , icon : '/images/wordpress.png' },
            { name: 'Shopify', color: 'from-green-500 to-green-600' , icon : '/images/shopify.png' },
            { name: 'Angular', color: 'from-red-600 to-red-700' , icon : '/images/angular.png' },
            { name: 'ASP.NET', color: 'from-purple-700 to-purple-800' , icon : '/images/aspnet.png' },
            { name: 'ColdFusion', color: 'from-indigo-600 to-indigo-700' , icon : '/images/coldfusion.png' },
            { name: 'ZOHO ', color: 'from-indigo-600 to-indigo-700', icon : '/images/zoho.png' },
            { name: 'AI Development', color: 'from-indigo-600 to-indigo-700', icon : '/images/aidevelopment.png' },
            { name: 'AI Chatbot', color: 'from-indigo-600 to-indigo-700', icon : '/images/aichatbot.png' },
            { name: 'Open AI', color: 'from-indigo-600 to-indigo-700', icon : '/images/openai.png' },

          ].map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-2 animate-fadeIn"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              {/* <p className="text-center font-semibold text-gray-800 relative z-10">{skill.name}</p> */}
              <div className="flex items-center justify-center gap-3 relative z-10">
                <Image src={skill.icon} alt={skill.name} width={32} height={32} className="w-8 h-8 object-contain"/>
                <p className="font-semibold text-gray-800">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gradient Divider */}
      <div className="h-24 bg-gradient-to-b from-transparent via-blue-100/30 to-blue-50"></div>

      {/* Portfolio Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600">Some of my recent work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 animate-slideUp">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-6xl font-bold">R</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Rhinoliste</h3>
                <p className="text-gray-600 mb-4">
                  Complete SaaS platform with advanced features for inventory management and barcode scanning.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">React</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">Node.js</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">PostgreSQL</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">82 hours</span>
                  <span className="text-sm font-semibold text-green-600">$1,609.61</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 animate-slideUp delay-100">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                <div className="text-white text-6xl font-bold">L</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lost Super Finder</h3>
                <p className="text-gray-600 mb-4">
                  Web application to help users find their lost items with Google integration and mapping features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">Next.js</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">Google APIs</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">TypeScript</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Full-stack</span>
                  <span className="text-sm font-semibold text-green-600">Featured</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 animate-slideUp delay-200">
              <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <div className="text-white text-6xl font-bold">A</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">AssistNow</h3>
                <p className="text-gray-600 mb-4">
                  Service provider search platform with location-based features and real-time availability.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">React Native</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">Node.js</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold">MongoDB</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Mobile + Web</span>
                  <span className="text-sm font-semibold text-green-600">Featured</span>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 animate-slideUp delay-300">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <div className="text-white text-6xl font-bold">W</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Water Pump Engine Control</h3>
                <p className="text-gray-600 mb-4">
                  Node-RED GUI for industrial water pump engine control with Python integration and real-time monitoring.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">Node-RED</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">Python</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">IoT</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">17 hours</span>
                  <span className="text-sm font-semibold text-green-600">$289.00</span>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 animate-slideUp delay-400">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
                <div className="text-white text-6xl font-bold">M</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">MERN Stack Application</h3>
                <p className="text-gray-600 mb-4">
                  Senior Fullstack Engineer role building complex features for enterprise MERN application.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">MongoDB</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">Express</span>
                  <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-xs font-semibold">React</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">39 hours</span>
                  <span className="text-sm font-semibold text-green-600">$784.00</span>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 animate-slideUp delay-500">
              <div className="h-48 bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                <div className="text-white text-6xl font-bold">P</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">PHP Web Development</h3>
                <p className="text-gray-600 mb-4">
                  Long-term project for experienced PHP web developer with Laravel and WordPress expertise.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">PHP</span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">Laravel</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">WordPress</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">133 hours</span>
                  <span className="text-sm font-semibold text-green-600">$1,987.50</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider Bottom */}
        <div className="mt-16">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto rotate-180">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(248, 250, 252)" />
          </svg>
        </div>
      </section>

      {/* Testimonials Slider Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-600">What clients say about working with me</p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-100 min-h-[400px] flex flex-col justify-between">
            {/* Testimonial Content */}
            <div className="flex-1">
              {/* Client Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-700 font-semibold text-lg">{testimonials[currentTestimonial].rating}</span>
              </div>

              {/* Quote */}
              <div className="mb-6">
                <svg className="w-10 h-10 text-blue-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
                <p className="text-xl text-gray-700 leading-relaxed italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {testimonials[currentTestimonial].badges.map((badge, index) => (
                  <span key={badge} className={`${testimonials[currentTestimonial].badgeColors[index]} px-4 py-2 rounded-full font-semibold text-sm`}>
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center hover:shadow-lg transition-all hover:scale-110"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial
                        ? 'bg-blue-600 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center hover:shadow-lg transition-all hover:scale-110"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full blur-md animate-pulse"></div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-blue-100">Ready to bring your project to life?</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Email */}
            <a
              href="mailto:your.email@example.com"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all rounded-2xl p-6 border border-white/20 flex items-center gap-4 animate-fadeIn hover:scale-105"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-blue-100">Email</div>
                <div className="font-semibold">gurri.singh8686@gmail.com</div>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+919781673003"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all rounded-2xl p-6 border border-white/20 flex items-center gap-4 animate-fadeIn delay-100 hover:scale-105"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-blue-100">Phone</div>
                <div className="font-semibold">+91 97816-73003</div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/gurri-singh-72b78937a/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all rounded-2xl p-6 border border-white/20 flex items-center gap-4 animate-fadeIn delay-200 hover:scale-105"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-blue-100">LinkedIn</div>
                <div className="font-semibold">Connect with me</div>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/gurri8686"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all rounded-2xl p-6 border border-white/20 flex items-center gap-4 animate-fadeIn delay-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-blue-100">GitHub</div>
                <div className="font-semibold">View my code</div>
              </div>
            </a>

            {/* Upwork */}
            <a
              href="https://www.upwork.com/freelancers/~01d0bb9bc96d6bb031"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all rounded-2xl p-6 border border-white/20 flex items-center gap-4 animate-fadeIn delay-400 hover:scale-105"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-blue-100">Upwork</div>
                <div className="font-semibold">View profile</div>
              </div>
            </a>

            {/* Location */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 flex items-center gap-4 animate-fadeIn delay-500">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-blue-100">Location</div>
                <div className="font-semibold">Rajpura, India</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:scale-105 animate-fadeIn"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2026 Gurpreet Singh. All rights reserved. | Senior Full-Stack Developer & AI Specialist
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Available for freelance projects on Upwork, Guru, Freelancer, and direct contracts
          </p>
        </div>
      </footer>
    </div>
  );
}
