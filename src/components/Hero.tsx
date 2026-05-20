import { motion } from 'motion/react';
import { Power, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col space-y-12">
          {/* Logo and Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-4"
          >
            <img src="./comunidad_logo.png" alt="Logo Comunidad" className="w-24 h-24 md:w-28 md:h-28 object-contain" loading="lazy" />
            <span className="inline-block py-1 px-3 bg-primary-muted text-primary-dark text-xs font-black rounded-full uppercase tracking-widest">
              Proyecto IES La Janda
            </span>
          </motion.div>

          {/* Title and Description Split Grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-black leading-tight font-bold">
                Energía <br />
                <span className="text-primary italic">para todos</span> <br />
                en Vejer.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-6 lg:pt-2"
            >
              <p className="text-lg text-black leading-relaxed font-black">
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
          </div>

          {/* Panoramic Image container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative pt-6"
          >
            <div className="aspect-[16/8] sm:aspect-[16/6] md:aspect-[21/8] lg:aspect-[21/6] rounded-[40px] overflow-hidden shadow-2xl relative border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?auto=format&fit=crop&q=80&w=2000" 
                alt="Panoramic of Vejer de la Frontera" 
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 p-6 bg-white/95 backdrop-blur rounded-2xl shadow-xl max-w-xs md:max-w-sm border border-primary/10">
                <div className="flex items-center gap-4 mb-4 text-primary">
                  <Power className="w-6 h-6 md:w-8 md:h-8" />
                  <div className="h-0.5 flex-1 bg-primary-light" />
                </div>
                <p className="text-black font-serif italic text-base md:text-lg font-bold leading-snug">
                  "No es necesario tener placas solares para ahorrar."
                </p>
              </div>
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
