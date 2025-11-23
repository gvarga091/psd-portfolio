import { motion } from 'motion/react';
import { ArrowRight, Mail, Linkedin, Phone, Facebook } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  const contactText = t.contact || {
    title: 'Contact',
    subtitle: '...',
    form: { send: 'Send' },
  };

  const handleBookingClick = () => {
    // Replace with your actual booking link (e.g., Calendly)
    window.open('https://calendly.com/your-link', '_blank');
  };

  return (
    <section id="contact" className="py-32 bg-[#0a0a0f] text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{contactText.title}</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
            {contactText.subtitle}
          </p>
          
          {/* Booking Button */}
          <button
            onClick={handleBookingClick}
            className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full transition-all shadow-lg shadow-blue-500/40 transform hover:scale-105 mb-16"
          >
            {contactText.form.send}
            <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Direct Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 text-gray-400 max-w-4xl mx-auto">
            <a 
              href="mailto:gvarga091@gmail.com"
              className="flex items-center justify-center gap-2 hover:text-blue-400 transition-colors text-sm md:text-base"
            >
              <Mail size={20} className="flex-shrink-0" />
              <span className="truncate">gvarga091@gmail.com</span>
            </a>
            <a 
              href="tel:+36705668606"
              className="flex items-center justify-center gap-2 hover:text-blue-400 transition-colors text-sm md:text-base"
            >
              <Phone size={20} className="flex-shrink-0" />
              <span>+36 70 566 8606</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/gvarga091"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 hover:text-blue-400 transition-colors text-sm md:text-base"
            >
              <Linkedin size={20} className="flex-shrink-0" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://www.facebook.com/gvarga091"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 hover:text-blue-400 transition-colors text-sm md:text-base"
            >
              <Facebook size={20} className="flex-shrink-0" />
              <span>Facebook</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}