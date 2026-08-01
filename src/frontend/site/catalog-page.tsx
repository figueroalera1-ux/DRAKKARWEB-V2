import { SiteLayout } from "./layouts/site-layout";
import { Catalog } from "./sections/catalog";
import "./styles/design-system.css";
import "./styles/site.css";
import "./styles/catalog.css";

export function CatalogPage() {
  return (
    <SiteLayout>
      <Catalog />
    </SiteLayout>
  );
}
