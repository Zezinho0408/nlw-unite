# HTML

*HyperText*

*Markup*
- Tag
- Atributos

*Language*


# CSS
//*Cascading StyleSheet*//

/* declarações */
body {
  background-color: #121214;
  color: #ffffff;
}

#JavaScript
```JS
// variaveis
const mensagem = "Oi, tudo bem?"
// tipos de dados
 // number
 // string
// funcao
alert (mensagem)
```
/ objeto javascript
const participante = {
  nome: "Delcio Neto",
  email: "delcio@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
}
// array
let participantes = [
  {
    nome: "Delcio Neto",
    email: "delcio@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
  }
]

// estrutura de repetição - loop
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }
// faça alguma coisa aqui
//enquanto tiver participantes nessa lista


  // verificar se o participante já existe
const participanteExiste = participantes.find(
  (p) => {
    return p.participante.email
  }
)

if(participanteExiste) {
  alert('Email já cadastrado!')
  return
}

// Limpar o formulário
event.target.querySelector('[name="nome"]').value = ""
event.target.querySelector('[name="email"]').value = ""

}