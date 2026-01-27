import { useParams } from "react-router-dom";
import propostasData from "../data/website-content.json";
import { Helmet } from "react-helmet-async";

function PageProposals() {
  const { id } = useParams();
  const proposta = propostasData.propostas.find((item) => item.slug === id);

  if (!proposta) {
    return <p>Proposta não encontrada. =/</p>;
  }

  return (
    <>
      <Helmet>
        <title>Proposta {proposta.project}</title>

        <meta
          name="description"
          content={`Proposta comercial para o projeto ${proposta.project}`}
        />

        {/* Open Graph (WhatsApp / Facebook) */}
        <meta property="og:title" content={`Proposta ${proposta.project}`} />
        <meta
          property="og:description"
          content={`Confira a proposta completa do projeto ${proposta.project}`}
        />
        <meta
          property="og:url"
          content={`https://lubastos.com/propostas/${proposta.slug}`}
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="single-proposta">
        <div className="proposta-head">
          <h2>Proposta</h2>
          <p dangerouslySetInnerHTML={{ __html: proposta.title }} />
        </div>

        <div className="proposta-bar">
          <p>
            {" "}
            <strong>Projeto: </strong> {proposta.project}
          </p>
          <div class="v-divider"></div>
          <p>
            <strong>Data: </strong> {proposta.date}
          </p>
        </div>

        <div className="etapas">
          <h2>Entenda nossas etapas!</h2>
          <svg
            class="arrow-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 12H19M19 12L13 6M19 12L13 18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="proposta-scope">
          <div className="proposta-first">
            <div className="first-head">
              <h2 dangerouslySetInnerHTML={{ __html: proposta.fase1 }} />
              <p>01</p>
            </div>
            <div className="first-content">
              <div className="proposta-includes">
                <ul>
                  {proposta.content1.map((item, index) => (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
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
                    d="M0 59.758H26.9982L2.19563 48.8821L8.24245 34.549L32.7573 44.2608L14.1742 25.4525L25.0992 14.6562L26.3564 15.0236L44.2578 32.7562L35.0503 9.85786L35.0193 8.26874L49.1316 2.4036L59.3085 26.1209V1.10663C59.3085 0.960555 59.8928 0.433799 59.7511 0H75.2445L75.6916 26.9973L85.5055 3.39957C85.6692 2.84625 86.0057 2.70903 86.5413 2.62493C88.4005 2.32835 97.9754 7.48524 100.512 8.24661L91.1849 32.3092L109.197 14.6518C109.746 14.4482 110.042 14.7447 110.454 15.0192C111.255 15.5592 119.901 24.1688 120.188 24.7929C120.414 25.2799 120.534 25.6251 120.188 26.1032L101.804 44.699L127.453 34.9916L132.592 49.1255L108.44 59.7536H134.336L135 60.4176V75.0251L134.336 75.6891H107.997L132.751 86.5783L127.435 99.7693L126.368 100.491L102.685 91.1863L119.971 108.645C120.689 109.486 120.463 110.07 119.971 110.906C119.48 111.743 112.185 118.91 111.105 119.742C110.614 120.122 110.171 120.583 109.538 120.733L90.7334 102.248L100.437 126.771C100.308 127.324 99.082 127.736 98.5553 127.997C97.2494 128.644 87.1522 132.796 86.5059 132.765C85.7489 132.729 85.3505 132.211 85.0761 131.578L76.1165 109.331C75.4082 109.304 75.2356 111.725 75.2356 112.203V135H59.9636L59.2775 133.473L59.2952 108.441L49.0607 132.729C47.8434 133.491 37.3611 127.869 35.2141 127.431L34.5191 126.395L44.2445 102.244L25.8916 120.419L24.776 120.64C22.6822 117.604 16.7018 113.735 15.0108 110.898C14.6655 110.318 14.3822 109.91 14.6523 109.198L32.7396 90.7348L8.21589 100.411L2.1912 86.503L3.20491 85.3212L26.0952 75.6846H0V59.7447V59.758Z"
                    fill="currentColor"
                  />
                </svg>
                <div>
                  <h2>
                    {" "}
                    <span>Custo por etapa:</span>
                  </h2>
                  <p>{proposta.custo1}</p>
                </div>
                <div>
                  <h2>
                    <span>Duração da etapa:</span>
                  </h2>
                  <p>{proposta.duracao1}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="proposta-second">
            <div className="second-head">
              <h2 dangerouslySetInnerHTML={{ __html: proposta.fase2 }} />
              <p>02</p>
            </div>
            <div className="second-content">
              <div className="proposta-includes">
                <ul>
                  {proposta.content2.map((item, index) => (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
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
                    d="M0 59.758H26.9982L2.19563 48.8821L8.24245 34.549L32.7573 44.2608L14.1742 25.4525L25.0992 14.6562L26.3564 15.0236L44.2578 32.7562L35.0503 9.85786L35.0193 8.26874L49.1316 2.4036L59.3085 26.1209V1.10663C59.3085 0.960555 59.8928 0.433799 59.7511 0H75.2445L75.6916 26.9973L85.5055 3.39957C85.6692 2.84625 86.0057 2.70903 86.5413 2.62493C88.4005 2.32835 97.9754 7.48524 100.512 8.24661L91.1849 32.3092L109.197 14.6518C109.746 14.4482 110.042 14.7447 110.454 15.0192C111.255 15.5592 119.901 24.1688 120.188 24.7929C120.414 25.2799 120.534 25.6251 120.188 26.1032L101.804 44.699L127.453 34.9916L132.592 49.1255L108.44 59.7536H134.336L135 60.4176V75.0251L134.336 75.6891H107.997L132.751 86.5783L127.435 99.7693L126.368 100.491L102.685 91.1863L119.971 108.645C120.689 109.486 120.463 110.07 119.971 110.906C119.48 111.743 112.185 118.91 111.105 119.742C110.614 120.122 110.171 120.583 109.538 120.733L90.7334 102.248L100.437 126.771C100.308 127.324 99.082 127.736 98.5553 127.997C97.2494 128.644 87.1522 132.796 86.5059 132.765C85.7489 132.729 85.3505 132.211 85.0761 131.578L76.1165 109.331C75.4082 109.304 75.2356 111.725 75.2356 112.203V135H59.9636L59.2775 133.473L59.2952 108.441L49.0607 132.729C47.8434 133.491 37.3611 127.869 35.2141 127.431L34.5191 126.395L44.2445 102.244L25.8916 120.419L24.776 120.64C22.6822 117.604 16.7018 113.735 15.0108 110.898C14.6655 110.318 14.3822 109.91 14.6523 109.198L32.7396 90.7348L8.21589 100.411L2.1912 86.503L3.20491 85.3212L26.0952 75.6846H0V59.7447V59.758Z"
                    fill="currentColor"
                  />
                </svg>
                <div>
                  <h2>
                    <span>Custo por etapa:</span>
                  </h2>
                  <p>{proposta.custo2}</p>
                </div>
                <div>
                  <h2>
                    <span>Duração da etapa:</span>
                  </h2>
                  <p>{proposta.duracao2}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="not-included">
            <div className="ni-head">
              <h2>
                O que <strong>não</strong> está incluso
              </h2>
              <p>xx</p>
            </div>
            <div className="ni-content">
              <p dangerouslySetInnerHTML={{ __html: proposta.notincluded }} />
            </div>
          </div>
        </div>

        <div className="proposta-fprice">
          <div className="fprice-text">
            <h2>
              {" "}
              <strong>Investimento</strong> Total
            </h2>
            <div>
              <p>{proposta.totalsd}</p>
              <p>{proposta.total}</p>
            </div>
          </div>
          <p>{proposta.payment}</p>
        </div>

        <div className="cta-proposta">
          <a
            href="https://wa.me/5585997878686?text=Quero%20dar%20in%C3%ADcio%20ao%20projeto%20do%20meu%20site!%20=
)"
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
    </>
  );
}

export default PageProposals;
