/**
 * Archivo: MainLayout.tsx
 * Sirve para: construir la estructura principal de la web (header, secciones y footer).
 * Consejo: piensa el layout como "esqueleto"; primero ordena bloques y luego ajusta estilos.
 */
import Footer from '../components/main/footer/Footer.tsx';
import Header from '../components/main/header/Header.tsx';
import QSomos from '../section/Qsomos.tsx';
import Formacion from '../section/Formacion';
import Servicios from '../section/Servicios.tsx';
import Projects from '../section/Trabajos.tsx';
import Contact from '../section/Contact.tsx';

export const MainLayout = () => {
  return (
    <div className="min-h-screen w-full bg-slate-900 text-white">
        <Header />
        <main className="pt-16">
          <QSomos />
          <Formacion />
          <Servicios />
          <Projects />
          <Contact />
          
        </main>
        <Footer />
    </div>
  )
}