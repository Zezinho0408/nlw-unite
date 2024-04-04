let participantes = [
  {
    nome: "Delcio Neto",
    email: "delcio@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 0)
  },
  {
    nome: "Fabricio Costa",
    email: "fabricio@gmail.com",
    dataInscricao: new Date(2023, 9, 10, 15, 0),
    dataCheckIn: new Date(2023, 9, 19, 13, 30)
  },
  {
    nome: "João Silva",
    email: "joao@gmail.com",
    dataInscricao: new Date(2023, 7, 5, 12, 0),
    dataCheckIn: null
  },
  {
    nome: "Maria Oliveira",
    email: "maria@gmail.com",
    dataInscricao: new Date(2023, 6, 17, 9, 30),
    dataCheckIn: new Date(2023, 6, 25, 16, 20)
  },
  {
    nome: "Pedro Santos",
    email: "pedro@gmail.com",
    dataInscricao: new Date(2023, 8, 8, 14, 15),
    dataCheckIn: new Date(2023, 8, 16, 8, 10)
  },
  {
    nome: "Marina Dias",
    email: "mari@gmail.com",
    dataInscricao: new Date(2023, 10, 5, 18, 45),
    dataCheckIn: null
  },
  {
    nome: "Carlos Nunes",
    email: "carlos@gmail.com",
    dataInscricao: new Date(2023, 7, 12, 10, 0),
    dataCheckIn: new Date(2024, 7, 21, 11, 15)
  },
  {
    nome: "Luciana Ferreira",
    email: "luciana@gmail.com",
    dataInscricao: new Date(2023, 5, 30, 16, 30),
    dataCheckIn: new Date(2023, 5, 5, 19, 50)
  },
  {
    nome: "Rafaela Lima",
    email: "rafaela@gmail.com",
    dataInscricao: new Date(2023, 9, 3, 20, 10),
    dataCheckIn: new Date(2023, 10, 11, 14, 0)
  },
  {
    nome: "José Pereira",
    email: "jose@gmail.com",
    dataInscricao: new Date(2023, 10, 8, 11, 20),
    dataCheckIn: null
  }
];

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now())
  .to(participante.dataInscricao)

  let dataCheckIn = dayjs(Date.now())
  .to(participante.dataCheckIn)
  
  //condicional
  if(participante.dataCheckIn == null) {
    dataCheckIn = `
    <button
     data-email="${participante.email}"
     onclick="fazerCheckIn(event)"
    >
     Confirmar check-in
    </button>
  
    `
    
  }

  
  return `
 <tr>
   <td>
     <strong>
      ${participante.nome} 
    </strong>
    <br>
    <small>
      ${participante.email}
    </small>
  </td>
  <td>${dataInscricao}</td>
  <td>${dataCheckIn}</td>
</tr>
`
}

const atualizarlista = (participantes) => {
  let output = ""
  // estrutura de repetição - loop
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }
  
  // substituir informação do HTML
document.querySelector('tbody').innerHTML = output
}

atualizarlista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault ()

  const dadosDoFormulario = new FormData(event.target)

  
  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  // verificar se o participante existe
  const participanteExiste = participantes.find(
    (p) => p.email == participante.email
    
  )

  if(participanteExiste) {
    alert('Email já cadastrado!') 
    return
  }

  participantes = [participante, ...participantes]
  atualizarlista(participantes)


// Limpar o formulário
event.target.querySelector('[name="nome"]').value = ""
event.target.querySelector('[name="email"]').value = ""

}

const fazerCheckIn = (event) => {
  // confirmar se realmente quer o Check-In

  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'

  if(confirm(mensagemConfirmacao) == false) {
    return
  }

  // encontrar o participante dentro da lista
  const participante = participantes.find((p) => p.email == event.target.dataset.email
  )
  // atualizar check-in do participante
  participante.dataCheckIn = new Date()

  // atualizar a lista de participantes
  atualizarlista(participantes)
  
  }