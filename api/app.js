const express = require('express');
const app = express();
const port = 3000;

const WAKATIME_API_KEY = process.env.WAKATIME_API_KEY;
const CURRENT_STATUS_URL = 'https://wakatime.com/api/v1/users/current/status_bar/today';
const WEEK_URL = 'https://wakatime.com/api/v1/users/current/stats/last_7_days';

async function getCurrentStats() {
  const response = await fetch(CURRENT_STATUS_URL, {
    headers: {
      'Authorization': `Basic ${WAKATIME_API_KEY.toString('base64')}`
    }
  });

  if (!response.ok) {
    throw new Error(`Error fetching Wakatime CurrentStats data: ${response.statusText}`);
  }

  return await response.json();
}

async function getWeekStats() {
  const response = await fetch(WEEK_URL, {
    headers: {
      'Authorization': `Basic ${WAKATIME_API_KEY.toString('base64')}`
    }
  });

  if (!response.ok) {
    throw new Error(`Error fetching Wakatime Week data: ${response.statusText}`);
  }

  return await response.json();
}

app.get("/wakatime", async (req, res) => {
  if (!WAKATIME_API_KEY) {
    console.error('WAKATIME_API_KEY is not set');
    return res.status(500).json({ error: 'WAKATIME_API_KEY is not set' });
  }

  try {
    const currentStats = await getCurrentStats();
    const weekStats = await getWeekStats();

    res.status(200).json({
      current: currentStats,
      week: weekStats
    });
  } catch (error) {
    console.error('Error fetching Wakatime data:', error);
    res.status(500).json({ error: 'Failed to fetch Wakatime data' });
  }
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})