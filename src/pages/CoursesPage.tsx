import { Code2, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";
import Footer from "../components/Footer";
import { useState } from "react";

interface Course {
  slug: string;
  title: string;
  logo: string;
  shortDescription: string;
  duration: string;
  mode: string;
  pricing: {
    onlineOnly: { discountedPrice: number; actualPrice: number } | null;
    offline: { discountedPrice: number; actualPrice: number } | null;
    online: { discountedPrice: number; actualPrice: number } | null;
  };
}

export default function CoursesPage() {
  const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  

  const handleEnrollClick = (courseTitle: string) => {
    navigate(`/enrollment?course=${encodeURIComponent(courseTitle)}`);
  };

  const pricingOptions = ["onlineOnly", "offline", "online"];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navbar */}
      {/* <nav className="px-6 py-6 border-b border-slate-800"> */}
      <nav className="relative z-50 px-6 py-6 border-b border-slate-800">

        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code2 className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold text-white">Enqti Technologies</span>
          </div>
           <div className="hidden md:flex items-center gap-8">
                      {[
                        { label: 'Home', path: '/' },
                        { label: 'About', path: '/about' },
                        { label: 'Courses', path: '/courses' },
                        { label: 'Placements', path: '/placement' },
                        { label: 'Contact', path: '/contact' },
                      ].map((item) => (
                        item.path.startsWith('/#') ? (
                          <a 
                            key={item.label} 
                            href={item.path} 
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link 
                            key={item.label} 
                            to={item.path}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                          >
                            {item.label}
                          </Link>
                        )
                      ))}
                      {/* <button className="px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                        Sign In
                      </button> */}
                    </div>
                    <button
            className="md:hidden text-gray-300 hover:text-white transition-colors p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
          {mobileMenuOpen && (
          // <div className="absolute top-full left-0 right-0 p-4 md:hidden z-50">
<div className="fixed top-[80px] left-0 right-0 p-4 md:hidden z-[999]">

<div className="bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Courses', path: '/courses' },
                { label: 'Placements', path: '/placement' },
                { label: 'Contact', path: '/contact' },
              ].map((item) => (
                item.path.startsWith('/#') ? (
                  <a 
                    key={item.label} 
                    href={item.path}
                    className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link 
                    key={item.label} 
                    to={item.path}
                    className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <hr className="border-gray-800 my-2" />
              {/* <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 active:scale-95 transition-all">
                Sign In
              </button> */}
            </div>
          </div>
        )}
        </div>
      </nav>

      {/* Header */}
      <div className="text-center py-20 px-6">
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">Our Courses</h1>
        <p className="text-gray-300 text-xl max-w-3xl mx-auto">
          Industry-focused programs designed to make you job-ready.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course: Course) => (
          <div
            key={course.slug}
            className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col"
          >
            {/* Logo */}
            <div className="h-14 mb-4 flex items-center">
              <img src={course.logo} alt={`${course.title} logo`} className="h-full object-contain" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>

            {/* Description */}
            <p className="break-normal text-justify text-gray-400 mb-4 flex-grow">{course.shortDescription}</p>

            {/* Meta */}
            <div className="flex justify-between text-sm mb-4">
              <div>
                <div className="text-gray-500">Duration</div>
                <div className="text-white font-semibold">{course.duration}</div>
              </div>
              <div>
                <div className="text-gray-500">Mode</div>
                <div className="text-white font-semibold">{course.mode}</div>
              </div>
            </div>

            {/* Pricing */}
<div className="mb-4 space-y-1">
  {pricingOptions.map((option) => {
    const priceObj = course.pricing[option as keyof typeof course.pricing];
    if (!priceObj) return null; // Skip if no price for this category

    // Capitalize and format option text
    const optionText = option
      .replace(/([A-Z])/g, " $1") // Add space before uppercase
      .replace(/^./, (str) => str.toUpperCase()); // Capitalize first letter

    return (
      <div key={option} className="text-sm text-white flex justify-between">
        <span>{optionText}</span>
        <span>
          <span className="line-through text-gray-400 mr-2">
            ₹{priceObj.actualPrice.toLocaleString()}
          </span>
          <span className="text-green-400 font-semibold">
            ₹{priceObj.discountedPrice.toLocaleString()}
          </span>
        </span>
      </div>
    );
  })}
</div>


            {/* Buttons */}
            <div className="flex gap-3 mt-auto">
              <button
                onClick={() => handleEnrollClick(course.title)}
                className="flex-1 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Enroll Now
              </button>

              <Link
                to={`/course/${course.slug}`}
                className="flex-1 text-center py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
