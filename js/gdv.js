const perguntas = [
    {
      pergunta: "Para que o envio de um pedido possa ser feito para o whatsapp do cliente o campo Celular deve estar preenchido obrigatoriamente. Está informação é verdadeira ou falsa?",
      respostas: [
        "Verdadeira",
        "Falsa",
      ],
      correta: "Falsa"
    },
    {
      pergunta: "É necessário realizar alguma configuração adicional para que o estoque seja debitado da quantidade do produto depois da criação do pedido?",
      respostas: [
        "Apenas a emissão da nota fiscal debita o estoque do produto",
        "É necessário realizar a instalação e configuração do aplicativo Automação",
        "Não existe lançamento de estoque automático no vhsys",
        "A feature-flag de pedidos fará a liberação da funcionalidade de lançamento de estoque automático",
      ],
      correta: "É necessário realizar a instalação e configuração do aplicativo Automação"
    },
    {
      pergunta: "É correto dizer que a importação de mercadoria via receita pode ser feita apenas se o usuário fizer a instalação do certificado digital A3, o certificado digital A1 possuí muitas limitações, esta é uma delas.",
      respostas: [
        "Sim, está correto",
        "Não, está incorreto",
      ],
      correta: "Não, está incorreto"
    },
    {
      pergunta: "Devo realizar o orçamento dos serviços que irei prestar na aba de orçamentos do módulo de vendas?",
      respostas: [
        "Não, os orçamentos devem ser feitos pela tela de ordem de compra no módulo de compras",
        "Sim, assim terá o controle ideal do status de seus orçamentos",
        "Não, os orçamentos de prestação de serviço devem ser feitos na aba de Ordem de Serviço, alterando o tipo de OS para Orçamento",
        "Não, os orçamentos devem ser feitos apenas na aba de emissão de notas fiscais",
      ],
      correta: "Não, os orçamentos de prestação de serviço devem ser feitos na aba de Ordem de Serviço, alterando o tipo de OS para Orçamento"
    },
    {
      pergunta: "Qual a data de geração dos serviços recorrentes?",
      respostas: [
        "Todo quinto dia útil",
        "Primeiro dia do mês, independentemente de ser dia útil ou não",
        "É um parâmetro definido no cadastro do serviço recorrente e sempre será igual a data de vencimeento",
        "A data é definida no campo de Gerar Fatura dentro do serviço recorrente",
      ],
      correta: "A data é definida no campo de Gerar Fatura dentro do serviço recorrente"
    },
    {
      pergunta: "Qual o relatório ideal para a visualização das entradas e saídas de um produto vinculado a um fornecedor?",
      respostas: [
        "Relatório de entrada de mercadoria",
        "Relatório de pedidos",
        "Relatório de estoque movimentações",
        "Relatório de estoque saldo de fornecedores",
      ],
      correta: "Relatório de estoque movimentações"
    },
    {
      pergunta: "O vhsys integra com todos os modelos de balança que existem no mercado, correto?",
      respostas: [
        "Não integramos com balanças",
        "O sistema apenas fará a leitura da etiqueta gerada pela balança ao pesar o produto para adição do produto no PDV",
        "Integramos apenas com balanças da marca Stone",
        "As balanças são obrigatórias nos estados de MT e RS, por isso fazemos a integração com todos os modelos do mercado",
      ],
      correta: "O sistema apenas fará a leitura da etiqueta gerada pela balança ao pesar o produto para adição do produto no PDV"
    },
    {
      pergunta: "Como devemos controlar o nível de estoque mínimo para evitar a falta de produtos?",
      respostas: [
        "Monitorando apenas vendas diárias pelo widget na tela inicial do sistema",
        "Usando um sistema de reabastecimento automático baseado em vendas históricas",
        "Confiando na intuição dos funcionários",
        "Preenchendo o campo de estoque mínimo no cadastro do produto com base na demanda média e tempo de reposição",
      ],
      correta: "Preenchendo o campo de estoque mínimo no cadastro do produto com base na demanda média e tempo de reposição"
    },
    {
      pergunta: "Como o vhsys facilita o monitoramento do desempenho da equipe de vendas?",
      respostas: [
        "Não oferece funcionalidades para monitorar desempenho",
        "Com o controle de comissionamento e os relatórios de vendas e vendedores",
        "Notificando os vendedores diariamente com estratégia de vendas via SMS",
        "Apenas registrando as vendas.",
      ],
      correta: "Com o controle de comissionamento e os relatórios de vendas e vendedores"
    },
    {
      pergunta: "Quais são as funcionalidades do vhsys para gestão de estoque em múltiplos locais?",
      respostas: [
        "Apenas registrando estoques separados manualmente",
        "Cadastro de locais e lotes, além do controle de validade e a transferência entre locais, com o recurso de locais de estoque",
        "Integração direta com sistemas de gestão de armazéns",
        "Utilizando planilhas offline para cada local",
      ],
      correta: "Cadastro de locais e lotes, além do controle de validade e a transferência entre locais, com o recurso de locais de estoque"
    },
    {
      pergunta: "Se eu fizer a exclusão de uma ordem de serviço através do aplicativo mobile, quando realizar a sincronização, está OS ainda estará disponível no vhsys web (desktop)?",
      respostas: [
        "Sim",
        "Não",
        "O registro de OS no aplicativo mobile não existe",
        "Depende das permissões do meu usuário",
      ],
      correta: "Não"
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
  
  