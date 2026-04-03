import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import EstimateForm from '../components/EstimateForm';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      <section className="relative bg-brand-dark py-32 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=1920" 
            alt="Pool Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/70 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            {t('contact_hero_title')}
          </motion.h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            {t('contact_hero_subtitle')}
          </p>
        </div>

        {/* Wave Effect */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-brand-dark">{t('contact_info_title')}</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-brand-light/10 text-brand-light rounded-lg flex items-center justify-center shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-brand-dark">{t('contact_phone_label')}</p>
                      <a href="tel:+14077222606" className="text-slate-600 hover:text-brand-light transition-colors">+1 (407) 722-2606</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-brand-light/10 text-brand-light rounded-lg flex items-center justify-center shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-brand-dark">{t('contact_email_label')}</p>
                      <a href="mailto:sales@waterlandpoolsfl.com" className="text-slate-600 hover:text-brand-light transition-colors">sales@waterlandpoolsfl.com</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-brand-light/10 text-brand-light rounded-lg flex items-center justify-center shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-brand-dark">{t('contact_address_label')}</p>
                      <a 
                        href="https://www.google.com/maps/search/?api=1&query=5973+Windhover+Drive,+Orlando,+FL+32819" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-600 hover:text-brand-light transition-colors"
                      >
                        5973 Windhover Drive, Orlando, FL 32819
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-brand-dark">{t('contact_hours_title')}</h2>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand-light/10 text-brand-light rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark">{t('contact_mon_fri_label')}</p>
                    <p className="text-slate-600">8:00 AM – 5:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h3 className="text-xl font-bold text-brand-dark mb-2">{t('contact_estimates_title')}</h3>
                <p className="text-slate-600 text-sm">{t('contact_estimates_text')}</p>
              </div>
            </div>

            {/* Form */}
            <div>
              <EstimateForm />
            </div>
          </div>
        </div>
      </section>
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100 h-[450px] relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.823932753235!2d-81.46468442379893!3d28.45470497576185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77ef37f7f7f7f%3A0x7f7f7f7f7f7f7f7f!2s5973%20Windhover%20Dr%2C%20Orlando%2C%20FL%2032819!5e0!3m2!1sen!2sus!4v1711880000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Waterland Pools Location"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 hidden md:block group-hover:translate-y-[-10px] transition-transform duration-300">
              <p className="font-bold text-brand-dark">Waterland Pools</p>
              <p className="text-xs text-slate-500">5973 Windhover Drive, Orlando, FL 32819</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
