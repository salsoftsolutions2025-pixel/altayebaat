export type VideoCategory =
  | "basics"
  | "permitted"
  | "avoid"
  | "digestion"
  | "sugar"
  | "weight"
  | "fats"
  | "hormones"
  | "inflammation"
  | "qa"
  | "interviews"
  | "lectures"
  | "shorts"
  | "other";

export type VideoItem = {
  id: number;
  youtubeId: string;
  youtubeIdEn?: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  category: VideoCategory;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  source: string;
  featured?: boolean;
  
};

export const videos: VideoItem[] = [
  {
    id: 1,
    youtubeId: "dc1GwMz3eKk",
    titleAr: "الدكتور ضياء العوضي يشرح نظام الطيبات بالتفصيل",
    titleEn: "Dr. Diaa Al-Awady Explains the Al-Tayyibat System in Detail",
    descriptionAr:
      "شرح عام ومفصل لنظام الطيبات كما قدمه الدكتور ضياء العوضي.",
    descriptionEn:
      "A general and detailed explanation of the Al-Tayyibat System as presented by Dr. Diaa Al-Awady.",
    category: "basics",
    duration: "",
    thumbnail:
      "https://img.youtube.com/vi/dc1GwMz3eKk/hqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/watch?v=dc1GwMz3eKk",
    source: "YouTube",
    featured: true,
  },

  {
    id: 2,
    youtubeId: "8-xm0j0unno",
    titleAr: "هرمون الإنسولين وعلاقته بزيادة الوزن وسكر الدم",
    titleEn: "Insulin Hormone, Weight Gain and Blood Sugar",
    descriptionAr:
      "يتحدث الدكتور ضياء العوضي عن هرمون الإنسولين وعلاقته بزيادة الوزن وسكر الدم.",
    descriptionEn:
      "Dr. Diaa Al-Awady discusses insulin and its relationship to weight gain and blood sugar.",
    category: "sugar",
    duration: "",
    thumbnail:
      "https://img.youtube.com/vi/8-xm0j0unno/hqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/watch?v=8-xm0j0unno",
    source: "YouTube",
    featured: true,
  },

  {
    id: 3,
    youtubeId: "1h_-GEDaKSQ",
    titleAr: "نقص فيتامين د مع الدكتور ضياء العوضي",
    titleEn: "Vitamin D Deficiency with Dr. Diaa Al-Awady",
    descriptionAr:
      "مقطع يتناول موضوع نقص فيتامين د كما شرحه الدكتور ضياء العوضي.",
    descriptionEn:
      "A video discussing vitamin D deficiency as explained by Dr. Diaa Al-Awady.",
    category: "other",
    duration: "",
    thumbnail:
      "https://img.youtube.com/vi/1h_-GEDaKSQ/hqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/watch?v=1h_-GEDaKSQ",
    source: "YouTube",
    featured: true,
  },

  {
    id: 4,
    youtubeId: "6VfNEdEKeDw",
    titleAr: "العلاج النهائي لتساقط الشعر",
    titleEn: "Hair Loss Treatment",
    descriptionAr:
      "مقطع يتناول موضوع تساقط الشعر ضمن المواد المنشورة للدكتور ضياء العوضي.",
    descriptionEn:
      "A video discussing hair loss among Dr. Diaa Al-Awady's published material.",
    category: "other",
    duration: "",
    thumbnail:
      "https://img.youtube.com/vi/6VfNEdEKeDw/hqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/watch?v=6VfNEdEKeDw",
    source: "YouTube",
  },

  {
    id: 5,
    youtubeId: "xembettoZ-Q",
    titleAr: "المسموحات والممنوعات في نظام الطيبات بالتفصيل",
    titleEn: "Permitted and Prohibited Foods in the Al-Tayyibat System",
    descriptionAr:
      "شرح تفصيلي للمسموحات والممنوعات في نظام الطيبات كما قدمها الدكتور ضياء العوضي.",
    descriptionEn:
      "A detailed explanation of permitted and prohibited foods in the Al-Tayyibat System as presented by Dr. Diaa Al-Awady.",
    category: "permitted",
    duration: "",
    thumbnail:
      "https://img.youtube.com/vi/xembettoZ-Q/hqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/watch?v=xembettoZ-Q",
    source: "YouTube",
  },

  {
    id: 6,
    youtubeId: "KaM-hSDpcJI",
    titleAr: "نظام الطيبات وتأثيره على مرضى السكر",
    titleEn: "The Al-Tayyibat System and Its Effect on Diabetes",
    descriptionAr:
      "مناقشة لتأثير نظام الطيبات على مرضى السكري كما عرضه الدكتور ضياء العوضي.",
    descriptionEn:
      "A discussion of the Al-Tayyibat System and its effect on people with diabetes as presented by Dr. Diaa Al-Awady.",
    category: "sugar",
    duration: "",
    thumbnail:
      "https://img.youtube.com/vi/KaM-hSDpcJI/hqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/watch?v=KaM-hSDpcJI",
    source: "YouTube",
  },

  {
    id: 7,
    youtubeId: "7kIaWrTxoXc",
    titleAr: "مسموحات وممنوعات نظام الطيبات | أسرار النجاح الصحي",
    titleEn:
      "Al-Tayyibat Permitted and Prohibited Foods | Keys to Healthy Success",
    descriptionAr:
      "شرح للمسموحات والممنوعات في نظام الطيبات وعلاقتها بالالتزام بالنظام.",
    descriptionEn:
      "An explanation of permitted and prohibited foods in the Al-Tayyibat System and their role in following the system.",
    category: "permitted",
    duration: "",
    thumbnail:
      "https://img.youtube.com/vi/7kIaWrTxoXc/hqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/watch?v=7kIaWrTxoXc",
    source: "YouTube",
  },

  {
    id: 8,
    youtubeId: "1C_UKJAD95E",
    titleAr: "تأثير الدقيق والخبز الأبيض على المعدة",
    titleEn: "The Effect of White Flour and White Bread on the Stomach",
    descriptionAr:
      "يتناول الدكتور ضياء العوضي تأثير الدقيق والخبز الأبيض على المعدة والجهاز الهضمي.",
    descriptionEn:
      "Dr. Diaa Al-Awady discusses the effect of white flour and white bread on the stomach and digestive system.",
    category: "digestion",
    duration: "",
    thumbnail:
      "https://img.youtube.com/vi/1C_UKJAD95E/hqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/watch?v=1C_UKJAD95E",
    source: "YouTube",
  },

  {
    id: 9,
    youtubeId: "puS37uhyM54",
    titleAr: "فهم مرض السكري وطريقة علاجه",
    titleEn: "Understanding Diabetes and Its Treatment",
    descriptionAr:
      "شرح لمرض السكري وطريقة التعامل معه وعلاجه كما قدمه الدكتور ضياء العوضي.",
    descriptionEn:
      "An explanation of diabetes and approaches to treatment as presented by Dr. Diaa Al-Awady.",
    category: "sugar",
    duration: "",
    thumbnail:
      "https://img.youtube.com/vi/puS37uhyM54/hqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/watch?v=puS37uhyM54",
    source: "YouTube",
  },

  {
    id: 10,
    youtubeId: "3LH3njMAKpY",
    titleAr: "شرب الماء وتأثيره على الكلى",
    titleEn: "Drinking Water and Its Effect on the Kidneys",
    descriptionAr:
      "يتناول الفيديو موضوع شرب الماء وتأثيره على الكلى كما شرحه الدكتور ضياء العوضي.",
    descriptionEn:
      "The video discusses drinking water and its effect on the kidneys as explained by Dr. Diaa Al-Awady.",
    category: "other",
    duration: "",
    thumbnail:
      "https://img.youtube.com/vi/3LH3njMAKpY/hqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/watch?v=3LH3njMAKpY",
    source: "YouTube",
  },

  {
    id: 11,
    youtubeId: "wsnCHSiCmvQ",
    titleAr:
      "تأثير التغذية والسمنة على التهاب الأعصاب الطرفية والشكشكة والألم في الجسم",
    titleEn:
      "The Effect of Nutrition and Obesity on Peripheral Nerve Inflammation, Tingling and Body Pain",
    descriptionAr:
      "مناقشة لتأثير التغذية والسمنة على التهاب الأعصاب الطرفية والتنميل والألم في الجسم.",
    descriptionEn:
      "A discussion of the effect of nutrition and obesity on peripheral nerve inflammation, tingling, and body pain.",
    category: "inflammation",
    duration: "",
    thumbnail:
      "https://img.youtube.com/vi/wsnCHSiCmvQ/hqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/watch?v=wsnCHSiCmvQ",
    source: "YouTube",
  },

  {
    id: 12,
    youtubeId: "ZUm4q7WWvfg",
    titleAr: "علاج الألم ومشاكل المفاصل والرقبة والظهر وغيرها من المشاكل",
    titleEn: "Pain Treatment and Problems of the Joints, Neck and Back",
    descriptionAr:
      "يتناول الدكتور ضياء العوضي موضوع الألم ومشاكل المفاصل والرقبة والظهر وغيرها من المشكلات.",
    descriptionEn:
      "Dr. Diaa Al-Awady discusses pain and problems affecting the joints, neck, back, and related conditions.",
    category: "inflammation",
    duration: "",
    thumbnail:
      "https://img.youtube.com/vi/ZUm4q7WWvfg/hqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/watch?v=ZUm4q7WWvfg",
    source: "YouTube",
  },

  {
    id: 13,
    youtubeId: "DGK2mbXCXNE",
    titleAr: "ارتجاع المريء والعلاج",
    titleEn: "Acid Reflux and Treatment",
    descriptionAr:
      "شرح لمشكلة ارتجاع المريء والعلاج كما قدمه الدكتور ضياء العوضي.",
    descriptionEn:
      "An explanation of acid reflux and treatment as presented by Dr. Diaa Al-Awady.",
    category: "digestion",
    duration: "",
    thumbnail:
      "https://img.youtube.com/vi/DGK2mbXCXNE/hqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/watch?v=DGK2mbXCXNE",
    source: "YouTube",
  },

  {
    id: 14,
    youtubeId: "cvymLkiK79U",
    titleAr: "أكلك سبب الاكتئاب",
    titleEn: "The Relationship Between Food and Depression",
    descriptionAr:
      "مناقشة للعلاقة بين نوعية الطعام والحالة النفسية كما قدمها الدكتور ضياء العوضي.",
    descriptionEn:
      "A discussion of the relationship between food choices and mental well-being as presented by Dr. Diaa Al-Awady.",
    category: "other",
    duration: "",
    thumbnail:
      "https://img.youtube.com/vi/cvymLkiK79U/hqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/watch?v=cvymLkiK79U",
    source: "YouTube",
  },

  {
    id: 15,
    youtubeId: "E_lT-4GmQks",
    titleAr: "الصيام المتقطع الحل لحياتك ولكل الأمراض المزمنة",
    titleEn: "Intermittent Fasting and Chronic Disease",
    descriptionAr:
      "يتناول الدكتور ضياء العوضي الصيام المتقطع وعلاقته بالصحة والأمراض المزمنة.",
    descriptionEn:
      "Dr. Diaa Al-Awady discusses intermittent fasting and its relationship to health and chronic disease.",
    category: "weight",
    duration: "",
    thumbnail:
      "https://img.youtube.com/vi/E_lT-4GmQks/hqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/watch?v=E_lT-4GmQks",
    source: "YouTube",
  },

  {
    id: 16,
    youtubeId: "49GRB0qY__g",
    titleAr: "السمنة عرض لمرض أخطر هو سوء التغذية",
    titleEn: "Obesity as a Symptom of a Deeper Problem: Poor Nutrition",
    descriptionAr:
      "يتناول الدكتور ضياء العوضي السمنة وعلاقتها بسوء التغذية.",
    descriptionEn:
      "Dr. Diaa Al-Awady discusses obesity and its relationship to poor nutrition.",
    category: "weight",
    duration: "",
    thumbnail:
      "https://img.youtube.com/vi/49GRB0qY__g/hqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/watch?v=49GRB0qY__g",
    source: "YouTube",
  },

  {
    id: 17,
    youtubeId: "hDGhhUrQLL4",
    titleAr: "التغذية والتخسيس والصحة العامة",
    titleEn: "Nutrition, Weight Loss and General Health",
    descriptionAr:
      "مناقشة عامة حول التغذية والتخسيس والصحة العامة.",
    descriptionEn:
      "A general discussion about nutrition, weight loss, and overall health.",
    category: "weight",
    duration: "",
    thumbnail:
      "https://img.youtube.com/vi/hDGhhUrQLL4/hqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/watch?v=hDGhhUrQLL4",
    source: "YouTube",
  },

  {
    id: 18,
    youtubeId: "1v6WEtrOmH8",
    titleAr: "علاقة الأكل بالمرض: طبيعة الأكل دائماً وراءه مرض",
    titleEn: "The Relationship Between Food and Disease",
    descriptionAr:
      "يتناول الفيديو العلاقة بين نوعية الطعام وظهور المشكلات الصحية كما شرحها الدكتور ضياء العوضي.",
    descriptionEn:
      "The video discusses the relationship between food choices and health problems as explained by Dr. Diaa Al-Awady.",
    category: "other",
    duration: "",
    thumbnail:
      "https://img.youtube.com/vi/1v6WEtrOmH8/hqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/watch?v=1v6WEtrOmH8",
    source: "YouTube",
  },

  {
    id: 19,
    youtubeId: "iu_QVPMMvLw",
    titleAr: "الفرق بين الدكتور استشاري التغذية وخبير الدايت والتخسيس",
    titleEn:
      "The Difference Between a Nutrition Consultant and a Diet and Weight-Loss Expert",
    descriptionAr:
      "يوضح الدكتور ضياء العوضي الفرق بين استشاري التغذية وخبير الدايت والتخسيس.",
    descriptionEn:
      "Dr. Diaa Al-Awady explains the difference between a nutrition consultant and a diet and weight-loss expert.",
    category: "interviews",
    duration: "",
    thumbnail:
      "https://img.youtube.com/vi/iu_QVPMMvLw/hqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/watch?v=iu_QVPMMvLw",
    source: "YouTube",
  },

  {
    id: 20,
    youtubeId: "0Zo1lNKLmxk",
    titleAr: "أهم الأسئلة في مرض السكر والعلاج وعلاقته بالتغذية العلاجية",
    titleEn:
      "Key Questions About Diabetes, Treatment and Therapeutic Nutrition",
    descriptionAr:
      "مناقشة لأهم الأسئلة المتعلقة بمرض السكري والعلاج وعلاقته بالتغذية العلاجية كما قدمها الدكتور ضياء العوضي.",
    descriptionEn:
      "A discussion of key questions related to diabetes, treatment, and therapeutic nutrition as presented by Dr. Diaa Al-Awady.",
    category: "sugar",
    duration: "",
    thumbnail:
      "https://img.youtube.com/vi/0Zo1lNKLmxk/hqdefault.jpg",
    videoUrl:
      "https://www.youtube.com/watch?v=0Zo1lNKLmxk",
    source: "YouTube",
  },
];

