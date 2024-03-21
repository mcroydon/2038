export const calculateTimeLeft = () => {
  const targetDate = new Date(Date.UTC(2038, 0, 19, 3, 14, 7));
  const now = new Date();
  const difference = targetDate - now;

  if (difference < 0) {
    console.log("Countdown has ended.");
    return "Countdown has ended.";
  }

  let remaining = difference / 1000; // Convert milliseconds to seconds
  const years = Math.floor(remaining / (3600 * 24 * 365));
  remaining %= 3600 * 24 * 365;
  const days = Math.floor(remaining / (3600 * 24));
  remaining %= 3600 * 24;
  const hours = Math.floor(remaining / 3600);
  remaining %= 3600;
  const minutes = Math.floor(remaining / 60);
  const seconds = Math.floor(remaining % 60);

  const formattedTimeLeft = `${years} Years ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
  console.log(`Time left until target date: ${formattedTimeLeft}`);
  return formattedTimeLeft;
};