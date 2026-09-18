export type TestimonialItem = {
  id: number;

  youtubeId: string;

  nameAr: string;
  nameEn: string;

  titleAr: string;
  titleEn: string;

  descriptionAr: string;
  descriptionEn: string;

  source?: string;

  featured?: boolean;
};

export const testimonials: TestimonialItem[] = [
  {
    id: 1,
    youtubeId: "RBKFEgTEeOQ",

    nameAr: "",
    nameEn: "",

    titleAr:
      "تجربة شخصية مع نظام الطيبات",

    titleEn:
      "Personal Experience with the Al-Tayyibat System",

    descriptionAr:
      "يروي صاحب هذه الشهادة تجربته الشخصية مع نظام الطيبات والنتائج التي لاحظها خلال تجربته.",

    descriptionEn:
      "In this testimonial, the participant describes their personal experience with the Al-Tayyibat System and the changes they personally observed.",

    source: "YouTube",
    featured: true,
  },

  {
    id: 2,
    youtubeId: "UIjf74v-9r0",

    nameAr: "",
    nameEn: "",

    titleAr:
      "شهادة وتجربة مع نظام الطيبات",

    titleEn:
      "Testimonial and Experience with the Al-Tayyibat System",

    descriptionAr:
      "شهادة شخصية يوثق فيها صاحب الفيديو تجربته الخاصة مع نظام الطيبات.",

    descriptionEn:
      "A personal testimonial in which the participant shares their own experience with the Al-Tayyibat System.",

    source: "YouTube",
    featured: true,
  },

  {
    id: 3,
    youtubeId: "EKRMAErAAVA",

    nameAr: "",
    nameEn: "",

    titleAr:
      "تجربة أحد متابعي نظام الطيبات",

    titleEn:
      "An Al-Tayyibat Follower's Personal Experience",

    descriptionAr:
      "يتحدث صاحب الشهادة عن تجربته الشخصية وما لاحظه أثناء اتباع نظام الطيبات.",

    descriptionEn:
      "The participant describes their personal experience and what they observed while following the Al-Tayyibat System.",

    source: "YouTube",
    featured: false,
  },

  {
    id: 4,
    youtubeId: "2WYgd844B08",

    nameAr: "",
    nameEn: "",

    titleAr:
      "شهادة شخصية موثقة بالفيديو",

    titleEn:
      "Personal Video Testimonial",

    descriptionAr:
      "فيديو يوثق تجربة شخصية مرتبطة بنظام الطيبات كما يرويها صاحب التجربة.",

    descriptionEn:
      "A video documenting a personal experience associated with the Al-Tayyibat System, as described by the participant.",

    source: "YouTube",
    featured: false,
  },

  {
    id: 5,
    youtubeId: "WK3vuYOwEwk",

    nameAr: "",
    nameEn: "",

    titleAr:
      "تجربة شخصية ضمن شهادات نظام الطيبات",

    titleEn:
      "Personal Experience from the Al-Tayyibat Testimonials",

    descriptionAr:
      "يشارك صاحب الفيديو تجربته الشخصية ضمن أرشيف الشهادات والتجارب المرتبطة بنظام الطيبات.",

    descriptionEn:
      "The participant shares their personal experience as part of the testimonial archive associated with the Al-Tayyibat System.",

    source: "YouTube",
    featured: false,
  },

  {
    id: 6,
    youtubeId: "0cMwa1Wt0p0",

    nameAr: "",
    nameEn: "",

    titleAr:
      "شهادة وتجربة شخصية مصورة",

    titleEn:
      "Recorded Personal Testimonial",

    descriptionAr:
      "شهادة مصورة يعرض فيها صاحب التجربة ما مر به شخصياً أثناء تجربته مع نظام الطيبات.",

    descriptionEn:
      "A recorded testimonial in which the participant describes what they personally experienced while following the Al-Tayyibat System.",

    source: "YouTube",
    featured: false,
  },
];