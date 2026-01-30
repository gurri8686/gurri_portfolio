import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Projects = () => {
    const projects = [
        {
          id: 1,
          title: "Rhinolister",
          description:
            "Complete SaaS platform with advanced features for inventory management and barcode scanning.",
          image: "/projects/rhinolister.png",
          gradient: "from-blue-500 to-purple-600",
          tech: [
            { name: "React", color: "bg-blue-100 text-blue-800" },
            { name: "Node.js", color: "bg-green-100 text-green-800" },
            { name: "Mysql", color: "bg-purple-100 text-purple-800" },
          ],
          link : "https://www.rhinolister.com/"
        },
        {
          id: 2,
          title: "Lost Super Finder",
          description:
            "Web application to help users find their lost items with Google integration and mapping features.",
          image: "/projects/zoho.png",
          gradient: "from-green-500 to-teal-600",
          tech: [
            { name: "Zoho", color: "bg-blue-100 text-blue-800" },
            { name: "Google APIs", color: "bg-yellow-100 text-yellow-800" },
            { name: "TypeScript", color: "bg-purple-100 text-purple-800" },
          ],
          link : "https://www.lostsuperfinder.com.au/find-my-super"
        },
        {
          id: 3,
          title: "Ed-Admin",
          description:
            "A comprehensive school management system featuring modules for Students, Teachers, Attendance, Subjects, Exams, and more. Built as a distributed architecture to support multi-tenant deployments across multiple educational institutions. Currently in active use by several schools for day-to-day administrative operations.",
          image: "/projects/coldfusion.png",
          gradient: "from-purple-500 to-pink-600",
          tech: [
            { name: "Coldfusion", color: "bg-red-100 text-red-800" },
            { name: "Javascript", color: "bg-blue-100 text-blue-800" },
            { name: "Mysql", color: "bg-green-100 text-green-800" },
          ],
          link : "https://www.ed-admin.com/"
        },
        {
          id: 4,
          title: "Fello",
          description:
            "SaaS solution designed for event operations, enabling rental management of electronic devices with inventory control, barcode scanning, and system integrations.",
          image: "/projects/laravel.png",
          gradient: "from-blue-500 to-purple-600",
          tech: [
            { name: "laravel", color: "bg-blue-100 text-blue-800" },
            { name: "Node.js", color: "bg-green-100 text-green-800" },
            { name: "Mysql", color: "bg-purple-100 text-purple-800" },
          ],
          link : "https://fello.com/"
        },
      ];
        const truncateText = (text: string, maxLength: number = 100): string => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + "...";
      };
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 relative pb-[10%]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600">Some of my recent work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((projects) => (
              <div
                key={projects.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden
                          hover:shadow-2xl transition-all duration-300
                          border border-gray-100 hover:-translate-y-2
                          animate-slideUp"
              >
               <div className="relative h-56 w-full">
                <Link
                  href={projects.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                  >
                  <Image
                    src={projects.image}
                    alt={projects.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </Link>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {projects.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{truncateText(projects.description, 110)}</p>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projects.tech.map((t) => (
                      <span
                        key={t.name}
                        className={`${t.color} px-3 py-1 rounded-full text-xs font-semibold`}
                      >
                        {t.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Projects