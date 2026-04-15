import { motion } from 'motion/react';
import { Star, Quote, MessageSquare } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Testimonials() {
  const { t } = useTranslation();
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-background"
    >
      <header className="max-w-7xl mx-auto px-12 pt-32 pb-16 text-center">
        <span className="inline-block mb-4 px-6 py-2 rounded-full bg-primary-container text-on-primary-container font-label text-xs tracking-widest uppercase">{t('testimonials.subtitle')}</span>
        <h1 className="font-headline text-5xl md:text-6xl text-primary mb-6 leading-tight">{t('testimonials.title')}</h1>
        <p className="max-w-2xl mx-auto text-on-surface-variant text-lg leading-relaxed">
          {t('testimonials.description')}
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(t('home.testimonials.items', { returnObjects: true }) as any[]).map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl luxury-shadow flex flex-col relative"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-primary/5" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                ))}
              </div>
              <p className="text-on-surface-variant leading-relaxed italic mb-8 flex-grow">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-outline-variant/30">
                <div className="w-12 h-12 rounded-full bg-primary-container overflow-hidden">
                  <img 
                    src={[
                      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
                      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
                      "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=100&h=100&fit=crop"
                    ][index]} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">{testimonial.name}</h4>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-12">
        <div className="bg-secondary-container/20 p-12 rounded-3xl text-center border border-secondary/10">
          <MessageSquare className="w-12 h-12 text-secondary mb-6 mx-auto" />
          <h2 className="font-headline text-3xl text-primary mb-4">{t('testimonials.cta.title')}</h2>
          <p className="text-on-surface-variant text-lg mb-8 max-w-xl mx-auto">
            {t('testimonials.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/contact" className="bg-primary text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform">
              {t('testimonials.cta.submit')}
            </NavLink>
            <NavLink to="/portfolio" className="bg-white text-primary border border-primary/20 px-10 py-4 rounded-xl font-semibold hover:bg-primary/5 transition-colors">
              {t('testimonials.cta.viewWork')}
            </NavLink>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
