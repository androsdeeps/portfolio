import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

const palettes = [
  ["#7c3aed", "#4f46e5"],
  ["#06b6d4", "#3b82f6"],
  ["#f97316", "#db2777"],
  ["#10b981", "#0ea5e9"],
  ["#f43f5e", "#f59e0b"],
  ["#8b5cf6", "#ec4899"],
];

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function initials(label) {
  return label
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

function svgPlaceholder(label, { width = 800, height = 600, seedKey } = {}) {
  const [c1, c2] = palettes[hashString(seedKey ?? label) % palettes.length];
  const text = initials(label) || "?";
  const gradientId = `g-${hashString(seedKey ?? label)}`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="${gradientId}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c1}" />
      <stop offset="100%" stop-color="${c2}" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#${gradientId})" />
  <circle cx="${width * 0.82}" cy="${height * 0.18}" r="${Math.min(width, height) * 0.22}" fill="rgba(255,255,255,0.12)" />
  <circle cx="${width * 0.12}" cy="${height * 0.88}" r="${Math.min(width, height) * 0.28}" fill="rgba(0,0,0,0.1)" />
  <text x="50%" y="52%" font-family="Arial, Helvetica, sans-serif" font-size="${Math.min(width, height) * 0.28}" font-weight="700" fill="rgba(255,255,255,0.92)" text-anchor="middle" dominant-baseline="middle">${text}</text>
</svg>`;
}

const files = [
  { path: "images/avatar.svg", label: "Deepak Ghale", width: 600, height: 600 },
  {
    path: "images/og-image.svg",
    label: "Deepak Ghale",
    width: 1200,
    height: 630,
  },

  { path: "images/projects/nimbus-commerce-1.svg", label: "Nimbus Commerce" },
  {
    path: "images/projects/nimbus-commerce-2.svg",
    label: "Nimbus Commerce",
    seedKey: "nimbus-commerce-2",
  },
  {
    path: "images/projects/nimbus-commerce-3.svg",
    label: "Nimbus Commerce",
    seedKey: "nimbus-commerce-3",
  },
  { path: "images/projects/pulse-analytics-1.svg", label: "Pulse Analytics" },
  {
    path: "images/projects/pulse-analytics-2.svg",
    label: "Pulse Analytics",
    seedKey: "pulse-analytics-2",
  },
  { path: "images/projects/orbit-taskflow-1.svg", label: "Orbit TaskFlow" },
  {
    path: "images/projects/orbit-taskflow-2.svg",
    label: "Orbit TaskFlow",
    seedKey: "orbit-taskflow-2",
  },
  { path: "images/projects/fitrack-1.svg", label: "FiTrack Mobile" },
  {
    path: "images/projects/fitrack-2.svg",
    label: "FiTrack Mobile",
    seedKey: "fitrack-2",
  },
  { path: "images/projects/lumen-api-1.svg", label: "Lumen API" },
  { path: "images/projects/aurora-1.svg", label: "Aurora Design" },
  {
    path: "images/projects/aurora-2.svg",
    label: "Aurora Design",
    seedKey: "aurora-2",
  },

  {
    path: "images/certificates/aws-saa.svg",
    label: "AWS SAA",
    width: 400,
    height: 300,
  },
  {
    path: "images/certificates/gcp-dev.svg",
    label: "GCP Dev",
    width: 400,
    height: 300,
  },
  {
    path: "images/certificates/meta-frontend.svg",
    label: "Meta FE",
    width: 400,
    height: 300,
  },
  {
    path: "images/certificates/ckad.svg",
    label: "CKAD",
    width: 400,
    height: 300,
  },
  {
    path: "images/certificates/mongodb-dev.svg",
    label: "MongoDB",
    width: 400,
    height: 300,
  },
  {
    path: "images/certificates/fcc-js.svg",
    label: "freeCodeCamp",
    width: 400,
    height: 300,
  },

  {
    path: "images/testimonials/sarah-chen.svg",
    label: "Sarah Chen",
    width: 200,
    height: 200,
  },
  {
    path: "images/testimonials/marcus-rivera.svg",
    label: "Marcus Rivera",
    width: 200,
    height: 200,
  },
  {
    path: "images/testimonials/priya-patel.svg",
    label: "Priya Patel",
    width: 200,
    height: 200,
  },
  {
    path: "images/testimonials/david-kim.svg",
    label: "David Kim",
    width: 200,
    height: 200,
  },

  {
    path: "images/blog/scaling-nextjs.svg",
    label: "Scaling Next.js",
    width: 800,
    height: 500,
  },
  {
    path: "images/blog/accessible-forms.svg",
    label: "Accessible Forms",
    width: 800,
    height: 500,
  },
  {
    path: "images/blog/api-gateway.svg",
    label: "API Gateway",
    width: 800,
    height: 500,
  },
];

for (const file of files) {
  const fullPath = join(publicDir, file.path);
  mkdirSync(dirname(fullPath), { recursive: true });
  writeFileSync(
    fullPath,
    svgPlaceholder(file.label, {
      width: file.width,
      height: file.height,
      seedKey: file.seedKey,
    }),
  );
}

console.log(`Generated ${files.length} placeholder images.`);
