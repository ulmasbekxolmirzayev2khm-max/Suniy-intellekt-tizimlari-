import { Language } from '../types';

export interface Translations {
  appName: string;
  appSubtitle: string;
  selectLanguage: string;
  languages: {
    uz: string;
    ru: string;
    en: string;
  };
  themeToggle: string;
  themeDark: string;
  themeLight: string;
  authorBtn: string;
  compareBtn: string;
  compareCount: string;
  favoritesBtn: string;
  favoritesOnly: string;
  allCategories: string;
  categories: {
    all: string;
    llm: string;
    search: string;
    image: string;
    open: string;
  };
  hero: {
    badge: string;
    titleFirst: string;
    titleHighlight: string;
    titleLast: string;
    subtitle: string;
    scrollCta: string;
    statModels: string;
    statPrompts: string;
    statUseCases: string;
    statLanguages: string;
  };
  searchPlaceholder: string;
  clearSearch: string;
  resultsCount: string;
  noResultsTitle: string;
  noResultsDesc: string;
  resetFilters: string;
  card: {
    company: string;
    year: string;
    viewDetails: string;
    addToCompare: string;
    removeFromCompare: string;
    addToFavorites: string;
    removeFromFavorites: string;
    hoverHint: string;
  };
  modal: {
    overview: string;
    capabilities: string;
    strengths: string;
    limitations: string;
    pricing: string;
    freeTier: string;
    paidTier: string;
    pricingNote: string;
    platforms: string;
    websiteBtn: string;
    closeEsc: string;
    prev: string;
    next: string;
    tabUseCases: string;
    tabRequirements: string;
    tabPrompts: string;
    useCasesTitle: string;
    useCasesDesc: string;
    requirementsTitle: string;
    requirementsDesc: string;
    promptsTitle: string;
    promptsDesc: string;
    copyPrompt: string;
    copied: string;
    reqSections: {
      technical: string;
      registration: string;
      restrictions: string;
      pricingTiers: string;
      security: string;
      ethics: string;
    };
  };
  compareModal: {
    title: string;
    subtitle: string;
    selectFirst: string;
    selectSecond: string;
    clear: string;
    close: string;
    criteria: {
      company: string;
      year: string;
      category: string;
      pricing: string;
      platforms: string;
      strengths: string;
      limitations: string;
      website: string;
    };
  };
  authorModal: {
    title: string;
    occupation: string;
    about: string;
    projectMission: string;
    contact: string;
    close: string;
    rights: string;
  };
  clock: {
    liveBadge: string;
  };
  footer: {
    aboutText: string;
    disclaimer: string;
    madeWith: string;
    allRightsReserved: string;
    backToTop: string;
  };
}

