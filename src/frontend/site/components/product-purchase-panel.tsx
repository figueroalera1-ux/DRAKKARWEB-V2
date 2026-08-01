"use client";

import { useState } from "react";
import { productPageContent, type ProductDetail } from "../data/products";
import { formatCurrency } from "../lib/currency";

export function ProductPurchasePanel({ product }: { product: ProductDetail }) {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(product.variants.color[0]);
  const [fabric, setFabric] = useState(product.variants.fabric[0]);
  const [size, setSize] = useState(product.variants.size[0]);
  const groups = [
    {
      title: productPageContent.variantTitles.color,
      value: color,
      options: product.variants.color,
      update: setColor,
    },
    {
      title: productPageContent.variantTitles.fabric,
      value: fabric,
      options: product.variants.fabric,
      update: setFabric,
    },
    {
      title: productPageContent.variantTitles.size,
      value: size,
      options: product.variants.size,
      update: setSize,
    },
  ];
  return (
    <div className="product-purchase">
      <div className="product-purchase__meta">
        <span>{product.category}</span>
        {product.badge && <span className="ds-badge">{product.badge}</span>}
      </div>
      <h1>{product.name}</h1>
      <p className="product-purchase__sku">
        {productPageContent.skuLabel}: {product.sku}
      </p>
      <div className="product-purchase__price">
        <strong>{formatCurrency(product.price)}</strong>
        {product.previousPrice && (
          <del aria-label={productPageContent.previousPriceLabel}>
            {formatCurrency(product.previousPrice)}
          </del>
        )}
      </div>
      <span className="product-purchase__availability">
        {product.availability}
      </span>
      <p className="product-purchase__intro">{product.shortDescription}</p>
      <div className="product-variants">
        {groups.map((group) => (
          <fieldset key={group.title}>
            <legend>
              {group.title}: <strong>{group.value}</strong>
            </legend>
            <div>
              {group.options.map((option) => (
                <button
                  className={group.value === option ? "is-active" : ""}
                  type="button"
                  aria-pressed={group.value === option}
                  onClick={() => group.update(option)}
                  key={option}
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>
        ))}
      </div>
      <div className="quantity-control">
        <span>{productPageContent.quantityLabel}</span>
        <div>
          <button
            type="button"
            aria-label={productPageContent.decreaseQuantity}
            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
          >
            −
          </button>
          <output aria-live="polite">{quantity}</output>
          <button
            type="button"
            aria-label={productPageContent.increaseQuantity}
            onClick={() => setQuantity((current) => current + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="product-actions">
        <button className="ds-button ds-button--secondary" type="button">
          {productPageContent.actions.addToCart}
        </button>
        <button className="ds-button ds-button--primary" type="button">
          {productPageContent.actions.buyNow}
        </button>
        <a
          className="ds-button ds-button--outline"
          href={productPageContent.whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          {productPageContent.actions.whatsapp}
        </a>
      </div>
    </div>
  );
}
