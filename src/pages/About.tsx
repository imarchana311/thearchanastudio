import { motion } from 'motion/react';
import { Sparkles, History, ShieldCheck, Award, User, Palette, Play, MapPin } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section: The Personal Journey */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <span className="font-label text-secondary uppercase tracking-[0.2em] text-sm mb-6 block">{t('about.hero.subtitle')}</span>
            <h1 className="font-headline text-5xl md:text-7xl text-on-surface mb-8 leading-[1.1] tracking-tight">{t('about.hero.title')}</h1>
            <div className="space-y-6 text-lg leading-relaxed text-on-surface-variant max-w-2xl">
              <p>{t('about.hero.p1')}</p>
              <p className="font-headline italic text-2xl text-primary border-l-4 border-primary-container pl-6 my-10">
                "{t('about.hero.quote')}"
              </p>
              <p>{t('about.hero.p2')}</p>
            </div>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary-container/30 rounded-[2rem] -rotate-3"></div>
              <div className="relative">
                <img 
                  className="w-full aspect-[4/5] object-cover rounded-xl luxury-shadow shadow-primary/10" 
                  alt="Sophisticated portrait of Archana Singh Chauhan" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTuXc6sO0FyjjQKchdkpHA296ajEP29aiVKD4iJkNwhEXpbQpnwx2Qsx6CRY3nwhWK_dxN689ZusWLAD7A1IvE3XsUwoQ-n4ZxmXqqf_FKJS_RVo8nWNhQn3NuXn2lRAIhPhutZHl2Swr2cHeriqddf6D0inRFbpb2_K5lrrCNcerXtZN7rdyn91GhwhVyratUVw3TicRiUsch2SOXsbI5oqILeSefMYE6u6FcDYtqBVuPE7YuwA31wBYgXWJ8kZ3oWiwwo0lLdmGy"
                  referrerPolicy="no-referrer"
                />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
                  className="absolute bottom-8 left-8 font-signature text-3xl md:text-4xl text-[#e11d48] drop-shadow-md z-20 pointer-events-none -rotate-6"
                >
                  Hi Beautiful, Welcome in 💖
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-surface-container-low">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Sparkles className="w-12 h-12 text-secondary mb-6 mx-auto" />
          <h2 className="font-label text-sm uppercase tracking-[0.3em] text-on-surface-variant mb-4">{t('about.mission.title')}</h2>
          <p className="font-headline text-4xl md:text-5xl text-on-surface leading-tight italic">
            "{t('about.mission.quote')}"
          </p>
          <div className="mt-12 h-[1px] w-24 bg-secondary mx-auto"></div>
        </div>
      </section>

      {/* Video Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="relative aspect-video rounded-[2rem] overflow-hidden luxury-shadow group cursor-pointer">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxJfOWJUX1Yv8x1qGYqu2A3CPnTLUfvo7_kOJcgcdPqoQu-eprKshkeZT_MiMeCttGmqwA8y9tj9KhcFU2_nih3NJd635MtRj4J8Sr3-1ZUB_8ln_lwfJR3OgvNdAguIT84YXJCmv2EFLIi29iUyJfkH1xHj8IFQniyDgHJFxEDc4Zr1ojA9ITkxlY0fb9C4aiDEvqElIACLmi9ZtiBzM4xNBAxJ7pKiF9YG5eOLvgN5-IUxRQOmDL7QKG90AOWXpl-9NQQRTivIzR" 
            alt="Studio Video Thumbnail" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-xl">
                <Play className="w-8 h-8 fill-primary ml-1" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-10 text-white">
            <h3 className="font-headline text-3xl mb-2">{t('about.video.title')}</h3>
            <p className="text-white/80">{t('about.video.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Bento Grid: Why Choose Archana */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="mb-16">
          <h2 className="font-headline text-4xl text-on-surface mb-4">{t('about.why.title')}</h2>
          <p className="text-on-surface-variant max-w-xl">{t('about.why.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white p-10 rounded-xl luxury-shadow flex flex-col justify-between min-h-[320px]">
            <div>
              <History className="text-primary w-8 h-8 mb-6" />
              <h3 className="font-headline text-2xl mb-4">{t('about.why.excellence.title')}</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg">{t('about.why.excellence.desc')}</p>
            </div>
            <div className="mt-8 flex gap-4 overflow-hidden">
              <div className="h-16 w-16 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="text-primary w-6 h-6" />
              </div>
              <div className="h-16 w-16 rounded-full bg-secondary-container/20 flex items-center justify-center shrink-0">
                <Award className="text-secondary w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="bg-primary text-on-primary p-10 rounded-xl flex flex-col justify-center text-center">
            <User className="w-10 h-10 mb-6 mx-auto" />
            <h3 className="font-headline text-2xl mb-4">{t('about.why.care.title')}</h3>
            <p className="opacity-90 leading-relaxed">{t('about.why.care.desc')}</p>
          </div>
          <div className="bg-surface-variant p-10 rounded-xl flex flex-col justify-between">
            <div>
              <Palette className="text-secondary w-8 h-8 mb-6" />
              <h3 className="font-headline text-2xl mb-4">{t('about.why.artistry.title')}</h3>
              <p className="text-on-surface-variant leading-relaxed">{t('about.why.artistry.desc')}</p>
            </div>
          </div>
          <div className="md:col-span-2 relative group overflow-hidden rounded-xl h-[400px]">
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              alt="Studio interior"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxJfOWJUX1Yv8x1qGYqu2A3CPnTLUfvo7_kOJcgcdPqoQu-eprKshkeZT_MiMeCttGmqwA8y9tj9KhcFU2_nih3NJd635MtRj4J8Sr3-1ZUB_8ln_lwfJR3OgvNdAguIT84YXJCmv2EFLIi29iUyJfkH1xHj8IFQniyDgHJFxEDc4Zr1ojA9ITkxlY0fb9C4aiDEvqElIACLmi9ZtiBzM4xNBAxJ7pKiF9YG5eOLvgN5-IUxRQOmDL7QKG90AOWXpl-9NQQRTivIzR"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent flex flex-col justify-end p-10">
              <h3 className="font-headline text-2xl text-white mb-2">{t('about.why.experience.title')}</h3>
              <p className="text-white/80 max-w-md">{t('about.why.experience.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="mb-16 text-center">
          <MapPin className="w-10 h-10 text-primary mb-4 mx-auto" />
          <h2 className="font-headline text-4xl text-on-surface mb-4">{t('about.studios.title')}</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">{t('about.studios.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[450px]">
          <div className="rounded-2xl overflow-hidden luxury-shadow border border-outline-variant/30">
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
          <div className="rounded-2xl overflow-hidden luxury-shadow border border-outline-variant/30">
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
