

function PageHome() {


  return (
    <main>
      <section className="page-home">
        <div className="hero">
          <h1
          >
            Luana. <span>Bastos</span>
          </h1>
          <p>
            &#123;&nbsp;&nbsp;&nbsp;&nbsp;Front-End{" "}
            <span className="bold">Web Developer</span> and{" "}
            <span className="bold">UI/UX Designer</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;
          </p>
          <img src="public/assets/images/button-color.svg" alt="" />
        </div>

        <div className="home-content">
          <div className="home-content-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              quia molestias voluptate sequi aut explicabo nostrum? Vero, minus.
              Omnis alias deserunt illum eaque, deleniti ex quos modi qui dolor
              earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              quia molestias voluptate sequi aut explicabo nostrum? Vero, minus.
              Omnis alias deserunt illum eaque, deleniti ex quos modi qui dolor
              earum.
            </p>
          </div>
          <div className="home-content-quote">
            <img src="public/assets/images/star.svg" alt="" />
            <h2>Here is where creativity meets code.</h2>
            <div className="cta-buttons">
              <a href="/projects" onClick={(e) => handleNavClick(e, "/projects")}>My projects</a>
              <a href="/contact" onClick={(e) => handleNavClick(e, "/contact")}>Let's talk</a>
            </div>
          </div>
        </div>
      </section>
      .
    </main>
  );
}

export default PageHome;
