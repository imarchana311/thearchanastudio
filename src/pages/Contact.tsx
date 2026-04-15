import { motion, AnimatePresence } from 'motion/react';
import { Send, Facebook, Instagram, Youtube, MapPin, Mail, Phone, Loader2, ChevronDown } from 'lucide-react';
import BookingSystem from '../components/BookingSystem';
import { useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { handleError } from '../lib/error-handler';
import { toast } from 'sonner';

export default function Contact() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [subject, setSubject] = useState('Bridal Consultation');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() < 0.1) {
            reject(new Error('Failed to send message. Please check your connection and try again.'));
          } else {
            resolve(true);
          }
        }, 1500);
      });
      
      toast.success('Message sent successfully!', {
        description: 'We will get back to you as soon as possible.',
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      handleError(error, 'ContactForm');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const service = searchParams.get('service');
    if (service === 'bridal-trial') {
      setSubject('Bridal Makeup Trial');
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [searchParams]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-6 md:px-12 max-w-[1400px] mx-auto"
    >
      <header className="pt-32 pb-16 max-w-2xl">
        <h1 className="font-headline text-5xl md:text-6xl text-primary mb-6 leading-tight">{t('contact.title')}</h1>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          {t('contact.subtitle')}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 py-16">
        <div className="lg:col-span-12">
          <BookingSystem />
        </div>

        <div className="lg:col-span-7 bg-white rounded-xl p-8 md:p-12 shadow-xl shadow-primary/5">
          <h2 className="font-headline text-3xl text-secondary mb-8">{t('contact.form.title')}</h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2">{t('contact.form.name')}</label>
                <input required className="w-full bg-transparent border-b border-outline-variant py-3 focus:border-primary focus:ring-0 outline-none transition-colors text-on-surface" placeholder="Archana Shah" type="text"/>
              </div>
              <div className="relative">
                <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2">{t('contact.form.email')}</label>
                <input required className="w-full bg-transparent border-b border-outline-variant py-3 focus:border-primary focus:ring-0 outline-none transition-colors text-on-surface" placeholder="archana@studio.com" type="email"/>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2">{t('contact.info.phone')}</label>
                <input required className="w-full bg-transparent border-b border-outline-variant py-3 focus:border-primary focus:ring-0 outline-none transition-colors text-on-surface" placeholder="+91 90161 22911" type="tel"/>
              </div>
              <div className="relative">
                <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2">{t('contact.form.subject')}</label>
                <select 
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-transparent border-b border-outline-variant py-3 focus:border-primary focus:ring-0 outline-none transition-colors text-on-surface"
                >
                  <option>Bridal Consultation</option>
                  <option>Bridal Makeup Trial</option>
                  <option>Bridal Makeup</option>
                  <option>HD Makeup</option>
                  <option>Engagement Makeup</option>
                  <option>Party Makeup</option>
                  <option>Guest Makeup Package</option>
                  <option>Hair Styling</option>
                  <option>Hair Chemical Treatment</option>
                  <option>Hair Cutting</option>
                  <option>Nail Art</option>
                  <option>Saree Draping</option>
                  <option>Eyebrow Threading</option>
                  <option>Skin Care</option>
                  <option>Studio Session</option>
                  <option>General Inquiry</option>
                </select>
              </div>
            </div>
            <div className="relative">
              <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2">{t('contact.form.message')}</label>
              <textarea required className="w-full bg-transparent border-b border-outline-variant py-3 focus:border-primary focus:ring-0 outline-none transition-colors text-on-surface resize-none" placeholder="Tell us about your requirements..." rows={4}></textarea>
            </div>
            <button 
              disabled={isSubmitting}
              className={`
                bg-primary text-on-primary w-full md:w-auto px-12 py-4 rounded-xl font-medium tracking-wide transition-all flex items-center justify-center gap-3
                ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:bg-primary/90 active:scale-95'}
              `}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  {t('contact.form.send')}
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        <aside className="lg:col-span-5 space-y-12">
          <div className="bg-surface-variant rounded-xl p-8">
            <h3 className="font-headline text-xl text-primary mb-6">{t('contact.info.title')}</h3>
            <div className="flex gap-4">
              <a className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary hover:shadow-gold hover:scale-110 hover:text-secondary transition-all" href="https://www.facebook.com/TheArchanaStudio" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5" />
              </a>
              <a className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary hover:shadow-gold hover:scale-110 hover:text-secondary transition-all" href="https://www.instagram.com/thearchana_studio" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
              </a>
              <a className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary hover:shadow-gold hover:scale-110 hover:text-secondary transition-all" href="https://www.youtube.com/@thearchanastudio" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-5 h-5" />
              </a>
              <a className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary hover:shadow-gold hover:scale-110 hover:text-secondary transition-all" href="https://wa.me/919016122911" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-headline text-2xl text-secondary">{t('about.studios.title')}</h3>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-64 bg-surface-variant">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.768132646638!2d73.1934983!3d22.248834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc42036465773%3A0x66f6f0f0f0f0f0f0!2sRadhe%20Residency!5e0!3m2!1sen!2sin!4v1712820000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vadodara Studio Map"
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Makarpura, Vadodara</h4>
                    <p className="text-on-surface-variant text-sm mt-1">B102, Radhe Residency, Makarpura, Vadodara.</p>
                  </div>
                </div>
                <a 
                  href="https://maps.app.goo.gl/VadodaraStudioLink" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2 text-sm font-medium text-primary border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-64 bg-surface-variant">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.583201234567!2d72.6789012!3d23.0456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e870000000001%3A0x1234567890abcdef!2sNikol%2C%20Ahmedabad!5e0!3m2!1sen!2sin!4v1712820000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ahmedabad Studio Map"
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Nikol, Ahmedabad</h4>
                    <p className="text-on-surface-variant text-sm mt-1">B41, Haridham Society, Nikol, Ahmedabad.</p>
                  </div>
                </div>
                <a 
                  href="https://maps.app.goo.gl/AhmedabadStudioLink" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2 text-sm font-medium text-primary border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-label text-secondary tracking-[0.3em] uppercase text-xs mb-4 block">{t('contact.faq.subtitle')}</span>
            <h2 className="font-headline text-4xl text-primary mb-4">{t('contact.faq.title')}</h2>
            <p className="text-on-surface-variant">{t('contact.faq.description')}</p>
          </div>

          <div className="space-y-4">
            {(t('contact.faq.items', { returnObjects: true }) as any[]).map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30"
              >
                <button 
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full p-8 flex items-center justify-between text-left hover:bg-surface-variant/20 transition-colors group"
                >
                  <h4 className="font-headline text-xl text-primary">{faq.q}</h4>
                  <ChevronDown 
                    className={`w-5 h-5 text-secondary transition-transform duration-300 ${openFaqIndex === i ? 'rotate-180' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {openFaqIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-8 pb-8 pt-0">
                        <p className="text-on-surface-variant leading-relaxed border-t border-outline-variant/10 pt-6">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
