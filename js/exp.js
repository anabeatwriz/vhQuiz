const perguntas = [
    {
      pergunta: "Qual método HTTP é comumente utilizado para criar um novo recurso por meio de uma API RESTful?",
      respostas: [
        "GET",
        "POST",
        "PUT",
        "DELETE",
      ],
      correta: "POST"
    },
    {
      pergunta: "Qual a integração ideal para consulta de restrições de crédito dentro da Loja de Integrações?",
      respostas: [
        "Assinaturas",
        "Consulta Serasa",
        "Controle de bens",
        "Cobranças",
      ],
      correta: "Consulta Serasa"
    },
    {
      pergunta: "Quais os preenchimentos obrigatórios para que um boleto se torne válido para pagamento na Gerencianet?",
      respostas: [
        "Nome, CPF/CNPJ, endereço e telefone",
        "Alíquota do ICMS para antecipação de crédito",
        "Apenas o e-mail",
        "Apenas o valor do boleto",
      ],
      correta: "Nome, CPF/CNPJ, endereço e telefone"
    },
    {
      pergunta: "Para que um produto seja excluído na Nuvemshop e no vhsys, qual processo devo realizar?",
      respostas: [
        "Excluir em ambas as plataformas",
        "Excluir somente na nuvemshop",
        "Excluir via Integração API no vhsys",
        "Inativar o cadastro no vhsys e excluir na nuvemshop",
      ],
      correta: "Excluir em ambas as plataformas"
    },
    {
      pergunta: "Sobre a integração com a Mercos, é possível realizar a importação de quais dados para o vhsys?",
      respostas: [
        "Clientes, Produtos, Transportadora, Vendedores, Categorias, Condições de Pagamento, Lista de Preço e Pedidos.",
        "Pedidos, NF-e, Vendedores e Estoque",
        "Estoque, Grade de produtos, Lista de Preço, Pedidos, Clientes, Fornecedores, Entrada de Mercadoria e Guias de pagamento",
        "Contas a receber, Produtos, Transportadora e Pedidos.",
      ],
      correta: "Clientes, Produtos, Transportadora, Vendedores, Categorias, Condições de Pagamento, Lista de Preço e Pedidos."
    },
    {
      pergunta: "Qual das opções abaixo traz apenas relatórios disponíveis no MultiEmpresas?",
      respostas: [
        "Financeiro (Contas a receber e contas a pagar) e Clientes e Fornecedores",
        "Faturamento (Simples e detalhado) e Vendas (NF-e, NFC-e, Orçamentos, Pedidos e PDV)",
        "Estoque (Movimentação e saldo em estoque) e Comissão de vendedores e técnicos",
        "Vendas (NF-e, NFC-e, Orçamentos, Pedidos e PDV) e Serviços (Ordem de serviço, NFS-e e Serviços recorrentes",
      ],
      correta: "Faturamento (Simples e detalhado) e Vendas (NF-e, NFC-e, Orçamentos, Pedidos e PDV)"
    },
    {
      pergunta: "Sobre o aplicativo de expedição, qual tipo de documento é possível gerar com esse recurso?",
      respostas: [
        "DARF",
        "Módulo fiscal eletrônico",
        "Romaneio",
        "Documento fiscal de expedição",
      ],
      correta: "Romaneio"
    },
    {
      pergunta: "É possível trabalhar com o Funil de Vendas para prestação de serviços?",
      respostas: [
        "Sim",
        "Não",
        "Apenas se emitir nota fiscal do tipo conjugada",
      ],
      correta: "Sim"
    },
    {
      pergunta: "Não é possível acompanhar a depreciação anual de itens através de um relatório personalizado do aplicativo de Controle de bens?",
      respostas: [
        "Sim, é possível",
        "Não, não é possível",
      ],
      correta: "Sim, é possível"
    },
    {
      pergunta: "Com relação a antecipação de recebimento no vhpay, assinale a alternativa correta",
      respostas: [
        "Na antecipação automática, você escolhe se quer receber todo dia ou em dias específicos da semana ou do mês. É uma solução prática, fácil e sem burocracia pra você continuar focando na única coisa que importa: o seu negócio",
        "Não existe opção de escolha da forma de antecipação para clientes que não possuem conta Stone",
        "Na antecipação pontual, você não consegue antecipar seus recebimentos de forma manual",
        "Na antecipação automática, se tiver algum imprevisto e precisar antecipar um valor pra hoje mesmo, por exemplo, é só fazer uma solicitação",
      ],
      correta: "Na antecipação automática, você escolhe se quer receber todo dia ou em dias específicos da semana ou do mês. É uma solução prática, fácil e sem burocracia pra você continuar focando na única coisa que importa: o seu negócio"
    },
    {
      pergunta: "Qual é a principal função de uma API?",
      respostas: [
        "Gerenciar senhas de usuários",
        "Conectar diferentes sistemas e permitir a comunicação entre eles",
        "Monitorar o desempenho do hardware",
        "Criptografar arquivos de log",
      ],
      correta: "Conectar diferentes sistemas e permitir a comunicação entre eles"
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
  
  