"use client";

import { CatalogState } from "@frontend/site/components/catalog-state";
import "@frontend/site/styles/design-system.css";
import "@frontend/site/styles/catalog.css";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="catalog-route-state">
      <CatalogState type="error" onRetry={reset} />
    </main>
  );
}
