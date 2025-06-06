/*
  Este componente realiza uma simulação de financiamento.
  Atualmente os cálculos são feitos no front-end.
  Está pronto para ser integrado a uma API no trecho da função handleSimulate.
  Ver TODO para detalhes da chamada e payload esperados.
*/
"use client";
import { useState } from "react"


export function Simulator(){

    // Armazenar os valores dos inputs
    const [valorImovel, setValorImovel] = useState("");
    const [duracaoContrato, setDuracaoContrato] = useState("");
    const [percentualEntrada, setPercentualEntrada] = useState("");
    const [errorImovel, setErrorImovel] = useState("");
    const [errorContrato, setErrorContrato] = useState("");
    const [errorPercental, setErrorPercental] = useState("");


    // Formata input com R$
    const formatarMoeda = (valor) => {
        const numero = Number(valor.replace(/\D/g, ""));
        return numero.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2
        });
    };


    // Check input valor imovel
    const valorImovelChange = (e) => {
        const rawValue = e.target.value;

        // Remove tudo que não é número
        const onlyNumbers = rawValue.replace(/\D/g, "");

        // Permite o campo ficar vazio para o usuário apagar
        if (!onlyNumbers) {
            setValorImovel("");
            setErrorImovel("");
            return;
        }

        // Limita a quantidade de dígitos (ex: até 9 para R$ 9.999.999,99)
        const numeric = parseInt(onlyNumbers, 10);

        const formatted = (numeric / 100).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
        });

        setValorImovel(formatted);

        // Validação
        if (numeric < 20000000 || numeric > 600000000) {
            setErrorImovel("O valor do imóvel deve estar entre R$ 200.000,00 e R$ 6.000.000,00");
        } else {
            setErrorImovel("");
        }
    };

    // Check input contratual
    const duracaoContratoChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setDuracaoContrato(value);

        if(value < 1 || value > 5){
            setErrorContrato("A duração do contrato deve estar entre 1 e 5 anos.");
        } else{
            setErrorContrato("");
        }
    };

    // Check input percentual
    const percentualChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setPercentualEntrada(value);

        if(value < 5 || value > 20){
            setErrorPercental("A entrada deve ser entre 5% e 20%");
        } else{
            setErrorPercental("");
        }
    }

    // State para armazenar os resultados da simulação
    const [result, setResult] = useState(null);

    // Função para lidar com o clique no botão "Simular"
    const handleSimulate = () => {
        if (errorImovel || errorContrato || errorPercental || !valorImovel || !duracaoContrato || !percentualEntrada) {
            alert("Corrija os erros antes de simular.");
            return;
        }

        //Converte os valores recebidos de strings para numbers
        const imovel = parseFloat(valorImovel.replace(/\D/g, "")) / 100;
        const contrato = parseFloat(duracaoContrato);
        const entrada = parseFloat(percentualEntrada);


        // TODO: Integrar chamada à API de simulação aqui (substituir cálculo manual)
        // A API deve receber: valorImovel, duracaoContrato, percentualEntrada
        // E retornar: valorEntrada, valorFinanciar, totalGuardar, valorMensalAGuardar

        // Cálculo mock para testes locais (remover após integração)
        const valorEntrada = imovel * (entrada / 100);
        const valorFinanciar = imovel - valorEntrada;
        const totalGuardar = imovel * 0.15;
        const valorMensalAGuardar = totalGuardar / (contrato * 12);
        
        setResult({
            valorEntrada,
            valorFinanciar,
            totalGuardar,
            valorMensalAGuardar,
            duracaoContrato,
        });

        console.log({ valorEntrada, valorFinanciar, totalGuardar, valorMensalAGuardar });
    } 


    return(
        <section className="simulator"  id="container-calculator">
            <div className="container">
                <div className="input-simulator">
                    <div className="title-simulator">
                        <h2>Calculadora aMORA</h2>
                        <h3>Preencha o formulário e descubra o valor da sua casa própria.</h3>
                    </div>

                    {/* Inputs do formulário */}
                    <div className="inputs">
                        <div className="input-group">
                            <label>Qual o valor do imóvel desejado?</label>
                            <input 
                                type="text" 
                                placeholder="De R$ 200.000 até R$6.000.000" 
                                id="valor_imovel"
                                value={valorImovel}
                                onChange={valorImovelChange}
                            />
                            {errorImovel && <p style={{color: "red"}}>{errorImovel}</p>}
                            <span>Atendemos imóveis somente na cidade de São Paulo.</span>
                        </div>
                        <div className="input-group">
                            <label>Qual a duração do contrato?</label>
                            <input 
                                type="number" 
                                placeholder="Mínimo de 1 à 5 anos" 
                                id="duracao_contrato"
                                value={duracaoContrato}
                                onChange={duracaoContratoChange}
                                min={1}
                                max={5} 
                            />
                            {errorContrato && <p style={{color: "red"}}>{errorContrato}</p>}
                        </div>
                        <div className="input-group">
                            <label>Qual a porcentagem da entrada?</label>
                            <input 
                                type="number" 
                                placeholder="Mínimo de 5% à 20%" 
                                id="percentual_entrada"                             
                                value={percentualEntrada}
                                onChange={percentualChange}
                                min={5}
                                max={20} 
                            />
                            {errorPercental && <p style={{color: "red"}}>{errorPercental}</p>}
                            <span>Esta ferramenta destina-se apenas pra fins informativos e não como um oferta de serviço da aMORA. Nada nesta pagina deve ser interpretado para constituir taxas, termos, garantia ou qualquer outro serviço. A qualificação fica a critério da aMORA.</span>
                        </div>
                        <button id="calcular_valor" onClick={handleSimulate}>Simular</button>
                    </div>
                </div>
                
                { !result ? (
                    <div className="result-simulator">
                        <h2>Valor da entrada</h2>
                        <h3>R$ 0,00</h3>
                        <span>Duração do contrato: (0 anos)</span>
                        <div className="graph-result">
                            <div className="results">
                                <div className="custo-moradia">
                                    <div>
                                        <span></span>
                                        <p>Custo de financiamento</p>
                                    </div>
                                    <span>R$ 0,00</span>
                                </div>
                                <div className="reserva-compra">
                                    <div>
                                        <span></span>
                                        <p>Valor mensal a guardar</p>
                                    </div>
                                    <span>R$ 0,00/mês</span>
                                </div>
                            </div>
                        </div>
                        <div className="total">
                            <span>Economia total</span>
                            <h3>R$ 0,00</h3>
                        </div>
                    </div>
                )
                : (
                    <div className="result-simulator">
                        <h2>Valor da entrada</h2>
                        <h3>R$ {result.valorEntrada.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h3>
                        <span>Duração do contrato: ( {duracaoContrato} anos)</span>
                        <div className="graph-result">
                            {/*<div className="bar">
                                <span></span>
                            </div>*/}
                            <div className="results">
                                <div className="custo-moradia">
                                    <div>
                                        <span></span>
                                        <p>Custo de financiamento</p>
                                    </div>
                                    <span>
                                        R$ {result.valorFinanciar.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                    </span>
                                </div>
                                <div className="reserva-compra">
                                    <div>
                                        <span></span>
                                        <p>Valor mensal a guardar</p>
                                    </div>
                                    <span>
                                        R$ {result.valorMensalAGuardar.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}/mês
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="total">
                            <span>Economia total</span>
                            <h3>R$ {result.totalGuardar.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h3>
                        </div>
                    </div>
                )}
                
            </div>
        </section>
    )
}