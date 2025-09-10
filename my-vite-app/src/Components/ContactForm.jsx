import React from 'react';

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="p-2 md:p-5">
        <div className="bg-black text-white rounded-xl md:rounded-3xl min-h-[calc(100vh-16px)] md:min-h-[calc(100vh-40px)]">
          <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left Column - Contact Info */}
              <div className="space-y-6 md:space-y-8 px-0 md:px-18">
                <div>
                  <p className="bg-gray-800 text-white text-sm md:text-base px-3 py-1 rounded-full inline-block mb-2">Contact</p>
                  <h1 className="text-3xl md:text-6xl font-light mb-4 md:mb-6">Get in touch</h1>
                  <p className="text-gray-300 text-base md:text-xl leading-relaxed">
                    For any inquiries or to explore your vision further, we invite you to contact our professional team
                    using the details provided below.
                  </p>
                </div>

                <div className="space-y-4 md:space-y-6">
                  {/* Mobile: Stack layout */}
                  <div className="block md:flex md:justify-between md:items-start">
                    <span className="text-gray-300 font-medium text-base md:text-lg block mb-1 md:mb-0">Office</span>
                    <span className="text-white text-base md:text-lg md:text-right block">150 Old Park Ln, London W1K 1QZ</span>
                  </div>

                  <div className="block md:flex md:justify-between md:items-start">
                    <span className="text-gray-300 font-medium text-base md:text-lg block mb-1 md:mb-0">Email</span>
                    <span className="text-white text-base md:text-lg block">hello@refit.com</span>
                  </div>

                  <div className="block md:flex md:justify-between md:items-start">
                    <span className="text-gray-300 font-medium text-base md:text-lg block mb-1 md:mb-0">Telephone</span>
                    <span className="text-white text-base md:text-lg block">07716 534984</span>
                  </div>
                </div>

                <div className="pt-6 md:pt-8">
                  <p className="text-gray-300 font-medium mb-3 md:mb-4 text-base md:text-lg">Follow us</p>
                  <div className="flex gap-4">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white hover:text-gray-300 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="m16 11.37-.76-.68a6 6 0 0 1-1.93-2.37c-.24-.5-.24-1.1 0-1.6A6 6 0 0 1 15.24 4.31L16 3.63"/>
                      <circle cx="9" cy="9" r="2"/>
                      <path d="m21 21-4.35-4.35"/>
                    </svg>
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white hover:text-gray-300 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="9" cy="18" r="3"/>
                      <path d="m21 3-6 6-2-2-6 6"/>
                      <path d="m21 21-6-6"/>
                    </svg>
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white hover:text-gray-300 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="m18 6-12 12"/>
                      <path d="m6 6 12 12"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 mt-6 lg:mt-0">
                <form className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="name" className="text-black font-medium text-sm md:text-base">
                      Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      placeholder="John Smith"
                      className="w-full mt-1 md:mt-2 px-3 py-2.5 md:py-2 border border-gray-200 bg-gray-50 text-black placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-black font-medium text-sm md:text-base">
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="johnsmith@gmail.com"
                      className="w-full mt-1 md:mt-2 px-3 py-2.5 md:py-2 border border-gray-200 bg-gray-50 text-black placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-black font-medium text-sm md:text-base">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      placeholder="+44789 123456"
                      className="w-full mt-1 md:mt-2 px-3 py-2.5 md:py-2 border border-gray-200 bg-gray-50 text-black placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-black font-medium text-sm md:text-base">
                      Message<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      placeholder="Hello, I'd like to enquire about..."
                      className="w-full mt-1 md:mt-2 px-3 py-2.5 md:py-2 border border-gray-200 bg-gray-50 text-black placeholder:text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                      rows="3"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-gray-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-500 transition duration-200 text-sm md:text-base"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;