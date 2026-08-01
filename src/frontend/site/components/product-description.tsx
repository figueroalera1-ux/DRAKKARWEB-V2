import { productPageContent, type ProductDetail } from "../data/products";

export function ProductDescription({ product }: { product: ProductDetail }) {
  return (
    <section className="product-description">
      <div>
        <span className="eyebrow">{productPageContent.descriptionEyebrow}</span>
        <h2>{productPageContent.descriptionTitle}</h2>
        <p>{product.longDescription}</p>
      </div>
      <div className="product-specifications">
        <h3>{productPageContent.specificationsTitle}</h3>
        <dl>
          {product.specifications.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
