import { productPageContent, relatedProducts } from "../data/products";
import { ProductGrid } from "./product-grid";

export function RelatedProducts() {
  return (
    <section className="related-products">
      <header>
        <span className="eyebrow">{productPageContent.relatedEyebrow}</span>
        <h2>{productPageContent.relatedTitle}</h2>
      </header>
      <ProductGrid products={relatedProducts} />
    </section>
  );
}
