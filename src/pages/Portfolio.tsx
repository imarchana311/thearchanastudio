import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Quote, ChevronLeft, ChevronRight, X, ZoomIn, Search } from 'lucide-react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const galleryItems = [
  {
    title: "The Ethereal Bride",
    category: "bridal",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYcAim5GRwjtHjtjXa9BJtxRDSMy7afIa7Ya2gW0kOcnQ3V6xL3MdPTrySEkCpss8za3yHjFJQSd21MqepqsAxeThXCEuhgzZLQu2qRHwSY89awOKQ5QmXGZ9BnS2gbSVlBMCZPFtsYWsYBxcdmOAXsRS23fk38SyGDjz7q6UsnzSsbUYYVl-rvcOapzIuXi3r59da4hqaYZYEfE2TqOLsby1J5yr70xjKGA_nqkRGZ0vhl9BAI_K4Y7fgnprCiIXMQgBNK5-Ifsik",
    colSpan: "md:col-span-8",
    height: "h-[600px]"
  },
  {
    title: "Marble & Gold Leaf",
    category: "nails",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0MlNyoaMWdK1rvWr9SDBS5NUiEwsKZyzy2FQMwGfAg2iSFJe2_vrTNSeYQypSzOtR8mdnccrtG4qf6y4UsOQAem9ABDZdFL0e4kwjqnDNshm5S07oLDbXC96LqXnjWxvbkGsaVXgcM0XjkkGzy-wcAr2hBChqy6_GGbaEjX1uOjdRGZ11fLfm_wvWxzWQg0itpP6_xrhgyWKTU_vP0dNZRJmaBRHc2aMxCnQALE_zOVUWkwojiA_bWltfW26sF9BE2zUHoex4ntWU",
    colSpan: "md:col-span-4",
    height: "h-[284px]"
  },
  {
    title: "Pearl-Pinned Chignon",
    category: "hair",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtU_cNxRQU31lvAteEtE6xRHw8n2uo7vGaVoFrJ52KFsd-dOKdfuusXBzcBgXbDyX2nMMznQ2Iraysyhm2iZ8avqh4ONAcFA_cyHwM4GXbnqOQgIDM58VWFWJI8vdf9zP6nIAliwiHeJCzOllL7rJ52qYdsjA5TWMhQYiGHLVZ2wRGyoOq7rvfsq-FbTm-dxEjblDpRi5c9pe1Cef0_BvzgPdotC4LJ9xuXxj0VFX6FWm1GGHiDV_WjmXxlbUSDt6aC2QFLs0V7MvC",
    colSpan: "md:col-span-4",
    height: "h-[284px]"
  },
  {
    title: "Holographic Editorial",
    category: "hd",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxlW5Lw8qwuc15OtlG7Bn7aW8Oe7gUSZ7SLqQkyHHhNSHk1oyEAy41bqQWzLpCv2JXXnP8HtIUlNTXteJM2ez3Z91jVMBs5Ma0NbRw7be-UtKQEYLBlP_aPNt79SW8RGkG3RuRw8ZWhSRcYLxKBPOzZm3XWk9BjgdvQWoWTjtFqpFIpH6ZOn-pSUsq2bqrKEyfla8Q6xtBzVVTgY9qt165iwqWZ5rjwFZnmnbUvADL_Jutn-LEEckjqzYR1dPy9okVYQrgac1xfaA6",
    colSpan: "md:col-span-4",
    height: "h-[450px]"
  },
  {
    title: "Honey Blonde Waves",
    category: "chemical",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4izUugpStGu9iP2anzh9F93Rw2jPYLJJ0vEqwNqyTcSSaUyNZ8q0d0n0pScSykoKykc_ITkFYj6j3m6Ssy9sgOgQtPXolAsz5ae5hlF9hAVix3vjYPryvQEh3h_lcF7yTbO_qPIjKowNqihiQobZpePMLf9bRs1WQpfti1aPTR_GJNyD6H9TfVUtgL-LaM2qPMGoJbL7Q84ou8TFzpFhgoI2x1L7t1Up6K143jGlL8gsLsQv568LVjMIufQS6NIlKSB5-8K3gL6Cm",
    colSpan: "md:col-span-8",
    height: "h-[450px]"
  },
  {
    title: "Traditional Saree Draping",
    category: "saree",
    image: "https://picsum.photos/seed/saree/800/1200",
    colSpan: "md:col-span-4",
    height: "h-[400px]"
  },
  {
    title: "Precision Brow Sculpting",
    category: "threading",
    image: "https://picsum.photos/seed/threading/800/800",
    colSpan: "md:col-span-4",
    height: "h-[400px]"
  },
  {
    title: "Engagement Glow",
    category: "engagement",
    image: "https://picsum.photos/seed/engagement/800/1000",
    colSpan: "md:col-span-4",
    height: "h-[400px]"
  }
];

