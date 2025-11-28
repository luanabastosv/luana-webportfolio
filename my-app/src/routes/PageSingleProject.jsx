function PageSingleProject() {
  return (
    <section className="single-project">
      <img src="/public/assets/images/print-muvi.png" alt="" />
      <h2>This Porfolio</h2>
      <div className="single-content">
        <div className="specs">
          <h3>Project Specifications</h3>

          <div className="spec-card">
            <div>
              <p> Tech Used (Development):</p>
              <p>
                {" "}
                <strong>Headless CMS + React</strong>
              </p>
            </div>
            <div>
              <p> Tech Used (UI/UX):</p>
              <p>
                <strong>Figma + Illustrator</strong>{" "}
              </p>
            </div>
            <div>
              <p>
                By: <strong> Luana Bastos</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="specs-moreinfo">
          <div>
            <h3>Project Overview</h3>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
              facere iste est hic obcaecati! Reprehenderit aliquam doloremque
              officia, quis eveniet fugiat commodi harum consequatur ea laborum
              modi earum quibusdam dolor?
            </p>
          </div>
          <div>
            <h3>What I've Learned</h3>
            <div>
              <div>
                <p>Tech Used (Development):</p>
                <p>Headless CMS + React</p>
              </div>
              <div>
                <p>Tech Used (UI/UX):</p>
                <p>Headless CMS + React</p>
              </div>
              <div>
                <p>By: Luana Bastos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageSingleProject;
