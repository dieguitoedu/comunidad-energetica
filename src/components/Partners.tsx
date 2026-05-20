export default function Partners() {
  const partners = [
    { name: "Junta de Andalucía", logo: "https://www.juntadeandalucia.es/images/logo_junta_andalucia.png" },
    { name: "Diputación de Cádiz", logo: "https://www.dipucadiz.es/export/system/modules/es.dipucadiz.portal/resources/img/logo-diputada-cadiz.png" },
    { name: "Ayuntamiento de Vejer", logo: "https://www.ayto-vejer.es/wp-content/uploads/2021/04/logo_ayto_vejer.png" },
    { name: "Moneleg", logo: "https://moneleg.com/wp-content/uploads/2022/02/LOGO-MONELEG.png" }
  ];

  return (
    <section className="py-20 bg-white border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-black mb-12">Impulsado por e instituciones colaboradoras</p>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 transition-all duration-700">
          <div className="flex flex-col items-center gap-2">
            <img src={`${import.meta.env.BASE_URL}ies_la_janda_logo.png`} alt="IES La Janda" className="h-24 object-contain grayscale hover:grayscale-0 transition-all" loading="lazy" />
          </div>
          <div className="h-8 flex items-center justify-center font-black text-black/80 text-sm whitespace-nowrap grayscale">MINISTERIO EDUCACIÓN</div>
          <div className="h-8 flex items-center justify-center font-black text-black/80 text-sm whitespace-nowrap text-blue-900/80 grayscale">JUNTA DE ANDALUCIA</div>
          <div className="h-8 flex items-center justify-center font-bold text-black/80 text-sm whitespace-nowrap uppercase grayscale">Diputación de Cádiz</div>
          <div className="h-8 flex items-center justify-center font-bold text-black/80 text-sm whitespace-nowrap text-emerald-900/80 grayscale uppercase">OTC CÁDIZ</div>
          <div className="h-8 flex items-center justify-center font-bold text-black/80 text-sm whitespace-nowrap grayscale">MONELEG</div>
        </div>
      </div>
    </section>
  );
}
