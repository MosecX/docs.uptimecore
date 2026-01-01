import DocsNavbar from "@/app/components/DocsNavbar";

export default function ContributionPage() {
  return (
    <>
      <DocsNavbar />

      <main className="max-w-4xl mx-auto px-6 py-24 text-gray-200 space-y-16">
        {/* Hero */}
        <section className="space-y-6 text-center">
          <h1 className="text-4xl font-bold text-violet-400">🤝 Contribución</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            UptimeCore es un proyecto abierto que busca crecer con la comunidad.  
            Tu participación es fundamental para mejorar tanto la parte técnica como la experiencia visual y emocional.
          </p>
        </section>

        {/* Cómo contribuir */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-emerald-300">📋 Cómo contribuir</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Abrir <strong>issues</strong> en GitHub para reportar errores o sugerir nuevas funcionalidades.</li>
            <li>Enviar <strong>pull requests</strong> con mejoras en código, documentación o diseño.</li>
            <li>Compartir el proyecto en comunidades y redes sociales para aumentar su visibilidad.</li>
          </ul>
        </section>

        {/* Flujo de trabajo */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-sky-300">🔄 Flujo de trabajo</h2>
          <p className="text-gray-400">
            Para mantener un flujo ordenado, sigue estos pasos al contribuir:
          </p>
          <pre className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-sm text-gray-100">
{`# Clona el repositorio
git clone https://github.com/MosecX/uptimecore

# Crea una nueva rama para tu mejora
git checkout -b feature/nombre-de-tu-mejora

# Haz tus cambios y confirma
git commit -m "Agrega nueva funcionalidad X"

# Sube tu rama
git push origin feature/nombre-de-tu-mejora

# Abre un Pull Request en GitHub`}
          </pre>
        </section>

        {/* Estilo de contribución */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-pink-300">🎨 Estilo de contribución</h2>
          <p className="text-gray-400">
            UptimeCore busca mantener una identidad premium y coherente.  
            Al contribuir, ten en cuenta:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Usar <strong>glassmorphism</strong> y tipografía emocional.</li>
            <li>Respetar la paleta de colores definida.</li>
            <li>Documentar cambios en <code>CHANGELOG.md</code> y actualizar <code>README.md</code>.</li>
            <li>Seguir convenciones de código claras y consistentes.</li>
          </ul>
        </section>

        {/* Comunidad */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-amber-300">🌍 Comunidad</h2>
          <p className="text-gray-400">
            La comunidad es el corazón de UptimeCore.  
            Participa en discusiones, comparte ideas y ayuda a otros usuarios a implementar el proyecto.
          </p>
        </section>
      </main>
    </>
  );
}
