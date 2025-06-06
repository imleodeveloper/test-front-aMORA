import { Simulator } from "./components/simulador";


export default function Home() {
  return (
    <div className="main-simulator">
      <article>
        <section className="title">
          <span>
            <ul>
              <li>
                <a href="https://www.amora.com.br/" target="_blank" rel="noopener noreferrer">
                  Home
                </a>
              </li>
              <li>{`>`}</li>
              <li>Simulador</li>
            </ul>
          </span>
          <div>
            <a href="#container-calculator">
              <h1>Calculadora aMORA</h1>
              <p>Descubra quanto custa comprar seu imóvel com a aMORA</p>
            </a>
          </div>
        </section>
        <Simulator />
      </article>
    </div>
  );
}
