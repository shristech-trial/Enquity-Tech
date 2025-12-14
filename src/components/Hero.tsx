import { Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden font-sans">
      {/* Background Gradients & Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-400"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 15}s infinite ease-in-out`,
              animationDelay: `-${Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Code2 className="w-8 h-8 text-blue-500" />
            <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Enquity Technologies
            </span>
          </div>

          {/* Desktop Links */}
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 p-4 md:hidden z-50">
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
      </nav>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 sm:pt-24 sm:pb-32 text-center">
        
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
          Start Your Learning<br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"> Journey </span>
           Right Now
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join our thriving community of coders and unlock your potential with over 50 expertly-designed courses.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 sm:mb-24 w-full sm:w-auto px-4">
          <button onClick={() => setTimeout(() => navigate("/courses"), 0)} className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 hover:-translate-y-1">
            {/* Get Started Free
          </button>
          <button  onClick={() => setTimeout(() => navigate("/courses"), 0)} className="w-full sm:w-auto px-8 py-4 bg-slate-800/50 text-white text-lg font-semibold rounded-xl hover:bg-slate-800 transition-all border border-slate-700 backdrop-blur-sm hover:-translate-y-1"> */}
            Explore Courses
          </button>
        </div>

        {/* Stats Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl border border-white/5 p-6 sm:p-10 shadow-2xl">
            <p className="text-slate-300 font-medium text-sm sm:text-base mb-8">
              Since 2019, over <span className="text-white font-bold">50,000</span> Enquity Technologies members have launched successful tech careers
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-bold text-blue-400 mb-1">50k+</span>
                <span className="text-xs sm:text-sm text-slate-500 font-medium uppercase tracking-wider">Happy Students</span>
              </div>
              
              {/* Divider for mobile (hidden on smallest, shown on slightly larger) */}
              <div className="hidden sm:block w-px h-12 bg-slate-800"></div>

              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-1">15k+</span>
                <span className="text-xs sm:text-sm text-slate-500 font-medium uppercase tracking-wider">Jobs Secured</span>
              </div>

              <div className="hidden sm:block w-px h-12 bg-slate-800"></div>

              <div className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-bold text-purple-400 mb-1">98%</span>
                <span className="text-xs sm:text-sm text-slate-500 font-medium uppercase tracking-wider">Success Rate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted Companies */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">Trusted by learners from</p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {['Microsoft', 'Google', 'Adobe', 'Spotify'].map((company) => (
              <span key={company} className="text-lg sm:text-xl font-bold text-white">
                {company}
              </span>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>
    </div>
  );
}