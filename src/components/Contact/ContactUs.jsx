// components/ContactUs.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaArrowRight,
  FaGem,
  FaStar
} from "react-icons/fa";
import HeaderContent from "../Helper/HeaderContent";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = `*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Project Type:* ${formData.projectType || 'Not specified'}
*Message:* ${formData.message}`;
    
    // WhatsApp number
    const whatsappNumber = '919414047471';
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Show success message
    alert('Redirecting to WhatsApp...');
    
    // Reset form
    setFormData({ name: '', email: '', projectType: '', message: '' });
  };
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative h-[60vh] md:h-[50vh] md:pt-40 md:pb-15  flex items-center justify-center overflow-hidden">
        {/* Enhanced Background with Improved Color Harmony */}
        <div className="absolute inset-0">
          {/* Primary Color Background with Better Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0E5543] via-[#0d0d0d] to-[#0d0d0d]"></div>

          {/* Animated Texture Overlay */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(14,85,67,0.1)_50%,transparent_75%)] bg-[length:250px_250px] animate-pulse-slow"></div>
          </div>

          {/* Accent Elements with Better Color Balance */}
          <div className="absolute top-1/4 -left-10 w-32 h-32 bg-[#0E5543]/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 -right-10 w-40 h-40 bg-[#0E5543]/15 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-[#F2E1C5]/10 rounded-full blur-lg"></div>

          {/* Subtle Pattern with Improved Contrast */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,#0E5543/5,transparent_50%)]"></div>
        </div>

        <div className="absolute inset-0">
          <img
            src="/contactus.jpg"
            alt="Luxury Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E5543]/30 via-[#0E5543]/50 to-[#0d0d0d]"></div>
        </div>

        <HeaderContent
          tagline="Get in Touch"
          title="Connect With Us"
          subtitle="Our team is ready to assist you with your marble projects. Experience personalized guidance and premium service every step of the way."
          theme="dark"
        />

      </section>

      {/* Main Contact Section */}
      <section className="relative py-16 px-4 max-w-7xl mx-auto  bg-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 "></div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Header */}
            <div>
              <h2 className="text-3xl md:text-4xl font-['Cormorant_Garamond'] font-bold text-[#0E5543] mb-4">
                Get In Touch
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-full mb-4"></div>
              <p className="text-[#0E5543]/80 font-['Source_Serif_Pro'] text-lg leading-relaxed">
                Our team of marble specialists is ready to bring your vision to life with premium craftsmanship and exceptional service.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-6">
              {[
                {
                  icon: FaPhoneAlt,
                  title: "Phone",
                  content: "+91 94141 65062",
                  subtext: "Mon-Sun: 6:00 AM - 9:00 PM",
                  color: "from-[#0E5543] to-[#1A7A62]"
                },
                {
                  icon: FaEnvelope,
                  title: "Email",
                  content: "rishabhgreenminerals@gmail.com",
                  subtext: "Response within 4 hours",
                  color: "from-[#1A7A62] to-[#2D8C6E]"
                },
                {
                  icon: FaMapMarkerAlt,
                  title: " Office Address",
                  content: "Araji No. 114, NH. 8",
                  subtext: "Sukher, Udaipur – 313001, Rajasthan, IND",
                  color: "from-[#0E5543] to-[#1A7A62]"
                },
                {
                  icon: FaClock,
                  title: "Business Hours",
                  content: "Monday - Saturday",
                  subtext: "9:00 AM - 7:00 PM",
                  color: "from-[#1A7A62] to-[#2D8C6E]"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white backdrop-blur-sm border border-[#0E5543]/10 hover:border-[#0E5543]/30 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <item.icon className="text-lg text-[#F2E1C5]" />
                  </div>
                  <div>
                    <h3 className="font-['Inter'] font-semibold text-[#0E5543]">{item.title}</h3>
                    <p className="text-[#0E5543] font-medium">{item.content}</p>
                    <p className="text-[#0E5543]/70 text-sm">{item.subtext}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <h3 className="font-['Inter'] font-semibold text-[#0E5543] mb-4">Follow Our Journey</h3>
              <div className="flex gap-3">
                {[FaInstagram, FaFacebookF, FaLinkedinIn].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-lg flex items-center justify-center text-[#F2E1C5] hover:shadow-lg transition-all duration-300"
                  >
                    <Icon className="text-sm" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-[#0E5543]/10 overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-[#0E5543] to-[#1A7A62] p-6 text-center">
                <h3 className="text-2xl font-['Cormorant_Garamond'] font-bold text-[#F2E1C5]">
                  Send Us a Message
                </h3>
                <p className="text-[#F2E1C5]/80 font-['Source_Serif_Pro']">We'll respond within 24 hours</p>
              </div>

              {/* Form Content */}
              <div className="p-6 md:p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-['Inter'] font-medium text-[#0E5543] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#F2E1C5]/10 border border-[#0E5543]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0E5543]/30 focus:border-[#0E5543] text-[#0E5543] placeholder-[#0E5543]/50 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-['Inter'] font-medium text-[#0E5543] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#F2E1C5]/10 border border-[#0E5543]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0E5543]/30 focus:border-[#0E5543] text-[#0E5543] placeholder-[#0E5543]/50 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-['Inter'] font-medium text-[#0E5543] mb-2">
                      Project Type
                    </label>
                    <select 
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#F2E1C5]/10 border border-[#0E5543]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0E5543]/30 focus:border-[#0E5543] text-[#0E5543] transition-all duration-300"
                    >
                      <option value="">Select project type</option>
                      <option value="Residential Marble">Residential Marble</option>
                      <option value="Commercial Project">Commercial Project</option>
                      <option value="Marble Restoration">Marble Restoration</option>
                      <option value="Consultation">Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-['Inter'] font-medium text-[#0E5543] mb-2">
                      Message *
                    </label>
                    <textarea
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#F2E1C5]/10 border border-[#0E5543]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0E5543]/30 focus:border-[#0E5543] text-[#0E5543] placeholder-[#0E5543]/50 resize-none transition-all duration-300"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] text-[#F2E1C5] font-['Inter'] font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <FaArrowRight className="text-sm" />
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Map Section */}
      <section className="relative py-20 px-4 sm:px-6 bg-[#0E5543]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light mb-4 text-[#F2E1C5]">
              Visit Our <span className="text-[#F2E1C5]">Office Address</span>
            </h2>
            <p className="text-[#F2E1C5]/70 text-lg max-w-2xl mx-auto">
              Experience our premium ceramic collections in person at our luxurious Office Address
            </p>
          </div>

          <div 
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#0E5543]/30 cursor-pointer"
            onClick={() => window.open('https://maps.google.com/?q=Araji+No.+114,+NH.+8,+Sukher,+Udaipur+313001,+Rajasthan,+India', '_blank')}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0E5543]/20 to-[#F2E1C5]/10 z-10 pointer-events-none"></div>
            <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14505.737118653076!2d73.70916980336501!3d24.643175792274544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5007f115f6d%3A0x98f10b58f37a4f3e!2sRishabh%20Green%20Marbles%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1764654468178!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="pointer-events-none"
    ></iframe>

            {/* Map Overlay Info */}
            <div className="absolute bottom-6 left-6 z-20 bg-[#0d0d0d]/90 backdrop-blur-sm p-4 rounded-xl border border-[#0E5543]/30 max-w-xs pointer-events-none">
              <h3 className="text-[#F2E1C5] font-medium mb-1">Siramic Stone Gallery</h3>
              <p className="text-[#F2E1C5]/70 text-sm">Araji No. 114, NH. 8, Sukher, Udaipur – 313001, Rajasthan, IND</p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: FaClock, title: "Visit Us", text: "Mon-Sat: 9AM-7PM" },
              { icon: FaPhoneAlt, title: "Call", text: "+91 84338 20920" },
              { icon: FaStar, title: "Premium Service", text: "By appointment only" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F2E1C5]/10 backdrop-blur-sm rounded-xl p-6 text-center border border-[#F2E1C5]/20"
              >
                <item.icon className="text-2xl text-[#F2E1C5] mx-auto mb-3" />
                <h4 className="font-['Inter'] font-semibold text-[#F2E1C5]">{item.title}</h4>
                <p className="text-[#F2E1C5]/80 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default ContactUs;