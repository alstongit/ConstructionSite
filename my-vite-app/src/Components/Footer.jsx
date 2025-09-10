import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black min-h-screen flex flex-col justify-center py-12 md:py-20">
      <div id="footer-content" className="max-w-7xl mx-auto px-4 md:px-6 w-full" style={{ opacity: 0 }}>
        {/* Logo Section */}
        <div className="text-center md:text-left mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white">ConstructionSite</h1>
        </div>

        {/* Description */}
        <div className="mb-10 md:mb-16 text-center md:text-left">
          <p className="text-gray-300 text-base md:text-xl leading-relaxed max-w-4xl mx-auto md:mx-0">
            Building the future with innovative construction solutions. We deliver exceptional quality 
            and craftsmanship in every project.
          </p>
        </div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-10 md:mb-16">
          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-base md:text-lg mb-3 md:mb-6">Company</h3>
            <ul className="space-y-2 md:space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Our Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">News</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-base md:text-lg mb-3 md:mb-6">Services</h3>
            <ul className="space-y-2 md:space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Commercial</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Residential</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Renovation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Consulting</a></li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-white font-semibold text-base md:text-lg mb-3 md:mb-6">Projects</h3>
            <ul className="space-y-2 md:space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Portfolio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Featured Work</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">Testimonials</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-base md:text-lg mb-3 md:mb-6">Contact</h3>
            <ul className="space-y-2 md:space-y-4">
              <li className="text-gray-300 text-sm md:text-base">Construction Ave</li>
              <li className="text-gray-300 text-sm md:text-base">Building City, BC</li>
              <li><a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">+1 (234) 567-890</a></li>
              <li><a href="mailto:info@constructionsite.com" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base break-all">info@constructionsite.com</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="border-t border-gray-700 pt-6 md:pt-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-0">
            {/* Social Media */}
            <div className="flex gap-4 md:gap-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="m16 11.37-.76-.68a6 6 0 0 1-1.93-2.37c-.24-.5-.24-1.1 0-1.6A6 6 0 0 1 15.24 4.31L16 3.63"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-xs md:text-sm text-center md:text-right">
              © 2024 ConstructionSite. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;