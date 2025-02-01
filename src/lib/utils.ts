import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export function readingTimeValue(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  return (wordCount / 200 + 1).toFixed();
}

export function readingTime(html: string) {
  const readingTimeMinutes = readingTimeValue(html);
  return `${readingTimeMinutes} min read`;
}

export function isFileImage(filePath: string) {
  const file = filePath.match(/[^/\\&?]+\.\w{3,4}(?=([\?&].*$|$))/);
  if (!file) return false;
  const ext = file[0].split(".").pop();
  return ext ? ["jpg", "jpeg", "png", "gif", "webp"].includes(ext) : false;
}

export function isFileVideo(filePath: string) {
  const file = filePath.match(/[^/\\&?]+\.\w{3,4}(?=([\?&].*$|$))/);
  if (!file) return false;
  const ext = file[0].split(".").pop();
  return ext ? ["mp4", "webm"].includes(ext) : false;
}

export function getNextPost(collection: any, id: string) {
  let postIndex;
  for (const post of collection) {
    if (post.id === id) {
      postIndex = collection.indexOf(post);
      return collection[postIndex + 1];
    }
  }
}

export function getPrevPost(collection: any, id: string) {
  let postIndex;
  for (const post of collection) {
    if (post.id === id) {
      postIndex = collection.indexOf(post);
      return collection[postIndex - 1];
    }
  }
}