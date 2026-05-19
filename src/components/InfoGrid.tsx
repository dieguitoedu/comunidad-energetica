import { ShieldCheck, Zap, Globe, Users, HeartHandshake, TrendingDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function InfoGrid() {
  const objectives = [
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Coste de la factura",
      desc: "Reducir el coste de la factura eléctrica de todos los participantes."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Energías Renovables",
      desc: "Fomentar el uso de energías verdes y sostenibles en nuestro entorno."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Independencia",
      desc: "Disminuir la dependencia de las grandes compañías eléctricas."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Medio Ambiente",
      desc: "Reducir la contaminación y el impacto ambiental en nuestra comarca."
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Labor Social",
      desc: "Impulsar la colaboración y el beneficio mutuo de los vecinos."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Comunidad",
      desc: "Unir a personas, comercios y asociaciones con un fin común."
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-serif text-black mb-6 leading-tight font-bold">Nuestros <br />Objetivos.</h2>
            <p className="text-black mb-8 leading-relaxed font-black">
              Trabajamos para que Vejer sea un referente en soberanía energética y solidaridad vecinal. El proyecto nace como algo pequeño pero con vocación de crecer.
            </p>
            <div className="p-6 bg-primary-light rounded-3xl border border-primary/20">
              <p className="text-primary-dark text-sm italic font-serif leading-relaxed font-bold">
                "Este es solo el comienzo. Buscamos soluciones colectivas para problemas individuales."
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {objectives.map((obj, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 bg-primary-light/30 rounded-[32px] shadow-sm border border-primary/10 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary mb-6 shadow-sm border border-primary/5">
                  {obj.icon}
                </div>
                <h3 className="text-lg font-black text-black uppercase tracking-tight mb-2">{obj.title}</h3>
                <p className="text-sm text-black leading-relaxed font-black">{obj.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
