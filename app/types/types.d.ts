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
