// Counter Animation

function animateCounter() {
  const counters = document.querySelectorAll("[data-count]");
  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-count"));
    const increment = target / 100;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current).toLocaleString();
      }
    }, 20);
  });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

      // Trigger counter animation when stats section is visible
      if (entry.target.querySelector("[data-count]")) {
        animateCounter();
      }
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(section);
});

// Floating elements animation
function floatingAnimation() {
  const floatingElements = document.querySelectorAll(".floating-card");
  floatingElements.forEach((element, index) => {
    element.style.animation = `float 3s ease-in-out infinite`;
    element.style.animationDelay = `${index * 0.2}s`;
  });
}

// Add floating animation keyframes
const style = document.createElement("style");
style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
            
            .navbar.scrolled {
                background: rgba(255, 255, 255, 0.98) !important;
                backdrop-filter: blur(20px);
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            }
            
            .animate-fade-in {
                animation: fadeIn 0.6s ease-in-out;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .gradient-text {
                color: #ffffff !important;
                background: none;
                background-clip: unset;
                -webkit-background-clip: unset;
                -webkit-text-fill-color: unset;
                font-weight: 700;
                text-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
            }



            
            .hover-scale {
                transition: transform 0.3s ease;
            }
            
            .hover-scale:hover {
                transform: scale(1.05);
            }
            
            .particle-bg {
                position: absolute;
                width: 100%;
                height: 100%;
                overflow: hidden;
                z-index: -1;
            }
            
            .particle {
                position: absolute;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 50%;
                pointer-events: none;
                animation: float-particles 15s infinite linear;
            }
            
            @keyframes float-particles {
                0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
            }
            
            .typing-text {
                overflow: hidden;
                border-right: 2px solid #667eea;
                white-space: nowrap;
                animation: typing 3.5s steps(30, end), blink-caret 0.75s step-end infinite;
            }
            
            @keyframes typing {
                from { width: 0; }
                to { width: 100%; }
            }
            
            @keyframes blink-caret {
                from, to { border-color: transparent; }
                50% { border-color: #667eea; }
            }
            
            .glass-morphism {
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.2);
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            }
            
            .shimmer {
                position: relative;
                overflow: hidden;
            }
            
            .shimmer::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                animation: shimmer 2s infinite;
            }
            
            @keyframes shimmer {
                0% { left: -100%; }
                100% { left: 100%; }
            }
        `;
document.head.appendChild(style);

// Initialize floating animation
floatingAnimation();

// Add particle background
function createParticles() {
  const heroSection = document.querySelector(".hero-section");
  const particleContainer = document.createElement("div");
  particleContainer.className = "particle-bg";

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.width = Math.random() * 4 + 2 + "px";
    particle.style.height = particle.style.width;
    particle.style.animationDelay = Math.random() * 15 + "s";
    particle.style.animationDuration = Math.random() * 10 + 10 + "s";
    particleContainer.appendChild(particle);
  }

  heroSection.appendChild(particleContainer);
}

// Add typing effect to hero title
function typeWriter() {
  const heroTitle = document.querySelector(".hero-section h1");
  if (heroTitle) {
    heroTitle.classList.add("typing-text");
  }
}

// Add hover effects to cards
function addHoverEffects() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
      this.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
      this.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
    });
  });
}

// Parallax effect for hero section
function parallaxEffect() {
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
      heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });
}

// Progressive loading animation
function progressiveLoad() {
  const elements = document.querySelectorAll(".card, .floating-card");
  elements.forEach((element, index) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    element.style.animationDelay = `${index * 0.1}s`;

    setTimeout(() => {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }, index * 100);
  });
}

// Search functionality with suggestions
function initSearchFeatures() {
  const searchInput = document.querySelector(".search-input");
  const searchSuggestions = [
    "Layanan KTP",
    "Pengajuan Izin",
    "Berita Terbaru",
    "Wisata Sukoharjo",
    "Kontak Pemda",
  ];

  if (searchInput) {
    searchInput.addEventListener("focus", function () {
      this.placeholder = "Ketik untuk mencari...";
      this.style.boxShadow = "0 15px 35px rgba(102, 126, 234, 0.2)";
    });

    searchInput.addEventListener("blur", function () {
      this.placeholder = "Cari layanan, informasi, atau berita...";
      this.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
    });

    // Add search suggestions
    searchInput.addEventListener("input", function () {
      const value = this.value.toLowerCase();
      if (value.length > 0) {
        const suggestions = searchSuggestions.filter((suggestion) =>
          suggestion.toLowerCase().includes(value)
        );
        // Could implement dropdown suggestions here
      }
    });
  }
}

// Initialize all features
document.addEventListener("DOMContentLoaded", function () {
  createParticles();
  typeWriter();
  addHoverEffects();
  parallaxEffect();
  progressiveLoad();
  initSearchFeatures();

  // Add smooth reveal animation
  const revealElements = document.querySelectorAll(
    ".section-title, .lead, .card-title"
  );
  revealElements.forEach((element) => {
    element.classList.add("animate-fade-in");
  });

  // Add gradient text to important elements
  const importantTexts = document.querySelectorAll("h1, h2.section-title");
  importantTexts.forEach((text) => {
    text.classList.add("gradient-text");
  });
});

// Performance optimization
let ticking = false;
function requestTick() {
  if (!ticking) {
    requestAnimationFrame(updateAnimations);
    ticking = true;
  }
}

function updateAnimations() {
  // Update scroll-based animations here
  ticking = false;
}

window.addEventListener("scroll", requestTick);

// Add loading screen
function showLoadingScreen() {
  const loadingScreen = document.createElement("div");
  loadingScreen.innerHTML = `
                <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); z-index: 9999; display: flex; align-items: center; justify-content: center; flex-direction: column;">
                    <div class="spinner-border text-white" role="status" style="width: 3rem; height: 3rem;">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <h4 class="text-white mt-4">Memuat Pemda Sukoharjo...</h4>
                </div>
            `;
  document.body.appendChild(loadingScreen);

  // Remove loading screen after content loads
  window.addEventListener("load", function () {
    setTimeout(() => {
      loadingScreen.style.opacity = "0";
      loadingScreen.style.transition = "opacity 0.5s ease";
      setTimeout(() => {
        loadingScreen.remove();
      }, 500);
    }, 1000);
  });
}

// Initialize loading screen
showLoadingScreen();
