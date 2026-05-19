import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="contacto" className="py-24 bg-stone-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-5xl font-serif text-white mb-8">¿Quieres formar parte del cambio?</h2>
          <p className="text-stone-400 text-lg mb-12 leading-relaxed">
            Estamos abiertos a toda la ciudadanía de Vejer: personas individuales, pymes, comercios y asociaciones. Ven y benefíciate de una iniciativa local y abierta.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="mailto:VejerCE@gmail.com" 
              className="flex-1 p-8 bg-white/5 border border-white/10 rounded-[32px] group hover:bg-white/10 transition-all text-left"
            >
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mb-6 text-white">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Escríbenos</h3>
              <p className="text-stone-400 text-sm mb-4">VejerCE@gmail.com</p>
              <span className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                Contactar <ArrowRight className="w-4 h-4" />
              </span>
            </a>

            <div className="flex-1 p-8 bg-primary-dark rounded-[32px] text-white">
              <h3 className="font-bold text-xl mb-2">Ven a visitarnos</h3>
              <p className="text-primary-light text-sm mb-6 leading-relaxed">
                El proyecto nace en el departamento de Energías Renovables del IES La Janda.
              </p>
              <div className="pt-6 border-t border-primary/20">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-70">Ubicación</span>
                <p className="font-medium mt-1 uppercase text-sm">IES La Janda, Vejer de la Frontera</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
