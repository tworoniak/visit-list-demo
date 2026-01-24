export const formatTime = (dateString: string): string => {
  return new Date(dateString).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const padZero = (num: number): string => {
  return num < 10 ? `0${num}` : num.toString();
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());
  const year = date.getFullYear();
  return `${month}-${day}-${year}`;
};

export const formatGender = (gender: string): string => {
  return gender === "Male" ? "M" : "F";
};
