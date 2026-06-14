/* Estado global del carrito — compartido entre todas las islas React vía nanostores.
   Persiste en localStorage; seguro para SSR (guarda accesos a window). */
import { atom, computed } from "nanostores";
import { CONTACT } from "../data/catalog.js";

const STORAGE_KEY = "yvaga_cart";

function readInitial() {
  if (typeof localStorage === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); } catch { return []; }
}

export const $items = atom(readInitial());
export const $cartOpen = atom(false);
export const $toast = atom(null);

export const $count = computed($items, (items) => items.reduce((s, i) => s + i.qty, 0));
export const $total = computed($items, (items) => items.reduce((s, i) => s + (i.price || 0) * i.qty, 0));

if (typeof window !== "undefined") {
  $items.subscribe((items) => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); } catch { /* almacenamiento no disponible */ }
  });
}

let toastTimer = null;
export function showToast(msg) {
  $toast.set(msg);
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $toast.set(null), 2200);
}

export function add(item) {
  const prev = $items.get();
  const i = prev.findIndex((p) => p.id === item.id);
  if (i >= 0) {
    const next = [...prev];
    next[i] = { ...next[i], qty: next[i].qty + 1 };
    $items.set(next);
  } else {
    $items.set([...prev, {
      id: item.id, name: item.name, price: item.price,
      color: item.color || "var(--acai)", qty: 1,
    }]);
  }
  showToast(item.name + " agregado");
}

export function setQty(id, delta) {
  $items.set($items.get().flatMap((p) => {
    if (p.id !== id) return [p];
    const q = p.qty + delta;
    return q <= 0 ? [] : [{ ...p, qty: q }];
  }));
}

export function remove(id) {
  $items.set($items.get().filter((p) => p.id !== id));
}

export const openCart = () => $cartOpen.set(true);
export const closeCart = () => $cartOpen.set(false);

export function waLink(items, total) {
  const fmt = (n) => new Intl.NumberFormat("es-PY").format(n) + " Gs";
  let msg = "¡Hola Yvága Açai! 🫐 Quiero hacer este pedido:%0A%0A";
  items.forEach((it) => {
    const line = `• ${it.qty}x ${it.name}` + (it.price ? ` — ${fmt(it.price * it.qty)}` : " — a consultar");
    msg += encodeURIComponent(line) + "%0A";
  });
  msg += "%0A" + encodeURIComponent(`Total: ${fmt(total)}`);
  msg += "%0A%0A" + encodeURIComponent("Mi nombre es: ");
  return `https://wa.me/${CONTACT.whatsapp}?text=${msg}`;
}
