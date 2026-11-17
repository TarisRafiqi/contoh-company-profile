// ==========================================================================
// GALLERY.JS — PT. Mahak Lestari Indah
// Category Filtering & Accessible Lightbox Modal (HTMX-compatible)
// ==========================================================================

const initGalleryPage = () => {
  // Smooth fade-in for lazy-loaded gallery images
  document.querySelectorAll(".gallery-thumb img").forEach((img) => {
    if (img.complete) {
      img.classList.add("is-loaded");
    } else if (!img.dataset.loadBound) {
      img.dataset.loadBound = "true";
      img.addEventListener("load", () => img.classList.add("is-loaded"), { once: true });
    }
  });

  const galleryGrid = document.querySelector("#gallery-grid");
  const filterButtons = document.querySelectorAll("[data-gallery-filter]");
  const items = Array.from(document.querySelectorAll(".gallery-item"));

  if (galleryGrid && filterButtons.length && !galleryGrid.dataset.bound) {
    galleryGrid.dataset.bound = "true";

    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-gallery-filter") || "all";

        filterButtons.forEach((b) => {
          const active = b === btn;
          b.classList.toggle("is-active", active);
          b.setAttribute("aria-pressed", String(active));
        });

        items.forEach((item) => {
          const itemCategory = item.getAttribute("data-category");
          const shouldShow = category === "all" || itemCategory === category;
          item.classList.toggle("is-hidden", !shouldShow);
        });
      });
    });
  }

  // Lightbox Modal
  const lightbox = document.querySelector("#gallery-lightbox");
  if (!lightbox || lightbox.dataset.bound) return;
  lightbox.dataset.bound = "true";

  const lightboxImg = lightbox.querySelector("#lightbox-img");
  const lightboxTitle = lightbox.querySelector("#lightbox-title");
  const lightboxDesc = lightbox.querySelector("#lightbox-desc");
  const closeBtn = lightbox.querySelector(".lightbox-close");
  const prevBtn = lightbox.querySelector("[data-lightbox-prev]");
  const nextBtn = lightbox.querySelector("[data-lightbox-next]");

  let visibleTriggers = [];
  let currentIndex = 0;
  let lastFocused = null;

  const renderSlide = (index) => {
    if (!visibleTriggers.length) return;
    currentIndex = (index + visibleTriggers.length) % visibleTriggers.length;
    const trigger = visibleTriggers[currentIndex];
    const img = trigger.querySelector("img");
    const titleEl = trigger.querySelector(".gallery-title");
    const descEl = trigger.querySelector(".gallery-desc");

    if (lightboxImg && img) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    }
    if (lightboxTitle && titleEl) {
      lightboxTitle.textContent = titleEl.textContent;
    }
    if (lightboxDesc && descEl) {
      lightboxDesc.textContent = descEl.textContent;
    }
  };

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    if (lastFocused) lastFocused.focus();
  };

  items.forEach((item) => {
    const trigger = item.querySelector(".gallery-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", () => {
      visibleTriggers = items
        .filter((el) => !el.classList.contains("is-hidden"))
        .map((el) => el.querySelector(".gallery-trigger"))
        .filter(Boolean);

      const idx = visibleTriggers.indexOf(trigger);
      lastFocused = trigger;
      renderSlide(idx >= 0 ? idx : 0);
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      if (closeBtn) closeBtn.focus();
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (prevBtn) prevBtn.addEventListener("click", () => renderSlide(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => renderSlide(currentIndex + 1));

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  if (!document.body.dataset.lightboxKeyBound) {
    document.body.dataset.lightboxKeyBound = "true";
    document.addEventListener("keydown", (event) => {
      const activeLightbox = document.querySelector("#gallery-lightbox.is-open");
      if (!activeLightbox) return;
      if (event.key === "Escape") {
        activeLightbox.classList.remove("is-open");
        activeLightbox.setAttribute("aria-hidden", "true");
      } else if (event.key === "ArrowLeft") {
        activeLightbox.querySelector("[data-lightbox-prev]")?.click();
      } else if (event.key === "ArrowRight") {
        activeLightbox.querySelector("[data-lightbox-next]")?.click();
      }
    });
  }
};

document.addEventListener("DOMContentLoaded", initGalleryPage);
document.addEventListener("htmx:afterSwap", initGalleryPage);
