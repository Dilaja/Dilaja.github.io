import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-800/50 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-700 pb-3 text-center">Get In Touch</h2>
        <p className="text-slate-300 text-center mb-10">
          I'm actively looking for full-stack opportunities in Finland and beyond. Feel free to reach out!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-center">
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <h3 className="text-cyan-400 font-semibold mb-1">Email</h3>
            <a href="mailto:dilipajantha@gmail.com" className="text-slate-300 text-sm hover:underline">dilipajantha@gmail.com</a>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <h3 className="text-cyan-400 font-semibold mb-1">Phone</h3>
            <a href="tel:+358417222602" className="text-slate-300 text-sm hover:underline">+358 41 722 2602</a>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <h3 className="text-cyan-400 font-semibold mb-1">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/dilip-ajantha" target="_blank" rel="noreferrer" className="text-slate-300 text-sm hover:underline">View Profile</a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-lg border border-slate-700 space-y-6 shadow-lg">
          {submitted ? (
            <div className="text-center py-6 text-cyan-400 font-semibold text-lg">
              Thank you for your message! I will get back to you shortly.
            </div>
          ) : (
            <>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                <input required type="text" className="w-full bg-slate-900 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-cyan-400" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Your Email</label>
                <input required type="email" className="w-full bg-slate-900 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-cyan-400" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea required rows="4" className="w-full bg-slate-900 border border-slate-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-cyan-400" placeholder="Let's talk about..." />
              </div>
              <button type="submit" className="w-full bg-cyan-400 text-slate-900 font-semibold py-3 rounded-md hover:bg-cyan-500 transition-colors shadow-md">
                Send Message
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}