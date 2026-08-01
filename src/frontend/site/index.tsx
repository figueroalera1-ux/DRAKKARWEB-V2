import { SiteLayout } from "./layouts/site-layout";
import { Categories } from "./sections/categories";
import { Hero } from "./sections/hero";

import "./styles/design-system.css";
import "./styles/site.css";

export function Site() {
  return (
    <SiteLayout>
      <Hero />
      <Categories />
    </SiteLayout>
  );
}