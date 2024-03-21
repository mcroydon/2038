import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getCurrentUnixTime } from '../utils/countdownUtils';
import { calculateTimeLeft } from '../utils/countdownLogic';

export default function Home() {
  const [currentUnixTimeDisplay, setCurrentUnixTimeDisplay] = useState('');
  const [countdownTimer, setCountdownTimer] = useState('');

  useEffect(() => {
    const updateCountdown = () => {
      try {
        const countdown = calculateTimeLeft();
        setCountdownTimer(countdown);
      } catch (error) {
        console.error("Failed to update countdown:", error.message, error.stack);
      }
    };

    const updateCurrentUnixTime = () => {
      try {
        const unixTime = getCurrentUnixTime();
        setCurrentUnixTimeDisplay(`Current UTC Time: ${unixTime.dateString} | 32-bit Unix Time: ${unixTime.binaryString}`);
      } catch (error) {
        console.error("Failed to update current Unix time:", error.message, error.stack);
      }
    };

    updateCountdown();
    updateCurrentUnixTime();

    const countdownInterval = setInterval(updateCountdown, 1000);
    const unixTimeInterval = setInterval(updateCurrentUnixTime, 1000);

    return () => {
      clearInterval(countdownInterval);
      clearInterval(unixTimeInterval);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>2038 Countdown</title>
      </Head>
      <div className="container text-center">
        <div id="currentUnixTimeDisplay" className="my-3 text-muted" tabIndex="0" aria-live="polite">
          <p>{currentUnixTimeDisplay}</p>
        </div>
        <h1 className="mt-5 text-muted" tabIndex="0" aria-label="Countdown to 03:14:07 UTC on 19 January 2038">Countdown to 03:14:07 UTC on 19 January 2038</h1>
        <div id="countdownTimer" className="display-4 my-5 text-muted" tabIndex="0" aria-live="polite">
          {countdownTimer}
        </div>
        {/* Omitting the time unit selection for brevity */}
      </div>
    </div>
  );
}