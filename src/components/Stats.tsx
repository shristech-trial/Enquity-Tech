import { Users, BookOpen, Award, TrendingUp } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: '50,000+',
      label: 'Active Students',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BookOpen,
      value: '200+',
      label: 'Courses Available',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Award,
      value: '98%',
      label: 'Success Rate',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: TrendingUp,
      value: '15,000+',
      label: 'Career Placements',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="bg-slate-950 py-16 sm:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Our Impact
          </h2>
          <p className="text-base sm:text-xl text-gray-400">
            Join thousands of successful developers who started their journey with us
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 p-6 sm:p-8 text-center hover:border-blue-500/50 transition-all hover:transform hover:scale-105"
            >
              <div className={`inline-flex w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-gradient-to-br ${stat.color} items-center justify-center mb-3 sm:mb-4`}>
                <stat.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
              </div>

              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>

              <div className="text-sm sm:text-base text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-24 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Start Your Coding Journey?
          </h3>
          <p className="text-base sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join our community today and get access to all courses, challenges, and exclusive content
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 text-sm sm:text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105">
              Start Learning Free
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-800 text-white text-sm sm:text-lg font-semibold rounded-lg hover:bg-blue-900 transition-all">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
