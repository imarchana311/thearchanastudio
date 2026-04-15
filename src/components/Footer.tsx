import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-surface-container-low border-t border-primary/10 w-full font-body">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-16 w-full max-w-[1920px] mx-auto">
        <div className="col-span-1 md:col-span-1">
          <NavLink 
            to="/" 
            className="inline-block mb-6"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src="https://drive.google.com/uc?export=view&id=1qpF7M9od5EaMrfNhaiLhQ2tLzITdsPU4" 
              alt="The Archana Studio" 
              className="h-16 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </NavLink>
          <p className="text-sm leading-relaxed text-neutral-600 mb-6">
            {t('footer.description')}
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/TheArchanaStudio" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary hover:scale-110 transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/thearchana_studio" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary hover:scale-110 transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@thearchanastudio" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary hover:scale-110 transition-all">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="https://wa.me/919016122911" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary hover:scale-110 transition-all">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h5 className="font-label text-xs tracking-widest uppercase text-primary mb-6">{t('footer.quickLinks')}</h5>
          <ul className="flex flex-col gap-4 text-sm">
            <li><NavLink to="/" className="text-neutral-600 hover:underline decoration-secondary transition-all">{t('nav.home')}</NavLink></li>
            <li><NavLink to="/about" className="text-neutral-600 hover:underline decoration-secondary transition-all">{t('nav.about')}</NavLink></li>
            <li><NavLink to="/portfolio" className="text-neutral-600 hover:underline decoration-secondary transition-all">{t('nav.portfolio')}</NavLink></li>
            <li><NavLink to="/services" className="text-neutral-600 hover:underline decoration-secondary transition-all">{t('nav.services')}</NavLink></li>
            <li><NavLink to="/testimonials" className="text-neutral-600 hover:underline decoration-secondary transition-all">{t('nav.testimonials')}</NavLink></li>
            <li><NavLink to="/contact" className="text-neutral-600 hover:underline decoration-secondary transition-all">{t('nav.contact')}</NavLink></li>
          </ul>
        </div>
        <div>
          <h5 className="font-label text-xs tracking-widest uppercase text-primary mb-6">{t('footer.services')}</h5>
          <ul className="flex flex-col gap-3 text-sm">
            <li><NavLink to="/services/bridal" className="text-neutral-600 hover:text-secondary transition-colors">{t('services.bridal.title')}</NavLink></li>
            <li><NavLink to="/services/hd" className="text-neutral-600 hover:text-secondary transition-colors">{t('services.hd.title')}</NavLink></li>
            <li><NavLink to="/services/engagement" className="text-neutral-600 hover:text-secondary transition-colors">{t('services.engagement.title')}</NavLink></li>
            <li><NavLink to="/services/party" className="text-neutral-600 hover:text-secondary transition-colors">{t('services.party.title')}</NavLink></li>
            <li><NavLink to="/services/hairStyling" className="text-neutral-600 hover:text-secondary transition-colors">{t('services.hairStyling.title')}</NavLink></li>
            <li><NavLink to="/services/hairChemical" className="text-neutral-600 hover:text-secondary transition-colors">{t('services.hairChemical.title')}</NavLink></li>
            <li><NavLink to="/services/hairCutting" className="text-neutral-600 hover:text-secondary transition-colors">{t('services.hairCutting.title')}</NavLink></li>
            <li><NavLink to="/services/nailArt" className="text-neutral-600 hover:text-secondary transition-colors">{t('services.nailArt.title')}</NavLink></li>
            <li><NavLink to="/services/saree" className="text-neutral-600 hover:text-secondary transition-colors">{t('services.saree.title')}</NavLink></li>
            <li><NavLink to="/services/threading" className="text-neutral-600 hover:text-secondary transition-colors">{t('services.threading.title')}</NavLink></li>
            <li><NavLink to="/services/guest" className="text-neutral-600 hover:text-secondary transition-colors">{t('services.guest.title')}</NavLink></li>
          </ul>
        </div>
        <div>
          <h5 className="font-label text-xs tracking-widest uppercase text-primary mb-6">{t('footer.newsletter')}</h5>
          <p className="text-xs text-neutral-500 mb-4 italic">{t('footer.newsletterDesc')}</p>
          <div className="relative">
            <input 
              className="w-full bg-transparent border-0 border-b border-outline-variant py-2 text-sm focus:ring-0 focus:border-primary placeholder:text-neutral-400 transition-all" 
              placeholder="Email Address" 
              type="email"
            />
            <button className="absolute right-0 top-2 text-primary font-label text-[10px] tracking-widest uppercase">{t('footer.join')}</button>
          </div>
        </div>
      </div>
      <div className="px-12 py-8 border-t border-primary/5 flex justify-between items-center text-[10px] text-neutral-500 tracking-[0.2em] uppercase">
        <p>© 2026 The Archana Studio. {t('footer.rights')}</p>
        <div className="flex gap-8">
          <NavLink className="hover:text-primary transition-colors" to="/privacy-policy">{t('footer.privacy')}</NavLink>
          <NavLink className="hover:text-primary transition-colors" to="/terms-of-service">{t('footer.terms')}</NavLink>
        </div>
      </div>
    </footer>
  );
}
