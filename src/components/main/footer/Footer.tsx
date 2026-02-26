/**
 * Archivo: Footer.tsx
 * Sirve para: mostrar el pie de página común con información final del sitio.
 * Consejo: pon aquí datos estables (año, autor, links) y evita lógica compleja.
 */



function Footer(){
    return (
        <footer className="py-6 text-center text-sm text-slate-400">
            🫁©️ {new Date().getFullYear()} · Mi Portfolio
        </footer>
    )
}

export default Footer;