export const videoCategories = [
  {
    id: "basics",
    nameAr: "أساسيات نظام الطيبات",
    nameEn: "Al-Tayyibat Basics",
  },
  {
    id: "permitted",
    nameAr: "المسموحات والممنوعات",
    nameEn: "Permitted & Prohibited Foods",
  },
  {
    id: "avoid",
    nameAr: "الممنوعات",
    nameEn: "Foods to Avoid",
  },
  {
    id: "digestion",
    nameAr: "الغذاء والهضم",
    nameEn: "Food & Digestion",
  },
  {
    id: "sugar",
    nameAr: "السكري",
    nameEn: "Diabetes",
  },
  {
    id: "weight",
    nameAr: "السمنة والوزن",
    nameEn: "Weight & Obesity",
  },
  {
    id: "fats",
    nameAr: "الدهون",
    nameEn: "Fats",
  },
  {
    id: "hormones",
    nameAr: "الهرمونات",
    nameEn: "Hormones",
  },
  {
    id: "inflammation",
    nameAr: "الالتهابات والألم",
    nameEn: "Inflammation & Pain",
  },
  {
    id: "qa",
    nameAr: "أسئلة وأجوبة",
    nameEn: "Questions & Answers",
  },
  {
    id: "interviews",
    nameAr: "المقابلات",
    nameEn: "Interviews",
  },
  {
    id: "lectures",
    nameAr: "محاضرات كاملة",
    nameEn: "Full Lectures",
  },
  {
    id: "shorts",
    nameAr: "مقاطع قصيرة",
    nameEn: "Short Videos",
  },
  {
    id: "other",
    nameAr: "مواضيع أخرى",
    nameEn: "Other Topics",
  },
];