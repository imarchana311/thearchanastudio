import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Diamond, Camera, Heart, Sparkles, Scissors, Brush, Shirt, MapPin, ChevronDown } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const services = [
  {
    id: "bridal",
    icon: <Diamond className="w-8 h-8" />,
    colSpan: "col-span-1"
  },
  {
    id: "hd",
    icon: <Camera className="w-8 h-8" />,
    colSpan: "col-span-1"
  },
  {
    id: "engagement",
    icon: <Heart className="w-8 h-8" />,
    colSpan: "md:col-span-2 lg:col-span-2",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSbvVGTY-KB60ReBCaWH1geURSykOEDf503i4U3mh048Zesb7FJF4IZFw79HOe4Hm3hVJ0K77Ozn7MS4fBJAjwPAzdJCfBe-V5TQeu3wDqyuwXBMyB8iqZCQvgY-jBjoPiLcIjfD-Z_MiBOLZWcMx0wsUwiJJUPvNBSDMbbu_0Opl7XXKbkoNBMlcve69kQdCbvbLZs7BKpdX6FV2lVf5eFtqSNem6OZmPcyFkE79Rv8rf7XKJvN7sYYsw19TrK4xYNAYsEbqQnTQy"
  },
  {
    id: "party",
    icon: <Sparkles className="w-8 h-8" />,
    colSpan: "col-span-1"
  },
  {
    id: "hairStyling",
    icon: <Scissors className="w-8 h-8" />,
    colSpan: "col-span-1"
  },
  {
    id: "hairChemical",
    icon: <Sparkles className="w-8 h-8" />,
    colSpan: "col-span-1"
  },
  {
    id: "hairCutting",
    icon: <Scissors className="w-8 h-8" />,
    colSpan: "col-span-1"
  },
  {
    id: "nailArt",
    icon: <Brush className="w-8 h-8" />,
    colSpan: "col-span-1"
  },
  {
    id: "saree",
    icon: <Shirt className="w-8 h-8" />,
    colSpan: "col-span-1"
  },
  {
    id: "threading",
    icon: <Scissors className="w-8 h-8" />,
    colSpan: "col-span-1"
  }
];

