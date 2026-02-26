/**
 * Archivo: About.tsx
 * Sirve para: renderizar la sección "Sobre mí" del portfolio.
 * Consejo: trabaja cada sección aislada y luego intégrala en el layout para depurar más rápido.
 */
import SectionTitle from "../components/main/SectionTittle";

export default function About() {
  return (
    <section id="about" className="py-32">
      <SectionTitle title="Sobre mí" />
    </section>
  );
}