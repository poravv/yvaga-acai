import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { I, gs } from "../lib/icons.jsx";
import { $items, $total, $cartOpen, $toast, closeCart, setQty, remove, waLink } from "../store/cart.js";

export default function CartUI() {
  const items = useStore($items);
  const total = useStore($total);
  const open = useStore($cartOpen);
  const toast = useStore($toast);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") closeCart(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const goToProducts = () => {
    closeCart();
    document.getElementById("productos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className={"cart-overlay" + (open ? " open" : "")} onClick={closeCart}></div>
      <aside className={"cart-drawer" + (open ? " open" : "")} aria-hidden={!open}>
        <div className="cart-hd">
          <h3>Tu pedido</h3>
          <button className="cart-close" onClick={closeCart} aria-label="Cerrar"><I.x style={{ width: 20, height: 20 }} /></button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <div className="ce-ic"><I.cart style={{ width: 34, height: 34 }} /></div>
            <div>
              <b style={{ fontSize: 18, display: "block", color: "var(--ink)", fontFamily: "var(--font-display)" }}>Tu carrito está vacío</b>
              <p style={{ marginTop: 6 }}>Agregá tus açaí y helados favoritos y armá tu pedido.</p>
            </div>
            <button className="btn btn-acai" onClick={goToProducts}>Ver productos</button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((it) => (
                <div className="citem" key={it.id}>
                  <div className="ci-thumb" style={{ background: `linear-gradient(150deg, ${it.color}, var(--acai-deep))` }}>{it.name[0]}</div>
                  <div className="ci-info">
                    <b style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{it.name}</b>
                    <span>{gs(it.price)}</span>
                  </div>
                  <div className="qty">
                    <button onClick={() => setQty(it.id, -1)} aria-label="Quitar uno">−</button>
                    <b>{it.qty}</b>
                    <button onClick={() => setQty(it.id, +1)} aria-label="Sumar uno">+</button>
                  </div>
                  <button className="ci-remove" onClick={() => remove(it.id)} aria-label="Eliminar"><I.x style={{ width: 16, height: 16 }} /></button>
                </div>
              ))}
            </div>
            <div className="cart-foot">
              <div className="cart-total"><span>Total estimado</span><b>{gs(total)}</b></div>
              <a className="btn btn-wa" href={waLink(items, total)} target="_blank" rel="noopener">
                <I.whatsapp style={{ width: 22, height: 22 }} /> Enviar pedido por WhatsApp
              </a>
              <p className="cart-note">Te respondemos para confirmar disponibilidad y entrega.</p>
            </div>
          </>
        )}
      </aside>

      <div className={"toast" + (toast ? " show" : "")}>
        <span className="t-ic"><I.check style={{ width: 18, height: 18 }} /></span>
        {toast || ""}
      </div>
    </>
  );
}
