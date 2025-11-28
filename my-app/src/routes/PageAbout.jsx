import { useTheme } from "../context/ThemeContext";
import { useState, useEffect } from "react";
import Spotify from "../components/Spotify";

function PageAbout() {
  const { theme } = useTheme(); // pega o tema atual

  // 4 fotos por tema
  const photos = [
    `/assets/images/luana-photo-1-${theme}.png`,
    `/assets/images/luana-photo-2-${theme}.png`,
    `/assets/images/luana-photo-3-${theme}.png`,
    `/assets/images/luana-photo-4-${theme}.png`,
  ];

  const [index, setIndex] = useState(0);

  const refreshPhoto = () => {
    setIndex((prev) => (prev + 1) % photos.length);
  };

  useEffect(() => {
    setIndex(0);
  }, [theme]);

  return (
    <main>
      <section className="page-about">
        <div className="hero-about">
          <div>
            <h1>Front-End</h1>

            <div className="photo-container">
              <button onClick={refreshPhoto}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 2L13 3.99545L12.9408 4.05474M13 18.0001L11 19.9108L11.0297 19.9417M12.9408 4.05474L11 6M12.9408 4.05474C12.6323 4.01859 12.3183 4 12 4C7.58172 4 4 7.58172 4 12C4 14.5264 5.17107 16.7793 7 18.2454M17 5.75463C18.8289 7.22075 20 9.47362 20 12C20 16.4183 16.4183 20 12 20C11.6716 20 11.3477 19.9802 11.0297 19.9417M13 22.0001L11.0297 19.9417" />
                </svg>
                Refresh
              </button>
              <img src={photos[index]} alt="Luana" />
              <p>Also UI/UX Designer & Enthusiastic Creator</p>
            </div>

            <h2>Web Dev</h2>
          </div>
        </div>

        <article>
          <p>
            Hi! I'm a creator with a background in{" "}
            <span className="bold">
              {" "}
              architecture, graphic design, and photography.
            </span>{" "}
            After over 5 years working in the architecture industry, I decided
            to follow a new path—one that combines logic, creativity, and
            constant learning: <span className="bold">web development.</span>
          </p>

          <p>
            Today, I'm focused on building clean, functional, and visually
            engaging websites. My multidisciplinary experience helps me bring a
            unique perspective to every project, from design to development.
          </p>

          <p>
            Outside of the screen,{" "}
            <span className="bold">
              I'm all about movement and energy. ⚡︎ ⚡︎ ⚡︎
            </span>{" "}
            I’m passionate about an active lifestyle:{" "}
            <span className="bold">
              surfing <span className="crossed">(trying, at least)</span>,
              skating, and running
            </span>{" "}
            keep me inspired. And whether it’s a sunrise coffee or a late-night
            coding session, you’ll probably find me with an energy drink in
            hand.
          </p>

          <div>
            <p>
              I’ve also got a pretty eclectic taste in <button>Music</button>{" "}
              Click here to check what I'm listening now
            </p>
            <Spotify />

            <p></p>
          </div>
        </article>

        <div className="stamps">
          <img src="public/assets/images/stamp.svg" alt="" />
          <img src="public/assets/images/stamp.svg" alt="" />
        </div>

        <div className="skills">
          <h2>Dev and UI/UX Skills</h2>
          <p>
            Experienced in building React apps, static websites (HTML/CSS), and
            CMS platforms like WordPress and Shopify. Strong background in Figma
            prototyping and the full Adobe Creative Suite.
          </p>
          <div>
            <ul>
              <li>HTML</li>
              <li>HTML</li>
              <li>HTML</li>
              <li>HTML</li>
            </ul>
            <ul>
              <li>HTML</li>
              <li>HTML</li>
              <li>HTML</li>
              <li>HTML</li>
            </ul>
            <ul>
              <li>HTML</li>
              <li>HTML</li>
              <li>HTML</li>
              <li>HTML</li>
            </ul>
            <ul>
              <li>HTML</li>
              <li>HTML</li>
              <li>HTML</li>
              <li>HTML</li>
            </ul>
          </div>
        </div>

        <div className="previous-experiences">
          <h2>Previous Experiences</h2>
          <p>
            Experienced in building React apps, static websites (HTML/CSS), and
            CMS platforms like WordPress and Shopify. Strong background in Figma
            prototyping and the full Adobe Creative Suite.
          </p>
          <div>
            <div>
              <h3>Architecture</h3>
              <ul>
                <li>5y as Architect and Interior Designer</li>
                <li>Team leading</li>
                <li>Project Management</li>
              </ul>
            </div>
            <div>
              <h3>Designer</h3>
              <ul>
                <li>5y as Architect and Interior Designer</li>
                <li>Team leading</li>
                <li>Project Management</li>
              </ul>
            </div>
            <div>
              <h3>Photographer</h3>
              <ul>
                <li>5y as Architect and Interior Designer</li>
                <li>Team leading</li>
                <li>Project Management</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="education">
          <h2>Education // Languages</h2>
          <p>
            Experienced in building React apps, static websites (HTML/CSS), and
            CMS platforms like WordPress and Shopify. Strong background in Figma
            prototyping and the full Adobe Creative Suite.
          </p>
          <div>
            <div>
              <p>British Columbia Institute of Technology (BCIT)</p>
              <p>Universidade de Fortaleza (UNIFOR)</p>
            </div>
            <div>
              <p>English | Portuguese | Spanish</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PageAbout;
