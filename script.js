/* The Bowl Theory — plain JavaScript. No packages or build tools required. */
const WHATSAPP_NUMBER = ""; // Add your WhatsApp number with country code, digits only (example: 919876543210).

const menuItems = [
  { id: "tamarind-pulihora", name: "Tamarind Pulihora", description: "Tangy tamarind rice, tempered spices and the familiar warmth of home.", category: "Rice bowls", tag: "Signature", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85", packs: [{ label: "Regular", detail: "350 g", price: 99 }, { label: "Generous", detail: "500 g", price: 139 }, { label: "Family", detail: "1 kg", price: 259 }] },
  { id: "lemon-pulihora", name: "Lemon Pulihora", description: "Bright citrus, green chilli and a delicate crackle of tempering.", category: "Rice bowls", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85", packs: [{ label: "Regular", detail: "350 g", price: 99 }, { label: "Generous", detail: "500 g", price: 139 }, { label: "Family", detail: "1 kg", price: 259 }] },
  { id: "tomato-rice", name: "Tomato Rice", description: "Slow-cooked tomato masala, aromatic rice and a rounded, homestyle finish.", category: "Rice bowls", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85", packs: [{ label: "Regular", detail: "350 g", price: 109 }, { label: "Generous", detail: "500 g", price: 149 }, { label: "Family", detail: "1 kg", price: 279 }] },
  { id: "zeera-rice", name: "Zeera Rice", description: "Fragrant cumin rice: simple, soulful and made to pair beautifully.", category: "Rice bowls", image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=85", packs: [{ label: "Regular", detail: "350 g", price: 99 }, { label: "Generous", detail: "500 g", price: 139 }, { label: "Family", detail: "1 kg", price: 259 }] },
  { id: "pudina-rice", name: "Pudina Rice", description: "Fresh mint, green herbs and a lively, aromatic finish.", category: "Rice bowls", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85", packs: [{ label: "Regular", detail: "350 g", price: 109 }, { label: "Generous", detail: "500 g", price: 149 }, { label: "Family", detail: "1 kg", price: 279 }] },
  { id: "kothimeera-rice", name: "Kothimeera Rice", description: "Coriander-forward rice with fresh green notes and gentle spice.", category: "Rice bowls", image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=85", packs: [{ label: "Regular", detail: "350 g", price: 109 }, { label: "Generous", detail: "500 g", price: 149 }, { label: "Family", detail: "1 kg", price: 279 }] },
  { id: "curd-rice", name: "Curd Rice", description: "Cooling, creamy comfort finished with a gentle South Indian tempering.", category: "Comfort classics", tag: "Comfort classic", image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=900&q=85", packs: [{ label: "Regular", detail: "350 g", price: 89 }, { label: "Generous", detail: "500 g", price: 129 }, { label: "Family", detail: "1 kg", price: 239 }] },
  { id: "pappu-charu-rice", name: "Pappu Charu Rice", description: "A comforting dal-and-tamarind pairing inspired by everyday Andhra meals.", category: "Comfort classics", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85", packs: [{ label: "Regular", detail: "350 g", price: 119 }, { label: "Generous", detail: "500 g", price: 159 }, { label: "Family", detail: "1 kg", price: 299 }] },
  { id: "pappu-aavakai-rice", name: "Pappu Aavakai Rice", description: "Dal rice with a bold, pickle-led Andhra flavour.", category: "Comfort classics", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85", packs: [{ label: "Regular", detail: "350 g", price: 129 }, { label: "Generous", detail: "500 g", price: 169 }, { label: "Family", detail: "1 kg", price: 319 }] },
  { id: "chicken-pulav", name: "Chicken Pulav", description: "Aromatic rice and warming spices with tender chicken.", category: "From the kitchen", tag: "House favourite", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85", packs: [{ label: "Single", detail: "450 g", price: 189 }, { label: "Hungry", detail: "700 g", price: 269 }, { label: "Share", detail: "1 kg", price: 379 }] },
  { id: "chicken-fry-rice", name: "Chicken Fry Piece Biryani", description: "Spiced rice layered with crisp-edged chicken fry pieces.", category: "From the kitchen", image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=85", packs: [{ label: "Single", detail: "450 g", price: 219 }, { label: "Hungry", detail: "700 g", price: 299 }, { label: "Share", detail: "1 kg", price: 429 }] },
  { id: "bagara-rice", name: "Bagara Rice", description: "Hyderabadi-style fragrant rice with whole spices and a rich aroma.", category: "From the kitchen", image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=85", packs: [{ label: "Regular", detail: "350 g", price: 109 }, { label: "Generous", detail: "500 g", price: 149 }, { label: "Family", detail: "1 kg", price: 279 }] }
];

const money = value => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);
const grid = document.getElementById("menu-grid");
const searchInput = document.getElementById("menu-search");
const tabs = document.getElementById("category-tabs");
const cartDrawer = document.getElementById("cart-drawer");
const backdrop = document.getElementById("drawer-backdrop");
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const drawerFooter = document.getElementById("drawer-footer");
const cartTotal = document.getElementById("cart-total");
const toast = document.getElementById("toast");
let activeCategory = "All";
let cart = [];
let toastTimer;

function selectedPackFor(id) {
  const selected = document.querySelector(`[data-pack-group="${id}"] .pack-option.selected`);
  return Number(selected?.dataset.packIndex || 0);
}

function renderMenu() {
  const term = searchInput.value.trim().toLowerCase();
  const visible = menuItems.filter(item =>
    (activeCategory === "All" || item.category === activeCategory) &&
    (item.name.toLowerCase().includes(term) || item.description.toLowerCase().includes(term))
  );
  if (!visible.length) {
    grid.innerHTML = '<div class="no-results">No bowls found just yet. Try another search.</div>';
    return;
  }
  grid.innerHTML = visible.map((item, index) => {
    const pack = item.packs[0];
    return `
      <article class="menu-card" style="animation-delay:${Math.min(index * 45, 220)}ms">
        <div class="menu-card-image">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          ${item.tag ? `<span class="menu-tag">${item.tag}</span>` : ""}
        </div>
        <div class="menu-card-body">
          <div class="menu-card-top"><h3>${item.name}</h3><span class="menu-price" data-price-for="${item.id}">${money(pack.price)}</span></div>
          <p class="menu-description">${item.description}</p>
          <p class="pack-label">Choose your portion</p>
          <div class="pack-options" data-pack-group="${item.id}">
            ${item.packs.map((option, i) => `<button class="pack-option ${i === 0 ? "selected" : ""}" type="button" data-pack-index="${i}" aria-pressed="${i === 0 ? "true" : "false"}"><strong>${option.label}</strong><span>${option.detail}</span></button>`).join("")}
          </div>
          <button class="add-button" type="button" data-add-item="${item.id}">Add to your order <span aria-hidden="true">+</span></button>
        </div>
      </article>`;
  }).join("");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function openCart() {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  backdrop.hidden = false;
  document.body.classList.add("drawer-open");
  document.getElementById("close-cart").focus();
}
function closeCart() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  backdrop.hidden = true;
  document.body.classList.remove("drawer-open");
  document.getElementById("open-cart").focus();
}

function addToCart(itemId, packIndex) {
  const item = menuItems.find(entry => entry.id === itemId);
  const pack = item.packs[packIndex];
  const existing = cart.find(entry => entry.itemId === itemId && entry.packIndex === packIndex);
  if (existing) existing.quantity += 1;
  else cart.push({ itemId, packIndex, quantity: 1 });
  renderCart();
  showToast(`${item.name} added to your order`);
}

function changeQuantity(itemId, packIndex, delta) {
  const entry = cart.find(line => line.itemId === itemId && line.packIndex === packIndex);
  if (!entry) return;
  entry.quantity += delta;
  if (entry.quantity <= 0) cart = cart.filter(line => !(line.itemId === itemId && line.packIndex === packIndex));
  renderCart();
}

function orderText() {
  const lines = cart.map(line => {
    const item = menuItems.find(entry => entry.id === line.itemId);
    const pack = item.packs[line.packIndex];
    return `• ${item.name} — ${pack.label} (${pack.detail}) × ${line.quantity}: ${money(pack.price * line.quantity)}`;
  });
  const total = cart.reduce((sum, line) => sum + menuItems.find(item => item.id === line.itemId).packs[line.packIndex].price * line.quantity, 0);
  return `Hello The Bowl Theory! I'd like to place this order:\n\n${lines.join("\n")}\n\nSubtotal: ${money(total)}\n\nPlease confirm availability and delivery details.`;
}

function renderCart() {
  const count = cart.reduce((sum, line) => sum + line.quantity, 0);
  const total = cart.reduce((sum, line) => {
    const item = menuItems.find(entry => entry.id === line.itemId);
    return sum + item.packs[line.packIndex].price * line.quantity;
  }, 0);
  cartCount.textContent = count;
  drawerFooter.hidden = cart.length === 0;
  if (!cart.length) {
    cartItems.innerHTML = '<div class="empty-cart"><span aria-hidden="true">✳</span><h3>Your bowl is waiting.</h3><p>Add something delicious from the menu and it will show up here.</p><button class="text-link" id="browse-menu" type="button">Browse the menu →</button></div>';
    return;
  }
  cartItems.innerHTML = cart.map(line => {
    const item = menuItems.find(entry => entry.id === line.itemId);
    const pack = item.packs[line.packIndex];
    return `<div class="cart-line">
      <div><h3>${item.name}</h3><p>${pack.label} · ${pack.detail}</p><div class="quantity-control"><button type="button" data-quantity="-1" data-item="${line.itemId}" data-pack="${line.packIndex}" aria-label="Remove one ${item.name}">−</button><span>${line.quantity}</span><button type="button" data-quantity="1" data-item="${line.itemId}" data-pack="${line.packIndex}" aria-label="Add one ${item.name}">+</button></div></div>
      <span class="cart-line-price">${money(pack.price * line.quantity)}</span>
    </div>`;
  }).join("");
  cartTotal.textContent = money(total);
}

tabs.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  tabs.querySelectorAll("[data-category]").forEach(tab => {
    const active = tab === button;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-pressed", String(active));
  });
  renderMenu();
});
searchInput.addEventListener("input", renderMenu);
grid.addEventListener("click", event => {
  const packButton = event.target.closest(".pack-option");
  if (packButton) {
    const group = packButton.closest("[data-pack-group]");
    group.querySelectorAll(".pack-option").forEach(button => {
      const selected = button === packButton;
      button.classList.toggle("selected", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    const item = menuItems.find(entry => entry.id === group.dataset.packGroup);
    document.querySelector(`[data-price-for="${item.id}"]`).textContent = money(item.packs[Number(packButton.dataset.packIndex)].price);
    return;
  }
  const addButton = event.target.closest("[data-add-item]");
  if (addButton) {
    addToCart(addButton.dataset.addItem, selectedPackFor(addButton.dataset.addItem));
  }
});
cartItems.addEventListener("click", event => {
  if (event.target.id === "browse-menu") {
    closeCart();
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
    return;
  }
  const quantityButton = event.target.closest("[data-quantity]");
  if (quantityButton) changeQuantity(quantityButton.dataset.item, Number(quantityButton.dataset.pack), Number(quantityButton.dataset.quantity));
});
document.getElementById("open-cart").addEventListener("click", openCart);
document.getElementById("close-cart").addEventListener("click", closeCart);
backdrop.addEventListener("click", closeCart);
document.addEventListener("keydown", event => { if (event.key === "Escape" && cartDrawer.classList.contains("open")) closeCart(); });
document.getElementById("copy-order").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(orderText());
    showToast("Order summary copied. You can paste it into a message.");
  } catch {
    const field = document.createElement("textarea");
    field.value = orderText();
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    const copied = document.execCommand("copy");
    field.remove();
    showToast(copied ? "Order summary copied." : "Please select and copy your order summary manually.");
  }
});
document.getElementById("whatsapp-order").addEventListener("click", () => {
  if (!cart.length) return;
  if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
    showToast("Direct WhatsApp checkout needs your business number first.");
    return;
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(orderText())}`, "_blank", "noopener,noreferrer");
});
document.getElementById("current-year").textContent = new Date().getFullYear();
renderMenu();
renderCart();