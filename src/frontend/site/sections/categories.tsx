import { siteContent } from "../data/content";
import { PhotoPlaceholder } from "../ui/photo-placeholder";

export function Categories() {
  const { categoriesIntro, categories } = siteContent;

  return (
    <section className="categories" id="catalogo">
      <header className="section-heading">
        <span className="eyebrow">{categoriesIntro.eyebrow}</span>
        <div>
          <h2>{categoriesIntro.title}</h2>
          <p>{categoriesIntro.description}</p>
        </div>
      </header>
      <div className="category-grid">
        {categories.map((category, index) => (
          <article className="category-card" key={category.name}>
            <PhotoPlaceholder
              label={category.name}
              caption={siteContent.placeholderCaption}
              compact
            />
            <div className="category-card__content">
              <span>0{index + 1}</span>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <a href={category.href}>
                {category.action}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
