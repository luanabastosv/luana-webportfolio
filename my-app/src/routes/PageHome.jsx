import data from "../data/website-content.json";

function PageHome() {
  const home = data.homepage;
  return (
    <main>
      <section className="page-home">
        <div className="hero">
          <h1 dangerouslySetInnerHTML={{ __html: home.title }} />
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
                {home.buttons.projects}
              </a>
              <a href="/about" onClick={(e) => handleNavClick(e, "/about")}>
                {home.buttons.about}
              </a>
            </div>
          </div>
        </div>
      </section>
      .
    </main>
  );
}

export default PageHome;
