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

export interface CourseCardProps {
  type: string;
  data: {
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
  };
}

export interface Events {
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
  title: string;
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
