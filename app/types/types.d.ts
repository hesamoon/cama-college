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
