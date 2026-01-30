import React from 'react'
import Image from 'next/image'
const Skills = () => {
  return (
     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12 animate-fadeIn">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Technical Skills
              </h2>
              <p className="text-lg text-gray-600">
                Technologies I work with daily
              </p>
            </div>
    
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                {
                  name: "React",
                  color: "from-cyan-500 to-blue-500",
                  icon: "/Images/react.png",
                },
                {
                  name: "Next.js",
                  color: "from-gray-700 to-gray-900",
                  icon: "/Images/nextjs.png",
                },
                {
                  name: "Vue.js",
                  color: "from-gray-700 to-gray-900",
                  icon: "/Images/vuejs.png",
                },
                {
                  name: "Node.js",
                  color: "from-green-600 to-green-700",
                  icon: "/Images/nodejs.png",
                },
                {
                  name: "TypeScript",
                  color: "from-blue-600 to-blue-700",
                  icon: "/Images/typescript.png",
                },
                {
                  name: "JavaScript",
                  color: "from-yellow-500 to-yellow-600",
                  icon: "/Images/javascript.png",
                },
                {
                  name: "HTML5",
                  color: "from-orange-500 to-orange-600",
                  icon: "/Images/html.png",
                },
                {
                  name: "CSS3",
                  color: "from-blue-500 to-blue-600",
                  icon: "/Images/css.png",
                },
                {
                  name: "Tailwind CSS",
                  color: "from-cyan-400 to-cyan-600",
                  icon: "/Images/tailwind.png",
                },
                {
                  name: "PHP",
                  color: "from-purple-600 to-purple-700",
                  icon: "/Images/php.png",
                },
                {
                  name: "Laravel",
                  color: "from-red-500 to-red-600",
                  icon: "/Images/laravel.png",
                },
                {
                  name: "WordPress",
                  color: "from-blue-700 to-blue-800",
                  icon: "/Images/wordpress.png",
                },
                {
                  name: "Shopify",
                  color: "from-green-500 to-green-600",
                  icon: "/Images/shopify.png",
                },
                {
                  name: "Angular",
                  color: "from-red-600 to-red-700",
                  icon: "/Images/angular.png",
                },
                {
                  name: "ASP.NET",
                  color: "from-purple-700 to-purple-800",
                  icon: "/Images/aspnet.png",
                },
                {
                  name: "ColdFusion",
                  color: "from-indigo-600 to-indigo-700",
                  icon: "/Images/coldfusion.png",
                },
                {
                  name: "ZOHO ",
                  color: "from-indigo-600 to-indigo-700",
                  icon: "/Images/zoho.png",
                },
                {
                  name: "AI Development",
                  color: "from-indigo-600 to-indigo-700",
                  icon: "/Images/aidevelopment.png",
                },
                {
                  name: "AI Chatbot",
                  color: "from-indigo-600 to-indigo-700",
                  icon: "/Images/aichatbot.png",
                },
                {
                  name: "Open AI",
                  color: "from-indigo-600 to-indigo-700",
                  icon: "/Images/openai.png",
                },
              ].map((skill, index) => (
                <div
                  key={skill.name}
                  className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-2 animate-fadeIn"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity`}
                  ></div>
                  {/* <p className="text-center font-semibold text-gray-800 relative z-10">{skill.name}</p> */}
                  <div className="flex items-center justify-center gap-3 relative z-10">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                    />
                    <p className="font-semibold text-gray-800">{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
  )
}

export default Skills