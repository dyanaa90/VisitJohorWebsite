// ===============================
// VISIT JOHOR - THEME + LANGUAGE (GLOBAL)
// Shared for all pages
// + Simple Chatbot (Front-end)
// ===============================

// ---------- EARLY LANGUAGE SETUP ----------
const savedLangEarly = localStorage.getItem("lang") || "ms";
document.documentElement.setAttribute("lang", savedLangEarly);

// ---------- THEME ----------
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

function setTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  if (themeIcon) {
    themeIcon.className = isDark ? "fas fa-sun" : "fas fa-moon";
  }
}

(function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme === "dark");
  } else {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark);
  }
})();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDarkNow = !document.body.classList.contains("dark");
    setTheme(isDarkNow);
    localStorage.setItem("theme", isDarkNow ? "dark" : "light");

    if (window.__vjApplyChatTheme) window.__vjApplyChatTheme();
  });
}

// ---------- LANGUAGE ----------
const langToggle = document.getElementById("langToggle");

const i18n = {
  ms: {
    nav_home: "Home",
    nav_nature: "Alam",
    nav_food: "Makan",
    nav_stay: "Penginapan",
    nav_shop: "Beli-Belah",

    hero_sub: "Selamat Datang ke Johor Darul Ta'zim",
    hero_title: "JOHOR DARUL TA'ZIM",
    hero_desc: "Permata Selatan: Warisan bertemu kemodenan.",
    search_placeholder: "Nak pergi ke mana? (cth: Muar, Desaru, JPO, Makan)",
    search_btn: "Jelajah",

    feat_island: "Pulau",
    feat_island_desc: "Air jernih kristal",
    feat_food: "Syurga Makan",
    feat_food_desc: "Rasa autentik",
    feat_shop: "Beli-Belah",
    feat_shop_desc: "Outlet premium",

    popular_title: "Destinasi Popular",
    popular_desc: "Pengalaman terbaik untuk percutian sempurna anda.",

    tag_must_try: "Wajib Cuba",
    tag_nature: "Nature",
    tag_shop: "Beli-Belah",

    card_food_title: "Syurga Makanan",
    card_food_loc: "Seluruh Johor",
    card_food_desc:
      "Rasa Asam Pedas dan Laksa Johor terbaik. Dari warung tepi jalan hingga restoran mewah.",
    card_food_btn: "Terokai Menu",

    card_nature_title: "Alam & Pulau",
    card_nature_loc: "Mersing & Segamat",
    card_nature_desc:
      "Terokai pulau indah seperti Rawa, Tioman & Sibu. Nikmati ketenangan alam semulajadi.",
    card_nature_btn: "Lihat Alam",

    card_shop_title: "Syurga Shopping",
    card_shop_loc: "JB & Kulai",
    card_shop_desc:
      "Shopping tanpa henti di JPO & Mid Valley Southkey. Barang branded dengan harga mampu milik.",
    card_shop_btn: "Jom Shopping",

    visual_title: "📸 Terokai Visual Johor",
    newsletter_title: "Sedia untuk trip?",
    newsletter_desc: "Jumpa keindahan Johor yang ramai tak tahu.",
    newsletter_btn: "Rancang Trip Sekarang",
    footer_desc: "Official tourism guide to the Southern Gem of Malaysia.",

    stay_sub: "Selesa & Mewah",
    stay_title: "PENGINAPAN TERBAIK",
    stay_desc: "Pilih hotel, resort atau homestay dan tempah percutian anda sekarang!",

    btn_map: "Map",
    btn_map_full: "Lihat Lokasi (Map)",
    btn_book: "Book",

    modal_title: "Tempah Sekarang",
    modal_fullname: "Nama Penuh",
    modal_guests: "Bilangan Tetamu",
    modal_date: "Tarikh Check-in",
    modal_phone: "No. Telefon",
    modal_submit: "Hantar Tempahan",
    modal_name_ph: "Masukkan nama anda",
    modal_guests_ph: "Pilih bilangan tetamu",
    modal_phone_ph: "Contoh: 012-3456789",

    makan_page_title: "Syurga Makanan | Visit Johor",
    makan_sub: "10 Daerah, 1001 Rasa",
    makan_title: "SYURGA MAKANAN",
    makan_desc: "Dari Asam Pedas hingga ke Briyani Gam. Terokai keunikan gastronomi Johor.",

    makan_zone_south: "🏙️ Zon Selatan (JB • Kulai • Pontian)",
    makan_zone_north: "👑 Zon Utara (Muar • Tangkak • Segamat)",
    makan_zone_central: "🚂 Zon Tengah (Batu Pahat • Kluang)",
    makan_zone_east: "🌊 Zon Timur (Kota Tinggi • Mersing)",

    alam_page_title: "Alam | Visit Johor",
    alam_sub: "Keajaiban Alam & Keseronokan",
    alam_title: "ALAM",
    alam_desc: "Dari hutan hijau hingga ke Legoland! Semuanya ada di Johor.",

    alam_sec_islands: "🏝️ Pulau Peranginan",
    alam_sec_forest: "🌲 Hutan & Gunung",
    alam_sec_beach: "🌊 Pantai & Air Terjun",
    alam_sec_themepark: "🎡 Hiburan & Taman Tema",

    shop_sub: "Jimat, Borong, Santai",
    shop_title: "SYURGA BELI-BELAH",
    shop_desc: "Dari Premium Outlets hingga pasar malam — jom cari barang best & murah!",

    shop_zone_south: "🛍️ Zon Selatan (JB • Iskandar Puteri)",
    shop_zone_south_desc: "Port shopping paling “meriah” dekat selatan Johor.",
    shop_zone_kulai: "👠 Zon Barat/Utara (Kulai)",
    shop_zone_central: "🏢 Zon Tengah (Batu Pahat • Kluang)",
    shop_zone_north: "🛒 Zon Utara (Muar • Tangkak • Segamat)",
    shop_zone_east: "🌊 Zon Timur (Kota Tinggi • Mersing)"
  },

  en: {
    nav_home: "Home",
    nav_nature: "Nature",
    nav_food: "Food",
    nav_stay: "Stay",
    nav_shop: "Shopping",

    hero_sub: "Welcome to Johor Darul Ta'zim",
    hero_title: "JOHOR DARUL TA'ZIM",
    hero_desc: "The Southern Gem: where heritage meets modernity.",
    search_placeholder: "Where to go? (e.g., Muar, Desaru, JPO, Food)",
    search_btn: "Explore",

    feat_island: "Islands",
    feat_island_desc: "Crystal clear waters",
    feat_food: "Food Heaven",
    feat_food_desc: "Authentic flavours",
    feat_shop: "Shopping",
    feat_shop_desc: "Premium outlets",

    popular_title: "Popular Destinations",
    popular_desc: "Top experiences for your perfect getaway.",

    tag_must_try: "Must Try",
    tag_nature: "Nature",
    tag_shop: "Shopping",

    card_food_title: "Food Paradise",
    card_food_loc: "All across Johor",
    card_food_desc:
      "Taste Johor’s best Asam Pedas and Laksa Johor—from roadside stalls to premium restaurants.",
    card_food_btn: "Explore Food",

    card_nature_title: "Nature & Islands",
    card_nature_loc: "Mersing & Segamat",
    card_nature_desc:
      "Explore beautiful islands like Rawa, Tioman & Sibu. Enjoy peaceful nature escapes.",
    card_nature_btn: "View Nature",

    card_shop_title: "Shopping Heaven",
    card_shop_loc: "JB & Kulai",
    card_shop_desc:
      "Shop non-stop at JPO & Mid Valley Southkey. Branded items at great prices.",
    card_shop_btn: "Let’s Shop",

    visual_title: "📸 Explore Johor in Visuals",
    newsletter_title: "Ready for your trip?",
    newsletter_desc: "Discover Johor’s hidden beauty.",
    newsletter_btn: "Plan Your Trip Now",
    footer_desc: "Official tourism guide to the Southern Gem of Malaysia.",

    stay_sub: "Comfort & Luxury",
    stay_title: "BEST STAYS",
    stay_desc: "Choose a hotel, resort, or homestay—and book your getaway now!",

    btn_map: "Map",
    btn_map_full: "View Location (Map)",
    btn_book: "Book",

    modal_title: "Book Now",
    modal_fullname: "Full Name",
    modal_guests: "Guests",
    modal_date: "Check-in Date",
    modal_phone: "Phone Number",
    modal_submit: "Submit Booking",
    modal_name_ph: "Enter your name",
    modal_guests_ph: "Select number of guests",
    modal_phone_ph: "Example: 012-3456789",

    makan_page_title: "Food Paradise | Visit Johor",
    makan_sub: "10 Districts, 1001 Flavours",
    makan_title: "FOOD PARADISE",
    makan_desc: "From Asam Pedas to Briyani Gam — explore Johor’s unique food culture.",

    makan_zone_south: "🏙️ Southern Zone (JB • Kulai • Pontian)",
    makan_zone_north: "👑 Northern Zone (Muar • Tangkak • Segamat)",
    makan_zone_central: "🚂 Central Zone (Batu Pahat • Kluang)",
    makan_zone_east: "🌊 Eastern Zone (Kota Tinggi • Mersing)",

    alam_page_title: "Nature | Visit Johor",
    alam_sub: "Nature Wonders & Fun",
    alam_title: "NATURE",
    alam_desc: "From lush forests to Legoland — Johor has it all.",

    alam_sec_islands: "🏝️ Resort Islands",
    alam_sec_forest: "🌲 Forest & Mountains",
    alam_sec_beach: "🌊 Beaches & Waterfalls",
    alam_sec_themepark: "🎡 Entertainment & Theme Parks",

    shop_sub: "Save, Hunt Deals, Chill",
    shop_title: "SHOPPING HEAVEN",
    shop_desc: "From premium outlets to night bazaars — let’s grab the best bargains!",

    shop_zone_south: "🛍️ South Zone (JB • Iskandar Puteri)",
    shop_zone_south_desc: "The liveliest shopping spots in southern Johor.",
    shop_zone_kulai: "👠 West/North Zone (Kulai)",
    shop_zone_central: "🏢 Central Zone (Batu Pahat • Kluang)",
    shop_zone_north: "🛒 North Zone (Muar • Tangkak • Segamat)",
    shop_zone_east: "🌊 East Zone (Kota Tinggi • Mersing)"
  }
};

