import React, { useState } from 'react';
import { portfolioData } from '../data/mock';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const { contact } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission - in real implementation, this would send to backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-[#1a1c1b]">
      <div className="max-w-[87.5rem] mx-auto px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 
            className="text-[#d9fb06] mb-6"
            style={{
              fontFamily: "'PP Right Grotesk', Arial, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3rem, 4rem + 1vw, 5rem)",
              lineHeight: 0.76,
              textTransform: "uppercase",
              letterSpacing: "0px"
            }}
          >
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-[#d9fb06] rounded-full mx-auto"></div>
          <p className="text-[#888680] text-lg mt-6 max-w-2xl mx-auto">
            Ready to discuss your next project or explore potential collaborations? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-[#d9fb06] text-2xl font-bold mb-8">
              Get in Touch
            </h3>
            
            <div className="space-y-6 mb-12">
              {/* Email */}
              <div className="flex items-center gap-4 p-6 bg-[#302f2c] rounded-lg border border-[#3f4816] hover:border-[#888680] transition-all duration-300">
                <div className="w-12 h-12 bg-[#d9fb06] rounded-full flex items-center justify-center">
                  <Mail size={20} className="text-[#1a1c1b]" />
                </div>
                <div>
                  <div className="text-[#d9fb06] font-medium">Email</div>
                  <a 
                    href={`mailto:${contact.email}`}
                    className="text-[#888680] hover:text-[#d9fb06] transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-6 bg-[#302f2c] rounded-lg border border-[#3f4816] hover:border-[#888680] transition-all duration-300">
                <div className="w-12 h-12 bg-[#d9fb06] rounded-full flex items-center justify-center">
                  <Phone size={20} className="text-[#1a1c1b]" />
                </div>
                <div>
                  <div className="text-[#d9fb06] font-medium">Phone</div>
                  <a 
                    href={`tel:${contact.phone}`}
                    className="text-[#888680] hover:text-[#d9fb06] transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-6 bg-[#302f2c] rounded-lg border border-[#3f4816] hover:border-[#888680] transition-all duration-300">
                <div className="w-12 h-12 bg-[#d9fb06] rounded-full flex items-center justify-center">
                  <MapPin size={20} className="text-[#1a1c1b]" />
                </div>
                <div>
                  <div className="text-[#d9fb06] font-medium">Location</div>
                  <div className="text-[#888680]">{contact.location}</div>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-[#3f4816] p-6 rounded-lg border border-[#888680]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-[#d9fb06] rounded-full animate-pulse"></div>
                <span className="text-[#d9fb06] font-bold">Current Status</span>
              </div>
              <p className="text-[#d9fb06] font-medium">{contact.availability}</p>
              <p className="text-[#888680] text-sm mt-2">
                Preferred contact method: {contact.preferredContact}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-[#d9fb06] text-2xl font-bold mb-8">
              Send a Message
            </h3>

            {isSubmitted ? (
              <div className="bg-[#3f4816] p-8 rounded-lg border border-[#888680] text-center">
                <CheckCircle size={48} className="text-[#d9fb06] mx-auto mb-4" />
                <h4 className="text-[#d9fb06] text-xl font-bold mb-2">
                  Message Sent!
                </h4>
                <p className="text-[#888680]">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-[#d9fb06] font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#302f2c] border border-[#3f4816] rounded-lg px-4 py-3 text-[#d9fb06] placeholder-[#888680] focus:border-[#d9fb06] focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-[#d9fb06] font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#302f2c] border border-[#3f4816] rounded-lg px-4 py-3 text-[#d9fb06] placeholder-[#888680] focus:border-[#d9fb06] focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-[#d9fb06] font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#302f2c] border border-[#3f4816] rounded-lg px-4 py-3 text-[#d9fb06] placeholder-[#888680] focus:border-[#d9fb06] focus:outline-none transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[#d9fb06] font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full bg-[#302f2c] border border-[#3f4816] rounded-lg px-4 py-3 text-[#d9fb06] placeholder-[#888680] focus:border-[#d9fb06] focus:outline-none transition-colors resize-vertical"
                    placeholder="Tell me about your project or how I can help..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-primary bg-[#d9fb06] text-[#1a1c1b] border-none rounded-[10rem] px-8 py-4 font-semibold text-base cursor-pointer transition-all duration-300 hover:scale-105 hover:opacity-90 uppercase tracking-tight w-full flex items-center justify-center gap-3"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;