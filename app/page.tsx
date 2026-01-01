import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <main className="pt-24 px-6 max-w-5xl mx-auto space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-emerald-400">🚀 UptimeCore</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Dashboard premium para monitoreo de servicios, con contacto directo vía SMTP y diseño con glassmorphism.
          </p>
        </section>

        {/* Features Section */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-amber-300">📊 Estado en tiempo real</h2>
            <p className="text-gray-400 mt-2">
              Monitorea uptime y mantenimientos con visuales claros y coherentes.
            </p>
          </div>

          <div className="glass p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-sky-400">📱 Rendimiento móvil</h2>
            <p className="text-gray-400 mt-2">
              Optimizado para móviles con puntajes Lighthouse sobresalientes.
            </p>
          </div>

          <div className="glass p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-pink-400">📬 Contacto confiable</h2>
            <p className="text-gray-400 mt-2">
              Formulario integrado con Nodemailer + Gmail SMTP para comunicación directa.
            </p>
          </div>

          <div className="glass p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-violet-400">🎨 Estilo premium</h2>
            <p className="text-gray-400 mt-2">
              Glassmorphism, tipografía emocional y coherencia visual en cada detalle.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
