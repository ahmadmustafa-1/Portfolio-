// Projects Catalog Data
const projects = [
  {
    id: 1,
    title: "CRM Dashboard",
    category: "js",
    description: "An interactive Customer Relationship Management (CRM) dashboard featuring analytics panels, customer tracking grids, and key performance charts.",
    technologies: ["JavaScript", "HTML5", "CSS3 Grid", "Charts"],
    liveUrl: "https://ahmadmustafa-1.github.io/CRM-Dashboard/",
    githubUrl: "https://github.com/ahmadmustafa-1/CRM-Dashboard"
  },
  {
    id: 2,
    title: "Restaurant Web App",
    category: "js",
    description: "A modern restaurant landing platform featuring digital menu showcases, dining reservation workflows, and responsive layouts.",
    technologies: ["JavaScript", "HTML5", "CSS3 Features"],
    liveUrl: "https://ahmadmustafa-1.github.io/Restaurant/",
    githubUrl: "https://github.com/ahmadmustafa-1/Restaurant"
  },
  {
    id: 3,
    title: "ApexLance Platform",
    category: "js",
    description: "A freelance service Marketplace UI tailored for browsing creative talent, managing project tiers, and client interaction.",
    technologies: ["JavaScript", "HTML5", "Responsive UI"],
    liveUrl: "https://ahmadmustafa-1.github.io/ApexLance-/",
    githubUrl: "https://github.com/ahmadmustafa-1/ApexLance-"
  },
  {
    id: 4,
    title: "React News Website",
    category: "react",
    description: "A dynamic news platform featuring article categories and fluid responsive layouts built with modular React components.",
    technologies: ["React.js", "Vercel", "CSS Modules"],
    liveUrl: "https://news-website-tau-silk.vercel.app/",
    githubUrl: "https://github.com/ahmadmustafa-1"
  },
  {
    id: 5,
    title: "React Counter App",
    category: "react",
    description: "An interactive application demonstrating React state management, hooks, event handling, and modern UI transitions.",
    technologies: ["React.js", "Hooks", "CSS Transitions"],
    liveUrl: "https://counter-psi-rose.vercel.app/",
    githubUrl: "https://github.com/ahmadmustafa-1"
  },
  {
    id: 6,
    title: "React Kohl App",
    category: "react",
    description: "A custom React component interface for layout rendering, state handling, and interactive elements.",
    technologies: ["React.js", "State Synchronizer", "Flexbox"],
    liveUrl: "https://react-kohl-five-60.vercel.app/",
    githubUrl: "https://github.com/ahmadmustafa-1"
  },
  {
    id: 7,
    title: "Blurry Picture",
    category: "js",
    description: "Interactive project utilizing loading and scroll triggers to dynamically adjust image blurs and contrast filters.",
    technologies: ["JavaScript", "HTML5", "CSS3 Filters"],
    liveUrl: "https://ahmadmustafa-1.github.io/Blurry-Picture/",
    githubUrl: "https://github.com/ahmadmustafa-1/Blurry-Picture"
  },
  {
    id: 8,
    title: "Canvas Drawing Board",
    category: "js",
    description: "A canvas paint sketch board built with HTML5 Canvas APIs, custom brushes, colors, and canvas resets.",
    technologies: ["JavaScript", "HTML5 Canvas", "Mouse Events"],
    liveUrl: "https://ahmadmustafa-1.github.io/Canvas/",
    githubUrl: "https://github.com/ahmadmustafa-1/Canvas"
  },
  {
    id: 9,
    title: "Minimal Digital Clock",
    category: "js",
    description: "A digital clock featuring dynamic colored gradients that shift continuously to match hours, minutes, and seconds.",
    technologies: ["JavaScript", "CSS Keyframes", "Intervals"],
    liveUrl: "https://ahmadmustafa-1.github.io/Clock/",
    githubUrl: "https://github.com/ahmadmustafa-1/Clock"
  },
  {
    id: 10,
    title: "Moving Slides Carousel",
    category: "js",
    description: "A custom slider widget built to demonstrate translation offsets, pagination, and touch/drag gestures.",
    technologies: ["JavaScript", "CSS Translate", "Gestures"],
    liveUrl: "https://ahmadmustafa-1.github.io/Moving-Slides/",
    githubUrl: "https://github.com/ahmadmustafa-1/Moving-Slides"
  },
  {
    id: 11,
    title: "Moving Words Typography",
    category: "js",
    description: "Kinetic typography engine that parses text and drives complex motion path keyframes dynamically.",
    technologies: ["JavaScript", "CSS Keyframes", "DOM Parsing"],
    liveUrl: "https://ahmadmustafa-1.github.io/Moving-Words/",
    githubUrl: "https://github.com/ahmadmustafa-1/Moving-Words"
  },
  {
    id: 12,
    title: "Sliding Pictures Gallery",
    category: "js",
    description: "An interactive grid gallery where layout modules adapt based on coordinates of cursor movement.",
    technologies: ["JavaScript", "CSS Grid", "Relative Offsets"],
    liveUrl: "https://ahmadmustafa-1.github.io/Sliding-Pictures/",
    githubUrl: "https://github.com/ahmadmustafa-1/Sliding-Pictures"
  },
  {
    id: 13,
    title: "Dice Game",
    category: "js",
    description: "A local multiplayer board game engine utilizing JavaScript random number generation and dynamic DOM updates.",
    technologies: ["JavaScript", "DOM Attributes", "Math Modules"],
    liveUrl: "https://ahmadmustafa-1.github.io/Dice-Game/",
    githubUrl: "https://github.com/ahmadmustafa-1/Dice-Game"
  },
  {
    id: 14,
    title: "TingDog Website",
    category: "js",
    description: "Tinder-inspired landing page built using responsive grid layouts and customized CSS theme structures.",
    technologies: ["HTML5", "CSS3", "Bootstrap Grid"],
    liveUrl: "https://ahmadmustafa-1.github.io/TingDog-/",
    githubUrl: "https://github.com/ahmadmustafa-1/TingDog-"
  },
  {
    id: 15,
    title: "Virtual Drum Kit",
    category: "js",
    description: "Interactive keyboard layout binding letters to sound waves, creating a responsive virtual drum console.",
    technologies: ["JavaScript", "HTML5 Audio", "Keyboard Events"],
    liveUrl: "https://ahmadmustafa-1.github.io/DrumKit/",
    githubUrl: "https://github.com/ahmadmustafa-1/DrumKit"
  }
];

