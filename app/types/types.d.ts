export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  isRemote: boolean;
  isDisabilityFriendly: boolean;
  postedAt: string;
  ratePerhour: string;
  jobGroup: string;
}

export interface Transaction {
  program: string;
  date: string;
  amount: string;
  payType: string;
  status: string;
  transactionId: string;
}

type CourseCardType = "PROGRAM" | "EVENT" | "NEWS";

interface CourseBase {
  id: string;
  name: string;
  about: string;
  audience: { text: string }[];
  avatar: string;
  avatar_hash: string;
  language: string;
  level: string;
  prerequisites: { text: string }[];
  subject: string;
  what_you_learn: { text: string }[];
  status: string;
  cardType: CourseCardType;
}

interface Program extends CourseBase {
  cardType: "PROGRAM";
  type: string;
  credential_type: string;
  duration: number | null;
  price: number;
}

interface Event extends CourseBase {
  cardType: "EVENT";
  date: string;
  duration: number;
  price: number;
  lat?: number | null;
  lng?: number | null;
}

type DescriptionItem = {
  id: number;
  title: string;
  content: string;
  cover: string;
};

interface News extends CourseBase {
  cardType: "NEWS";
  date?: string;
  category: string;
  like: number;
  comments: number;
  author: string;
  date: string;
  description1: DescriptionItem[];
}

type CourseCardProps = Program | Event | News;

export interface Chip {
  lable: string;
  leftIcon: string;
  rightIcon: string;
  type: string;
  disabled: boolean;
  width: number;
  height: number;
  padding?: string | null;
}

export interface CommentT {
  id: number;
  title: string;
  author: string;
  date: string;
  text: string;
  rating: number;
  likes: number;
  disLike: number;
}

export interface UserType {
  id: string;
  name: string;
  family: string;
  email: string;
  bio: string | null;
  tuum_balance: number;
  mobile: string | null;
  mobile_verified_at: string | null;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
}

export interface CommentType {
  id: string;
  comment: string;
  score: number;
  likes_count: number;
  dislikes_count: number;
  created_at: string;
  parent?: string | null;
  user: UserType;
}

type Article = {
  id: number;
  type: string;
  title: string;
  desc: string;
  year: number;
  author: string;
  open: boolean;
};

type Member = {
  id: number;
  name: string;
  role: string;
  desc: string;
};

type MenuDesc = {
  title: string;
  content: string;
} | null;

export interface SubMenu {
  id: number;
  href: string;
  name: string;
  desc?: MenuDesc;
}

export interface HeaderNav {
  id: number;
  href: string;
  name: string;
  subMenus?: SubMenu[]; // optional or can be an empty array
}

export interface HeaderNavProps {
  selNav: HeaderNav | null;
  setSelNav: React.Dispatch<React.SetStateAction<HeaderNav | null>>;
  hmnu: HeaderNav;
}

export interface Node {
  name: string;
  children?: Node[];
}

export interface Street {
  id: number;
  city_id: number;
  name: string;
  created_at: string | null;
  updated_at: string | null;
}

export interface Company {
  id: string;
  name: string;
  employee_count: number;
  description: string;
  website_link: string;
}

export interface JobOffers {
  application_deadline: string;
  company: Company;
  description: string;
  disability_friendly: number;
  education_level: string;
  experience_years: number;
  gender: string;
  id: string;
  is_active: number;
  max_age: number;
  min_age: number;
  release_time: string;
  salary_max: number;
  salary_min: number;
  street: Street;
  title: string;
  type: string;
}

export type ChatHistory = {
  id: number;
  title: string;
  messages: ChatMessage[];
  created_at: string;
  updated_at: string;
} | null;

export type ChatMessage = {
  id: number;
  type: "question" | "answer";
  content: string;
  timestamp: string;
  attachments?: string[]; // URLs to images/files
};

type CreditCardValue = {
  cardNumber: string;
  expiry: string; // "MM/YY"
  cvv: string;
  cardType: "visa" | "mastercard" | "amex" | "default";
};

type CartType = {
  cartable: CourseCardProps;
  cartable_type: string;
  price: number;
  quantity: number;
};

export type Lesson = {
  id: string;
  title: string;
  content: string;
  is_free: number;
  subject: string;
  avatar: string;
  avatar_hash: string;
} | null;

export type Subject = {
  id: string;
  name: string;
  duration: number;
  program: string;
  lessons: Lesson[];
};

export interface ProgramDetailsType {
  id: string;
  name: string;
  subject: string;
  language: string;
  type: string;
  credential_type: string;
  level: string;
  status: string;
  duration: number;
  max_lessons_per_day: number | null;
  about: string;
  price: number;
  tuum_bonus: number | null;
  prerequisites: { text: string }[];
  audience: { text: string }[];
  what_you_learn: { text: string }[];
  subjects: Subject[];
  avatar: string;
  avatar_hash: string | null;
  comments_count: number;
  comments: CommentT[];
}
