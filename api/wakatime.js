const WAKATIME_API_KEY = process.env.WAKATIME_API_KEY;
const CURRENT_STATUS_URL = 'https://wakatime.com/api/v1/users/current/status_bar/today';
const WEEK_URL = 'https://wakatime.com/api/v1/users/current/stats/last_7_days';
let currentStats;
let weekStats;

export default async (req, res) => {
  try {
    const response = await fetch(CURRENT_STATUS_URL, {
      headers: {
        'Authorization': `Basic ${WAKATIME_API_KEY.toString('base64')}`
      }
    });

    if (!response.ok) {
      throw new Error(`Error fetching Wakatime CurrentStats data: ${response.statusText}`);
    }

    currentStats = await response.json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch Wakatime CurrentStats data' });
  }

  try {
    const response = await fetch(WEEK_URL, {
      headers: {
        'Authorization': `Basic ${WAKATIME_API_KEY.toString('base64')}`
      }
    });

    if (!response.ok) {
      throw new Error(`Error fetching Wakatime Week data: ${response.statusText}`);
    }

    weekStats = await response.json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch Wakatime Week data' });
  }

  if (currentStats && weekStats) {
    res.status(200).json({
      current: currentStats,
      week: weekStats
    });
  } else {
    res.status(500).json({ error: 'Failed to fetch Wakatime data' });
  }
}