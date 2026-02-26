/**
 * Archivo: Servicios.tsx
 * Sirve para: reservar la sección donde listarás servicios ofrecidos.
 * Consejo: define primero el tipo de dato de un servicio (titulo, descripcion, icono) antes del diseño.
 */
import SectionTitle from "../components/main/SectionTittle";

export default function Servicios() {
	return (
		<section id="servicios" className="py-32 scroll-mt-16">
			<SectionTitle title="Servicios" />
		</section>
	);
}
