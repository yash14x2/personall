// Create the elements
const section = document.createElement("section");
section.id = "hero";

const h4 = document.createElement("h4");
h4.className = "h4-banner";
h4.textContent = "Trade-in-offer";

const h2_1 = document.createElement("h2");
h2_1.className = "h2-banner";
h2_1.textContent = "super value deals";

const h1 = document.createElement("h1");
h1.className = "h1-banner";
h1.textContent = "on all products";

const p = document.createElement("p");
p.className = "p-banner";
p.textContent = "save more with coupons % up to 70% off";

const button = document.createElement("button");
button.className = "shop-now-button";
button.textContent = "Shop Now";

// Append elements to the section
section.appendChild(h4);
section.appendChild(h2_1);
section.appendChild(h1);
section.appendChild(p);
section.appendChild(button);

// Append the section to the document
document.body.appendChild(section);
