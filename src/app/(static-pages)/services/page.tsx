// pages/servicios.tsx
import Head from "next/head";
import Link from "next/link";

const servicios = [
  {
    titulo: "Desarrollo de Software a Medida",
    descripcion:
      "Creamos aplicaciones web, móviles y de escritorio que se adaptan 100% a tus necesidades, usando tecnologías modernas como Next.js, Node.js y Flutter.",
  },
  {
    titulo: "Analítica y Ciencia de Datos",
    descripcion:
      "Transformamos tus datos en conocimiento con soluciones de inteligencia de negocios, dashboards, modelos predictivos y machine learning.",
  },
  {
    titulo: "Automatización de Procesos",
    descripcion:
      // "Reducimos tareas repetitivas a través de bots, RPA y scripts personalizados que integran tus herramientas de trabajo diario.",
      "Reducimos tareas repetitivas a través del diseño de sistemas de información optimizando procesos.",
  },
  {
    titulo: "Integración de Sistemas",
    descripcion:
      "Conectamos tus sistemas internos, plataformas externas y APIs para que todo fluya sin fricciones.",
  },
  {
    titulo: "Consultoría y Transformación Digital",
    descripcion:
      "Te asesoramos en decisiones tecnológicas estratégicas para escalar tu negocio con herramientas digitales.",
  },
  {
    titulo: "Visualización e Inteligencia de Negocio",
    descripcion:
      "Creamos reportes, tableros interactivos y sistemas de monitoreo en tiempo real con herramientas como Power BI y Grafana.",
  },
];

export default function Servicios() {
  return (
    <>
      <Head>
        <title>Servicios | Datrix YB</title>
        <meta name="description" content="Servicios a medida en desarrollo de software y análisis de datos." />
      </Head>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Soluciones diseñadas para tus desafíos</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            En Datrix YB combinamos software, datos e innovación para potenciar tus decisiones y automatizar procesos.
          </p>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border shadow hover:shadow-lg transition p-6"
            >
              <h2 className="text-xl font-semibold mb-2">{servicio.titulo}</h2>
              <p className="text-gray-600">{servicio.descripcion}</p>
            </div>
          ))}
        </section>

        <section className="bg-blue-100 rounded-2xl p-10 text-center shadow-inner">
          <h3 className="text-2xl font-bold mb-4">¿Listo para llevar tu empresa al siguiente nivel?</h3>
          <p className="text-gray-700 mb-6">
            Agenda una llamada con nosotros y descubre cómo podemos ayudarte a crear soluciones tecnológicas que impulsen tus resultados.
          </p>
          <button
            
            className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition"
          >
               <Link href="/contact" className="hover:text-primary">    Contáctanos</Link>
        
          </button>
        </section>
      </main>
    </>
  );
}
