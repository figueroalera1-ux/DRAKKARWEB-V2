import { ProductBenefits } from "./components/product-benefits";
import { ProductDescription } from "./components/product-description";
import { ProductGallery } from "./components/product-gallery";
import { ProductPurchasePanel } from "./components/product-purchase-panel";
import { RelatedProducts } from "./components/related-products";
import { productPageContent, type ProductDetail } from "./data/products";
import { SiteLayout } from "./layouts/site-layout";
import "./styles/design-system.css";
import "./styles/site.css";
import "./styles/catalog.css";
import "./styles/product.css";

export function ProductPage({ product }: { product: ProductDetail }) {
  return (
    <SiteLayout>
      <main className="product-page">
        <nav className="product-breadcrumb" aria-label="Breadcrumb">
          <a href="/">{productPageContent.breadcrumbHome}</a>
          <span>/</span>
          <a href="/catalogo">{productPageContent.breadcrumbCatalog}</a>
          <span>/</span>
          <span>{product.name}</span>
        </nav>
        <section className="product-overview">
          <ProductGallery images={product.gallery} productName={product.name} />
          <ProductPurchasePanel product={product} />
        </section>
        <ProductBenefits />
        <ProductDescription product={product} />
        <RelatedProducts />
      </main>
    </SiteLayout>
  );
}
