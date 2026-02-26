/**
 * Archivo: Servicios.tsx
 * Sirve para: reservar la sección donde listarás servicios ofrecidos.
 * Consejo: define primero el tipo de dato de un servicio (titulo, descripcion, icono) antes del diseño.
 */

import SectionTitle from "../components/main/SectionTittle";
import DatasServicios from "../../public/data/Servicio.json";

export default function Servicios() {
	return (
		<section id="servicios" className="py-32 scroll-mt-16">
			<SectionTitle title="Servicios" />
			<h1 id="servicios" className="text-3xl font-bold mb-6">
				Servicios Ofrecidos
			</h1>

			<ol id="Lista de servicios" className="text-red-500 mt-10 list-disc space-y-3 pl-5 text-lg">
			{
				DatasServicios.map ((servicio) => (
					<li key={servicio.id}>
					{servicio.title}
					{servicio.description}
					</li>
				))
			}
		
			</ol>

		</section>
	);
}