import { useState } from "react";
import { I, gs, Fruit } from "../lib/icons.jsx";
import { FEATURED, ITEM_INDEX } from "../data/catalog.js";
import { add } from "../store/cart.js";

export default function Featured() {
  const [added, setAdded] = useState({});

  const onAdd = (item, color) => {
    add({ ...item, color });
    setAdded((a) => ({ ...a, [item.id]: true }));
    setTimeout(() => setAdded((a) => ({ ...a, [item.id]: false })), 1400);
  };

  return (
    <section className="section" id="productos" style={{ background: "linear-gradient(180deg, var(--crema), var(--crema-2))" }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="kicker">Los favoritos</span>
          <h2>Los açaí y helados más pedidos</h2>
          <p>Lo que más piden nuestros clientes. Agregalos a tu pedido y enviá todo junto por WhatsApp.</p>
        </div>
        <div className="prod-grid">
          {FEATURED.map((f, i) => {
            const item = ITEM_INDEX[f.ref];
            if (!item) return null;
            return (
              <article className="pcard reveal" data-d={(i % 3) + 1} key={f.ref}>
                <div className="pcard-media" style={{ background: `linear-gradient(150deg, ${f.g1}, ${f.g2})` }}>
                  {f.badge && <span className="pcard-badge">{f.badge}</span>}
                  <span className="media-mark"><Fruit.berry /></span>
                </div>
                <div className="pcard-body">
                  <h3>{item.name}</h3>
                  <p className="blurb">{f.blurb}</p>
                  <div className="pcard-foot">
                    <div className="price">{gs(item.price)}</div>
                    <button className={"add-btn" + (added[item.id] ? " added" : "")} onClick={() => onAdd(item, f.g1)}>
                      {added[item.id]
                        ? <><I.check style={{ width: 16, height: 16 }} /> Agregado</>
                        : <><I.plus style={{ width: 16, height: 16 }} /> Agregar</>}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
