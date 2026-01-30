import Profile from "./components/Profile";
import About from "./components/About";
import Skill from "./components/Skills";
import Project from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f0f7fe]">
      {/* Hero Section */}
      <Profile />

      {/* About Section */}
      <About />

      {/* Decorative Divider */}
      <div>
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
      </div>

      {/* Skills Section */}
      <Skill />

      {/* Portfolio Section */}
      <Project />

      {/* Testimonials Slider Section */}
      <Testimonials />

      {/* Decorative Divider */}
      <div className="bg-[#e2ebff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="relative h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full blur-md animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
