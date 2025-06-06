
# Simulador de Financiamento — Front-end

Este projeto possui o front-end pronto para simular financiamento imobiliário, mas a lógica atual está toda no front-end.

## O que foi feito até agora se encontra no componente principal: 
## src/app/components/simulador/index.js

- Interface para entrada dos dados do usuário (valor do imóvel, duração do contrato, percentual de entrada).
- Validação e formatação básica dos dados no front-end.
- Cálculo simulado dos valores da entrada, financiamento, valor mensal a guardar e economia total, realizados no front-end.
- Layout simples e funcional focado na lógica da simulação.

## O que falta para o back-end

- Criar uma API que receba os dados do simulador (valor do imóvel, duração do contrato, percentual de entrada).
- Implementar as validações dos dados recebidos.
- Implementar a lógica de cálculo dos valores da simulação.
- Retornar os resultados da simulação para o front-end.
- Tratar erros e retornar respostas adequadas para dados inválidos.
- Integrar o front-end para consumir essa API no lugar do cálculo local.

## Tecnologias utilizadas

- Next.js (React)
- JavaScript

## Limitações

- Esse projeto ainda não possuí back-end
- Esse projeto não foi realizado com TailwindCSS

## Como rodar localmente

1. Instale dependências: `npm install`
2. Rode o projeto: `npm run dev`
3. Acesse: `http://localhost:3000`

---

Este README visa orientar o desenvolvimento e a integração do back-end com o front-end já existente.