export const translations: Record<Language, Translations> = {
  uz: {
    appName: "Sun'iy intellekt tizimlari",
    appSubtitle: "Yetakchi 10 ta AI platformasi katalogi",
    selectLanguage: "Tilni tanlang",
    languages: {
      uz: "O'zbekcha",
      ru: "Русский",
      en: "English",
    },
    themeToggle: "Mavzuni almashtirish",
    themeDark: "Qorong'i rejim",
    themeLight: "Yorug' rejim",
    authorBtn: "Muallif",
    compareBtn: "Solishtirish",
    compareCount: "ta tanlandi",
    favoritesBtn: "Sevimlilar",
    favoritesOnly: "Faqat sevimlilar",
    allCategories: "Barcha kategoriyalar",
    categories: {
      all: "Barchasi",
      llm: "Matn & Suhbat (LLM)",
      search: "Qidiruv & Tahlil",
      image: "Rasm & San'at",
      open: "Ochiq Kodli (Open)",
    },
    hero: {
      badge: "2026-yilgi Professional Interaktiv Katalog",
      titleFirst: "Kelajakni Boshqarayotgan",
      titleHighlight: "Sun'iy Intellekt",
      titleLast: "Tizimlari",
      subtitle: "Dunyoning yetakchi 10 ta sun'iy intellekt tizimi: arxitektura, qo'llanish sohalari, foydalanish mezonlari va tayyor unumdorlik promtlari bitta platformada.",
      scrollCta: "Tizimlar katalogiga o'tish",
      statModels: "10 ta yetakchi AI",
      statPrompts: "100 ta amaliy promt",
      statUseCases: "80 ta qo'llanish sohasi",
      statLanguages: "3 tilda to'liq ma'lumot",
    },
    searchPlaceholder: "AI nomi, kompaniya yoki soha bo'yicha qidirish...",
    clearSearch: "Qidiruvni tozalash",
    resultsCount: "ta AI tizimi topildi",
    noResultsTitle: "Hech qanday natija topilmadi",
    noResultsDesc: "Qidiruv so'rovini o'zgartirib ko'ring yoki filtrlarni qayta o'rnating.",
    resetFilters: "Filtrlarni bekor qilish",
    card: {
      company: "Ishlab chiquvchi",
      year: "Yaratilgan yili",
      viewDetails: "Batafsil ko'rish",
      addToCompare: "Solishtirishga qo'shish",
      removeFromCompare: "Solishtirishdan chiqarish",
      addToFavorites: "Sevimlilarga qo'shish",
      removeFromFavorites: "Sevimlilardan o'chirish",
      hoverHint: "To'liq qo'llanmani ko'rish uchun bosing",
    },
    modal: {
      overview: "Umumiy tavsif",
      capabilities: "Asosiy imkoniyatlar",
      strengths: "Kuchli tomonlari",
      limitations: "Cheklovlari va kamchiliklari",
      pricing: "Narx siyosati",
      freeTier: "Bepul tarif:",
      paidTier: "Pullik tariflar:",
      pricingNote: "Eslatma: Narxlar va cheklovlar xizmat siyosatiga ko'ra o'zgarishi mumkin. Rasmiy saytdan tekshiring.",
      platforms: "Mavjud platformalar",
      websiteBtn: "Rasmiy veb-sayt",
      closeEsc: "Yopish (Esc)",
      prev: "Oldingi",
      next: "Keyingi",
      tabUseCases: "Qo'llanish sohalari",
      tabRequirements: "Foydalanish talablari va mezonlari",
      tabPrompts: "10 ta unumdorlik promti",
      useCasesTitle: "Amaliy qo'llanish sohalari",
      useCasesDesc: "Ushbu sun'iy intellekt tizimi qaysi yo'nalishlarda eng yuqori samara beradi va qanday vazifalarni hal qiladi?",
      requirementsTitle: "Foydalanish talablari, mezonlar va xavfsizlik",
      requirementsDesc: "Tizimdan to'g'ri, xavfsiz va samarali foydalanish uchun rasmiy talablar va amaliy tavsiyalar majmuasi.",
      promptsTitle: "Unumdorlikni oshiruvchi 10 ta amaliy promt",
      promptsDesc: "Ushbu AI bilan ishlashda eng yuqori sifatli natijaga erishish uchun tayyor professional so'rovlar to'plami. Bir bosishda nusxalab oling.",
      copyPrompt: "Nusxalash",
      copied: "Nusxalandi ✓",
      reqSections: {
        technical: "Texnik talablar (qurilma, brauzer, tarmoq)",
        registration: "Ro'yxatdan o'tish va akkaunt talablari",
        restrictions: "Yosh va hududiy cheklovlar",
        pricingTiers: "Tariflar, limitlar va to'lov shartlari",
        security: "Xavfsizlik va shaxsiy ma'lumotlar maxfiyligi",
        ethics: "Samaradorlik mezonlari va axloqiy qoidalar",
      },
    },
    compareModal: {
      title: "Sun'iy intellekt tizimlarini solishtirish",
      subtitle: "Ikkita tizimni tanlang va ularning kuchli tomonlari, narxlari hamda imkoniyatlarini yonma-yon taqqoslang.",
      selectFirst: "1-sun'iy intellektni tanlang",
      selectSecond: "2-sun'iy intellektni tanlang",
      clear: "Tozalash",
      close: "Yopish",
      criteria: {
        company: "Ishlab chiquvchi kompaniya",
        year: "Taqdim etilgan yili",
        category: "Kategoriya va turi",
        pricing: "Narx modeli",
        platforms: "Qo'llab-quvvatlanadigan platformalar",
        strengths: "Asosiy kuchli tomonlari",
        limitations: "Asosiy cheklovlari",
        website: "Rasmiy veb-sayt",
      },
    },
    authorModal: {
      title: "Loyiha muallifi",
      occupation: "Lavozim va mutaxassislik",
      about: "Muallif haqida",
      projectMission: "Loyiha maqsadi va vazifasi",
      contact: "Aloqa va ijtimoiy tarmoqlar",
      close: "Yopish",
      rights: "Barcha huquqlar himoyalangan",
    },
    clock: {
      liveBadge: "Jonli vaqt",
    },
    footer: {
      aboutText: "Ushbu platforma 2026-yilning eng qudratli 10 ta sun'iy intellekt tizimi haqida mustaqil, xolis va mukammal ma'lumot beruvchi interaktiv katalogdir.",
      disclaimer: "Ma'lumotlar faqat axborot va ta'lim maqsadida umumlashtirilgan. Savdo belgilari va logotiplar ularning tegishli egalariga tegishli.",
      madeWith: "bilan yaratilgan",
      allRightsReserved: "Barcha huquqlar himoyalangan.",
      backToTop: "Yuqoriga qaytish",
    },
  },

  ru: {
    appName: "Системы искусственного интеллекта",
    appSubtitle: "Интерактивный каталог 10 ведущих ИИ-систем",
    selectLanguage: "Выберите язык",
    languages: {
      uz: "O'zbekcha",
      ru: "Русский",
      en: "English",
    },
    themeToggle: "Сменить тему оформления",
    themeDark: "Темная тема",
    themeLight: "Светлая тема",
    authorBtn: "Автор",
    compareBtn: "Сравнение",
    compareCount: "выбрано",
    favoritesBtn: "Избранное",
    favoritesOnly: "Только избранные",
    allCategories: "Все категории",
    categories: {
      all: "Все",
      llm: "Текст и диалог (LLM)",
      search: "Поиск и факты",
      image: "Изображения и арт",
      open: "Открытый код (Open)",
    },
    hero: {
      badge: "Профессиональный интерактивный каталог 2026",
      titleFirst: "Определяющие будущее",
      titleHighlight: "Системы Искусственного",
      titleLast: "Интеллекта",
      subtitle: "10 ведущих мировых систем искусственного интеллекта: возможности, сферы применения, требования и готовые проверенные промпты на одной платформе.",
      scrollCta: "Перейти к каталогу систем",
      statModels: "10 флагманских ИИ",
      statPrompts: "100 готовых промптов",
      statUseCases: "80 сфер применения",
      statLanguages: "3 языка интерфейса",
    },
    searchPlaceholder: "Поиск по названию, компании или ключевым словам...",
    clearSearch: "Очистить поиск",
    resultsCount: "найдено систем ИИ",
    noResultsTitle: "Ничего не найдено",
    noResultsDesc: "Попробуйте изменить поисковый запрос или сбросить фильтры.",
    resetFilters: "Сбросить фильтры",
    card: {
      company: "Разработчик",
      year: "Год выпуска",
      viewDetails: "Подробнее",
      addToCompare: "Добавить к сравнению",
      removeFromCompare: "Убрать из сравнения",
      addToFavorites: "В избранное",
      removeFromFavorites: "Удалить из избранного",
      hoverHint: "Нажмите для подробного руководства",
    },
    modal: {
      overview: "Общее описание",
      capabilities: "Ключевые возможности",
      strengths: "Сильные стороны",
      limitations: "Ограничения и недостатки",
      pricing: "Ценовая политика",
      freeTier: "Бесплатный тариф:",
      paidTier: "Платные тарифы:",
      pricingNote: "Примечание: Цены и лимиты могут меняться в зависимости от политики сервиса. Проверяйте официальный сайт.",
      platforms: "Доступные платформы",
      websiteBtn: "Официальный сайт",
      closeEsc: "Закрыть (Esc)",
      prev: "Назад",
      next: "Вперед",
      tabUseCases: "Сферы применения",
      tabRequirements: "Требования и критерии",
      tabPrompts: "10 промптов продуктивности",
      useCasesTitle: "Практические сферы применения",
      useCasesDesc: "В каких ключевых отраслях данная система демонстрирует максимальную отдачу и какие бизнес-задачи решает?",
      requirementsTitle: "Требования, критерии и безопасность",
      requirementsDesc: "Комплекс технических нормативов, советов по безопасности и этических правил для надежной эксплуатации.",
      promptsTitle: "10 готовых промптов для максимальной продуктивности",
      promptsDesc: "Набор проверенных профессиональных промптов для получения наилучшего результата. Копируйте в один клик.",
      copyPrompt: "Копировать",
      copied: "Скопировано ✓",
      reqSections: {
        technical: "Технические требования (устройство, браузер, сеть)",
        registration: "Требования к регистрации и учетной записи",
        restrictions: "Возрастные и территориальные ограничения",
        pricingTiers: "Тарифные планы, лимиты и условия оплаты",
        security: "Безопасность и защита конфиденциальных данных",
        ethics: "Критерии эффективности и правила этики",
      },
    },
    compareModal: {
      title: "Сравнение систем искусственного интеллекта",
      subtitle: "Выберите две системы для параллельного сопоставления их сильных сторон, цен и архитектурных особенностей.",
      selectFirst: "Выберите 1-ю систему",
      selectSecond: "Выберите 2-ю систему",
      clear: "Очистить",
      close: "Закрыть",
      criteria: {
        company: "Компания-разработчик",
        year: "Год запуска",
        category: "Категория",
        pricing: "Ценовая модель",
        platforms: "Поддерживаемые платформы",
        strengths: "Ключевые преимущества",
        limitations: "Основные ограничения",
        website: "Официальный сайт",
      },
    },
    authorModal: {
      title: "Об авторе проекта",
      occupation: "Специализация и роль",
      about: "Биография",
      projectMission: "Миссия проекта",
      contact: "Контакты и соцсети",
      close: "Закрыть",
      rights: "Все права защищены",
    },
    clock: {
      liveBadge: "Реальное время",
    },
    footer: {
      aboutText: "Независимый аналитический интерактивный гид по 10 ведущим мировым системам искусственного интеллекта 2026 года.",
      disclaimer: "Все сведения приведены исключительно в ознакомительных и образовательных целях. Торговые марки принадлежат их законным правообладателям.",
      madeWith: "разработано с",
      allRightsReserved: "Все права защищены.",
      backToTop: "Наверх",
    },
  },

  en: {
    appName: "Artificial Intelligence Systems",
    appSubtitle: "Directory of the World's 10 Premier AI Systems",
    selectLanguage: "Select Language",
    languages: {
      uz: "O'zbekcha",
      ru: "Русский",
      en: "English",
    },
    themeToggle: "Toggle theme",
    themeDark: "Dark mode",
    themeLight: "Light mode",
    authorBtn: "Author",
    compareBtn: "Compare",
    compareCount: "selected",
    favoritesBtn: "Favorites",
    favoritesOnly: "Favorites only",
    allCategories: "All Categories",
    categories: {
      all: "All",
      llm: "Text & Chat (LLM)",
      search: "Search & Research",
      image: "Image & Artistry",
      open: "Open Weights",
    },
    hero: {
      badge: "2026 Professional Interactive Catalog",
      titleFirst: "Pioneering the Future:",
      titleHighlight: "Artificial Intelligence",
      titleLast: "Systems",
      subtitle: "The world's 10 foremost artificial intelligence engines: architectural capabilities, real-world domains, operational criteria, and 100 tested productivity prompts.",
      scrollCta: "Explore System Directory",
      statModels: "10 Frontier Systems",
      statPrompts: "100 Tested Prompts",
      statUseCases: "80 Real Use Cases",
      statLanguages: "3 Localized Languages",
    },
    searchPlaceholder: "Search by AI name, company, or domain keyword...",
    clearSearch: "Clear search",
    resultsCount: "systems found",
    noResultsTitle: "No AI systems matched",
    noResultsDesc: "Try adjusting your query terms or reset active filters.",
    resetFilters: "Reset filters",
    card: {
      company: "Developer",
      year: "Launched",
      viewDetails: "View Details",
      addToCompare: "Add to Compare",
      removeFromCompare: "Remove from Compare",
      addToFavorites: "Add to Favorites",
      removeFromFavorites: "Remove from Favorites",
      hoverHint: "Click to open complete system brief",
    },
    modal: {
      overview: "System Overview",
      capabilities: "Core Capabilities",
      strengths: "Key Strengths",
      limitations: "Limitations & Drawbacks",
      pricing: "Pricing Structure",
      freeTier: "Free Tier:",
      paidTier: "Paid Subscriptions:",
      pricingNote: "Note: Pricing and quotas fluctuate according to vendor policies. Always verify on official portals.",
      platforms: "Supported Platforms",
      websiteBtn: "Official Website",
      closeEsc: "Close (Esc)",
      prev: "Previous",
      next: "Next",
      tabUseCases: "Use Cases & Domains",
      tabRequirements: "Requirements & Guidelines",
      tabPrompts: "10 Productivity Prompts",
      useCasesTitle: "Practical Application Domains",
      useCasesDesc: "In which specialized sectors does this AI generate the highest leverage and solve real problems?",
      requirementsTitle: "Technical Requirements & Operational Guidelines",
      requirementsDesc: "Essential technical specs, compliance guardrails, privacy advisories, and ethical best practices.",
      promptsTitle: "10 High-Leverage Productivity Prompts",
      promptsDesc: "A battle-tested toolkit of prompts designed to extract maximum fidelity from this AI. Click to copy instantly.",
      copyPrompt: "Copy Prompt",
      copied: "Copied ✓",
      reqSections: {
        technical: "Technical Prerequisites (Hardware, Browser, Network)",
        registration: "Account & Registration Requirements",
        restrictions: "Age & Regional Boundaries",
        pricingTiers: "Pricing Tiers, Rate Limits & Invoicing",
        security: "Security & Confidentiality Safeguards",
        ethics: "Effectiveness Criteria & Verification Ethics",
      },
    },
    compareModal: {
      title: "Side-by-Side AI Comparison",
      subtitle: "Select any two frontier engines to juxtapose strengths, limitations, pricing models, and architectures.",
      selectFirst: "Select 1st System",
      selectSecond: "Select 2nd System",
      clear: "Clear Matrix",
      close: "Close Matrix",
      criteria: {
        company: "Parent Organization",
        year: "Release Year",
        category: "System Archetype",
        pricing: "Pricing Framework",
        platforms: "Platform Footprint",
        strengths: "Flagship Strengths",
        limitations: "Noted Limitations",
        website: "Official Website",
      },
    },
    authorModal: {
      title: "About the Project Author",
      occupation: "Title & Specialization",
      about: "Biography",
      projectMission: "Project Mission",
      contact: "Connect & Inquiries",
      close: "Close",
      rights: "All rights reserved",
    },
    clock: {
      liveBadge: "Live Clock",
    },
    footer: {
      aboutText: "An independent, cross-lingual intelligence catalog indexing the world's 10 foremost AI systems in 2026.",
      disclaimer: "All technical metrics are compiled for educational benchmarking. Trademarks and brand assets belong to their respective corporate entities.",
      madeWith: "crafted with",
      allRightsReserved: "All rights reserved.",
      backToTop: "Back to top",
    },
  },
};
