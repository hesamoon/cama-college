import React from "react";
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

const getTimeRemaining = (ISODate) => {
  const deadline = new Date(ISODate);
  const now = new Date();

  if (deadline <= now) {
    return "Deadline passed";
  }

  const minutesDifference = differenceInMinutes(deadline, now);
  const hoursDifference = differenceInHours(deadline, now);
  const daysDifference = differenceInDays(deadline, now);
  const monthsDifference = differenceInMonths(deadline, now);
  const yearsDifference = differenceInYears(deadline, now);
  const weeksDifference = Math.floor(daysDifference / 7);

  if (yearsDifference >= 1) {
    return `${yearsDifference} year${yearsDifference > 1 ? "s" : ""} left`;
  }
  if (monthsDifference >= 1) {
    return `${monthsDifference} month${monthsDifference > 1 ? "s" : ""} left`;
  }
  if (weeksDifference >= 1) {
    return `${weeksDifference} week${weeksDifference > 1 ? "s" : ""} left`;
  }
  if (daysDifference >= 1) {
    return `${daysDifference} day${daysDifference > 1 ? "s" : ""} left`;
  }
  if (hoursDifference >= 1) {
    return `${hoursDifference} hour${hoursDifference > 1 ? "s" : ""} left`;
  }
  if (minutesDifference >= 1) {
    return `${minutesDifference} min${minutesDifference > 1 ? "s" : ""} left`;
  }

  return "Less than a minute left";
};

function parseStyledText(text) {
  const regex = /@\(\*(.*?)\*\)@/g;
  const parts = [];

  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [fullMatch, highlighted] = match;
    const index = match.index;

    // Push normal text before the match
    if (index > lastIndex) {
      parts.push(text.slice(lastIndex, index));
    }

    // Push styled span
    parts.push(
      <span
        key={index}
        className="relative text-[#A91418] before:content-[''] before:absolute before:bottom-0.5 before:left-0 before:right-0 before:h-[0.5em] before:bg-[#A9141829] before:-z-10"
      >
        {highlighted}
      </span>
    );

    lastIndex = index + fullMatch.length;
  }

  // Push remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export { getRelativeTime, getTimeRemaining, parseStyledText };
