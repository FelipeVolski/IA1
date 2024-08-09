const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas =[
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco ",
        alternativas: {
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema 
    },
    {
        enunciado: "Pergunta 3",
        alternativas:["Alternativa 1", "Alternativa 2"],
    },
    
];

let atual = 0;
let perguntaAtual;
let historiafinal = ""/""/

function mostraPerguntas(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativa();
}
function mostraAlternativa(){
    for (const alternativa of perguntaAtual.alternativas)
        const botaoAlternativas = document.creatElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
}
mostraPerguntas();
