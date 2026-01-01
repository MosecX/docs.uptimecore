import DocsNavbar from "../components/DocsNavbar";

export default function DocsIntroPage() {
  return (
    <>
      <DocsNavbar />

      <main className="max-w-4xl mx-auto px-6 py-24 text-gray-200 space-y-16">
        {/* Hero */}
        <section className="space-y-6 text-center">
          <h1 className="text-5xl font-bold text-emerald-400">📖 UptimeCore Docs</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Esta documentación te introduce a <strong>UptimeCore</strong>, un dashboard premium
            diseñado para monitoreo de servicios con un enfoque en confiabilidad, estética y
            comunicación directa vía SMTP.
          </p>
        </section>

        {/* Propósito del proyecto */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-sky-400">🌐 Propósito</h2>
          <p className="text-gray-400">
            UptimeCore nace para resolver una necesidad crítica: <strong>monitorear el estado de
            servicios en tiempo real</strong> y comunicar incidencias de manera clara y confiable.
            Más que un panel técnico, busca transmitir confianza y transparencia a los usuarios
            finales.
          </p>
        </section>

        {/* Filosofía */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-pink-400">💡 Filosofía</h2>
          <p className="text-gray-400">
            Cada detalle de UptimeCore está pensado para unir lo técnico con lo emocional:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Diseño <strong>glassmorphism</strong> para transmitir modernidad y claridad.</li>
            <li>Tipografía emocional (Varela Round) que aporta calidez y accesibilidad.</li>
            <li>Animaciones suaves que hacen que la experiencia sea fluida y confiable.</li>
            <li>Paleta premium que refuerza la identidad visual del proyecto.</li>
          </ul>
        </section>

        {/* Arquitectura */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-300">🛠️ Arquitectura</h2>
          <p className="text-gray-400">
            UptimeCore está construido sobre <strong>Next.js</strong> con App Router, integrando
            componentes reutilizables y estilos coherentes. La comunicación se gestiona con
            <strong> Nodemailer</strong> y Gmail SMTP, asegurando que los mensajes lleguen de forma
            confiable.
          </p>
          <pre className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-sm text-gray-100">
{`/app        → páginas principales
/components → componentes reutilizables
/styles     → estilos globales
/api        → endpoints para contacto y estado`}
          </pre>
        </section>

        {/* Valor diferencial */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-amber-300">✨ Valor diferencial</h2>
          <p className="text-gray-400">
            Lo que distingue a UptimeCore es su <strong>enfoque humano</strong>. No se limita a
            mostrar métricas, sino que busca generar confianza y transmitir emociones positivas
            mediante un diseño cuidado y comunicación directa.
          </p>
        </section>
      </main>
    </>
  );
}
