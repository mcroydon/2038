export const formatCountdown = (targetDate) => {
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

  return `${years} Years ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
};

export const getCurrentUnixTime = () => {
  try {
    const now = new Date();
    const unixTimeSeconds = Math.floor(now.getTime() / 1000);
    const binaryString = unixTimeSeconds.toString(2).padStart(32, "0");
    const formatted32Bit = binaryString.match(/.{1,8}/g).join(" ");
    const humanReadableFormat = now.toUTCString();

    console.log(`Current UTC Time: ${humanReadableFormat} | 32-bit Unix Time: ${formatted32Bit}`);

    return {
      dateString: humanReadableFormat,
      binaryString: formatted32Bit,
      unixTimeSeconds,
    };
  } catch (error) {
    console.error("Failed to get current Unix time:", error.message, error.stack);
    throw error; // Rethrow the error after logging
  }
};