export default function Services() {
  const { t } = useTranslation();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header className="max-w-7xl mx-auto px-12 pt-32 pb-16 text-center">
        <span className="inline-block mb-4 px-6 py-2 rounded-full bg-primary-container text-on-primary-container font-label text-xs tracking-widest uppercase">{t('services.offerings')}</span>
        <h1 className="font-headline text-5xl md:text-6xl text-primary mb-6 leading-tight">{t('services.title')}</h1>
        <p className="max-w-2xl mx-auto text-on-surface-variant text-lg leading-relaxed">
          {t('services.subtitle')}
        </p>
        <div className="mt-8 flex items-center justify-center gap-3 text-secondary font-medium">
          <MapPin className="w-5 h-5" />
          <span className="font-label tracking-wide uppercase text-sm">{t('services.homeService')}</span>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              id={service.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group bg-white p-8 rounded-xl shadow-gold hover:translate-y-[-4px] transition-all duration-300 flex flex-col h-full scroll-mt-32 ${service.colSpan}`}
            >
              {service.image ? (
                <div className="flex flex-col md:flex-row gap-8 items-center h-full">
                  <div className="flex-1">
                    <div className="mb-6 text-secondary bg-secondary-container/30 w-12 h-12 flex items-center justify-center rounded-xl">
                      {service.icon}
                    </div>
                    <h3 className="font-headline text-3xl text-primary mb-4">{t(`services.${service.id}.title`)}</h3>
                    <p className="text-on-surface-variant text-base mb-6 leading-relaxed">{t(`services.${service.id}.desc`)}</p>
                    <div className="flex flex-wrap gap-4">
                      <NavLink to={`/services/${service.id}`} className="inline-block px-10 py-3 bg-secondary text-white rounded-xl font-medium hover:bg-secondary/90 transition-all">
                        View Details
                      </NavLink>
                      {service.id === "bridal" && (
                        <NavLink to="/contact?service=bridal-trial" className="inline-block px-10 py-3 border border-secondary text-secondary rounded-xl font-medium hover:bg-secondary/5 transition-all">
                          {t('booking.bookTrial')}
                        </NavLink>
                      )}
                    </div>
                  </div>
                  <div 
                    className="w-full md:w-1/2 h-full min-h-[200px] rounded-xl bg-cover bg-center" 
                    style={{ backgroundImage: `url('${service.image}')` }}
                  ></div>
                </div>
              ) : (
                <>
                  <div className="mb-6 text-secondary bg-secondary-container/30 w-12 h-12 flex items-center justify-center rounded-xl">
                    {service.icon}
                  </div>
                  <h3 className="font-headline text-2xl text-primary mb-3">{t(`services.${service.id}.title`)}</h3>
                  <p className="text-on-surface-variant text-sm mb-8 leading-relaxed flex-grow">{t(`services.${service.id}.desc`)}</p>
                  <NavLink to={`/services/${service.id}`} className="w-full text-center text-secondary border border-secondary/20 py-3 rounded-xl font-medium group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    View Details
                  </NavLink>
                </>
              )}
            </motion.div>
          ))}

          <motion.div 
            id="guest"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="group bg-white p-8 rounded-xl shadow-gold hover:translate-y-[-4px] transition-all duration-300 flex flex-col h-full md:col-span-2 lg:col-span-4 scroll-mt-32"
          >
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1 order-2 md:order-1">
                <h3 className="font-headline text-3xl text-primary mb-4">{t('services.guest.title')}</h3>
                <p className="text-on-surface-variant text-base mb-6 leading-relaxed max-w-2xl">{t('services.guest.desc')}</p>
                <div className="flex gap-4">
                  <NavLink to="/services/guest" className="px-10 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all">View Details</NavLink>
                  <NavLink to="/contact" className="px-10 py-3 border border-primary text-primary rounded-xl font-medium hover:bg-primary/5 transition-all">{t('nav.bookNow')}</NavLink>
                </div>
              </div>
              <div 
                className="w-full md:w-1/3 h-48 md:h-64 order-1 md:order-2 rounded-xl bg-cover bg-center" 
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVl6mXyyGf7mT0WVIl1rOQBufrd3Ed4h_ShrOQyc99lKGne_eukw1EAOUPXxR_QIV81_iMc1IfFqxYhqXh8HiTcppl3w7AmD3ma2LWfHkn3na3_g4Wd6RUFHj8_oCMyakkEQY8QcPSRLalFPOskPfXWRQfuJHAj4altmTmbKablh_-Jki-N5ql9YD3Q1qnYMxW5bUOFpstqHClk7kxApFHusXPwU2QmLWlbDdAZ5bkNGXrys0gMhBflCiyC232F4kA-UxrRfPeSDGV')` }}
              ></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-12">
          <div className="text-center mb-20">
            <span className="font-label text-secondary tracking-[0.3em] uppercase text-xs mb-4 block">{t('services.faq.title')}</span>
            <h2 className="font-headline text-4xl md:text-5xl text-primary mb-6 italic">{t('services.faq.title')}</h2>
            <p className="text-on-surface-variant opacity-80 max-w-xl mx-auto">{t('services.faq.subtitle')}</p>
          </div>

          <div className="space-y-4">
            {(t('services.faq.items', { returnObjects: true }) as any[]).map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-12">
        <div className="bg-primary-container p-12 rounded-3xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container/20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>
          <h2 className="font-headline text-4xl text-primary mb-4 relative z-10">{t('services.ctaTitle')}</h2>
          <p className="text-on-primary-container text-lg mb-8 relative z-10 max-w-xl mx-auto">{t('services.ctaDesc')}</p>
          <NavLink to="/contact" className="relative z-10 inline-block bg-secondary text-white px-12 py-4 rounded-xl font-semibold shadow-xl shadow-secondary/20 hover:scale-105 transition-transform">
            {t('services.ctaButton')}
          </NavLink>
        </div>
      </section>
    </motion.div>
  );
}

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-outline-variant">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className="font-headline text-xl text-primary group-hover:text-secondary transition-colors">{question}</span>
        <ChevronDown className={`w-5 h-5 text-secondary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-on-surface-variant leading-relaxed opacity-80">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
