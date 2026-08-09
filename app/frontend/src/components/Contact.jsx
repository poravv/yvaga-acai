import { I } from "../lib/icons.jsx";
import { CONTACT } from "../data/catalog.js";

export default function Contact() {
  const C = CONTACT;
  return (
    <section className="section contact" id="contacto">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="kicker">Hacé tu pedido</span>
          <h2>Estamos cerca tuyo, en Itauguá</h2>
          <p>Sobre el camino a Pirayú. Pedí por WhatsApp y coordinamos la entrega o el retiro. ¡Te esperamos!</p>
        </div>
        <div className="contact-grid">
          <div className="contact-card reveal">
            <h3>Contacto & horarios</h3>
            <a className="cinfo" href={`https://wa.me/${C.whatsapp}`} target="_blank" rel="noopener">
              <div className="ci"><I.whatsapp style={{ width: 22, height: 22 }} /></div>
              <div><b>WhatsApp</b><span>{C.whatsappDisplay}</span></div>
            </a>
            <a className="cinfo" href={C.mapUrl} target="_blank" rel="noopener">
              <div className="ci"><I.pin style={{ width: 22, height: 22 }} /></div>
              <div><b>Dirección</b><span>{C.address}</span></div>
            </a>
            <div className="cinfo">
              <div className="ci"><I.clock style={{ width: 22, height: 22 }} /></div>
              <div><b>Horarios</b>{C.hours.map((h) => <span key={h.d} style={{ display: "block" }}>{h.d}: {h.opens} – {h.closes}</span>)}</div>
            </div>
            <div className="socials">
              <a className="soc" href={C.instagram} target="_blank" rel="noopener" aria-label="Instagram"><I.instagram /></a>
              <a className="soc" href={C.tiktok} target="_blank" rel="noopener" aria-label="TikTok"><I.tiktok /></a>
              <a className="soc" href={C.facebook} target="_blank" rel="noopener" aria-label="Facebook"><I.facebook /></a>
            </div>
            <a className="btn btn-wa" style={{ marginTop: 24, width: "100%" }} href={`https://wa.me/${C.whatsapp}`} target="_blank" rel="noopener">
              <I.whatsapp style={{ width: 20, height: 20 }} /> Pedir ahora por WhatsApp
            </a>
          </div>
          <a className="map-card reveal" data-d="1" href={C.mapUrl} target="_blank" rel="noopener">
            <div className="map-fallback">
              <I.pin style={{ width: 46, height: 46, margin: "0 auto 14px" }} />
              <b style={{ fontFamily: "var(--font-display)", fontSize: 22, display: "block" }}>Yvága Açai</b>
              <p style={{ color: "rgba(255,255,255,.8)", marginTop: 8 }}>{C.address}</p>
              <span className="btn btn-lima" style={{ marginTop: 18 }}>Ver en Google Maps</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
