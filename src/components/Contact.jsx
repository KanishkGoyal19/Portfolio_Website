"use client";
import React, { useState } from "react";

const Contact = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handler to update state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="bg-black-100 py-16 px-8 md:px-20 relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">Contact Me</h2>
        <p className="text-center text-white mb-12">
          Have a question or want to work together? Drop me a message below or connect via social media.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 relative z-10">
          {/* Form Section */}
          <form
            action="https://formspree.io/f/mjkgyqaw" // Replace with your Formspree URL or backend endpoint
            method="POST"
            className="bg-black shadow-lg rounded-2xl p-8 space-y-6 flex-grow"
          >
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-white mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-black"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-black"
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-white mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-black"
              />
            </div>

            {/* Send Button */}
            <button
              type="submit"
              className="bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-200 mt-4"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info Section */}
          <div className="bg-black shadow-lg rounded-xl p-8 flex flex-col items-start space-y-6">
            <div className="flex items-center space-x-4">
              <img
                src="/Images/phone.svg"
                alt="Phone"
                className="w-6 h-6 filter invert"
              />
              <span className="text-white">+1 (365)-883-4072</span>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="/Images/email.svg"
                alt="Email"
                className="w-6 h-6 filter invert"
              />
              <span className="text-white">Kanishkgoyal19@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="/Images/location.svg"
                alt="Location"
                className="w-6 h-6 filter invert"
              />
              <span className="text-white">67, Voyager Pass, Binbrook, ON</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/KanishkGoyal19" target="_blank" rel="noopener noreferrer">
                <img
                  src="/Images/github.svg"
                  alt="GitHub"
                  className="w-8 h-8 hover:scale-110 transition-transform filter invert"
                />
              </a>
              <a href="https://www.linkedin.com/in/kanishkgoyal19/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/Images/linkedin.svg"
                  alt="LinkedIn"
                  className="w-8 h-8 hover:scale-110 transition-transform filter invert"
                />
              </a>
              <a
               href="Images/Resume.pdf"
               download
            >
               <img
                  src="Images/download.svg"
                  alt="Download Icon"
                  className="w-8 h-8 hover:scale-110 transition-transform filter invert"
               />
            </a>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Contact;
