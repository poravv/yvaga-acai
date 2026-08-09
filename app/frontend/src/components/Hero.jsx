import { useEffect, useRef } from "react";
import { I, Fruit } from "../lib/icons.jsx";
import { openCart } from "../store/cart.js";

export default function Hero() {
  const stageRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = null, tx = 0, ty = 0, cx = 0, cy = 0;
    const onMove = (e) => {
      const r = stage.getBoundingClientRect();
      tx = (e.clientX - (r.left + r.width / 2)) / r.width;
      ty = (e.clientY - (r.top + r.height / 2)) / r.height;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const tick = () => {
      cx += (tx - cx) * 0.08; cy += (ty - cy) * 0.08;
      stage.querySelectorAll("[data-depth]").forEach((el) => {
        const d = parseFloat(el.dataset.depth);
        el.style.transform = `translate(${cx * d * 40}px, ${cy * d * 40}px)`;
      });
      if (Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001) raf = requestAnimationFrame(tick);
      else raf = null;
    };
    window.addEventListener("mousemove", onMove);
    return () => { window.removeEventListener("mousemove", onMove); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return (
    <section className="hero" id="inicio">
      <div className="hero-blobs">
        <span className="blob b1"></span><span className="blob b2"></span><span className="blob b3"></span>
      </div>
      <div className="hero-grain"></div>

      <div className="wrap hero-inner">
        <div className="hero-copy">
          <span className="kicker on-dark reveal in">Açaí · Helados · Bowls frescos · Itauguá</span>
          <h1 className="reveal in" data-d="1">El sabor <span className="gr">tropical</span> que te lleva al <span className="em">cielo</span></h1>
          <p className="hero-sub reveal in" data-d="2">Heladería artesanal en Itauguá. Açaí cremoso, helados y bowls frescos preparados al momento.</p>
          <div className="hero-cta reveal in" data-d="3">
            <a className="btn btn-lima" href="#productos">Ver productos <I.arrow style={{ width: 18, height: 18 }} /></a>
            <button className="btn btn-ghost" onClick={openCart}>Pedir ahora</button>
          </div>
          <div className="hero-stats reveal in" data-d="4">
            <div className="st"><b>15+</b><span>sabores artesanales</span></div>
            <div className="st"><b>100%</b><span>ingredientes naturales</span></div>
            <div className="st"><b>Al momento</b><span>siempre fresco</span></div>
          </div>
        </div>

        <div className="bowl-stage" ref={stageRef}>
          <div className="bowl-ring" data-depth="0.2"></div>
          <div className="bowl-ring r2" data-depth="0.35"></div>
          <div className="bowl-glow" data-depth="0.4"></div>
          <img className="bowl-product" src="/assets/acai.webp" alt="Bochas de açaí Yvága" data-depth="0.5" />

          <div className="float-chip fc-1 anim" data-depth="1.4"><Fruit.berry /></div>
          <div className="float-chip fc-2 anim d2" data-depth="1.1"><Fruit.banana /></div>
          <div className="float-chip fc-3 anim d3" data-depth="1.6"><Fruit.leaf /></div>
          <div className="float-chip fc-4 anim d2" data-depth="0.9"><Fruit.cube style={{ stroke: "var(--acai)" }} /></div>
          <div className="float-chip fc-5 anim" data-depth="1.2"><Fruit.drop /></div>
        </div>
      </div>

      <a className="scroll-cue" href="#story" aria-label="Bajar al contenido">
        <span className="scroll-cue-label">Descubrí</span>
        <span className="scroll-cue-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
        </span>
      </a>
    </section>
  );
}
