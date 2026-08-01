import type { ReactNode } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="storefront">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
