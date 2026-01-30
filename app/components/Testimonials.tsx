"use client";
import React from 'react'
import { useState, useEffect } from "react";
const Testimonials = () => {
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
        setCurrentTestimonial(
          (prev) => (prev - 1 + testimonials.length) % testimonials.length,
        );
      };
    
      // Auto-advance testimonials
      useEffect(() => {
        const timer = setInterval(() => {
          nextTestimonial();
        }, 5000);
        return () => clearInterval(timer);
      }, []);
    
    
  return (
    <section className="bg-[#e2ebff] ">
        <div className="w-full z-0 mt-[-8%]">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto rotate-360"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#e2ebff"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-600">
              What clients say about working with me
            </p>
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
                    <h3 className="text-xl font-bold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-gray-600">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-gray-700 font-semibold text-lg">
                    {testimonials[currentTestimonial].rating}
                  </span>
                </div>

                {/* Quote */}
                <div className="mb-6">
                  <svg
                    className="w-10 h-10 text-blue-200 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                  </svg>
                  <p className="text-xl text-gray-700 leading-relaxed italic">
                    {testimonials[currentTestimonial].text}
                  </p>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {testimonials[currentTestimonial].badges.map(
                    (badge, index) => (
                      <span
                        key={badge}
                        className={`${testimonials[currentTestimonial].badgeColors[index]} px-4 py-2 rounded-full font-semibold text-sm`}
                      >
                        {badge}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center hover:shadow-lg transition-all hover:scale-110"
                  aria-label="Previous testimonial"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
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
                          ? "bg-blue-600 w-8"
                          : "bg-gray-300 hover:bg-gray-400"
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
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Testimonials