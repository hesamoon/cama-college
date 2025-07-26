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

export interface Program {
  price: number;
  status: string;
  date: string;
  about: string;
  audience: { text: string }[];
  avatar: string;
  credential_type: string;
  duration: number | null;
  id: string;
  language: string;
  level: string;
  name: string;
  prerequisites: { text: string }[];
  subject: string;
  type: string;
  what_you_learn: { text: string }[];
}

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

export interface ProgramCardProps {
  type: string;
  data: Program;
}

export interface EventCardProps {
  type: string;
  data: Event;
}

export interface EventCardProps2 {
  type: string;
  data: Event2;
}

export interface PostCardProps {
  type: string;
  data: News;
}

export type CourseCardProps = PostCardProps | ProgramCardProps | EventCardProps | EventCardProps2;

export interface Event {
  status: string;
  about: string;
  audience: { text: string }[];
  avatar: string;
  date: string;
  duration: number | null;
  id: string;
  language: string;
  lat: number | null;
  level: string;
  lng: number | null;
  name: string;
  prerequisites: { text: string }[];
  price: number;
  subject: string;
  what_you_learn: { text: string }[];
}

export interface Event2 {
  id: number;
  coverImg: string;
  name: string;
  level: string;
  type: string;
  duration: number;
  price: number;
  status: string;
  publishDate: string;
  category: string;
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

type DescriptionItem = {
  id: number;
  title: string;
  content: string;
  cover: string;
};

type News = {
  id: number;
  coverImg: string;
  name: string;
  mainDesc: string;
  category: string;
  like: number;
  comments: number;
  author: string;
  publishDate: string;
  description1: DescriptionItem[];
};

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
