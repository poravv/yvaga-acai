import { useState } from "react";
import { I, gs } from "../lib/icons.jsx";
import { CATALOG } from "../data/catalog.js";
import { add } from "../store/cart.js";

export default function Menu() {
  const cats = CATALOG;
  const [active, setActive] = useState(cats[0].id);
  const [added, setAdded] = useState({});
  const cat = cats.find((c) => c.id === active);

  const onAdd = (item) => {
    add({ ...item, color: cat.accent });
    setAdded((a) => ({ ...a, [item.id]: true }));
    setTimeout(() => setAdded((a) => ({ ...a, [item.id]: false })), 1200);
  };

  return (
    <section className="section" id="menu">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="kicker">Carta completa</span>
          <h2>Menú de açaí, helados y postres</h2>
          <p>Todos nuestros productos con precios. Tocá <b>+</b> para sumarlos a tu pedido.</p>
        </div>

        <div className="menu-tabs reveal">
          {cats.map((c) => (
            <button key={c.id} className={"mtab" + (active === c.id ? " active" : "")} onClick={() => setActive(c.id)}>{c.name}</button>
          ))}
        </div>

        <div className="menu-panel" key={active}>
          <p className="menu-tagline">{cat.tagline}</p>
          {cat.flavors && (
            <div className="flavors">
              {cat.flavors.map((f) => <span className="flavor" key={f}>{f}</span>)}
            </div>
          )}
          <div className="menu-list">
            {cat.items.map((it) => (
              <div className="mrow" key={it.id}>
                <div style={{ minWidth: 0 }}>
                  <div className="mname">{it.name}</div>
                  {it.desc && <div className="mdesc">{it.desc}</div>}
                </div>
                <span className="dots"></span>
                <span className="mprice">{gs(it.price)}</span>
                <button className={"madd" + (added[it.id] ? " added" : "")} onClick={() => onAdd(it)} aria-label={"Agregar " + it.name}>
                  {added[it.id] ? <I.check style={{ width: 16, height: 16 }} /> : <I.plus style={{ width: 18, height: 18 }} />}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
