import { catalogContent } from "../data/catalog";
import { formatCurrency } from "../lib/currency";
import type { CatalogProduct } from "../types/site";
import { ActionLink } from "../ui/action-link";
import { PhotoPlaceholder } from "../ui/photo-placeholder";

export function ProductCard({ product }: { product: CatalogProduct }) {
  return (
    <article className="product-card">
      <div className="product-card__media">
        <PhotoPlaceholder
          label={product.name}
          caption={catalogContent.photoCaption}
          compact
        />
        {product.badge && (
          <span className="ds-badge product-card__badge">{product.badge}</span>
        )}
      </div>
      <div className="product-card__body">
        <span className="product-card__category">{product.category}</span>
        <h2>{product.name}</h2>
        <div className="product-card__prices">
          <strong>{formatCurrency(product.price)}</strong>
          {product.previousPrice && (
            <del aria-label={catalogContent.previousPriceLabel}>
              {formatCurrency(product.previousPrice)}
            </del>
          )}
        </div>
        <span className="product-card__availability">
          {product.availability}
        </span>
        <ActionLink href={`#${product.id}`} variant="outline">
          {catalogContent.detailAction}
        </ActionLink>
      </div>
    </article>
  );
}
