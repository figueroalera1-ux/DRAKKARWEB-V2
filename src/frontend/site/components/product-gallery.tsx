"use client";

import { useState } from "react";
import { productPageContent } from "../data/products";
import { PhotoPlaceholder } from "../ui/photo-placeholder";

export function ProductGallery({
  images,
  productName,
}: {
  images: string[];
  productName: string;
}) {
  const [selected, setSelected] = useState(0);
  return (
    <section
      className="product-gallery"
      aria-label={productPageContent.galleryLabel}
    >
      <div className="product-gallery__main">
        <PhotoPlaceholder
          label={`${productName} · ${images[selected]}`}
          caption={productPageContent.mainPhotoCaption}
        />
        <span>{productPageContent.zoomNote}</span>
      </div>
      <div className="product-gallery__thumbnails">
        {images.map((image, index) => (
          <button
            className={selected === index ? "is-active" : ""}
            type="button"
            onClick={() => setSelected(index)}
            aria-pressed={selected === index}
            key={image}
          >
            <PhotoPlaceholder
              label={image}
              caption={productPageContent.thumbnailCaption}
              compact
            />
          </button>
        ))}
      </div>
    </section>
  );
}
