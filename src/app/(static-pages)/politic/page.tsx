"use client"

export default function PrivacyPolicyPage() {
  const sections = [
    {
      number: "1",
      title: "Introducción",
      content: (
        <p className="text-gray-600 leading-relaxed">
          En <strong className="text-gray-800">Datrix YB</strong>, valoramos y respetamos su privacidad. 
          Esta política describe cómo recopilamos, utilizamos y protegemos sus datos personales, 
          en conformidad con la <strong>Ley 1581 de 2012</strong> de Colombia sobre protección de datos personales.
        </p>
      ),
    },
    {
      number: "2",
      title: "Datos que Recopilamos",
      content: (
        <>
          <p className="text-gray-600 mb-3">Podemos recopilar la siguiente información:</p>
          <ul className="space-y-2">
            {["Nombre completo", "Correo electrónico", "Número de contacto", "Empresa o entidad"].map((item) => (
              <li key={item} className="flex items-center gap-2 text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      number: "3",
      title: "Uso de la Información",
      content: (
        <>
          <p className="text-gray-600 mb-3">Utilizamos la información recopilada para:</p>
          <ul className="space-y-2">
            {[
              "Proveer nuestros servicios de software y análisis de datos",
              "Responder consultas comerciales",
              "Enviar información relevante sobre nuestros productos o eventos",
              "Mejorar la experiencia de usuario en nuestro sitio web",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      number: "4",
      title: "Compartir Datos",
      content: (
        <p className="text-gray-600 leading-relaxed">
          No compartimos sus datos con terceros, salvo obligación legal o cuando sea necesario 
          para la ejecución de nuestros servicios mediante aliados estratégicos bajo 
          acuerdos de confidencialidad.
        </p>
      ),
    },
    {
      number: "5",
      title: "Derechos del Titular",
      content: (
        <>
          <p className="text-gray-600 mb-3">De acuerdo con la legislación colombiana, usted puede:</p>
          <ul className="space-y-2">
            {[
              "Consultar y acceder a sus datos personales",
              "Solicitar corrección o actualización",
              "Solicitar la supresión de sus datos",
              "Revocar la autorización otorgada para el tratamiento",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      number: "6",
      title: "Seguridad",
      content: (
        <p className="text-gray-600 leading-relaxed">
          Implementamos medidas técnicas y administrativas para garantizar la protección 
          de su información personal frente a accesos no autorizados.
        </p>
      ),
    },
    {
      number: "7",
      title: "Cambios a esta Política",
      content: (
        <p className="text-gray-600 leading-relaxed">
          Nos reservamos el derecho de modificar esta política en cualquier momento. 
          Cualquier cambio será publicado en esta página con la fecha de actualización correspondiente.
        </p>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-cyan-50">
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Encabezado */}
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-500 mb-3 block">
            Legal
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Política de Privacidad</h1>
          <p className="text-sm text-gray-400">Última actualización: 12 de abril de 2025</p>
        </div>

        {/* Secciones */}
        <div className="space-y-6">
          {sections.map((s) => (
            <div key={s.number} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-50 text-cyan-600 text-sm font-bold shrink-0">
                  {s.number}
                </span>
                <div className="flex-1">
                  <h2 className="text-base font-semibold text-gray-900 mb-3">{s.title}</h2>
                  {s.content}
                </div>
              </div>
            </div>
          ))}

          {/* Sección Contacto aparte con destacado */}
          <div className="bg-cyan-600 rounded-2xl p-6 text-white">
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white text-sm font-bold shrink-0">
                8
              </span>
              <div>
                <h2 className="text-base font-semibold mb-4">Contacto</h2>
                <p className="text-cyan-100 text-sm mb-4">
                  Si tiene preguntas sobre esta política o desea ejercer sus derechos como titular de datos, puede contactarnos:
                </p>
                <div className="space-y-2 text-sm">
                  <a href="mailto:datrixyb@gmail.com" className="flex items-center gap-2 hover:text-white text-cyan-100 transition-colors">
                    📧 datrixyb@gmail.com
                  </a>
                  <p className="flex items-center gap-2 text-cyan-100">
                    📍 Armenia, Quindío, Colombia
                  </p>
                  <a href="tel:+573127066940" className="flex items-center gap-2 hover:text-white text-cyan-100 transition-colors">
                    📞 +57 312 7066940
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}