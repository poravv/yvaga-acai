/* Yvága Açai — catálogo real (precios en Guaraníes) */

export const HELADO_SABORES = [
  "Chocolate", "Dulce de leche", "Frutilla", "Granizado", "Cielo",
  "Americana", "Tramontana", "Menta", "Portuguesa", "Capuchino",
  "Uva", "Limón", "Banana", "Prestigio", "Tres leches",
];

// Catálogo completo agrupado por categoría
export const CATALOG = [
  {
    id: "acai",
    name: "Açaí del Rey",
    tagline: "Pulpa cremosa, fría y cargada de energía tropical.",
    accent: "var(--acai-bright)",
    items: [
      { id: "acai-250", name: "Açaí 250 ml", desc: "Vaso clásico", price: 12000, img: "/assets/productos/acai-frutas-250.webp" },
      { id: "acai-330", name: "Açaí 330 ml", desc: "Tradicional", price: 15000 },
      { id: "acai-fruta-330", name: "Açaí con fruta 330 ml", desc: "Banana, frutilla y más", price: 18000, img: "/assets/productos/acai-frutas-330.webp" },
      { id: "acai-fruta-400", name: "Açaí con fruta 400 ml", desc: "Banana, frutilla y más", price: 22000, img: "/assets/productos/acai-frutas-400-ml.webp" },
      { id: "acai-granola-330", name: "Açaí con granola mix 330 ml", desc: "Crocante de granola", price: 15000 },
      { id: "acai-granola-440", name: "Açaí con granola mix 440 ml", desc: "Crocante de granola", price: 20000 },
      { id: "bowl-350", name: "Açaí bowl 350 gr", desc: "Tradicional", price: 20000, img: "/assets/productos/bowl-350gr.webp" },
      { id: "bowl-fruta-350", name: "Açaí bowl 350 gr con fruta", desc: "Banana, frutilla y más", price: 20000, img: "/assets/productos/bowl-350gr.webp" },
      { id: "bigcup", name: "Vaso BigCup", desc: "Mezcla de frutilla, dulce de leche y chocolate", price: 12000 },
      { id: "gold", name: "Vaso Gold", desc: "Mezcla de frutilla, dulce de leche y chocolate", price: 6000 },
    ],
  },
  {
    id: "helados",
    name: "Helados cremosos",
    tagline: "15 sabores artesanales servidos al momento.",
    accent: "var(--rosa)",
    flavors: HELADO_SABORES,
    items: [
      { id: "hel-vaso-100", name: "Vaso 100 ml", desc: "2 bochas", price: 7000 },
      { id: "hel-cono-2", name: "Cono 2 bochas", desc: "Crocante clásico", price: 7000 },
      { id: "hel-cono-3", name: "Cono grande 3 bochas", desc: "Para los más golosos", price: 10000, img: "/assets/productos/cono-3-bochas.webp" },
      { id: "hel-vaso-250", name: "Vaso grande 250 ml", desc: "4 bochas", price: 12000 },
      { id: "pote-14", name: "Pote 1/4", desc: "Para llevar", price: 15000 },
      { id: "pote-12", name: "Pote 1/2", desc: "Para compartir", price: 25000 },
      { id: "pote-1k", name: "Pote 1 kg", desc: "Para toda la familia", price: 45000 },
    ],
  },
  {
    id: "palitos",
    name: "Palitos & Paletas",
    tagline: "Refrescantes, prácticos y para todos los gustos.",
    accent: "var(--lima-deep)",
    items: [
      { id: "palito-frutal", name: "Palito frutal", desc: "Fruta pura y refrescante", price: 2000, img: "/assets/productos/palitos-frutales.webp" },
      { id: "palito-cremosito", name: "Palito cremosito", desc: "Cremoso y suave", price: 3000, img: "/assets/productos/palito-cremosito.webp" },
      { id: "palito-choco", name: "Palito chocolatoso", desc: "Bañado en chocolate", price: 4000, img: "/assets/productos/palito-chocolatoso.webp" },
      { id: "alfajor", name: "Alfajor helado", desc: "Galleta + helado", price: 6000, img: "/assets/productos/alfajor-helado.webp" },
      { id: "paleta-rellena", name: "Paleta rellena", desc: "Centro cremoso", price: 8000, img: "/assets/productos/paleta-rellena.webp" },
    ],
  },
  {
    id: "tortas",
    name: "Tortas",
    tagline: "El cierre perfecto para tu celebración.",
    accent: "var(--amarillo-deep)",
    items: [
      { id: "torta-helada", name: "Torta helada", desc: "Capas de helado artesanal", price: 50000 },
      { id: "torta-pedido", name: "Tortas a pedido", desc: "Diseño y sabores a definir", price: null },
    ],
  },
];

