
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import propostasData from "../data/website-content.json";

gsap.registerPlugin(ScrollTrigger);

function PageProposals() {
  const { id } = useParams();
  const proposta = propostasData.propostas.find((item) => item.slug === id);

  useEffect(() => {
    if (!proposta) return;

    const ctx = gsap.context(() => {
      // animação padrão reaproveitável
      gsap.utils.toArray(".animate").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });

      // CTA com microinteração
      gsap.to(".cta-proposta a", {
        scrollTrigger: {
          trigger: ".cta-proposta",
          start: "top 85%",
        },
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      });
    });

    return () => ctx.revert();
  }, [proposta]);

  if (!proposta) {
    return <p>Proposta não encontrada. =/</p>;
  }

  return (
    <section className="single-proposta">
      <div className="proposta-head animate">
        <h2>Proposta</h2>
        <p dangerouslySetInnerHTML={{ __html: proposta.title }} />
      </div>

      <div className="proposta-bar ">
        <p>
          <strong>Projeto:</strong> {proposta.project}
        </p>
        <div className="v-divider" />
        <p>
          <strong>Data:</strong> {proposta.date}
        </p>
      </div>

      <div className="etapas animate">
        <h2>Entenda nossas etapas!</h2>
        <svg
          className="arrow-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 12H19M19 12L13 6M19 12L13 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="proposta-scope">
        {/* ETAPA 01 */}
        <div className="proposta-first animate">
          <div className="first-head">
            <h2 dangerouslySetInnerHTML={{ __html: proposta.fase1 }} />
            <p>01</p>
          </div>

          <div className="first-content">
            <div className="proposta-includes">
              <ul>
                {proposta.content1.map((item, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>

            <div className="proposta-price">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 135 135"
                className="icon"
              >
                <path
                  d="M0 59.758H26.9982L2.19563 48.8821L8.24245 34.549L32.7573 44.2608L14.1742 25.4525L25.0992 14.6562L26.3564 15.0236L44.2578 32.7562L35.0503 9.85786L35.0193 8.26874L49.1316 2.4036L59.3085 26.1209V1.10663H75.2445L75.6916 26.9973L85.5055 3.39957L91.1849 32.3092L109.197 14.6518L101.804 44.699L132.592 49.1255L108.44 59.7536H134.336V75.6891H107.997L132.751 86.5783L127.435 99.7693L102.685 91.1863L119.971 108.645L109.538 120.733L90.7334 102.248L100.437 126.771L85.0761 131.578L76.1165 109.331V135H59.9636L59.2952 108.441L49.0607 132.729L34.5191 126.395L44.2445 102.244L25.8916 120.419L15.0108 110.898L32.7396 90.7348L8.21589 100.411L2.1912 86.503L26.0952 75.6846H0V59.758Z"
                  fill="currentColor"
                />
              </svg>

              <div>
                <h2><span>Custo por etapa:</span></h2>
                <p>{proposta.custo1}</p>
              </div>

              <div>
                <h2><span>Duração da etapa:</span></h2>
                <p>{proposta.duracao1}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ETAPA 02 */}
        <div className="proposta-second animate">
          <div className="second-head">
            <h2 dangerouslySetInnerHTML={{ __html: proposta.fase2 }} />
            <p>02</p>
          </div>

          <div className="second-content">
            <div className="proposta-includes">
              <ul>
                {proposta.content2.map((item, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>

            <div className="proposta-price">
              <div>
                <h2><span>Custo por etapa:</span></h2>
                <p>{proposta.custo2}</p>
              </div>

              <div>
                <h2><span>Duração da etapa:</span></h2>
                <p>{proposta.duracao2}</p>
              </div>
            </div>
          </div>
        </div>

        {/* NÃO INCLUSO */}
        <div className="not-included animate">
          <div className="ni-head">
            <h2>O que <strong>não</strong> está incluso</h2>
            <p>xx</p>
          </div>
          <div className="ni-content">
            <p dangerouslySetInnerHTML={{ __html: proposta.notincluded }} />
          </div>
        </div>
      </div>

      <div className="proposta-fprice animate">
        <div className="fprice-text">
          <h2><strong>Investimento</strong> Total</h2>
          <div>
            <p>{proposta.totalsd}</p>
            <p>{proposta.total}</p>
          </div>
        </div>
        <p>{proposta.payment}</p>
      </div>

      <div className="cta-proposta">
        <a
          href="https://wa.me/5585997878686?text=Quero%20dar%20in%C3%ADcio%20ao%20projeto%20do%20meu%20site!"
          target="_blank"
          rel="noopener noreferrer"
        >
          {proposta.cta}
          <svg
            className="arrow-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 12H19M19 12L13 6M19 12L13 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default PageProposals;
