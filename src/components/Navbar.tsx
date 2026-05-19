import { motion } from 'motion/react';
import { Sun, Users, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-light/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <img src="attachment_1.png" alt="Comunidad Energética Vejer" className="w-12 h-12 object-contain" referrerPolicy="no-referrer" />
            <span className="font-serif text-xl font-bold text-stone-950 tracking-tight">Vejer Energía Social</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-black text-stone-950 uppercase tracking-widest">
            <a href="#que-es" className="hover:text-primary transition-colors">¿Qué es?</a>
            <a href="#juego" className="hover:text-primary transition-colors">Comunidad Viva</a>
            <a href="#beneficios" className="hover:text-primary transition-colors">Beneficios</a>
            <a href="#contacto" className="px-5 py-2.5 bg-primary text-white rounded-full hover:bg-primary-dark transition-all shadow-sm">Únete</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-900">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-primary-light border-b border-primary/10 px-4 py-4 flex flex-col gap-4 text-stone-900 font-bold"
        >
          <a href="#que-es" onClick={() => setIsOpen(false)}>¿Qué es?</a>
          <a href="#juego" onClick={() => setIsOpen(false)}>Comunidad Viva</a>
          <a href="#beneficios" onClick={() => setIsOpen(false)}>Beneficios</a>
          <a href="#contacto" onClick={() => setIsOpen(false)} className="text-primary">Únete</a>
        </motion.div>
      )}
    </nav>
  );
}
