import type { CatalogProduct } from "../types/site";

export type ProductDetail = CatalogProduct & {
  slug: string;
  sku: string;
  shortDescription: string;
  longDescription: string;
  gallery: string[];
  variants: { color: string[]; fabric: string[]; size: string[] };
  specifications: Array<{ label: string; value: string }>;
};

export const productPageContent = {
  breadcrumbHome: "Inicio",
  breadcrumbCatalog: "Catálogo",
  skuLabel: "SKU",
  previousPriceLabel: "Precio anterior",
  galleryLabel: "Galería de producto",
  mainPhotoCaption: "FOTOGRAFÍA PRINCIPAL DEL PRODUCTO",
  thumbnailCaption: "VISTA DEL PRODUCTO",
  zoomNote: "Galería preparada para zoom",
  variantTitles: { color: "Color", fabric: "Tela", size: "Medida" },
  quantityLabel: "Cantidad",
  decreaseQuantity: "Disminuir cantidad",
  increaseQuantity: "Aumentar cantidad",
  actions: {
    addToCart: "Agregar al carrito",
    buyNow: "Comprar ahora",
    whatsapp: "Solicitar por WhatsApp",
  },
  benefitsTitle: "Compra con confianza",
  descriptionEyebrow: "Detalles del producto",
  descriptionTitle: "Diseñado para acompañar tu hogar.",
  specificationsTitle: "Especificaciones",
  relatedEyebrow: "También te puede gustar",
  relatedTitle: "Productos relacionados",
  notFoundTitle: "Producto no encontrado",
  notFoundDescription:
    "El producto que buscas no está disponible en esta demostración.",
  backToCatalog: "Volver al catálogo",
  whatsappUrl: "https://wa.me/527710000000",
  benefits: [
    {
      title: "Entrega",
      description: "Coordinación de entrega hasta tu domicilio.",
      icon: "→",
    },
    {
      title: "Garantía",
      description: "Respaldo y atención después de tu compra.",
      icon: "✓",
    },
    {
      title: "Fabricación",
      description: "Piezas elaboradas con procesos especializados.",
      icon: "◇",
    },
    {
      title: "Formas de pago",
      description: "Alternativas flexibles para completar tu compra.",
      icon: "$",
    },
  ],
};

export const products: ProductDetail[] = [
  {
    id: "demo-01",
    slug: "sala-boreal",
    sku: "DRK-SAL-001",
    name: "Sala Boreal",
    category: "Salas",
    material: "Tela",
    color: "Azul",
    availability: "Disponible",
    price: 18990,
    previousPrice: 21990,
    badge: "Oferta",
    shortDescription:
      "Una sala de líneas contemporáneas, proporciones amplias y comodidad envolvente para compartir todos los días.",
    longDescription:
      "Sala Boreal equilibra presencia y ligereza visual. Su diseño modular se adapta a espacios sociales contemporáneos y ofrece una experiencia cómoda para la vida cotidiana. Esta ficha está preparada para incorporar posteriormente materiales, cuidados, dimensiones exactas y documentación técnica.",
    gallery: [
      "Vista frontal",
      "Vista lateral",
      "Detalle de tela",
      "Vista en ambiente",
    ],
    variants: {
      color: ["Azul", "Gris", "Beige"],
      fabric: ["Lino", "Terciopelo", "Tela premium"],
      size: ["3 plazas", "3 + 2 plazas", "Seccional"],
    },
    specifications: [
      { label: "Estructura", value: "Madera seleccionada" },
      { label: "Tapizado", value: "Tela de alto desempeño" },
      { label: "Configuración", value: "Personalizable" },
      { label: "Producción", value: "Sujeta a variante elegida" },
    ],
  },
];

export const relatedProducts: CatalogProduct[] = [
  {
    id: "related-01",
    name: "Sala Astrid",
    category: "Salas",
    material: "Terciopelo",
    color: "Gris",
    availability: "Sobre pedido",
    price: 22490,
    badge: "Nuevo",
  },
  {
    id: "related-02",
    name: "Sofá cama Nube",
    category: "Sofás cama",
    material: "Lino",
    color: "Beige",
    availability: "Disponible",
    price: 12990,
    previousPrice: 14990,
    badge: "Oferta",
  },
  {
    id: "related-03",
    name: "Sala Lumen",
    category: "Salas",
    material: "Tela",
    color: "Beige",
    availability: "Disponible",
    price: 20490,
    badge: "Más vendido",
  },
];

export function findProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
