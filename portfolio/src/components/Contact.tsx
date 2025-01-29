import React, { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Get in Touch</h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          {/* <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                className="form-input"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className="form-input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                rows={5}
                className="form-input"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn-primary w-full">
              Send Message
              <Send size={16} className="ml-2" />
            </button>
          </form> */}

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <a href="mailto:asvimal336@gmail.com" className="contact-card dark:bg-gray-300">
              <Mail className="text-blue-500" size={24} />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">Click to Mail</p>
              </div>
            </a>
            
            <a href="tel:8778402315" className="contact-card dark:bg-gray-300">
              <MessageSquare className="text-green-500" size={24} />
              <div>
                <h3 className="font-semibold">Whatsapp Or Call</h3>
                <p className="text-gray-600">Let's Connect</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;