/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EnergyGame from './components/EnergyGame';
import InfoGrid from './components/InfoGrid';
import CTASection from './components/CTASection';
import Partners from './components/Partners';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-primary-light selection:bg-primary-muted selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <section id="que-es" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1 space-y-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">Introducción</span>
                <h2 className="text-4xl lg:text-5xl font-serif text-black leading-tight font-bold">
                  Un proyecto de todos, para el pueblo de Vejer.
                </h2>
                <div className="h-1 w-20 bg-primary rounded-full" />
                <p className="text-black leading-relaxed text-lg font-bold">
                  Una comunidad energética es un grupo de personas, empresas y entidades locales que se unen para producir, compartir y gestionar su propio consumo de energía de forma sostenible.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-6">
                  <div>
                    <span className="block text-3xl font-serif text-black mb-1">Impacto</span>
                    <p className="text-sm text-stone-900 font-bold">Instalación pionera sobre la cubierta del IES La Janda.</p>
                  </div>
                  <div>
                    <span className="block text-3xl font-serif text-black mb-1">Social</span>
                    <p className="text-sm text-stone-900 font-bold">Destinada a familias en situación de vulnerabilidad.</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 overflow-hidden rounded-[40px] shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?auto=format&fit=crop&q=80&w=1200" 
                  alt="Panorámica de Vejer de la Frontera" 
                  className="h-96 w-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        <EnergyGame />
        <InfoGrid />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

