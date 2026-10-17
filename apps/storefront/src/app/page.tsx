"use client";

import { useMemo, useState } from "react";
import { ActionLink, Eyebrow } from "@bowl-theory/ui";
import { brandLinks } from "@/lib/config";
import { categories, menu, type CategoryFilter, type MenuItem } from "@/lib/menu";

const money = (amount: number) => new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
}).format(amount);

function ProductCard({ item }: { item: MenuItem }) {
  const [packIndex, setPackIndex] = useState(0);
  const pack = item.packs[packIndex];

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        {/* Remote image URLs are illustrative; replace with approved brand/product photography before launch. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="product-image" src={item.image} alt={item.name} loading="lazy" />
        {item.tag && <span className="product-tag">{item.tag}</span>}
        <span className="image-index">{String(menu.findIndex((entry) => entry.id === item.id) + 1).padStart(2, "0")}</span>
      </div>
      <div className="product-copy">
        <div className="product-heading">
          <div>
            <p className="product-category">{item.category}</p>
            <h3>{item.name}</h3>
          </div>
          <p className="product-price">{money(pack.price)}</p>
        </div>
        <p className="product-description">{item.description}</p>
        <div className="pack-selector" aria-label={`Choose pack size for ${item.name}`}>
          {item.packs.map((option, index) => (
            <button
              className={index === packIndex ? "pack-option selected" : "pack-option"}
              key={option.label}
              onClick={() => setPackIndex(index)}
              aria-pressed={index === packIndex}
            >
              <span>{option.label}</span>
              <small>{option.detail}</small>
            </button>
          ))}
        </div>
        <div className="product-foot">
          <span>Selected · {pack.detail}</span>
          <a href={brandLinks.swiggy !== "#order" ? brandLinks.swiggy : brandLinks.zomato !== "#order" ? brandLinks.zomato : "#order"} aria-label={`Order ${item.name}`}>
            Order this <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [search, setSearch] = useState("");
  const filteredMenu = useMemo(() => menu.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const term = search.trim().toLowerCase();
    return matchesCategory && (!term || `${item.name} ${item.description}`.toLowerCase().includes(term));
  }), [activeCategory, search]);

  return (
    <main>
      <div className="announcement"><span>MADE WITH A LITTLE MORE THOUGHT</span><span>ROOTED IN THE COMFORT OF HOME</span></div>
      <header className="site-header">
        <a className="wordmark" href="#" aria-label="The Bowl Theory home">
          <span className="wordmark-mark">BT<span>°</span></span>
          <span className="wordmark-name">THE BOWL<br />THEORY</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#philosophy">Our philosophy</a>
          <a href="#menu">The menu</a>
          <a href="#ritual">The ritual</a>
        </nav>
        <a className="header-cta" href="#menu">Explore the menu <span>↘</span></a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <Eyebrow>THE EVERYDAY, ELEVATED</Eyebrow>
          <h1>Comfort,<br /><em>composed.</em></h1>
          <p className="hero-intro">Familiar flavours. Thoughtfully made. Rice bowls that bring a little more feeling to the everyday table.</p>
          <div className="hero-actions">
            <a className="button-dark" href="#menu">Discover the menu <span>↘</span></a>
            <a className="text-link" href="#philosophy">A note on how we cook <span>↗</span></a>
          </div>
          <div className="hero-note"><span className="note-line" /><span>GOOD FOOD DOESN’T NEED TO SHOUT.</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo" role="img" aria-label="A thoughtfully arranged meal with fresh ingredients">
            <div className="hero-photo-overlay" />
            <div className="hero-photo-label"><span>01 / 03</span><span>THE HOME TABLE</span></div>
          </div>
          <div className="hero-stamp"><span>THE</span><strong>BOWL<br />THEORY</strong><span>MADE FOR YOUR EVERYDAY</span></div>
          <p className="hero-side-note">A GOOD MEAL IS A SMALL WAY<br />OF COMING BACK TO YOURSELF.</p>
        </div>
        <div className="hero-bottom"><span>ANDHRA ROOTS · EVERYDAY RITUALS</span><span>SCROLL TO SLOW DOWN ↓</span></div>
      </section>

      <section className="manifesto" id="philosophy">
        <div className="manifesto-top"><Eyebrow>OUR POINT OF VIEW</Eyebrow><span>01 — THE PHILOSOPHY</span></div>
        <div className="manifesto-grid">
          <h2>Not just a meal.<br /><em>A familiar feeling.</em></h2>
          <div className="manifesto-body"><p>Some flavours stay with you. The sharpness of tamarind, the fragrance of cumin, the soft comfort of curd rice on a long day.</p><p>We bring those everyday favourites into focus — with care in the cooking, clarity in the ingredients, and a little more intention in every bowl.</p><a className="text-link" href="#menu">Meet your next favourite <span>↘</span></a></div>
        </div>
        <div className="manifesto-rule"><span>FAMILIAR, NEVER ORDINARY</span><span>MADE FOR THE MOMENTS IN BETWEEN</span></div>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-heading">
          <div><Eyebrow>THE MENU</Eyebrow><h2>Made for your<br /><em>kind of day.</em></h2></div>
          <p>From bright, tangy rice to slow comfort classics, find the bowl that feels right today.</p>
        </div>
        <div className="menu-controls">
          <div className="category-tabs" role="group" aria-label="Filter menu by category">
            {categories.map((category) => <button key={category} className={activeCategory === category ? "category-tab active" : "category-tab"} onClick={() => setActiveCategory(category)}>{category}</button>)}
          </div>
          <label className="menu-search"><span aria-hidden="true">⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Find your bowl" aria-label="Search menu" /></label>
        </div>
        <p className="pricing-note">Preview menu · Prices shown are indicative and subject to confirmation before launch.</p>
        <div className="product-grid">
          {filteredMenu.map((item) => <ProductCard item={item} key={item.id} />)}
        </div>
        {filteredMenu.length === 0 && <div className="empty-state">No bowls found. Try another search.</div>}
        <div className="menu-endnote"><span>THE BEST THINGS ARE OFTEN THE SIMPLEST.</span><span>{filteredMenu.length.toString().padStart(2, "0")} BOWLS TO EXPLORE</span></div>
      </section>

      <section className="ritual-section" id="ritual">
        <div className="ritual-image" role="img" aria-label="Warm, natural textures and a thoughtfully prepared meal"><span>02 / THE RITUAL</span></div>
        <div className="ritual-copy"><Eyebrow>A LITTLE CARE, IN EVERY DETAIL</Eyebrow><h2>Made to feel<br /><em>like yours.</em></h2><p>Good food is not an occasion. It is the small, everyday ritual that makes a day feel more like your own.</p><div className="ritual-points"><div><span>01</span><p><strong>Rooted in home</strong><small>Flavours that feel familiar, never fussy.</small></p></div><div><span>02</span><p><strong>Thoughtfully prepared</strong><small>Care in the details, from kitchen to bowl.</small></p></div><div><span>03</span><p><strong>Made for real life</strong><small>Your everyday meal, with a little more meaning.</small></p></div></div><a className="button-dark" href="#order">Find your bowl <span>↘</span></a></div>
      </section>

      <section className="order-section" id="order">
        <div className="order-ornament">BT°</div>
        <Eyebrow>YOUR TABLE IS WAITING</Eyebrow>
        <h2>Something good<br /><em>is on its way.</em></h2>
        <p>Choose your favourite, settle in, and let the everyday feel a little more special.</p>
        <div className="order-actions">
          {brandLinks.swiggy !== "#order" && <ActionLink href={brandLinks.swiggy} target="_blank" rel="noreferrer">Order on Swiggy ↗</ActionLink>}
          {brandLinks.zomato !== "#order" && <ActionLink href={brandLinks.zomato} target="_blank" rel="noreferrer">Order on Zomato ↗</ActionLink>}
          {brandLinks.swiggy === "#order" && brandLinks.zomato === "#order" && <span className="launch-note">Delivery links will appear here when configured.</span>}
          <ActionLink href={brandLinks.contact}>Contact us ↗</ActionLink>
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#"><span className="wordmark-mark">BT<span>°</span></span><span className="wordmark-name">THE BOWL<br />THEORY</span></a>
        <p>Comfort, composed.</p>
        <div className="footer-links"><a href="#philosophy">Our philosophy</a><a href="#menu">The menu</a><a href={brandLinks.instagram} target="_blank" rel="noreferrer">Instagram ↗</a><a href={brandLinks.contact}>Contact ↗</a></div>
        <span className="copyright">© {new Date().getFullYear()} THE BOWL THEORY</span>
      </footer>
    </main>
  );
}
