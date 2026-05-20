import { motion } from 'motion/react';
import { Power, ArrowRight, Flower2, Sparkles, Sun } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-primary-light">
      {/* Soft warm and natural background glows to make it extra cute ("cuqui") */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-muted/40 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Logo, School & Community Badges */}
            <div className="flex flex-col items-start gap-4">
              <img 
                src={`${import.meta.env.BASE_URL}comunidad_logo.png`} 
                alt="Logo Comunidad" 
                className="w-24 h-24 md:w-28 md:h-28 object-contain drop-shadow" 
                loading="lazy" 
              />
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 py-1 px-3.5 bg-emerald-100 text-primary-dark text-xs font-black rounded-full uppercase tracking-widest border border-emerald-200">
                  <Flower2 className="w-3.5 h-3.5 text-primary" /> Proyecto IES La Janda
                </span>
                <span className="inline-flex items-center gap-1.5 py-1 px-3.5 bg-amber-100 text-amber-800 text-xs font-black rounded-full uppercase tracking-widest border border-amber-200">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" /> ¡Comunidad Viva!
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-black leading-tight font-bold">
              Energía <br />
              <span className="text-primary italic">para todos</span> <br />
              en Vejer.
            </h1>

            <p className="text-lg text-black leading-relaxed font-black max-w-xl">
              La Comunidad Energética Social de Vejer es una iniciativa local, sostenible y abierta. Producimos, compartimos y gestionamos nuestra propia energía limpia.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#juego" 
                className="px-8 py-4 bg-primary text-white rounded-full font-bold flex items-center gap-2 hover:bg-primary-dark transition-all group shadow-md hover:shadow-lg text-sm md:text-base"
              >
                Ver cómo funciona <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contacto" 
                className="px-8 py-4 border border-primary/20 text-black bg-white/60 rounded-full font-bold hover:bg-white transition-all text-sm md:text-base shadow-sm hover:shadow-md"
              >
                Saber más
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual Elements (Straight, Beautiful Polaroid & Sticky Notes) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center"
          >
            {/* Elegant Polaroid-style container - strictly unrotated, super clean and cute */}
            <div className="relative p-4 pb-12 bg-white rounded-3xl shadow-xl border border-stone-200/40 max-w-sm w-full transition-all duration-500 hover:shadow-2xl hover:scale-102">
              {/* Cute adhesive tape effect at the top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-amber-100/50 border border-amber-200/40 shadow-xs backdrop-blur-xs rounded-xs" />

              {/* Overlapping Sun Badge on top left of image */}
              <div className="absolute top-6 left-6 z-10 bg-amber-400 text-stone-900 rounded-full p-2.5 shadow-md flex items-center justify-center border-2 border-white">
                <Sun className="w-5 h-5 animate-spin-slow" />
              </div>

              {/* The image: Real, warm, smiling Spanish grandmothers/elderly group in a village */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 relative">
                <img 
                  src="https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?auto=format&fit=crop&q=80&w=1200" 
                  alt="Vecinos de Vejer, Manuel y María, disfrutando de la energía limpia" 
                  className="object-cover w-full h-full"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent" />
              </div>

              {/* Polaroid bottom caption */}
              <div className="mt-4 text-center px-2">
                <p className="font-serif text-lg font-bold text-black italic">
                  Manuel y María
                </p>
                <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest mt-0.5">
                  Vecinos y beneficiarios del autoconsumo
                </p>
              </div>

              {/* Overlapping super cuqui Post-it note */}
              <div className="absolute -top-6 -right-6 rotate-6 bg-[#fffbeb] border-2 border-amber-200 shadow-lg rounded-2xl p-4 max-w-[170px] text-stone-800 pointer-events-none transform transition-all duration-500 hover:rotate-0 hover:scale-105">
                <div className="flex items-center gap-1.5 text-amber-600 mb-1">
                  <Flower2 className="w-4 h-4 shrink-0" />
                  <span className="text-[10px] font-black uppercase tracking-widest leading-none">Sol para todos</span>
                </div>
                <p className="font-serif italic text-xs leading-normal">
                  "El sol de nuestro pueblo compartido con amor." 🌻
                </p>
              </div>
            </div>

            {/* Quote Card (Unrotated and highly polished) */}
            <div className="absolute -bottom-8 -left-6 md:-left-12 p-5 bg-white rounded-2xl shadow-xl max-w-[240px] border border-primary/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center gap-4 mb-3 text-primary">
                <Power className="w-6 h-6 shrink-0" />
                <div className="h-0.5 flex-1 bg-primary-light" />
              </div>
              <p className="text-black font-serif italic text-sm md:text-base font-bold leading-snug">
                "No es necesario tener placas solares para ahorrar."
              </p>
              <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[10px] text-stone-500 font-bold uppercase tracking-wider">
                  Autoconsumo Social
                </span>
                <span className="text-xs">🏡💚</span>
              </div>
            </div>

            {/* Micro decorative accents */}
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-amber-400 rounded-full blur-3xl opacity-30 animate-pulse pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-stone-300 rounded-full blur-3xl opacity-20 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
