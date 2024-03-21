import { formatCountdown, getCurrentUnixTime } from '../../utils/countdownUtils';

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      // Simulating the logic that would have been in an Express route
      const countdown = formatCountdown(new Date(Date.UTC(2038, 0, 19, 3, 14, 7)));
      const currentUnixTime = getCurrentUnixTime();
      
      res.status(200).json({ countdown, currentUnixTime });
    } else {
      // Handle any non-GET requests
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error("Error in /api/index.js:", error.message, error.stack);
    res.status(500).json({ error: "Internal server error" });
  }
}