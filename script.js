function verificar() { 
  var data = new Date() //Pega a data atual
  var ano = data.getFullYear() //Pega 4 digitos do ano atual ex: 2022
  var fano = document.getElementById('txtano') //Pega o ano de nascimento do usuário
  var res = document.querySelector('div#res') //Pega a div res (onde está o texto que vai ser sustituido pelo resultado real)

  if(fano.value.length == 0 || Number(fano.value) > ano) { /*Se não for digitado nenhum ano exibe erro e 
    se for um ano futuro também. O length é usado nesse caso para verificar se entrou algum dado 
    no value se length for == 0 não entrou */
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex') //Pega o sexo e coloca na var, como ambos tem o mesmo nome o [0] é o masc e o [1] é o fem
    var idade = ano - Number(fano.value) //Calcula idade do usuário ano atual - ano de nasc
    var genero = ''
    // var img = ''
    var img = document.createElement('img') //Cria um elemento img com JS
    img.setAttribute('id', 'foto') //Criando um atributo id "foto" para img 
    var backcolor = ' '

    if (fsex[0].checked) {
      genero = 'Masculino'
      backcolor = window.document.querySelector('body')
      backcolor.style.background='linear-gradient(90deg, #0f2d78 0%, #97D9E1 100%)'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'bebe-menino.png')
      } else if (idade < 21) {
        img.setAttribute('src', 'menino.png')
      } else if (idade < 50) {
        img.setAttribute('src', 'homem.png')
      } else {
        img.setAttribute('src', 'vovô.png')
      }
    } else if (fsex[1].checked) {
      genero = 'Feminino'
      backcolor = window.document.querySelector('body')  
      backcolor.style.background='linear-gradient(90deg, #D9AFD9 0%, #c748eb 100%)'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'bebe-menina.png')
      } else if (idade < 21) {
        img.setAttribute('src', 'menina.png')
      } else if (idade < 50) {
        img.setAttribute('src', 'mulher.png')
      } else {
        img.setAttribute('src', 'vovó.png')
      }
    }
    res.style.textAlign= 'center' //colocar stylo com JS
    res.innerHTML = `<p> Detectado gênero ${genero} com ${idade} anos.</p>`
    res.appendChild(img)
  }
}