import type { Category, NavigationItem, SocialLink } from "../types/site";

export const siteContent = {
  brand: "TIENDAS DRAKKAR",
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Catálogo", href: "/catalogo" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ] satisfies NavigationItem[],
  actions: {
    whatsapp: "WhatsApp",
    quote: "Cotizar",
    catalog: "Ver catálogo",
    requestQuote: "Solicitar cotización",
  },
  hero: {
    eyebrow: "Mobiliario para vivir mejor",
    title: "Diseño que transforma tu manera de habitar.",
    description:
      "Creamos espacios cálidos y auténticos con muebles pensados para acompañar cada momento de tu vida.",
    imageLabel: "Fotografía principal de Tiendas Drakkar",
    edition: "DRAKKAR · HOME COLLECTION",
  },
  categoriesIntro: {
    eyebrow: "Nuestras colecciones",
    title: "Encuentra la pieza ideal para cada espacio.",
    description:
      "Explora muebles que combinan carácter, comodidad y una estética atemporal.",
  },
  categories: [
    {
      name: "Salas",
      description: "Confort para compartir y disfrutar.",
      action: "Ver productos",
      href: "#contacto",
    },
    {
      name: "Recámaras",
      description: "Espacios serenos para descansar.",
      action: "Ver productos",
      href: "#contacto",
    },
    {
      name: "Comedores",
      description: "El punto de encuentro de tu hogar.",
      action: "Ver productos",
      href: "#contacto",
    },
    {
      name: "Bases",
      description: "Soporte, diseño y máxima comodidad.",
      action: "Ver productos",
      href: "#contacto",
    },
    {
      name: "Cabeceras",
      description: "El detalle que define tu habitación.",
      action: "Ver productos",
      href: "#contacto",
    },
    {
      name: "Sofás cama",
      description: "Versatilidad con estilo contemporáneo.",
      action: "Ver productos",
      href: "#contacto",
    },
  ] satisfies Category[],
  footer: {
    statement:
      "Muebles con diseño, confort y carácter para crear hogares que se sienten propios.",
    contactTitle: "Contacto",
    socialTitle: "Síguenos",
    legalTitle: "Información",
    phone: "+52 771 000 0000",
    email: "hola@tiendasdrakkar.mx",
    location: "Pachuca, Hidalgo, México",
    privacy: "Aviso de privacidad",
    copyright: "© 2026 Tiendas Drakkar. Todos los derechos reservados.",
  },
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "TikTok", href: "#" },
  ] satisfies SocialLink[],
  placeholderCaption: "ESPACIO PARA FOTOGRAFÍA REAL",
  whatsappUrl: "https://wa.me/527710000000",
};
