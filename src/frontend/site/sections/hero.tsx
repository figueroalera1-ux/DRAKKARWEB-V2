import { siteContent } from "../data/content";
import { ActionLink } from "../ui/action-link";
import { PhotoPlaceholder } from "../ui/photo-placeholder";

export function Hero() {
  const { hero, actions } = siteContent;

  return (
    <section className="hero" id="inicio">
      <div className="hero__content">
        <span className="eyebrow">{hero.eyebrow}</span>
        <h1>{hero.title}</h1>
        <p>{hero.description}</p>
        <div className="hero__actions">
          <ActionLink href="#catalogo">{actions.catalog}</ActionLink>
          <ActionLink href="#contacto" variant="outline">
            {actions.requestQuote}
          </ActionLink>
        </div>
      </div>
      <div className="hero__media">
        <PhotoPlaceholder
          label={hero.imageLabel}
          caption={siteContent.placeholderCaption}
        />
        <span className="hero__edition">{hero.edition}</span>
      </div>
    </section>
  );
}
