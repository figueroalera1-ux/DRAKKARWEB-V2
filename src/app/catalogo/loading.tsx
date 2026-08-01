import { CatalogState } from "@frontend/site/components/catalog-state";
import "@frontend/site/styles/design-system.css";
import "@frontend/site/styles/catalog.css";

export default function Loading() {
  return (
    <main className="catalog-route-state">
      <CatalogState type="loading" />
    </main>
  );
}
