import { motion, useMotionValue, useTransform, animate, useInView, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Star, Heart, Diamond, Scissors, Instagram, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';

function Counter({ value, suffix = "" }: { value: number, suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Home() {
  const { t } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = (t('home.testimonials.items', { returnObjects: true }) as any[]).slice(0, 5);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            alt="Sophisticated ethereal portrait"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuARsNjFakKDS1IoIXmJkr4IljyYxsUUVLL3JjfpoMKPrgGvRdBGrPVtYy1wBIfJJdypLuTGVCKbwWcdCuFqG0YJx-vLOmViz0Dr8ZcheD1XpgGtUVnCBfwK-1VpG79rA4uh-HvgAM_b1BnBFJzbMS0u9A_pCZ1JnVJ5PhnbbOwI8JQNn5xG4UuxR1KjcdIjXoY256UiqUptfe-RaDKVI8-lPUGeeA1ESkZrThOicE7EjjHqYytL0sinyUuJh0jyonnvyDhn5EEK5f_U"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
        </div>
        <div className="container mx-auto px-12 relative z-10">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-label text-secondary font-semibold tracking-[0.2em] uppercase text-sm mb-6 block"
            >
              {t('hero.subtitle')}
            </motion.span>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-headline text-6xl md:text-8xl text-primary leading-[1.1] mb-8"
            >
              {t('hero.title')} <br/><span className="italic font-normal">{t('hero.titleItalic')}</span> {t('hero.titleSuffix')}
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-on-surface-variant max-w-xl leading-relaxed mb-12"
            >
              {t('hero.description')}
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              <NavLink to="/contact" className="px-10 py-5 bg-primary text-on-primary rounded-xl font-semibold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">{t('hero.bookAppointment')}</NavLink>
              <NavLink to="/services" className="px-10 py-5 bg-secondary-container text-on-secondary-container rounded-xl font-semibold hover:opacity-90 transition-colors">{t('hero.viewServices')}</NavLink>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-12">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl shadow-primary/10">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Elegant portrait of Archana"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuCeILjKafJnU33mgJl2-ozBJz-mhJhCJIxsXdbn0RB-t7V2VqjwgYs2xjguP3K_s--CUBoj9wp4qtmY8z3FmoZDM46FxOaBhdSX_CWE7SBCw7bLWlW26hocn_HAghJz5Ttiltn7iw0IWZX3wjAKaUHhCWzBKhy9XldiJaZvN9W_KB5PrPFeUtQyGoKJFDrySomYu1wBAtMCDXq59p0AqpUMhYMM2NAnG8Va7XrBr74WKK2mvoQzajUsnQkvlGEUrrksB_shO3PBNr"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="font-label text-secondary uppercase tracking-widest text-xs mb-4 block">{t('home.about.subtitle')}</span>
              <h2 className="font-headline text-5xl text-primary mb-8">{t('home.about.title')}</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                {t('home.about.description')}
              </p>
              <NavLink to="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all">
                {t('home.about.link')} <ArrowRight className="w-5 h-5" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-primary/5">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { value: 80, suffix: "+", label: t('stats.happyClients') },
              { value: 2, suffix: "+", label: t('stats.yearsExperience') },
              { value: 150, suffix: "+", label: t('stats.makeupServices') },
              { value: 2, suffix: "", label: t('stats.locations') }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-headline text-5xl md:text-6xl text-secondary mb-4">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-label text-xs md:text-sm tracking-widest uppercase text-on-surface-variant opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-surface-variant/30">
        <div className="container mx-auto px-12">
          <div className="text-center mb-20">
            <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">{t('home.services.title')}</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">{t('home.services.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { key: 'bridal', icon: <Diamond /> },
              { key: 'hairStyling', icon: <Scissors /> },
              { key: 'hairChemical', icon: <Sparkles /> },
              { key: 'hairCutting', icon: <Scissors /> },
              { key: 'threading', icon: <Scissors /> },
              { key: 'nailArt', icon: <Star /> }
            ].map((service, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl luxury-shadow hover:-translate-y-2 transition-transform">
                <div className="w-14 h-14 bg-primary-container rounded-xl flex items-center justify-center text-primary mb-6">
                  {service.icon}
                </div>
                <h3 className="font-headline text-2xl mb-4">{t(`services.${service.key}.title`)}</h3>
                <p className="text-on-surface-variant mb-8">{t(`services.${service.key}.desc`)}</p>
                <NavLink to="/services" className="text-secondary font-medium hover:underline">{t('home.services.link')}</NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Client Transformations - YouTube Shorts Carousel */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-12">
          <div className="text-center mb-12">
            <span className="font-label text-secondary uppercase tracking-widest text-xs mb-4 block">Our Work</span>
            <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">Real Client Transformations</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Witness the magic of our artistry through these short transformation clips.</p>
          </div>
          
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing">
            {[
              "pvBuopNkWhQ",
              "Lv_RoRqz4Ro",
              "sDSlqcC2Lts",
              "0wi9Jb4Du6A"
            ].map((id, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex-shrink-0 w-[260px] md:w-[300px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl snap-center border border-primary/5"
              >
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${id}?autoplay=0&controls=1&rel=0`}
                  title={`Transformation ${i + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center gap-2">
            <div className="h-1 w-8 bg-primary rounded-full"></div>
            <div className="h-1 w-2 bg-primary/20 rounded-full"></div>
            <div className="h-1 w-2 bg-primary/20 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="py-16">
        <div className="container mx-auto px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-headline text-4xl text-primary mb-4">{t('home.portfolio.title')}</h2>
              <p className="text-on-surface-variant">{t('home.portfolio.subtitle')}</p>
            </div>
            <NavLink to="/portfolio" className="hidden md:block text-primary font-semibold hover:underline">{t('home.portfolio.link')}</NavLink>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCYcAim5GRwjtHjtjXa9BJtxRDSMy7afIa7Ya2gW0kOcnQ3V6xL3MdPTrySEkCpss8za3yHjFJQSd21MqepqsAxeThXCEuhgzZLQu2qRHwSY89awOKQ5QmXGZ9BnS2gbSVlBMCZPFtsYWsYBxcdmOAXsRS23fk38SyGDjz7q6UsnzSsbUYYVl-rvcOapzIuXi3r59da4hqaYZYEfE2TqOLsby1J5yr70xjKGA_nqkRGZ0vhl9BAI_K4Y7fgnprCiIXMQgBNK5-Ifsik",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuD0MlNyoaMWdK1rvWr9SDBS5NUiEwsKZyzy2FQMwGfAg2iSFJe2_vrTNSeYQypSzOtR8mdnccrtG4qf6y4UsOQAem9ABDZdFL0e4kwjqnDNshm5S07oLDbXC96LqXnjWxvbkGsaVXgcM0XjkkGzy-wcAr2hBChqy6_GGbaEjX1uOjdRGZ11fLfm_wvWxzWQg0itpP6_xrhgyWKTU_vP0dNZRJmaBRHc2aMxCnQALE_zOVUWkwojiA_bWltfW26sF9BE2zUHoex4ntWU",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCtU_cNxRQU31lvAteEtE6xRHw8n2uo7vGaVoFrJ52KFsd-dOKdfuusXBzcBgXbDyX2nMMznQ2Iraysyhm2iZ8avqh4ONAcFA_cyHwM4GXbnqOQgIDM58VWFWJI8vdf9zP6nIAliwiHeJCzOllL7rJ52qYdsjA5TWMhQYiGHLVZ2wRGyoOq7rvfsq-FbTm-dxEjblDpRi5c9pe1Cef0_BvzgPdotC4LJ9xuXxj0VFX6FWm1GGHiDV_WjmXxlbUSDt6aC2QFLs0V7MvC",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCxlW5Lw8qwuc15OtlG7Bn7aW8Oe7gUSZ7SLqQkyHHhNSHk1oyEAy41bqQWzLpCv2JXXnP8HtIUlNTXteJM2ez3Z91jVMBs5Ma0NbRw7be-UtKQEYLBlP_aPNt79SW8RGkG3RuRw8ZWhSRcYLxKBPOzZm3XWk9BjgdvQWoWTjtFqpFIpH6ZOn-pSUsq2bqrKEyfla8Q6xtBzVVTgY9qt165iwqWZ5rjwFZnmnbUvADL_Jutn-LEEckjqzYR1dPy9okVYQrgac1xfaA6"
            ].map((img, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden group">
                <img src={img} alt="Portfolio" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Customers Section - Slider Version */}
      <section className="py-16 bg-surface overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <span className="font-label text-secondary tracking-[0.3em] uppercase text-xs mb-4 block">{t('home.testimonials.subtitle')}</span>
              <h2 className="font-headline text-4xl md:text-5xl text-primary">{t('home.testimonials.title')}</h2>
            </div>
            <Quote className="w-16 h-16 text-secondary/40 mx-auto mb-12" />
            
            <div className="relative min-h-[300px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <p className="font-headline text-2xl md:text-4xl text-on-surface leading-relaxed italic mb-12">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-bold text-xl text-on-surface">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-xs text-secondary uppercase tracking-[0.3em] font-label">{testimonials[currentTestimonial].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-6 mt-16">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-12">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <span className="font-label text-secondary tracking-[0.3em] uppercase text-xs mb-4 block">{t('home.instagram.subtitle')}</span>
              <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">{t('home.instagram.title')}</h2>
              <p className="text-on-surface-variant">{t('home.instagram.description')}</p>
            </div>
            <a 
              href="https://www.instagram.com/thearchana_studio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all group"
            >
              <Instagram className="w-5 h-5" />
              @thearchana_studio
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1526045431048-f857369aba09?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=400&fit=crop"
            ].map((img, i) => (
              <motion.a
                key={i}
                href="https://www.instagram.com/thearchana_studio"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square rounded-xl overflow-hidden relative group"
              >
                <img 
                  src={img} 
                  alt={`Instagram Post ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white w-8 h-8" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 text-center py-16">
        <div className="bg-primary-container rounded-[2rem] p-16 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container/20 blur-3xl -mr-32 -mt-32 rounded-full"></div>
          <div className="relative z-10">
            <h2 className="font-headline text-4xl md:text-5xl text-on-primary-container mb-8">{t('about.cta.title')}</h2>
            <p className="text-on-primary-container/80 text-lg mb-12 max-w-2xl mx-auto">{t('about.cta.description')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink to="/contact" className="bg-primary text-on-primary px-10 py-4 rounded-full font-medium hover:shadow-lg transition-all">{t('about.cta.schedule')}</NavLink>
              <NavLink to="/portfolio" className="border border-primary text-primary px-10 py-4 rounded-full font-medium hover:bg-primary/5 transition-all">{t('about.cta.portfolio')}</NavLink>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
