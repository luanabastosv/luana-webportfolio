import data from "../data/website-content.json";

function PageHome() {
  const home = data.homepage;
  return (
    <main>
      <section className="page-home">

        <div className="hero">
          <div className="hero-text">
          <img src="public/assets/images/Asset 13@1x.svg" alt="" className="transp" />
          <img src="public/assets/images/Asset 13@1x.svg" alt="" />
          <img src="public/assets/images/Asset 13@1x.svg" alt="" className="transp" />
          </div>
          <p dangerouslySetInnerHTML={{ __html: home.subheading }} />
        </div>

        <div className="home-content">
          <div className="home-content-text">
            {home.description.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
          <div className="home-content-quote">
            <img src="public/assets/images/star.svg" alt="" />
            <h2>{home.secsubheading}</h2>
            <div className="cta-buttons">
              <a
                href="/projects"
                onClick={(e) => handleNavClick(e, "/projects")}
              >
                {home.buttons.first}
              </a>
              <a href="/about" onClick={(e) => handleNavClick(e, "/about")}>
                {home.buttons.second}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PageHome;
