import { useEffect, useState } from "react";

function Spotify() {
  const [track, setTrack] = useState(null);
  const [raw, setRaw] = useState(null);

  useEffect(() => {
    async function fetchTrack() {
      try {
        const res = await fetch("/api/now-playing?t=" + Date.now(), {
          cache: "no-store",
        });
        const data = await res.json();

        setRaw(data); // debug
        if (data?.title && data?.artist) setTrack(data);
      } catch (error) {
        console.error("Spotify error:", error);
      }
    }

    fetchTrack();
  }, []);

  return (
    <div className="spotify">
      <div>
        {track ? (
          <>
            <p>
              {track.type === "now-playing"
                ? "Currently listening"
                : "Last played"}
            </p>
            <p className="music-title">&gt; {track.title}</p>
            <p className="music-author">
              by <strong>{track.artist}</strong>
            </p>
          </>
        ) : (
          <>
            <p>No recent activity</p>
            {/* debug pra gente ver o que veio */}
            <pre style={{ fontSize: 12, opacity: 0.7 }}>
              {JSON.stringify(raw, null, 2)}
            </pre>
          </>
        )}
      </div>
    </div>
  );
}

export default Spotify;
