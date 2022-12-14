

function calculo() {
    //entrada
    const aulas = Number(prompt("Informe o Número de Aulas Ministradas: "))
    const faltas = Number(prompt("Informe o Número de Faltas do Aluno: "))
    //cálculos
    const presenca = ((aulas - faltas))
    const freq = ((presenca / aulas) * 100)
  
  
    //condição, para saber se o aluno está aprovado ou reprovado
    if (freq >= 75) {
  
      mensagem = `PARABÉNS! VOCÊ FOI APROVADO(A)!`
    } else {
      mensagem = `OPS, VOCÊ FOI REPROVADO(A)!`
    }
  
  
    //saída
    console.log('A FREQUÊNCIA DO ALUNO É', freq + '%.', mensagem)
    
    let boletim = []
    boletim.unshift(freq)
    boletim.push(mensagem)
    console.log(boletim)
  
  }
  
  
  calculo()
  
  
  
  
  
  