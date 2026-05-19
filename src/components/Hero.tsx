import { motion } from 'motion/react';
import { Power, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/comunidad_logo.png" alt="Logo Comunidad" className="w-32 h-32 object-contain mb-8" loading="lazy" />
            <span className="inline-block py-1 px-3 bg-primary-muted text-primary-dark text-xs font-black rounded-full mb-6 uppercase tracking-widest">
              Proyecto IES La Janda
            </span>
            <h1 className="text-5xl lg:text-7xl font-serif text-black leading-tight mb-6 font-bold">
              Energía <br />
              <span className="text-primary italic">para todos</span> <br />
              en Vejer.
            </h1>
            <p className="text-lg text-black mb-8 max-w-lg leading-relaxed font-black">
              La Comunidad Energética Social de Vejer es una iniciativa local, sostenible y abierta. Producimos, compartimos y gestionamos nuestra propia energía limpia.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#juego" className="px-8 py-4 bg-primary text-white rounded-full font-bold flex items-center gap-2 hover:bg-primary-dark transition-all group shadow-md">
                Ver cómo funciona <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contacto" className="px-8 py-4 border border-primary/20 text-black bg-white/50 rounded-full font-bold hover:bg-white transition-all">
                Saber más
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden lg:block relative"
          >
            <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl relative border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?auto=format&fit=crop&q=80&w=1200" 
                alt="Panoramic of Vejer de la Frontera" 
                className="object-cover w-full h-full"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
              <div className="absolute bottom-8 left-8 p-6 bg-white/90 backdrop-blur rounded-2xl shadow-xl max-w-xs">
                <div className="flex items-center gap-4 mb-4 text-primary">
                  <Power className="w-8 h-8" />
                  <div className="h-0.5 flex-1 bg-primary-light" />
                </div>
                <p className="text-black font-serif italic text-lg whitespace-pre-line font-bold">
                  "No es necesario tener placas solares para ahorrar."
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-stone-300 rounded-full blur-3xl opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
