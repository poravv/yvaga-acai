import { I } from "../lib/icons.jsx";
import { CONTACT } from "../data/catalog.js";

const NAV = [["Inicio", "#inicio"], ["Productos", "#productos"], ["Menú", "#menu"], ["Combos", "#promos"], ["Contacto", "#contacto"]];

export default function Footer() {
  const C = CONTACT;
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-grid">
          <div className="ftr-brand">
            <a className="brand" href="#inicio" style={{ fontSize: 26 }}><img className="brand-logo" src="/assets/isologo.png" alt="" width="58" height="58" />Yvága <b>Açai</b></a>
            <p>Açaí, helados artesanales y bowls frescos preparados al momento con ingredientes naturales. El sabor tropical que te lleva al cielo.</p>
            <div className="socials" style={{ marginTop: 22 }}>
              <a className="soc" href={C.instagram} target="_blank" rel="noopener" aria-label="Instagram"><I.instagram /></a>
              <a className="soc" href={C.tiktok} target="_blank" rel="noopener" aria-label="TikTok"><I.tiktok /></a>
              <a className="soc" href={C.facebook} target="_blank" rel="noopener" aria-label="Facebook"><I.facebook /></a>
            </div>
          </div>
          <div>
            <h5>Navegación</h5>
            <div className="links">{NAV.map(([t, h]) => <a key={t} href={h}>{t}</a>)}</div>
          </div>
          <div>
            <h5>Contacto</h5>
            <div className="links">
              <a href={`https://wa.me/${C.whatsapp}`} target="_blank" rel="noopener">{C.whatsappDisplay}</a>
              <p>{C.hours.map((h) => <span key={h.d} style={{ display: "block" }}>{h.d}<br />{h.h}</span>)}</p>
            </div>
          </div>
        </div>
        <div className="ftr-legal">
          <a href="/terminos/">Términos y Condiciones</a>
          <a href="/privacidad/">Política de Privacidad</a>
          <a href="/cookies/">Política de Cookies</a>
        </div>
        <div className="ftr-bottom">
          <span>© {new Date().getFullYear()} Yvága Açai. Todos los derechos reservados.</span>
          <span>Frescura tropical, hecho en Paraguay</span>
        </div>
      </div>
    </footer>
  );
}
