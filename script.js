const PROJECTS = [
  {
    title: "Dual-Axis Desktop Turret",
    tag: "Computer vision · IoT · embedded control",
    label: "01",
    image: "images/turret.png",
    thumbnail: "images/thumbnail_turret.png",
    role: "Designer / engineer",
    tools: "SolidWorks, 3D printing, Python, Raspberry Pi, Arduino Nano, C++, OpenCV, YOLO, Bluetooth, SQL, ThingsBoard",
    description:
      "A 3D-printed dual-axis laser desktop turret developed in two versions. The first version combined infrared remote control, a gesture glove with speed controlled by inclination, and computer-vision tracking of a preset object. The upgraded Raspberry Pi version added automatic face detection and tracking, an emotion-recognition model, IoT control through ThingsBoard, SQLite data storage, post-processing analytics and dashboard visualization.",
    links: [
      ["Version 1 video", "https://www.youtube.com/watch?v=yiCJC99kZBk"],
      ["Upgraded version video", "https://www.youtube.com/watch?v=UtxhBHREPes"],
      ["Project files", "https://lauedu74602-my.sharepoint.com/:f:/g/personal/marc_zgheib_lau_edu/IgBJ5T-4I6kYSpCHvJW4Qd35AdLPlfUTnfAL0iiOQSptqLo?e=g1yvWh"]
    ]
  },
  {
    title: "KaleidoScape",
    tag: "Real-time computer vision → generative music",
    label: "02",
    image: "images/kaleidoscape.png",
    thumbnail: "images/thumbnail_kaleidoscape.png",
    role: "Designer / engineer",
    tools: "Python, OpenCV, NumPy, Arduino, C++, Raspberry Pi, Max/MSP, OSC, SolidWorks, 3D printing",
    description:
      "An interactive installation that converts live kaleidoscope visuals into real-time generative music. A camera captures evolving patterns while a computer-vision pipeline extracts hue, brightness, symmetry, density and geometric complexity. These parameters are mapped to pitch, key, rhythm, spatialization and harmonic structure. The system combines a SolidWorks-designed 3D-printed enclosure, Arduino–Raspberry Pi serial communication and Wi-Fi OSC streaming to Max/MSP for low-latency audio synthesis.",
    links: [
      ["Project showcase / files", "https://lauedu74602-my.sharepoint.com/:f:/g/personal/marc_zgheib_lau_edu/IgD1N711V3TOS6qpPvUVzZg2AZAbwWvKa7jyC8zZBeHyLn0?e=aVR4tU"],
      ["Project data & files", "https://lauedu74602-my.sharepoint.com/:f:/g/personal/marc_zgheib_lau_edu/IgAyo11DNldhQ7VxYR2jO-idAQNtKdKERaktfjad2gRsG0g?e=C87qSa"]
    ]
  },
  {
    title: "Thermi-On",
    tag: "Wearable heat therapy for elderly users",
    label: "03",
    image: "images/thermi-on.png",
    thumbnail: "images/thumbnail_thermion.png",
    role: "Product designer / engineer",
    tools: "Arduino Nano 33 BLE Sense, KiCAD, PCB design, sewing, neoprene, NTC thermistors, MOSFET control, haptics",
    description:
      "A clinically-informed wearable heat-therapy device designed around the dexterity limitations of elderly users. The slide-on neoprene band removes clasps and grip requirements and uses a deliberately minimal two-button interface with colour-coded LED feedback. The working prototype integrates custom flexible PCB heater pads, three heat levels up to 40°C, a 4000mAh Li-ion battery with USB-C charging, temperature sensing and vibration feedback. The process combined contextual research, iterative prototyping and clinical literature grounding.",
    links: [
      ["Project video", "https://youtu.be/rHCgW6-QT4A"],
      ["Project files", "https://lauedu74602-my.sharepoint.com/:f:/g/personal/marc_zgheib_lau_edu/IgBNP4LvkKe1TLl06fJDDqCEAcZShpTWRH0fkwYt6xyf56o?e=L2hwN5"]
    ]
  },
  {
    title: "The WRISTurn",
    tag: "Gamified grip & wrist rehabilitation device",
    label: "04",
    image: "images/wristurn.png",
    thumbnail: "images/thumbnail_wristurn.png",
    role: "Product designer / engineer",
    tools: "Human-centered design, SolidWorks, Arduino, embedded sensors, strain gauges, force sensing, haptics, UI/UX, rapid prototyping",
    description:
      "An ergonomic hand-training device designed to help older adults maintain functional independence and combat decline in grip and wrist function. Three axes of motion — torsion, shear and cap motion — mimic everyday tasks such as opening jars while integrated strain gauges provide force sensing. Therapeutic heat and micro-vibration are paired with a gamified interface that provides real-time feedback and tracks progress. The design emphasizes lightweight portability, zero technical setup, repairability and sustainable material choices.",
    links: [
      ["Project files", "https://lauedu74602-my.sharepoint.com/:f:/g/personal/marc_zgheib_lau_edu/IgCfqxn-IYGBRIEuDPp_eXp6AWdVq8X0cwz9lIKsxreutko?e=6nbXz3"]
    ]
  },
  {
    title: "Micro-AID",
    tag: "Multi-terrain first-response micro-mobility",
    label: "05",
    image: "images/micro-aid.png",
    thumbnail: "images/thumbnail_scooter.png",
    role: "Design / engineering team member",
    tools: "CAD, CMF design, KeyShot, mobility systems, suspension design, aluminium chassis, EV systems, battery integration, thermal imaging, GPS",
    description:
      "A team-designed three-wheeled electric scooter intended to improve first-response access in earthquake-stricken areas where rubble and collapsed infrastructure block conventional emergency vehicles. The concept combines adjustable ground clearance, puncture-proof honeycomb tyres, a 50 kg payload capacity, thermal imaging with casualty segmentation, GPS and a rugged touchscreen. The design includes an independent trailing-arm suspension and high-strength 6061-T6 aluminium chassis, with foldable handlebars and a telescopic seat for compact transport.",
    links: [
      ["Project files", "https://lauedu74602-my.sharepoint.com/:f:/g/personal/marc_zgheib_lau_edu/IgAiJ0Cn3eXEQp0vL3SFKvD1ATWWjP5IldPKJOshPIw0cPQ?e=66e7aW"]
    ]
  },
  {
    title: "Motorized Sun-Tracking Patio Umbrella",
    tag: "Solar-powered smart patio umbrella · mechanical sun tracking",
    label: "06",
    image: "images/sun-tracking-umbrella.png",
    thumbnail: "images/thumbnail_umbrella.png",
    role: "Final year project team member",
    tools: "SOLIDWORKS, Computer-Aided Design (CAD), steel structure, solar tracking, mechanical design",
    description:
      "Aug 2023 – Jul 2025. Associated with Lebanese American University. My team and I designed a smart green patio umbrella from scratch, made of steel, up to 2.5 meters tall, and covering a 2×2 meter shading area. The full research and design was successfully completed as my final year project (FYP-II) at LAU, and the real-life prototype is now being implemented as my FYP-II project. The umbrella generates its own clean power using a solar panel mounted on top, and its smart mechanical tracking system keeps the panel perpendicular to the sun's rays while also keeping the user shaded without requiring manual adjustment. Additional features include Bluetooth speakers, night lights and phone charging ports.",
    links: []
  }
];

