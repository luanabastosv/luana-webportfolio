import { useEffect } from "react";

function SpotifyCallback() {
  useEffect(() => {
    // Os dados vêm na hash: #access_token=...
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.replace("#", ""));

    const accessToken = params.get("access_token");

    if (accessToken) {
      localStorage.setItem("spotify_token", accessToken);
      window.location.href = "/"; // redirecionar de volta ao site
    } else {
      console.error("No token found.");
    }
  }, []);

  return <p>Loading...</p>;
}

export default SpotifyCallback;
