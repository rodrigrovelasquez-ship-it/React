/**
 * Archivo: SectionTittle.tsx
 * Sirve para: reutilizar el título visual de cada sección del portfolio.
 * Consejo: reutilizar componentes pequeños acelera mucho el aprendizaje y ordena el proyecto.
 */
interface Props {
  title: string;
}

export default function SectionTitle({ title }: Props) {
  return (
    <h2 className="text-3xl font-bold mb-8 text-center">
      {title}
    </h2>
  );
}