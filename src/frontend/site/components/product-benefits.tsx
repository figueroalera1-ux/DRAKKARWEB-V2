import { productPageContent } from "../data/products";

export function ProductBenefits() {
  return (
    <section className="product-benefits" aria-labelledby="benefits-title">
      <h2 id="benefits-title">{productPageContent.benefitsTitle}</h2>
      <div>
        {productPageContent.benefits.map((benefit) => (
          <article key={benefit.title}>
            <span aria-hidden="true">{benefit.icon}</span>
            <div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
