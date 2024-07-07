const perguntas = [
  {
    pergunta: "Qual é o procedimento adequado para lidar com a emissão de notas fiscais em operações de importação?",
    respostas: [
      "Emitir a Nota Fiscal de Entrada e a Nota Fiscal de Importação separadamente",
      "Emitir apenas a Nota Fiscal de Importação",
      "Emitir apenas a Nota Fiscal de Entrada",
      "Não é necessário emitir notas fiscais em operações de importação",
    ],
    correta: "Emitir a Nota Fiscal de Entrada e a Nota Fiscal de Importação separadamente"
  },
  {
    pergunta: "Quais são as principais informações que devem constar em uma Nota Fiscal Eletrônica (NF-e)?",
    respostas: [
      "Apenas o valor total da operação",
      "Valor total da operação, dados do comprador e vendedor, descrição dos produtos/serviços",
      "Apenas a descrição dos produtos/serviços",
      "Apenas os dados do comprador",
    ],
    correta: "Valor total da operação, dados do comprador e vendedor, descrição dos produtos/serviços"
  },
  {
    pergunta: "Como o cancelamento de uma NF-e deve ser realizado corretamente?",
    respostas: [
      "Apenas entrando em contato com o cliente para informar o cancelamento",
      "Através do sistema da SEFAZ (Secretaria da Fazenda)",
      "Solicitando o cancelamento para a Receita Federal",
      "Cancelando diretamente no sistema de emissão de notas fiscais da empresa",
    ],
    correta: "Através do sistema da SEFAZ (Secretaria da Fazenda)"
  },
  {
    pergunta: "O que é o CTe (Conhecimento de Transporte Eletrônico) e em quais situações deve ser emitido?",
    respostas: [
      "Documento fiscal utilizado apenas para transporte de produtos perigosos",
      "Documento fiscal utilizado apenas para transporte internacional",
      "Documento fiscal utilizado para registrar operações de transporte de cargas",
      "Documento fiscal utilizado para registrar operações de transporte de passageiros",
    ],
    correta: "Documento fiscal utilizado para registrar operações de transporte de cargas"
  },
  {
    pergunta: "Qual a importância da correta classificação fiscal dos produtos/serviços na emissão de notas fiscais?",
    respostas: [
      "Não é importante, pois a classificação fiscal não afeta a tributação",
      "É importante apenas para fins estatísticos",
      "É importante para determinar os impostos incidentes sobre a operação",
      "É importante apenas para controle interno da empresa",
    ],
    correta: "É importante para determinar os impostos incidentes sobre a operação"
  },
  {
    pergunta: "O que é o DANFE (Documento Auxiliar da Nota Fiscal Eletrônica) e qual sua finalidade?",
    respostas: [
      "Documento fiscal utilizado apenas em operações de importação",
      "Documento fiscal que substitui a NF-e em transações internacionais",
      "Documento fiscal utilizado para acompanhar a mercadoria durante o transporte",
      "Documento fiscal utilizado apenas para operações de venda presencial",
    ],
    correta: "Documento fiscal utilizado para acompanhar a mercadoria durante o transporte"
  },
  {
    pergunta: "Quais são as penalidades para empresas que emitem notas fiscais de forma irregular?",
    respostas: [
      "Apenas advertência por parte da Receita Federal",
      "Multa e possibilidade de cassação da inscrição estadual",
      "Suspensão temporária das atividades da empresa",
      "Perda do direito de operar no mercado internacional",
    ],
    correta: "Multa e possibilidade de cassação da inscrição estadual"
  },
  {
    pergunta: "O que é o Manifesto Eletrônico de Documentos Fiscais (MDF-e) e quando deve ser utilizado?",
    respostas: [
      "Documento fiscal utilizado apenas em operações de exportação",
      "Documento fiscal utilizado para registro de todas as operações da empresa",
      "Documento fiscal utilizado apenas em operações de transporte de passageiros",
      "Documento fiscal utilizado para registro das operações de transporte de cargas",
    ],
    correta: "Documento fiscal utilizado para registro das operações de transporte de cargas"
  },
  {
    pergunta: "Como o processo de emissão de notas fiscais é afetado por operações de venda interestaduais?",
    respostas: [
      "Não é afetado, pois o processo é o mesmo para operações dentro e fora do estado",
      "O processo é mais simples em operações interestaduais",
      "O processo é mais complexo em operações interestaduais devido à necessidade de cálculo de diferenças de alíquotas",
      "Operações interestaduais não exigem emissão de notas fiscais",
    ],
    correta: "O processo é mais complexo em operações interestaduais devido à necessidade de cálculo de diferenças de alíquotas"
  },
  {
    pergunta: "O que é o Bloco K do SPED Fiscal e qual sua finalidade?",
    respostas: [
      "Um relatório interno utilizado pela contabilidade da empresa",
      "Um documento fiscal obrigatório apenas para empresas do setor de serviços",
      "Um componente do SPED Fiscal que visa controlar a produção e estoque das empresas",
      "Um tipo de nota fiscal utilizado em operações de exportação",
    ],
    correta: "Um componente do SPED Fiscal que visa controlar a produção e estoque das empresas"
  },
  {
    pergunta: "Quais são os principais benefícios da utilização de notas fiscais eletrônicas em comparação com as notas fiscais em papel?",
    respostas: [
      "Redução de custos e agilidade nos processos fiscais",
      "Maior segurança, mas sem impacto nos custos",
      "Aumento da burocracia e custos operacionais",
      "Não há benefícios significativos em utilizar notas fiscais eletrônicas",
    ],
    correta: "Redução de custos e agilidade nos processos fiscais"
  }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas) {
const quizItem = template.content.cloneNode(true)
quizItem.querySelector('h3').textContent = item.pergunta

for(let resposta of item.respostas) {
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = resposta
  dt.querySelector("input").onchange = (event) => {
    const estaCorreta = event.target.value == item.correta
    corretas.delete(item)
    if(estaCorreta) {
      corretas.add(item)
    }
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }
  quizItem.querySelector('dl').appendChild(dt)
}

quizItem.querySelector('dl dt').remove()

quiz.appendChild(quizItem)
}

