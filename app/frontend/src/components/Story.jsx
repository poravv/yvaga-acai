import { useEffect, useRef, useState } from "react";
import { Fruit } from "../lib/icons.jsx";

const STORY_STEPS = [
  { n: "01", t: "Leche en polvo", d: "Primero entra la capa sola de leche en polvo como base clara." },
  { n: "02", t: "Açaí grande", d: "Después sumamos la capa grande de açaí cremoso." },
  { n: "03", t: "Granola y condensada", d: "Luego entra leche en polvo con granola y leche condensada." },
  { n: "04", t: "Açaí más liviano", d: "Seguimos con una capa de açaí no tan grande para equilibrar el vaso." },
  { n: "05", t: "Capa final", d: "Cerramos con leche en polvo, granola y leche condensada arriba." },
];

const clamp01 = (value) => Math.min(1, Math.max(0, value));

export default function Story() {
  const ref = useRef(null);
  const [p, setP] = useState(0); // progreso de scroll 0..1

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current; if (!el) return;
      const r = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      setP(clamp01(-r.top / Math.max(1, total)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);

  const stage = Math.min(STORY_STEPS.length - 1, Math.floor(p * STORY_STEPS.length));
  // El vaso lleno se revela de abajo hacia arriba, gradual y acompañando los pasos.
  const fill = clamp01((p - 0.03) / 0.9);
  // Borde del relleno con relieve: una curva (superficie del líquido) que sube con el llenado,
  // en vez de una línea recta. Coordenadas 0..1 (objectBoundingBox) para que sea responsive.
  const dome = 0.045; // curvatura cóncava de la superficie (la panza entra hacia adentro)
  // Desplazamos el nivel hacia arriba según el llenado para que, al completarse,
  // la muesca cóncava igual cubra la punta del fondo (sobrepasa ligeramente).
  const y = (1 - fill) - dome * fill;
  const fillPath = `M0,${y.toFixed(4)} Q0.5,${(y + dome).toFixed(4)} 1,${y.toFixed(4)} L1,1 L0,1 Z`;

  return (
    <section className="story" id="story" ref={ref} style={{ height: "300vh" }}>
      <div className="story-sticky">
        <div className="story-bg" aria-hidden="true">
          <span className="story-glow sg1"></span>
          <span className="story-glow sg2"></span>
          <span className="story-grain"></span>
          <span className="story-fruit sf1"><Fruit.berry /></span>
          <span className="story-fruit sf2"><Fruit.leaf /></span>
          <span className="story-fruit sf3"><Fruit.drop /></span>
          <span className="story-fruit sf4"><Fruit.berry /></span>
        </div>
        <div className="wrap">
          <div className="story-grid">
            <div className="story-visual cup-float">
              <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}>
                <defs>
                  <clipPath id="storyFillClip" clipPathUnits="objectBoundingBox">
                    <path d={fillPath} />
                  </clipPath>
                </defs>
              </svg>
              <div className="glass">
                <img className="cup-img cup-ghost" src="/assets/story/cup-ready.png" alt="" />
                <img
                  className="cup-img cup-fill"
                  src="/assets/story/cup-ready.png"
                  alt="Açaí Yvága armado por capas"
                  style={{ clipPath: "url(#storyFillClip)", WebkitClipPath: "url(#storyFillClip)" }}
                />
              </div>
            </div>

            <div className="story-steps">
              <span className="kicker on-dark">Así armamos tu açaí</span>
              <div style={{ marginTop: 14, minHeight: 220 }}>
                {STORY_STEPS.map((s, i) => (
                  <div key={s.n} className="story-step" style={{ display: i === stage ? "block" : "none" }}>
                    <div className="story-step-num">{s.n}</div>
                    <h3>{s.t}</h3>
                    <p>{s.d}</p>
                  </div>
                ))}
              </div>
              <div className="story-prog">
                {STORY_STEPS.map((s, i) => (
                  <i key={i}><b style={{ width: i <= stage ? "100%" : "0%" }}></b></i>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
