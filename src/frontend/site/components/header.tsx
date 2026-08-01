"use client";

import { siteContent } from "../data/content";
import { useMenu } from "../hooks/use-menu";
import { ActionLink } from "../ui/action-link";

export function Header() {
  const menu = useMenu();

  return (
    <header className="site-header">
      <a className="wordmark" href="#inicio" onClick={menu.close}>
        {siteContent.brand}
      </a>
      <nav
        className={`site-nav${menu.isOpen ? " site-nav--open" : ""}`}
        aria-label="Navegación principal"
      >
        {siteContent.navigation.map((item) => (
          <a key={item.label} href={item.href} onClick={menu.close}>
            {item.label}
          </a>
        ))}
        <a className="site-nav__mobile-action" href={siteContent.whatsappUrl}>
          {siteContent.actions.whatsapp}
        </a>
      </nav>
      <div className="site-header__actions">
        <a
          className="whatsapp"
          href={siteContent.whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          <span aria-hidden="true" />
          {siteContent.actions.whatsapp}
        </a>
        <ActionLink href="#contacto">{siteContent.actions.quote}</ActionLink>
      </div>
      <button
        className="menu-toggle"
        type="button"
        onClick={menu.toggle}
        aria-expanded={menu.isOpen}
        aria-label="Abrir menú"
      >
        <span />
        <span />
      </button>
    </header>
  );
}