// Destacados de la sección productos (ref apunta al catálogo)
export const FEATURED = [
  { ref: "acai-fruta-400", badge: "Más vendido",
    blurb: "Açaí con banana, frutilla y un topping a elección.", g1: "var(--acai-bright)", g2: "var(--rosa)" },
  { ref: "bowl-fruta-350", badge: "Premium",
    blurb: "Bowl de 350 gr de açaí con banana, frutilla y más.", g1: "var(--acai)", g2: "var(--acai-bright)" },
  { ref: "acai-fruta-330", badge: null,
    blurb: "Açaí cremoso con banana y frutilla en vaso de 330 ml.", g1: "var(--acai-bright)", g2: "var(--lima)" },
  { ref: "hel-cono-3", badge: null,
    blurb: "Cono crocante con tres bochas de nuestros 15 sabores artesanales.", g1: "var(--rosa)", g2: "var(--crema)" },
  { ref: "alfajor", badge: null,
    blurb: "Galleta con helado, práctico y refrescante.", g1: "var(--rosa)", g2: "var(--amarillo)" },
  { ref: "paleta-rellena", badge: null,
    blurb: "Paleta helada con centro cremoso.", g1: "var(--amarillo)", g2: "var(--rosa)" },
];

// Combos sugeridos (promociones)
export const PROMOS = [
  { id: "promo-tropical", name: "Combo Tropical", price: 26000,
    desc: "Açaí con fruta 400 ml + palito frutal de regalo.", tag: "Tropical", g1: "var(--acai-bright)", g2: "var(--rosa)" },
  { id: "promo-pareja", name: "Combo Pareja", price: 22000,
    desc: "2 vasos Gold + 2 conos 2 bochas para compartir.", tag: "2 personas", g1: "var(--rosa)", g2: "var(--amarillo)" },
  { id: "promo-familiar", name: "Combo Familiar", price: 45000,
    desc: "Pote 1 kg de helado + 4 conos de regalo.", tag: "Familiar", g1: "var(--amarillo)", g2: "var(--lima)" },
];

export const CATEGORIES = [
  { id: "acai", name: "Açaí Bowls", target: "acai", accent: "var(--acai-bright)", icon: "bowl" },
  { id: "helados", name: "Helados", target: "helados", accent: "var(--rosa)", icon: "cone" },
  { id: "palitos", name: "Palitos & Paletas", target: "palitos", accent: "var(--lima-deep)", icon: "popsicle" },
  { id: "potes", name: "Potes", target: "helados", accent: "var(--acai)", icon: "tub" },
  { id: "tortas", name: "Tortas", target: "tortas", accent: "var(--amarillo-deep)", icon: "cake" },
];

export const CONTACT = {
  whatsapp: "595981001241",
  whatsappDisplay: "+595 981 001241",
  instagram: "https://www.instagram.com/yvagaacai.py",
  tiktok: "https://www.tiktok.com/@yvagaacai.py",
  facebook: "https://www.facebook.com/profile.php?id=61593014733765",
  address: "Itauguá, camino a Pirayú",
  streetAddress: "Camino a Pirayú",
  addressLocality: "Itauguá",
  addressRegion: "Central",
  mapUrl: "https://maps.app.goo.gl/jVMvAzTZMS5sbe298",
  geo: { lat: -25.4000478, lng: -57.3470665 },
  // `days` alimenta el openingHoursSpecification del JSON-LD. Fuente única:
  // antes los horarios estaban duplicados acá y en Base.astro, y se desincronizaron.
  hours: [
    {
      d: "Lunes a Sábado",
      opens: "09:00",
      closes: "20:00",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    },
    { d: "Domingo", opens: "13:00", closes: "20:00", days: ["Sunday"] },
  ],
};

// index para lookup rápido por id
export const ITEM_INDEX = {};
CATALOG.forEach((c) => c.items.forEach((it) => { ITEM_INDEX[it.id] = { ...it, cat: c.id, catName: c.name }; }));
