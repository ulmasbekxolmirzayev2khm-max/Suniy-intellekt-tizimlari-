import { AIModel } from '../types';

export const AI_MODELS: AIModel[] = [
  // 1. ChatGPT
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    company: 'OpenAI',
    category: 'llm',
    accentColor: '#10A37F',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    websiteUrl: 'https://chatgpt.com',
    year: 2022,
    platforms: ['Web', 'iOS', 'Android', 'macOS', 'Windows', 'API'],
    badge: {
      uz: 'LLM & Suhbat',
      ru: 'LLM & Чат',
      en: 'LLM & Conversational',
    },
    logoSvg: 'chatgpt',
    uz: {
      shortDesc: "OpenAI tomonidan yaratilgan, dunyodagi eng mashhur va ko'p funksiyali generativ suhbatdosh sun'iy intellekt tizimi.",
      fullDescription: [
        "ChatGPT — 2022-yil noyabr oyida OpenAI tomonidan taqdim etilgan va dunyo miqyosida generativ sun'iy intellekt inqilobini boshlab bergan yetakchi til modelidir. U GPT-4o va o1/o3 mulohaza yurituvchi neyrotarmog'i arxitekturasiga tayanadi.",
        "Tizim nafaqat matn bilan muloqot qilish, balki real vaqtda ovozli suhbat, kod yozish, hujjatlar va jadvallarni tahlil qilish, tasvirlarni tanish hamda DALL-E yordamida illyustratsiyalar yaratish imkoniyatiga ega.",
        "Bugungi kunda ChatGPT yuz millionlab individual foydalanuvchilar va korporatsiyalar tomonidan kundalik ish jarayonlarini avtomatlashtirish, matn yaratish va dasturiy yechimlar ishlab chiqishda asosiy yordamchi sifatida qo'llanilmoqda."
      ],
      capabilities: [
        "Keng qamrovli matn yaratish, tahrirlash va xulosalash",
        "Murakkab dasturlash tillarida (Python, JS, C++, Go) kod yozish va xatolarni tuzatish",
        "GPT-4o orqali ultra tezkor multimodal tahlil (matn, rasm, fayllar)",
        "Ovozli real vaqtli muloqot (Advanced Voice Mode)",
        "Maxsus GPT'lar yaratish va OpenAI Store do'konidan foydalanish",
        "Python muhitida ma'lumotlarni tahlil qilish (Advanced Data Analysis)",
        "Internetdan eng yangi ma'lumotlarni qidirish va manbalarni ko'rsatish"
      ],
      strengths: [
        "Eng boy ekotizim va millionlab foydalanuvchilar bazasi",
        "Inson muloqotiga nihoyatda yaqin, tabiiy va ravon javoblar",
        "Keng qamrovli API va dasturchilar uchun qulay infratuzilma",
        "Doimiy yangilanishlar va mulohaza (o-series) modellarining mavjudligi"
      ],
      limitations: [
        "Ba'zan faktik xatolarga ('hallucination') yo'l qo'yishi mumkin",
        "Bepul tarifda ilg'or modellar bo'yicha qat'iy soatlik cheklovlar",
        "Haddan tashqari ehtiyotkor xavfsizlik filtrlari ba'zi so'rovlarni cheklashi mumkin"
      ],
      pricing: {
        freeTier: "Cheklangan GPT-4o mini va GPT-4o kirishi bilan bepul",
        paidTier: "ChatGPT Plus: oyiga $20; ChatGPT Pro: oyiga $200; Team/Enterprise korporativ tariflari",
        note: "Tariflar OpenAI siyosatiga ko'ra o'zgarishi mumkin, rasmiy saytdan tekshiring."
      },
      useCases: [
        { id: '1', icon: 'Code', title: "Dasturlash", description: "Arxitektura tuzish, algoritmlarni optimallashtirish va unit testlarni avtomatik yozish." },
        { id: '2', icon: 'GraduationCap', title: "Ta'lim", description: "Murakkab ilmiy tushunchalarni sodda tilda tushuntirish va xorijiy tillarni interaktiv o'rganish." },
        { id: '3', icon: 'Briefcase', title: "Biznes tahlil", description: "Moliyaviy hisobotlar va Excel jadvallarini yuklab, tezkor vizual tahlil va prognozlar olish." },
        { id: '4', icon: 'Megaphone', title: "Marketing", description: "Reklama kampaniyalari ssenariylari, SEO maqolalari va ijtimoiy tarmoqlar uchun postlar yaratish." },
        { id: '5', icon: 'FileText', title: "Hujjatlar tayyorlash", description: "Shartnomalar andozasi, rasmiy arizalar va email xatlar loyihasini tezda shakllantirish." },
        { id: '6', icon: 'Search', title: "Ilmiy tadqiqot", description: "Katta hajmli PDF ilmiy maqolalarni xulosalash va asosiy tezislarni ajratib berish." },
        { id: '7', icon: 'Languages', title: "Tarjima", description: "40 dan ortiq tillar o'rtasida kontekstga mos, badiiy va texnik darajadagi professional tarjima." },
        { id: '8', icon: 'Lightbulb', title: "Ijodiy g'oyalar", description: "Startaplar, kitob sujetlari va mahsulot nomlari bo'yicha erkin aqliy hujum (brainstorming)." }
      ],
      requirements: {
        technical: ["Zamonaviy brauzer (Chrome, Safari, Firefox, Edge)", "Barqaror internet (kamida 2-5 Mbps)", "iOS yoki Android qurilmalari (mobil ilova uchun)"],
        registration: ["OpenAI akkaunti yoki Google / Microsoft / Apple hisobi", "Elektron pochta va xavfsizlik tasdiqlanishi"],
        restrictions: ["13 yoshdan oshgan foydalanuvchilar (18 yoshgacha ota-ona ruxsati bilan)", "Geografik sanksiyalar mavjud hududlarda to'g'ridan-to'g'ri cheklovlar"],
        pricingTiers: ["Bepul tarif: cheklangan limitlar", "Plus: $20/oy to'liq multimodal kirish", "Pro: $200/oy yuqori hisoblash quvvati"],
        security: ["Maxfiy shaxsiy, moliyaviy yoki tibbiy sirlarni kiritmaslik", "Tarixni o'chirish va modelni o'qitishdan bosh tortish funksiyasini sozlash"],
        ethics: ["Generatsiya qilingan kod va faktik ma'lumotlarni doim mustaqil tekshirish", "Plagiat va axloqsiz kontent tarqatishda foydalanmaslik"]
      },
      prompts: [
        { id: 1, title: "Kod refaktoringi", category: "Dasturlash", prompt: "Quyidagi TypeScript funksiyasini tahlil qil, undagi xotira samarasizligi va murakkablikni kamaytir. Kodga qisqa izohlar qo'sh va uni toza (clean code) qoidalariga moslashtir:\n\n[KODNI_SHU_YERGA_QO'YING]" },
        { id: 2, title: "Murakkab mavzuni soddalashtirish", category: "Ta'lim", prompt: "Men 12 yoshli maktab o'quvchisiman deb tasavvur qil. Menga kvant kompyuterlari qanday ishlashini oddiy tangalar va labirint misolida tushuntirib ber." },
        { id: 3, title: "Biznes strategiya tuzish", category: "Biznes", prompt: "Biz Markaziy Osiyo bozori uchun B2B SaaS mahsulot (ombor hisobi) chiqaryapmiz. 6 oylik bozorga kirish (Go-to-Market) strategiyasini bosqichma-bosqich jadval ko'rinishida ishlab chiq." },
        { id: 4, title: "Sotuvchi email xati", category: "Marketing", prompt: "IT autsorsing xizmatlarini yirik riteyl kompaniyalarining IT direktorlariga taklif qiluvchi samimiy, sovuq (cold email) xat yoz. Unda 3 ta aniq og'riqli nuqta va harakatga chaqiruv (CTA) bo'lsin." },
        { id: 5, title: "SQL so'rovini optimallashtirish", category: "Dasturlash", prompt: "Millionlab qatordan iborat buyurtmalar jadvalidan so'nggi 30 kundagi eng faol 10 ta xaridorni oladigan sekin ishlovchi SQL so'rovim bor. Qaysi indekslarni yaratishim va so'rovni qanday qayta yozishim kerak?" },
        { id: 6, title: "Maqolani qisqartirish va xulosa", category: "Matn", prompt: "Quyidagi matnni tahlil qil va uning asosiy mohiyatini 3 ta eng muhim punkt, 1 ta xulosa va amaliy harakat tavsiyasi sifatida taqdim et:\n\n[MATN]" },
        { id: 7, title: "Ish suhbati simulyatori", category: "Karyera", prompt: "Sen Google kompaniyasining Senior Frontend muhandislari uchun texnik suhbat oluvchi bosh intervyuyersan. Menga navbatma-navbat savollar ber, mening javoblarimni kut va har biriga konstruktiv baho ber." },
        { id: 8, title: "Mahsulot xususiyatlari (PRD)", category: "Boshqaruv", prompt: "Mobil bank ilovasiga shaxsiy byudjet tahlilchisi (Budget Tracker) funksiyasini qo'shish bo'yicha to'liq Product Requirement Document (PRD) loyihasini yozib ber." },
        { id: 9, title: "Argumentli bahs tahlili", category: "Fikr", prompt: "Masofaviy ishlash (Remote work) bo'yicha eng kuchli 5 ta ijobiy va 5 ta salbiy dalillarni xolis holda keltir. Har biriga ilmiy tadqiqotlar kontekstini qo'sh." },
        { id: 10, title: "Matn stilini o'zgartirish", category: "Tahrir", prompt: "Quyidagi quruq va rasmiy xabarni do'stona, g'amxo'r, lekin professional korporativ ohangga o'tkazib ber:\n\n[XABAR_MATNI]" }
      ]
    },
    ru: {
      shortDesc: "Самая популярная в мире генеративная диалоговая система искусственного интеллекта от компании OpenAI.",
      fullDescription: [
        "ChatGPT — флагманская языковая модель, представленная компанией OpenAI в ноябре 2022 года, давшая мощный импульс глобальной революции генеративного искусственного интеллекта. Работает на базе передовых архитектур GPT-4o и линейки рассуждающих моделей o1/o3.",
        "Система поддерживает не только текстовое общение, но и естественный голосовой диалог в реальном времени, анализ программного кода, работу с документами, таблицами и графиками, а также создание изображений через DALL-E.",
        "Сегодня ChatGPT является ключевым инструментом для сотен миллионов специалистов, предпринимателей и разработчиков по всему миру."
      ],
      capabilities: [
        "Создание, глубокое редактирование и суммаризация текстов любой сложности",
        "Написание и отладка кода на десятках языков программирования",
        "Мультимодальный анализ данных (текст, код, изображения, PDF, CSV)",
        "Продвинутый голосовой диалог в реальном времени (Advanced Voice Mode)",
        "Создание кастомных агентов GPTs и доступ к GPT Store",
        "Анализ данных в изолированной среде Python (Code Interpreter)",
        "Актуальный поиск информации в сети Интернет с указанием ссылок на источники"
      ],
      strengths: [
        "Крупнейшая пользовательская экосистема и постоянное развитие",
        "Максимально естественный диалог и высокая языковая гибкость",
        "Развитая инфраструктура API для корпоративной интеграции",
        "Наличие специализированных моделей логического рассуждения (o-серия)"
      ],
      limitations: [
        "Возможны фактические неточности (галлюцинации) в узкоспециализированных темах",
        "Ограничения по числу запросов в бесплатной версии в часы пик",
        "Строгие внутренние фильтры безопасности могут блокировать безобидные запросы"
      ],
      pricing: {
        freeTier: "Бесплатный доступ к базовым возможностям и GPT-4o mini",
        paidTier: "ChatGPT Plus — $20/мес; ChatGPT Pro — $200/мес; Team и Enterprise по запросу",
        note: "Тарифная сетка может меняться, актуальные данные уточняйте на официальном сайте."
      },
      useCases: [
        { id: '1', icon: 'Code', title: "Разработка ПО", description: "Проектирование архитектуры, генерация unit-тестов и рефакторинг legacy-кода." },
        { id: '2', icon: 'GraduationCap', title: "Образование", description: "Объяснение сложных концепций простым языком и интерактивное изучение иностранных языков." },
        { id: '3', icon: 'Briefcase', title: "Бизнес-аналитика", description: "Быстрый разбор Excel-таблиц, построение графиков и поиск аномалий в данных." },
        { id: '4', icon: 'Megaphone', title: "Маркетинг", description: "Создание контент-планов, рекламных офферов, сценариев видеороликов и SEO-статей." },
        { id: '5', icon: 'FileText', title: "Документооборот", description: "Составление типовых договоров, деловых писем и структурированных отчетов." },
        { id: '6', icon: 'Search', title: "Исследования", description: "Сжатие многостраничных научных публикаций до ключевых тезисов и выводов." },
        { id: '7', icon: 'Languages', title: "Перевод", description: "Контекстный высококачественный перевод на более чем 40 языков мира." },
        { id: '8', icon: 'Lightbulb', title: "Креативный брейншторм", description: "Генерация идей для стартапов, сюжетных поворотов книг и нейминга продуктов." }
      ],
      requirements: {
        technical: ["Современный веб-браузер", "Стабильное интернет-соединение", "Мобильное приложение для iOS или Android"],
        registration: ["Учетная запись OpenAI или вход через Google / Apple / Microsoft", "Подтверждение email"],
        restrictions: ["Возраст от 13 лет (до 18 лет с согласия родителей)", "Региональные ограничения в некоторых юрисдикциях"],
        pricingTiers: ["Free — базовые лимиты", "Plus — $20 в месяц", "Pro — $200 в месяц"],
        security: ["Не вводить конфиденциальные коммерческие и персональные данные", "Рекомендуется отключить обучение моделей на истории чатов в настройках"],
        ethics: ["Обязательная проверка фактических утверждений и сгенерированного кода"]
      },
      prompts: [
        { id: 1, title: "Рефакторинг кода", category: "Разработка", prompt: "Проанализируй следующий фрагмент кода. Найди узкие места по памяти и алгоритмической сложности, примени чистую архитектуру и прокомментируй изменения:\n\n[ВСТАВЬТЕ_КОД]" },
        { id: 2, title: "Объяснение сложной темы", category: "Обучение", prompt: "Представь, что мне 12 лет. Объясни простыми аналогиями с монетами и лабиринтами, как функционирует квантовый компьютер." },
        { id: 3, title: "Go-to-Market стратегия", category: "Бизнес", prompt: "Разработай поэтапную 6-месячную стратегию вывода на рынок B2B SaaS-продукта для управления складскими запасами." },
        { id: 4, title: "Холодное B2B письмо", category: "Продажи", prompt: "Напиши лаконичное холодное письмо директору по ИТ с предложением аудита кибербезопасности. Включи 3 болевые точки и четкий Call-to-Action." },
        { id: 5, title: "Оптимизация SQL", category: "Базы данных", prompt: "У меня медленный SQL-запрос выборки топ-10 клиентов из таблицы с 10 млн заказов. Предложи индексы и оптимизированный вариант запроса." },
        { id: 6, title: "Сжатие статьи", category: "Текст", prompt: "Выдели из следующего текста 3 ключевых инсайта, 1 главный вывод и 3 практических действия:\n\n[ТЕКСТ]" },
        { id: 7, title: "Симуляция интервью", category: "Карьера", prompt: "Выступи в роли строгого тимлида на собеседовании на позицию Senior Frontend Developer. Задавай по одному вопросу и оценивай мои ответы." },
        { id: 8, title: "Составление PRD", category: "Менеджмент", prompt: "Составь драфт документа требований к продукту (PRD) для функции автоматического учета подписок в мобильном банке." },
        { id: 9, title: "Анализ аргументов", category: "Аналитика", prompt: "Приведи по 5 сильнейших аргументов 'за' и 'против' 4-дневной рабочей недели с опорой на современные экономические исследования." },
        { id: 10, title: "Корпоративная тональность", category: "Редактура", prompt: "Перепиши следующее сообщение в уважительном, доброжелательном, но четком деловом стиле:\n\n[ТЕКСТ]" }
      ]
    },
    en: {
      shortDesc: "The world's leading generative conversational AI system created by OpenAI.",
      fullDescription: [
        "ChatGPT is OpenAI's flagship conversational model introduced in November 2022, igniting the contemporary generative artificial intelligence revolution. It operates on cutting-edge GPT-4o and advanced reasoning architectures (o1/o3 series).",
        "The system transcends classic text interaction by delivering real-time voice conversations, source-code generation and debugging, document and dataset analysis, and graphic generation via DALL-E.",
        "Today, ChatGPT serves hundreds of millions of professionals, researchers, and enterprises worldwide as their central digital intelligence assistant."
      ],
      capabilities: [
        "Comprehensive text synthesis, editing, and analytical summarization",
        "Multi-language code development and automated test generation",
        "Rapid multimodal understanding (text, audio, vision, PDFs, tabular datasets)",
        "Ultra-low latency Advanced Voice Mode with expressive nuance",
        "Custom GPT builder and public OpenAI GPT Store access",
        "Integrated Python sandbox for execution and visualization (Code Interpreter)",
        "Real-time web browsing with verified citations and source links"
      ],
      strengths: [
        "Largest global user community and developer ecosystem",
        "Highly coherent, articulate, and context-aware responses",
        "Robust enterprise APIs and compliance toolchains",
        "State-of-the-art multi-step reasoning capabilities"
      ],
      limitations: [
        "Susceptible to occasional factual hallucinations in niche disciplines",
        "Rate quotas on top-tier models during peak load in free tiers",
        "Content safety boundaries may occasionally reject benign complex prompts"
      ],
      pricing: {
        freeTier: "Free tier with access to GPT-4o mini and throttled GPT-4o",
        paidTier: "ChatGPT Plus at $20/mo; ChatGPT Pro at $200/mo; Custom Team & Enterprise tiers",
        note: "Prices and quotas are subject to change. Verify current terms on OpenAI's portal."
      },
      useCases: [
        { id: '1', icon: 'Code', title: "Software Engineering", description: "Architecture planning, algorithm refactoring, and test suite creation." },
        { id: '2', icon: 'GraduationCap', title: "Education", description: "Tailored tutoring, complex concept simplification, and interactive language acquisition." },
        { id: '3', icon: 'Briefcase', title: "Business Intelligence", description: "Spreadsheet ingestion, quantitative forecasting, and trend detection." },
        { id: '4', icon: 'Megaphone', title: "Marketing & Growth", description: "Omnichannel campaigns, copywriting, creative storyboarding, and SEO strategies." },
        { id: '5', icon: 'FileText', title: "Documentation", description: "Drafting corporate agreements, executive briefs, and procedural playbooks." },
        { id: '6', icon: 'Search', title: "Academic Research", description: "Extracting methodology and quantitative results from dense academic literature." },
        { id: '7', icon: 'Languages', title: "Localization", description: "Nuanced multilingual translations preserving cultural idioms and terminology." },
        { id: '8', icon: 'Lightbulb', title: "Creative Ideation", description: "Venture brainstorms, naming concepts, and narrative worldbuilding." }
      ],
      requirements: {
        technical: ["Modern desktop or mobile browser", "Reliable internet connection", "Native iOS or Android client optional"],
        registration: ["OpenAI account or OAuth with Google, Apple, or Microsoft", "Verified email address"],
        restrictions: ["Ages 13+ (parental supervision required for minors under 18)", "Geographic compliance limits apply in sanctioned territories"],
        pricingTiers: ["Free tier with standard speeds", "Plus at $20/month", "Pro at $200/month"],
        security: ["Refrain from uploading unencrypted sensitive PII or credentials", "Configure account settings to disable model training on conversation logs"],
        ethics: ["Perform due diligence on all AI-generated code and empirical facts"]
      },
      prompts: [
        { id: 1, title: "Code Refactoring", category: "Development", prompt: "Review this TypeScript function for performance bottlenecks and algorithmic complexity. Apply clean code principles and provide annotations:\n\n[PASTE_CODE]" },
        { id: 2, title: "Feynman Technique Explanation", category: "Learning", prompt: "Explain how quantum computing works to a 12-year-old student using a coin-toss and maze analogy. Keep it intuitive and grounded." },
        { id: 3, title: "Go-to-Market Blueprint", category: "Strategy", prompt: "Draft a 6-month Go-to-Market plan for a B2B SaaS inventory forecasting tool targeting mid-sized manufacturers." },
        { id: 4, title: "Executive Cold Outreach", category: "Sales", prompt: "Write a high-converting cold email to Enterprise CTOs proposing a cloud security audit. Address 3 acute pain points and provide a frictionless CTA." },
        { id: 5, title: "Database Query Optimization", category: "Databases", prompt: "Analyze this sluggish SQL query that aggregates top customers across 10 million transactions. Suggest indexing strategies and rewritten query syntax." },
        { id: 6, title: "Executive Briefing", category: "Productivity", prompt: "Synthesize the following text into 3 executive takeaways, 1 critical risk factor, and 3 actionable next steps:\n\n[PASTE_TEXT]" },
        { id: 7, title: "Technical Mock Interview", category: "Career", prompt: "Act as a Principal Staff Engineer interviewing me for a Senior Frontend Architect position. Ask one tough architectural question at a time and critique my solutions." },
        { id: 8, title: "Product Requirement Spec", category: "Product", prompt: "Write a comprehensive PRD for introducing automated recurring bill negotiation into a modern consumer mobile banking app." },
        { id: 9, title: "Objective Debate Matrix", category: "Analysis", prompt: "Construct an objective comparison matrix evaluating the economic and psychological trade-offs of a 4-day workweek versus traditional 5-day schedules." },
        { id: 10, title: "Tone Calibration", category: "Writing", prompt: "Rephrase this terse internal announcement into a professional, empathetic, and culturally encouraging team message:\n\n[PASTE_MESSAGE]" }
      ]
    }
  },

  // 2. Google Gemini
  {
    id: 'gemini',
    name: 'Google Gemini',
    company: 'Google',
    category: 'llm',
    accentColor: '#4E82EE',
    gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    websiteUrl: 'https://gemini.google.com',
    year: 2023,
    platforms: ['Web', 'Android', 'iOS', 'Google Workspace', 'API'],
    badge: {
      uz: 'Multimodal & Katta Kontekst',
      ru: 'Мультимодальный & Большой контекст',
      en: 'Multimodal & Long Context',
    },
    logoSvg: 'gemini',
    uz: {
      shortDesc: "Google kompaniyasining 2 million tokengacha bo'lgan gigant kontekst oynasiga ega, matn, video, audio va kodni birdek tushunuvchi sun'iy intellekti.",
      fullDescription: [
        "Google Gemini (ilgari Bard) — Google DeepMind va Google Research tomonidan noldan multimodal qilib ishlab chiqilgan eng ilg'or sun'iy intellekt tizimidir. U matn, tasvir, audio, video va dasturlash kodlarini bir vaqtda qayta ishlashga mo'ljallangan.",
        "Gemini 1.5 Pro va Gemini 2.0 modellari 1 milliondan 2 milliongacha tokenni o'z ichiga olgan ulkan kontekst darchasiga ega bo'lib, butun kitoblar, soatlab davom etuvchi videofilmlar yoki yuz minglab qatorli kod bazalarini bir zumda tahlil qila oladi.",
        "Google Workspace (Gmail, Docs, Sheets, Drive) bilan to'liq integratsiyalashgan holda, shaxsiy va korporativ ish unumdorligini yangi cho'qqiga olib chiqadi."
      ],
      capabilities: [
        "2 000 000 tokengacha bo'lgan mislsiz kontekst hajmi bilan ishlash",
        "Uzun videolarni (1 soatgacha) va audio yozuvlarni to'g'ridan-to'g'ri tahlil qilish",
        "Google Workspace bilan chuqur integratsiya (xatlarni umumlashtirish, hujjat tuzish)",
        "Google Search qidiruv tizimi orqali real vaqtdagi eng yangi faktlarni asoslash",
        "Yuqori aniqlikdagi ko'p tilli tarjima va adabiy tahrir",
        "Imagen 3 orqali fotorealistik tasvirlar yaratish",
        "Dasturiy kodlarni tahlil qilish va repo darajasidagi loyihalarni tushunish"
      ],
      strengths: [
        "Bozordagi eng katta kontekst oynasi (kitoblar va videolarni to'liq o'qish)",
        "Google ekotizimi va qidiruv ma'lumotlar bazasi bilan mustahkam bog'liqlik",
        "Ko'p tilli qo'llab-quvvatlash, jumladan o'zbek tilidagi ajoyib savodxonlik",
        "Video va audio formatlarni oraliq transkripsiyasiz to'g'ridan-to'g'ri tushunish"
      ],
      limitations: [
        "Google hisobiga qat'iy bog'liqlik",
        "Katta korporativ Workspace funksiyalari uchun alohida obuna talab qilinishi",
        "Mantiqiy zanjirli masalalarda vaqti-vaqti bilan ortiqcha umumlashtirish"
      ],
      pricing: {
        freeTier: "Gemini Flash modeli bilan cheksiz bepul foydalanish",
        paidTier: "Gemini Advanced: $19.99/oy (Google One 2TB saqlash maydoni bilan birga)",
        note: "Google One tariflari va hududiy narxlar farq qilishi mumkin."
      },
      useCases: [
        { id: '1', icon: 'Video', title: "Video tahlil", description: "1 soatlik ma'ruza videosini yuklab, aniq daqiqalardagi mavzularni va asosiy tezislarni olish." },
        { id: '2', icon: 'FileText', title: "Katta arxivlarni o'rganish", description: "500 sahifalik kitob yoki PDF hujjatni to'liq yuklab, undan kerakli dalillarni bir zumda topish." },
        { id: '3', icon: 'Mail', title: "Gmail & Docs yordamchisi", description: "Kiruvchi yuzlab xatlarni avtomatik saralash va javob loyihalarini bir zumda tayyorlash." },
        { id: '4', icon: 'Search', title: "Faktlarga asoslangan qidiruv", description: "Google Search ma'lumotlar bazasiga tayangan holda eng so'nggi yangiliklarni tahlil qilish." },
        { id: '5', icon: 'Code', title: "To'liq loyiha tahlili", description: "Butun repozitoriy kodini kiritib, arxitektura kamchiliklarini topish va hujjatlashtirish." },
        { id: '6', icon: 'Music', title: "Audio transkripsiya", description: "Muzokaralar audioyozuvini yuklab, undan protokol va vazifalar ro'yxatini chiqarib olish." },
        { id: '7', icon: 'Palette', title: "Grafik dizayn", description: "Imagen 3 orqali yuqori sifatli marketing bannerlari va vizual kontent yaratish." },
        { id: '8', icon: 'Globe', title: "Ko'p tilli ta'lim", description: "Bir vaqtning o'zida bir necha xorijiy tillardagi ilmiy manbalarni solishtirish." }
      ],
      requirements: {
        technical: ["Google Chrome yoki boshqa zamonaviy brauzer", "Internet aloqasi", "Android / iOS qurilmalari"],
        registration: ["Google hisobi (Gmail) mavjudligi", "Workspace foydalanuvchilari uchun administrator ruxsati"],
        restrictions: ["18 yoshdan yuqori (Gemini Advanced uchun)", "Ba'zi mintaqalarda AI xususiyatlari bosqichma-bosqich yoqiladi"],
        pricingTiers: ["Bepul versiya (Flash)", "Advanced versiya ($19.99/oy)"],
        security: ["Shaxsiy Google Drive ma'lumotlari xavfsiz himoyalangan", "Maxfiylik sozlamalarida faoliyatni saqlashni boshqarish mumkin"],
        ethics: ["Qidiruv natijalari asosidagi ma'lumotlarni doim manba orqali tekshirish"]
      },
      prompts: [
        { id: 1, title: "Butun kitobni tahlil qilish", category: "Tadqiqot", prompt: "Ushbu yuklangan 300 betlik iqtisodiyot kitobidagi barcha 'inflyatsiya'ga oid qismlarni top va muallifning markaziy banklar faoliyatiga nisbatan 5 ta asosiy tanqidini keltir." },
        { id: 2, title: "Video xulosasi", category: "Multimedia", prompt: "Ushbu videoni boshidan oxirigacha tahlil qil. Undagi asosiy bo'limlarning vaqt belgilarini (timestamps) yoz va har bir bo'lim bo'yicha 2 tadan muhim xulosa ber." },
        { id: 3, title: "Google Sheets formulasi", category: "Ofis", prompt: "Google Sheets uchun murakkab formula tuz: A ustundagi sanalar so'nggi 7 kunga to'g'ri kelsa va B ustunda 'Bajarildi' bo'lmasa, C ustundagi summalarni hisoblasin." },
        { id: 4, title: "Ilmiy manbalarni solishtirish", category: "Ilm-fan", prompt: "Quyidagi ikkita qarama-qarshi ilmiy maqolani solishtir. Ularning metodologiyasi, tanlov hajmi va xulosalaridagi asosiy ziddiyatlarni jadval qilib ko'rsat." },
        { id: 5, title: "O'zbek adabiyoti uslubida yozish", category: "Adabiyot", prompt: "Zamonaviy sun'iy intellekt texnologiyalarining insoniyat hayotiga ta'siri haqida Abdulla Qodiriy uslubidagi badiiy esse yozib ber." },
        { id: 6, title: "Audio protokol tuzish", category: "Boshqaruv", prompt: "Yuklangan yig'ilish audio faylidan quyidagilarni ajratib ber: 1) Ko'tarilgan asosiy muammolar, 2) Qabul qilingan qarorlar, 3) Kimga qanday topshiriq berildi va muddati." },
        { id: 7, title: "Dasturiy xatolikni tuzatish", category: "Dasturlash", prompt: "Quyidagi 500 qatorli React kodida komponentning keraksiz qayta renderlanishiga sabab bo'layotgan xotira oqishini (memory leak) top va useMemo/useCallback orqali to'g'irla." },
        { id: 8, title: "Professional e-mail zanjiri", category: "Muloqot", prompt: "Xorijiy investorlar bilan uchrashuvdan so'ng yuboriladigan ta'sirchan follow-up xati yoz. Suhbat uchun minnatdorlik bildir va kelgusi 3 ta qadamni belgilab ber." },
        { id: 9, title: "Fotorealistik rasm generatsiyasi", category: "Dizayn", prompt: "Imagen uchun promt: Toshkentning 2050-yildagi futuristik ko'chasi, neon chiroqlar, uchuvchi ekologik transportlar, quyosh botishi manzarasi, 8k fotorealizm, kinematografik kompozitsiya." },
        { id: 10, title: "Murakkab tizim tushuntirishi", category: "Ta'lim", prompt: "DNS (Domain Name System) qanday ishlashini do'konga borib non sotib olish jarayoni orqali oddiy va qiziqarli qilib tushuntir." }
      ]
    },
    ru: {
      shortDesc: "Мультимодальный флагман от Google с контекстным окном до 2 миллионов токенов и глубокой интеграцией в Workspace.",
      fullDescription: [
        "Google Gemini — интеллектуальная мультимодальная система нового поколения, разработанная Google DeepMind. Модель изначально проектировалась для бесшовной обработки разнородных данных: текста, аудио, видео, изображений и кода.",
        "Ключевое технологическое преимущество моделей Gemini 1.5 Pro и 2.0 — гигантское контекстное окно до 2 000 000 токенов, позволяющее за один запрос анализировать часовые видеозаписи, сотни страниц финансовой документации или огромные репозитории.",
        "Платформа тесно связана с инфраструктурой Google: поиском в реальном времени, сервисами Gmail, Docs, Sheets и Google Cloud."
      ],
      capabilities: [
        "Обработка беспрецедентного контекста размером до 2 000 000 токенов",
        "Нативный видео- и аудиоанализ без промежуточной транскрипции",
        "Прямая интеграция с экосистемой Google Workspace",
        "Проверка фактов и заземление данных через поиск Google Search",
        "Высокое качество перевода и литературной адаптации",
        "Создание высокодетализированных изображений с помощью Imagen 3",
        "Полномасштабный аудит архитектуры ПО на уровне репозитория"
      ],
      strengths: [
        "Лидерство по объему контекстного окна на глобальном рынке",
        "Глубокая синергия с инструментами Google Drive, Gmail и YouTube",
        "Высокая точность поиска информации в многочасовых аудио и видео",
        "Сбалансированная модель безопасности и актуальные поисковые данные"
      ],
      limitations: [
        "Зависимость от учетной записи Google",
        "Продвинутые функции требуют подписки Google One AI Premium",
        "В сложных логических цепочках иногда склонен к избыточному обобщению"
      ],
      pricing: {
        freeTier: "Бесплатный доступ к модели Gemini Flash",
        paidTier: "Gemini Advanced: $19.99/месяц (включает 2 ТБ хранилища Google One)",
        note: "Стоимость и доступность тарифов зависят от региона."
      },
      useCases: [
        { id: '1', icon: 'Video', title: "Анализ видео", description: "Поиск ключевых моментов и таймкодов в часовых видеолекциях и вебинарах." },
        { id: '2', icon: 'FileText', title: "Анализ фолиантов", description: "Загрузка монографий и стандартов объемом в 500+ страниц для мгновенного фактчекинга." },
        { id: '3', icon: 'Mail', title: "Ассистент Workspace", description: "Автоматическая сортировка писем в Gmail и генерация черновиков ответов." },
        { id: '4', icon: 'Search', title: "Актуальные факты", description: "Глубокий фактчекинг с опорой на актуальную поисковую выдачу Google." },
        { id: '5', icon: 'Code', title: "Аудит репозиториев", description: "Анализ связей между модулями всего проекта и поиск архитектурных дефектов." },
        { id: '6', icon: 'Music', title: "Протоколы встреч", description: "Трансформация аудиозаписи совещания в четкий список задач и дедлайнов." },
        { id: '7', icon: 'Palette', title: "Генерация арта", description: "Создание рекламных материалов фотокачества с Imagen 3." },
        { id: '8', icon: 'Globe', title: "Мультиязычные исследования", description: "Сравнение научной литературы на нескольких языках параллельно." }
      ],
      requirements: {
        technical: ["Браузер Chrome / Safari / Edge", "Интернет-соединение", "Android или iOS"],
        registration: ["Google-аккаунт", "Для корпоративных клиентов — разрешение администратора"],
        restrictions: ["От 18 лет для Gemini Advanced", "Поэтапное развертывание функций в ряде регионов"],
        pricingTiers: ["Бесплатный Flash", "Advanced — $19.99/мес"],
        security: ["Защита данных Google Cloud", "Возможность отключить сохранение истории"],
        ethics: ["Рекомендуется проверять факты по первоисточникам"]
      },
      prompts: [
        { id: 1, title: "Анализ книги", category: "Исследования", prompt: "Проанализируй прикрепленную книгу по экономике и выдели 5 ключевых тезисов автора касательно монетарной политики." },
        { id: 2, title: "Таймкоды видео", category: "Мультимедиа", prompt: "Посмотри это видео и составь поминутное оглавление с кратким изложением каждого тематического блока." },
        { id: 3, title: "Формула Google Sheets", category: "Офис", prompt: "Составь формулу для Google Таблиц, суммирующую продажи только за последние 14 дней для статуса 'Оплачено'." },
        { id: 4, title: "Сравнение научных трудов", category: "Наука", prompt: "Сравни две прикрепленные статьи по биотехнологиям. Оформи различия в методологии в виде таблицы." },
        { id: 5, title: "Исторический очерк", category: "Текст", prompt: "Напиши увлекательный исторический очерк о строительстве Обсерватории Улугбека в Самарканде с акцентом на научные открытия." },
        { id: 6, title: "Протокол совещания", category: "Менеджмент", prompt: "Из этой аудиозаписи сформируй протокол: повестка дня, принятые решения, ответственные лица и сроки исполнения." },
        { id: 7, title: "Утечки памяти в React", category: "Разработка", prompt: "Найди утечку памяти в этом хуке useEffect и перепиши компонент с корректной очисткой подписок." },
        { id: 8, title: "Follow-up инвесторам", category: "Бизнес", prompt: "Составь профессиональное follow-up письмо венчурному фонду после демонстрации питч-дека стартапа." },
        { id: 9, title: "Промпт для Imagen 3", category: "Дизайн", prompt: "Промпт для генерации: футуристический умный город в лучах заката, чистая эстетика, кинематографичный свет, 8k, фотореализм." },
        { id: 10, title: "Объяснение алгоритма", category: "Обучение", prompt: "Объясни принцип работы алгоритма Дейкстры на жизненном примере построения маршрута курьера." }
      ]
    },
    en: {
      shortDesc: "Google's premier multimodal powerhouse featuring an unprecedented 2-million-token context window.",
      fullDescription: [
        "Google Gemini, engineered by Google DeepMind and Google Research, is a native multimodal foundation model constructed from the ground up to reason seamlessly across text, code, high-resolution imagery, audio, and video.",
        "Gemini 1.5 Pro and Gemini 2.0 introduce breakthrough context capacity spanning up to 2,000,000 tokens, unlocking the ability to ingest complete textbooks, hour-long video recordings, or entire enterprise codebases in a single prompt.",
        "Deeply intertwined with Google Workspace (Gmail, Drive, Docs) and real-time Google Search grounding, Gemini redefines productivity and enterprise research."
      ],
      capabilities: [
        "Ultra-long context comprehension up to 2,000,000 tokens",
        "Direct audiovisual reasoning without intermediate speech-to-text",
        "Deep Google Workspace integration across Docs, Sheets, and Gmail",
        "Real-time web grounding powered by Google Search engines",
        "Multilingual translation and nuanced editorial adaptations",
        "High-fidelity image generation via Imagen 3",
        "Full-repository code analysis and dependency auditing"
      ],
      strengths: [
        "Unrivaled context window capacity across the AI sector",
        "Seamless native integration with Google Workspace and Android",
        "Exceptional multimodal audio/video processing precision",
        "Constant access to fresh real-time web telemetry"
      ],
      limitations: [
        "Requires Google account authentication ecosystem",
        "Premium features require Google One AI subscription tiers",
        "Can occasionally default to generic summaries in complex math reasoning"
      ],
      pricing: {
        freeTier: "Complimentary access to Gemini Flash engine",
        paidTier: "Gemini Advanced at $19.99/mo (includes 2TB Google One cloud storage)",
        note: "Subscription terms may vary by geography and enterprise agreements."
      },
      useCases: [
        { id: '1', icon: 'Video', title: "Video Intelligence", description: "Parsing multi-hour video footage for specific spoken moments, visual artifacts, and summaries." },
        { id: '2', icon: 'FileText', title: "Massive Archival Ingestion", description: "Ingesting 500+ page technical manuals to extract precise specifications in seconds." },
        { id: '3', icon: 'Mail', title: "Workspace Copilot", description: "Summarizing complex email threads and drafting nuanced correspondence in Gmail." },
        { id: '4', icon: 'Search', title: "Search-Grounded Inquiry", description: "Verifying current breaking news with direct authoritative search citations." },
        { id: '5', icon: 'Code', title: "Repo-Scale Code Review", description: "Loading entire Git repos to uncover latent architectural bottlenecks." },
        { id: '6', icon: 'Music', title: "Audio Transcription & Action Items", description: "Turning recorded executive meetings into structured task matrices." },
        { id: '7', icon: 'Palette', title: "Visual Creative Assets", description: "Generating cinematic marketing imagery utilizing Imagen 3." },
        { id: '8', icon: 'Globe', title: "Cross-Lingual Comparative Study", description: "Analyzing foreign scholarly papers across multiple tongues concurrently." }
      ],
      requirements: {
        technical: ["Modern desktop or mobile web browser", "Broadband internet connection", "Android / iOS mobile OS"],
        registration: ["Google Account (Gmail)", "Admin activation for enterprise Workspace tenants"],
        restrictions: ["18+ for Gemini Advanced subscription", "Territorial rollouts apply to select localized capabilities"],
        pricingTiers: ["Free Flash tier", "Advanced tier at $19.99/mo"],
        security: ["Protected under Google Cloud security baselines", "Configurable history retention settings"],
        ethics: ["Corroborate search summaries against original published links"]
      },
      prompts: [
        { id: 1, title: "Book-Length Synthesis", category: "Research", prompt: "Analyze this attached 400-page treatise on monetary history. Detail the author's 5 core critiques of fiat currencies with page citations." },
        { id: 2, title: "Video Breakdown", category: "Multimedia", prompt: "Process this recorded conference keynote. Generate a timestamped outline highlighting key technical announcements and quantitative benchmarks." },
        { id: 3, title: "Advanced Sheets Formula", category: "Productivity", prompt: "Construct an advanced Google Sheets formula calculating the weighted average margin across filtered active projects with no missing milestones." },
        { id: 4, title: "Comparative Literature Review", category: "Science", prompt: "Compare these two contradictory clinical trial PDFs. Highlight disparities in sample size, randomization protocols, and statistical significance." },
        { id: 5, title: "Creative Narrative Fiction", category: "Creative", prompt: "Write an evocative hard-sci-fi short story describing an automated observatory on Europa discovering subsurface heat signatures." },
        { id: 6, title: "Board Meeting Minute Extraction", category: "Executive", prompt: "From this audio recording, produce an executive summary listing: attendees, agenda items, voting outcomes, and assigned action owners." },
        { id: 7, title: "Memory Leak Detection", category: "Coding", prompt: "Examine this multi-file React state management code. Identify potential re-render cascades and optimize with selective memoization." },
        { id: 8, title: "Investor Follow-Up Protocol", category: "Business", prompt: "Draft a concise, compelling investor follow-up email summarizing post-meeting takeaways and addressing runway timeline milestones." },
        { id: 9, title: "Imagen 3 Cinematic Prompt", category: "Visual", prompt: "Prompt for Imagen 3: Architectural photography of a biophilic desert research laboratory at golden hour, volumetric lighting, Hasselblad 80mm lens, photorealistic 8k." },
        { id: 10, title: "Conceptual Analogy", category: "Education", prompt: "Explain the Raft consensus algorithm using the analogy of a group of hikers electing a trail leader in dense fog." }
      ]
    }
  },

  // 3. Claude (Anthropic)
  {
    id: 'claude',
    name: 'Claude',
    company: 'Anthropic',
    category: 'llm',
    accentColor: '#D97706',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    websiteUrl: 'https://claude.ai',
    year: 2023,
    platforms: ['Web', 'iOS', 'Android', 'macOS', 'Windows', 'API'],
    badge: {
      uz: 'Kod & Nuansli Matn',
      ru: 'Код & Нюансированный текст',
      en: 'Code & Nuanced Writing',
    },
    logoSvg: 'claude',
    uz: {
      shortDesc: "Anthropic tomonidan 'Konstitutsiyaviy AI' tamoyillari asosida yaratilgan, eng aniq kod yozish va adabiy mulohaza yuritish modeli.",
      fullDescription: [
        "Claude — OpenAI sobiq yetakchi tadqiqotchilari tomonidan asos solingan Anthropic kompaniyasi mahsuli bo'lib, xavfsizlik va 'Constitutional AI' (Konstitutsiyaviy AI) tamoyillariga qat'iy tayanadi.",
        "Claude 3.5 Sonnet va Opus modellari dasturchilar orasida benchmarklarda eng yuqori ko'rsatkichlarga ega bo'lib, dasturiy kod yozish, vizual interfeyslarni (Artifacts) real vaqtda yaratish va murakkab huquqiy yoki falsafiy matnlarni tahlil qilishda jahon yetakchisidir.",
        "Uning o'ziga xosligi — insoniy samimiyat, kamroq quruq 'robotik' javoblar va foydalanuvchi ko'rsatmalariga nihoyatda sinchkovlik bilan rioya qilishidir."
      ],
      capabilities: [
        "Artifacts texnologiyasi orqali React komponentlari, SVG va o'yinlarni real vaqtda yaratish va ishga tushirish",
        "Dasturiy arxitektura va kod yozish bo'yicha sanoatdagi eng yuqori aniqlik",
        "200 000 tokengacha bo'lgan chuqur va sinchkov kontekst tahlili",
        "Qonuniy, tibbiy va ilmiy matnlarni xatosiz tushunish",
        "Murakkab matematik va mantiqiy mulohaza yuritish",
        "Diagrammalar, chizmalar va murakkab jadvallarni aniq o'qish",
        "Tabiiy, adabiy va stilistik jihatdan boy matn generatsiyasi"
      ],
      strengths: [
        "Dasturchilar tomonidan eng sevimli va ishonchli kod yordamchisi",
        "Artifacts yordamida interaktiv natijalarni darhol ko'rish imkoniyati",
        "Sun'iy intellekt xavfsizligi va axloqiy standartlarga sodiqlik",
        "Javoblarning adabiy boyligi va chuqur mantiqiyligi"
      ],
      limitations: [
        "Bepul versiyada kunlik xabarlar limiti tez tugashi mumkin",
        "O'rnatilgan tasvir generatsiyasi (DALL-E kabi) mavjud emas",
        "Ba'zi mintaqalarda to'lov kartalari bilan xarid qilishda cheklovlar"
      ],
      pricing: {
        freeTier: "Claude 3.5 Sonnet modeliga cheklangan bepul kirish",
        paidTier: "Claude Pro: $20/oy (5 barobar ko'p hajm va eng yangi modellar)",
        note: "API orqali foydalanish tokenlar soniga qarab hisoblanadi."
      },
      useCases: [
        { id: '1', icon: 'Code', title: "Frontend dasturlash", description: "React, Tailwind va TypeScript'da to'liq ishlovchi UI interfeyslarni bir martada yaratish." },
        { id: '2', icon: 'Sparkles', title: "Interaktiv ilovalar (Artifacts)", description: "Matematik modellar, interaktiv simulyatsiyalar va o'yinlarni brauzerda ishga tushirish." },
        { id: '3', icon: 'FileText', title: "Huquqiy tahlil", description: "Shartnomalardagi yashirin xavflar va qonuniy ziddiyatlarni sinchkovlik bilan tekshirish." },
        { id: '4', icon: 'BookOpen', title: "Adabiy tahrir", description: "Kitoblar, ilmiy dissertatsiyalar va maqolalarning uslubiy boyligini oshirish." },
        { id: '5', icon: 'Bug', title: "Murakkab xatolarni topish", description: "Ko'p qatlamli backend arxitekturasidagi yashirin poyga holatlarini (race conditions) aniqlash." },
        { id: '6', icon: 'BarChart2', title: "Biznes dokladlar", description: "Boshqaruv kengashi uchun analitik ma'lumotnomalar va yillik hisobotlarni tayyorlash." },
        { id: '7', icon: 'GraduationCap', title: "Falsafa va mantiq", description: "Murakkab falsafiy kontseptsiyalarni mantiqiy jihatdan mukammal tahlil qilish." },
        { id: '8', icon: 'FileSpreadsheet', title: "Jadvallar tahlili", description: "Katta moliyaviy jadvallardagi o'zaro bog'liqliklarni tushuntirib berish." }
      ],
      requirements: {
        technical: ["Zamonaviy veb-brauzer", "Internet", "iOS / Android mobil ilovasi"],
        registration: ["Telefon raqami orqali SMS tasdiqlash", "Elektron pochta yoki Google hisobi"],
        restrictions: ["18 yoshdan oshgan foydalanuvchilar", "Anthropic ruxsat bergan davlatlar ro'yxatida bo'lish"],
        pricingTiers: ["Bepul tarif (Sonnet)", "Pro tarif ($20/oy)"],
        security: ["Foydalanuvchi ma'lumotlarini model o'qitishda ishlatmaslik kafolati (sozlamalarda)", "Yuqori darajadagi shifrlash"],
        ethics: ["Xavfli yoki zararli dasturiy ta'minot yaratish so'rovlarini qat'iy rad etish"]
      },
      prompts: [
        { id: 1, title: "React komponenti yaratish", category: "Dasturlash", prompt: "Menga Tailwind CSS va TypeScript yordamida to'liq ishlovchi, ko'p qadamli forma (multi-step wizard) komponentini yaratib ber. Validatsiya va silliq animatsiyalar bo'lsin." },
        { id: 2, title: "Shartnoma auditi", category: "Huquq", prompt: "Quyidagi xizmat ko'rsatish shartnomasini buyurtmachi manfaatlari nuqtai nazaridan tekshir. Fors-major, javobgarlik chegarasi va to'lov kechikishi bandlaridagi 3 ta xavfli tuzoqni ko'rsat." },
        { id: 3, title: "Arxitektura tahlili", category: "Dasturlash", prompt: "Mikroservislar va modulli monolit (modular monolith) o'rtasidagi farqlarni solishtir. 50 kishilik muhandislik jamoasi va 500k kunlik foydalanuvchi uchun qaysi biri maqbul?" },
        { id: 4, title: "Adabiy tahrir", category: "Yozuvchilik", prompt: "Quyidagi hikoya parchasini tahlil qil. Qahramonning ruhiy kechinmalarini chuqurroq ochish uchun metaforalar va dinamik tasvirlarni boyitib qayta yoz." },
        { id: 5, title: "Python testlar to'plami", category: "Dasturlash", prompt: "Ushbu FastAPI endpointi uchun pytest kutubxonasida to'liq testlar yoz: muvaffaqiyatli holat, noto'g'ri token, cheklovdan oshish va ma'lumotlar bazasi xatosi." },
        { id: 6, title: "Ilmiy tushuntirish", category: "Ta'lim", prompt: "Transformer arxitekturasidagi 'Self-Attention' mexanizmini matematik matritsalar va oddiy kutubxona qidiruvi misolida bosqichma-bosqich tushuntir." },
        { id: 7, title: "Boshqaruv xulosasi", category: "Biznes", prompt: "Kompaniya daromadi 15% ga oshgani, ammo foyda marjasi 8% ga tushgani haqidagi ma'lumotlar asosida Bosh direktor uchun 1 sahifalik tezkor hisobot yoz." },
        { id: 8, title: "Algoritmik optimallashtirish", category: "Dasturlash", prompt: "O(n^2) vaqt murakkabligiga ega bo'lgan quyidagi massiv algoritmini O(n log n) yoki O(n) ga qadar tushiruvchi yechim va uning isbotini keltir." },
        { id: 9, title: "Texnik hujjatlashtirish", category: "Hujjat", prompt: "Ichki to'lov Gateway API uchun OpenAPI 3.0 formatiga mos, barcha status kodlari va xato xabarlari bilan professional texnik dokumentatsiya yoz." },
        { id: 10, title: "Falsafiy dilemma", category: "Fikr", prompt: "Avtonom avtomobillarning 'Arava muammosi' (Trolley problem) vaziyatidagi axloqiy tanlovlarini deontologiya va utilitarizm nuqtai nazaridan chuqur tahlil qil." }
      ]
    },
    ru: {
      shortDesc: "Флагманская модель от Anthropic на принципах Конституционного ИИ, лидер в написании кода и глубоком анализе.",
      fullDescription: [
        "Claude — разработка исследовательской компании Anthropic, основанной выходцами из OpenAI с фокусом на предсказуемость, этичность и концепцию Constitutional AI.",
        "Модели линейки Claude 3.5 Sonnet и Opus признаны международным сообществом одними из лучших в индустрии для задач программирования, системного проектирования и создания интерактивных интерфейсов через технологию Artifacts.",
        "Система отличается исключительно бережным отношением к стилистике, минимальной роботизированностью формулировок и строгим следованием сложным инструкциям."
      ],
      capabilities: [
        "Генерация и исполнение интерактивных интерфейсов на лету через Artifacts",
        "Бенчмарк-лидерство в написании сложного и чистого программного кода",
        "Глубокий анализ контекста объемом до 200 000 токенов",
        "Точный аудит юридических, медицинских и нормативных документов",
        "Продвинутое решение многоступенчатых математических задач",
        "Детальное распознавание графиков, диаграмм и сложных схем",
        "Богатый и естественный литературный язык без шаблонных клише"
      ],
      strengths: [
        "Высочайшая надежность и качество архитектурного кода",
        "Интерактивная среда Artifacts прямо внутри чата",
        "Повышенный уровень информационной безопасности и этики",
        "Точное следование многоуровневым инструкциям промпта"
      ],
      limitations: [
        "Строгие динамические лимиты на сообщения в бесплатном плане",
        "Отсутствие встроенной генерации растровых изображений",
        "Региональные ограничения при приеме зарубежных платежных карт"
      ],
      pricing: {
        freeTier: "Бесплатный доступ к модели Claude 3.5 Sonnet с лимитами",
        paidTier: "Claude Pro: $20/месяц (в 5 раз больше сообщений и приоритетный доступ)",
        note: "API оплачивается по факту использования токенов."
      },
      useCases: [
        { id: '1', icon: 'Code', title: "Frontend-разработка", description: "Создание готовых компонентов на React, TypeScript и Tailwind за один проход." },
        { id: '2', icon: 'Sparkles', title: "Интерактивные виджеты", description: "Рендеринг SVG-инфографики, интерактивных калькуляторов и мини-игр." },
        { id: '3', icon: 'FileText', title: "Юридический аудит", description: "Поиск скрытых рисков и невыгодных условий в договорах поставки и NDA." },
        { id: '4', icon: 'BookOpen', title: "Литературная редактура", description: "Глубокая стилистическая правка текстов без потери голоса автора." },
        { id: '5', icon: 'Bug', title: "Сложный дебаггинг", description: "Обнаружение состояния гонки и утечек ресурсов в асинхронном коде." },
        { id: '6', icon: 'BarChart2', title: "Аналитические записки", description: "Подготовка стратегических меморандумов для топ-менеджмента." },
        { id: '7', icon: 'GraduationCap', title: "Научная логика", description: "Разбор математических доказательств и формализация теорий." },
        { id: '8', icon: 'FileSpreadsheet', title: "Обработка таблиц", description: "Интерпретация сложных многомерных финансовых массивов." }
      ],
      requirements: {
        technical: ["Современный браузер", "Интернет", "iOS / Android приложения"],
        registration: ["Подтверждение по номеру телефона (SMS)", "Google-аккаунт или email"],
        restrictions: ["Возраст 18+", "Поддерживаемые регионы Anthropic"],
        pricingTiers: ["Free с динамическими лимитами", "Pro — $20/месяц"],
        security: ["Строгая конфиденциальность, данные не используются для обучения без согласия"],
        ethics: ["Отказ от генерации вредоносного ПО и деструктивного контента"]
      },
      prompts: [
        { id: 1, title: "Создание React-компонента", category: "Разработка", prompt: "Создай законченный React-компонент интерактивной канбан-доски с Tailwind CSS, возможностью перетаскивания и валидацией." },
        { id: 2, title: "Анализ договора", category: "Юриспруденция", prompt: "Изучи договор оказания услуг. Укажи 3 наиболее рискованных пункта для исполнителя касательно неустойки и интеллектуальной собственности." },
        { id: 3, title: "Архитектурный выбор", category: "Архитектура", prompt: "Сравни микросервисную архитектуру и модульный монолит для стартапа с 5 разработчиками и высокой динамикой релизов." },
        { id: 4, title: "Стилистическая редактура", category: "Текст", prompt: "Отредактируй этот абзац художественного текста: добавь осязаемых сенсорных деталей и избавься от канцеляризмов:\n\n[ТЕКСТ]" },
        { id: 5, title: "Тесты на Pytest", category: "Тестирование", prompt: "Напиши полный набор тестов на pytest с моками базы данных для сервиса обработки платежей." },
        { id: 6, title: "Объяснение Self-Attention", category: "Обучение", prompt: "Объясни механизм Self-Attention в трансформерах математически строго, но с наглядными матричными примерами." },
        { id: 7, title: "Отчет для СЕО", category: "Бизнес", prompt: "Составь лаконичную аналитическую записку на одну страницу о причинах падения конверсии в воронке продаж." },
        { id: 8, title: "Оптимизация алгоритма", category: "Алгоритмы", prompt: "Преобразуй этот алгоритм с O(N^2) в решение за O(N) с использованием хеш-мапы. Докажи корректность." },
        { id: 9, title: "Документация OpenAPI", category: "API", prompt: "Напиши спецификацию OpenAPI 3.0 в формате YAML для REST API аутентификации пользователей с JWT." },
        { id: 10, title: "Этический разбор", category: "Философия", prompt: "Проанализируй этику использования автономных систем вооружения через призму утилитаризма и деонтологии." }
      ]
    },
    en: {
      shortDesc: "Anthropic's flagship constitutional AI model, universally acclaimed for coding prowess and articulate reasoning.",
      fullDescription: [
        "Claude is created by Anthropic, an AI safety lab founded by former senior OpenAI leaders. Built on Constitutional AI principles, Claude is engineered to be helpful, harmless, and honest while sustaining exceptional reasoning depth.",
        "Claude 3.5 Sonnet and Opus consistently lead premier global developer benchmarks in software engineering, contextual document processing, and live dynamic artifact rendering via Artifacts.",
        "The model is celebrated for its natural human-like voice, minimal canned corporate phrasing, and rigorous adherence to complex multi-step instructions."
      ],
      capabilities: [
        "Real-time code and UI compilation inside the interactive Artifacts sandbox",
        "Industry-leading code generation and multi-tier architectural auditing",
        "200,000-token high-fidelity context processing window",
        "Precision analysis across legal, scientific, and regulatory documentation",
        "Sophisticated mathematical problem-solving and formal logic verification",
        "Complex diagram, wireframe, and engineering blueprint comprehension",
        "Expressive, nuanced, and stylistically versatile prose generation"
      ],
      strengths: [
        "Uncontested favorite among professional software engineers",
        "Instant interactive visual feedback through Artifacts",
        "Rigorous adherence to enterprise safety and ethical standards",
        "Warm, articulate, and non-robotic communication tone"
      ],
      limitations: [
        "Dynamic message quotas in the free tier during peak hours",
        "No built-in native raster image generation (like Midjourney/DALL-E)",
        "Geographic restrictions on payment billing processors"
      ],
      pricing: {
        freeTier: "Free access to Claude 3.5 Sonnet with message limits",
        paidTier: "Claude Pro at $20/mo (5x usage capacity and model choice)",
        note: "API billing is metered dynamically per million input/output tokens."
      },
      useCases: [
        { id: '1', icon: 'Code', title: "Full-Stack Development", description: "Writing end-to-end React, TypeScript, and backend architectures in single turns." },
        { id: '2', icon: 'Sparkles', title: "Live Artifact Prototyping", description: "Instantly testing calculators, games, and SVG diagrams in the browser." },
        { id: '3', icon: 'FileText', title: "Legal Contract Auditing", description: "Pinpointing subtle indemnity traps and termination clauses in agreements." },
        { id: '4', icon: 'BookOpen', title: "Literary Stylistics", description: "Enhancing manuscripts with vivid metaphors without flattening authorial voice." },
        { id: '5', icon: 'Bug', title: "Deep Debugging", description: "Isolating concurrent race conditions and async memory leaks." },
        { id: '6', icon: 'BarChart2', title: "Executive Decision Briefs", description: "Drafting high-stakes strategic memos for corporate boards." },
        { id: '7', icon: 'GraduationCap', title: "Formal Scientific Proofs", description: "Walking through mathematical derivations and theoretical formulations." },
        { id: '8', icon: 'FileSpreadsheet', title: "Financial Datasets", description: "Deciphering dense financial statements with structural clarity." }
      ],
      requirements: {
        technical: ["Modern desktop or mobile web browser", "Stable internet", "Native iOS / Android apps"],
        registration: ["Phone number SMS verification", "Google Account or email address"],
        restrictions: ["Ages 18+", "Geographic regions approved by Anthropic"],
        pricingTiers: ["Free tier with dynamic rate limits", "Pro at $20/month"],
        security: ["Zero training on user inputs for paid/enterprise tiers", "TLS encryption in transit and at rest"],
        ethics: ["Strict refusal of malicious exploit creation and disinformation"]
      },
      prompts: [
        { id: 1, title: "Multi-Step Wizard Component", category: "Development", prompt: "Build a production-ready multi-step checkout wizard in React, TypeScript, and Tailwind. Include form validation, keyboard traps, and smooth step animations." },
        { id: 2, title: "SaaS Contract Audit", category: "Legal", prompt: "Examine this vendor Master Services Agreement. Highlight 3 unfavorable indemnity and liability clauses for the customer." },
        { id: 3, title: "Architectural Decision Record", category: "Architecture", prompt: "Write an ADR evaluating whether to transition an e-commerce platform from a monolith to event-driven microservices." },
        { id: 4, title: "Prose Stylistic Elevation", category: "Writing", prompt: "Revise this descriptive passage to introduce sensory texture, pacing tension, and dynamic verbs without unnecessary adjectives:\n\n[PASTE_TEXT]" },
        { id: 5, title: "Comprehensive Pytest Suite", category: "Testing", prompt: "Write an exhaustive pytest test suite with mock DB fixtures for this asynchronous token authentication service." },
        { id: 6, title: "Transformer Self-Attention", category: "Education", prompt: "Derive the mathematical formula for Scaled Dot-Product Attention and explain each matrix dimension (Q, K, V) intuitively." },
        { id: 7, title: "Board Memo on Margin Decline", category: "Business", prompt: "Draft a 1-page executive memorandum explaining why gross margin compressed by 300 basis points despite record revenue." },
        { id: 8, title: "Algorithmic Refactoring", category: "Algorithms", prompt: "Refactor this quadratic O(n^2) interval intersection algorithm down to optimal O(n log n) with formal space-time proofs." },
        { id: 9, title: "OpenAPI Specification", category: "API", prompt: "Author a complete OpenAPI 3.1 YAML specification for an enterprise webhook delivery system with retry policies." },
        { id: 10, title: "Ethical Inquiry", category: "Philosophy", prompt: "Contrast utilitarian versus virtue ethics frameworks regarding algorithmic decision-making in credit scoring models." }
      ]
    }
  },

  // 4. Microsoft Copilot
  {
    id: 'copilot',
    name: 'Microsoft Copilot',
    company: 'Microsoft',
    category: 'llm',
    accentColor: '#0078D4',
    gradient: 'from-blue-600/20 via-cyan-500/10 to-transparent',
    websiteUrl: 'https://copilot.microsoft.com',
    year: 2023,
    platforms: ['Windows', 'Web', 'Microsoft 365', 'iOS', 'Android'],
    badge: {
      uz: 'Office & Korporativ',
      ru: 'Офис & Корпоративный',
      en: 'Office & Enterprise',
    },
    logoSvg: 'copilot',
    uz: {
      shortDesc: "Microsoft Windows va Microsoft 365 (Word, Excel, PowerPoint) ekotizimiga to'liq integratsiyalashgan korporativ AI yordamchisi.",
      fullDescription: [
        "Microsoft Copilot (avvalgi Bing Chat) — Microsoft kompaniyasining OpenAI modellari (GPT-4) va Microsoft Graph korporativ infratuzilmasiga asoslangan sun'iy intellekt hamrohi.",
        "U bevosita Windows 11 operatsion tizimiga, Edge brauzeriga va butun Microsoft 365 ofis paketiga (Word, Excel, PowerPoint, Outlook, Teams) chuqur integratsiyalangan bo'lib, xodimlar va tashkilotlar uchun ish unumdorligini tubdan oshiradi.",
        "Copilot korporativ darajadagi xavfsizlik (Commercial Data Protection) kafolatini beradi, ya'ni kiritilgan maxfiy biznes ma'lumotlari tashqariga chiqmaydi va ommaviy modellarni o'qitishda qo'llanilmaydi."
      ],
      capabilities: [
        "Word, Excel, PowerPoint va Outlook ichida to'g'ridan-to'g'ri ishlash",
        "Excel'da formulalar yozish, ma'lumotlarni tahlil qilish va diagrammalar chizish",
        "PowerPoint'da bir necha daqiqada tayyor professional taqdimotlar generatsiya qilish",
        "Teams yig'ilishlarini real vaqtda yozib olish va asosiy tezislarni xulosalash",
        "Windows tizim sozlamalarini boshqarish va oynalarni tartibga solish",
        "Bing qidiruv tizimi orqali eng yangi xolis manbalarni topish",
        "Designer (DALL-E 3) orqali professional illyustratsiyalar yaratish"
      ],
      strengths: [
        "Microsoft 365 korporativ dasturlariga dunyodagi eng mukammal integratsiya",
        "Biznes ma'lumotlari xavfsizligi kafolati (Commercial Data Protection)",
        "Windows 11 tizimi bilan uzviy bog'liqlik",
        "Ofis xodimlari uchun tayyor taqdimot va hisobotlarni zumda chiqarish"
      ],
      limitations: [
        "Microsoft 365 uchun to'liq Copilot litsenziyasi ancha qimmat",
        "Maxsus Microsoft ekotizimidan tashqarida afzalliklari kamayadi",
        "Muloqot erkinligi va ijodkorlikda ba'zan qat'iy korporativ ramkalar mavjud"
      ],
      pricing: {
        freeTier: "Web va Windows tizimida bepul Copilot versiyasi",
        paidTier: "Copilot Pro: $20/oy; Copilot for Microsoft 365: $30/foydalanuvchi/oy",
        note: "Korporativ tariflar Microsoft 365 litsenziyasiga qo'shimcha tarzda olinadi."
      },
      useCases: [
        { id: '1', icon: 'FileSpreadsheet', title: "Excel tahlili", description: "Katta sotuv jadvallarini yuklab, tendentsiyalar va foydani avtomatik hisoblash." },
        { id: '2', icon: 'Presentation', title: "PowerPoint taqdimotlari", description: "Word faylidagi matn asosida 10 slaydli zamonaviy taqdimot loyihasini yaratish." },
        { id: '3', icon: 'Users', title: "Teams majlislari", description: "O'tkazib yuborilgan audio majlisning to'liq xulosasi va vazifalar taqsimotini olish." },
        { id: '4', icon: 'Mail', title: "Outlook xat yozishmalari", description: "O'nlab javoblardan iborat uzun xatlar zanjirini 3 ta jumlada xulosalab berish." },
        { id: '5', icon: 'FileText', title: "Word hisobotlari", description: "Tashkilotning yillik faoliyat rejasini professional andoza asosida shakllantirish." },
        { id: '6', icon: 'Monitor', title: "Windows boshqaruvi", description: "Tizim parametrlarini o'zgartirish, ovoz yoki tungi rejimni tezkor sozlash." },
        { id: '7', icon: 'Search', title: "Korporativ qidiruv", description: "Kompaniya ichki SharePoint hujjatlari orasidan kerakli ma'lumotni topish." },
        { id: '8', icon: 'Image', title: "Marketing vizuallari", description: "Microsoft Designer orqali korporativ e'lonlar uchun sifatli bannerlar tayyorlash." }
      ],
      requirements: {
        technical: ["Windows 10/11 yoki zamonaviy veb-brauzer", "Internet aloqasi", "Microsoft 365 dasturlari paketi"],
        registration: ["Microsoft hisobi (shaxsiy yoki korporativ Entra ID)"],
        restrictions: ["Ofis integratsiyasi uchun faol Microsoft 365 obunasi talab qilinadi"],
        pricingTiers: ["Bepul (Web/Windows)", "Pro ($20/oy)", "Enterprise ($30/foydalanuvchi/oy)"],
        security: ["Tijoriy ma'lumotlar xavfsizligi (korporativ hisoblar uchun model o'qitilmaydi)", "ISO va SOC2 standartlariga muvofiqlik"],
        ethics: ["Korporativ konfidensiallik qoidalariga qat'iy rioya etish"]
      },
      prompts: [
        { id: 1, title: "PowerPoint slaydlar rejasi", category: "Ofis", prompt: "Ushbu 2 sahifalik matn asosida yangi IT loyiha taqdimoti uchun 8 ta slayd ssenariysini tuz. Har bir slayd sarlavhasi, 3 ta asosiy fikr va vizual tavsifni yoz." },
        { id: 2, title: "Excel dinamik formulasi", category: "Ofis", prompt: "Excel'da XLOOKUP va FILTER funksiyalarini birlashtirib, 'Status' ustunida 'Kechikkan' bo'lgan barcha loyihalarni alohida varaqqa chiqaruvchi formula tuz." },
        { id: 3, title: "Uzun email xulosasi", category: "Muloqot", prompt: "Quyidagi 15 ta xatdan iborat xat yozishmasini umumlashtir. Kim qanday fikr bildirdi, kelishilgan yakuniy sana nima va men nima qilishim kerak?" },
        { id: 4, title: "Word hisobot andozasi", category: "Hujjat", prompt: "IT xavfsizlik auditi yakunlari bo'yicha rahbariyatga taqdim etiladigan rasmiy hisobot strukturasini (ijroiya xulosasi, topilgan kamchiliklar, tavsiyalar) yarat." },
        { id: 5, title: "Teams yig'ilish konspekti", category: "Boshqaruv", prompt: "Quyidagi yig'ilish transkripsiyasidan faqat qabul qilingan qarorlar va ularning ijrochilari bo'yicha aniq jadval shakllantir." },
        { id: 6, title: "Edge brauzerida sahifa tahlili", category: "Tadqiqot", prompt: "Ushbu veb-sahifadagi raqobatchi kompaniya narxlarini tahlil qil va bizning narxlarimizdan qanday afzallik va kamchiliklari borligini solishtir." },
        { id: 7, title: "Mijoz shikoyatiga javob", category: "Mijozlar", prompt: "Xizmat uzilishi tufayli norozi bo'lgan mijozga muloyim, tushunish bilan yondashilgan, kompensatsiya taklif qiluvchi korporativ javob xati yoz." },
        { id: 8, title: "Biznes tahlil xulosasi", category: "Analitika", prompt: "Oxirgi chorakda mahsulot sotuvi 12% ga pasayganini tushuntiruvchi SWOT tahlili matritsasini tuzib ber." },
        { id: 9, title: "Designer tasvir so'rovi", category: "Dizayn", prompt: "Microsoft Designer uchun promt: Zamonaviy shisha ofisda sun'iy intellekt jadvallari bilan ishlayotgan yosh mutaxassislar, minimalistik estetika, iliq yorug'lik." },
        { id: 10, title: "Korporativ siyosat qoralama", category: "Boshqaruv", prompt: "Kompaniyada masofaviy ishlash (hybrid work policy) bo'yicha 5 banddan iborat ichki korporativ qoidalar loyihasini yozib ber." }
      ]
    },
    ru: {
      shortDesc: "Корпоративный ИИ-ассистент, глубоко интегрированный в Windows и экосистему Microsoft 365.",
      fullDescription: [
        "Microsoft Copilot (ранее Bing Chat) — интеллектуальный помощник от Microsoft, объединяющий возможности передовых языковых моделей OpenAI и корпоративный граф Microsoft Graph.",
        "Copilot бесшовно встроен в Windows 11, браузер Edge и офисный пакет Microsoft 365 (Word, Excel, PowerPoint, Outlook, Teams), существенно трансформируя ежедневный офисный труд.",
        "Платформа гарантирует защиту корпоративных данных (Commercial Data Protection): запросы бизнес-пользователей изолированы и не используются для публичного дообучения моделей."
      ],
      capabilities: [
        "Прямая интеграция с приложениями Word, Excel, PowerPoint, Teams и Outlook",
        "Автоматическое построение формул, графиков и сводных таблиц в Excel",
        "Мгновенная генерация стильных презентаций PowerPoint из текстовых заметок",
        "Суммаризация видеовстреч и формирование протоколов в Teams",
        "Управление системными настройками Windows 11 голосовыми и текстовыми командами",
        "Поиск актуальных данных через поисковый движок Bing с цитированием",
        "Создание иллюстраций с помощью Microsoft Designer (DALL-E 3)"
      ],
      strengths: [
        "Непревзойденная синергия с экосистемой Microsoft 365",
        "Надежная защита коммерческих данных для корпоративных клиентов",
        "Ускорение подготовки презентаций и отчетов в разы",
        "Встроенность в операционную систему Windows 11"
      ],
      limitations: [
        "Высокая стоимость корпоративной лицензии Copilot for Microsoft 365",
        "Меньшая ценность вне инфраструктуры Microsoft",
        "Строгие корпоративные фильтры креативности"
      ],
      pricing: {
        freeTier: "Бесплатная веб-версия и базовый ассистент в Windows",
        paidTier: "Copilot Pro: $20/мес; Copilot for Microsoft 365: $30/пользователь/мес",
        note: "Корпоративные лицензии требуют базовой подписки Microsoft 365."
      },
      useCases: [
        { id: '1', icon: 'FileSpreadsheet', title: "Аналитика в Excel", description: "Анализ динамики продаж и выявление отклонений без ручного ввода сложных формул." },
        { id: '2', icon: 'Presentation', title: "Слайды в PowerPoint", description: "Превращение текстового отчета Word в готовую презентацию с дизайном." },
        { id: '3', icon: 'Users', title: "Итоги встреч в Teams", description: "Автоматический список договоренностей и дедлайнов после онлайн-совещания." },
        { id: '4', icon: 'Mail', title: "Деловая переписка", description: "Сжатие длинных цепочек писем в Outlook до ключевых решений." },
        { id: '5', icon: 'FileText', title: "Отчетность в Word", description: "Оформление годовых отчетов и регламентов по корпоративным шаблонам." },
        { id: '6', icon: 'Monitor', title: "Управление Windows", description: "Быстрое переключение настроек, организация окон и поиск локальных файлов." },
        { id: '7', icon: 'Search', title: "Поиск в SharePoint", description: "Мгновенный поиск информации среди сотен внутренних корпоративных документов." },
        { id: '8', icon: 'Image', title: "Оформление постов", description: "Создание визуальных баннеров для корпоративного портала с Designer." }
      ],
      requirements: {
        technical: ["Windows 10/11 или браузер", "Доступ в Интернет", "Пакет Microsoft 365"],
        registration: ["Учетная запись Microsoft (личная или рабочая Entra ID)"],
        restrictions: ["Для работы в Office требуется платная подписка Microsoft 365"],
        pricingTiers: ["Бесплатно (Web/Windows)", "Copilot Pro ($20/мес)", "Enterprise ($30/пользователь/мес)"],
        security: ["Коммерческая защита данных: изоляция от обучения базовых моделей", "Сертификация ISO 27001"],
        ethics: ["Соблюдение регламентов корпоративной тайны"]
      },
      prompts: [
        { id: 1, title: "План презентации PowerPoint", category: "Офис", prompt: "Создай структуру презентации на 8 слайдов на тему 'Цифровая трансформация логистики'. Для каждого слайда укажи тезисы и идеи для графиков." },
        { id: 2, title: "Формула Excel с фильтрацией", category: "Офис", prompt: "Напиши формулу для Excel, которая находит сотрудников отдела 'Продажи' с выполнением плана выше 100% и сортирует их по убыванию премии." },
        { id: 3, title: "Сжатие треда в Outlook", category: "Коммуникация", prompt: "Выдели из этой переписки ключевой предмет спора, достигнутые компромиссы и назначенный срок сдачи проекта." },
        { id: 4, title: "Структура отчета Word", category: "Документы", prompt: "Сформируй структуру годового аудиторского отчета компании с вводной частью, матрицей рисков и планом корректирующих мер." },
        { id: 5, title: "Протокол встречи Teams", category: "Менеджмент", prompt: "Сформируй таблицу поручений по итогам совещания: задача, ответственный сотрудник, статус и контрольная дата." },
        { id: 6, title: "Анализ страницы в Edge", category: "Исследования", prompt: "Сравни условия гарантийного обслуживания на этой странице с нашими стандартами и укажи ключевые преимущества конкурента." },
        { id: 7, title: "Ответ на жалобу клиента", category: "Сервис", prompt: "Напиши вежливый корпоративный ответ клиенту в связи с задержкой поставки, предложив скидку 10% на следующий заказ." },
        { id: 8, title: "SWOT-анализ продукта", category: "Бизнес", prompt: "Составь развернутую матрицу SWOT-анализа для выхода нового мобильного приложения на рынок B2C." },
        { id: 9, title: "Промпт для Designer", category: "Дизайн", prompt: "Промпт для Microsoft Designer: Иллюстрация команды инженеров, обсуждающих архитектуру облачных серверов, изометрический стиль, корпоративный синий." },
        { id: 10, title: "Политика гибридной работы", category: "HR", prompt: "Разработай проект регламента гибридного графика работы для сотрудников IT-департамента." }
      ]
    },
    en: {
      shortDesc: "Microsoft's enterprise copilot seamlessly embedded within Windows 11 and the Microsoft 365 productivity suite.",
      fullDescription: [
        "Microsoft Copilot combines the intellectual horsepower of OpenAI foundation models with enterprise-grade data security and the proprietary Microsoft Graph infrastructure.",
        "Deeply woven into Windows 11, the Edge browser, and the entire Microsoft 365 universe (Word, Excel, PowerPoint, Outlook, Teams), it delivers measurable velocity gains to office professionals.",
        "Copilot features Commercial Data Protection, guaranteeing that enterprise tenant queries remain strictly confidential and are never utilized to train public foundation weights."
      ],
      capabilities: [
        "Direct embedded execution inside Word, Excel, PowerPoint, Outlook, and Teams",
        "Autonomous formula synthesis, scenario modeling, and charts in Excel",
        "Instant conversion of briefing documents into designer PowerPoint slide decks",
        "Automated live transcription, synthesis, and action tracking in Teams",
        "Native Windows 11 system orchestration via conversational input",
        "Grounded web search powered by the Bing index with verified citations",
        "High-resolution graphic creation via Microsoft Designer (DALL-E 3)"
      ],
      strengths: [
        "Unsurpassed native integration across Microsoft 365 applications",
        "Strict Commercial Data Protection for enterprise environments",
        "Massive time savings on presentation and spreadsheet generation",
        "Deep operating system synergy on Windows 11"
      ],
      limitations: [
        "Enterprise Copilot for Microsoft 365 carries significant per-seat licensing fees",
        "Substantially reduced utility outside the Microsoft software ecosystem",
        "Conservative guardrails may constrain non-business creative tasks"
      ],
      pricing: {
        freeTier: "Free web & Windows Copilot with standard capabilities",
        paidTier: "Copilot Pro at $20/mo; Copilot for Microsoft 365 at $30/user/mo",
        note: "Commercial plans require underlying Microsoft 365 business licenses."
      },
      useCases: [
        { id: '1', icon: 'FileSpreadsheet', title: "Excel Financial Modeling", description: "Parsing sales spreadsheets to spot trends and run regression models without manual formula entry." },
        { id: '2', icon: 'Presentation', title: "Slide Deck Automation", description: "Transforming narrative project outlines into visually coherent PowerPoint decks." },
        { id: '3', icon: 'Users', title: "Teams Meeting Synthesis", description: "Extracting commitments, disagreements, and next steps immediately following video conferences." },
        { id: '4', icon: 'Mail', title: "Inbox Triage in Outlook", description: "Summarizing 20-message email threads into concise situational briefs." },
        { id: '5', icon: 'FileText', title: "Word Document Structuring", description: "Formatting whitepapers, compliance playbooks, and proposals with consistent brand hierarchy." },
        { id: '6', icon: 'Monitor', title: "Windows Workflow Tuning", description: "Toggling OS displays, managing window snapping, and locating local drive assets." },
        { id: '7', icon: 'Search', title: "SharePoint Enterprise Search", description: "Locating internal policy docs across decentralized organizational intranets." },
        { id: '8', icon: 'Image', title: "Branded Visual Banners", description: "Crafting graphic assets for company announcements using Designer." }
      ],
      requirements: {
        technical: ["Windows 10/11 or modern browser", "Internet connection", "Microsoft 365 subscription"],
        registration: ["Microsoft account (Personal or Enterprise Entra ID)"],
        restrictions: ["M365 integration requires active enterprise subscription"],
        pricingTiers: ["Free tier", "Copilot Pro at $20/mo", "Enterprise at $30/user/mo"],
        security: ["Commercial Data Protection: zero training on corporate tenant data", "SOC 2 Type II compliance"],
        ethics: ["Strict corporate confidentiality and insider information adherence"]
      },
      prompts: [
        { id: 1, title: "PowerPoint Pitch Structure", category: "Office", prompt: "Generate an 8-slide PowerPoint deck outline on 'Supply Chain Automation'. Include title, 3 key bullet points, and visual asset suggestions for each slide." },
        { id: 2, title: "Advanced Excel Formula", category: "Office", prompt: "Write an Excel formula using XLOOKUP and FILTER to isolate all customers whose renewal date falls within 30 days and whose ARR exceeds $50,000." },
        { id: 3, title: "Outlook Thread Distillation", category: "Communication", prompt: "Summarize this 12-email vendor negotiation chain. Identify the final agreed price, warranty duration, and my required response action." },
        { id: 4, title: "Executive Audit Report", category: "Documents", prompt: "Draft a formal corporate cybersecurity audit summary with Executive Summary, High-Risk Findings, and a 90-day remediation roadmap." },
        { id: 5, title: "Teams Action Item Matrix", category: "Management", prompt: "From this meeting transcript, create an action matrix: Task Name, Responsible Owner, Status, and Milestone Due Date." },
        { id: 6, title: "Edge Competitor Teardown", category: "Research", prompt: "Analyze this competitor pricing webpage and highlight their tier boundaries compared to our SaaS pricing tiers." },
        { id: 7, title: "Customer Escalation Reply", category: "Service", prompt: "Draft an empathetic, corporate response to a customer affected by a cloud outage, offering a 15% SLA billing credit." },
        { id: 8, title: "Enterprise SWOT Matrix", category: "Strategy", prompt: "Build an exhaustive SWOT matrix evaluating our planned expansion into European B2B logistics markets." },
        { id: 9, title: "Designer Asset Generation", category: "Creative", prompt: "Prompt for Microsoft Designer: Modern isometric graphic showing interconnected cloud databases with glowing data streams, corporate blue and teal palette." },
        { id: 10, title: "Remote Work Charter", category: "HR", prompt: "Draft a 5-pillar hybrid remote work policy for an international engineering team addressing core working hours and equipment stipends." }
      ]
    }
  },

  // 5. Grok (xAI)
  {
    id: 'grok',
    name: 'Grok',
    company: 'xAI',
    category: 'llm',
    accentColor: '#F43F5E',
    gradient: 'from-rose-500/20 via-red-500/10 to-transparent',
    websiteUrl: 'https://x.ai',
    year: 2023,
    platforms: ['Web', 'X (Twitter)', 'iOS', 'Android', 'API'],
    badge: {
      uz: 'Jonli X Ma\'lumot & Hazil',
      ru: 'Живые данные X & Остроумие',
      en: 'Real-time X Data & Wit',
    },
    logoSvg: 'grok',
    uz: {
      shortDesc: "Elon Musk'ning xAI kompaniyasi tomonidan yaratilgan, X (Twitter) platformasidagi real vaqtli trendlarni tahlil qiluvchi va hazilkor xarakterga ega AI.",
      fullDescription: [
        "Grok — Ilon Mask tomonidan asos solingan xAI kompaniyasining flagman sun'iy intellekti bo'lib, 'koinotning asl mohiyatini anglash' shiori ostida yaratilgan.",
        "Uning eng asosiy ustunligi — X (sobiq Twitter) ijtimoiy tarmog'idagi barcha global voqea-hodisalar, yangiliklar va trendlarni real vaqt rejimida sekundlar ichida tahlil qila olishidir. Grok 2 va Grok 3 modellari Flux tasvir yaratish texnologiyasi bilan boyitilgan.",
        "Grok an'anaviy sun'iy intellektlarga qaraganda ancha ochiq, kinoyali (sarcastic) hazil-mutoyiba rejimiga ega bo'lib, o'tkir savollardan qochmaydi va o'ziga xos jasur fikrlash uslubi bilan ajralib turadi."
      ],
      capabilities: [
        "X (Twitter) tarmog'idagi yangiliklar va fikrlarni real vaqtda jonli tahlil qilish",
        "Flux modeli orqali deyarli cheklovlarsiz yuqori sifatli tasvirlar yaratish",
        "Ikki xil rejim: 'Oddiy' (xolis tahliliy) va 'Qiziqarli' (kinoyali, hazilkor)",
        "Murakkab matematika, fizika va muhandislik masalalarini yechish",
        "Katta hajmli kontekst va tezkor xulosalash",
        "Zamonaviy madaniyat (meme, pop culture) va internet memlarini chuqur tushunish",
        "Dasturchilar uchun xAI API orqali modeldan foydalanish"
      ],
      strengths: [
        "Dunyo yangiliklarini hammadan tez bilish (X platformasi ma'lumotlar oqimi)",
        "Flux texnologiyasi orqali yuksak darajada erkin va sifatli tasvir generatsiyasi",
        "Jonli, zerikarli bo'lmagan, o'ziga xos hazil tuyg'usiga ega muloqot",
        "Kamroq sun'iy tsenzura va erkinroq munozara olib borish"
      ],
      limitations: [
        "To'liq foydalanish uchun X Premium obunasi talab qilinishi mumkin",
        "Hazil rejimida ba'zan ortiqcha sarkazm va noxolislik uchrashi mumkin",
        "Ijtimoiy tarmoq xabarlariga tayangani sababli mish-mishlarni ham aks ettirib qo'yish ehtimoli"
      ],
      pricing: {
        freeTier: "Ba'zi hududlarda cheklangan bepul sinov kirishi",
        paidTier: "X Premium ($8/oy) yoki X Premium+ ($16/oy); SuperGrok alohida obuna",
        note: "Narxlar X platformasi obuna tariflariga bog'langan."
      },
      useCases: [
        { id: '1', icon: 'Flame', title: "Trendlarni aniqlash", description: "Ayni daqiqalarda dunyo yoki biror sohada nimalar eng ko'p muhokama qilinayotganini aniqlash." },
        { id: '2', icon: 'Image', title: "Tasvir generatsiyasi", description: "Flux texnologiyasi orqali boshqa AI lar rad etadigan realistik va ijodiy rasmlarni chizish." },
        { id: '3', icon: 'TrendingUp', title: "Kripto va moliya yangiliklari", description: "Bozordagi keskin o'zgarishlar va ijtimoiy kayfiyatni (sentiment analysis) baholash." },
        { id: '4', icon: 'Smile', title: "Memlar va pop-madaniyat", description: "Ijtimoiy tarmoqlar uchun kulgili postlar, hazillar va mem g'oyalarini ishlab chiqish." },
        { id: '5', icon: 'Compass', title: "Ilmiy savol-javob", description: "Kosmik parvozlar, kvant fizikasi va muhandislik bo'yicha dadil gipotezalarni muhokama qilish." },
        { id: '6', icon: 'Eye', title: "Jamoatchilik fikri tahlili", description: "Yangi chiqqan mahsulot haqida odamlar nima deb yozayotganini bir zumda bilish." },
        { id: '7', icon: 'Zap', title: "Tezkor fakt-tekshiruv", description: "Tarmoqda tarqalayotgan yangilikning haqiqiyligini birinchi manbalar bo'yicha solishtirish." },
        { id: '8', icon: 'Code', title: "Dasturlash", description: "Python va zamonaviy kutubxonalarda tezkor skriptlar va ma'lumot yig'uvchi (scraper) kodlar yozish." }
      ],
      requirements: {
        technical: ["Veb-brauzer yoki X mobil ilovasi", "Internet aloqasi"],
        registration: ["X (Twitter) akkaunti mavjudligi"],
        restrictions: ["X xizmat ko'rsatish shartlariga muvofiqlik (13+ yosh)"],
        pricingTiers: ["X Premium ($8/oy)", "X Premium+ ($16/oy)"],
        security: ["X xavfsizlik protokollari, maxfiy ma'lumotlarni post qilmaslik"],
        ethics: ["Generatsiya qilingan yangilik va mish-mishlarni mustaqil manbalarda tekshirish"]
      },
      prompts: [
        { id: 1, title: "Jonli X trend tahlili", category: "Yangiliklar", prompt: "Hozir X (Twitter) tarmog'ida sun'iy intellekt bo'yicha eng ko'p muhokama qilinayotgan 3 ta mavzuni top va odamlar bu haqda qanday fikrda ekanligini umumlashtir." },
        { id: 2, title: "Flux fotorealizm promti", category: "Dizayn", prompt: "Mars yuzasida qahva ichib o'tirgan astronavtning giper-realistik surati, fonida Starship raketasi, kinematik quyosh nurlari, Hasselblad kamerasi sifati." },
        { id: 3, title: "Kinoyali mahsulot tanqidi", category: "Hazil", prompt: "Grok 'Fun' rejimida: Yangi qimmatbaho smartfonlarning har yili deyarli o'zgarmasdan chiqishini o'tkir kinoya va sarkazm bilan tanqid qil." },
        { id: 4, title: "Kripto bozor kayfiyati", category: "Moliya", prompt: "Bugungi kunda Bitcoin va Ethereum atrofidagi ijtimoiy kayfiyatni (bullish yoki bearish) tvitlar asosida tahlil qil va sabablarini ko'rsat." },
        { id: 5, title: "Raketa dvigatellari fizikasi", category: "Muhandislik", prompt: "Metan yoqilg'isida ishlovchi Raptor dvigateli va kerosinli Merlin dvigateli o'rtasidagi termodinamik afzalliklarni Ilon Mask uslubida tushuntir." },
        { id: 6, title: "Viral tvit yozish", category: "Marketing", prompt: "Dasturchilarning dushanba kuni tonggi holati haqida X tarmog'ida 100k ko'rish to'play oladigan 3 ta hazilomuz tvit varianti yoz." },
        { id: 7, title: "Ochiq bahs tahlili", category: "Munozara", prompt: "Insoniyat Marsni egallashi kerakmi yoki pulni Yer muammolariga sarflash kerakmi? Ikkala tomonning eng kuchli argumentlarini keltir." },
        { id: 8, title: "Python X API skripti", category: "Dasturlash", prompt: "Python kutubxonalari yordamida muayyan xeshteg bo'yicha so'nggi 24 soatdagi tvitlarni yig'ib oluvchi skript kodini yoz." },
        { id: 9, title: "Meme tushuntirishi", category: "Madaniyat", prompt: "Hozirgi paytda internetda ommalashgan eng yangi memning kelib chiqish tarixi va uning ostidagi madaniy ma'noni tushuntir." },
        { id: 10, title: "Futuristik prognoz", category: "Kelajak", prompt: "2035-yilga kelib robotlar va insonlar o'rtasidagi kundalik munosabatlar qanday bo'lishi haqida dadil va noan'anaviy prognoz ber." }
      ]
    },
    ru: {
      shortDesc: "ИИ от компании xAI Илона Маска с прямым доступом к живому потоку твитов в X и генерацией изображений Flux.",
      fullDescription: [
        "Grok — флагманский искусственный интеллект от компании xAI, созданный Илоном Маском с заявленной целью 'познания истинной природы Вселенной'.",
        "Главное конкурентное преимущество Grok — непрерывный онлайн-доступ к социальной платформе X (бывший Twitter), что дает модели возможность анализировать новости, тренды и настроения пользователей в режиме реального времени. Модели Grok 2 и 3 оснащены мощным генератором изображений Flux.",
        "Grok выделяется живым, свободным тоном общения, наличием особого юмористического режима 'Fun Mode' и готовностью рассуждать на острые темы без чрезмерной цензуры."
      ],
      capabilities: [
        "Анализ актуальных мировых событий через поток данных платформы X в реальном времени",
        "Генерация фотореалистичных изображений высокой детализации с технологией Flux",
        "Два режима общения: объективный аналитический и саркастичный с юмором (Fun Mode)",
        "Решение сложных физико-математических и инженерных уравнений",
        "Глубокое понимание интернет-мемов, субкультур и поп-культуры",
        "Большой объем контекста и быстрая агрегация мнений пользователей",
        "Доступность для разработчиков через xAI API"
      ],
      strengths: [
        "Самая быстрая реакция на мировые новости благодаря данным X",
        "Высокая степень свободы и минимальное количество строгих ограничений",
        "Фотореализм генерации изображений без навязчивой политкорректности",
        "Остроумный и незаурядный стиль ведения диалога"
      ],
      limitations: [
        "Для полноценного доступа требуется подписка X Premium или X Premium+",
        "В режиме юмора сарказм иногда может искажать строгую объективность",
        "Риск трансляции непроверенных слухов из социальных сетей"
      ],
      pricing: {
        freeTier: "Ограниченный тестовый доступ в некоторых регионах",
        paidTier: "X Premium ($8/мес) или X Premium+ ($16/мес); SuperGrok",
        note: "Тарифная политика привязана к подпискам социальной сети X."
      },
      useCases: [
        { id: '1', icon: 'Flame', title: "Мониторинг трендов", description: "Отслеживание вирусных инфоповодов и настроений в X за считанные минуты." },
        { id: '2', icon: 'Image', title: "Арт через Flux", description: "Создание фотореалистичных кадров, постеров и концепт-артов." },
        { id: '3', icon: 'TrendingUp', title: "Криптовалютные сигналы", description: "Оценка настроений трейдеров вокруг мемкоинов и биткоина." },
        { id: '4', icon: 'Smile', title: "Юмор и мемы", description: "Генерация вирусных постов и креативных концепций для соцсетей." },
        { id: '5', icon: 'Compass', title: "Инженерные дебаты", description: "Обсуждение космических технологий Starship, автопилота и робототехники." },
        { id: '6', icon: 'Eye', title: "Общественный резонанс", description: "Анализ реакции пользователей на презентацию нового продукта." },
        { id: '7', icon: 'Zap', title: "Быстрый фактчекинг", description: "Проверка первоисточников свежих слухов в ленте новостей." },
        { id: '8', icon: 'Code', title: "Парсинг и скрипты", description: "Написание скриптов на Python для сбора и агрегации открытых данных." }
      ],
      requirements: {
        technical: ["Браузер или мобильное приложение X", "Интернет"],
        registration: ["Учетная запись на платформе X"],
        restrictions: ["Правила платформы X (13+)"],
        pricingTiers: ["X Premium ($8/мес)", "X Premium+ ($16/мес)"],
        security: ["Стандарты безопасности X, не публиковать личные ключи"],
        ethics: ["Необходимость перепроверять резонансные утверждения из соцсетей"]
      },
      prompts: [
        { id: 1, title: "Горячие тренды X", category: "Новости", prompt: "Что прямо сейчас обсуждают в X по теме космических исследований? Выдели 3 главных темы и тон высказываний экспертов." },
        { id: 2, title: "Генерация кадра Flux", category: "Дизайн", prompt: "Промпт для Flux: Кинематографичный кадр колонии на Марсе в 2060 году, купольные оранжереи, отражение заката в шлеме, фотореализм Hasselblad." },
        { id: 3, title: "Саркастичный отзыв", category: "Юмор", prompt: "Включи саркастичный режим Grok: высмей привычку людей покупать абонемент в спортзал на год и сходить туда два раза." },
        { id: 4, title: "Сентимент криптовалют", category: "Крипта", prompt: "Проанализируй твиты за последние 12 часов о динамике цены Solana и определи преобладающее настроение сообщества." },
        { id: 5, title: "Двигатели Starship", category: "Инженерия", prompt: "Объясни преимущество полнопоточного ступенчатого цикла сгорания в двигателях Raptor простым языком." },
        { id: 6, title: "Вирусный твит", category: "Маркетинг", prompt: "Напиши 3 остроумных коротких твита о жизни senior-разработчика, которые наберут максимальное количество ретвитов." },
        { id: 7, title: "Дебаты об искусственном интеллекте", category: "Мнения", prompt: "Стоит ли ограничивать развитие AGI из соображений безопасности? Изложи позицию акселерационистов (e/acc) и алармистов." },
        { id: 8, title: "Скрипт анализа данных", category: "Разработка", prompt: "Напиши на Python скрипт для расчета сентимента текста с использованием библиотеки Transformers." },
        { id: 9, title: "Разбор нового интернет-мема", category: "Культура", prompt: "В чем смысл последнего вирусного мема в англоязычном сегменте X? Объясни предысторию и культурный контекст." },
        { id: 10, title: "Будущее робототехники", category: "Футурология", prompt: "Каким будет влияние человекоподобных роботов на рынок труда в ближайшие 10 лет? Дай смелый реалистичный прогноз." }
      ]
    },
    en: {
      shortDesc: "Elon Musk's xAI engine delivering real-time X telemetry, unfiltered wit, and high-fidelity Flux visual generation.",
      fullDescription: [
        "Grok is engineered by xAI, the venture founded by Elon Musk to accelerate scientific discovery and understand the universe.",
        "Its crowning architectural differentiator is native, real-time access to the live firehose of the X (formerly Twitter) platform, enabling instantaneous sentiment analysis and breaking event synthesis. Grok 2 and Grok 3 incorporate state-of-the-art Flux image generation.",
        "Grok is intentionally built with an unorthodox, witty personality ('Fun Mode') that resists corporate sanitization and confronts controversial questions directly."
      ],
      capabilities: [
        "Real-time sentiment and event extraction from the live X social network stream",
        "Unconstrained photorealistic visual generation powered by Flux",
        "Dual operational personas: 'Normal' (unbiased analytical) and 'Fun' (witty, satirical)",
        "Advanced STEM reasoning across rocketry, quantum physics, and computer science",
        "Deep literacy in internet lore, digital subcultures, and virality mechanics",
        "Extensive context reasoning windows with low response latency",
        "Developer integration via xAI's native REST APIs"
      ],
      strengths: [
        "Unrivaled speed in digesting breaking global headlines as they unfold",
        "Fluid, photorealistic imagery with fewer arbitrary stylistic blocks",
        "Candid, entertaining, and non-sanitized conversational voice",
        "Unique insight into real-time public sentiment and market commentary"
      ],
      limitations: [
        "Primary access tied to X Premium or X Premium+ subscriptions",
        "Satirical persona can occasionally dilute technical precision if left unchecked",
        "Vulnerability to propagating unverified social media rumors"
      ],
      pricing: {
        freeTier: "Limited regional trial tiers available intermittently",
        paidTier: "X Premium at $8/mo; X Premium+ at $16/mo; SuperGrok standalone plans",
        note: "Subscription tiers are managed under X platform billing rules."
      },
      useCases: [
        { id: '1', icon: 'Flame', title: "Live Trend Telemetry", description: "Isolating breaking cultural narratives and market rumors within seconds." },
        { id: '2', icon: 'Image', title: "Photorealistic Flux Imagery", description: "Rendering uninhibited editorial, sci-fi, and high-contrast concept art." },
        { id: '3', icon: 'TrendingUp', title: "Crypto & Market Sentiment", description: "Tracking speculative momentum across crypto assets through trader chatter." },
        { id: '4', icon: 'Smile', title: "Cultural Copywriting & Memes", description: "Authoring viral copy attuned to contemporary internet humor and irony." },
        { id: '5', icon: 'Compass', title: "Aerospace & Tech Exploration", description: "Debating orbital dynamics, propulsion cycles, and autonomous systems." },
        { id: '6', icon: 'Eye', title: "Brand Perception Tracking", description: "Measuring immediate public reaction to major corporate announcements." },
        { id: '7', icon: 'Zap', title: "Rapid Fact Discovery", description: "Cross-referencing witness accounts during breaking global news stories." },
        { id: '8', icon: 'Code', title: "Python Scraper Engineering", description: "Writing scripts to analyze social graphs and high-velocity datasets." }
      ],
      requirements: {
        technical: ["Modern desktop browser or native X mobile app", "Broadband internet"],
        registration: ["Active account on X"],
        restrictions: ["Subject to X terms of service (ages 13+)"],
        pricingTiers: ["X Premium at $8/mo", "X Premium+ at $16/mo"],
        security: ["X platform security layers; avoid publishing private API keys"],
        ethics: ["Independently cross-verify claims that originate in social media feeds"]
      },
      prompts: [
        { id: 1, title: "Real-Time X Breaking Search", category: "News", prompt: "Search live posts on X from the past 2 hours regarding open-source AI models. Summarize the major consensus and heated debates." },
        { id: 2, title: "Flux Photorealistic Prompt", category: "Creative", prompt: "Flux prompt: Candid photograph of a cybernetic research engineer in Tokyo at midnight during rain, neon reflections, captured on 35mm film, hyper-detailed." },
        { id: 3, title: "Satirical Product Review", category: "Humor", prompt: "In Grok Fun Mode: Roast the modern subscription economy where even household appliances demand monthly recurring memberships." },
        { id: 4, title: "Crypto Social Sentiment", category: "Finance", prompt: "Synthesize trader chatter on X regarding Ethereum's recent layer-2 upgrades. Determine if sentiment is predominantly bullish or skeptical." },
        { id: 5, title: "Raptor Full-Flow Staged Cycle", category: "Engineering", prompt: "Explain the mechanical engineering advantages of full-flow staged combustion engines versus gas-generator cycles like the Merlin." },
        { id: 6, title: "Viral Tech X Post", category: "Marketing", prompt: "Write 3 punchy, witty X posts about software engineers fighting merge conflicts that have maximum viral quote-tweet potential." },
        { id: 7, title: "e/acc vs AI Alignment Debate", category: "Philosophy", prompt: "Break down the core philosophical axioms of effective accelerationism (e/acc) versus traditional AI safety alignment." },
        { id: 8, title: "Sentiment Analysis Pipeline", category: "Coding", prompt: "Write a Python script using pandas and VADER to analyze sentiment distributions across an array of short customer reviews." },
        { id: 9, title: "Internet Subculture Decoder", category: "Culture", prompt: "Explain the origins, visual tropes, and philosophical subtext of the latest viral meme dominating tech Twitter." },
        { id: 10, title: "Next-Decade Robotics Speculation", category: "Futurism", prompt: "Provide an audacious, grounded forecast of how bipedal humanoid robots will integrate into municipal sanitation by 2036." }
      ]
    }
  },

  // 6. DeepSeek
  {
    id: 'deepseek',
    name: 'DeepSeek',
    company: 'DeepSeek',
    category: 'open',
    accentColor: '#2563EB',
    gradient: 'from-blue-600/20 via-sky-500/10 to-transparent',
    websiteUrl: 'https://deepseek.com',
    year: 2023,
    platforms: ['Web', 'iOS', 'Android', 'API', 'Ollama / Local'],
    badge: {
      uz: 'Ochiq Kod & Mulohaza',
      ru: 'Открытый код & Рассуждения',
      en: 'Open Weights & Reasoning',
    },
    logoSvg: 'deepseek',
    uz: {
      shortDesc: "Sun'iy intellekt bozorida inqilob yasagan, ulkan hisoblash xarajatlarini 90% ga arzonlashtirgan ochiq vaznli va mulohazali (R1) model.",
      fullDescription: [
        "DeepSeek — Xitoyda tashkil etilgan tadqiqot laboratoriyasi tomonidan ishlab chiqilgan va 2024-2025 yillarda butun dunyo IT sanoatini hayratda qoldirgan ochiq kodli/vaznli sun'iy intellekt tizimidir.",
        "Uning DeepSeek-V3 va DeepSeek-R1 (Reasoning) modellari AQShning eng yetakchi xususiy modellariga teng yoki ulardan yuqori natijalarni bir necha barobar arzon narxda va ochiq arxitektura asosida namoyish etdi. Model o'zining 'fikrlash zanjiri'ni (Chain-of-Thought) foydalanuvchiga to'liq ko'rsatib beradi.",
        "DeepSeek modellari o'z kompyuteringizda (Ollama, LM Studio) mutlaqo bepul va internetga bog'lanmagan holda ishlay oladi, bu esa korporativ maxfiylik uchun mislsiz imkoniyat yaratadi."
      ],
      capabilities: [
        "DeepSeek-R1 orqali qadam-baqadam mantiqiy mulohaza yuritish va fikrlash jarayonini ko'rsatish",
        "Matematik olimpiada masalalari va murakkab algoritmlarni mustaqil isbotlash",
        "Arxitekturasi ochiq (open-weights): o'z serverida yoki shaxsiy kompyuterda ishga tushirish",
        "Bozordagi eng arzon API narxlari (OpenAI va Anthropic'dan 10-20 barobar arzon)",
        "Dasturiy ta'minot yaratish va kod xatolarini chuqur tahlil qilish",
        "128 000 tokengacha bo'lgan kontekst darchasi",
        "Xitoy, ingliz va boshqa tillarda mukammal texnik savodxonlik"
      ],
      strengths: [
        "Hisoblash va API narxlarining aql bovar qilmas darajada arzonligi",
        "Ochiq vaznlar: shaxsiy serverda to'liq maxfiy holda o'rnatish imkoniyati",
        "Matematika, mantiq va dasturlash bo'yicha dunyodagi eng kuchli ko'rsatkichlar",
        "Mulohaza zanjirini (thinking process) shaffof ko'rsatishi"
      ],
      limitations: [
        "Global serverlarida yuqori yuklanish paytida vaqtincha sekinlashuvlar",
        "Xitoy ichki siyosiy mavzularida ba'zi standart cheklovlar",
        "G'arb tillarida adabiy-ijodiy matnlarda biroz quruq texnik uslub"
      ],
      pricing: {
        freeTier: "Rasmiy veb-sayt va mobil ilovada mutlaqo bepul foydalanish",
        paidTier: "API: 1M token uchun $0.14 - $0.55 (bozordagi eng arzon tarif)",
        note: "Ochiq vaznlarni yuklab olib, o'z serveringizda bepul ishlatish mumkin."
      },
      useCases: [
        { id: '1', icon: 'Cpu', title: "Lokal serverda ishlatish", description: "Ollama orqali internetga ulamasdan, maxfiy korporativ ma'lumotlar bilan ishlash." },
        { id: '2', icon: 'Calculator', title: "Oliy matematika", description: "Matematik isbotlar, differensial tenglamalar va olimpiada masalalarini yechish." },
        { id: '3', icon: 'Code', title: "Arzon API integratsiyasi", description: "Startaplar uchun oyiga yuzlab dollarlar o'rniga bir necha dollar sarflab AI qo'shish." },
        { id: '4', icon: 'Layers', title: "Murakkab algoritmlar", description: "LeetCode Hard darajasidagi algoritmlarni tushunish va optimal yechim topish." },
        { id: '5', icon: 'Server', title: "Avtonom agentlar", description: "Arzon token narxi evaziga ko'p bosqichli mustaqil AI agentlarni qurish." },
        { id: '6', icon: 'CheckSquare', title: "Mantiqiy audit", description: "Dasturiy arxitektura va kod bazasidagi yashirin mantiqiy xatolarni qidirish." },
        { id: '7', icon: 'FileCode', title: "Backend optimizatsiya", description: "C++, Rust va Go tillarida yuqori tezlikda ishlovchi tizimlar yaratish." },
        { id: '8', icon: 'BookOpen', title: "Ilmiy maqolalar", description: "Fizika va kompyuter fanlari sohasidagi murakkab maqolalarni tahlil qilish." }
      ],
      requirements: {
        technical: ["Brauzer yoki lokal o'rnatish uchun kamida 16GB RAM / zamonaviy GPU (RTX 3060+)"],
        registration: ["Veb-versiya uchun email yoki mobil raqam"],
        restrictions: ["Ochiq litsenziya shartlariga muvofiq erkin foydalanish"],
        pricingTiers: ["Veb/App: Bepul", "API: ultra arzon token to'lovi"],
        security: ["Lokal ishga tushirilganda ma'lumotlar kompyuterdan aslo tashqariga chiqmaydi"],
        ethics: ["Xakerlik yoki noqonuniy ekspluatatsiyada foydalanmaslik"]
      },
      prompts: [
        { id: 1, title: "DeepSeek-R1 mulohaza zanjiri", category: "Mantiq", prompt: "Quyidagi ehtimollar nazariyasi masalasini qadam-baqadam mulohaza yuritib yech: 3 ta qutida turli rangdagi sharlar bor... O'z fikrlash zanjiringni har bir qadamda batafsil tushuntir." },
        { id: 2, title: "Lokal Ollama o'rnatish qo'llanmasi", category: "Tizim", prompt: "Ubuntu 24.04 serverida DeepSeek-R1 modelini Ollama va Open-WebUI orqali qanday o'rnatish va uni API sifatida sozlash bo'yicha aniq buyruqlar ro'yxatini ber." },
        { id: 3, title: "LeetCode Hard algoritmi", category: "Dasturlash", prompt: "Quyidagi dinamik dasturlash masalasini C++ tilida optimal xotira va vaqt murakkabligida yech. Nega bu yechim tanlanganini isbotla:\n\n[MASALA_MATNI]" },
        { id: 4, title: "Arzon AI Agent arxitekturasi", category: "Arxitektura", prompt: "DeepSeek API asosida kuniga 100 000 ta mijoz so'roviga javob beruvchi arzon va bardoshli mijozlar qo'llab-quvvatlash botini loyihalashtir." },
        { id: 5, title: "Rust xotira xavfsizligi", category: "Dasturlash", prompt: "Rust dasturlash tilidagi Borrow Checker qoidalarini va Lifetimes tushunchasini murakkab ko'rsatkichli daraxt (tree) strukturasi misolida tushuntir." },
        { id: 6, title: "Differensial tenglamalar", category: "Matematika", prompt: "Ikkinchi tartibli nobir jinsli differensial tenglamani Laplas almashtirishi yordamida yechish bosqichlarini ko'rsat." },
        { id: 7, title: "Ma'lumotlar bazasi sharding", category: "Backend", prompt: "PostgreSQL bazasida 100 terabaytlik tranzaksiyalar jadvalini sharding qilish arxitekturasini tuz. Citus kengaytmasidan qanday foydalanamiz?" },
        { id: 8, title: "Tizimli kod auditi", category: "Xavfsizlik", prompt: "Ushbu C tilida yozilgan tarmoq soket dasturida bufer to'lib ketishi (buffer overflow) xavfi bor joylarni aniqla va uni xavfsiz holatga keltir." },
        { id: 9, title: "LLM xarajatlarini solishtirish", category: "Biznes", prompt: "GPT-4o va DeepSeek-V3 API narxlarini 1 milliard token sarflovchi yirik fintech loyihasi uchun yillik byudjetda solishtirib ber." },
        { id: 10, title: "Mikrokontroller dasturlash", category: "IoT", prompt: "ESP32 mikrokontrolleri uchun FreeRTOS yordamida bir vaqtda 3 ta sensor o'qiydigan va MQTT orqali uzatuvchi dastur skeletini yoz." }
      ]
    },
    ru: {
      shortDesc: "Революционная модель с открытыми весами и глубокими рассуждениями (R1), обрушившая стоимость вычислений на 90%.",
      fullDescription: [
        "DeepSeek — китайская исследовательская лаборатория, которая в 2024–2025 годах произвела тектонический сдвиг на мировом рынке искусственного интеллекта.",
        "Модели DeepSeek-V3 и логическая рассуждающая модель DeepSeek-R1 доказали, что флагманская производительность уровня o1/GPT-4o достижима при затратах на обучение и инференс в десятки раз ниже конкурентов. Модель прозрачно отображает цепочку внутренних рассуждений (Chain-of-Thought).",
        "Благодаря открытым весам (open-weights) DeepSeek можно бесплатно развернуть локально (через Ollama или vLLM) на собственных серверах без передачи данных третьим лицам."
      ],
      capabilities: [
        "Пошаговые логические рассуждения и прозрачная визуализация хода мыслей (R1)",
        "Решение сложнейших олимпиадных задач по математике и алгоритмам",
        "Открытые веса: возможность бесплатного локального запуска без интернета",
        "Рекордно низкая стоимость API (в 10-20 раз дешевле западных проприетарных аналогов)",
        "Глубокая экспертиза в языках C++, Rust, Python и системном программировании",
        "Контекстное окно до 128 000 токенов",
        "Высочайшая эффективность в проектировании автономных AI-агентов"
      ],
      strengths: [
        "Беспрецедентно низкая цена токенов на глобальном рынке",
        "Полный суверенитет данных при локальном развертывании",
        "Лидерство в математических и алгоритмических бенчмарках",
        "Прозрачность цепочки рассуждений для легкого дебаггинга"
      ],
      limitations: [
        "Периодические перегрузки официальных публичных веб-серверов",
        "Цензурные ограничения китайского законодательства по отдельным темам",
        "Менее эмоциональный и более строгий стиль в творческих текстах"
      ],
      pricing: {
        freeTier: "Полностью бесплатно на официальном сайте и в приложениях",
        paidTier: "API: ~$0.14-$0.55 за 1 млн токенов (невероятно дешево)",
        note: "Веса моделей бесплатны для локального использования под лицензией MIT."
      },
      useCases: [
        { id: '1', icon: 'Cpu', title: "Локальный запуск", description: "Работа через Ollama на собственном ПК без интернета для полной конфиденциальности." },
        { id: '2', icon: 'Calculator', title: "Олимпиадная математика", description: "Формальные доказательства теорем и решение комбинаторных уравнений." },
        { id: '3', icon: 'Code', title: "Ультрадешевый API", description: "Интеграция ИИ в приложения с минимальным бюджетом на токены." },
        { id: '4', icon: 'Layers', title: "Сложные алгоритмы", description: "Разбор задач уровня LeetCode Hard с доказательством сложности." },
        { id: '5', icon: 'Server', title: "Масштабные AI-агенты", description: "Построение многошаговых систем автоматизации без риска разорения на API." },
        { id: '6', icon: 'CheckSquare', title: "Логический аудит", description: "Выявление тонких багов бизнес-логики в архитектуре крупных сервисов." },
        { id: '7', icon: 'FileCode', title: "Системное ПО", description: "Написание оптимизированного кода на Rust, C++ и Go." },
        { id: '8', icon: 'BookOpen', title: "Технические статьи", description: "Анализ научных публикаций по физике и машинному обучению." }
      ],
      requirements: {
        technical: ["Браузер или ПК с 16+ ГБ RAM и видеокартой NVIDIA для локального запуска"],
        registration: ["Email или номер телефона для веб-доступа"],
        restrictions: ["Открытая лицензия MIT, свобода интеграции"],
        pricingTiers: ["Web/App: Бесплатно", "API: доли цента за миллион токенов"],
        security: ["При локальном запуске данные гарантированно не покидают ваше устройство"],
        ethics: ["Запрет на использование в несанкционированном пентестинге"]
      },
      prompts: [
        { id: 1, title: "Решение задачи с цепочкой мыслей", category: "Математика", prompt: "Реши следующую задачу по комбинаторике, детально фиксируя каждый шаг рассуждений в цепочке мыслей (Chain of Thought):\n\n[УСЛОВИЕ_ЗАДАЧИ]" },
        { id: 2, title: "Установка DeepSeek в Ollama", category: "Инфраструктура", prompt: "Предоставь подробную инструкцию по установке и запуску квантованной модели DeepSeek-R1-Distill-Qwen-14B через Ollama в Linux." },
        { id: 3, title: "LeetCode Hard решение", category: "Алгоритмы", prompt: "Напиши оптимальное решение задачи 'Median of Two Sorted Arrays' на C++ с временной сложностью O(log(min(m, n))). Прокомментируй код." },
        { id: 4, title: "Архитектура дешевого агента", category: "Архитектура", prompt: "Спроектируй архитектуру системы мониторинга цен на базе DeepSeek API, обрабатывающей 50 000 товаров в сутки при бюджете до $5 в месяц." },
        { id: 5, title: "Объяснение Lifetimes в Rust", category: "Разработка", prompt: "Объясни время жизни ссылок (lifetimes) в Rust на примере создания структуры связанного списка (Linked List)." },
        { id: 6, title: "Дифференциальные уравнения", category: "Математика", prompt: "Найди общее решение дифференциального уравнения второго порядка методом вариации постоянных." },
        { id: 7, title: "Шардирование базы данных", category: "Базы данных", prompt: "Опиши пошаговый план шардирования таблицы платежей на 500 млн строк в PostgreSQL." },
        { id: 8, title: "Анализ уязвимостей в C", category: "Безопасность", prompt: "Найди переполнение буфера и неопределенное поведение в этом коде на C и предложи безопасный вариант с использованием snprintf." },
        { id: 9, title: "Сравнение расходов на API", category: "Бизнес", prompt: "Составь таблицу сравнительного расчета годовых затрат на API между OpenAI GPT-4o и DeepSeek-V3 для компании с нагрузкой 50 млн токенов в день." },
        { id: 10, title: "Прошивка для ESP32", category: "Встраиваемые системы", prompt: "Напиши код прошивки для ESP32 с FreeRTOS, который опрашивает датчик BME280 по I2C и публикует показания в MQTT топик." }
      ]
    },
    en: {
      shortDesc: "The open-weights reasoning trailblazer (R1) that disrupted the global AI market by slashing compute costs by 90%.",
      fullDescription: [
        "DeepSeek is an AI research collective that shocked the global technology landscape by achieving parity with proprietary frontier models at an order-of-magnitude lower computational and training expense.",
        "Their landmark DeepSeek-V3 and DeepSeek-R1 (Reasoning) releases proved that advanced mathematical reasoning, coding mastery, and transparent chain-of-thought deduction can be democratized under open licenses.",
        "Because weights are freely downloadable, developers can run DeepSeek fully offline on enterprise clusters or personal hardware (via Ollama or vLLM), guaranteeing uncompromising data sovereignty."
      ],
      capabilities: [
        "Transparent step-by-step chain-of-thought logical reasoning (R1)",
        "Olympiad-tier performance in mathematics, physics, and competitive algorithmic design",
        "Open-weights architecture for completely private, offline, air-gapped hosting",
        "Disruptively low API pricing (10x to 20x cheaper than Western proprietary endpoints)",
        "Exceptional systems engineering depth in Rust, C++, and low-level kernel routines",
        "128,000-token contextual ingestion capacity",
        "Autonomous agent design enabled by ultra-affordable token costs"
      ],
      strengths: [
        "World-record price-to-performance efficiency for token generation",
        "Uncompromised data privacy via self-hosted on-premise deployments",
        "Superlative mathematical and algorithmic problem-solving benchmarks",
        "Visible thinking trajectory aiding code review and verification"
      ],
      limitations: [
        "Occasional peak-hour latency spikes on the public web endpoints",
        "Subject to local geopolitical compliance boundaries on select topics",
        "Less flamboyant prose stylistics in non-technical fiction tasks"
      ],
      pricing: {
        freeTier: "Completely free on the web platform and mobile applications",
        paidTier: "API: ~$0.14 - $0.55 per million tokens (unprecedented affordability)",
        note: "Model weights are freely accessible under permissive open licenses."
      },
      useCases: [
        { id: '1', icon: 'Cpu', title: "Local Offline Hosting", description: "Deploying via Ollama on local workstations with zero internet egress for maximum secrecy." },
        { id: '2', icon: 'Calculator', title: "Advanced Mathematics", description: "Solving formal combinatorial proofs and complex university-level calculus." },
        { id: '3', icon: 'Code', title: "High-Volume Micro-APIs", description: "Integrating high-throughput LLM pipelines at a tiny fraction of typical cloud costs." },
        { id: '4', icon: 'Layers', title: "LeetCode Hard Challenges", description: "Designing optimal algorithmic solutions with rigorous time-space complexity proofs." },
        { id: '5', icon: 'Server', title: "Autonomous Agent Fleets", description: "Running multi-agent recursive loops without fear of catastrophic API billing." },
        { id: '6', icon: 'CheckSquare', title: "Logic Flaw Audit", description: "Scrutinizing distributed state machines for hidden deadlocks and edge bugs." },
        { id: '7', icon: 'FileCode', title: "Systems Engineering", description: "Writing high-efficiency memory-safe code in Rust, C++, and Go." },
        { id: '8', icon: 'BookOpen', title: "Research Paper Decomposition", description: "Digesting theoretical computer science manuscripts into core proofs." }
      ],
      requirements: {
        technical: ["Browser or local GPU hardware (16GB+ RAM, NVIDIA RTX 3060+ for local inference)"],
        registration: ["Email or phone number for web portal access"],
        restrictions: ["Permissive open-weights license compliance"],
        pricingTiers: ["Web/Mobile: Free", "API: Fractions of a cent per million tokens"],
        security: ["Zero data leaves host machine when running locally"],
        ethics: ["Strict prohibition on deploying for malicious network exploit development"]
      },
      prompts: [
        { id: 1, title: "Chain-of-Thought Deduction", category: "Reasoning", prompt: "Solve this complex probability riddle step-by-step, displaying your full internal Chain-of-Thought deliberation at every milestone:\n\n[PASTE_PROBLEM]" },
        { id: 2, title: "Ollama Linux Deployment", category: "DevOps", prompt: "Provide a turnkey bash script to install Ollama, pull DeepSeek-R1-Distill-Qwen-14B, and expose it behind a secure reverse-proxy on Ubuntu 24.04." },
        { id: 3, title: "LeetCode Hard in C++", category: "Coding", prompt: "Write an optimal solution in C++ for the 'Trapping Rain Water II' 2D grid problem. Analyze algorithmic complexity with heap allocations." },
        { id: 4, title: "Low-Cost Agent Framework", category: "Architecture", prompt: "Design the software architecture for an autonomous data ingestion agent running 20,000 queries/day on the DeepSeek API under a $15 monthly budget." },
        { id: 5, title: "Rust Concurrency Patterns", category: "Programming", prompt: "Explain how to safely implement an asynchronous worker pool in Rust using Tokio channels without encountering deadlock." },
        { id: 6, title: "Partial Differential Equations", category: "Mathematics", prompt: "Solve the one-dimensional heat equation with Dirichlet boundary conditions using separation of variables." },
        { id: 7, title: "Database Sharding Roadmap", category: "Databases", prompt: "Outline an architectural strategy for sharding an e-commerce orders table across multiple PostgreSQL nodes using hash-based partition keys." },
        { id: 8, title: "C Buffer Overflow Remediation", category: "Security", prompt: "Audit this legacy C socket listener code. Identify unchecked memory boundaries and rewrite using bounded string operations." },
        { id: 9, title: "Fintech Token Cost Analysis", category: "Business", prompt: "Construct an executive cost-benefit table comparing OpenAI GPT-4o vs DeepSeek-V3 for an enterprise processing 1 billion tokens monthly." },
        { id: 10, title: "ESP32 Embedded Firmware", category: "Embedded", prompt: "Draft embedded C code for an ESP32 microcontroller using FreeRTOS to read an SPI accelerometer and stream data over MQTT." }
      ]
    }
  },

  // 7. Perplexity AI
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    company: 'Perplexity',
    category: 'search',
    accentColor: '#14B8A6',
    gradient: 'from-teal-500/20 via-emerald-500/10 to-transparent',
    websiteUrl: 'https://perplexity.ai',
    year: 2022,
    platforms: ['Web', 'iOS', 'Android', 'macOS', 'Browser Extension', 'API'],
    badge: {
      uz: 'Qidiruv & Manbali Javob',
      ru: 'Поиск & Ответы с источниками',
      en: 'Search & Grounded Answers',
    },
    logoSvg: 'perplexity',
    uz: {
      shortDesc: "An'anaviy qidiruv tizimlarini almashtiruvchi, har bir jumlasini nufuzli internet manbalari bilan isbotlab beruvchi tadqiqot AI tizimi.",
      fullDescription: [
        "Perplexity AI — sobiq OpenAI va Google AI tadqiqotchilari tomonidan yaratilgan bo'lib, an'anaviy qidiruv tizimlariga (Google Search) eng jiddiy raqobatchi hisoblanadi.",
        "U internet sahifalariga havolalar ro'yxatini berish o'rniga, veb-tarmog'ini real vaqtda skanerlaydi, yuzlab manbalarni tahlil qiladi va foydalanuvchiga har bir faktik fikr yonida aniq raqamlangan manba havolasi (citations) bilan ixcham javob tayyorlaydi.",
        "Uning 'Pro Search' va 'Deep Research' rejimlari bir necha bosqichli qidiruvni amalga oshiradi, kerakli ma'lumotni aniqlashtirish uchun foydalanuvchiga qo'shimcha savollar beradi va akademik jurnallar, moliyaviy hisobotlarni sinchkovlik bilan titkilaydi."
      ],
      capabilities: [
        "Real vaqtdagi veb-qidiruv va har bir fakt yonida aniq manbalar ko'rsatilishi",
        "Pro Search: ko'p bosqichli qidiruv va mantiqiy aniqlashtirish",
        "Deep Research: bir necha daqiqalik chuqur ilmiy va tahliliy hisobotlar tuzish",
        "Focus rejimlari: faqat akademik maqolalar, YouTube, Reddit yoki hisoblash bo'yicha qidirish",
        "Fayllar (PDF, CSV, docx) yuklab, ularni internetdagi ma'lumotlar bilan birlashtirib o'rganish",
        "Sahifalarni to'plamlarga (Collections) ajratish va jamoa bilan ulashish",
        "Turli yetakchi modellarni (Claude 3.5 Sonnet, GPT-4o) tanlash imkoniyati"
      ],
      strengths: [
        "Faktlarning tekshirilganligi va nufuzli manbalarga to'g'ridan-to'g'ri havolalar",
        "An'anaviy qidiruv tizimlariga nisbatan 10 barobar tezroq ma'lumot topish",
        "Deep Research xususiyati orqali to'liq tahliliy dokladlar tayyorlash",
        "Bir nechta yetakchi modellarni bitta interfeysda erkin almashtirib ishlatish"
      ],
      limitations: [
        "Pro qidiruvlar soni bepul versiyada har bir necha soatda cheklangan",
        "Sof badiiy ijod yoki kod generatsiyasi uchun ChatGPT yoki Claude qadar moslashmagan",
        "Pullik obuna narxi ($20/oy) individual talabalar uchun sezilarli bo'lishi mumkin"
      ],
      pricing: {
        freeTier: "Standart qidiruvlar cheksiz, Pro qidiruvlar kuniga bir necha marta",
        paidTier: "Perplexity Pro: $20/oy yoki $200/yil (cheksiz Pro qidiruv, model tanlash)",
        note: "Narxlar Perplexity AI rasmiy veb-saytidan tekshirilishi tavsiya etiladi."
      },
      useCases: [
        { id: '1', icon: 'Search', title: "Ilmiy tadqiqot", description: "Faqat PubMed va arXiv manbalari bo'yicha eng yangi tibbiy yoki fizik kashfiyotlarni o'rganish." },
        { id: '2', icon: 'ShoppingBag', title: "Mahsulotlarni solishtirish", description: "Bozordagi 5 ta noutbukning xususiyatlari, narxlari va real foydalanuvchilar sharhlarini taqqoslash." },
        { id: '3', icon: 'TrendingUp', title: "Bozor tahlili", description: "Biror kompaniyaning oxirgi chorakdagi moliyaviy hisobotlari va aksiyalar dinamikasini ko'rish." },
        { id: '4', icon: 'FileText', title: "Deep Research hisobotlari", description: "Biron sanoat bo'yicha 10 sahifalik keng qamrovli tahliliy ma'lumotnoma yaratish." },
        { id: '5', icon: 'Globe', title: "Sayohat rejalashtirish", description: "Muayyan shahar uchun viza talablari, ob-havo, transport va haqiqiy narxlar ro'yxatini tuzish." },
        { id: '6', icon: 'HelpCircle', title: "Mavhum savollarga javob", description: "Keng tarqalgan ilmiy yoki tarixiy afsonalarni ilmiy dalillar bilan rad etish." },
        { id: '7', icon: 'Users', title: "Reddit & Forumlar xulosasi", description: "Real odamlarning biror dastur yoki mashina haqidagi tajribasini umumlashtirish." },
        { id: '8', icon: 'Newspaper', title: "Tezkor yangiliklar", description: "Dunyo bo'yicha eng so'nggi ro'y bergan voqeaning to'liq xronologiyasini olish." }
      ],
      requirements: {
        technical: ["Har qanday zamonaviy brauzer", "Internet", "iOS / Android ilovalari"],
        registration: ["Google, Apple yoki email orqali tezkor ro'yxatdan o'tish"],
        restrictions: ["13 yoshdan oshgan foydalanuvchilar"],
        pricingTiers: ["Bepul standart qidiruv", "Pro: $20/oy"],
        security: ["Qidiruv tarixingizni boshqarish va o'chirish imkoniyati"],
        ethics: ["Manba havolalarini ochib, asosiy dalilni bevosita tekshirish tavsiya etiladi"]
      },
      prompts: [
        { id: 1, title: "Bozor raqobatchilari tahlili", category: "Tadqiqot", prompt: "O'zbekistondagi fintech bozorida yetakchi bo'lgan 3 ta to'lov ilovasini solishtir. Ularning bozor ulushi, oylik faol foydalanuvchilari (MAU) va komissiya stavkalarini aniq manbalar bilan keltir." },
        { id: 2, title: "Deep Research ilmiy hisoboti", category: "Ilm-fan", prompt: "Qattiq jismli batareyalar (solid-state batteries) sohasidagi so'nggi 12 oylik ilmiy yutuqlarni tahlil qil. Qaysi avtomobil ishlab chiqaruvchilari qachon ommaviy ishlab chiqarishni rejalashtirmoqda?" },
        { id: 3, title: "Noutbuk tanlash bo'yicha tavsiya", category: "Texnika", prompt: "Dasturchilar uchun $1500 gacha bo'lgan eng yaxshi 3 ta noutbukni solishtir. Batareya muddati, ekran sifati va foydalanuvchilarningReddit'dagi sharhlarini inobatga ol." },
        { id: 4, title: "Tibbiy tadqiqot tekshiruvi", category: "Salomatlik", prompt: "Faqat akademik va tibbiy jurnallarga (PubMed, The Lancet) asoslangan holda: Intermittent Fasting (vaqti-vaqti bilan och yurish) ning insulinga sezgirlikka ta'sirini tushuntir." },
        { id: 5, title: "Huquqiy pretsedent qidiruvi", category: "Huquq", prompt: "Sun'iy intellekt tomonidan yaratilgan asarlarning mualliflik huquqi bo'yicha AQSh va Yevropa Ittifoqidagi so'nggi sud qarorlari va rasmiy qonun hujjatlarini umumlashtir." },
        { id: 6, title: "Sayohat marshruti va xarajatlari", category: "Sayohat", prompt: "Yaponiya (Tokio va Kioto) bo'ylab 7 kunlik sayohat marshrutini tuz. JR Pass poyezd narxlari, mehmonxonalar o'rtacha qiymati va viza talablarini joriy yil manbalari bilan ko'rsat." },
        { id: 7, title: "Startup investitsiyalari", category: "Moliya", prompt: "2025-2026 yillarda sun'iy intellekt infratuzilmasiga kiritilgan eng yirik 5 ta venchur investitsiya raundlari qaysilar? Kompaniyalar, summalar va yetakchi investorlarni ko'rsat." },
        { id: 8, title: "Reddit umumiy fikri (Focus)", category: "Fikr", prompt: "Reddit Focus: Dasturchilar Next.js 15 versiyasiga o'tish haqida nimalar demoqda? Eng ko'p uchrayotgan noroziliklar va maqtovlarni umumlashtir." },
        { id: 9, title: "Tarixiy faktlarni tekshirish", category: "Tarix", prompt: "Buyuk Ipak Yo'lining gullab-yashnashida Samarqand va Buxoro shaharlarining tutgan o'rni haqidagi so'nggi arxeologik topilmalarni nufuzli tarixiy manbalar asosida bayon et." },
        { id: 10, title: "Yangi dori vositasi tasdiqlanishi", category: "Farmatsevtika", prompt: "FDA tomonidan so'nggi 6 oy ichida Altsgeymer kasalligini davolash uchun qaysi dori vositalari tasdiqlandi? Ularning klinik samaradorligi foizlari qanday?" }
      ]
    },
    ru: {
      shortDesc: "Интеллектуальная поисковая система нового поколения, формулирующая ответы со ссылками на авторитетные источники.",
      fullDescription: [
        "Perplexity AI — революционная диалоговая поисковая система, созданная бывшими исследователями OpenAI и Google AI в качестве прямой альтернативы классическим поисковикам.",
        "Вместо списка 'синих ссылок' Perplexity в реальном времени сканирует глобальную сеть, фильтрует сотни источников и формирует связный структурированный ответ, подкрепляя каждое утверждение проверяемыми сносками.",
        "Режимы 'Pro Search' и 'Deep Research' способны проводить многоэтапные расследования, задавать уточняющие вопросы и формировать полноценные многостраничные аналитические отчеты по научным базам и финансовым архивам."
      ],
      capabilities: [
        "Поиск в реальном времени со строгими интерактивными ссылками на источники",
        "Pro Search: глубокий многошаговый поиск с уточняющими вопросами",
        "Deep Research: автономная генерация масштабных аналитических отчетов",
        "Фокус-режимы: Академический (arXiv/PubMed), YouTube, Reddit, Вычисления",
        "Анализ загруженных документов (PDF, CSV) с перекрестным поиском в сети",
        "Организация закладок в тематические коллекции (Collections)",
        "Возможность выбора лежащей в основе модели (Claude 3.5 Sonnet, GPT-4o)"
      ],
      strengths: [
        "Высочайшая достоверность фактов за счет мгновенной верификации по источникам",
        "Экономия времени по сравнению с ручным переходом по ссылкам в Google",
        "Глубокий исследовательский режим Deep Research",
        "Гибкость переключения между флагманскими языковыми моделями"
      ],
      limitations: [
        "Лимит на количество Pro-поисков в бесплатной версии",
        "Меньше подходит для чисто художественного творчества без опоры на факты",
        "Стоимость подписки Pro составляет стандартные $20/месяц"
      ],
      pricing: {
        freeTier: "Неограниченный базовый поиск, несколько Pro-запросов в день",
        paidTier: "Perplexity Pro: $20/месяц или $200/год (неограниченный Pro Search, выбор моделей)",
        note: "Актуальные условия подписки уточняйте на сайте perplexity.ai."
      },
      useCases: [
        { id: '1', icon: 'Search', title: "Научный поиск", description: "Поиск публикаций в рецензируемых базах PubMed и arXiv с выжимкой выводов." },
        { id: '2', icon: 'ShoppingBag', title: "Выбор техники", description: "Сравнение спецификаций, тестов производительности и отзывов пользователей." },
        { id: '3', icon: 'TrendingUp', title: "Финансовая разведка", description: "Анализ квартальных отчетов компаний и актуальных трендов на фондовом рынке." },
        { id: '4', icon: 'FileText', title: "Отчеты Deep Research", description: "Автоматическое создание глубоких 10-страничных обзоров рынков." },
        { id: '5', icon: 'Globe', title: "Организация путешествий", description: "Поиск визовых правил, цен на билеты и рекомендаций путешественников." },
        { id: '6', icon: 'HelpCircle', title: "Разрушение мифов", description: "Проверка вирусных новостей и мифов с опорой на научные консенсусы." },
        { id: '7', icon: 'Users', title: "Сводка с Reddit", description: "Агрегация живого пользовательского опыта по софту или гаджетам." },
        { id: '8', icon: 'Newspaper', title: "Горячая хроника", description: "Восстановление хронологии происходящих прямо сейчас мировых событий." }
      ],
      requirements: {
        technical: ["Любой современный браузер", "Интернет", "iOS / Android приложения"],
        registration: ["Вход через Google / Apple / Email"],
        restrictions: ["Возраст 13+"],
        pricingTiers: ["Бесплатно — стандартный поиск", "Pro — $20/месяц"],
        security: ["Управление историей поиска и ее удаление в личном кабинете"],
        ethics: ["Рекомендуется открывать прикрепленные ссылки для проверки тонких контекстов"]
      },
      prompts: [
        { id: 1, title: "Сравнение финтех-приложений", category: "Исследования", prompt: "Сравни 3 ведущих платежных сервиса в Центральной Азии. Приведи их рыночную долю, количество активных пользователей (MAU) и размер комиссии с ссылками на источники." },
        { id: 2, title: "Отчет по твердотельным батареям", category: "Наука", prompt: "Проведи глубокий поиск по прогрессу внедрения твердотельных аккумуляторов для электромобилей за последние 12 месяцев. Укажи автоконцерны и сроки запуска." },
        { id: 3, title: "Выбор ноутбука для разработки", category: "Технологии", prompt: "Сравни 3 лучших ноутбука до $1500 для backend-разработчика. Учти автономность, клавиатуру и реальные отзывы с Reddit." },
        { id: 4, title: "Академический поиск PubMed", category: "Медицина", prompt: "Только по рецензируемым медицинским базам: Каково современное научное понимание влияния интервального голодания на уровень гликированного гемоглобина?" },
        { id: 5, title: "Судебная практика по AI", category: "Право", prompt: "Приведи обзор недавних судебных решений в США и ЕС по делам о защите авторских прав на обучающие датасеты для генеративных нейросетей." },
        { id: 6, title: "Маршрут по Японии с бюджетом", category: "Путешествия", prompt: "Составь 7-дневный маршрут Токио-Киото с учетом актуальных цен на проездной JR Pass, средней стоимости отелей и визовых требований." },
        { id: 7, title: "Венчурные сделки в AI", category: "Бизнес", prompt: "Назови 5 крупнейших венчурных раундов в индустрии искусственного интеллекта за последние 6 месяцев: суммы, инвесторы и назначение инвестиций." },
        { id: 8, title: "Reddit-фокус: Next.js 15", category: "Мнения", prompt: "Reddit Focus: Что говорят разработчики о миграции на Next.js 15? Выдели главные жалобы на баги и положительные отзывы." },
        { id: 9, title: "Археологические открытия", category: "История", prompt: "Какие новые археологические находки за последние 3 года пролили свет на историю городов Шелкового пути в Самарканде и Бухаре?" },
        { id: 10, title: "Одобрение FDA", category: "Фармацевтика", prompt: "Какие новые препараты для терапии болезни Альцгеймера были одобрены FDA за последний год? Каковы показатели их клинической эффективности?" }
      ]
    },
    en: {
      shortDesc: "The premier answer engine disrupting traditional search by synthesizing real-time web telemetry with authoritative citations.",
      fullDescription: [
        "Perplexity AI, founded by alumni of OpenAI and Google AI, represents the most formidable challenge to conventional search engines in decades.",
        "Instead of serving ten algorithmic blue links, Perplexity indexes the live web in real time, parses dozens of primary sources, and composes an authoritative narrative answer marked with traceable footnote citations.",
        "Its signature 'Pro Search' and 'Deep Research' capabilities execute multi-stage autonomous inquiry: formulating clarifying questions, cross-verifying academic and financial datasets, and generating exhaustive multi-page research syntheses."
      ],
      capabilities: [
        "Live web inquiry paired with verifiable clickable source citations",
        "Pro Search: multi-turn reasoning and iterative query refinement",
        "Deep Research: autonomous multi-page synthesis of complex domains",
        "Domain Focus modes: Academic (arXiv/PubMed), YouTube, Reddit, Computational",
        "Document ingestion (PDF, CSV) coupled with real-time web verification",
        "Collaborative research collections and shared team workspaces",
        "Choice of leading underlying LLMs (Claude 3.5 Sonnet, GPT-4o)"
      ],
      strengths: [
        "Near-zero hallucination rates via strict grounding in active web sources",
        "Exponential time savings compared to manual Google search browsing",
        "Exhaustive investigative reporting enabled by Deep Research",
        "Unified interface providing access to multiple premier AI models"
      ],
      limitations: [
        "Pro queries are throttled under daily allowances in the free tier",
        "Less specialized for abstract creative prose or standalone fiction writing",
        "Subscription cost mirrors industry standard ($20/month)"
      ],
      pricing: {
        freeTier: "Unlimited standard quick searches with limited daily Pro queries",
        paidTier: "Perplexity Pro at $20/mo or $200/yr (unlimited Pro Search & model selector)",
        note: "Subscription parameters are maintained on perplexity.ai."
      },
      useCases: [
        { id: '1', icon: 'Search', title: "Scholarly Literature Reviews", description: "Surveying PubMed and arXiv publications to extract empirical medical and physics data." },
        { id: '2', icon: 'ShoppingBag', title: "Consumer Product Teardowns", description: "Benchmarking hardware benchmarks, prices, and verified consumer sentiment." },
        { id: '3', icon: 'TrendingUp', title: "Competitive Market Telemetry", description: "Tracking corporate SEC filings, quarterly earnings, and equity analyst trends." },
        { id: '4', icon: 'FileText', title: "Deep Research Whitepapers", description: "Generating 10-page market analyses complete with footnotes and data exhibits." },
        { id: '5', icon: 'Globe', title: "International Travel Logistics", description: "Verifying current visa requirements, transit schedules, and regional costs." },
        { id: '6', icon: 'HelpCircle', title: "Misinformation Debunking", description: "Investigating viral internet claims using peer-reviewed scientific consensus." },
        { id: '7', icon: 'Users', title: "Community Sentiment Mining", description: "Aggregating lived software developer feedback across Reddit and specialty forums." },
        { id: '8', icon: 'Newspaper', title: "Breaking Global Chronology", description: "Reconstructing the verified timeline of fast-moving international news." }
      ],
      requirements: {
        technical: ["Modern desktop or mobile browser", "Broadband internet", "Native iOS / Android apps"],
        registration: ["OAuth with Google, Apple, or email"],
        restrictions: ["Ages 13+"],
        pricingTiers: ["Free tier with standard search", "Pro at $20/mo"],
        security: ["User controls for search history persistence and deletion"],
        ethics: ["Inspect underlying source citations for nuanced context verification"]
      },
      prompts: [
        { id: 1, title: "Central Asia Fintech Matrix", category: "Research", prompt: "Compare the top 3 payment super-apps in Central Asia. Detail their estimated market share, MAU figures, and merchant transaction fees with verifiable citations." },
        { id: 2, title: "Solid-State Battery Progress", category: "Science", prompt: "Provide a comprehensive Deep Research synthesis on solid-state battery commercialization over the past 12 months. Which automakers have committed to pilot lines?" },
        { id: 3, title: "Developer Laptop Shootout", category: "Hardware", prompt: "Evaluate the 3 best developer laptops under $1,500. Benchmark thermal performance, keyboard travel, and real-world battery endurance based on Reddit user reports." },
        { id: 4, title: "Intermittent Fasting PubMed Review", category: "Health", prompt: "Restricting strictly to peer-reviewed clinical trials on PubMed: What is the current consensus on 16:8 time-restricted feeding regarding insulin sensitivity?" },
        { id: 5, title: "AI Copyright Legal Precedents", category: "Legal", prompt: "Summarize recent landmark court rulings and US Copyright Office guidelines regarding the copyrightability of generative AI outputs." },
        { id: 6, title: "Japan Rail Logistics & Budget", category: "Travel", prompt: "Design a 7-day Tokyo-to-Kyoto itinerary factoring in current JR Pass nationwide rates, mid-tier boutique hotel averages, and seasonal transit advisories." },
        { id: 7, title: "Frontier AI Venture Rounds", category: "Finance", prompt: "Identify the 5 largest venture capital funding rounds into generative AI infrastructure over the last 6 months: valuation, lead investors, and milestones." },
        { id: 8, title: "Reddit Developer Sentiment", category: "Engineering", prompt: "Reddit Focus: Synthesize developer consensus regarding migration hurdles to Next.js 15. Outline the most frequent architectural complaints." },
        { id: 9, title: "Silk Road Archaeological Discoveries", category: "History", prompt: "What recent archaeological excavations in Samarkand and Bukhara have uncovered new insights into trade routes along the ancient Silk Road?" },
        { id: 10, title: "FDA Breakthrough Approvals", category: "Pharma", prompt: "Which novel therapeutics for Alzheimer's disease received FDA approval over the past year? Contrast their clinical efficacy rates and safety warnings." }
      ]
    }
  },

  // 8. Midjourney
  {
    id: 'midjourney',
    name: 'Midjourney',
    company: 'Midjourney Inc.',
    category: 'image',
    accentColor: '#8B5CF6',
    gradient: 'from-purple-500/20 via-violet-500/10 to-transparent',
    websiteUrl: 'https://midjourney.com',
    year: 2022,
    platforms: ['Web', 'Discord'],
    badge: {
      uz: 'Rasm & San\'at',
      ru: 'Изображения & Арт',
      en: 'Image & Artistry',
    },
    logoSvg: 'midjourney',
    uz: {
      shortDesc: "Dunyoning eng yuqori sifatli, fotorealistik va badiiy jihatdan mukammal tasvirlar yaratuvchi yetakchi generativ neyrotarmog'i.",
      fullDescription: [
        "Midjourney — David Holz tomonidan asos solingan mustaqil tadqiqot laboratoriyasining mahsuli bo'lib, generativ tasvir san'ati sohasida so'zsiz jahon yetakchisidir.",
        "Uning v6 va v6.1 arxitekturasi fotorealizm, kinematografik yorug'lik, murakkab teksturalar, inson qo'llari va yuz ifodalarini mislsiz aniqlikda chizadi. Dastlab Discord bot orqali mashhur bo'lgan tizim bugungi kunda qulay veb-interfeysga ham ega.",
        "Dizaynerlar, konsept-rassomlar, kinorejissyorlar va reklama agentliklari uchun Midjourney fantaziyani bir necha soniyada professional san'at asariga aylantiruvchi asosiy vositaga aylangan."
      ],
      capabilities: [
        "Ultra yuqori aniqlikdagi fotorealistik tasvirlar va kinematografik kadrlar yaratish",
        "Maxsus parametrlar orqali boshqarish: nisbatlar (--ar), stilizatsiya (--s), xaos (--c)",
        "Tasvir ichidagi ma'lum joyni qayta chizish (Inpainting / Vary Region)",
        "Tasvir chegaralarini kengaytirish (Outpainting / Pan)",
        "Bir necha rasmlarni bir-biriga uyg'unlashtirish (Image Prompting & Blend)",
        "Stil uyg'unligi (Style Reference --sref) va qahramon yuzi barqarorligi (--cref)",
        "Matnlarni tasvir ichiga to'g'ri va chiroyli joylashtirish"
      ],
      strengths: [
        "Vizual estetika va kompozitsiya bo'yicha dunyodagi eng go'zal natijalar",
        "Fotorealizm: teri mikrotuzilishi, ko'z yiltirashi va materiallar teksturasi",
        "Dizaynerlar uchun professional boshqaruv parametrlari (--ar, --sref, --cref)",
        "Faol va ilhomlantiruvchi global ijodiy hamjamiyat"
      ],
      limitations: [
        "Doimiy bepul versiyasi mavjud emas (faqat pullik obuna orqali ishlaydi)",
        "Faqat tasvir generatsiyasiga ixtisoslashgan (matnli suhbat yoki kod yozmaydi)",
        "Discord interfeysi yangi boshlovchilar uchun biroz chalkash tuyulishi mumkin"
      ],
      pricing: {
        freeTier: "Doimiy bepul tarif yo'q (vaqti-vaqti bilan qisqa promo sinovlar)",
        paidTier: "Basic: $10/oy; Standard: $30/oy; Pro: $60/oy; Mega: $120/oy",
        note: "Yillik obunada 20% gacha chegirma taqdim etiladi."
      },
      useCases: [
        { id: '1', icon: 'Palette', title: "Konsept-art", description: "Filmlar, video o'yinlar va animatsiyalar uchun qahramonlar va dunyolar dizayni." },
        { id: '2', icon: 'ShoppingBag', title: "Mahsulot dizayni", description: "Parfyumeriya, soatlar, mebel va avtomobillarning futuristik konseptlarini chizish." },
        { id: '3', icon: 'Home', title: "Arxitektura & Interyer", description: "Zamonaviy villalar, interyerlar va landshaft dizayni vizualizatsiyasi." },
        { id: '4', icon: 'Megaphone', title: "Reklama & Bannerlar", description: "Marketing kampaniyalari uchun yuqori darajadagi vizual illyustratsiyalar." },
        { id: '5', icon: 'BookOpen', title: "Kitob muqovalari", description: "Fantastika, ertaklar va ilmiy kitoblar uchun betakror muqova san'ati." },
        { id: '6', icon: 'Shirt', title: "Moda & Kiyim-kechak", description: "High-fashion liboslar kolleksiyasi va matolar teksturasini yaratish." },
        { id: '7', icon: 'Camera', title: "Fototahrir va kadrlar", description: "Hasselblad yoki Leica kameralari uslubida fotorealistik portretlar." },
        { id: '8', icon: 'Image', title: "Musiqa albomi muqovasi", description: "Musiqiy treklar va albomlar uchun atmosferali va ramziy muqovalar." }
      ],
      requirements: {
        technical: ["Discord akkaunti yoki Midjourney veb-sayti kirishi", "Brauzer va internet"],
        registration: ["Discord hisobi orqali avtorizatsiya"],
        restrictions: ["13+ yosh (Discord talablari), qat'iy NSFW (ochiq axloqsiz) cheklovlar"],
        pricingTiers: ["Basic ($10/oy)", "Standard ($30/oy)", "Pro ($60/oy)"],
        security: ["Pro tarifida yashirin (Stealth) rejim mavjud, rasmlarni ommadan yashirish mumkin"],
        ethics: ["Boshqa shaxslarning ruxsatisiz ularning yuzlarini noqonuniy ishlatmaslik"]
      },
      prompts: [
        { id: 1, title: "Kinematik portret", category: "Fotorealizm", prompt: "Cinematic portrait of an elderly Uzbek craftsman in Bukhara, intricate wrinkles, wise eyes, soft morning sunlight through carved wooden window, 35mm photograph, Kodak Portra 400, depth of field --ar 16:9 --v 6.1 --style raw" },
        { id: 2, title: "Futuristik arxitektura", category: "Arxitektura", prompt: "Biophilic futuristic skyscraper in Dubai, spiraling vertical gardens, translucent solar glass, golden hour reflection, architectural photography, hyper-detailed, 8k resolution --ar 21:9 --v 6.1" },
        { id: 3, title: "Mahsulot reklama dizayni", category: "Reklama", prompt: "Luxury perfume bottle made of frosted obsidian glass, hovering over calm black water, subtle golden ripples, dramatic studio lighting, high-end commercial shot --ar 4:5 --v 6.1" },
        { id: 4, title: "Kiberpank shahar manzarasi", category: "Ijod", prompt: "Rain-slicked cyberpunk alley in Neo-Tokyo, holographic neon advertisements, flying delivery drones, reflections in puddles, cinematic composition, Blade Runner aesthetics --ar 16:9 --v 6.1 --stylize 250" },
        { id: 5, title: "Fantastik qahramon", category: "O'yinlar", prompt: "Concept art of a celestial warrior maiden, ornate porcelain armor with gold filigree, glowing ethereal wings, nebula background, dynamic fighting pose, Unreal Engine 5 render --ar 9:16 --v 6.1" },
        { id: 6, title: "Minimalistik interyer", category: "Interyer", prompt: "Japandi style living room, low oak furniture, paper lantern, large floor-to-ceiling window overlooking bamboo garden, warm afternoon light, Architectural Digest cover --ar 16:9 --v 6.1" },
        { id: 7, title: "Izometrik 3D illyustratsiya", category: "Grafika", prompt: "Isometric 3D miniature diorama of a cozy coffee shop, warm lights inside, tiny patrons, miniature plants on roof, smooth clay render style, vibrant pastel colors --ar 1:1 --v 6.1" },
        { id: 8, title: "Yuqori moda (Haute Couture)", category: "Moda", prompt: "Editorial fashion photography, model wearing avant-garde sculptural dress woven from metallic threads and bioluminescent flowers, Vogue runway editorial, striking pose --ar 4:5 --v 6.1 --stylize 300" },
        { id: 9, title: "Makro tabiat surati", category: "Tabiat", prompt: "Extreme macro photography of a crystal dewdrop resting on an emerald leaf, miniature universe reflected inside droplet, morning mist, National Geographic award-winning photo --ar 3:2 --v 6.1" },
        { id: 10, title: "Musiqa albomi muqovasi", category: "San'at", prompt: "Abstract surreal album cover art, floating geometric monolith above an endless pink sand desert, gradient purple sunset, retro-futuristic synthwave mood --ar 1:1 --v 6.1 --stylize 400" }
      ]
    },
    ru: {
      shortDesc: "Мировой лидер в сфере генерации высокохудожественных и фотореалистичных изображений профессионального качества.",
      fullDescription: [
        "Midjourney — независимая исследовательская лаборатория под руководством Дэвида Хольца, ставшая абсолютным синонимом высшего качества в генеративном визуальном искусстве.",
        "Архитектуры v6 и v6.1 задали недосягаемый стандарт фотореализма, кинематографического света, микротекстур кожи, анатомической точности кистей рук и типографики. Сервис доступен как через Discord, так и в собственном современном веб-редакторе.",
        "Midjourney является незаменимым рабочим инструментом для художников-постановщиков, концепт-артистов кино, промышленных дизайнеров и рекламных креаторов мирового уровня."
      ],
      capabilities: [
        "Создание фотореалистичных кадров кинематографического качества с детализацией до пор",
        "Тонкая параметрическая настройка соотношения сторон (--ar), хаоса (--c) и стилизации (--s)",
        "Локальная перерисовка выбранных фрагментов изображения (Inpainting / Vary Region)",
        "Панорамное расширение границ холста в любом направлении (Outpainting / Pan)",
        "Интеллектуальное смешивание нескольких референсов (Blend / Image Prompting)",
        "Сохранение консистентности стиля (--sref) и черт лица персонажа (--cref)",
        "Корректное встраивание коротких текстовых надписей прямо в композицию"
      ],
      strengths: [
        "Безоговорочное мировое лидерство в эстетике, текстурах и свете",
        "Огромные возможности художественной вариативности и стилизации",
        "Профессиональный инструментарий сохранения единого персонажа и стиля",
        "Крупнейшее и самое вдохновляющее мировое сообщество цифровых художников"
      ],
      limitations: [
        "Отсутствие постоянного бесплатного тарифа (только платная подписка)",
        "Узкая специализация исключительно на генерации графики",
        "Управление через Discord может требовать определенного навыка"
      ],
      pricing: {
        freeTier: "Постоянный бесплатный доступ отсутствует",
        paidTier: "Basic: $10/мес; Standard: $30/мес; Pro: $60/мес; Mega: $120/мес",
        note: "При годовой оплате предоставляется скидка 20%."
      },
      useCases: [
        { id: '1', icon: 'Palette', title: "Концепт-арт", description: "Разработка персонажей, монстров и миров для видеоигр и киноиндустрии." },
        { id: '2', icon: 'ShoppingBag', title: "Промдизайн", description: "Визуализация флаконов, люксовых аксессуаров, мебели и концепт-каров." },
        { id: '3', icon: 'Home', title: "Архитектура", description: "Генерация концепций фасадов зданий, ландшафтов и интерьеров." },
        { id: '4', icon: 'Megaphone', title: "Рекламный вижуал", description: "Создание эффектных фонов и ключевых изображений для билбордов и соцсетей." },
        { id: '5', icon: 'BookOpen', title: "Книжная графика", description: "Иллюстрирование обложек романов, фэнтези и детских сказок." },
        { id: '6', icon: 'Shirt', title: "Индустрия моды", description: "Дизайн авангардных коллекций одежды, фактур тканей и обуви." },
        { id: '7', icon: 'Camera', title: "Студийные портреты", description: "Фотосессии вымышленных моделей в стиле Hasselblad и Leica." },
        { id: '8', icon: 'Image', title: "Обложки треков", description: "Создание атмосферных артов для музыкальных релизов и винила." }
      ],
      requirements: {
        technical: ["Учетная запись Discord или доступ к веб-платформе Midjourney", "Браузер"],
        registration: ["Авторизация через Discord"],
        restrictions: ["Возраст 13+, строгий запрет на контент 18+ (NSFW) и насилие"],
        pricingTiers: ["Basic ($10/мес)", "Standard ($30/мес)", "Pro ($60/мес)"],
        security: ["Режим скрытности (Stealth Mode) в плане Pro для приватных генераций"],
        ethics: ["Запрет на использование чужих биометрических данных без разрешения"]
      },
      prompts: [
        { id: 1, title: "Кинематографичный портрет", category: "Фото", prompt: "Cinematic portrait of an elderly craftsman in Bukhara, intricate wrinkles, wise eyes, soft morning sunlight, 35mm photograph, Kodak Portra 400, depth of field --ar 16:9 --v 6.1 --style raw" },
        { id: 2, title: "Биофильная архитектура", category: "Архитектура", prompt: "Biophilic futuristic skyscraper in Dubai, spiraling vertical gardens, translucent solar glass, golden hour reflection, architectural photography, 8k resolution --ar 21:9 --v 6.1" },
        { id: 3, title: "Рекламная предметка", category: "Реклама", prompt: "Luxury perfume bottle made of frosted obsidian glass, hovering over calm black water, subtle golden ripples, dramatic studio lighting --ar 4:5 --v 6.1" },
        { id: 4, title: "Киберпанк-улица", category: "Арт", prompt: "Rain-slicked cyberpunk alley in Neo-Tokyo, holographic neon advertisements, flying delivery drones, reflections in puddles, Blade Runner aesthetics --ar 16:9 --v 6.1 --stylize 250" },
        { id: 5, title: "Фэнтези-воительница", category: "Игры", prompt: "Concept art of a celestial warrior maiden, ornate porcelain armor with gold filigree, glowing ethereal wings, dynamic fighting pose, Unreal Engine 5 render --ar 9:16 --v 6.1" },
        { id: 6, title: "Интерьер Japandi", category: "Интерьер", prompt: "Japandi style living room, low oak furniture, paper lantern, large floor-to-ceiling window overlooking bamboo garden, warm afternoon light --ar 16:9 --v 6.1" },
        { id: 7, title: "Изометрическая диорама", category: "3D", prompt: "Isometric 3D miniature diorama of a cozy coffee shop, warm lights inside, tiny patrons, miniature plants on roof, smooth clay render style --ar 1:1 --v 6.1" },
        { id: 8, title: "Высокая мода", category: "Fashion", prompt: "Editorial fashion photography, model wearing avant-garde sculptural dress woven from metallic threads and bioluminescent flowers, Vogue runway editorial --ar 4:5 --v 6.1 --stylize 300" },
        { id: 9, title: "Макросъемка капли", category: "Природа", prompt: "Extreme macro photography of a crystal dewdrop resting on an emerald leaf, miniature universe reflected inside droplet, morning mist --ar 3:2 --v 6.1" },
        { id: 10, title: "Сюрреалистичный альбом", category: "Музыка", prompt: "Abstract surreal album cover art, floating geometric monolith above an endless pink sand desert, gradient purple sunset, retro-futuristic synthwave mood --ar 1:1 --v 6.1 --stylize 400" }
      ]
    },
    en: {
      shortDesc: "The undisputed global benchmark for photorealistic visual generation, cinematic lighting, and digital artistry.",
      fullDescription: [
        "Midjourney, an independent research laboratory spearheaded by David Holz, stands as the gold standard for generative imagery and aesthetic finesse.",
        "Its landmark v6 and v6.1 model releases achieve uncanny photorealism, subsurface skin scattering, tactile material physics, correct hand anatomy, and legible typographic composition. Available via both Discord and its dedicated web workspace.",
        "Midjourney has established itself as the indispensable visual co-pilot for concept artists, cinematographers, brand designers, and art directors worldwide."
      ],
      capabilities: [
        "Uncanny photorealistic image synthesis with rich cinematic depth of field",
        "Granular control flags: aspect ratio (--ar), stylization (--s), and chaos (--c)",
        "Inpainting / Vary Region for localized visual retouching and alteration",
        "Outpainting / Pan for multi-directional canvas expansion",
        "Seamless image blending and multi-reference style fusion",
        "Style reference consistency (--sref) and character facial preservation (--cref)",
        "Accurate rendering of short textual signage within compositions"
      ],
      strengths: [
        "Unmatched aesthetic taste, composition balance, and lighting nuance",
        "Photorealistic texture fidelity across textiles, metals, and skin",
        "Powerful consistency switches for professional creative campaigns",
        "Vibrant, worldwide community of visual creators sharing prompt techniques"
      ],
      limitations: [
        "No permanent free-tier availability (paid subscription model)",
        "Exclusively dedicated to visual generation (no conversational text or code)",
        "Discord bot workflow can present an initial learning curve for newcomers"
      ],
      pricing: {
        freeTier: "No ongoing free tier (periodic promotional trials)",
        paidTier: "Basic at $10/mo; Standard at $30/mo; Pro at $60/mo; Mega at $120/mo",
        note: "Annual billing options carry a 20% discount."
      },
      useCases: [
        { id: '1', icon: 'Palette', title: "Entertainment Concept Art", description: "Worldbuilding, biome design, and character visual development for gaming and film." },
        { id: '2', icon: 'ShoppingBag', title: "Industrial Product Prototyping", description: "Visualizing luxury fragrances, footwear, horology, and mobility concepts." },
        { id: '3', icon: 'Home', title: "Architectural Previsualization", description: "Rendering biophilic facades, urban landscapes, and modernist residential spaces." },
        { id: '4', icon: 'Megaphone', title: "Brand Campaign Visuals", description: "Crafting hero assets for omnichannel advertising and digital billboards." },
        { id: '5', icon: 'BookOpen', title: "Editorial Book Cover Art", description: "Illustrating striking visual covers for speculative fiction and historical volumes." },
        { id: '6', icon: 'Shirt', title: "High-Fashion Ideation", description: "Exploring avant-garde silhouettes, textile weaves, and runway attire." },
        { id: '7', icon: 'Camera', title: "Studio Portraiture", description: "Composing fictional editorial portraits mimicking medium-format analog film." },
        { id: '8', icon: 'Image', title: "Album & Vinyl Covers", description: "Synthesizing surreal artwork for electronic and orchestral musical releases." }
      ],
      requirements: {
        technical: ["Discord account or Midjourney web client access", "Standard modern browser"],
        registration: ["Discord single-sign-on"],
        restrictions: ["Ages 13+; strict ban on NSFW, explicit nudity, and gratuitous violence"],
        pricingTiers: ["Basic ($10/mo)", "Standard ($30/mo)", "Pro ($60/mo)"],
        security: ["Stealth Mode available on Pro tier to prevent public community gallery listing"],
        ethics: ["Strict adherence against unauthorized deepfakes of private individuals"]
      },
      prompts: [
        { id: 1, title: "Cinematic Portraiture", category: "Photography", prompt: "Cinematic portrait of an elderly craftswoman in Bukhara, intricate wrinkles, wise eyes, soft morning sunlight through carved lattice, 35mm photograph, Kodak Portra 400, depth of field --ar 16:9 --v 6.1 --style raw" },
        { id: 2, title: "Biophilic Skyscraper", category: "Architecture", prompt: "Biophilic futuristic skyscraper in Dubai, spiraling vertical gardens, translucent solar glass, golden hour reflection, architectural photography, hyper-detailed, 8k resolution --ar 21:9 --v 6.1" },
        { id: 3, title: "Luxury Product Teardown", category: "Commercial", prompt: "Luxury perfume bottle made of frosted obsidian glass, hovering over calm black water, subtle golden ripples, dramatic studio lighting, high-end commercial shot --ar 4:5 --v 6.1" },
        { id: 4, title: "Cyberpunk Rainscape", category: "Cinematic", prompt: "Rain-slicked cyberpunk alley in Neo-Tokyo, holographic neon advertisements, flying delivery drones, reflections in puddles, cinematic composition, Blade Runner aesthetics --ar 16:9 --v 6.1 --stylize 250" },
        { id: 5, title: "Celestial Warrior Maiden", category: "Gaming", prompt: "Concept art of a celestial warrior maiden, ornate porcelain armor with gold filigree, glowing ethereal wings, nebula background, dynamic fighting pose, Unreal Engine 5 render --ar 9:16 --v 6.1" },
        { id: 6, title: "Japandi Living Room", category: "Interior", prompt: "Japandi style living room, low oak furniture, paper lantern, large floor-to-ceiling window overlooking bamboo garden, warm afternoon light, Architectural Digest cover --ar 16:9 --v 6.1" },
        { id: 7, title: "Isometric 3D Diorama", category: "3D", prompt: "Isometric 3D miniature diorama of a cozy coffee shop, warm lights inside, tiny patrons, miniature plants on roof, smooth clay render style, vibrant pastel colors --ar 1:1 --v 6.1" },
        { id: 8, title: "Avant-Garde Runway", category: "Fashion", prompt: "Editorial fashion photography, model wearing avant-garde sculptural dress woven from metallic threads and bioluminescent flowers, Vogue runway editorial, striking pose --ar 4:5 --v 6.1 --stylize 300" },
        { id: 9, title: "Macro Dewdrop World", category: "Nature", prompt: "Extreme macro photography of a crystal dewdrop resting on an emerald leaf, miniature universe reflected inside droplet, morning mist, National Geographic award-winning photo --ar 3:2 --v 6.1" },
        { id: 10, title: "Surrealist Vinyl Artwork", category: "Art", prompt: "Abstract surreal album cover art, floating geometric monolith above an endless pink sand desert, gradient purple sunset, retro-futuristic synthwave mood --ar 1:1 --v 6.1 --stylize 400" }
      ]
    }
  },

  // 9. Meta AI / Llama
  {
    id: 'meta-llama',
    name: 'Meta AI / Llama',
    company: 'Meta',
    category: 'open',
    accentColor: '#0668E1',
    gradient: 'from-blue-600/20 via-indigo-600/10 to-transparent',
    websiteUrl: 'https://llama.meta.com',
    year: 2023,
    platforms: ['WhatsApp', 'Instagram', 'Messenger', 'Web', 'API', 'Open Weights'],
    badge: {
      uz: 'Ochiq Vazn & Ijtimoiy Tarmoq',
      ru: 'Открытые веса & Соцсети',
      en: 'Open Weights & Social',
    },
    logoSvg: 'meta-llama',
    uz: {
      shortDesc: "Mark Zuckerberg boshchiligida ochiq ekotizimga taqdim etilgan, dunyo bo'ylab millionlab dasturchilar ishlatadigan ochiq til modeli.",
      fullDescription: [
        "Meta AI va Llama (Large Language Model Meta AI) — Meta kompaniyasining ochiq manba va ochiq vaznlar falsafasiga tayangan ulkan sun'iy intellekt tashabbusidir.",
        "Llama 3, 3.1 va 3.3 modellari (8B, 70B va 405B parametrlarga ega) ochiq modellar olamida inqilob qildi va yopiq korporativ gigantlar (OpenAI, Google) bilan tenglashdi. Dunyo bo'ylab o'n minglab startaplar va universitetlar o'z mahsulotlarini aynan Llama asosida qurmoqda.",
        "Shu bilan birga, Meta AI milliardlab foydalanuvchilarga ega bo'lgan WhatsApp, Instagram va Messenger ilovalari ichiga to'liq integratsiya qilingan bo'lib, har kungi qulay yordamchiga aylangan."
      ],
      capabilities: [
        "405 milliard parametrgacha bo'lgan dunyodagi eng yirik ochiq til modeli",
        "WhatsApp, Instagram va Messenger ilovalarida bepul va to'g'ridan-to'g'ri ishlash",
        "Ochiq vaznlar (open-weights): modelni istalgan server yoki bulutda o'rnatish va nozik sozlash (fine-tuning)",
        "128 000 tokengacha bo'lgan katta kontekst hajmi",
        "Dasturiy kod yozish, tahlil qilish va murakkab algoritmlarni yaratish",
        "Ko'p tilli qo'llab-quvvatlash va sintetik ma'lumotlar yaratish",
        "Imagine funksiyasi orqali matndan tezkor tasvir yaratish"
      ],
      strengths: [
        "Dunyodagi eng yirik ochiq dasturchilar ekotizimi va hamjamiyat",
        "Milliardlab foydalanuvchilar uchun WhatsApp va Instagram orqali oson kirish",
        "Tijorat maqsadlarida bepul litsenziya asosida foydalanish imkoniyati",
        "Kompaniyalar uchun o'z maxfiy serverlarida to'liq xavfsiz o'rnatish"
      ],
      limitations: [
        "Eng katta 405B modelni lokal ishlatish uchun ulkan server infratuzilmasi zarur",
        "Meta AI veb-sayti ba'zi Yevropa va Osiyo mamlakatlarida to'g'ridan-to'g'ri cheklangan",
        "Ijtimoiy tarmoqlar ichidagi interfeysda murakkab professional sozlamalar kamroq"
      ],
      pricing: {
        freeTier: "WhatsApp, Instagram va meta.ai saytida mutlaqo bepul",
        paidTier: "Ochiq model: bepul yuklab olinadi (oylik 700M dan kam foydalanuvchili loyihalar uchun litsenziya bepul)",
        note: "Server xarajatlari o'z infratuzilmangiz quvvatiga bog'liq."
      },
      useCases: [
        { id: '1', icon: 'MessageCircle', title: "WhatsApp & Instagram yordamchisi", description: "Ilovadan chiqmasdan do'stlar bilan chatda savollarga birga javob topish." },
        { id: '2', icon: 'Server', title: "Korporativ shaxsiy AI", description: "Kompaniya ma'lumotlarini tashqariga chiqarmasdan o'z serverida Llama 3 ni yurgizish." },
        { id: '3', icon: 'Sliders', title: "Modelni nozik sozlash (Fine-tuning)", description: "Tibbiyot, bank yoki huquq sohasidagi o'ziga xos ma'lumotlar bilan modelni qayta o'qitish." },
        { id: '4', icon: 'Code', title: "Dasturlash", description: "Llama 3.3 orqali murakkab backend xizmatlarini yozish va xatolarni tuzatish." },
        { id: '5', icon: 'Image', title: "Tezkor tasvirlar", description: "Messenger va Instagram'da Imagine orqali soniyalar ichida rasmlar yaratish." },
        { id: '6', icon: 'GraduationCap', title: "Universitet tadqiqotlari", description: "Akademik laboratoriyalarda sun'iy intellekt xulq-atvorini chuqur o'rganish." },
        { id: '7', icon: 'Bot', title: "Oflayn botlar", description: "Internet bo'lmagan hududlarda ham barqaror ishlaydigan aqlli tizimlar qurish." },
        { id: '8', icon: 'Languages', title: "Ko'p tilli muloqot", description: "Xalqaro savdo va qo'llab-quvvatlash xizmatlarini avtomatlashtirish." }
      ],
      requirements: {
        technical: ["WhatsApp/Instagram yoki Llama modelini yuklab olish uchun Hugging Face akkaunti"],
        registration: ["Meta hisobi yoki ishlab chiquvchilar uchun tasdiqlash"],
        restrictions: ["Meta Llama 3 Community litsenziyasiga rioya qilish (700M oylik foydalanuvchigacha bepul)"],
        pricingTiers: ["Foydalanuvchilar va dasturchilar uchun bepul"],
        security: ["O'z serveringizda joylashtirganda mutlaq maxfiylik kafolatlanadi"],
        ethics: ["Xavfsiz AI tamoyillari (Llama Guard) asosida tizimlarni himoyalash"]
      },
      prompts: [
        { id: 1, title: "WhatsApp xabar loyihasi", category: "Muloqot", prompt: "Mijozlarga yangi xizmatimiz haqida qisqa, tushunarli va do'stona xabar yoz. Unda 3 ta asosiy foyda va veb-saytga havola bo'lsin." },
        { id: 2, title: "Llama modelini nozik sozlash (LoRA)", category: "Dasturlash", prompt: "Python va Hugging Face PEFT kutubxonasi yordamida Llama-3-8B modelini maxsus tibbiy savol-javob datasetida LoRA usulida nozik sozlash skriptini yoz." },
        { id: 3, title: "Instagram kontent-rejasi", category: "SMM", prompt: "Kofe do'koni uchun 1 haftalik Instagram reels va postlar rejasini tuz. Har biriga vizual g'oya, sarlavha va jalb qiluvchi matn yoz." },
        { id: 4, title: "Lokal vLLM serveri", category: "DevOps", prompt: "Docker orqali Llama-3.3-70B modelini vLLM yordamida 2 ta NVIDIA A100 GPU'da yuqori o'tkazuvchanlik bilan ishga tushirish konfiguratsiyasini taqdim et." },
        { id: 5, title: "Imagine rasm promti", category: "Dizayn", prompt: "Meta Imagine uchun: O'zbekiston tog'larida joylashgan eko-mehmonxona, yog'och terassa, quyosh nurlari, tiniq osmon, fotorealizm." },
        { id: 6, title: "Biznes jarayonini avtomatlashtirish", category: "Boshqaruv", prompt: "Mijozlar buyurtmasini qabul qilish va CRM tizimiga kiritish zanjirini Llama asosidagi agent orqali qanday avtomatlashtirish mumkin? Sxemasini chizib ber." },
        { id: 7, title: "C++ dasturlash auditi", category: "Dasturlash", prompt: "Ushbu ko'p oqimli (multithreaded) C++ kodida mutex bloklanishi (deadlock) yuzaga kelish xavfini tahlil qil va std::lock_guard orqali tuzat." },
        { id: 8, title: "Talabalar uchun ta'lim rejasi", category: "Ta'lim", prompt: "Sun'iy intellekt asoslarini noldan o'rganmoqchi bo'lgan talaba uchun 3 oylik bepul onlayn resurslarga asoslangan ta'lim xaritasini tuz." },
        { id: 9, title: "Ochiq va yopiq AI modellari solishtiruvi", category: "Tahlil", prompt: "Llama kabi ochiq modellar va OpenAI kabi yopiq API tizimlarining xavfsizlik, xarajat va suverenitet bo'yicha kuchli va zaif tomonlarini tahlil qil." },
        { id: 10, title: "Llama Guard bilan xavfsizlik", category: "Xavfsizlik", prompt: "Llama Guard modelidan foydalanib, foydalanuvchi so'rovlaridagi zararli kontentni tekshiruvchi himoya devori (guardrail) algoritmini yozib ber." }
      ]
    },
    ru: {
      shortDesc: "Флагманские открытые модели Llama от Meta, объединяющие миллиарды пользователей соцсетей и мировую индустрию разработки.",
      fullDescription: [
        "Meta AI и семейство моделей Llama — масштабная инициатива корпорации Meta под руководством Марка Цукерберга по развитию открытого и доступного искусственного интеллекта.",
        "Линейки Llama 3, 3.1 и 3.3 (включая гигантскую версию на 405 миллиардов параметров) доказали, что открытые веса (open-weights) способны на равных конкурировать с закрытыми проприетарными системами OpenAI и Google, став де-факто фундаментом для мирового сообщества разработчиков.",
        "В то же время Meta AI нативно интегрирован в WhatsApp, Instagram и Messenger, предоставляя интеллектуального помощника миллиардам пользователей по всему земному шару."
      ],
      capabilities: [
        "Флагманская модель Llama 405B — крупнейшая открытая языковая модель в мире",
        "Бесшовная встроенность в мессенджеры WhatsApp, Instagram и Messenger",
        "Открытые веса для локального хостинга и глубокой кастомизации (Fine-Tuning)",
        "Окно контекста размером до 128 000 токенов",
        "Написание сложного программного кода и создание синтетических датасетов",
        "Мультиязычная поддержка и высокая производительность логики",
        "Генерация картинок с помощью встроенного инструмента Imagine"
      ],
      strengths: [
        "Крупнейшая мировая открытая экосистема и поддержка сообщества",
        "Бесплатная коммерческая лицензия для проектов с аудиторией до 700 млн пользователей",
        "Возможность полного суверенного развертывания внутри корпоративной сети",
        "Удобство доступа через привычные мобильные мессенджеры"
      ],
      limitations: [
        "Флагманская модель 405B требует мощнейшей серверной инфраструктуры",
        "Веб-портал meta.ai недоступен напрямую в некоторых странах без обходных путей",
        "В интерфейсе соцсетей отсутствуют продвинутые технические настройки"
      ],
      pricing: {
        freeTier: "Бесплатно в WhatsApp, Instagram и на сайте meta.ai",
        paidTier: "Веса бесплатны для скачивания (бесплатная коммерческая лицензия Llama Community)",
        note: "Затраты зависят только от стоимости вашего собственного серверного оборудования."
      },
      useCases: [
        { id: '1', icon: 'MessageCircle', title: "Помощник в мессенджерах", description: "Обсуждение планов и поиск ответов на вопросы прямо в чатах WhatsApp." },
        { id: '2', icon: 'Server', title: "Корпоративный суверенитет", description: "Запуск Llama 3 на внутренних серверах банка или клиники с изоляцией данных." },
        { id: '3', icon: 'Sliders', title: "Тонкая донастройка (LoRA)", description: "Обучение модели на узкоспециализированных датасетах компании." },
        { id: '4', icon: 'Code', title: "Разработка бэкенда", description: "Генерация надежного серверного кода и микросервисов." },
        { id: '5', icon: 'Image', title: "Арт в Messenger", description: "Быстрое создание иллюстраций и открыток через инструмент Imagine." },
        { id: '6', icon: 'GraduationCap', title: "Академическая наука", description: "Проведение исследований в области архитектуры нейросетей на открытых весах." },
        { id: '7', icon: 'Bot', title: "Автономные чат-боты", description: "Создание умных ботов для технической поддержки без затрат на зарубежные API." },
        { id: '8', icon: 'Languages', title: "Мультиязычный перевод", description: "Интеграция перевода в корпоративные чаты." }
      ],
      requirements: {
        technical: ["Приложения WhatsApp/Instagram или сервер с GPU для скачивания весов Llama"],
        registration: ["Учетная запись Meta или одобрение заявки на Hugging Face"],
        restrictions: ["Лицензия Meta Llama Community (бесплатно до 700 млн MAU)"],
        pricingTiers: ["Бесплатно для большинства пользователей и компаний"],
        security: ["Полная конфиденциальность при развертывании в закрытом периметре"],
        ethics: ["Интеграция систем защиты Llama Guard для фильтрации нежелательного вывода"]
      },
      prompts: [
        { id: 1, title: "Черновик для WhatsApp-рассылки", category: "Маркетинг", prompt: "Напиши лаконичное и теплое сервисное сообщение для клиентов фитнес-клуба об открытии нового спа-комплекса с промокодом на скидку." },
        { id: 2, title: "Скрипт файн-тюнинга LoRA", category: "ML", prompt: "Напиши скрипт на Python с использованием Hugging Face TRL и PEFT для дообучения модели Llama-3-8B-Instruct методом QLoRA." },
        { id: 3, title: "Контент-стратегия Instagram", category: "SMM", prompt: "Составь контент-план на неделю для авторской кофейни: 4 Reels, 3 карусели с рецептами и вовлекающие опросы в Stories." },
        { id: 4, title: "Конфигурация vLLM в Docker", category: "DevOps", prompt: "Предоставь docker-compose.yml для запуска Llama-3.3-70B через vLLM с поддержкой тензорного параллелизма на 2x A100." },
        { id: 5, title: "Промпт для Meta Imagine", category: "Дизайн", prompt: "Промпт для Imagine: Уютное горное шале в заснеженных Альпах, теплый свет в панорамных окнах, звездное небо, фотореализм 8k." },
        { id: 6, title: "Схема автоматизации CRM", category: "Бизнес", prompt: "Опиши архитектуру интеграции Llama 3 с CRM-системой для автоматической квалификации входящих лидов." },
        { id: 7, title: "Исправление Deadlock в C++", category: "Разработка", prompt: "Найди потенциальную взаимную блокировку (deadlock) в этом многопоточном коде на C++ и перепиши его с std::scoped_lock." },
        { id: 8, title: "План изучения ML", category: "Образование", prompt: "Составь дорожную карту самостоятельного изучения больших языковых моделей на 6 месяцев от математических основ до квантования." },
        { id: 9, title: "Сравнение Open-Source и Closed AI", category: "Аналитика", prompt: "Сравни модель Llama 3.1 405B и GPT-4o по критериям совокупной стоимости владения (TCO), гибкости и безопасности данных." },
        { id: 10, title: "Фильтрация с Llama Guard", category: "Безопасность", prompt: "Напиши код на Python, использующий Llama Guard 3 для предварительной проверки пользовательских запросов перед отправкой в основную LLM." }
      ]
    },
    en: {
      shortDesc: "Meta's flagship open-weights initiative democratizing frontier intelligence across global developers and social platforms.",
      fullDescription: [
        "Meta AI and the Llama foundation model series, spearheaded by Mark Zuckerberg, represent the preeminent open-weights counterweight to proprietary artificial intelligence ecosystems.",
        "Releases spanning Llama 3, 3.1, and 3.3 (featuring the colossal 405B-parameter frontier engine) proved that open architectures can rival closed proprietary systems across coding, mathematical reasoning, and multilingual comprehension.",
        "Simultaneously, Meta AI is natively woven into WhatsApp, Instagram, and Messenger, delivering conversational utility to billions of active daily users globally."
      ],
      capabilities: [
        "The 405-billion parameter Llama flagship — the largest open-weights model on Earth",
        "Direct native integration inside WhatsApp, Instagram, and Messenger channels",
        "Permissive open weights enabling sovereign on-premise hosting and deep LoRA tuning",
        "Extended context comprehension spanning up to 128,000 tokens",
        "Robust software engineering and automated synthetic dataset curation",
        "Cross-lingual fluency and enterprise agent tool-calling interfaces",
        "Near-instantaneous visual asset generation utilizing Meta Imagine"
      ],
      strengths: [
        "Largest global developer community and open-source fine-tuning tooling",
        "Free commercial usage license for projects serving under 700 million active users",
        "Uncompromising data privacy through complete sovereign offline hosting",
        "Effortless consumer access via everyday messaging channels"
      ],
      limitations: [
        "Deploying the 405B flagship requires immense enterprise multi-GPU hardware clusters",
        "The standalone meta.ai web portal is regionally geoblocked in certain jurisdictions",
        "Messaging UI lacks granular system-prompt engineering controls"
      ],
      pricing: {
        freeTier: "Completely free on WhatsApp, Instagram, and meta.ai",
        paidTier: "Open weights: Free to download under the Meta Llama Community License",
        note: "Hosting costs are governed strictly by your chosen cloud or on-premise hardware."
      },
      useCases: [
        { id: '1', icon: 'MessageCircle', title: "Native Social Messaging Copilot", description: "Answering queries directly inside group chats on WhatsApp and Instagram." },
        { id: '2', icon: 'Server', title: "Air-Gapped Sovereign AI", description: "Deploying Llama within corporate bank intranets without cloud transmission." },
        { id: '3', icon: 'Sliders', title: "Domain Fine-Tuning (LoRA)", description: "Adapting model weights to proprietary legal or medical nomenclature." },
        { id: '4', icon: 'Code', title: "Enterprise Backend Engineering", description: "Synthesizing microservice controllers and database migration routines." },
        { id: '5', icon: 'Image', title: "In-Chat Media Generation", description: "Generating visual concept assets inside direct messages via Imagine." },
        { id: '6', icon: 'GraduationCap', title: "Academic LLM Research", description: "Investigating mechanistic interpretability on openly auditable weights." },
        { id: '7', icon: 'Bot', title: "Autonomous Customer Support", description: "Deploying high-throughput support agents with zero per-token cloud invoices." },
        { id: '8', icon: 'Languages', title: "Localized Enterprise Systems", description: "Powering multilingual internal documentation and knowledge graphs." }
      ],
      requirements: {
        technical: ["WhatsApp/Instagram or enterprise GPU servers (A100/H100) for local model hosting"],
        registration: ["Meta account or approved Hugging Face developer application"],
        restrictions: ["Compliance with Meta Llama Community License (free up to 700M MAU)"],
        pricingTiers: ["Free for developers and consumers"],
        security: ["Absolute data isolation when self-hosted on private infrastructure"],
        ethics: ["Implement Llama Guard safeguards to filter toxic or malicious prompt injections"]
      },
      prompts: [
        { id: 1, title: "WhatsApp Customer Broadcast", category: "Outreach", prompt: "Draft a concise, warm WhatsApp update to boutique hotel guests announcing a new terrace breakfast service with a one-tap booking link." },
        { id: 2, title: "QLoRA Fine-Tuning Pipeline", category: "ML", prompt: "Write an end-to-end Python script using Hugging Face TRL and bitsandbytes to fine-tune Llama-3-8B-Instruct on an instruction dataset using 4-bit QLoRA." },
        { id: 3, title: "Instagram Editorial Calendar", category: "Marketing", prompt: "Create a 7-day Instagram content plan for an artisanal coffee roastery, including 3 Reels concepts, carousel slide breakdowns, and engagement hooks." },
        { id: 4, title: "vLLM Production Deployment", category: "DevOps", prompt: "Provide a docker-compose.yml configuration to host Llama-3.3-70B using vLLM with tensor parallelism across two NVIDIA A100 GPUs." },
        { id: 5, title: "Imagine Visual Prompt", category: "Creative", prompt: "Meta Imagine prompt: Modern sustainable alpine villa during twilight, floor-to-ceiling glass, warm interior glow, snow-capped peaks in the background, 8k architectural shot." },
        { id: 6, title: "CRM Lead Qualification Agent", category: "Automation", prompt: "Design the logic flow for an automated lead qualification bot running on Llama 3 that extracts intent, budget, and timeline from incoming inbound emails." },
        { id: 7, title: "C++ Deadlock Elimination", category: "Programming", prompt: "Identify the concurrent synchronization hazard in this multi-threaded C++ queue and refactor using std::unique_lock and condition variables." },
        { id: 8, title: "Frontier LLM Study Roadmap", category: "Education", prompt: "Outline a 6-month self-study curriculum for an experienced backend engineer transitioning into Large Language Model fine-tuning and inference optimization." },
        { id: 9, title: "Open-Weights vs Closed API TCO", category: "Strategy", prompt: "Construct an executive TCO comparison evaluating self-hosting Llama 3.1 70B versus relying on proprietary cloud APIs for 25 million monthly queries." },
        { id: 10, title: "Llama Guard Safety Interceptor", category: "Security", prompt: "Write a Python middleware function that routes incoming user prompts through Llama Guard 3 to enforce enterprise safety moderation before execution." }
      ]
    }
  },

  // 10. Mistral AI / Le Chat
  {
    id: 'mistral',
    name: 'Mistral AI / Le Chat',
    company: 'Mistral AI',
    category: 'open',
    accentColor: '#FF7000',
    gradient: 'from-orange-500/20 via-amber-500/10 to-transparent',
    websiteUrl: 'https://mistral.ai',
    year: 2023,
    platforms: ['Web (Le Chat)', 'API', 'Hugging Face', 'Ollama / Local'],
    badge: {
      uz: 'Yevropa Yetakchisi & MoE',
      ru: 'Лидер Европы & MoE',
      en: 'European Champion & MoE',
    },
    logoSvg: 'mistral',
    uz: {
      shortDesc: "Fransiyada asos solingan, aralash mutaxassislar (MoE) texnologiyasi orqali yuksak tezlik va Yevropa xavfsizlik standartlarini taqdim etuvchi AI.",
      fullDescription: [
        "Mistral AI — Parijda DeepMind va Meta sobiq yetakchi olimlari tomonidan asos solingan, Yevropaning eng nufuzli va mustaqil sun'iy intellekt flagmanidir.",
        "Kompaniya 'Mixture of Experts' (MoE — mutaxassislar aralashmasi) arxitekturasini ommalashtirib, hisoblash resurslarini bir necha barobar tejagan holda ulkan modellarning quvvatini beruvchi Mistral Large, Mistral Small va Codestral modellarini yaratdi.",
        "Ularning 'Le Chat' nomli zamonaviy suhbat platformasi internet qidiruvi, hujjatlarni tahlil qilish va Black Forest Labs (Flux) yordamida rasmlar yaratish imkoniyatlarini o'z ichiga oladi va Yevropa Ittifoqining qat'iy GDPR maxfiylik qoidalariga to'liq mos keladi."
      ],
      capabilities: [
        "Mixture of Experts (MoE) orqali chaqmoqdek tez javob qaytarish",
        "Codestral orqali 80 dan ortiq dasturlash tillarida yuqori sifatli kod yozish",
        "Le Chat interfeysida bepul internet qidiruvi va manbalar tahlili",
        "Flux Pro integratsiyasi orqali yuqori sifatli tasvirlar yaratish",
        "Yevropa tillarida (fransuz, nemis, ispan, ingliz) va boshqa tillarda yuksak savodxonlik",
        "Ochiq vaznli modellarni yuklab olib, o'z serverida ishlatish imkoniyati",
        "128 000 tokengacha bo'lgan katta kontekst va JSON rejimi"
      ],
      strengths: [
        "Yevropa Ittifoqi qonunchiligi va GDPR xavfsizlik standartlariga to'liq muvofiqlik",
        "MoE arxitekturasi tufayli o'ta yuqori generatsiya tezligi",
        "Dasturchilar uchun Codestral ixtisoslashgan mukammal kod modeli",
        "Mustaqil Yevropa texnologik suverenitetining eng ishonchli ustuni"
      ],
      limitations: [
        "OpenAI yoki Google qadar ulkan marketing va global korporativ xizmatlar ko'lami yo'q",
        "Le Chat mobil ilovalari ba'zi mintaqalarda hali to'liq tarqalmagan",
        "Ba'zi maxsus xususiy korporativ modellar faqat yirik bulutli platformalarda mavjud"
      ],
      pricing: {
        freeTier: "Le Chat suhbat maydonchasida bepul foydalanish",
        paidTier: "La Plateforme (API): foydalanilgan tokenlarga qarab juda hamyonbop narxlar",
        note: "Ochiq modellarni bepul Apache 2.0 litsenziyasi ostida yuklab olish mumkin."
      },
      useCases: [
        { id: '1', icon: 'Code', title: "Codestral bilan dasturlash", description: "VS Code kengaytmasi orqali kodni avtomatik to'ldirish va refaktoring qilish." },
        { id: '2', icon: 'Shield', title: "GDPR talablariga mos AI", description: "Yevropa bozorida ishlovchi kompaniyalar uchun to'liq qonuniy ma'lumotlar bilan ishlash." },
        { id: '3', icon: 'Zap', title: "Yuqori tezlikdagi xizmatlar", description: "MoE arxitekturasi orqali millisekundlarda javob qaytaruvchi API xizmatlari." },
        { id: '4', icon: 'FileText', title: "Ko'p tilli Yevropa hujjatlari", description: "Fransuz, nemis, ingliz va boshqa tillardagi qonuniy hujjatlarni solishtirish." },
        { id: '5', icon: 'Image', title: "Le Chat tasvir generatsiyasi", description: "Flux texnologiyasi orqali chiroyli rasmlar va illyustratsiyalar yaratish." },
        { id: '6', icon: 'Cpu', title: "Lokal serverda ishlatish", description: "Mistral 7B yoki NeMo modellarini shaxsiy kompyuterda mutlaqo bepul yurgizish." },
        { id: '7', icon: 'Search', title: "Veb qidiruvli suhbat", description: "Internetdagi eng yangi yangiliklarni manbalari bilan Le Chat orqali topish." },
        { id: '8', icon: 'CheckSquare', title: "JSON formatida strukturalash", description: "Har qanday erkin matnni API uchun toza JSON formatiga o'tkazish." }
      ],
      requirements: {
        technical: ["Zamonaviy veb-brauzer yoki lokal server uchun Ollama"],
        registration: ["Le Chat (chat.mistral.ai) uchun Google, Microsoft yoki email orqali ro'yxatdan o'tish"],
        restrictions: ["13 yoshdan oshgan foydalanuvchilar, GDPR qoidalariga rioya etish"],
        pricingTiers: ["Le Chat: Bepul", "API: million token uchun bir necha sentdan"],
        security: ["Yevropa GDPR ma'lumotlar xavfsizligi standartlariga qat'iy kafolat"],
        ethics: ["Ochiq kodli tamoyillar va axloqiy me'yorlar asosida ishlab chiqilgan"]
      },
      prompts: [
        { id: 1, title: "Codestral kod to'ldiruvchisi", category: "Dasturlash", prompt: "Quyidagi Python kodida async / await va aiohttp yordamida bir vaqtning o'zida 50 ta API manzilidan ma'lumot oluvchi optimal funksiyani yozib ber:\n\n[KOD]" },
        { id: 2, title: "GDPR qoidalariga moslik tekshiruvi", category: "Huquq", prompt: "Biz Yevropa Ittifoqi fuqarolarining cookies va elektron manzillarini yig'uvchi sayt ochyapmiz. GDPR talablariga mos kelishi uchun 5 ta majburiy qoidani sanab ber." },
        { id: 3, title: "MoE arxitekturasi tushuntirishi", category: "Ta'lim", prompt: "Neyrotarmoqlardagi Mixture of Experts (MoE) qanday qilib oddiy zich (dense) modellarga qaraganda tezroq ishlaydi? Router mexanizmi misolida tushuntir." },
        { id: 4, title: "Matndan toza JSON olish", category: "Backend", prompt: "Quyidagi shifokor qabul xulosasidan bemor yoshi, tashxisi, buyurilgan dorilar va keyingi qabul sanasini qat'iy JSON formatida chiqarib ber:\n\n[MATN]" },
        { id: 5, title: "Le Chat tasvir promti", category: "Dizayn", prompt: "Flux bilan yaratish uchun promt: Parij kafesi yomg'irli tongda, derazadagi suv tomchilari, issiq qahva bug'i, impressionistik yorug'lik, kinematografik kadr." },
        { id: 6, title: "Docker bilan Mistral o'rnatish", category: "DevOps", prompt: "Ubuntu serverida Mistral-NeMo modelini Ollama orqali o'rnatish va uni tashqi API ga xavfsiz ochish bo'yicha docker-compose faylini yoz." },
        { id: 7, title: "Ko'p tilli korporativ xat", category: "Tarjima", prompt: "Ushbu biznes hamkorlik taklifini ingliz tilidan fransuz va nemis tillariga professional diplomatik korporativ ohangda tarjima qil." },
        { id: 8, title: "SQL so'rovi va indekslar", category: "Dasturlash", prompt: "PostgreSQL'da millionlab tranzaksiyalar joylashgan jadvalda mijozlarning oylik sarflarini chiqaruvchi tezkor Window funksiyasi bilan SQL so'rov yoz." },
        { id: 9, title: "Yevropa AI Act qonuni tahlili", category: "Tahlil", prompt: "Yevropa Ittifoqining Sun'iy Intellekt to'g'risidagi qonuni (EU AI Act) doirasida yuqori xavfli (High Risk) deb topilgan tizimlar uchun qanday majburiyatlar yuklangan?" },
        { id: 10, title: "Tezkor API webhook integratsiyasi", category: "Backend", prompt: "Node.js va Express yordamida Stripe webhook to'lovlarini qabul qilib, imzosi (signature) to'g'riligini tekshiruvchi xavfsiz endpoint kodini yoz." }
      ]
    },
    ru: {
      shortDesc: "Флагман европейского ИИ из Парижа на базе архитектуры Mixture of Experts (MoE), сочетающий скорость и стандарты GDPR.",
      fullDescription: [
        "Mistral AI — французская исследовательская компания, основанная выходцами из Google DeepMind и Meta AI, ставшая символом европейского технологического суверенитета.",
        "Компания популяризировала революционную архитектуру Mixture of Experts (MoE — смесь экспертов), позволившую моделям Mistral Large, Mistral Small и Codestral демонстрировать колоссальную скорость инференса при высокой энергоэффективности.",
        "Их диалоговый сервис 'Le Chat' объединяет поиск в сети, работу с документами, генерацию изображений через партнерство с Black Forest Labs (Flux) и строгое следование европейским стандартам приватности GDPR."
      ],
      capabilities: [
        "Сверхвысокая скорость работы благодаря архитектуре Mixture of Experts (MoE)",
        "Специализированная модель Codestral для программирования на 80+ языках",
        "Полноценный веб-поиск и цитирование источников внутри Le Chat",
        "Генерация фотореалистичных изображений с помощью движка Flux Pro",
        "Высокое качество работы с европейскими языками (французский, немецкий, испанский)",
        "Открытые модели для автономного развертывания под лицензией Apache 2.0",
        "Контекстное окно до 128 000 токенов и гарантированный вывод в формате JSON"
      ],
      strengths: [
        "Полное соответствие законодательству Европейского союза и стандартам GDPR",
        "Выдающаяся скорость генерации ответов и экономия вычислительных ресурсов",
        "Codestral — одна из лучших моделей в мире для автодополнения кода",
        "Приверженность открытым стандартам и европейской технологической независимости"
      ],
      limitations: [
        "Меньший маркетинговый охват по сравнению с американскими технологическими гигантами",
        "Мобильные приложения Le Chat пока представлены не во всех магазинах приложений",
        "Некоторые закрытые версии моделей доступны только через партнерские облака"
      ],
      pricing: {
        freeTier: "Бесплатное использование платформы Le Chat для всех пользователей",
        paidTier: "La Plateforme (API): оплата за миллион токенов по очень конкурентным ценам",
        note: "Открытые веса доступны бесплатно по лицензии Apache 2.0."
      },
      useCases: [
        { id: '1', icon: 'Code', title: "Разработка с Codestral", description: "Интеграция в VS Code для мгновенного автодополнения и рефакторинга кода." },
        { id: '2', icon: 'Shield', title: "Европейский комплаенс", description: "Использование ИИ в строгом соответствии с регламентом GDPR для европейских клиентов." },
        { id: '3', icon: 'Zap', title: "Сверхбыстрые микросервисы", description: "MoE-модели обеспечивают минимальную задержку ответа для чат-ботов." },
        { id: '4', icon: 'FileText', title: "Мультиязычный документооборот", description: "Точный перевод и анализ договоров на европейских языках." },
        { id: '5', icon: 'Image', title: "Генерация арта в Le Chat", description: "Создание визуального контента с интегрированным движком Flux." },
        { id: '6', icon: 'Cpu', title: "Локальный хостинг", description: "Запуск Mistral 7B или NeMo на локальных рабочих станциях без интернета." },
        { id: '7', icon: 'Search', title: "Поиск с источниками", description: "Анализ свежих новостей и аналитики через веб-поиск Le Chat." },
        { id: '8', icon: 'CheckSquare', title: "Структурирование JSON", description: "Надежное извлечение сущностей из неструктурированных текстов." }
      ],
      requirements: {
        technical: ["Браузер или Ollama для локального запуска весов"],
        registration: ["Вход на chat.mistral.ai через Google, Microsoft или email"],
        restrictions: ["Возраст 13+, соблюдение условий использования"],
        pricingTiers: ["Le Chat: Бесплатно", "API: низкие тарифы за миллион токенов"],
        security: ["Сертифицированное соответствие европейским стандартам GDPR"],
        ethics: ["Соблюдение норм европейского регуляторного акта EU AI Act"]
      },
      prompts: [
        { id: 1, title: "Асинхронный скрейпер на Codestral", category: "Разработка", prompt: "Напиши на Python с использованием aiohttp и asyncio функцию для параллельного опроса 30 API эндпоинтов с ограничением в 5 одновременных соединений." },
        { id: 2, title: "Чеклист соответствия GDPR", category: "Право", prompt: "Составь чеклист из 6 ключевых требований GDPR для SaaS-сервиса, обрабатывающего персональные данные граждан ЕС." },
        { id: 3, title: "Объяснение Mixture of Experts", category: "Обучение", prompt: "Объясни принцип работы архитектуры Mixture of Experts (MoE). Чем маршрутизация запросов к отдельным экспертам эффективнее полносвязного слоя?" },
        { id: 4, title: "Парсинг в JSON", category: "Данные", prompt: "Извлеки из этого медицинского заключения диагноз, возраст пациента, список лекарств и дату следующего визита в строгом формате JSON:\n\n[ТЕКСТ]" },
        { id: 5, title: "Промпт для Flux в Le Chat", category: "Дизайн", prompt: "Промпт для Flux: Утренний Париж после дождя, уютное кафе с открытой террасой, отражения на мокрой брусчатке, теплый свет фонарей, кинематографично." },
        { id: 6, title: "Docker-конфигурация Ollama", category: "Инфраструктура", prompt: "Напиши docker-compose.yml для развертывания Ollama с моделью mistral-nemo и веб-интерфейсом Open-WebUI." },
        { id: 7, title: "Деловой перевод на французский", category: "Перевод", prompt: "Переведи это коммерческое предложение о поставке оборудования на французский язык в безупречном деловом стиле." },
        { id: 8, title: "Оконные функции в PostgreSQL", category: "Базы данных", prompt: "Напиши SQL-запрос с использованием оконной функции ROW_NUMBER() и PARTITION BY для поиска последнего заказа каждого клиента." },
        { id: 9, title: "Обзор EU AI Act", category: "Регулирование", prompt: "Какие категории систем ИИ отнесены к 'высокому риску' в европейском законе EU AI Act и какие требования к ним предъявляются?" },
        { id: 10, title: "Безопасный вебхук Stripe", category: "Backend", prompt: "Напиши обработчик вебхуков Stripe на Node.js с верификацией криптографической подписи события stripe-signature." }
      ]
    },
    en: {
      shortDesc: "The Paris-based European champion pioneering Mixture-of-Experts (MoE) efficiency and strict GDPR data sovereignty.",
      fullDescription: [
        "Mistral AI, founded in Paris by former alumni of Google DeepMind and Meta, stands as Europe's premier independent artificial intelligence powerhouse.",
        "The company popularized the Mixture-of-Experts (MoE) paradigm, enabling flagship models like Mistral Large, Mistral Small, and Codestral to deliver lightning-fast inference velocity with remarkable resource stewardship.",
        "Their flagship conversational portal 'Le Chat' delivers grounded live web search, document synthesis, visual generation powered by Flux (Black Forest Labs), and uncompromising adherence to European Union GDPR privacy covenants."
      ],
      capabilities: [
        "Unrivaled inference velocity enabled by sparse Mixture-of-Experts (MoE) routing",
        "Codestral: specialized programming engine fluently supporting 80+ coding languages",
        "Grounded web search and document reasoning inside the Le Chat interface",
        "High-fidelity image generation utilizing the integrated Flux Pro engine",
        "Native multilingual excellence across French, German, Spanish, and English",
        "Open-weights availability under permissive Apache 2.0 licensing",
        "128,000-token context reasoning paired with guaranteed JSON constraint outputs"
      ],
      strengths: [
        "Full compliance with stringent European Union regulatory and GDPR guidelines",
        "Lightning-quick response latency and exceptional compute efficiency",
        "Codestral represents a premier benchmark leader in code completion",
        "Champion of European technological independence and open research"
      ],
      limitations: [
        "Smaller enterprise distribution footprint than Silicon Valley tech monopolies",
        "Mobile client rollout for Le Chat is rolling out progressively across stores",
        "Select proprietary large models require partner cloud enterprise agreements"
      ],
      pricing: {
        freeTier: "Free access to the Le Chat conversational workspace",
        paidTier: "La Plateforme (API): Pay-per-token at highly competitive European rates",
        note: "Open-weight models are freely downloadable under Apache 2.0."
      },
      useCases: [
        { id: '1', icon: 'Code', title: "Codestral IDE Completion", description: "Integrating into VS Code for low-latency multi-language autocomplete." },
        { id: '2', icon: 'Shield', title: "GDPR Compliant Workflows", description: "Deploying AI workflows with guaranteed compliance for EU customer records." },
        { id: '3', icon: 'Zap', title: "Sub-Second Microservices", description: "Leveraging MoE speeds for high-volume customer-facing chat agents." },
        { id: '4', icon: 'FileText', title: "European Multilingual Briefs", description: "Synthesizing cross-border contracts across French, German, and English." },
        { id: '5', icon: 'Image', title: "Flux Visual Generation", description: "Generating cinematic creative collateral directly within Le Chat." },
        { id: '6', icon: 'Cpu', title: "Offline Local Hosting", description: "Hosting Mistral 7B or NeMo on private developer workstations without cloud leaks." },
        { id: '7', icon: 'Search', title: "Search-Grounded Inquiry", description: "Querying live internet sources with transparent citation footnotes." },
        { id: '8', icon: 'CheckSquare', title: "Guaranteed JSON Extraction", description: "Transforming unstructured medical and commercial text into typed JSON." }
      ],
      requirements: {
        technical: ["Modern desktop browser or local Ollama environment for model weights"],
        registration: ["Sign-in on chat.mistral.ai with Google, Microsoft, or email"],
        restrictions: ["Ages 13+; compliance with acceptable use covenants"],
        pricingTiers: ["Le Chat: Free", "API: Budget-friendly per-million token pricing"],
        security: ["Built to satisfy European Union GDPR enterprise data privacy standards"],
        ethics: ["Strict adherence to ethical transparency under the EU AI Act"]
      },
      prompts: [
        { id: 1, title: "Codestral Concurrency Routine", category: "Coding", prompt: "Write an optimal Python asynchronous script using aiohttp and an asyncio semaphore to fetch 40 external endpoints concurrently with rate-limiting." },
        { id: 2, title: "GDPR SaaS Compliance Audit", category: "Legal", prompt: "Outline 6 mandatory compliance controls required under GDPR for a cloud SaaS application collecting analytics cookies from EU citizens." },
        { id: 3, title: "Mixture of Experts Mechanics", category: "Education", prompt: "Explain the mechanical difference between a dense neural layer and a Sparse Mixture-of-Experts (MoE) layer with dynamic gating routers." },
        { id: 4, title: "Strict Schema JSON Extraction", category: "Data", prompt: "Extract diagnosis, medication dosages, and patient follow-up intervals from this clinical note into a strictly valid JSON schema:\n\n[PASTE_NOTE]" },
        { id: 5, title: "Le Chat Flux Visual Prompt", category: "Creative", prompt: "Flux prompt for Le Chat: A morning Parisian cafe street following rain, wet cobblestone reflections, steam rising from ceramic espresso cups, cinematic lighting." },
        { id: 6, title: "Docker Compose for Ollama", category: "DevOps", prompt: "Provide a docker-compose.yml file configuring Ollama with the mistral-nemo model and Open-WebUI exposed over a local bridge network." },
        { id: 7, title: "Diplomatic French Translation", category: "Translation", prompt: "Translate this corporate joint venture announcement from English into formal French business correspondence suitable for C-suite executives." },
        { id: 8, title: "PostgreSQL Window Partition", category: "Databases", prompt: "Write an optimized PostgreSQL query using window functions (RANK and PARTITION BY) to retrieve the top 3 highest revenue orders per customer." },
        { id: 9, title: "EU AI Act Risk Breakdown", category: "Governance", prompt: "Summarize the regulatory criteria that categorize an AI application as 'High Risk' under the EU Artificial Intelligence Act and specify the required auditing steps." },
        { id: 10, title: "Stripe Webhook Verification", category: "Backend", prompt: "Write a Node.js Express route handler that securely verifies incoming Stripe webhook cryptographic signatures before executing invoice provisioning." }
      ]
    }
  }
];
