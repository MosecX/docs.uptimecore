import DocsNavbar from "@/app/components/DocsNavbar";

export default function UsagePage() {
  return (
    <>
      <DocsNavbar />

      <main className="max-w-4xl mx-auto px-6 py-24 text-gray-200 space-y-16">
        {/* Hero */}
        <section className="space-y-6 text-center">
          <h1 className="text-4xl font-bold text-sky-400">📦 Uso de UptimeCore</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Aprende cómo ejecutar y utilizar <strong>UptimeCore</strong> en tu entorno local y en producción.{" "}
            Aquí encontrarás los comandos básicos y las formas de interactuar con el dashboard premium.
          </p>
        </section>

        {/* Modo desarrollo */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-emerald-300">🚀 Modo desarrollo</h2>
          <p className="text-gray-400">
            Para iniciar el servidor en modo desarrollo y trabajar con hot-reload:
          </p>
          <pre className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-sm text-gray-100">
{`npm run dev`}
          </pre>
          <p className="text-gray-400">
            Accede en tu navegador a <code>http://localhost:3000</code>.
          </p>
        </section>

        {/* Modo producción */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-amber-300">🏗️ Modo producción</h2>
          <p className="text-gray-400">
            Para compilar y ejecutar en producción:
          </p>
          <pre className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-sm text-gray-100">
{`npm run build
npm run start`}
          </pre>
          <p className="text-gray-400">
            Esto levantará el servidor en el puerto <code>3000</code> con optimizaciones de Next.js.
          </p>
        </section>

        {/* Uso del dashboard */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-pink-300">📊 Uso del dashboard</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Visualiza el estado de tus servicios en tiempo real.</li>
            <li>Accede a la sección de <strong>Documentación</strong> para guías detalladas.</li>
            <li>Utiliza el formulario de contacto para enviar mensajes vía SMTP.</li>
            <li>Configura mantenimientos y notificaciones desde la interfaz.</li>
          </ul>
        </section>

        {/* VPS con Nginx */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-violet-300">🌐 Uso en VPS con Nginx</h2>
          <p className="text-gray-400">
            Si desplegaste en un VPS con Nginx, accede directamente a tu dominio configurado.{" "}
            El proxy inverso redirigirá las peticiones al servidor de UptimeCore en el puerto <code>3000</code>.
          </p>
          <p className="text-gray-400">
            Además, al estar alojado en un VPS, el sistema de <strong>monitoreo de uptime</strong> funcionará sin problema alguno,{" "}
            garantizando que tus servicios sean supervisados de manera constante y confiable.
          </p>
        </section>

        {/* SSL */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-300">🔒 Uso con SSL</h2>
          <p className="text-gray-400">
            Si configuraste SSL con Certbot, accede a tu aplicación mediante <strong>HTTPS</strong> en tu dominio.{" "}
            Esto asegura que la comunicación con el dashboard sea segura y confiable.
          </p>
        </section>

        {/* Deploy en Vercel */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-400">☁️ Deploy en Vercel</h2>
          <p className="text-gray-400">
            UptimeCore puede desplegarse fácilmente en <strong>Vercel</strong>, aprovechando su infraestructura serverless.{" "}
            Solo necesitas conectar tu repositorio en GitHub y Vercel se encargará de compilar y servir la aplicación.
          </p>
          <ol className="list-decimal list-inside text-gray-400 space-y-2">
            <li>Sube tu proyecto a GitHub.</li>
            <li>
              Entra a{" "}
              <a href="https://vercel.com" className="text-emerald-400 underline">
                Vercel
              </a>{" "}
              y crea un nuevo proyecto.
            </li>
            <li>Selecciona tu repositorio y configura las variables de entorno en el panel de Vercel.</li>
            <li>Vercel compilará automáticamente con <code>npm run build</code> y desplegará tu aplicación.</li>
          </ol>
          <p className="text-gray-400">
            ⚠️ Ten en cuenta que, debido al sistema de archivos que utiliza Vercel,{" "}
            <strong>no es posible escribir archivos persistentes</strong>.{" "}
            Esto afecta al archivo <code>status-history.json</code>, que UptimeCore usa para registrar el historial de uptime.{" "}
            Por lo tanto, el monitoreo de uptime <strong>no funcionará correctamente en Vercel</strong>.
          </p>
          <p className="text-gray-400">
            ✅ En cambio, si alojas UptimeCore en un <strong>VPS</strong> (con Nginx o similar),{" "}
            el sistema de uptime funcionará sin problema alguno, ya que el archivo <code>status-history.json</code>{" "}
            puede escribirse y mantenerse actualizado.
          </p>
        </section>
      </main>
    </>
  );
}
