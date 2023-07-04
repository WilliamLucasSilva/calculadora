const visor = document.getElementById('numero_visor');
var butao = document.getElementsByTagName('button');
var array_butao = Array.from(butao);
var numero1 = ""
var numero2 = ""
var operação = ""
var resultado = ""

const soma = (num1,num2) => num1 + num2
const subtracao = (num1,num2) => num1 - num2
const multiplicacao = (num1,num2) => num1 * num2
const divisao = (num1,num2) => num2 / num1


array_butao.forEach((butao) => {
    butao.addEventListener('click',(e) =>{
        const element = e.target
        var id = element.id
        var clas = element.className

        if(id == 'ac'){
            visor.innerHTML = ""
            numero1 = ""
            numero2 = ""
            operação = ""
            resultado = ""
            id = ""
            clas = ""
        }else if(clas == 'operacao'){
            visor.innerHTML += id
            operação = id
            numero2 = numero1
            numero1 = "" 
            id = ""
            clas = ""
        }else if(id == '='){
            numero2 = Number(numero2)
            numero1 = Number(numero1)
            if(operação == '+'){
                resultado = soma(numero1,numero2)
            }
            if(operação == '-'){
                resultado = subtracao(numero1,numero2)
                resultado = -1*resultado
            }
            if(operação == 'x'){
                resultado = multiplicacao(numero1,numero2)
            }
            if(operação == '/'){
                resultado = divisao(numero1,numero2)
            }
            visor.innerHTML = `${resultado}`
            id = ""
            numero2 = ""
            numero1 = `${resultado}`
            resultado = ""
            operação = ""
        }
        numero1 += id
        visor.innerHTML +=`${id}`
       
        
        
    })
})

function limpar(e){
    console.log(e)
}