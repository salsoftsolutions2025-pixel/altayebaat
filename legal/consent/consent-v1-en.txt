export const CONSENT_VERSION = "2026-09-17-v1";

export const consentContent = {
  ar: {
    title: "قبل تصفح الموقع",

    intro:
      "يرجى قراءة البنود التالية والموافقة عليها قبل الدخول إلى موقع نظام الطيبات.",

    items: [
      {
        title:
          "عدم إيقاف أو تغيير العلاج دون استشارة طبية",
        text:
          "أفهم أنه لا يجب إيقاف أو تغيير أي دواء أو علاج موصوف بناءً على محتوى هذا الموقع أو نظام الطيبات، وأن أي تغيير في العلاج يجب أن يتم بعد استشارة طبيب أو مختص صحي مؤهل.",
      },
      {
        title:
          "استشارة الطبيب المختص",
        text:
          "أفهم أنه يجب استشارة الطبيب أو المختص الصحي المناسب قبل إجراء أي تغيير جوهري في النظام الغذائي، خصوصاً إذا كنت أعاني من مرض مزمن، أو أتناول أدوية، أو لدي حالة صحية تستدعي المتابعة الطبية.",
      },
      {
        title:
          "المحتوى للتوثيق والتعليم فقط",
        text:
          "أفهم أن هذا الموقع مخصص للتوثيق والتعليم فقط، ويعرض أفكار وآراء وتجارب مرتبطة بالدكتور ضياء العوضي ونظام الطيبات. ولا يمثل المحتوى تشخيصاً طبياً أو وصفة علاجية أو ضماناً للشفاء أو النتائج. كما أن شهادات وتجارب الأشخاص هي تجارب فردية ولا تثبت أن نظاماً أو علاجاً معيناً تسبب في الشفاء، ولا تضمن الحصول على النتائج نفسها لدى الآخرين.",
      },
    ],

    counter: "تمت الموافقة على",

    enter: "دخول الموقع",

    waiting:
      "يجب الموافقة على البنود الثلاثة قبل دخول الموقع.",

    recordNotice:
      "سيتم حفظ سجل بالموافقة وتاريخها ونسخة الشروط التي تمت الموافقة عليها.",

    languageLabel: "English",
  },

  en: {
    title: "Before Entering the Website",

    intro:
      "Please read and acknowledge the following statements before entering the Al-Tayyibat website.",

    items: [
      {
        title:
          "Do not stop or change prescribed treatment without medical advice",
        text:
          "I understand that I should not stop or change any prescribed medication or treatment based on information presented on this website or through the Al-Tayyibat System. Any treatment change should be discussed with a qualified physician or healthcare professional.",
      },
      {
        title:
          "Consult an appropriate healthcare professional",
        text:
          "I understand that I should consult an appropriate physician or healthcare professional before making significant dietary changes, particularly if I have a chronic medical condition, take medication, or require ongoing medical care.",
      },
      {
        title:
          "The website is for documentation and education only",
        text:
          "I understand that this website is provided for documentation and educational purposes only. It preserves and presents ideas, opinions, and personal experiences associated with Dr. Diaa Al-Awady and the Al-Tayyibat System. Its content is not a medical diagnosis, prescription, guarantee of recovery, or guarantee of results. Testimonials describe individual experiences and do not establish that a particular system or treatment caused a recovery, nor do they guarantee similar results for others.",
      },
    ],

    counter: "Acknowledged",

    enter: "Enter Website",

    waiting:
      "You must acknowledge all three statements before entering the website.",

    recordNotice:
      "A record of your acknowledgment, the date, and the version of the terms accepted will be retained.",

    languageLabel: "العربية",
  },
} as const;