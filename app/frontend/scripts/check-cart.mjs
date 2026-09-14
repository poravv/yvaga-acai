// Verifica que un carrito guardado con datos viejos se actualice al catálogo vigente
// y que el mensaje de WhatsApp siga llevando solo cantidad, nombre, precio y total.
// Uso: node scripts/check-cart.mjs
import assert from "node:assert/strict";
import { ITEM_INDEX, PROMOS, CONTACT } from "../src/data/catalog.js";

const [first] = Object.values(ITEM_INDEX);
const promo = PROMOS[0];
const saved = [
  { id: first.id, name: "Nombre viejo", price: 1, color: "x", qty: 2 },
  { id: "producto-eliminado", name: "Ya no existe", price: 99, color: "x", qty: 1 },
  { id: promo.id, name: "Combo viejo", price: 1, color: "x", qty: 1 },
];
globalThis.localStorage = { getItem: () => JSON.stringify(saved), setItem() {} };
const { $items, $total, waLink } = await import("../src/store/cart.js");

const items = $items.get();
assert.deepEqual(items.map((i) => [i.id, i.name, i.price, i.qty]), [
  [first.id, first.name, first.price, 2],
  [promo.id, promo.name, promo.price, 1],
]);
assert.equal(items[0].img, first.img);
assert.equal($total.get(), first.price * 2 + promo.price);

const url = waLink(items, $total.get(), "Ana");
const msg = decodeURIComponent(url.split("?text=")[1]);
assert.ok(url.startsWith(`https://wa.me/${CONTACT.whatsapp}?text=`));
assert.ok(msg.includes(`2x ${first.name}`) && msg.includes("Mi nombre es: Ana"));
assert.ok(!/assets|\.webp|img/.test(msg), "el mensaje no debe incluir imágenes");
console.log("OK carrito y mensaje de WhatsApp");
