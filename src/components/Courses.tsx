import { useNavigate } from "react-router-dom";
import { Code2 } from "lucide-react";
import { courses } from "../data/courses";

export default function Courses() {
  const navigate = useNavigate();

  const handleEnrollClick = (courseTitle: string) => {
    navigate(`/enrollment?course=${encodeURIComponent(courseTitle)}`);
  };

  const pricingOptions = ["onlineOnly", "offline", "online"];

  return (
    <div id="courses" className="bg-slate-950 py-16 sm:py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Popular Courses
          </h2>
          <p className="text-base sm:text-xl text-gray-400">
            Choose from our comprehensive curriculum designed by industry experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {courses.slice(0, 3).map((course) => (
            <div
              key={course.slug}
              className="group bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 overflow-hidden hover:border-blue-500/50 transition-all hover:transform hover:scale-105"
            >
              <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>

              <div className="p-4 sm:p-6 flex flex-col h-full">
                {/* Logo */}
                <div className="h-14 mb-4 flex items-center">
                  <img
                    src={course.logo}
                    alt={`${course.title} logo`}
                    className="h-full object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 flex-grow">
                  {course.shortDescription}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between mb-3 sm:mb-4 pt-3 sm:pt-4 border-t border-slate-800 text-sm">
                  <div>
                    <div className="text-xs text-gray-500">Duration</div>
                    <div className="text-white font-semibold">{course.duration}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Mode</div>
                    <div className="text-white font-semibold">{course.mode}</div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-3 space-y-1">
                  {pricingOptions.map((option) => {
                    const priceObj = course.pricing[option as keyof typeof course.pricing];
                    if (!priceObj) return null;

                    const optionText = option
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase());

                    return (
                      <div
                        key={option}
                        className="text-sm text-white flex justify-between"
                      >
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
                    className="flex-1 py-2 sm:py-3 bg-green-600 text-white text-sm sm:text-base rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Enroll Now
                  </button>

                  <button
                    onClick={() => navigate(`/course/${encodeURIComponent(course.slug)}`)}
                    className="flex-1 py-2 sm:py-3 border bg-blue-600 border-slate-700 text-white text-sm sm:text-base rounded-lg font-semibold hover:bg-blue-700 hover:border-blue-700 transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
  <button
    onClick={() => navigate("/courses")}
    className="px-6 sm:px-8 py-3 sm:py-4 bg-slate-900/50 backdrop-blur-sm border border-slate-800 text-white text-sm sm:text-base rounded-lg font-semibold hover:border-blue-500 transition-all"
  >
    View All Courses →
  </button>
</div>

      </div>
    </div>
  );
}
