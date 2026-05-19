import { Sun } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-[#f5f5f0] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <img src="attachment_1.png" alt="Logo" className="w-10 h-10 object-contain" referrerPolicy="no-referrer" />
            <span className="font-serif text-lg font-bold text-stone-950">Vejer Energía Social</span>
          </div>
          
          <p className="text-sm text-stone-800 font-bold">
            © {new Date().getFullYear()} Comunidad Energética Social de Vejer de la Frontera.
          </p>

          <div className="flex gap-6 text-stone-900 text-xs uppercase font-black tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
