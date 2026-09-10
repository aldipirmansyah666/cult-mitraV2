export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  count: string;
  color: string;
  popular?: boolean;
  tag?: string;
}

export interface ProductDetail {
  name: string;
  slug: string;
  category: string;
  description: string;
  benefits: string[];
  howItWorks: string[];
  active: boolean;
}

export interface FeeItem {
  product: string;
  category: string;
  subcategory?: string;
  admin: string;
  fee: string;
  status: "active" | "closed" | "diatur_sendiri";
}

export interface Feature {
  title: string;
  desc: string;
  icon: string;
  highlight?: string;
}

export interface Step {
  n: string;
  title: string;
  desc: string;
  detail: string;
  icon: string;
  accent: string;
}

export interface FAQ {
  q: string;
  a: string;
  category?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  kota: string;
  text: string;
  profit: string;
}

export interface GuideStep {
  title: string;
  description?: string;
  steps: string[];
  tip?: string;
}

export interface GuideContent {
  intro: string;
  sections: GuideStep[];
  note?: string;
  imageCaption?: string;
}

export interface GuideCTA {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  external?: boolean;
}

export interface GuideItem {
  title: string;
  slug: string;
  description: string;
  category: string;
  icon: string;
  image?: string;
  content?: GuideContent;
  cta?: GuideCTA[];
}

export interface RegistrationFormData {
  namaLoket: string;
  pemilik: string;
  noKtp: string;
  alamat: string;
  noHandphone: string;
  email: string;
  aplikasi: "android" | "pc" | "pc_android" | "";
  jenisUsaha: string;
  feeMasukKe: "rekening" | "deposit" | "";
  noRekening: string;
  namaBank: string;
  atasNama: string;
  kota: string;
}

export interface DepositInfo {
  bank: string;
  norek: string;
  an: string;
}
