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

type Lesson = {
  id: number;
  title: string;
  type: string;
  content: string;
  passed: number;
};

type Content = {
  id: number;
  title: string;
  lessons: Lesson[];
};

export interface ProgramInProgress {
  id: number;
  coverImg: string;
  name: string;
  level: string;
  type: string;
  type2: string;
  duration: number;
  progress: number;
  publishDate: string;
  category: string;
  contents: Content[];
}

export interface Chip {
  lable: string;
  leftIcon: string;
  rightIcon: string;
  type: string;
  disabled: boolean;
  width: number;
  height: number;
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
