const perguntas = [
    {
      pergunta: "Qual é a importância do demonstrativo financeiro na tomada de decisões estratégicas?",
      respostas: [
        "Proporcionar uma visão clara do patrimônio líquido",
        "Fornecer dados para o cálculo de impostos",
        "Ajudar na identificação de áreas de redução de custos",
        "Facilitar a obtenção de crédito junto a instituições financeiras",
      ],
      correta: "Ajudar na identificação de áreas de redução de custos"
    },
    {
      pergunta: "Qual a melhor prática para otimizar o fluxo de caixa de uma empresa??",
      respostas: [
        "Aumentar as contas a pagar de longo prazo",
        "Manter um saldo mínimo de caixa elevado",
        "Antecipar recebíveis sempre que possível",
        "Reduzir os prazos de pagamento aos fornecedores",
      ],
      correta: "Antecipar recebíveis sempre que possível"
    },
    {
      pergunta: "No DRE Gerencial, como são tratados os impostos sobre vendas?",
      respostas: [
        "São deduzidos diretamente da receita bruta",
        "São considerados despesas operacionais",
        "Não são considerados no DRE Gerencial",
        "São adicionados às despesas financeiras",
      ],
      correta: "São deduzidos diretamente da receita bruta"
    },
    {
      pergunta: "Por que é crucial realizar a conciliação bancária regularmente?",
      respostas: [
        "Para garantir que todas as despesas recorrentes foram compensadas",
        "Para detectar erros e fraudes",
        "Para verificar a solvência da empresa",
        "Para calcular o saldo de caixa disponível",
      ],
      correta: "Para detectar erros e fraudes"
    },
    {
      pergunta: "No DRE Gerencial, como são classificados os custos variáveis?",
      respostas: [
        "Como despesas financeiras",
        "Como custos que variam diretamente com o volume de produção",
        "Como despesas fixas da empresa",
        "Como custos indiretos de fabricação",
      ],
      correta: "Como custos que variam diretamente com o volume de produção"
    },
    {
      pergunta: "Qual é a função principal do extrato no fluxo de caixa?",
      respostas: [
        "Estimar os lucros futuros da empresa",
        "Planejar as entradas e saídas de caixa para evitar déficits financeiros",
        "Calcular os impostos devidos pela empresa",
        "Avaliar a estrutura de capital da empresa",
      ],
      correta: "Planejar as entradas e saídas de caixa para evitar déficits financeiros"
    },
    {
      pergunta: "Há alguma forma de enviar os boletos de forma automática para o cliente (pagador) através do vhsys?",
      respostas: [
        "Sim, através do aplicativo e-mail marketing",
        "Não é possível",
        "Sim, através do aplicativo backup de boletos",
        "Sim, através do aplicativo cobranças",
      ],
      correta: "Sim, através do aplicativo cobranças"
    },
    {
      pergunta: "Como o vhsys pode melhorar a análise de demonstrativos financeiros?",
      respostas: [
        "Substituindo a contabilidade tradicional",
        "Gerando relatórios personalizados e integrando dados financeiros em tempo real",
        "Aumentando os lucros diretamente",
        "Reduzindo os impostos devidos",
      ],
      correta: "Gerando relatórios personalizados e integrando dados financeiros em tempo real"
    },
    {
      pergunta: "Qual é a principal diferença entre o DRE Gerencial e o DRE Contábil?",
      respostas: [
        "O DRE Contábil é focado em indicadores de desempenho",
        "O DRE Gerencial é utilizado para tomada de decisões internas, enquanto o DRE Contábil é voltado para fins legais e fiscais",
        "O DRE Gerencial inclui apenas receitas, enquanto o DRE Contábil inclui despesas",
        "O DRE Contábil é mais detalhado que o DRE Gerencial",
      ],
      correta: "O DRE Gerencial é utilizado para tomada de decisões internas, enquanto o DRE Contábil é voltado para fins legais e fiscais"
    },
    {
      pergunta: "Qual a função de centros de custos na otimização de processos internos?",
      respostas: [
        "Aumentar os custos operacionais",
        "Reduzir o número de transações financeiras",
        "Permitir uma melhor análise e controle de custos, identificando áreas de melhoria e eficiência",
        "Facilitar a apuração de impostos devidos",
      ],
      correta: "Permitir uma melhor análise e controle de custos, identificando áreas de melhoria e eficiência"
    },
    {
      pergunta: "Como a análise de margem de contribuição é realizada no DRE Gerencial?",
      respostas: [
        "Calculando o lucro líquido antes dos impostos",
        "Subtraindo os custos variáveis das receitas totais para identificar o valor que contribui para cobrir os custos fixos e gerar lucro",
        "Avaliando a estrutura de capital da empresa",
        "Somando todas as despesas operacionais",
      ],
      correta: "Subtraindo os custos variáveis das receitas totais para identificar o valor que contribui para cobrir os custos fixos e gerar lucro"
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
  
  