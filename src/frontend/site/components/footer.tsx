import { siteContent } from "../data/content";

export function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="site-footer" id="contacto">
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <strong>{siteContent.brand}</strong>
          <p>{footer.statement}</p>
        </div>
        <div>
          <h2>{footer.contactTitle}</h2>
          <a href={`tel:${footer.phone}`}>{footer.phone}</a>
          <a href={`mailto:${footer.email}`}>{footer.email}</a>
          <span>{footer.location}</span>
          <a href={siteContent.whatsappUrl} target="_blank" rel="noreferrer">
            {siteContent.actions.whatsapp} ↗
          </a>
        </div>
        <div>
          <h2>{footer.socialTitle}</h2>
          {siteContent.socials.map((social) => (
            <a href={social.href} key={social.label}>
              {social.label} ↗
            </a>
          ))}
        </div>
        <div>
          <h2>{footer.legalTitle}</h2>
          <a href="#privacidad">{footer.privacy}</a>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>{footer.copyright}</span>
        <span>{siteContent.brand}</span>
      </div>
    </footer>
  );
}
