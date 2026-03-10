const allPlaces = [
  // =========================
  // MAKAN
  // =========================

  // Johor Bahru / Selatan
  {
    category: "Makan",
    name: "Kacang Pool Haji",
    location: "Johor Bahru",
    rating: 4.8,
    reviews: "2.8k",
    price: "RM8-15",
    img: "img.jpg/kacangpool.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kacang+Pool+Haji+Larkin+JB",
    pageUrl: "makan.html",
    keywords: ["jb", "johor bahru", "larkin", "kacang pool", "sarapan", "makan"]
  },
  {
    category: "Makan",
    name: "ZZ Sup Tulang",
    location: "Johor Bahru",
    rating: 4.6,
    reviews: "2.1k",
    price: "RM15-30",
    img: "img.jpg/suptulang.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=ZZ+Sup+Tulang+JB",
    pageUrl: "makan.html",
    keywords: ["jb", "johor bahru", "jalan petri", "sup tulang", "gearbox", "makan"]
  },
  {
    category: "Makan",
    name: "Murtabak Majid Special",
    location: "Johor Bahru",
    rating: 4.7,
    reviews: "1.9k",
    price: "RM12-25",
    img: "img.jpg/murtabak.JPG",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Murtabak+Majid+Special+No+1+JB",
    pageUrl: "makan.html",
    keywords: ["jb", "johor bahru", "kampung kurnia", "murtabak", "cheese", "makan"]
  },
  {
    category: "Makan",
    name: "Woodfire Burger",
    location: "Johor Bahru",
    rating: 4.8,
    reviews: "3.2k",
    price: "RM20-40",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800",
    mapUrl: "https://www.google.com/maps/search/Woodfire+Burger+Johor+Bahru",
    pageUrl: "makan.html",
    keywords: ["jb", "johor bahru", "burger", "woodfire", "makan", "food"]
  },

  // Kulai / Pontian
  {
    category: "Makan",
    name: "Nasi Lemak Wak Kentut",
    location: "Kulai",
    rating: 4.9,
    reviews: "2.4k",
    price: "RM7-14",
    img: "img.jpg/nasilemak.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Nasi+Lemak+Wak+Kentut+Kulai",
    pageUrl: "makan.html",
    keywords: ["kulai", "nasi lemak", "wak kentut", "makan", "sarapan"]
  },
  {
    category: "Makan",
    name: "Mee Rebus Sentap",
    location: "Pontian",
    rating: 4.7,
    reviews: "1.5k",
    price: "RM8-15",
    img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=800",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Mee+Rebus+Sentap+Coxn+Pontian",
    pageUrl: "makan.html",
    keywords: ["pontian", "mee rebus", "makan", "food"]
  },
  {
    category: "Makan",
    name: "Asam Pedas Kukup",
    location: "Pontian",
    rating: 4.6,
    reviews: "1.7k",
    price: "RM15-30",
    img: "img.jpg/asampedas.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Asam+Pedas+Kukup+Pontian",
    pageUrl: "makan.html",
    keywords: ["pontian", "kukup", "asam pedas", "seafood", "makan"]
  },

  // Muar / Utara
  {
    category: "Makan",
    name: "Mee Bandung Abu Bakar",
    location: "Muar",
    rating: 4.9,
    reviews: "2.9k",
    price: "RM10-18",
    img: "img.jpg/mibandung.avif",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Mee+Bandung+Abu+Bakar+Hanipah+Muar",
    pageUrl: "makan.html",
    keywords: ["muar", "mee bandung", "makan", "food", "mee bandung muar"]
  },
  {
    category: "Makan",
    name: "Asam Pedas Parit Jawa",
    location: "Muar",
    rating: 4.7,
    reviews: "2.0k",
    price: "RM15-28",
    img: "img.jpg/asampedas2.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Asam+Pedas+Parit+Jawa+Muar",
    pageUrl: "makan.html",
    keywords: ["muar", "parit jawa", "asam pedas", "makan"]
  },
  {
    category: "Makan",
    name: "R&H Satay",
    location: "Muar",
    rating: 4.8,
    reviews: "1.8k",
    price: "RM10-20",
    img: "img.jpg/satay.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=R%26H+Satay+Maharani+Muar",
    pageUrl: "makan.html",
    keywords: ["muar", "satay", "satay pagi", "makan"]
  },

  // Tangkak / Segamat
  {
    category: "Makan",
    name: "Nasi Ayam Ali Tangkak",
    location: "Tangkak",
    rating: 4.6,
    reviews: "1.4k",
    price: "RM8-16",
    img: "img.jpg/nasiayam.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Nasi+Ayam+Ali+Tangkak",
    pageUrl: "makan.html",
    keywords: ["tangkak", "nasi ayam", "makan"]
  },
  {
    category: "Makan",
    name: "Roti Canai Terbang",
    location: "Segamat",
    rating: 4.5,
    reviews: "1.1k",
    price: "RM3-10",
    img: "img.jpg/segamat.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Roti+Canai+Terbang+Segamat",
    pageUrl: "makan.html",
    keywords: ["segamat", "roti canai", "sarapan", "makan"]
  },

  // Tengah / Batu Pahat / Kluang
  {
    category: "Makan",
    name: "Nasi Bariani Power",
    location: "Batu Pahat",
    rating: 4.8,
    reviews: "2.3k",
    price: "RM12-22",
    img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=BP+Bariani+Power+Taman+Soga",
    pageUrl: "makan.html",
    keywords: ["batu pahat", "bp", "bariani", "briyani", "makan"]
  },
  {
    category: "Makan",
    name: "Nasi Bariani Gam BP",
    location: "Batu Pahat",
    rating: 4.3,
    reviews: "2.5k",
    price: "RM15-25",
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800",
    mapUrl: "https://www.google.com/maps/search/Nasi+Bariani+Gam+Batu+Pahat",
    pageUrl: "makan.html",
    keywords: ["batu pahat", "bp", "bariani", "briyani", "gam", "makan"]
  },
  {
    category: "Makan",
    name: "Kluang Rail Coffee",
    location: "Kluang",
    rating: 4.9,
    reviews: "3.1k",
    price: "RM6-18",
    img: "img.jpg/kluang.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kluang+Rail+Coffee+Stesen+KTM",
    pageUrl: "makan.html",
    keywords: ["kluang", "rail coffee", "kopi", "sarapan", "makan"]
  },

  // Timur
  {
    category: "Makan",
    name: "Belangkas Mahkota",
    location: "Kota Tinggi",
    rating: 4.6,
    reviews: "1.2k",
    price: "RM18-35",
    img: "img.jpg/belangkas.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Restoran+Belangkas+Mahkota+Kota+Tinggi",
    pageUrl: "makan.html",
    keywords: ["kota tinggi", "belangkas", "asam pedas", "makan"]
  },
  {
    category: "Makan",
    name: "Warung Celup Tepung",
    location: "Mersing",
    rating: 4.7,
    reviews: "1.3k",
    price: "RM12-25",
    img: "img.jpg/waruncelup.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Warung+Celup+Tepung+Tanjung+Resang+Mersing",
    pageUrl: "makan.html",
    keywords: ["mersing", "celup tepung", "seafood", "makan"]
  },

  // =========================
  // ALAM
  // =========================
  {
    category: "Alam",
    name: "Pantai Minyak Beku",
    location: "Batu Pahat",
    rating: 4.1,
    reviews: "1.2k",
    price: "Percuma",
    img: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=800",
    mapUrl: "https://www.google.com/maps/search/Pantai+Minyak+Beku",
    pageUrl: "alam.html",
    keywords: ["batu pahat", "pantai", "alam", "nature", "minyak beku", "beach"]
  },
  {
    category: "Alam",
    name: "Gunung Ledang",
    location: "Tangkak",
    rating: 4.7,
    reviews: "4.1k",
    price: "RM10-20",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800",
    mapUrl: "https://www.google.com/maps/search/Gunung+Ledang",
    pageUrl: "alam.html",
    keywords: ["tangkak", "gunung", "hiking", "alam", "nature", "ledang"]
  },
  {
    category: "Alam",
    name: "Taman Negara Endau-Rompin",
    location: "Mersing",
    rating: 4.8,
    reviews: "2.7k",
    price: "RM15-30",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800",
    mapUrl: "https://www.google.com/maps/search/Endau+Rompin+Johor",
    pageUrl: "alam.html",
    keywords: ["mersing", "endau rompin", "hutan", "alam", "nature", "jungle"]
  },
  {
    category: "Alam",
    name: "Pantai Desaru",
    location: "Kota Tinggi",
    rating: 4.7,
    reviews: "3.9k",
    price: "Percuma",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
    mapUrl: "https://www.google.com/maps/search/Pantai+Desaru",
    pageUrl: "alam.html",
    keywords: ["desaru", "kota tinggi", "pantai", "alam", "nature", "beach"]
  },
  {
    category: "Alam",
    name: "Air Terjun Kota Tinggi",
    location: "Kota Tinggi",
    rating: 4.5,
    reviews: "2.0k",
    price: "RM5-15",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800",
    mapUrl: "https://www.google.com/maps/search/Air+Terjun+Kota+Tinggi",
    pageUrl: "alam.html",
    keywords: ["kota tinggi", "air terjun", "waterfall", "alam", "nature"]
  },
  {
    category: "Alam",
    name: "Tanjung Piai",
    location: "Pontian",
    rating: 4.6,
    reviews: "2.3k",
    price: "RM5-10",
    img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=800",
    mapUrl: "https://www.google.com/maps/search/Tanjung+Piai+Johor",
    pageUrl: "alam.html",
    keywords: ["pontian", "tanjung piai", "alam", "nature", "laut"]
  },
  {
    category: "Alam",
    name: "Gunung Lambak",
    location: "Kluang",
    rating: 4.5,
    reviews: "2.2k",
    price: "Percuma",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
    mapUrl: "https://www.google.com/maps/search/Gunung+Lambak+Kluang",
    pageUrl: "alam.html",
    keywords: ["kluang", "gunung lambak", "hiking", "alam", "nature"]
  },
  {
    category: "Alam",
    name: "Pulau Rawa",
    location: "Mersing",
    rating: 4.8,
    reviews: "2.1k",
    price: "RM50+",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
    mapUrl: "https://www.google.com/maps/search/Pulau+Rawa+Mersing",
    pageUrl: "alam.html",
    keywords: ["mersing", "pulau rawa", "island", "pantai", "alam", "nature"]
  },
  {
    category: "Alam",
    name: "Hutan Bandar MBJB",
    location: "Johor Bahru",
    rating: 4.4,
    reviews: "1.6k",
    price: "Percuma",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800",
    mapUrl: "https://www.google.com/maps/search/Hutan+Bandar+MBJB",
    pageUrl: "alam.html",
    keywords: ["jb", "johor bahru", "hutan bandar", "alam", "nature", "recreation"]
  },
  {
    category: "Alam",
    name: "Pantai Air Papan",
    location: "Mersing",
    rating: 4.5,
    reviews: "1.9k",
    price: "Percuma",
    img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=800",
    mapUrl: "https://www.google.com/maps/search/Pantai+Air+Papan+Mersing",
    pageUrl: "alam.html",
    keywords: ["mersing", "pantai air papan", "pantai", "alam", "nature"]
  },

  // =========================
  // PENGINAPAN
  // =========================
  {
    category: "Penginapan",
    name: "Hard Rock Hotel Desaru Coast",
    location: "Desaru",
    rating: 4.6,
    reviews: "5.0k",
    price: "RM450-900",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
    mapUrl: "https://www.google.com/maps/search/Hard+Rock+Hotel+Desaru+Coast",
    pageUrl: "penginapan.html",
    keywords: ["desaru", "hotel", "penginapan", "stay", "hard rock", "resort"]
  },
  {
    category: "Penginapan",
    name: "Anantara Desaru Coast Resort",
    location: "Desaru",
    rating: 4.8,
    reviews: "2.2k",
    price: "RM900-1500",
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800",
    mapUrl: "https://www.google.com/maps/search/Anantara+Desaru+Coast+Resort",
    pageUrl: "penginapan.html",
    keywords: ["desaru", "hotel", "resort", "penginapan", "luxury", "mewah"]
  },
  {
    category: "Penginapan",
    name: "Lotus Desaru Beach Resort",
    location: "Desaru",
    rating: 4.4,
    reviews: "3.0k",
    price: "RM280-500",
    img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800",
    mapUrl: "https://www.google.com/maps/search/Lotus+Desaru+Beach+Resort",
    pageUrl: "penginapan.html",
    keywords: ["desaru", "hotel", "resort", "beach resort", "penginapan"]
  },
  {
    category: "Penginapan",
    name: "Sand & Sandals Desaru Beach Resort",
    location: "Desaru",
    rating: 4.3,
    reviews: "2.0k",
    price: "RM300-550",
    img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800",
    mapUrl: "https://www.google.com/maps/search/Sand+and+Sandals+Desaru+Beach+Resort",
    pageUrl: "penginapan.html",
    keywords: ["desaru", "hotel", "resort", "beach", "penginapan"]
  },

  {
    category: "Penginapan",
    name: "KSL Hotel & Resort",
    location: "Johor Bahru",
    rating: 4.2,
    reviews: "4.3k",
    price: "RM180-350",
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800",
    mapUrl: "https://www.google.com/maps/search/KSL+Hotel+Johor+Bahru",
    pageUrl: "penginapan.html",
    keywords: ["jb", "johor bahru", "hotel", "penginapan", "stay", "resort"]
  },
  {
    category: "Penginapan",
    name: "Amari Johor Bahru",
    location: "Johor Bahru",
    rating: 4.6,
    reviews: "4.8k",
    price: "RM300-550",
    img: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=800",
    mapUrl: "https://www.google.com/maps/search/Amari+Johor+Bahru",
    pageUrl: "penginapan.html",
    keywords: ["jb", "johor bahru", "amari", "hotel", "penginapan"]
  },
  {
    category: "Penginapan",
    name: "DoubleTree by Hilton Johor Bahru",
    location: "Johor Bahru",
    rating: 4.7,
    reviews: "5.4k",
    price: "RM350-650",
    img: "https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=800",
    mapUrl: "https://www.google.com/maps/search/DoubleTree+by+Hilton+Johor+Bahru",
    pageUrl: "penginapan.html",
    keywords: ["jb", "johor bahru", "doubletree", "hilton", "hotel", "penginapan"]
  },
  {
    category: "Penginapan",
    name: "Thistle Johor Bahru",
    location: "Johor Bahru",
    rating: 4.4,
    reviews: "3.7k",
    price: "RM280-500",
    img: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=800",
    mapUrl: "https://www.google.com/maps/search/Thistle+Johor+Bahru",
    pageUrl: "penginapan.html",
    keywords: ["jb", "johor bahru", "thistle", "hotel", "penginapan"]
  },
  {
    category: "Penginapan",
    name: "Legoland Hotel Malaysia",
    location: "Iskandar Puteri",
    rating: 4.6,
    reviews: "4.0k",
    price: "RM500-900",
    img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800",
    mapUrl: "https://www.google.com/maps/search/Legoland+Hotel+Malaysia",
    pageUrl: "penginapan.html",
    keywords: ["iskandar puteri", "legoland hotel", "hotel", "penginapan", "family"]
  },

  // =========================
  // BELI-BELAH
  // =========================

  // Johor Bahru / Iskandar Puteri
  {
    category: "Beli-Belah",
    name: "Mid Valley Southkey",
    location: "Johor Bahru",
    rating: 4.9,
    reviews: "7.1k",
    price: "Pelbagai harga",
    img: "img.jpg/midvalley mall.webp",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Mid+Valley+Southkey+Johor+Bahru",
    pageUrl: "belibelah.html",
    keywords: ["jb", "johor bahru", "southkey", "mid valley", "shopping", "mall", "beli belah"]
  },
  {
    category: "Beli-Belah",
    name: "Paradigm Mall Johor Bahru",
    location: "Johor Bahru",
    rating: 4.8,
    reviews: "5.3k",
    price: "Pelbagai harga",
    img: "img.jpg/paradigm.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Paradigm+Mall+Johor+Bahru",
    pageUrl: "belibelah.html",
    keywords: ["jb", "johor bahru", "paradigm mall", "shopping", "mall", "beli belah"]
  },
  {
    category: "Beli-Belah",
    name: "Toppen & IKEA Tebrau",
    location: "Johor Bahru",
    rating: 4.8,
    reviews: "4.8k",
    price: "Pelbagai harga",
    img: "img.jpg/toppen.avif",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Toppen+Shopping+Centre+Johor+Bahru",
    pageUrl: "belibelah.html",
    keywords: ["jb", "johor bahru", "tebrau", "toppen", "ikea", "shopping", "mall", "beli belah"]
  },
  {
    category: "Beli-Belah",
    name: "Pasar Karat (Bazar JB)",
    location: "Johor Bahru",
    rating: 4.7,
    reviews: "3.1k",
    price: "Murah",
    img: "img.jpg/bazar karat.png",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Pasar+Karat+Johor+Bahru",
    pageUrl: "belibelah.html",
    keywords: ["jb", "johor bahru", "pasar karat", "bazar", "shopping", "bundle", "beli belah"]
  },
  {
    category: "Beli-Belah",
    name: "Johor Bahru City Square",
    location: "Johor Bahru",
    rating: 4.6,
    reviews: "5.0k",
    price: "Pelbagai harga",
    img: "img.jpg/citysquare.jpeg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Johor+Bahru+City+Square",
    pageUrl: "belibelah.html",
    keywords: ["jb", "johor bahru", "city square", "ciq", "shopping", "mall", "beli belah"]
  },
  {
    category: "Beli-Belah",
    name: "KOMTAR JBCC",
    location: "Johor Bahru",
    rating: 4.6,
    reviews: "4.0k",
    price: "Pelbagai harga",
    img: "img.jpg/komtar.webp",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=KOMTAR+JBCC",
    pageUrl: "belibelah.html",
    keywords: ["jb", "johor bahru", "komtar jbcc", "ciq", "shopping", "mall", "beli belah"]
  },
  {
    category: "Beli-Belah",
    name: "KSL City Mall",
    location: "Johor Bahru",
    rating: 4.5,
    reviews: "4.5k",
    price: "Pelbagai harga",
    img: "https://commons.wikimedia.org/wiki/Special:FilePath/KSL%20City%20in%202010,%20Johor%20Bahru.jpg?width=1600",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=KSL+City+Mall+Johor+Bahru",
    pageUrl: "belibelah.html",
    keywords: ["jb", "johor bahru", "ksl", "ksl city mall", "shopping", "mall", "beli belah"]
  },
  {
    category: "Beli-Belah",
    name: "AEON Mall Tebrau City",
    location: "Johor Bahru",
    rating: 4.7,
    reviews: "4.7k",
    price: "Pelbagai harga",
    img: "img.jpg/aeontbrau.webp",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=AEON+Mall+Tebrau+City",
    pageUrl: "belibelah.html",
    keywords: ["jb", "johor bahru", "tebrau", "aeon", "shopping", "mall", "beli belah"]
  },
  {
    category: "Beli-Belah",
    name: "Sutera Mall",
    location: "Johor Bahru",
    rating: 4.4,
    reviews: "3.0k",
    price: "Pelbagai harga",
    img: "img.jpg/sutera mall.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Sutera+Mall+Johor+Bahru",
    pageUrl: "belibelah.html",
    keywords: ["jb", "johor bahru", "sutera mall", "shopping", "mall", "beli belah"]
  },
  {
    category: "Beli-Belah",
    name: "Plaza Pelangi",
    location: "Johor Bahru",
    rating: 4.2,
    reviews: "2.2k",
    price: "Pelbagai harga",
    img: "img.jpg/plazapelangi.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Plaza+Pelangi+Johor+Bahru",
    pageUrl: "belibelah.html",
    keywords: ["jb", "johor bahru", "plaza pelangi", "shopping", "mall", "beli belah"]
  },
  {
    category: "Beli-Belah",
    name: "Sunway Big Box Retail Park",
    location: "Iskandar Puteri",
    rating: 4.6,
    reviews: "3.3k",
    price: "Pelbagai harga",
    img: "img.jpg/sunway bigbox.webp",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Sunway+Big+Box+Retail+Park",
    pageUrl: "belibelah.html",
    keywords: ["iskandar puteri", "sunway big box", "shopping", "retail park", "beli belah"]
  },
  {
    category: "Beli-Belah",
    name: "AEON Mall Bukit Indah",
    location: "Johor Bahru",
    rating: 4.6,
    reviews: "4.0k",
    price: "Pelbagai harga",
    img: "img.jpg/aeon.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=AEON+Mall+Bukit+Indah",
    pageUrl: "belibelah.html",
    keywords: ["jb", "johor bahru", "bukit indah", "aeon", "shopping", "mall", "beli belah"]
  },

  // Kulai
  {
    category: "Beli-Belah",
    name: "Johor Premium Outlets (JPO)",
    location: "Kulai",
    rating: 4.9,
    reviews: "6.4k",
    price: "Pelbagai harga",
    img: "img.jpg/jpo.webp",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Johor+Premium+Outlets",
    pageUrl: "belibelah.html",
    keywords: ["kulai", "jpo", "johor premium outlets", "shopping", "mall", "outlet", "beli belah"]
  },
  {
    category: "Beli-Belah",
    name: "AEON Mall Kulai",
    location: "Kulai",
    rating: 4.5,
    reviews: "3.2k",
    price: "Pelbagai harga",
    img: "img.jpg/aeonkulai.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=AEON+Mall+Kulai",
    pageUrl: "belibelah.html",
    keywords: ["kulai", "aeon mall kulai", "shopping", "mall", "beli belah"]
  },
  {
    category: "Beli-Belah",
    name: "IOI Mall Kulai",
    location: "Kulai",
    rating: 4.3,
    reviews: "2.1k",
    price: "Pelbagai harga",
    img: "img.jpg/ioimallkulai.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=IOI+Mall+Kulai",
    pageUrl: "belibelah.html",
    keywords: ["kulai", "ioi mall kulai", "shopping", "mall", "beli belah"]
  },

  // Tengah
  {
    category: "Beli-Belah",
    name: "Batu Pahat Mall",
    location: "Batu Pahat",
    rating: 4.6,
    reviews: "1.9k",
    price: "Pelbagai harga",
    img: "img.jpg/bpmall.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Batu+Pahat+Mall",
    pageUrl: "belibelah.html",
    keywords: ["batu pahat", "bp", "batu pahat mall", "shopping", "mall", "beli belah"]
  },
  {
    category: "Beli-Belah",
    name: "Old Street Commercial",
    location: "Batu Pahat",
    rating: 4.5,
    reviews: "1.4k",
    price: "Pelbagai harga",
    img: "img.jpg/oldstreet.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Old+Street+Commercial+Centre+Batu+Pahat",
    pageUrl: "belibelah.html",
    keywords: ["batu pahat", "old street commercial", "shopping", "boutique", "beli belah"]
  },
  {
    category: "Beli-Belah",
    name: "Kluang Mall",
    location: "Kluang",
    rating: 4.6,
    reviews: "2.3k",
    price: "Pelbagai harga",
    img: "img.jpg/kluangmall.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kluang+Mall",
    pageUrl: "belibelah.html",
    keywords: ["kluang", "kluang mall", "shopping", "mall", "beli belah"]
  },

  // Utara
  {
    category: "Beli-Belah",
    name: "Wetex Parade",
    location: "Muar",
    rating: 4.4,
    reviews: "2.0k",
    price: "Pelbagai harga",
    img: "img.jpg/wetex.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Wetex+Parade+Muar",
    pageUrl: "belibelah.html",
    keywords: ["muar", "wetex parade", "shopping", "mall", "beli belah"]
  },
  {
    category: "Beli-Belah",
    name: "Uptown Maharani",
    location: "Muar",
    rating: 4.3,
    reviews: "1.5k",
    price: "Murah",
    img: "img.jpg/uptownmaharani.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Uptown+Maharani+Muar",
    pageUrl: "belibelah.html",
    keywords: ["muar", "uptown maharani", "shopping", "bazar", "beli belah"]
  },
  {
    category: "Beli-Belah",
    name: "Pusat Tekstil Tangkak",
    location: "Tangkak",
    rating: 4.8,
    reviews: "1.7k",
    price: "Pelbagai harga",
    img: "img.jpg/pusattangkak.webp",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Tangkak+Textile+Centre",
    pageUrl: "belibelah.html",
    keywords: ["tangkak", "tekstil", "kain", "shopping", "beli belah"]
  },
  {
    category: "Beli-Belah",
    name: "One Segamat",
    location: "Segamat",
    rating: 4.2,
    reviews: "1.3k",
    price: "Pelbagai harga",
    img: "img.jpg/onesegamat.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=One+Segamat",
    pageUrl: "belibelah.html",
    keywords: ["segamat", "one segamat", "shopping", "mall", "beli belah"]
  },
  {
    category: "Beli-Belah",
    name: "Pasar Awam Pontian",
    location: "Pontian",
    rating: 4.8,
    reviews: "1.9k",
    price: "Murah",
    img: "img.jpg/pasar awam pontian.avif",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Pasar+Awam+Pontian",
    pageUrl: "belibelah.html",
    keywords: ["pontian", "pasar awam", "shopping", "pasar", "beli belah"]
  },

  // Timur
  {
    category: "Beli-Belah",
    name: "Desaru Coast Riverside",
    location: "Desaru",
    rating: 4.7,
    reviews: "1.8k",
    price: "Pelbagai harga",
    img: "img.jpg/riverside.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Desaru+Coast+Riverside",
    pageUrl: "belibelah.html",
    keywords: ["desaru", "kota tinggi", "desaru coast riverside", "shopping", "beli belah"]
  },
  {
    category: "Beli-Belah",
    name: "Pusat Keropok Mersing",
    location: "Mersing",
    rating: 4.7,
    reviews: "1.6k",
    price: "Murah",
    img: "img.jpg/keropokmersing.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Pusat+Keropok+Mersing",
    pageUrl: "belibelah.html",
    keywords: ["mersing", "keropok", "shopping", "oleh-oleh", "beli belah"]
  }
];