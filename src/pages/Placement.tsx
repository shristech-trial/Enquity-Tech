import { Code2, Briefcase, Users, TrendingUp, Award, CheckCircle, BarChart3, FileText, Mic, Target, Menu, X } from 'lucide-react';
import Footer from '../components/Footer';
import {Link } from 'react-router-dom';
import { useState } from 'react';
import EnquiryModal from '@/components/EnquiryModal';

export default function Placement() {
  const placementStats = [
    { icon: Users, number: '15,000+', label: 'Jobs Secured', color: 'text-green-400' },
    { icon: TrendingUp, number: '98%', label: 'Success Rate', color: 'text-blue-400' },
    { icon: Award, number: '50,000+', label: 'Happy Graduates', color: 'text-purple-400' },
    { icon: Briefcase, number: '500+', label: 'Partner Companies', color: 'text-orange-400' },
  ];

  const companies = [
    'Fortrea', 'TechCare Medical', 'IKS Health', 'GeBBS Healthcare Solutions', 'AdvantMed', 'MediTab',
    'CorroHealth', 'TCS', 'Cognizant', 'Cipla', 'EPI', 'Ascent',
    'Medika Bazaar', 'MD India', 'Feddra', 'Acuity', 'Cotiviti', 'NG Healthcare Solutions',
    'IDS', 'Synergen Health', 'IPCA', 'Straive', 'WNS', 'Glenmark',
    'ZIM', 'Sanofi', 'Lupin', 'VES Technologies', 'Mike Sierra', '3Gen Consulting'
  ];


  const [open, setOpen] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const logos = [
    { name: 'Fortrea', file: 'fortrea.png' },
    { name: 'TechCare Medical', file: 'techcare.png' },
    { name: 'IKS Health', file: 'iks.png' },
    { name: 'GeBBS Healthcare Solutions', file: 'gebbs.png' },
    { name: 'AdvantMed', file: 'advantmed.png' },
    { name: 'MediTab', file: 'meditab.png' },
    { name: 'CorroHealth', file: 'corrohealth.png' },
    { name: 'TCS', file: 'tcs.png' },
    { name: 'Cognizant', file: 'cognizant.png' },
    { name: 'Cipla', file: 'cipla.png' },
    { name: 'EPI', file: 'epi-removebg-preview.png' },
    { name: 'Ascent', file: 'Ascent.png' },
    { name: 'Medika Bazaar', file: 'medikabazaar.png' },
    { name: 'MD India', file: 'mdindia.png' },
    { name: 'Feddra', file: 'Fedora.png' },
    { name: 'Acuity', file: 'acuity.png' },
    { name: 'Cotiviti', file: 'cotiviti.png' },
    { name: 'NG Healthcare Solutions', file: 'NG_healthcare.png' },
    { name: 'Synergen Health', file: 'synergen.jpg' },
    { name: 'Lupin', file: 'lupin.png' },
    { name: 'ZIM', file: 'zim.png' },
    { name: 'Glenmark', file: 'glenmark.png' },
  ];

  // 1. Split logos into two rows
  const row1 = logos.slice(0, Math.ceil(logos.length / 2));
  const row2 = logos.slice(Math.ceil(logos.length / 2));

  // 2. Helper Card Component
  const LogoCard = ({ logo }) => (
    <div className="flex items-center justify-center p-6 w-[200px] h-[100px] bg-slate-900/90 rounded-lg hover:bg-slate-700/90 transition-all cursor-pointer border border-slate-700 hover:border-blue-500/50 overflow-hidden shrink-0 mx-4">
      <img
        src={`/images/${logo.file}`}
        alt={logo.name}
        className="max-w-full max-h-full object-fit transition-transform duration-300 hover:scale-125"
      />
    </div>
  );

  const placementProcess = [
    { step: 1, title: 'Skills Assessment', description: 'We evaluate your strengths and identify areas for improvement to tailor our support.', icon: BarChart3 },
    { step: 2, title: 'Resume Building', description: 'Professional assistance in creating an industry-standard resume that highlights your skills.', icon: FileText },
    { step: 3, title: 'Mock Interviews', description: 'Practice with industry professionals to build confidence and improve interview performance.', icon: Mic },
    { step: 4, title: 'Job Placement', description: 'Access to exclusive job openings with our 150+ partner companies and referral support.', icon: Target },
  ];

  const salaryRanges = [
    { role: 'Frontend Developer', range: '4-6 LPA', experience: 'Entry Level' },
    { role: 'Backend Developer', range: '5-7 LPA', experience: 'Entry Level' },
    { role: 'Full Stack Developer', range: '6-9 LPA', experience: 'Entry Level' },
    { role: 'Data Analyst', range: '4.5-6.5 LPA', experience: 'Entry Level' },
    { role: 'Senior Developer', range: '10-15 LPA', experience: '2-3 Years' },
    { role: 'Tech Lead', range: '15-20+ LPA', experience: '3-5 Years' },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6 lg:px-8 border-b border-slate-800">
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
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8">Career Placements</h1>
        <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
          Your pathway to success starts here. Join thousands of graduates placed in top companies worldwide.
        </p>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {placementStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-800 hover:border-blue-500/50 transition-all">
                <Icon className={`w-8 h-8 ${stat.color} mb-4`} />
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Placement Process */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Placement Process</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">A systematic approach to ensure you're fully prepared for your job search</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {placementProcess.map((process, index) => {
            const IconComponent = process.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-slate-600 backdrop-blur-sm rounded-xl p-8 border border-slate-800 hover:border-blue-500/50 transition-all h-full">
                  <IconComponent className="w-12 h-12 text-blue-400 mb-4" />
                  <div className="text-sm font-semibold text-blue-400 mb-2">Step {process.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{process.title}</h3>
                  <p className="text-gray-400">{process.description}</p>
                </div>
                {index < placementProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* --- SEAMLESS INFINITE MARQUEE --- */}
      <div className="w-full py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Partner Companies</h2>
          
          <div className="relative flex flex-col gap-8 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
            
            {/* Row 1: Left to Right */}
            <div className="flex overflow-hidden group">
              {/* Original Track */}
              <div className="flex shrink-0 animate-marquee items-center justify-around gap-4 min-w-full">
                {row1.map((logo, index) => (
                  <LogoCard key={`row1-a-${index}`} logo={logo} />
                ))}
              </div>
              {/* Duplicate Track (for infinite effect) */}
              <div className="flex shrink-0 animate-marquee items-center justify-around gap-4 min-w-full" aria-hidden="true">
                {row1.map((logo, index) => (
                  <LogoCard key={`row1-b-${index}`} logo={logo} />
                ))}
              </div>
            </div>

            {/* Row 2: Right to Left */}
            <div className="flex overflow-hidden group">
              {/* Original Track */}
              <div className="flex shrink-0 animate-marquee-reverse items-center justify-around gap-4 min-w-full">
                {row2.map((logo, index) => (
                  <LogoCard key={`row2-a-${index}`} logo={logo} />
                ))}
              </div>
              {/* Duplicate Track (for infinite effect) */}
              <div className="flex shrink-0 animate-marquee-reverse items-center justify-around gap-4 min-w-full" aria-hidden="true">
                {row2.map((logo, index) => (
                  <LogoCard key={`row2-b-${index}`} logo={logo} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* ------------------------------------------- */}

      {/* Salary Ranges */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Expected Salary Ranges (India)</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left py-4 px-6 text-white font-semibold">Job Role</th>
                <th className="text-left py-4 px-6 text-white font-semibold">Salary Range</th>
                <th className="text-left py-4 px-6 text-white font-semibold">Experience Level</th>
              </tr>
            </thead>
            <tbody>
              {salaryRanges.map((salary, index) => (
                <tr key={index} className="border-b border-slate-800 hover:bg-slate-900/50 transition-colors">
                  <td className="py-4 px-6 text-gray-300">{salary.role}</td>
                  <td className="py-4 px-6">
                    <span className="text-green-400 font-semibold">{salary.range}</span>
                  </td>
                  <td className="py-4 px-6 text-gray-400">{salary.experience}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Features */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Our Graduates Excel</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Industry-Ready Skills', desc: 'Curriculum designed with input from top tech companies' },
            { title: '1-on-1 Mentorship', desc: 'Personal guidance from experienced industry professionals' },
            { title: 'Mock Interviews', desc: 'Regular practice with real interview scenarios' },
            { title: 'Portfolio Building', desc: 'Showcase real projects to potential employers' },
            { title: 'Networking Opportunities', desc: 'Connect with peers and industry leaders' },
            { title: 'Lifetime Support', desc: 'Continuous career guidance even after placement' },
          ].map((feature, index) => (
            <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-800 hover:border-blue-500/50 transition-all">
              <CheckCircle className="w-6 h-6 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 text-center">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-blue-500/20">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Launch Your Career?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful graduates who have transformed their careers through our comprehensive programs and dedicated placement support.
          </p>
          <button onClick={() => setOpen(true)} className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 hover:-translate-y-1">
            Start Your Journey Today
          </button>
        </div>
      </div>

      <EnquiryModal open={open} onClose={() => setOpen(false)} />

      <Footer />
    </div>
  );
}