// Elements
const projectsGrid = document.getElementById("projects-grid");
const filterButtons = document.querySelectorAll(".bento-filter-btn");
const resumeBtn = document.getElementById("resume-btn");
const resumeModal = document.getElementById("resume-modal");
const closeModalBtn = document.getElementById("close-modal-btn");
const printCvBtn = document.getElementById("print-cv-btn");
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");
const backToTopBtn = document.getElementById("back-to-top");
const header = document.querySelector(".header");
const projectsCountStat = document.getElementById("stat-count-projects");

// 1. Dynamic Rendering of projects inside bento grid sub-container
function renderProjects(categoryFilter = "all") {
  projectsGrid.innerHTML = "";
  
  const filteredProjects = categoryFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === categoryFilter);

  filteredProjects.forEach((project, index) => {
    const card = document.createElement("div");
    
    // Assign specific colorful glow classes based on project category
    const glowClass = project.category === "react" ? "tile-glow-cyan" : "tile-glow-yellow";
    card.className = `project-bento-tile ${glowClass}`;
    card.style.animationDelay = `${index * 0.04}s`;
    
    const iconClass = project.category === "react" 
      ? "fa-brands fa-react react-color" 
      : "fa-brands fa-square-js js-color";
      
    const tagsHtml = project.technologies
      .map(tech => `<span class="tile-tag">${tech}</span>`)
      .join("");

    card.innerHTML = `
      <div class="tile-header">
        <div class="tile-category"><i class="${iconClass}"></i></div>
        <div class="tile-actions">
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" aria-label="Live Demo" class="live-action"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
      </div>
      <div class="tile-body">
        <h4>${project.title}</h4>
        <p>${project.description}</p>
      </div>
      <div class="tile-footer">
        <div class="tile-tags">
          ${tagsHtml}
        </div>
      </div>
    `;
    
    projectsGrid.appendChild(card);
  });
}

// Initial Run
renderProjects();

// 2. Filter Operations
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    filterButtons.forEach(btn => btn.setAttribute("aria-selected", "false"));
    
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    
    const filter = button.getAttribute("data-filter");
    renderProjects(filter);
  });
});

// 3. Stats Counter Animation
function animateStatsCounter() {
  const target = projects.length;
  let current = 0;
  const duration = 1200; // ms
  const stepTime = Math.abs(Math.floor(duration / target));
  
  const timer = setInterval(() => {
    current += 1;
    projectsCountStat.textContent = current + "+";
    if (current >= target) {
      clearInterval(timer);
    }
  }, stepTime);
}

// Trigger count on load
animateStatsCounter();

// 4. Header Effects & Scroll back controls
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
  
  if (window.scrollY > 400) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// 5. Resume Modal Operations
function openModal() {
  resumeModal.classList.add("show");
  document.body.classList.add("no-scroll");
}

function closeModal() {
  resumeModal.classList.remove("show");
  document.body.classList.remove("no-scroll");
}

resumeBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

resumeModal.addEventListener("click", (e) => {
  if (e.target === resumeModal) {
    closeModal();
  }
});

printCvBtn.addEventListener("click", () => {
  window.print();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && resumeModal.classList.contains("show")) {
    closeModal();
  }
});

// 6. Contact Form validation & animations
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const btn = document.getElementById("form-submit-btn");
  const origText = btn.innerHTML;
  
  btn.disabled = true;
  btn.innerHTML = `Sending... <i class="fa-solid fa-spinner fa-spin"></i>`;
  
  setTimeout(() => {
    formFeedback.textContent = "Awesome! Ahmad has received your message and will reply shortly.";
    formFeedback.className = "form-feedback success";
    contactForm.reset();
    
    btn.disabled = false;
    btn.innerHTML = origText;
    
    setTimeout(() => {
      formFeedback.className = "form-feedback hidden";
    }, 5000);
  }, 1200);
});
