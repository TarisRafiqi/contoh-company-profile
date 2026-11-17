// ==========================================================================
// MAIN.JS — PT. Mahak Lestari Indah
// Mobile Navigation, Service Accordion, Career Filter (HTMX-compatible)
// ==========================================================================

const initMainUI = () => {
  // 0. Highlight active navigation link based on current URL
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar-nav .nav-link[data-page]").forEach((link) => {
    const isCurrent = link.getAttribute("data-page") === path;
    link.classList.toggle("is-active", isCurrent);
    if (isCurrent) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  // 1. Mobile Navbar Hamburger Toggle
  const navToggle = document.querySelector(".navbar-toggle");
  const navMenu = document.querySelector("#navbar-menu");

  if (navToggle && navMenu && !navToggle.dataset.bound) {
    navToggle.dataset.bound = "true";

    navToggle.addEventListener("click", () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isExpanded));
      navMenu.classList.toggle("is-open", !isExpanded);
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.setAttribute("aria-expanded", "false");
        navMenu.classList.remove("is-open");
      });
    });
  }

  // Global Escape handler (bound once)
  if (!document.body.dataset.navEscapeBound) {
    document.body.dataset.navEscapeBound = "true";
    document.addEventListener("keydown", (event) => {
      const currentToggle = document.querySelector(".navbar-toggle");
      const currentMenu = document.querySelector("#navbar-menu");
      if (
        event.key === "Escape" &&
        currentToggle &&
        currentMenu &&
        currentMenu.classList.contains("is-open")
      ) {
        currentToggle.setAttribute("aria-expanded", "false");
        currentMenu.classList.remove("is-open");
        currentToggle.focus();
      }
    });
  }

  // 2. Mobile Service Card Accordion (only 1 card open at a time)
  const mobileMedia = window.matchMedia("(max-width: 767px)");
  const serviceCards = document.querySelectorAll(".service-card");

  serviceCards.forEach((card) => {
    if (card.dataset.bound) return;
    card.dataset.bound = "true";

    const toggleBtn = card.querySelector(".service-toggle");
    if (!toggleBtn) return;

    const toggleCard = () => {
      if (!mobileMedia.matches) return;
      const willExpand = !card.classList.contains("is-expanded");

      serviceCards.forEach((otherCard) => {
        if (otherCard !== card) {
          otherCard.classList.remove("is-expanded");
          const otherBtn = otherCard.querySelector(".service-toggle");
          if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
        }
      });

      card.classList.toggle("is-expanded", willExpand);
      toggleBtn.setAttribute("aria-expanded", String(willExpand));
    };

    card.addEventListener("click", (event) => {
      if (!mobileMedia.matches) return;
      if (event.target.closest(".service-toggle")) return;
      toggleCard();
    });

    toggleBtn.addEventListener("click", toggleCard);
  });

  // 3. Mobile "See other services" toggle (3 cards -> all cards)
  const servicesGrid = document.querySelector("#services-grid");
  const servicesMoreBtn = document.querySelector(".services-more-btn");

  if (servicesGrid && servicesMoreBtn && !servicesMoreBtn.dataset.bound) {
    servicesMoreBtn.dataset.bound = "true";

    servicesMoreBtn.addEventListener("click", () => {
      const showAll = servicesGrid.classList.toggle("is-all-visible");
      servicesMoreBtn.setAttribute("aria-expanded", String(showAll));

      if (!showAll) {
        servicesGrid
          .querySelectorAll(".services-extra-inner .service-card.is-expanded")
          .forEach((extraCard) => {
            extraCard.classList.remove("is-expanded");
            const extraBtn = extraCard.querySelector(".service-toggle");
            if (extraBtn) extraBtn.setAttribute("aria-expanded", "false");
          });
      }
    });
  }

  // 4. Careers Page Job Category Filter
  const jobsGrid = document.querySelector("#jobs-grid");
  const jobFilterBtns = document.querySelectorAll("[data-job-filter]");

  if (jobsGrid && jobFilterBtns.length && !jobsGrid.dataset.bound) {
    jobsGrid.dataset.bound = "true";
    const jobCards = jobsGrid.querySelectorAll(".job-card");

    jobFilterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-job-filter") || "all";

        jobFilterBtns.forEach((b) => {
          const active = b === btn;
          b.classList.toggle("is-active", active);
          b.setAttribute("aria-pressed", String(active));
        });

        jobCards.forEach((card) => {
          const cardCat = card.getAttribute("data-category");
          const shouldShow = category === "all" || cardCat === category;
          card.classList.toggle("is-hidden", !shouldShow);
        });
      });
    });
  }
};

document.addEventListener("DOMContentLoaded", initMainUI);
document.addEventListener("htmx:afterSwap", initMainUI);
