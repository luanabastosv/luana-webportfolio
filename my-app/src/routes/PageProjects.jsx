import projectsData from "../data/website-content.json";

function PageProjects() {
  const { projects } = projectsData;
  return (
    // <main>
    //   <section className="all-projects">
    //     <div className="projects">
    //       <h2>This Port folio</h2>
    //       <div className="project-card">
    //         <img src="public/assets/images/print-muvi.png" alt="" />

    //         <p>&#123;  Online Store, <span>Tech Used: React  &#125;</span></p>

    // <button>
    //   <svg
    //     viewBox="0 0 44 44"
    //     fill="none"
    //     xmlns="http://www.w3.org/2000/svg"
    //     class="check-icon"
    //   >
    //     <path
    //       d="M41 22C41 11.5066 32.4934 3 22 3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41V44C9.84974 44 -1.4489e-07 34.1503 0 22C1.4489e-07 9.84974 9.84974 -1.4489e-07 22 0C34.1503 1.4489e-07 44 9.84974 44 22C44 34.1503 34.1503 44 22 44V41C32.4934 41 41 32.4934 41 22ZM15.4375 13.8369C15.6082 13.0264 16.4033 12.5071 17.2139 12.6777L30.4238 15.46C31.2345 15.6307 31.7537 16.4267 31.583 17.2373L28.8008 30.4473C28.6301 31.2579 27.8341 31.7772 27.0234 31.6064C26.213 31.4356 25.6945 30.6396 25.8652 29.8291L27.9004 20.1621L15.3857 28.3232L13.7471 25.8105L26.2617 17.6494L16.5957 15.6143C15.7851 15.4435 15.2668 14.6476 15.4375 13.8369Z"
    //       fill="currentColor"
    //     />
    //   </svg>
    // </button>
    //       </div>
    //     </div>

    //     <div className="projects-inverse">
    //       <h2>This Port folio</h2>
    //       <div className="project-card">
    //         <img src="" alt="" />
    //         <p>Online Store, Tech Used: React</p>
    //       </div>
    //     </div>

    //     <div className="projects">
    //       <h2>This Port folio</h2>
    //       <div className="project-card">
    //         <img src="" alt="" />
    //         <p>Online Store, Tech Used: React</p>
    //       </div>
    //     </div>
    //   </section>
    // </main>
    <main>
      <section className="all-projects">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`projects ${i % 2 === 1 ? "projects-inverse" : ""}`}
          >
            <h2>{project.title}</h2>
            <div className="project-card">
              <img src={project.image} alt={project.title} />
              <p>
                &#123; {project.title}{" "}
                <span>Tech Used: {project.tech} &#125;</span>
              </p>
              <button>
                <svg
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="check-icon"
                >
                  <path
                    d="M41 22C41 11.5066 32.4934 3 22 3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41V44C9.84974 44 -1.4489e-07 34.1503 0 22C1.4489e-07 9.84974 9.84974 -1.4489e-07 22 0C34.1503 1.4489e-07 44 9.84974 44 22C44 34.1503 34.1503 44 22 44V41C32.4934 41 41 32.4934 41 22ZM15.4375 13.8369C15.6082 13.0264 16.4033 12.5071 17.2139 12.6777L30.4238 15.46C31.2345 15.6307 31.7537 16.4267 31.583 17.2373L28.8008 30.4473C28.6301 31.2579 27.8341 31.7772 27.0234 31.6064C26.213 31.4356 25.6945 30.6396 25.8652 29.8291L27.9004 20.1621L15.3857 28.3232L13.7471 25.8105L26.2617 17.6494L16.5957 15.6143C15.7851 15.4435 15.2668 14.6476 15.4375 13.8369Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default PageProjects;