const grid = document.getElementById("projectGrid");

PROJECTS.forEach((p, i) => {
  const card = document.createElement("article");
  card.className = "project-card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `View details for ${p.title}`);

  card.innerHTML = `
    <div class="project-thumb">
      <img src="${p.thumbnail || p.image}" alt="${p.title}" loading="lazy">
      <span class="project-overlay">View project ↗</span>
    </div>
    <div class="project-meta">
      <span class="project-num">PROJECT-${p.label}</span>
      <span class="project-type">SELECTED WORK</span>
    </div>
    <h3 class="project-title">${p.title}</h3>
    <p class="project-tag">${p.tag}</p>
  `;

  const open = () => openModal(i);
  card.addEventListener("click", open);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      open();
    }
  });

  grid.appendChild(card);
});

const overlay = document.getElementById("modalOverlay");
const modalThumb = document.getElementById("modalThumb");
const modalVideos = document.getElementById("modalVideos");
const modalIndex = document.getElementById("modalIndex");
const modalTitle = document.getElementById("modalTitle");
const modalTagline = document.getElementById("modalTagline");
const modalDesc = document.getElementById("modalDesc");
const modalSpecs = document.getElementById("modalSpecs");
const modalLinks = document.getElementById("modalLinks");
let lastFocused = null;

function youtubeId(url) {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([^?&/]+)/
  );
  return match ? match[1] : null;
}

function openModal(i) {
  const p = PROJECTS[i];

  modalThumb.innerHTML = `<img src="${p.image}" alt="${p.title}">`;

  const youtubeLinks = p.links.filter(([, url]) => youtubeId(url));
  modalVideos.innerHTML = youtubeLinks.map(([label, url]) => {
    const id = youtubeId(url);
    return `
      <div class="project-video">
        <div class="project-video-label">${label}</div>
        <div class="project-video-frame">
          <iframe
            src="https://www.youtube.com/embed/${id}"
            title="${label} — ${p.title}"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </div>
      </div>
    `;
  }).join("");
  modalVideos.classList.toggle("has-videos", youtubeLinks.length > 0);
  modalIndex.textContent = `PROJECT-${p.label}`;
  modalTitle.textContent = p.title;
  modalTagline.textContent = p.tag;
  modalDesc.textContent = p.description;

  modalSpecs.innerHTML = `
    <div class="spec-row">
      <span class="spec-label">Role</span>
      <span class="spec-value">${p.role}</span>
    </div>
    <div class="spec-row">
      <span class="spec-label">Tools</span>
      <span class="spec-value">${p.tools}</span>
    </div>
  `;

  modalLinks.innerHTML = p.links
    .filter(([, url]) => !youtubeId(url))
    .map(([label, url]) =>
      `<a href="${url}" target="_blank" rel="noopener">${label} ↗</a>`
    ).join("");

  lastFocused = document.activeElement;
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}

function closeModal() {
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  modalVideos.innerHTML = "";
  modalVideos.classList.remove("has-videos");
  if (lastFocused) lastFocused.focus();
}

document.getElementById("modalClose").addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.classList.contains("open")) closeModal();
});

const header = document.getElementById("siteHeader");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 20);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

navToggle.addEventListener("click", () => {
  const open = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});

siteNav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  })
);

document.getElementById("year").textContent = new Date().getFullYear();
