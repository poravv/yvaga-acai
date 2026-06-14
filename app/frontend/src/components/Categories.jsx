import { I } from "../lib/icons.jsx";
import { CATEGORIES, CATALOG } from "../data/catalog.js";

export default function Categories() {
  const counts = {};
  CATALOG.forEach((c) => (counts[c.id] = c.items.length));
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="section" id="categorias">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="kicker">Explorá el menú</span>
          <h2>Elegí tu antojo</h2>
          <p>Desde un açaí bien cargado hasta un palito refrescante: encontrá tu categoría favorita.</p>
        </div>
        <div className="cat-grid">
          {CATEGORIES.map((c, i) => (
            <div className="cat reveal" data-d={(i % 4) + 1} key={c.id} onClick={() => scrollTo("menu")}>
              <span className="glow" style={{ background: c.accent }}></span>
              <div className="ic" style={{ background: c.accent }}>{I[c.icon] ? I[c.icon]() : null}</div>
              <h4>{c.name}</h4>
              <div className="cnt">{counts[c.target] || "Varios"} opciones</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
