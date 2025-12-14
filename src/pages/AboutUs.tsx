import { Code2, Users, Trophy, Target } from 'lucide-react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower developers worldwide by providing accessible, high-quality coding education and real-world experience.',
    },
    {
      icon: Users,
      title: 'Our Community',
      description: 'Join over 50,000 students who have launched successful tech careers through our comprehensive courses and mentorship.',
    },
    {
      icon: Trophy,
      title: 'Our Excellence',
      description: 'With a 98% success rate and 15,000+ jobs secured, we\'re committed to your career success.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold text-white">Enquity Technologies</span>
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
                      <button className="px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                        Sign In
                      </button>
                    </div>
        </div>
      </nav>

      {/* Header */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8">About Enquity Technologies</h1>
        <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
          Empowering the next generation of developers with world-class education and mentorship.
        </p>
      </div>

      {/* Story Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-gray-300 text-lg text-justify mb-4">
              Founded in 2019, Enquity Technologies started with a simple mission: to make quality coding education accessible to everyone.
            </p>
            <p className="text-gray-300 text-justify text-lg mb-4">
              What began as a small community of passionate developers has grown into a thriving platform with over 50,000 students and counting.
            </p>
            <p className="text-gray-300 text-justify text-lg">
              Today, we're proud to have helped thousands of individuals launch successful careers in tech.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg p-8 border border-blue-500/20">
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">50,000+</div>
                <div className="text-gray-400">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">15,000+</div>
                <div className="text-gray-400">Jobs Secured</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
                <div className="text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-800 hover:border-blue-500/50 transition-all">
                  <Icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400 text-justify">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-8">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-800">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-white mb-3">Expert Instructors</h3>
              <p className="text-gray-400">Hand-picked mentors with industry experience</p>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-800">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Practical Learning</h3>
              <p className="text-gray-400">Real-world projects and hands-on challenges</p>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-800">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Career Support</h3>
              <p className="text-gray-400">Job placement and career guidance included</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
