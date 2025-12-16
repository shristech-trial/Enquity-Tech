import { Code2, Github, Twitter, Linkedin, Youtube } from 'lucide-react';
import {  Mail, Phone, MapPin, Send } from 'lucide-react';

import { Link } from 'react-router-dom';
import { courses } from "../data/courses";
import { useState } from 'react';

export default function Footer() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">Enquity Technologies</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering developers worldwide with cutting-edge coding education and hands-on experience.
            </p>
            {/* <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          <div>
      <h4 className="text-white font-semibold mb-4">Courses</h4>
      <ul className="space-y-3">
        {courses.map((course) => (
          <li key={course.slug}>
            <Link
              to={`/course/${course.slug}`}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {course.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>


          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            {/* <ul className="space-y-3">
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
            </ul> */}
            <div className="space-y-3">
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
                              className="block text-gray-400 hover:text-white transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                              >
                                {item.label}
                              </a>
                            ) : (
                              <Link 
                              key={item.label} 
                              to={item.path}
                              className="block text-gray-400 hover:text-white transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                              >
                                {item.label}
                              </Link>
                            )
                          ))}
                          
                        </div>
          </div>
                              <div>
                                <h4 className="text-white font-semibold mb-4">Contact</h4>
                                {/* <ul className="space-y-3">
                                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Code Challenges</a></li>
                                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community Forum</a></li>
                                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                                </ul> */}
                                 <div>
                    
                                <div className="space-y-4">
                                  <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                      <Mail className="w-4 h-4 text-blue-400 mt-1" />
                                    </div>
                                    <div>
                                      <p className="font-semibold text-white">Email</p>
                                      <p className="text-gray-400">info@enquitytech.com</p>
                                      {/* <p className="text-gray-400">careers@enquitytechnologies.com</p> */}
                                    </div>
                                  </div>
                    
                                  <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                      <Phone className="w-4 h-4 text-blue-400 mt-1" />
                                    </div>
                                    <div>
                                      <h6 className=" font-semibold text-white">Phone</h6>
                                      <p className="text-gray-400">+91 9112029611</p>
                                    </div>
                                  </div>
                    
                                  <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                      <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                                    </div>
                                    <div>
                                      <h3 className=" font-semibold text-white">Address</h3>
                                        <p className="text-gray-400">Enqti Technologies</p>
                                        <p className="text-gray-400">Office No. 307, 4th Floor</p>
                                        <p className="text-gray-400">Pencil Square Building</p>
                                        <p className="text-gray-400">Near Sandeep Corner, MIDC</p>
                                        <p className="text-gray-400">Baramati, Pune – 413102</p>
                                    </div>
                                  </div>
                                </div>
                    
                                
                              </div>
                              </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Enquity Technologies. All rights reserved.
          </p>
         <p className="text-gray-400 text-sm">
  Developed by{" "}
  <a
    href="https://shristech.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 font-semibold hover:underline"
  >
    Shris Tech
  </a>
</p>

        </div>
      </div>
    </footer>
  );
}
