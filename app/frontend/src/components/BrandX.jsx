import { I } from "../lib/icons.jsx";

const VALUES = [
  { ic: "leaf", t: "Ingredientes frescos", d: "Fruta natural y açaí de calidad, sin artificios." },
  { ic: "sparkle", t: "Sabor tropical", d: "El verdadero gusto del açaí brasileño." },
  { ic: "bolt", t: "Preparado al momento", d: "Cada pedido se arma fresco, frente a vos." },
  { ic: "heart", t: "Experiencia premium", d: "Refrescante, natural e instagrameable." },
];

export default function BrandX() {
  return (
    <section className="section" id="marca">
      <div className="wrap">
        <div className="brandx reveal">
          <div className="brandx-grid">
            <div>
              <span className="kicker on-dark">Yvága significa cielo</span>
              <h2 style={{ color: "#fff", fontSize: "clamp(32px,4.6vw,54px)", marginTop: 14 }}>Un pedacito de paraíso<br />en cada cucharada</h2>
              <p style={{ color: "rgba(255,255,255,.78)", marginTop: 18, fontSize: 17, lineHeight: 1.6, maxWidth: "44ch" }}>
                Combinamos lo mejor del trópico con helados artesanales y açaí cremoso para crear una experiencia fresca, natural y memorable.
              </p>
              <div className="value-list">
                {VALUES.map((v) => (
                  <div className="value" key={v.t}>
                    <div className="vi">{I[v.ic]()}</div>
                    <div><b>{v.t}</b><span>{v.d}</span></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="brandx-photo">
              <img
                src="/assets/acai-pote.webp"
                alt="Bowl de açaí Yvága con banana, frutilla y granola"
                width="900"
                height="1200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
