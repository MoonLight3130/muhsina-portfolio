import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Sparkles,
} from 'lucide-react';
import { FacebookIcon, TwitterIcon, LinkedInIcon, GitHubIcon } from './SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side quick checks
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus({
        submitting: false,
        success: false,
        message: 'Please fill in all required fields.',
      });
      return;
    }

    setStatus({ submitting: true, success: null, message: '' });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_v3h1iub';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_j7rbd8n';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '_rJHuuveLb5qtYUze';

      const templateParams = {
        name: formData.name,
        from_name: formData.name,
        email: formData.email,
        from_email: formData.email,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus({
        submitting: false,
        success: true,
        message: 'Thank you! Your message has been sent successfully.',
      });
      // Clear form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Contact submission error:', error);
      setStatus({
        submitting: false,
        success: false,
        message: error?.text || 'Failed to send message. Please try again later.',
      });
    }
  };

  return (
    <section id="contact" className="relative py-24 border-t border-purple-900/20">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/30 text-fuchsia-400 text-xs sm:text-sm font-semibold mb-4 shadow-[0_0_15px_rgba(217,70,239,0.2)]">
            <Sparkles className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let’s Build Something <span className="gradient-text-purple">Extraordinary</span>
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Have an exciting project, full-time role, or collaboration in mind? Drop me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left Column: Direct Contact Details & Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Let's Discuss Your Next Venture
              </h3>
              <p className="text-slate-300 text-base leading-relaxed mb-8">
                I'm always receptive to discussing new product architectures, full-time opportunities, high-profile freelance contracts, or creative partnerships.
              </p>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                <a
                  href="mailto:chandni.chauhan@example.com"
                  className="glass-card p-4 flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-950/50 border border-purple-500/30 flex items-center justify-center text-fuchsia-400 group-hover:border-fuchsia-500 group-hover:bg-purple-900/40 transition">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">EMAIL ADDRESS</p>
                    <p className="text-sm font-semibold text-white group-hover:text-fuchsia-300 transition">
                      muhsinashaheer127@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+919747133559"
                  className="glass-card p-4 flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-950/50 border border-purple-500/30 flex items-center justify-center text-fuchsia-400 group-hover:border-fuchsia-500 group-hover:bg-purple-900/40 transition">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">PHONE NUMBER</p>
                    <p className="text-sm font-semibold text-white group-hover:text-fuchsia-300 transition">
                      +91  9747133559
                    </p>
                  </div>
                </a>

                <div className="glass-card p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-950/50 border border-purple-500/30 flex items-center justify-center text-fuchsia-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">LOCATION</p>
                    <p className="text-sm font-semibold text-white">
                      Kollam, Kerala, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons & Status */}
            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-4">
                Connect on Social Networks
              </p>
              <div className="flex items-center space-x-3">
                <a
                  href="https://mailto:[muhsinashaheer127@gmail.com]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn group"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4 transition group-hover:scale-110" />
                </a>

                <a
                  href="https://linkedin.com/in/muhsina-s-a015a6350"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn group"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4 transition group-hover:scale-110" />
                </a>
                <a
                  href="https://github.com/muhsinashaheer127-dotcom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn group"
                  aria-label="GitHub"
                >
                  <GitHubIcon className="w-4 h-4 transition group-hover:scale-110" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 border border-purple-500/25 relative">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">

              </h3>


              {/* Status Alert Notification */}
              {status.message && (
                <div
                  className={`p-4 rounded-xl mb-6 flex items-start gap-3 text-sm font-medium ${status.success
                    ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-300'
                    : 'bg-rose-950/60 border border-rose-500/40 text-rose-300'
                    }`}
                >
                  {status.success ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0 text-emerald-400 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-400 mt-0.5" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-slate-300 mb-2"
                    >
                      Your Name <span className="text-fuchsia-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jacob"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#090614]/80 border border-purple-900/40 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-slate-300 mb-2"
                    >
                      Your Email <span className="text-fuchsia-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@company.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#090614]/80 border border-purple-900/40 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold text-slate-300 mb-2"
                  >
                    Subject <span className="text-fuchsia-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Project Enquiry / Hiring"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#090614]/80 border border-purple-900/40 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-slate-300 mb-2"
                  >
                    Your Message <span className="text-fuchsia-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share the details of your project and requirements..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#090614]/80 border border-purple-900/40 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full btn-primary-glow flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-white text-base font-semibold cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status.submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
