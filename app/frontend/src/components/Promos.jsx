import { useState } from "react";
import { I, gs } from "../lib/icons.jsx";
import { PROMOS } from "../data/catalog.js";
import { add } from "../store/cart.js";

export default function Promos() {
  const [added, setAdded] = useState({});

  const onAdd = (p) => {
    add({ id: p.id, name: p.name, price: p.price, color: p.g1 });
    setAdded((a) => ({ ...a, [p.id]: true }));
    setTimeout(() => setAdded((a) => ({ ...a, [p.id]: false })), 1400);
  };

  return (
    <section className="section" id="promos" style={{ background: "linear-gradient(180deg, var(--crema-2), var(--crema))" }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="kicker">Combos & promos</span>
          <h2>Más sabor, mejor precio</h2>
          <p>Combos pensados para compartir. Agregalos al pedido o consultanos por WhatsApp.</p>
        </div>
        <div className="promo-grid">
          {PROMOS.map((p, i) => (
            <div className="promo reveal" data-d={(i % 3) + 1} key={p.id} style={{ background: `linear-gradient(150deg, ${p.g1}, ${p.g2})` }}>
              <span className="ptag">{p.tag}</span>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="pfoot">
                <div className="pprice">{gs(p.price)}</div>
                <button className={"add-btn" + (added[p.id] ? " added" : "")} style={{ background: "#fff", color: "var(--acai)" }} onClick={() => onAdd(p)}>
                  {added[p.id]
                    ? <><I.check style={{ width: 16, height: 16 }} /> Agregado</>
                    : <><I.plus style={{ width: 16, height: 16 }} /> Agregar</>}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
