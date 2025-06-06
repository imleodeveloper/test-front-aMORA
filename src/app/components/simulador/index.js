"use client";
import { useState } from "react"


export function Simulator(){

    // Armazenar os valores dos inputs
    const [valorImovel, setValorImovel] = useState("");
    const [duracaoContrato, setDuracaoContrato] = useState("");
    const [percentualEntrada, setPercentualEntrada] = useState("");


    return(
        <section className="simulator">
            <div className="container">
                <div className="input-simulator">
                    <div className="title-simulator">
                        <h2>Calculadora aMORA</h2>
                        <h3>Preencha o formulário e descubra o valor da sua casa própria.</h3>
                    </div>
                    <div className="inputs">
                        <div className="input-group">
                            <label>Qual o valor do imóvel desejado?</label>
                            <input 
                                type="number" 
                                placeholder="De R$ 200.000 até R$6.000.000" 
                                id="valor_imovel"
                                value={valorImovel}
                                onChange={(e) => setValorImovel(e.target.value)}
                            />
                            <span>Atendemos imóveis somente na cidade de São Paulo.</span>
                        </div>
                        <div className="input-group">
                            <label>Qual a duração do contrato?</label>
                            <input 
                                type="number" 
                                placeholder="Mínimo de 1 à 5 anos" 
                                id="duracao_contrato"
                                value={duracaoContrato}
                                onChange={(e) => setDuracaoContrato(e.target.value)}
                                min={1}
                                max={5} 
                            />
                        </div>
                        <div className="input-group">
                            <label>Qual a porcentagem da entrada?</label>
                            <input 
                                type="number" 
                                placeholder="Mínimo de 5% à 20%" 
                                id="percentual_entrada"                             
                                value={percentualEntrada}
                                onChange={(e) => setPercentualEntrada(e.target.value)}
                                min={5}
                                max={20} 
                            />
                            <span>Esta ferramenta destina-se apenas pra fins informativos e não como um oferta de serviço da aMORA. Nada nesta pagina deve ser interpretado para constituir taxas, termos, garantia ou qualquer outro serviço. A qualificação fica a critério da aMORA.</span>
                        </div>
                        <button id="calcular_valor">Simular</button>
                    </div>
                </div>
                <div className="result-simulator">
                    <h2>Investimento</h2>
                    <span>aMORA (36 meses)</span>
                    <h3>R$ 0/mês</h3>
                    <div className="graph-result">
                        <div className="bar">
                            <span></span>
                        </div>
                        <div className="results">
                            <div className="custo-moradia">
                                <div>
                                    <span></span>
                                    <p>Custo de moradia</p>
                                </div>
                                <span>
                                    R$ 0/mês
                                </span>
                            </div>
                            <div className="reserva-compra">
                                <div>
                                    <span></span>
                                    <p>Reserva de compra</p>
                                </div>
                                <span>
                                    R$ 0/mês
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="total">
                        <span>Economia total</span>
                        <h3>R$ 0</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}