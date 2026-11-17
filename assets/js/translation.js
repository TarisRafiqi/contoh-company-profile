// ==========================================================================
// TRANSLATION.JS — PT. Mahak Lestari Indah
// Bilingual (ID / EN) Dictionary & Language Switcher (HTMX-compatible)
// ==========================================================================

const translations = {
  id: {
    "nav.skip": "Lewati ke konten utama",
    "nav.home": "Beranda",
    "nav.services": "Layanan",
    "nav.contact": "Kontak",
    "nav.careers": "Karir",
    "nav.gallery": "Galeri",
    "nav.cta": "Hubungi Kami",
    "hero.description":
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam porro saepe recusandae soluta tempore atque perspiciatis assumenda adipisci suscipit itaque eaque placeat voluptates molestias, iste nobis fugit architecto? Delectus, quas!",
    "hero.cta": "Layanan Kami",
    "metrics.label1": "Tahun Pengalaman",
    "metrics.label2": "Total Produksi",
    "metrics.label3": "Mitra IUP",
    "metrics.label4": "Jam Kerja Aman",
    "services.title": "Layanan Kami",
    "services.subtitle":
      "[ISI: Deskripsi pengantar singkat mengenai layanan kontraktor pertambangan batu bara]",
    "services.item1.title": "[ISI: Layanan 1]",
    "services.item1.desc":
      "[ISI: Deskripsi singkat layanan 1, misalnya pengupasan lapisan tanah penutup atau pembersihan lahan.]",
    "services.item2.title": "[ISI: Layanan 2]",
    "services.item2.desc":
      "[ISI: Deskripsi singkat layanan 2, misalnya penggalian dan pengambilan batu bara.]",
    "services.item3.title": "[ISI: Layanan 3]",
    "services.item3.desc":
      "[ISI: Deskripsi singkat layanan 3, misalnya pengangkutan batu bara dari pit ke stockpile atau pelabuhan.]",
    "services.item4.title": "[ISI: Layanan 4]",
    "services.item4.desc":
      "[ISI: Deskripsi singkat layanan 4, misalnya pemeliharaan armada dan dukungan alat berat.]",
    "services.item5.title": "[ISI: Layanan 5]",
    "services.item5.desc":
      "[ISI: Deskripsi singkat layanan 5, misalnya manajemen K3LH dan keselamatan operasional tambang.]",
    "services.item6.title": "[ISI: Layanan 6]",
    "services.item6.desc":
      "[ISI: Deskripsi singkat layanan 6, misalnya reklamasi lahan dan pengelolaan lingkungan pascatambang.]",
    "services.seeMore": "Lihat selengkapnya",
    "services.seeLess": "Sembunyikan",
    "services.showAll": "Lihat layanan lainnya",
    "services.showLess": "Tampilkan lebih sedikit",

    // Careers Page
    "careers.eyebrow": "Bergabung Bersama Kami",
    "careers.title": "Karir & Lowongan Kerja",
    "careers.desc":
      "[ISI: Deskripsi singkat ajakan bergabung dan budaya keselamatan kerja di PT. Mahak Lestari Indah]",
    "careers.noticeTitle": "Peringatan Penipuan Rekrutmen",
    "careers.noticeText":
      "[ISI: Pemberitahuan resmi bahwa PT. Mahak Lestari Indah tidak pernah memungut biaya apa pun dalam seluruh proses rekrutmen.]",
    "careers.filter.all": "Semua Posisi",
    "careers.filter.ops": "Operasional Tambang",
    "careers.filter.mech": "Mekanik & Teknik",
    "careers.filter.hse": "K3LH & Staff",
    "careers.apply": "Lamar Posisi",
    "careers.hrTitle": "Belum Menemukan Posisi yang Sesuai?",
    "careers.hrDesc":
      "[ISI: Kirimkan CV terbaru Anda ke email rekrutmen resmi PT. Mahak Lestari Indah.]",
    "careers.hrBtn": "Kirim Lamaran Umum",

    // Gallery Page
    "gallery.eyebrow": "Dokumentasi Lapangan",
    "gallery.title": "Galeri Dokumentasi",
    "gallery.desc":
      "[ISI: Deskripsi singkat dokumentasi operasional pertambangan, armada alat berat, dan kegiatan K3LH PT. Mahak Lestari Indah]",
    "gallery.filter.all": "Semua",
    "gallery.filter.ops": "Operasional Tambang",
    "gallery.filter.fleet": "Armada Alat Berat",
    "gallery.filter.hse": "K3LH / HSE",
    "gallery.filter.csr": "CSR & Lingkungan",
    "gallery.prev": "Sebelumnya",
    "gallery.next": "Berikutnya",

    // Footer
    "footer.about":
      "[ISI: Deskripsi singkat profil perusahaan kontraktor pertambangan batu bara PT. Mahak Lestari Indah]",
    "footer.navTitle": "Navigasi",
    "footer.servicesTitle": "Layanan Utama",
    "footer.contactTitle": "Kontak Kantor",
    "footer.mapTitle": "Lokasi Kantor",
    "footer.addressLabel": "Alamat:",
    "footer.phoneLabel": "Telepon:",
    "footer.rights": "Seluruh hak cipta dilindungi.",
    "footer.tagline": "Kontraktor Pertambangan Batu Bara — Samarinda, Kalimantan Timur"
  },
  en: {
    "nav.skip": "Skip to main content",
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.careers": "Careers",
    "nav.gallery": "Gallery",
    "nav.cta": "Contact Us",
    "hero.description":
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam porro saepe recusandae soluta tempore atque perspiciatis assumenda adipisci suscipit itaque eaque placeat voluptates molestias, iste nobis fugit architecto? Delectus, quas!",
    "hero.cta": "Our Services",
    "metrics.label1": "Years of Experience",
    "metrics.label2": "Total Production",
    "metrics.label3": "IUP Partner",
    "metrics.label4": "Safe Working Hours",
    "services.title": "Our Services",
    "services.subtitle":
      "[ISI: Short introductory description of coal mining contractor services]",
    "services.item1.title": "[ISI: Service 1]",
    "services.item1.desc":
      "[ISI: Short description of service 1, e.g. overburden removal or land clearing.]",
    "services.item2.title": "[ISI: Service 2]",
    "services.item2.desc":
      "[ISI: Short description of service 2, e.g. coal getting and excavation.]",
    "services.item3.title": "[ISI: Service 3]",
    "services.item3.desc":
      "[ISI: Short description of service 3, e.g. coal hauling from pit to stockpile or port.]",
    "services.item4.title": "[ISI: Service 4]",
    "services.item4.desc":
      "[ISI: Short description of service 4, e.g. fleet maintenance and heavy equipment support.]",
    "services.item5.title": "[ISI: Service 5]",
    "services.item5.desc":
      "[ISI: Short description of service 5, e.g. HSE management and mining operational safety.]",
    "services.item6.title": "[ISI: Service 6]",
    "services.item6.desc":
      "[ISI: Short description of service 6, e.g. land reclamation and post-mining environmental management.]",
    "services.seeMore": "See more",
    "services.seeLess": "Show less",
    "services.showAll": "See other services",
    "services.showLess": "Show fewer services",

    // Careers Page
    "careers.eyebrow": "Join Our Team",
    "careers.title": "Careers & Job Openings",
    "careers.desc":
      "[ISI: Short description of career opportunities and safety culture at PT. Mahak Lestari Indah]",
    "careers.noticeTitle": "Recruitment Fraud Warning",
    "careers.noticeText":
      "[ISI: Official notice that PT. Mahak Lestari Indah never charges any fees throughout the recruitment process.]",
    "careers.filter.all": "All Positions",
    "careers.filter.ops": "Mining Operations",
    "careers.filter.mech": "Mechanic & Engineering",
    "careers.filter.hse": "HSE & Staff",
    "careers.apply": "Apply Now",
    "careers.hrTitle": "Don't See a Suitable Role?",
    "careers.hrDesc":
      "[ISI: Send your latest CV to the official recruitment email of PT. Mahak Lestari Indah.]",
    "careers.hrBtn": "Send General Application",

    // Gallery Page
    "gallery.eyebrow": "Field Documentation",
    "gallery.title": "Documentation Gallery",
    "gallery.desc":
      "[ISI: Short description of mining operations, heavy equipment fleet, and HSE activities at PT. Mahak Lestari Indah]",
    "gallery.filter.all": "All",
    "gallery.filter.ops": "Mining Operations",
    "gallery.filter.fleet": "Heavy Equipment Fleet",
    "gallery.filter.hse": "HSE / Safety",
    "gallery.filter.csr": "CSR & Environment",
    "gallery.prev": "Previous",
    "gallery.next": "Next",

    // Footer
    "footer.about":
      "[ISI: Short company profile description of coal mining contractor PT. Mahak Lestari Indah]",
    "footer.navTitle": "Navigation",
    "footer.servicesTitle": "Core Services",
    "footer.contactTitle": "Head Office",
    "footer.mapTitle": "Office Location",
    "footer.addressLabel": "Address:",
    "footer.phoneLabel": "Phone:",
    "footer.rights": "All rights reserved.",
    "footer.tagline": "Coal Mining Contractor — Samarinda, East Kalimantan"
  }
};

const applyLanguage = (lang) => {
  const dict = translations[lang] || translations.id;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isMatch = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("is-active", isMatch);
    btn.setAttribute("aria-pressed", String(isMatch));
  });

  try {
    localStorage.setItem("mli_lang", lang);
  } catch (_) {
    // Ignore storage errors in private mode
  }
};

const initTranslation = () => {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = "true";
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      if (selectedLang) {
        applyLanguage(selectedLang);
      }
    });
  });

  try {
    const savedLang = localStorage.getItem("mli_lang");
    if (savedLang === "en" || savedLang === "id") {
      applyLanguage(savedLang);
    }
  } catch (_) {
    // Default to id
  }
};

document.addEventListener("DOMContentLoaded", initTranslation);
document.addEventListener("htmx:afterSwap", initTranslation);
