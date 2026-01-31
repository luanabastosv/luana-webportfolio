const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";

const {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_REFRESH_TOKEN,
} = process.env;

async function getAccessToken() {
  const basic = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: SPOTIFY_REFRESH_TOKEN,
    }),
  });

  const data = await response.json();
  return data.access_token;
}

export default async function handler(req, res) {
    res.setHeader("Cache-Control", "no-store, max-age=0");
  try {
    const accessToken = await getAccessToken();

    // 1️⃣ tenta now playing
    const nowPlayingRes = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (nowPlayingRes.status === 200) {
      const nowPlaying = await nowPlayingRes.json();

      if (nowPlaying?.is_playing) {
        const track = nowPlaying.item;

        return res.status(200).json({
          type: "now-playing",
          title: track.name,
          artist: track.artists.map((a) => a.name).join(", "),
          album: track.album.name,
          cover: track.album.images[0]?.url,
        });
      }
    }

    // 2️⃣ fallback → last played
    const recentRes = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const recent = await recentRes.json();
    const item = recent.items?.[0];

    if (!item) {
      return res.status(200).json({ active: false });
    }

    const track = item.track;

    res.status(200).json({
      type: "last-played",
      title: track.name,
      artist: track.artists.map((a) => a.name).join(", "),
      album: track.album.name,
      cover: track.album.images[0]?.url,
      playedAt: item.played_at,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Spotify error" });
  }
}
