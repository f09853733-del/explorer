(() => {
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => document.querySelectorAll(selector);

  const translations = {
    home: ["خانه", "Home"],
    planets: ["سیاره‌ها", "Planets"],
    mission: ["مأموریت", "Mission"],
    start: ["شروع کاوش ↗", "Explore ↗"],
    status: ["سیستم کاوش فضایی فعال است", "SPACE EXPLORATION SYSTEM ONLINE"],
    hero1: ["فراتر از", "BEYOND THE"],
    hero2: ["مرزهای جهان", "BOUNDS OF THE UNIVERSE"],
    intro: [
      "به ناشناخته‌ها سفر کن؛ از سیاره‌های شگفت‌انگیز تا رازهای بی‌پایان کهکشان. جهان منتظر کشف شدن است.",
      "Journey into the unknown, from fascinating planets to the endless mysteries of galaxies. The universe is waiting to be explored."
    ],
    launch: ["🚀 شروع مأموریت", "🚀 Launch Mission"],
    about: ["درباره کاوش ←", "About Exploration →"],
    stat1: ["سیاره اصلی منظومه شمسی", "Major planets in the Solar System"],
    stat2: ["کهکشان تخمینی در جهان قابل مشاهده", "Estimated galaxies in the observable universe"],
    stat3: ["راز کشف‌نشده", "Unsolved mysteries"],
    heading: ["مقصد بعدی تو کجاست؟", "Where Will You Explore Next?"],
    choose: [
      "یک جهان را انتخاب کن و اطلاعاتش را کشف کن.",
      "Choose a world and discover its secrets."
    ],
    details: ["قطر", "Diameter"],
    year: ["سال سیاره", "Orbital period"],
    moons: ["قمر شناخته‌شده", "Known moons"],
    missionHeading: ["جهان هنوز پر از راز است.", "The Universe Is Still Full of Mysteries."],
    missionText: [
      "هر کلیک، قدمی تازه به سوی ناشناخته‌هاست.",
      "Every click is another step into the unknown."
    ],
    missionButton: ["آغاز کاوش جدید ↗", "Start a New Exploration ↗"],
    footer: [
      "ساخته‌شده برای کنجکاوان جهان · ۲۰۲۶",
      "Made for the curious minds of the universe · 2026"
    ],
    back: ["بازگشت به بالا ↑", "Back to Top ↑"],
    diameterLabel: ["قطر:", "Diameter:"],
    view: ["مشاهده ↗", "Explore ↗"],
    ariaPlanet: ["نمایش اطلاعات", "Show information for"]
  };

  const planets = [
    {
      name: "عطارد", en: "MERCURY",
      desc: "نزدیک‌ترین سیاره به خورشید؛ جهانی سنگی با نوسان دمای بسیار زیاد.",
      enDesc: "The closest planet to the Sun, a rocky world with extreme temperature variations.",
      year: "88 روز", enYear: "88 days", moons: "۰", enMoons: "0"
    },
    {
      name: "زهره", en: "VENUS",
      desc: "جهانی پوشیده از ابرهای غلیظ که به دلیل اثر گلخانه‌ای بسیار داغ است.",
      enDesc: "A world covered in thick clouds and made extremely hot by the greenhouse effect.",
      year: "225 روز", enYear: "225 days", moons: "۰", enMoons: "0"
    },
    {
      name: "زمین", en: "EARTH",
      desc: "خانه ما و تنها جهانی که تاکنون وجود حیات در آن تأیید شده است.",
      enDesc: "Our home and the only world where life has been confirmed so far.",
      year: "365 روز", enYear: "365 days", moons: "۱", enMoons: "1"
    },
    {
      name: "مریخ", en: "MARS",
      desc: "سیاره سرخ با آتشفشان‌های عظیم، دره‌های عمیق و نشانه‌های آب باستانی.",
      enDesc: "The Red Planet, with giant volcanoes, deep valleys, and evidence of ancient water.",
      year: "687 روز", enYear: "687 days", moons: "۲", enMoons: "2"
    },
    {
      name: "مشتری", en: "JUPITER",
      desc: "بزرگ‌ترین سیاره منظومه شمسی، با طوفان‌های عظیم و قمرهای شگفت‌انگیز.",
      enDesc: "The largest planet in the Solar System, with giant storms and fascinating moons.",
      year: "11.86 سال", enYear: "11.86 years", moons: "۱۰۱+", enMoons: "101+"
    },
    {
      name: "زحل", en: "SATURN",
      desc: "غول گازی مشهور به حلقه‌های درخشان که از ذرات یخ و سنگ ساخته شده‌اند.",
      enDesc: "A gas giant famous for its spectacular rings of ice and rock particles.",
      year: "29.4 سال", enYear: "29.4 years", moons: "۲۷۴", enMoons: "274"
    },
    {
      name: "اورانوس", en: "URANUS",
      desc: "غول یخی آبی‌رنگ که محور چرخشش به‌شدت کج شده است.",
      enDesc: "A blue ice giant with an extremely tilted rotation axis.",
      year: "84 سال", enYear: "84 years", moons: "۲۹", enMoons: "29"
    },
    {
      name: "نپتون", en: "NEPTUNE",
      desc: "جهانی دوردست و سرد با بادهایی بسیار سریع در جو آن.",
      enDesc: "A distant, cold world with extremely fast winds in its atmosphere.",
      year: "165 سال", enYear: "165 years", moons: "۱۶", enMoons: "16"
    }
  ];

  let language = "fa";
  let selectedPlanet = 2;

  try {
    language = localStorage.getItem("cosmos-language") || "fa";
  } catch (_) {}

  function setText(selector, text) {
    const element = $(selector);
    if (element) element.textContent = text;
  }

  function renderPlanetCards() {
    $$(".planet-card").forEach((card, index) => {
      const p = planets[index];
      if (!p) return;

      const title = card.querySelector("h3");
      const subtitle = card.querySelector("p");
      const bottom = card.querySelector(".card-bottom");

      if (title) title.textContent = language === "en" ? p.en : p.name;
      if (subtitle) subtitle.textContent = language === "en" ? p.name : p.en;

      if (bottom) {
        const spans = bottom.querySelectorAll("span");
        if (spans[0]) {
          const diameter = spans[0].textContent.split(":").pop().trim();
          spans[0].textContent =
            (language === "en" ? "Diameter: " : "قطر: ") + diameter;
        }
        if (spans[1]) {
          spans[1].textContent = language === "en" ? "Explore ↗" : "مشاهده ↗";
        }
      }

      card.setAttribute(
        "aria-label",
        `${language === "en" ? "Show information for" : "نمایش اطلاعات"} ${language === "en" ? p.en : p.name}`
      );
    });
  }

  function renderDetails() {
    const p = planets[selectedPlanet];
    if (!p) return;

    setText("#detailName", language === "en" ? p.en : `${p.name} | ${p.en}`);
    setText("#detailDescription", language === "en" ? p.enDesc : p.desc);

    const year = $("#detailYear");
    const moons = $("#detailMoons");

    if (year) year.textContent = language === "en" ? p.enYear : p.year;
    if (moons) moons.textContent = language === "en" ? p.enMoons : p.moons;

    const labels = $$(".detail-facts span");
    if (labels[0]) labels[0].textContent = language === "en" ? "Diameter" : "قطر";
    if (labels[1]) labels[1].textContent = language === "en" ? "Orbital period" : "سال سیاره";
    if (labels[2]) labels[2].textContent = language === "en" ? "Known moons" : "قمر شناخته‌شده";
  }

  function applyLanguage() {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "en" ? "ltr" : "rtl";

    const button = $("#languageToggle");
    if (button) button.textContent = language === "en" ? "FA" : "EN";

    $$("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (translations[key]) {
        element.textContent = translations[key][language === "en" ? 1 : 0];
      }
    });

    setText(".eyebrow", translations.status[language === "en" ? 1 : 0]);

    const heroTitle = $(".hero h1");
    if (heroTitle) {
      heroTitle.innerHTML = language === "en"
        ? 'BEYOND THE<br><span>BOUNDS OF THE UNIVERSE</span>'
        : 'فراتر از<br><span>مرزهای جهان</span>';
    }

    setText(".hero-content > p", translations.intro[language === "en" ? 1 : 0]);
    setText(".primary-btn", translations.launch[language === "en" ? 1 : 0]);
    setText(".secondary-btn", translations.about[language === "en" ? 1 : 0]);
    setText(".stats div:nth-child(1) span", translations.stat1[language === "en" ? 1 : 0]);
    setText(".stats div:nth-child(2) span", translations.stat2[language === "en" ? 1 : 0]);
    setText(".stats div:nth-child(3) span", translations.stat3[language === "en" ? 1 : 0]);
    setText(".section-heading h2", translations.heading[language === "en" ? 1 : 0]);
    setText(".section-heading p", translations.choose[language === "en" ? 1 : 0]);
    setText(".mission h2", translations.missionHeading[language === "en" ? 1 : 0]);
    setText(".mission > p", translations.missionText[language === "en" ? 1 : 0]);
    setText("#missionBtn", translations.missionButton[language === "en" ? 1 : 0]);
    setText("footer p", translations.footer[language === "en" ? 1 : 0]);

    const footerLink = $("footer > a:last-child");
    if (footerLink) footerLink.textContent = translations.back[language === "en" ? 1 : 0];

    renderPlanetCards();
    renderDetails();

    try {
      localStorage.setItem("cosmos-language", language);
    } catch (_) {}
  }

  document.addEventListener("click", (event) => {
    const card = event.target.closest(".planet-card");
    if (card) {
      const cards = [...$$(".planet-card")];
      const index = cards.indexOf(card);
      if (index >= 0) {
        selectedPlanet = index;
        setTimeout(renderDetails, 0);
      }
    }
  });

  const toggle = $("#languageToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      language = language === "fa" ? "en" : "fa";
      applyLanguage();
    });
  }

  applyLanguage();
})();
