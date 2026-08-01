import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findProductBySlug, products } from "@frontend/site/data/products";
import { ProductPage } from "@frontend/site/product-page";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = findProductBySlug((await params).slug);
  return {
    title: product
      ? `${product.name} | Tiendas Drakkar`
      : "Producto | Tiendas Drakkar",
    description: product?.shortDescription,
  };
}

export default async function Page({ params }: Props) {
  const product = findProductBySlug((await params).slug);
  if (!product) notFound();
  return <ProductPage product={product} />;
}
