import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { I } from "../lib/icons.jsx";
import { CONTACT } from "../data/catalog.js";
import { $count, openCart } from "../store/cart.js";

const NAV = [["Inicio", "#inicio"], ["Productos", "#productos"], ["Menú", "#menu"], ["Combos", "#promos"], ["Contacto", "#contacto"]];

export default function Header() {
  const count = useStore($count);
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={"hdr" + (scrolled ? " scrolled" : "")}>
        <div className="wrap">
          <div className="hdr-inner">
            <a className="brand" href="#inicio"><img className="brand-logo" src="/assets/isologo.webp" alt="" width="64" height="64" />Yvága <b>Açai</b></a>
            <nav className="nav">
              {NAV.map(([t, h]) => <a key={t} href={h}>{t}</a>)}
            </nav>
            <div className="hdr-actions">
              <a className="btn btn-wa nav-cta" href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener">
                <span className="nav-cta-ic"><I.whatsapp style={{ width: 18, height: 18 }} /></span> Pedir por WhatsApp
              </a>
              <button className="cart-btn" onClick={openCart} aria-label="Abrir carrito">
                <I.cart style={{ width: 21, height: 21 }} />
                {count > 0 && <span className="cart-count">{count}</span>}
              </button>
              <button className="burger" onClick={() => setMenu((m) => !m)} aria-label={menu ? "Cerrar menú" : "Abrir menú"} aria-expanded={menu}>
                {menu ? <I.x style={{ width: 22, height: 22 }} /> : <I.menu style={{ width: 22, height: 22 }} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={"mmenu" + (menu ? " open" : "")}>
        {NAV.map(([t, h]) => <a key={t} href={h} onClick={() => setMenu(false)}>{t}</a>)}
        <a className="btn btn-wa" href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener" onClick={() => setMenu(false)}><I.whatsapp style={{ width: 20, height: 20 }} /> Pedir por WhatsApp</a>
      </div>
    </>
  );
}
