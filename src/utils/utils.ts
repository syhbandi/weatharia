export const dateFormat = (date: string) => {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "full",
  }).format(new Date(date));
};

export const timeFormat = (date: string) => {
  return new Intl.DateTimeFormat("en", {
    timeStyle: "short",
    hour12: false,
  }).format(new Date(date));
};
