export type NavigationItem = { label: string; href: string };

export type Category = {
  name: string;
  description: string;
  action: string;
  href: string;
};

export type SocialLink = { label: string; href: string };

export type ProductBadge = "Nuevo" | "Oferta" | "Más vendido";

export type CatalogProduct = {
  id: string;
  name: string;
  category: string;
  material: string;
  color: string;
  availability: "Disponible" | "Sobre pedido";
  price: number;
  previousPrice?: number;
  badge?: ProductBadge;
};

export type CatalogFilterOption = { label: string; value: string };
