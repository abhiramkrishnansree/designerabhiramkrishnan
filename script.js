// Marquee
const marqueeItems = ["Branding","Packaging","Social Media","UI / UX","Advertising","Editorial","Hoardings","Identity"];
const track = document.getElementById("marquee-track");
const buildRow = () => marqueeItems.map(t => `<span>${t}<span class="star">★</span></span>`).join("");
track.innerHTML = buildRow() + buildRow() + buildRow();

// Socials
const socials = [
  { name:"Instagram", href:"https://instagram.com" },
  { name:"LinkedIn",  href:"https://www.linkedin.com/in/abhiramkrishnanrajan/" },
  { name:"Dribbble",  href:"https://dribbble.com" },
  { name:"Behance",   href:"https://behance.net" },
  { name:"Mail",      href:"mailto:hello@abhiramkrishnan.com" },
];
document.getElementById("socials-list").innerHTML = socials.map(s =>
  `<li><a href="${s.href}" target="_blank" rel="noopener"><span>${s.name}</span><span>↗</span></a></li>`
).join("");

// Feed grid (12 posts)
const feed = document.getElementById("feed-grid");
let html = "";
for (let i=1; i<=12; i++){
  html += `<figure><img src="assets/post${i}.jpg" alt="Social media post ${i}" loading="lazy" /><figcaption>Post · ${String(i).padStart(2,"0")}</figcaption></figure>`;
}
feed.innerHTML = html;
