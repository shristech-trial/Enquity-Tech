import { Code2, Mail, Phone, MapPin, Send, X, Menu } from 'lucide-react';
import { useState } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Contact() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8">Get in Touch</h1>
        <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-400 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-400">info@enquitytech.com</p>
                  {/* <p className="text-gray-400">careers@enquitytechnologies.com</p> */}
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-400 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-400">+91 9112029611</p>
                  <p className="text-gray-400">Mon - Fri, 9AM - 6PM</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-400 mt-1" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                    <p className="text-gray-400">Enquity Tech</p>
                    <p className="text-gray-400">Office No. 307, 4th Floor</p>
                    <p className="text-gray-400">Pencil Square Building</p>
                    <p className="text-gray-400">Near Sandeep Corner, MIDC</p>
                    <p className="text-gray-400">Baramati, Pune – 413102</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-12 pt-12 border-t border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-6">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all">
                  <span className="text-lg">f</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all">
                  <span className="text-lg">𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all">
                  <span className="text-lg">in</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-800">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
