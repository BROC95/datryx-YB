export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12 md:px-20 lg:px-32">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-600 mb-6">Sobre Nosotros – Datrix YB</h1>

        <p className="text-lg mb-6">
          En <strong>Datrix YB</strong> transformamos ideas en soluciones digitales inteligentes. Somos una empresa
          especializada en el <strong>desarrollo de software a medida</strong> y en la <strong>analítica avanzada de datos</strong>, con el objetivo de
          potenciar la toma de decisiones en empresas de cualquier sector.
        </p>

        <p className="text-lg mb-6">
          Desde nuestros inicios, nos hemos enfocado en crear herramientas tecnológicas <strong>personalizadas</strong>, basadas en una
          comprensión profunda de las necesidades específicas de cada cliente. Combinamos conocimientos en ingeniería de software,
          ciencia de datos e inteligencia artificial para <strong>convertir datos en valor</strong> y procesos en <strong>experiencias eficientes y escalables</strong>.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10 border-b-2 border-gray-200 pb-10">
          <div>
            <h2 className="text-2xl font-semibold text-cyan-500 mb-2">🚀 Nuestra Misión</h2>
            <p>Ofrecer soluciones tecnológicas innovadoras, eficientes y escalables, que impulsen la transformación digital de nuestros clientes.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-cyan-500 mb-2">🔍 Nuestra Visión</h2>
            <p>Ser un referente en Latinoamérica en soluciones integrales de desarrollo a medida y análisis de datos.</p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-cyan-500 mb-4">🧩 Nuestros Valores</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Innovación constante:</strong> Adoptamos tecnologías actuales para ofrecer soluciones modernas.</li>
            <li><strong>Adaptabilidad:</strong> Nos ajustamos a cada cliente, cada industria, cada desafío.</li>
            <li><strong>Transparencia:</strong> Comunicación clara y procesos colaborativos.</li>
            <li><strong>Calidad y compromiso:</strong> Cada línea de código y análisis hechos con excelencia.</li>
            <li><strong>Orientación a resultados:</strong> Tu éxito es nuestro objetivo.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-cyan-500 mb-4">💼 ¿Qué hacemos en Datrix YB?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>🔧 Desarrollo de Software a Medida:</strong> Web, móvil — nada genérico, todo personalizado con documentación.</li>
            <li><strong>📊 Analítica y Ciencia de Datos:</strong> Dashboards, predicciones, automatización de reportes.</li>
            <li><strong>⚙️ Integración de Tecnologías:</strong> APIs, Cloud.</li>
            <li><strong>🤝 Consultoría:</strong> No solo ejecutamos, también guiamos y evolucionamos contigo.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
