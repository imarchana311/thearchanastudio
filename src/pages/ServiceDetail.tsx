import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { 
  Diamond, Camera, Heart, Sparkles, Scissors, Brush, Shirt, 
  CheckCircle2, ArrowLeft, Clock, MapPin, IndianRupee 
} from 'lucide-react';

interface ServiceDetail {
  id: string;
  icon: React.ReactNode;
  image: string;
  pricing: {
    label: string;
    price: string;
  }[];
  features: string[];
  process: {
    step: string;
    desc: string;
  }[];
}

const serviceDetails: Record<string, ServiceDetail> = {
  bridal: {
    id: "bridal",
    icon: <Diamond className="w-12 h-12" />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYcAim5GRwjtHjtjXa9BJtxRDSMy7afIa7Ya2gW0kOcnQ3V6xL3MdPTrySEkCpss8za3yHjFJQSd21MqepqsAxeThXCEuhgzZLQu2qRHwSY89awOKQ5QmXGZ9BnS2gbSVlBMCZPFtsYWsYBxcdmOAXsRS23fk38SyGDjz7q6UsnzSsbUYYVl-rvcOapzIuXi3r59da4hqaYZYEfE2TqOLsby1J5yr70xjKGA_nqkRGZ0vhl9BAI_K4Y7fgnprCiIXMQgBNK5-Ifsik",
    pricing: [
      { label: "Traditional Bridal", price: "₹15,000+" },
      { label: "HD Bridal", price: "₹20,000+" },
      { label: "Airbrush Bridal", price: "₹25,000+" }
    ],
    features: [
      "Full Face HD/Airbrush Makeup",
      "Intricate Hair Styling",
      "Saree/Dupatta Draping",
      "Lashes & Extensions",
      "Premium International Products"
    ],
    process: [
      { step: "Consultation", desc: "Discussing your outfit, jewelry, and desired look." },
      { step: "Skin Prep", desc: "Deep hydration and priming for a long-lasting base." },
      { step: "Artistry", desc: "Meticulous application of makeup and hair styling." },
      { step: "Final Touches", desc: "Setting the look and ensuring everything is perfect." }
    ]
  },
  hd: {
    id: "hd",
    icon: <Camera className="w-12 h-12" />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0MlNyoaMWdK1rvWr9SDBS5NUiEwsKZyzy2FQMwGfAg2iSFJe2_vrTNSeYQypSzOtR8mdnccrtG4qf6y4UsOQAem9ABDZdFL0e4kwjqnDNshm5S07oLDbXC96LqXnjWxvbkGsaVXgcM0XjkkGzy-wcAr2hBChqy6_GGbaEjX1uOjdRGZ11fLfm_wvWxzWQg0itpP6_xrhgyWKTU_vP0dNZRJmaBRHc2aMxCnQALE_zOVUWkwojiA_bWltfW26sF9BE2zUHoex4ntWU",
    pricing: [
      { label: "HD Party Makeup", price: "₹5,000+" },
      { label: "HD Editorial", price: "₹8,000+" }
    ],
    features: [
      "Camera-Ready Finish",
      "Poreless Skin Texture",
      "Long-wear Formula",
      "Natural-looking Contouring"
    ],
    process: [
      { step: "Prep", desc: "Smoothing skin texture for the lens." },
      { step: "Base", desc: "Applying high-definition pigments." },
      { step: "Detail", desc: "Focusing on eyes and lip definition." }
    ]
  },
  engagement: {
    id: "engagement",
    icon: <Heart className="w-12 h-12" />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSbvVGTY-KB60ReBCaWH1geURSykOEDf503i4U3mh048Zesb7FJF4IZFw79HOe4Hm3hVJ0K77Ozn7MS4fBJAjwPAzdJCfBe-V5TQeu3wDqyuwXBMyB8iqZCQvgY-jBjoPiLcIjfD-Z_MiBOLZWcMx0wsUwiJJUPvNBSDMbbu_0Opl7XXKbkoNBMlcve69kQdCbvbLZs7BKpdX6FV2lVf5eFtqSNem6OZmPcyFkE79Rv8rf7XKJvN7sYYsw19TrK4xYNAYsEbqQnTQy",
    pricing: [
      { label: "Engagement Look", price: "₹8,000+" },
      { label: "Sangeet Look", price: "₹7,000+" }
    ],
    features: [
      "Soft & Romantic Aesthetics",
      "Coordinated Hair Styling",
      "Draping Included",
      "Trial Available"
    ],
    process: [
      { step: "Theme Sync", desc: "Matching the look with your event theme." },
      { step: "Execution", desc: "Creating a balanced, radiant appearance." }
    ]
  },
  nailArt: {
    id: "nailArt",
    icon: <Brush className="w-12 h-12" />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0MlNyoaMWdK1rvWr9SDBS5NUiEwsKZyzy2FQMwGfAg2iSFJe2_vrTNSeYQypSzOtR8mdnccrtG4qf6y4UsOQAem9ABDZdFL0e4kwjqnDNshm5S07oLDbXC96LqXnjWxvbkGsaVXgcM0XjkkGzy-wcAr2hBChqy6_GGbaEjX1uOjdRGZ11fLfm_wvWxzWQg0itpP6_xrhgyWKTU_vP0dNZRJmaBRHc2aMxCnQALE_zOVUWkwojiA_bWltfW26sF9BE2zUHoex4ntWU",
    pricing: [
      { label: "Gel Extensions", price: "₹2,500+" },
      { label: "Bespoke Nail Art", price: "₹1,500+" },
      { label: "Overlay", price: "₹1,200+" }
    ],
    features: [
      "Hand-painted Designs",
      "Stone & Charm Application",
      "Long-lasting Gel Polish",
      "Cuticle Care Included"
    ],
    process: [
      { step: "Prep", desc: "Cleaning and shaping the natural nail." },
      { step: "Build", desc: "Applying extensions or overlays." },
      { step: "Art", desc: "Detailed painting and decoration." }
    ]
  },
  party: {
    id: "party",
    icon: <Sparkles className="w-12 h-12" />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxlW5Lw8qwuc15OtlG7Bn7aW8Oe7gUSZ7SLqQkyHHhNSHk1oyEAy41bqQWzLpCv2JXXnP8HtIUlNTXteJM2ez3Z91jVMBs5Ma0NbRw7be-UtKQEYLBlP_aPNt79SW8RGkG3RuRw8ZWhSRcYLxKBPOzZm3XWk9BjgdvQWoWTjtFqpFIpH6ZOn-pSUsq2bqrKEyfla8Q6xtBzVVTgY9qt165iwqWZ5rjwFZnmnbUvADL_Jutn-LEEckjqzYR1dPy9okVYQrgac1xfaA6",
    pricing: [
      { label: "Soft Glam", price: "₹3,500+" },
      { label: "Heavy Glam", price: "₹5,000+" },
      { label: "Cocktail Look", price: "₹4,500+" }
    ],
    features: [
      "Full Face Makeup",
      "Lashes Included",
      "Contouring & Highlighting",
      "Long-wear Finish"
    ],
    process: [
      { step: "Skin Prep", desc: "Hydrating and priming for the event." },
      { step: "Artistry", desc: "Creating the desired glamour look." },
      { step: "Setting", desc: "Ensuring the makeup lasts all night." }
    ]
  },
  hairStyling: {
    id: "hairStyling",
    icon: <Scissors className="w-12 h-12" />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtU_cNxRQU31lvAteEtE6xRHw8n2uo7vGaVoFrJ52KFsd-dOKdfuusXBzcBgXbDyX2nMMznQ2Iraysyhm2iZ8avqh4ONAcFA_cyHwM4GXbnqOQgIDM58VWFWJI8vdf9zP6nIAliwiHeJCzOllL7rJ52qYdsjA5TWMhQYiGHLVZ2wRGyoOq7rvfsq-FbTm-dxEjblDpRi5c9pe1Cef0_BvzgPdotC4LJ9xuXxj0VFX6FWm1GGHiDV_WjmXxlbUSDt6aC2QFLs0V7MvC",
    pricing: [
      { label: "Traditional Bun", price: "₹1,500+" },
      { label: "Open Waves", price: "₹1,200+" },
      { label: "Intricate Braid", price: "₹2,000+" }
    ],
    features: [
      "Heat Styling",
      "Hair Accessories Placement",
      "Volume Boosting",
      "Long-lasting Hold"
    ],
    process: [
      { step: "Prep", desc: "Detangling and applying heat protectant." },
      { step: "Styling", desc: "Crafting the chosen hairstyle." },
      { step: "Finish", desc: "Applying shine spray and hold spray." }
    ]
  },
  hairChemical: {
    id: "hairChemical",
    icon: <Sparkles className="w-12 h-12" />,
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&h=600&fit=crop",
    pricing: [
      { label: "Hair Smoothing", price: "₹4,000+" },
      { label: "Keratin Treatment", price: "₹5,500+" },
      { label: "Global Color", price: "₹3,000+" }
    ],
    features: [
      "Premium Chemical Products",
      "Deep Conditioning",
      "Scalp Protection",
      "After-care Guidance"
    ],
    process: [
      { step: "Analysis", desc: "Checking hair health and texture." },
      { step: "Application", desc: "Careful application of treatments." },
      { step: "Neutralizing", desc: "Setting the treatment for best results." }
    ]
  },
  hairCutting: {
    id: "hairCutting",
    icon: <Scissors className="w-12 h-12" />,
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=600&fit=crop",
    pricing: [
      { label: "Basic Trim", price: "₹500+" },
      { label: "Style Haircut", price: "₹800+" },
      { label: "Kid's Haircut", price: "₹400+" }
    ],
    features: [
      "Face Shape Analysis",
      "Precision Cutting",
      "Wash & Blow-dry Included",
      "Styling Tips"
    ],
    process: [
      { step: "Consultation", desc: "Choosing a style that fits you." },
      { step: "Cutting", desc: "Expert precision hair cutting." },
      { step: "Styling", desc: "Final blow-dry and styling." }
    ]
  },
  saree: {
    id: "saree",
    icon: <Shirt className="w-12 h-12" />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSbvVGTY-KB60ReBCaWH1geURSykOEDf503i4U3mh048Zesb7FJF4IZFw79HOe4Hm3hVJ0K77Ozn7MS4fBJAjwPAzdJCfBe-V5TQeu3wDqyuwXBMyB8iqZCQvgY-jBjoPiLcIjfD-Z_MiBOLZWcMx0wsUwiJJUPvNBSDMbbu_0Opl7XXKbkoNBMlcve69kQdCbvbLZs7BKpdX6FV2lVf5eFtqSNem6OZmPcyFkE79Rv8rf7XKJvN7sYYsw19TrK4xYNAYsEbqQnTQy",
    pricing: [
      { label: "Basic Draping", price: "₹500+" },
      { label: "Gujarati Style", price: "₹700+" },
      { label: "Bengali Style", price: "₹800+" }
    ],
    features: [
      "Perfect Silhouette",
      "Pins & Safety Provided",
      "Comfortable Draping",
      "All Saree Types Handled"
    ],
    process: [
      { step: "Pleating", desc: "Creating uniform, sharp pleats." },
      { step: "Draping", desc: "Securing the saree for movement." },
      { step: "Adjusting", desc: "Final check for comfort and look." }
    ]
  },
  threading: {
    id: "threading",
    icon: <Scissors className="w-12 h-12" />,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&h=600&fit=crop",
    pricing: [
      { label: "Eyebrows", price: "₹100+" },
      { label: "Upper Lip", price: "₹50+" },
      { label: "Full Face", price: "₹400+" }
    ],
    features: [
      "Precision Shaping",
      "Minimal Discomfort",
      "Clean & Hygienic",
      "Soothing Post-care"
    ],
    process: [
      { step: "Mapping", desc: "Defining the ideal brow shape." },
      { step: "Threading", desc: "Removing hair with precision." },
      { step: "Soothing", desc: "Applying cooling gel." }
    ]
  },
  guest: {
    id: "guest",
    icon: <Sparkles className="w-12 h-12" />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVl6mXyyGf7mT0WVIl1rOQBufrd3Ed4h_ShrOQyc99lKGne_eukw1EAOUPXxR_QIV81_iMc1IfFqxYhqXh8HiTcppl3w7AmD3ma2LWfHkn3na3_g4Wd6RUFHj8_oCMyakkEQY8QcPSRLalFPOskPfXWRQfuJHAj4altmTmbKablh_-Jki-N5ql9YD3Q1qnYMxW5bUOFpstqHClk7kxApFHusXPwU2QmLWlbDdAZ5bkNGXrys0gMhBflCiyC232F4kA-UxrRfPeSDGV",
    pricing: [
      { label: "Per Person (3+)", price: "₹3,000+" },
      { label: "Per Person (5+)", price: "₹2,500+" }
    ],
    features: [
      "Quick & Elegant Looks",
      "Group Coordination",
      "On-site Service",
      "Hair & Makeup Included"
    ],
    process: [
      { step: "Scheduling", desc: "Managing time for all guests." },
      { step: "Artistry", desc: "Creating consistent, beautiful looks." }
    ]
  }
};

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  
  const detail = id ? serviceDetails[id] : null;

  if (!detail) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-2xl font-headline text-primary">Service not found</h1>
        <NavLink to="/services" className="text-secondary hover:underline mt-4 inline-block">Back to Services</NavLink>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-background"
    >
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img 
          src={detail.image} 
          alt={t(`services.${detail.id}.title`)}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end pb-20 px-12">
          <div className="max-w-7xl mx-auto w-full">
            <NavLink to="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-5 h-5" /> Back to Services
            </NavLink>
            <div className="flex items-center gap-6 mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center text-white">
                {detail.icon}
              </div>
              <h1 className="font-headline text-5xl md:text-7xl text-white italic">{t(`services.${detail.id}.title`)}</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-32">
            <section>
              <h2 className="font-headline text-3xl text-primary mb-6">About the Service</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed opacity-90">
                {t(`services.${detail.id}.desc`)}
              </p>
            </section>

            <section>
              <h2 className="font-headline text-3xl text-primary mb-8">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {detail.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-surface-variant/30 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                    <span className="text-on-surface font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-headline text-3xl text-primary mb-8">The Process</h2>
              <div className="space-y-8">
                {detail.process.map((p, i) => (
                  <div key={i} className="flex gap-8">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">
                        {i + 1}
                      </div>
                      {i < detail.process.length - 1 && <div className="w-[2px] h-full bg-outline-variant my-2"></div>}
                    </div>
                    <div className="pb-8">
                      <h4 className="font-bold text-xl text-on-surface mb-2">{p.step}</h4>
                      <p className="text-on-surface-variant">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-white p-8 rounded-2xl luxury-shadow border border-outline-variant/30">
              <h3 className="font-headline text-2xl text-primary mb-6">Pricing</h3>
              <div className="space-y-4 mb-8">
                {detail.pricing.map((p, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-outline-variant/30 last:border-0">
                    <span className="text-on-surface-variant">{p.label}</span>
                    <span className="font-bold text-primary flex items-center gap-1">
                      {p.price}
                    </span>
                  </div>
                ))}
              </div>
              <NavLink to="/contact" className="block w-full bg-secondary text-white text-center py-4 rounded-xl font-semibold hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20">
                Book This Service
              </NavLink>
            </div>

            <div className="bg-primary-container/30 p-8 rounded-2xl">
              <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" /> Duration
              </h3>
              <p className="text-on-surface-variant text-sm mb-6">Varies by specific look, typically 2-4 hours for full transformations.</p>
              
              <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" /> Location
              </h3>
              <p className="text-on-surface-variant text-sm">Available at our studio or as a home service in Vadodara & Ahmedabad.</p>
            </div>
          </aside>
        </div>
      </div>
    </motion.div>
  );
}
