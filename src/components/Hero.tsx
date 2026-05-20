import { motion } from 'motion/react';
import { Power, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Logo and Badge */}
            <div className="flex flex-col items-start gap-4">
              <img src={`${import.meta.env.BASE_URL}comunidad_logo.png`} alt="Logo Comunidad" className="w-24 h-24 md:w-28 md:h-28 object-contain" loading="lazy" />
              <span className="inline-block py-1 px-3 bg-primary-muted text-primary-dark text-xs font-black rounded-full uppercase tracking-widest">
                Proyecto IES La Janda
              </span>
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
              <a href="#juego" className="px-8 py-4 bg-primary text-white rounded-full font-bold flex items-center gap-2 hover:bg-primary-dark transition-all group shadow-md text-sm md:text-base">
                Ver cómo funciona <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contacto" className="px-8 py-4 border border-primary/20 text-black bg-white/50 rounded-full font-bold hover:bg-white transition-all text-sm md:text-base">
                Saber más
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual Elements & Floating Quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative mt-8 lg:mt-0"
          >
            {/* Elegant Polaroid-style container for school rooftop solar panels */}
            <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl relative border-8 border-white rotate-2 hover:rotate-0 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&q=80&w=1200" 
                alt="Instalación fotovoltaica en el IES La Janda" 
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent animate-fade-in" />
              
              {/* Overlay Badge */}
              <span className="absolute top-4 left-4 py-1.5 px-3.5 bg-black/75 backdrop-blur text-white text-[10px] font-black rounded-full uppercase tracking-widest border border-white/10">
                Instalación Escolar
              </span>
            </div>

            {/* Quote Card */}
            <div className="absolute -bottom-8 -left-4 md:-left-8 p-5 bg-white/95 backdrop-blur rounded-2xl shadow-xl max-w-xs border border-primary/10 -rotate-1 hover:rotate-0 transition-all duration-500">
              <div className="flex items-center gap-4 mb-3 text-primary">
                <Power className="w-6 h-6" />
                <div className="h-0.5 flex-1 bg-primary-light" />
              </div>
              <p className="text-black font-serif italic text-sm md:text-base font-bold leading-snug">
                "No es necesario tener placas solares para ahorrar."
              </p>
              <p className="text-[10px] text-stone-500 font-bold uppercase mt-1 tracking-widest">
                Autoconsumo Colectivo
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full blur-3xl opacity-30 animate-pulse pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-stone-300 rounded-full blur-3xl opacity-20 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
