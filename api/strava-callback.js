export default async function handler(req, res) {
  const { code, error } = req.query;

  if (error) {
    return res.redirect('/?strava_error=access_denied');
  }

  if (!code) {
    return res.status(400).json({ error: 'No code provided' });
  }

  try {
    const response = await fetch('https://www.strava.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: process.env.STRAVA_CLIENT_ID,
        client_secret: process.env.STRAVA_CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
      }),
    });

    const data = await response.json();

    if (data.errors) {
      return res.redirect('/?strava_error=token_exchange_failed');
    }

    const { access_token, refresh_token, expires_at, athlete } = data;

    // Redirect back to app with tokens in fragment (never in query string)
    const params = new URLSearchParams({
      access_token,
      refresh_token,
      expires_at,
      athlete_id: athlete.id,
      athlete_name: athlete.firstname + ' ' + athlete.lastname,
    });

    res.redirect(`/?strava_connected=1#strava=${Buffer.from(params.toString()).toString('base64')}`);
  } catch (err) {
    console.error('Strava OAuth error:', err);
    res.redirect('/?strava_error=server_error');
  }
}
