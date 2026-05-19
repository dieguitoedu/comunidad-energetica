import { motion, AnimatePresence } from 'motion/react';
import { Home, School, Building2, Sun, Zap, Info } from 'lucide-react';
import { useState, useEffect } from 'react';

type EntityType = 'school' | 'house_with_pv' | 'house_no_pv' | 'association';

interface Entity {
  id: string;
  type: EntityType;
  name: string;
  x: number;
  y: number;
  hasPV: boolean;
  isReceiving: boolean;
}

export default function EnergyGame() {
  const [entities, setEntities] = useState<Entity[]>([
    { id: '1', type: 'school', name: 'IES La Janda', x: 50, y: 30, hasPV: true, isReceiving: true },
    { id: '2', type: 'house_with_pv', name: 'Casa de Ana', x: 20, y: 20, hasPV: true, isReceiving: false },
    { id: '3', type: 'house_no_pv', name: 'Casa de Pedro', x: 80, y: 25, hasPV: false, isReceiving: false },
    { id: '4', type: 'association', name: 'Alcer Gades', x: 30, y: 70, hasPV: false, isReceiving: false },
    { id: '5', type: 'house_no_pv', name: 'Casa de Maria', x: 65, y: 75, hasPV: false, isReceiving: false },
    { id: '6', type: 'association', name: 'Cruz Roja', x: 85, y: 65, hasPV: false, isReceiving: false },
  ]);

  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "El origen", desc: "Todo empieza en el IES La Janda, donde el sol genera energía limpia en su cubierta." },
    { title: "Compartiendo", desc: "La energía sobrante fluye por el pueblo hacia quienes no tienen placas." },
    { title: "Comunidad Viva", desc: "Asociaciones, vecinos y comercios se benefician del sol de Vejer." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (activeStep === 0) {
      setEntities(prev => prev.map(e => ({ ...e, isReceiving: e.type === 'school' })));
    } else if (activeStep === 1) {
      setEntities(prev => prev.map(e => ({ ...e, isReceiving: e.type === 'school' || e.type.startsWith('house') })));
    } else {
      setEntities(prev => prev.map(e => ({ ...e, isReceiving: true })));
    }
  }, [activeStep]);

  return (
    <section id="juego" className="py-24 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-black mb-4 font-bold">¿Cómo funciona la Comunidad?</h2>
          <p className="text-stone-900 max-w-2xl mx-auto font-black">
            Observa cómo fluye la energía solar por nuestro pueblo blanco. Un proyecto técnico hecho realidad por el profesorado de IES La Janda.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 relative bg-white rounded-[40px] p-8 aspect-video border border-primary/10 overflow-hidden shadow-inner">
            {/* Background elements to suggest a village */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-dashed border-primary/20 rounded-full" />
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border-2 border-dashed border-primary/20 rounded-full" />
            </div>

            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <AnimatePresence>
                {entities.filter(e => e.type !== 'school' && e.isReceiving).map(e => (
                  <motion.line
                    key={`line-${e.id}`}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    x1="50%" y1="30%"
                    x2={`${e.x}%`} y2={`${e.y}%`}
                    className="stroke-primary/40 stroke-2"
                    strokeDasharray="8 8"
                  />
                ))}
              </AnimatePresence>
            </svg>

            {/* Entities */}
            {entities.map((entity) => (
              <motion.div
                key={entity.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute"
                style={{ left: `${entity.x}%`, top: `${entity.y}%`, transform: 'translate(-50%, -50%)' }}
              >
                <div className={`relative p-4 rounded-2xl transition-all duration-500 ${entity.isReceiving ? 'bg-white shadow-xl scale-110 ring-2 ring-primary' : 'bg-stone-200/50 grayscale opacity-40'}`}>
                  {entity.type === 'school' && <School className={`w-8 h-8 ${entity.isReceiving ? 'text-primary' : 'text-stone-400'}`} />}
                  {entity.type.startsWith('house') && <Home className={`w-8 h-8 ${entity.isReceiving ? 'text-blue-500' : 'text-stone-400'}`} />}
                  {entity.type === 'association' && <Building2 className={`w-8 h-8 ${entity.isReceiving ? 'text-emerald-500' : 'text-stone-400'}`} />}
                  
                  {entity.hasPV && (
                    <div className="absolute -top-2 -right-2 bg-primary-muted p-1 rounded-md shadow-sm">
                      <Sun className="w-3 h-3 text-primary-dark" />
                    </div>
                  )}

                  {entity.isReceiving && (
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2"
                    >
                      <Zap className="w-4 h-4 text-primary fill-primary" />
                    </motion.div>
                  )}
                  
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-black">{entity.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div className="bg-primary-light/95 backdrop-blur p-4 rounded-2xl shadow-lg border border-primary/20 max-w-xs transition-all">
                <p className="text-xs font-bold text-primary-dark mb-1 uppercase tracking-tighter flex items-center gap-1">
                  <Info className="w-3 h-3" /> Estado Actual
                </p>
                <p className="text-sm text-black font-black leading-snug">
                  {steps[activeStep].desc}
                </p>
              </div>
              
              <div className="flex gap-1">
                {steps.map((_, i) => (
                  <div key={i} className={`h-1.5 rounded-full transition-all ${i === activeStep ? 'w-8 bg-primary' : 'w-3 bg-stone-300'}`} />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-black font-black">Uniendo puntos</h3>
            <p className="text-black text-sm leading-relaxed font-bold">
              La comunidad funciona mediante una red virtual. No necesitas cables nuevos; usamos la red existente para asignar los excedentes de las placas solares a los miembros que los necesitan.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary-muted flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[10px] font-bold text-primary-dark">01</span>
                </div>
                <div>
                  <h4 className="text-sm font-black text-black uppercase">Producción Local</h4>
                  <p className="text-xs text-black font-bold">Instalación en la cubierta del IES La Janda.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[10px] font-bold text-blue-700">02</span>
                </div>
                <div>
                  <h4 className="text-sm font-black text-black uppercase">Reparto Inteligente</h4>
                  <p className="text-xs text-black font-bold">Se prioriza a familias vulnerables y asociaciones.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[10px] font-bold text-emerald-700">03</span>
                </div>
                <div>
                  <h4 className="text-sm font-black text-black uppercase">Impacto Social</h4>
                  <p className="text-xs text-black font-bold">Menos CO2 y facturas más bajas para el pueblo.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
