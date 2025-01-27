/**
 * Simulador dos operadores lógicos AND - OR - NOT
 * @autor Yesenia Salas 
 */
let receive // armazena o parâmentro (valor) recebido do html
//as variaves abaixo são usadas para identificar se o interruptor está
// ligado ou desligado (false= desligados | true = ligado) 
let sw1 = false
let sw2 = false 

function sw(receive){
   // console.log(receive)// apoio a lógica

   if(receive === 1 && sw1 === false){
        document.getElementById('sw1').src ="img/swon.png"
        sw1 = true
   } else if (receive === 1 && sw1 === true ){
    document.getElementById('sw1').src = "img/swoff.png"
    sw1 = false
   } else if (receive === 2 && sw2 === false ){
    document.getElementById('sw2').src = "img/swon.png"
    sw2 = true
   } else if (receive === 2 && sw2 === true ){
    document.getElementById('sw2').src = "img/swoff.png"
    sw2 = false
   }

    if(receive === 3){
        // A linha abaixo cria um objeto usando a classe audio
        let som = new audio 
        console.log(typeof(som))
        som.src = "sound/glassbreaking.wav"
        som.play()
        // trocar a imagem
        document.getElementById('lamp').src ="img/broken.jpg"
    }
}