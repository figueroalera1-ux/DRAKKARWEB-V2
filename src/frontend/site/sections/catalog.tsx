"use client";

import { useMemo, useState } from "react";
import {
  CatalogFilters,
  emptyFilters,
  type ActiveFilters,
} from "../components/catalog-filters";
import { CatalogPagination } from "../components/catalog-pagination";
import { CatalogState } from "../components/catalog-state";
import { ProductGrid } from "../components/product-grid";
import { catalogContent, catalogProducts } from "../data/catalog";

const PAGE_SIZE = 6;

export function Catalog() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<ActiveFilters>(emptyFilters);
  const [page, setPage] = useState(1);
  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("es-MX");
    return catalogProducts.filter((product) => {
      const matchesQuery =
        !normalized ||
        [product.name, product.category, product.material].some((value) =>
          value.toLocaleLowerCase("es-MX").includes(normalized),
        );
      const matchesCategory =
        !filters.categories.length ||
        filters.categories.includes(product.category);
      const matchesMaterial =
        !filters.materials.length ||
        filters.materials.includes(product.material);
      const matchesColor =
        !filters.colors.length || filters.colors.includes(product.color);
      const matchesAvailability =
        !filters.availability.length ||
        filters.availability.includes(product.availability);
      const matchesPrice =
        !filters.prices.length ||
        filters.prices.some((range) => {
          const [minimum, maximum] = range.split("-").map(Number);
          return product.price >= minimum && product.price <= maximum;
        });
      return (
        matchesQuery &&
        matchesCategory &&
        matchesMaterial &&
        matchesColor &&
        matchesAvailability &&
        matchesPrice
      );
    });
  }, [filters, query]);
  const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE);
  const safePage = Math.min(page, Math.max(totalPages, 1));
  const visibleProducts = filteredProducts.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE,
  );
  const changeFilters = (next: ActiveFilters) => {
    setFilters(next);
    setPage(1);
  };
  const clearFilters = () => {
    setFilters(emptyFilters);
    setQuery("");
    setPage(1);
  };

  return (
    <section className="catalog-page">
      <header className="catalog-hero">
        <span className="eyebrow">{catalogContent.eyebrow}</span>
        <h1>{catalogContent.title}</h1>
        <p>{catalogContent.description}</p>
      </header>
      <div className="catalog-toolbar">
        <label htmlFor="catalog-search">{catalogContent.searchLabel}</label>
        <div>
          <span aria-hidden="true">⌕</span>
          <input
            id="catalog-search"
            className="ds-input"
            type="search"
            value={query}
            placeholder={catalogContent.searchPlaceholder}
            onChange={(event) => {
              setQuery(event.target.value);
              setPage(1);
            }}
          />
        </div>
      </div>
      <div className="catalog-layout">
        <CatalogFilters
          value={filters}
          onChange={changeFilters}
          onClear={clearFilters}
        />
        <div className="catalog-results">
          <p className="catalog-results__count">
            <strong>{filteredProducts.length}</strong>{" "}
            {catalogContent.resultsLabel}
          </p>
          {visibleProducts.length ? (
            <ProductGrid products={visibleProducts} />
          ) : (
            <CatalogState type="empty" />
          )}
          <CatalogPagination
            page={safePage}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </div>
    </section>
  );
}
