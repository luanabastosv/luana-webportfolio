import { useParams } from "react-router-dom";
import projectsData from "../data/website-content.json";

function PageSingleProject() {
  const { id } = useParams(); // pega o número vindo da URL
  const project = projectsData.projects[id]; // pega o projeto correspondente

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <section className="single-project">
      <div className="image">
        <img src={`/${project.image}`} alt={project.title} />
        <button>
          <a href="https://lubastos.com/muvi/#/">Live Site</a>
        </button>
      </div>

      <h2>{project.title}</h2>

      <div className="single-content">
        {/* LEFT COLUMN */}
        <div className="specs">
          <h3>
            &#123; Project <strong>Specifications</strong> &#125;
          </h3>

          <div className="spec-card">
            <div>
              <p>Tech Used (Development):</p>
              <p>
                <strong>{project.tech}</strong>
              </p>
            </div>

            <div>
              <p>Tech Used (UI/UX):</p>
              <p>
                <strong>
                  <strong>{project.uiux}</strong>
                </strong>
              </p>{" "}
              {/* você não tem esse campo no JSON */}
            </div>

            <div>
              <p>By:</p>
              <p>
                <strong>Luana Bastos</strong>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="specs-moreinfo">
          <div>
            <h3>
              &#123; Project <strong>Overview</strong> &#125;
            </h3>
            {project.overview.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>

          <div>
            <h3>
              &#123; What I've <strong>Learned</strong> &#125;
            </h3>
            <div>
              {project.learned.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageSingleProject;
