import DocsNavbar from "@/app/components/DocsNavbar";

export default function ConfigurationPage() {
  return (
    <>
      <DocsNavbar />
      <main className="max-w-4xl mx-auto px-6 py-24 text-gray-200 space-y-16">
        {/* Hero */}
        <section className="space-y-6 text-center">
          <h1 className="text-4xl font-bold text-pink-400">🔐 Configuración</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ajusta las variables de entorno y prepara <strong>UptimeCore</strong> para funcionar correctamente en tu entorno local o servidor.
          </p>
        </section>

        {/* Variables de entorno */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-sky-300">📄 Variables de entorno</h2>
          <p className="text-gray-400">
            UptimeCore incluye un archivo <code>.env.local.example</code> con todas las variables necesarias.
            Para comenzar, copia este archivo y renómbralo a <code>.env.local</code>:
          </p>
          <pre className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-sm text-gray-100">
{`cp .env.local.example .env.local`}
          </pre>
          <p className="text-gray-400">
            Luego edita <code>.env.local</code> con tus credenciales:
          </p>
          <pre className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-sm text-gray-100">
{`GMAIL_USER=tu_correo@gmail.com
GMAIL_PASS=tu_app_password`}
          </pre>
          <p className="text-gray-400">
            Mantén <code>.env.local.example</code> intacto para que otros desarrolladores sepan qué variables son necesarias.
          </p>
        </section>

        {/* Configuración en VPS con Nginx */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-violet-300">🌐 Configuración en VPS con Nginx</h2>
          <p className="text-gray-400">
            Para desplegar en un VPS con Nginx, configura un proxy inverso:
          </p>
          <pre className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-sm text-gray-100">
{`server {
  listen 80;
  server_name tu-dominio.com;

  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}`}
          </pre>
        </section>

        {/* Configuración con SSL */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-green-300">🔒 Configuración con SSL (HTTPS)</h2>
          <p className="text-gray-400">
            Para habilitar SSL en tu VPS con Nginx, puedes usar <strong>Certbot</strong> y Let's Encrypt:
          </p>
          <ol className="list-decimal list-inside text-gray-400 space-y-2">
            <li>Instala Certbot en tu servidor (<code>sudo apt install certbot python3-certbot-nginx</code>).</li>
            <li>Ejecuta <code>sudo certbot --nginx -d tu-dominio.com -d www.tu-dominio.com</code>.</li>
            <li>Certbot configurará automáticamente Nginx para usar certificados SSL.</li>
            <li>Verifica que tu configuración ahora escuche en el puerto 443:</li>
          </ol>
          <pre className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-sm text-gray-100">
{`server {
  listen 443 ssl;
  server_name tu-dominio.com;

  ssl_certificate /etc/letsencrypt/live/tu-dominio.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/tu-dominio.com/privkey.pem;

  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}`}
          </pre>
          <p className="text-gray-400">
            Con esto tu aplicación estará disponible de forma segura en <strong>HTTPS</strong>.  
            Recuerda renovar certificados automáticamente con <code>sudo certbot renew --dry-run</code>.
          </p>
        </section>
      </main>
    </>
  );
}
