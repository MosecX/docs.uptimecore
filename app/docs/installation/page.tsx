import DocsNavbar from "@/app/components/DocsNavbar";

export default function InstallationPage() {
  return (
    <>
      <DocsNavbar />
      <main className="max-w-4xl mx-auto px-6 py-24 text-gray-200 space-y-16">
        <section className="space-y-6 text-center">
          <h1 className="text-4xl font-bold text-emerald-400">⚙️ Instalación</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Aprende cómo instalar <strong>UptimeCore</strong> en tu entorno local o servidor.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-300">📋 Requisitos previos</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Node.js v18 o superior</li>
            <li>npm v9 o superior</li>
            <li>Git instalado</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-300">📥 Clonar el repositorio</h2>
          <pre className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-sm text-gray-100">
{`git clone https://github.com/MosecX/uptimecore
cd uptimecore
npm install`}
          </pre>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-cyan-300">🚀 Ejecutar en desarrollo</h2>
          <pre className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-sm text-gray-100">
{`npm run dev`}
          </pre>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-amber-300">🏗️ Ejecutar en producción</h2>
          <pre className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-sm text-gray-100">
{`npm run build
npm run start`}
          </pre>
        </section>
      </main>
    </>
  );
}
