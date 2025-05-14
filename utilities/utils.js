import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

const getRelativeTime = (ISODate) => {
  const date = new Date(ISODate);
  const now = new Date();

  const minutesDifference = differenceInMinutes(now, date);
  const hoursDifference = differenceInHours(now, date);
  const daysDifference = differenceInDays(now, date);
  const monthsDifference = differenceInMonths(now, date);
  const yearsDifference = differenceInYears(now, date);
  const weeksDifference = Math.floor(daysDifference / 7);

  let relativeTime = "";

  if (yearsDifference > 1) {
    relativeTime = `${yearsDifference} year(s) ago`;
  } else if (yearsDifference === 1) {
    relativeTime = `1 year ago`;
  } else if (monthsDifference > 1) {
    relativeTime = `${monthsDifference} month(s) ago`;
  } else if (monthsDifference === 1) {
    relativeTime = `1 month ago`;
  } else if (weeksDifference > 1) {
    relativeTime = `${weeksDifference} week(s) ago`;
  } else if (weeksDifference === 1) {
    relativeTime = `1 week ago`;
  } else if (daysDifference > 1) {
    relativeTime = `${daysDifference} days ago`;
  } else if (daysDifference === 1) {
    relativeTime = `1 day ago`;
  } else if (hoursDifference > 1) {
    relativeTime = `${hoursDifference} hours ago`;
  } else if (hoursDifference === 1) {
    relativeTime = `1 hour ago`;
  } else if (minutesDifference > 1) {
    relativeTime = `${minutesDifference} mins ago`;
  } else if (minutesDifference === 1) {
    relativeTime = `1 min ago`;
  } else {
    relativeTime = "Just now";
  }

  return relativeTime;
};

export { getRelativeTime };
