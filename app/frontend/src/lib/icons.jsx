/* Iconos SVG, glifos de fruta y formato de precio — compartidos por las islas React */

export function gs(n) {
  if (n == null) return "A consultar";
  return new Intl.NumberFormat("es-PY").format(n) + " Gs";
}

export const I = {
  cart: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>),
  menu: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" {...p}><path d="M3 6h18M3 12h18M3 18h18"/></svg>),
  x: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" {...p}><path d="M18 6 6 18M6 6l12 12"/></svg>),
  plus: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" {...p}><path d="M12 5v14M5 12h14"/></svg>),
  arrow: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12h14M13 6l6 6-6 6"/></svg>),
  check: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20 6 9 17l-5-5"/></svg>),
  whatsapp: (p) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43l-.48-.01c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z"/></svg>),
  instagram: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><rect x="2" y="2" width="20" height="20" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>),
  tiktok: (p) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.6c-1.2.1-2.4-.2-3.5-.8v5.9c0 3.2-2.4 5.4-5.3 5.4S6 17.8 6 14.8c0-2.9 2.5-5 5.4-4.8v2.7c-.4-.1-.8-.2-1.2-.2-1.4 0-2.5 1-2.5 2.4 0 1.4 1.1 2.5 2.5 2.5s2.4-1.1 2.4-2.6V3h3.9Z"/></svg>),
  facebook: (p) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M14 9V7.2c0-.8.5-1 .9-1H17V3h-2.6C11.6 3 11 5 11 6.6V9H9v3h2v9h3v-9h2.4l.6-3h-3Z"/></svg>),
  pin: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>),
  clock: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>),
  leaf: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>),
  sparkle: (p) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2l1.8 5.6L19 9.4l-5.2 1.8L12 17l-1.8-5.8L5 9.4l5.2-1.8L12 2Z"/><path d="M19 14l.9 2.6L22.5 17l-2.6.9L19 20.5l-.9-2.6L15.5 17l2.6-.4L19 14Z" opacity=".7"/></svg>),
  bolt: (p) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/></svg>),
  heart: (p) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 21s-7.5-4.6-10-9.2C.6 9 1.4 5.5 4.5 4.4 6.7 3.6 9 4.5 12 7c3-2.5 5.3-3.4 7.5-2.6C22.6 5.5 23.4 9 22 11.8 19.5 16.4 12 21 12 21Z"/></svg>),
  cone: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M7 9a5 5 0 0 1 10 0Z" fill="currentColor"/><path d="M7.5 9l4.5 11 4.5-11" fill="none"/><path d="M9 13h6M10 16h4"/></svg>),
  bowl: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 11h18a9 9 0 0 1-18 0Z" fill="currentColor"/><path d="M8 8c0-1.5 1-2.5 2-2.5M12 7.5c0-2 1.2-3 2.5-3M16 8.5c0-1 .6-1.8 1.5-2"/></svg>),
  popsicle: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="6" y="2.5" width="12" height="13" rx="6" fill="currentColor" stroke="none"/><rect x="6" y="2.5" width="12" height="13" rx="6"/><path d="M12 15.5V22"/></svg>),
  tub: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 9h14l-1.2 10.5a2 2 0 0 1-2 1.5H8.2a2 2 0 0 1-2-1.5Z" fill="currentColor"/><path d="M4 6.5C4 5 7.6 4 12 4s8 1 8 2.5S16.4 9 12 9 4 8 4 6.5Z"/></svg>),
  cake: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M4 21h16v-7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3Z" fill="currentColor"/><path d="M4 16c2 0 2 1.4 4 1.4S10 16 12 16s2 1.4 4 1.4S18 16 20 16M12 8V5M12 5l1-1-1-1-1 1 1 1Z"/></svg>),
};

/* glifos de fruta para los chips flotantes del hero */
export const Fruit = {
  berry: (p) => (<svg viewBox="0 0 24 24" fill="#fff" {...p}><circle cx="9" cy="14" r="5"/><circle cx="15" cy="14" r="5"/><circle cx="12" cy="9" r="4.5"/><path d="M12 5c0-2 1.5-3 3-3" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round"/></svg>),
  banana: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 5c0 7 4 13 13 13 1.5 0 2-1.5 0-2C9 14 7 9 7 5c0-1.2-2-1.2-2 0Z" fill="#fff"/></svg>),
  leaf: (p) => (<svg viewBox="0 0 24 24" fill="#fff" {...p}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/></svg>),
  drop: (p) => (<svg viewBox="0 0 24 24" fill="#fff" {...p}><path d="M12 2s7 8 7 12.5A7 7 0 1 1 5 14.5C5 10 12 2 12 2Z"/></svg>),
  cube: (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round" {...p}><rect x="4" y="4" width="16" height="16" rx="3"/></svg>),
};
