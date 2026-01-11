export function formatDate(date: Date, lan?: Intl.LocalesArgument) {
  return date.toLocaleDateString(lan ?? "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// duration will be passed in seconds
export function formatDuration(duration: number) {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  const pad = (n: number) => n.toString().padStart(2, "0");

  if (hours > 0) {
    return `${hours}:${pad(minutes)}:${pad(seconds)}`;
  } else if (minutes > 0) {
    return `${minutes}:${pad(seconds)}`;
  } else {
    return `${seconds}s`;
  }
}