export default function Portfolio() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState(t('portfolio.filters.all'));
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const q = searchParams.get('q');
    if (q) {
      setSearchQuery(q);
    }
  }, [searchParams]);

  const filteredItems = galleryItems.filter(item => {
    const matchesFilter = filter === t('portfolio.filters.all') || 
      t(`portfolio.filters.${item.category}`) === filter;
    
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      t(`portfolio.filters.${item.category}`).toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const categories = [
    t('portfolio.filters.all'), 
    t('portfolio.filters.makeup'), 
    t('portfolio.filters.bridal'),
    t('portfolio.filters.hd'),
    t('portfolio.filters.engagement'),
    t('portfolio.filters.party'),
    t('portfolio.filters.hair'), 
    t('portfolio.filters.chemical'),
    t('portfolio.filters.cutting'),
    t('portfolio.filters.nails'),
    t('portfolio.filters.saree'),
    t('portfolio.filters.threading')
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-background"
    >
      <header className="pt-32 pb-16 px-12 max-w-[1440px] mx-auto text-center space-y-12">
        <div>
          <span className="font-label text-secondary tracking-[0.3em] uppercase text-xs mb-4 block">{t('portfolio.subtitle')}</span>
          <h1 className="font-headline text-5xl md:text-7xl text-primary mb-8 leading-tight tracking-tight">{t('portfolio.title')}</h1>
          <p className="max-w-2xl mx-auto text-on-surface-variant text-lg leading-relaxed opacity-80">{t('portfolio.description')}</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant opacity-40" />
            <input 
              type="text"
              placeholder={t('portfolio.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-outline-variant rounded-full py-4 pl-16 pr-8 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm"
            />
          </div>
          
          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2 rounded-full font-label text-sm tracking-wide transition-all ${
                  filter === cat 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-surface-variant text-on-surface hover:bg-primary-container'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="px-12 max-w-[1920px] mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div 
                key={item.title}
                layout
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`${item.colSpan} group relative overflow-hidden rounded-xxl bg-surface-variant`}
              >
                <img 
                  alt={item.title} 
                  className={`w-full ${item.height} object-cover transition-transform duration-700 group-hover:scale-105`} 
                  src={item.image}
                  referrerPolicy="no-referrer"
                />
                <div 
                  onClick={() => setSelectedImage(item.image)}
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10 cursor-zoom-in backdrop-blur-[2px]"
                >
                  <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-white/90 font-label uppercase text-xs tracking-[0.2em] mb-1 block transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      {t(`portfolio.filters.${item.category}`)}
                    </span>
                    <h3 className="text-white font-headline text-3xl italic transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>

      {/* Before & After Section */}
      <section className="bg-surface-variant py-32 px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-20 text-center md:text-left">
            <span className="font-label text-secondary tracking-[0.3em] uppercase text-xs mb-4 block">{t('portfolio.beforeAfter.subtitle')}</span>
            <h2 className="font-headline text-4xl md:text-5xl text-primary mb-6 italic">{t('portfolio.beforeAfter.title')}</h2>
            <p className="text-on-surface-variant max-w-xl opacity-80">{t('portfolio.beforeAfter.description')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white p-6 rounded-xxl shadow-xl shadow-primary/5">
              <div className="flex flex-col md:flex-row gap-4 h-[800px] md:h-[500px]">
                <div className="flex-1 overflow-hidden rounded-xl relative group">
                  <img 
                    alt="Before" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGnN4MAIw7sWCybRXK8XvVrdxHBx4S6hu7aVM5HNvMD9DHq9FiGbClZEO3mrwQwz2c1myZ8C7Aj_ArwdOGngye1pvN7vJzTcxZCjsf_xnlYnJiRfU-Wdy6ev2eXyjloRbjEvdqTf9H45utrxYAZr28RoOuSPenMzQ9B2DJiEEZiuUaZJUu21J9ZolaHdPNmjMtfjW7CjfDwnfIpB9POUMQ6k8Er0hld1tcgRcyoKpwRriulM2pw5EKzUXBYWrfmQZP8hS1TqGPj37q"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-label uppercase tracking-widest">{t('portfolio.beforeAfter.before')}</div>
                </div>
                <div className="flex-1 overflow-hidden rounded-xl relative group">
                  <img 
                    alt="After" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTvD4eX8EShWZjN1ywUNZi6NQ9BptPV8y_i40t8vPrf8kAjePwdZkx_wlJwY81uSD8fi1BZYbfLop3JisbuuCfS0A1p5XW0-8y1dL_vzbs0EpaKura9nG3ou94SMOzK3_6tQFIPQWYMT4zmaJ2Ww0JtEPJrRMxaTDsqhsDPcWo_MH9-Ilble0TlBVPz0Wb1GIiPgp_sDbZ870yO_6jMJH8CHBO3NC1BieH0w-4RSeBLvsWCVLjx6LB6byYKOR_kmQNSouTslD93qLn"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-label uppercase tracking-widest">{t('portfolio.beforeAfter.after')}</div>
                  <button 
                    onClick={() => setSelectedImage("https://lh3.googleusercontent.com/aida-public/AB6AXuCTvD4eX8EShWZjN1ywUNZi6NQ9BptPV8y_i40t8vPrf8kAjePwdZkx_wlJwY81uSD8fi1BZYbfLop3JisbuuCfS0A1p5XW0-8y1dL_vzbs0EpaKura9nG3ou94SMOzK3_6tQFIPQWYMT4zmaJ2Ww0JtEPJrRMxaTDsqhsDPcWo_MH9-Ilble0TlBVPz0Wb1GIiPgp_sDbZ870yO_6jMJH8CHBO3NC1BieH0w-4RSeBLvsWCVLjx6LB6byYKOR_kmQNSouTslD93qLn")}
                    className="absolute bottom-4 right-4 w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-headline text-xl text-primary italic mb-2">{t('portfolio.beforeAfter.eventReady')}</h4>
                <p className="text-on-surface-variant text-sm opacity-70">{t('portfolio.beforeAfter.eventReadyDesc')}</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xxl shadow-xl shadow-primary/5">
              <div className="flex flex-col md:flex-row gap-4 h-[800px] md:h-[500px]">
                <div className="flex-1 overflow-hidden rounded-xl relative group">
                  <img 
                    alt="Before" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZjGjE5N6uHwxkuogTgmTGefOMJplk6JzJcDglERINJ5bBAYqEW5EOwHizQNEx1oFSn5UETpH3D4_WqEIrmPe4-9QgKMYDqyLUObUFzTgxpQm7669exhWimJ5XZl58TtKHGru6kXKgwKzLkjMEQMxl3bmaR2vNzIOuTtPlqeiSa9pP6CmPdeVofsWEFlxsdgpxyexsgsAwC51dwBjV5n-A03m_pDrcu8-uXE10OBkolyq-_Czii3TtHhdLMw4H6HYCbEjzhvkx-ZHs"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-label uppercase tracking-widest">{t('portfolio.beforeAfter.before')}</div>
                </div>
                <div className="flex-1 overflow-hidden rounded-xl relative group">
                  <img 
                    alt="After" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjV-EwPB9b7aRFZCKOyMU6K1gbEhM4qWuZLBaoPs5m0LYC1yGqxQKAtlRzzCarCaq5IjLQX8SFdFpd5bnQ6TR6H_mZHZ7Z3ao19woG2BVvhIOOStmfCZ0CEFP9szzLFiVSAnz51n-DStyrtkEoRUaEv01gU9_QCbDqdc7cgEd-Ws04HZtrTJeYtf94eUfj36AGlLa0lkk0csmwBsn6GsWqWba-qy6-NFhxMkpJZ7OSBRHh1OSIKhqb42eNeFlngm7UoBTu7CMfDFcc"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-label uppercase tracking-widest">{t('portfolio.beforeAfter.after')}</div>
                  <button 
                    onClick={() => setSelectedImage("https://lh3.googleusercontent.com/aida-public/AB6AXuDjV-EwPB9b7aRFZCKOyMU6K1gbEhM4qWuZLBaoPs5m0LYC1yGqxQKAtlRzzCarCaq5IjLQX8SFdFpd5bnQ6TR6H_mZHZ7Z3ao19woG2BVvhIOOStmfCZ0CEFP9szzLFiVSAnz51n-DStyrtkEoRUaEv01gU9_QCbDqdc7cgEd-Ws04HZtrTJeYtf94eUfj36AGlLa0lkk0csmwBsn6GsWqWba-qy6-NFhxMkpJZ7OSBRHh1OSIKhqb42eNeFlngm7UoBTu7CMfDFcc")}
                    className="absolute bottom-4 right-4 w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-headline text-xl text-primary italic mb-2">{t('portfolio.beforeAfter.nailRecon')}</h4>
                <p className="text-on-surface-variant text-sm opacity-70">{t('portfolio.beforeAfter.nailReconDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-12">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-12 h-12 text-secondary mb-8 mx-auto" />
            <div className="space-y-12">
              <p className="font-headline text-3xl text-primary italic leading-relaxed mb-8">
                "{(t('home.testimonials.items', { returnObjects: true }) as any[])[0].content}"
              </p>
              <div>
                <p className="font-bold text-on-surface">{(t('home.testimonials.items', { returnObjects: true }) as any[])[0].name}</p>
                <p className="text-sm text-on-surface-variant uppercase tracking-widest">{(t('home.testimonials.items', { returnObjects: true }) as any[])[0].role}</p>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-16">
              <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-white transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-white transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary-container/30">
        <div className="container mx-auto px-12 text-center">
          <h2 className="font-headline text-4xl md:text-5xl text-primary mb-8">{t('portfolio.cta.title')}</h2>
          <p className="text-on-surface-variant text-lg mb-12 max-w-2xl mx-auto">{t('portfolio.cta.description')}</p>
          <NavLink to="/contact" className="inline-block bg-primary text-white px-12 py-4 rounded-xl font-semibold shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
            {t('portfolio.cta.button')}
          </NavLink>
        </div>
      </section>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-8 right-8 text-white hover:rotate-90 transition-transform duration-300 z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-10 h-10" />
            </motion.button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              src={selectedImage}
              alt="Zoomed view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