function applyLanguage(lang) {
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = i18n[lang]?.[key];
    if (!value) return;

    if (el.tagName.toLowerCase() === "title") {
      document.title = value;
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = i18n[lang]?.[key];
    if (value) el.setAttribute("placeholder", value);
  });

  if (langToggle) {
    langToggle.textContent = lang.toUpperCase();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "ms";
  applyLanguage(savedLang);

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const current = localStorage.getItem("lang") || "ms";
      const next = current === "ms" ? "en" : "ms";
      localStorage.setItem("lang", next);
      applyLanguage(next);
    });
  }
});

// ===============================
// SIMPLE VISIT JOHOR CHATBOT
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("vj-chat-btn")) return;

  const chatBtn = document.createElement("div");
  chatBtn.id = "vj-chat-btn";
  chatBtn.textContent = "💬";
  Object.assign(chatBtn.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "55px",
    height: "55px",
    background: "#3498db",
    color: "#fff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    cursor: "pointer",
    zIndex: "9999",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
  });
  document.body.appendChild(chatBtn);

  const chatBox = document.createElement("div");
  chatBox.id = "vj-chat-box";
  Object.assign(chatBox.style, {
    position: "fixed",
    bottom: "90px",
    right: "20px",
    width: "320px",
    maxWidth: "calc(100vw - 40px)",
    background: "#fff",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    padding: "14px",
    display: "none",
    zIndex: "9999",
    fontFamily: "Poppins, sans-serif"
  });

  chatBox.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;">
      <h4 style="margin:0;font-size:16px;">Visit Johor Bot 🤖</h4>
      <button id="vj-chat-close" type="button"
        style="border:none;background:transparent;font-size:18px;cursor:pointer;line-height:1;">✕</button>
    </div>

    <div id="vj-chat-messages"
         style="margin-top:10px;height:260px;overflow:auto;font-size:14px;line-height:1.5;
                padding:10px;border-radius:12px;background:#fafafa;border:1px solid #eee;">
    </div>

    <div style="margin-top:10px;display:grid;gap:8px;">
      <div style="display:flex;gap:8px;">
        <input id="vj-chat-input" type="text" placeholder="Type sini…"
          style="flex:1;padding:10px;border-radius:10px;border:1px solid #ddd;outline:none;" />
        <button id="vj-chat-send" type="button"
          style="padding:10px 12px;border-radius:10px;border:none;background:#3498db;color:#fff;cursor:pointer;">
          Send
        </button>
      </div>

      <div style="display:grid;gap:8px;">
        <button class="vj-chat-option" type="button"
          style="padding:10px;border-radius:10px;border:1px solid #eee;background:#fff;cursor:pointer;">
          Tempat makan best?
        </button>
        <button class="vj-chat-option" type="button"
          style="padding:10px;border-radius:10px;border:1px solid #eee;background:#fff;cursor:pointer;">
          Tempat shopping best?
        </button>
        <button class="vj-chat-option" type="button"
          style="padding:10px;border-radius:10px;border:1px solid #eee;background:#fff;cursor:pointer;">
          Pulau paling cantik?
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(chatBox);

  const closeBtn = chatBox.querySelector("#vj-chat-close");
  const msgBox = chatBox.querySelector("#vj-chat-messages");
  const inputEl = chatBox.querySelector("#vj-chat-input");
  const sendBtn = chatBox.querySelector("#vj-chat-send");

  function closeChat() {
    chatBox.style.display = "none";
  }

  chatBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
  });

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeChat();
  });

  function addMsg(text, who = "bot") {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.margin = "6px 0";
    row.style.justifyContent = who === "user" ? "flex-end" : "flex-start";

    const bubble = document.createElement("div");
    bubble.style.maxWidth = "80%";
    bubble.style.padding = "10px 12px";
    bubble.style.borderRadius = "12px";
    bubble.style.whiteSpace = "pre-wrap";

    if (who === "user") {
      bubble.style.background = "#3498db";
      bubble.style.color = "#fff";
    } else {
      bubble.style.background = "#fff";
      bubble.style.border = "1px solid #eee";
      bubble.style.color = "#111";
    }

    bubble.textContent = text;
    row.appendChild(bubble);
    msgBox.appendChild(row);
    msgBox.scrollTop = msgBox.scrollHeight;
  }

  function botReply(userText) {
    const q = (userText || "").toLowerCase();

    if (q.includes("makan") || q.includes("food")) {
      return "🔥 Best food: Muar (Mee Bandung), JB (Kacang Pool), Pontian (Mee Rebus). Nak list penuh? Pergi page Makan 😋";
    }
    if (q.includes("shopping") || q.includes("beli") || q.includes("shop")) {
      return "🛍️ Shopping best: Mid Valley Southkey, Paradigm Mall, JPO. Pergi page Beli-Belah untuk map ✅";
    }
    if (q.includes("pulau") || q.includes("island")) {
      return "🏝️ Pulau cantik: Pulau Rawa, Tioman, Sibu. Memang ngam untuk healing 😍";
    }
    if (q.includes("hotel") || q.includes("stay") || q.includes("penginapan")) {
      return "🏨 Untuk penginapan, kau boleh check page Penginapan — ada hotel/resort + butang book.";
    }
    return "Boleh! Tulis: makan / shopping / pulau / penginapan — atau tanya tempat specific macam Desaru.";
  }

  function sendMessage() {
    const text = (inputEl.value || "").trim();
    if (!text) return;

    addMsg(text, "user");
    inputEl.value = "";
    addMsg(botReply(text), "bot");
  }

  addMsg("Hi! Nak tanya apa? 🙂", "bot");

  sendBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    sendMessage();
  });

  inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });

  chatBox.addEventListener("click", (e) => {
    e.stopPropagation();

    const btn = e.target.closest(".vj-chat-option");
    if (!btn) return;

    const text = btn.textContent.trim();
    addMsg(text, "user");
    addMsg(botReply(text), "bot");
  });

  document.addEventListener("click", (e) => {
    const clickedInside = chatBox.contains(e.target) || chatBtn.contains(e.target);
    if (!clickedInside) closeChat();
  });

  function applyChatTheme() {
    const isDark = document.body.classList.contains("dark");

    chatBox.style.background = isDark ? "#121212" : "#fff";
    chatBox.style.boxShadow = isDark
      ? "0 10px 25px rgba(0,0,0,0.6)"
      : "0 10px 25px rgba(0,0,0,0.2)";

    msgBox.style.background = isDark ? "#1f1f1f" : "#fafafa";
    msgBox.style.border = isDark ? "1px solid #333" : "1px solid #eee";

    inputEl.style.background = isDark ? "#1f1f1f" : "#fff";
    inputEl.style.color = isDark ? "#fff" : "#111";
    inputEl.style.border = isDark ? "1px solid #333" : "1px solid #ddd";
  }

  window.__vjApplyChatTheme = applyChatTheme;
  applyChatTheme();
});