import { useEffect } from "react";

function SpotifyCallback() {
  useEffect(() => {
   
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.replace("#", ""));

    const accessToken = params.get("access_token");

    if (accessToken) {
      localStorage.setItem("spotify_token", accessToken);
      window.location.href = "/"; 
    } else {
      console.error("No token found.");
    }
  }, []);

  return <p>Loading...</p>;
}

export default SpotifyCallback;
