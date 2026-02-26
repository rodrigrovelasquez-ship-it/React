/**
 * Archivo: components/main/Header1.tsx
 * Sirve para: ejemplo alternativo de cabecera avanzada con popovers y menú móvil.
 * Consejo: úsalo como laboratorio; compara este header con el otro para aprender patrones de navegación.
 */
// Marca este componente como cliente (necesario para usar hooks en Next.js)
'use client'

// Importar el hook useState para manejar estado en el componente
import { useState } from 'react'

// Importar componentes de interfaz de Headless UI (librería sin estilos)
import {
  Dialog,          // Modal/diálogo emergente
  DialogPanel,     // Contenedor del contenido del diálogo
  Disclosure,      // Componente desplegable
  DisclosureButton, // Botón para abrir/cerrar disclosures
  DisclosurePanel, // Panel que se abre y cierra
  Popover,         // Componente que muestra contenido flotante
  PopoverButton,   // Botón para abrir el popover
  PopoverGroup,    // Grupo de popovers
  PopoverPanel,    // Panel del popover
} from '@headlessui/react'

// Importar iconos outline (versión contorno) de Heroicons
import {
  ArrowPathIcon,       // Icono de flecha circular (automaciones)
  Bars3Icon,          // Icono de menú hamburguesa
  ChartPieIcon,       // Icono de gráfico circular (analytics)
  CursorArrowRaysIcon, // Icono de cursor con rayos (engagement)
  FingerPrintIcon,    // Icono de huella digital (seguridad)
  SquaresPlusIcon,    // Icono de cuadrados (integraciones)
  XMarkIcon,          // Icono de X (cerrar)
} from '@heroicons/react/24/outline'

// Importar iconos solid (versión rellena) de Heroicons
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

// Array de objetos que contienen los productos/servicios mostrados en el menú
const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers\' data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

// Array de llamadas a acción (botones de demostración y contacto)
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

// Componente principal del header/navegación
export default function Example() {
  // Estado para controlar si el menú móvil está abierto (true) o cerrado (false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    // Header principal con fondo blanco en luz y gris oscuro en modo oscuro
    <header className="bg-white dark:bg-gray-900">
      {/* Navegación de escritorio */}
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo/marca */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            {/* Imagen del logo para modo claro */}
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto dark:hidden"
            />
            {/* Imagen del logo para modo oscuro */}
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto not-dark:hidden"
            />
          </a>
        </div>

        {/* Botón hamburguesa (visible solo en móvil) */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)} // Abre el menú móvil
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Menú de navegación (visible solo en desktop) */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {/* Menú desplegable de productos */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 dark:text-white">
              Product
              {/* Icono de chevron que rota cuando está abierto */}
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400 dark:text-gray-500" />
            </PopoverButton>

            {/* Panel que sale del botón con lista de productos */}
            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg outline-1 outline-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
            >
              {/* Lista de productos del popover */}
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50 dark:hover:bg-white/5"
                  >
                    {/* Contenedor del icono */}
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-700/50 dark:group-hover:bg-gray-700">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-indigo-600 dark:text-gray-400 dark:group-hover:text-white"
                      />
                    </div>
                    {/* Información del producto (nombre y descripción) */}
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900 dark:text-white">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sección de llamadas a acción (Watch demo, Contact sales) */}
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 dark:divide-white/10 dark:bg-gray-700/50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700/50"
                  >
                    <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400 dark:text-gray-500" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          {/* Enlaces de navegación del menú principal */}
          <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
            Features
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
            Marketplace
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
            Company
          </a>
        </PopoverGroup>

        {/* Botón de login (visible solo en desktop) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      {/* Modal/Diálogo del menú móvil */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        {/* Fondo oscuro del diálogo */}
        <div className="fixed inset-0 z-50" />

        {/* Panel del diálogo (menú móvil) */}
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:sm:ring-gray-100/10">
          {/* Encabezado del menú móvil con logo y botón cerrar */}
          <div className="flex items-center justify-between">
            {/* Logo en el menú móvil */}
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto dark:hidden"
              />
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto not-dark:hidden"
              />
            </a>

            {/* Botón para cerrar el menú móvil */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)} // Cierra el menú móvil
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* Menú desplegable en móvil */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
              {/* Menú de navegación del móvil */}
              <div className="space-y-2 py-6">
                {/* Disclosure para productos en versión móvil */}
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5">
                    Product
                    {/* Icono que rota cuando se abre */}
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>

                  {/* Panel desplegable con lista de productos y call-to-actions */}
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                {/* Enlaces adicionales del menú móvil */}
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  Company
                </a>
              </div>

              {/* Botón de login en el menú móvil */}
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
