
let expression = "";
//pega TODOS os objetos do tipo button
let buttons = document.querySelectorAll("button");

//cria um array com todos os botões e executa uma função para cada botão
Array.from(buttons).forEach((button)=>{

    //para cada botão cria um evento e do tipo click
    button.addEventListener("click",(e)=>{

        //verifica se o nome do evento e criado é =, se for calcula o resultado da expressão
        if(e.target.innerHTML == "="){
            expression = eval(expression);

            //exibe o resultado da expressão na textarea
            document.querySelector("textarea").innerText = expression;
        }
        //se não entrar no if anterior vem pra cá e verifica se o nome do evento é AC, se for limpa a tela
        else if(e.target.innerHTML == "C"){
            //define a string como vazia pra limpar a tela
            expression = "";
            //exibe a string vazia
            document.querySelector("textarea").innerText = expression;
        }
        //verifica se o nome do evento é ←, se for remove o último elemento adicionado
        else if(e.target.innerHTML == "←"){
            //a função slice particiona o array de maneira que slice(inicio, fim), o 0 define o inicio
            //do array, e o -1 indica que queremos tirar o primeiro elemento de trás pra frente.
            expression = expression.slice(0,-1);
            document.querySelector("textarea").innerText = expression;
        }
        //verifica se o nome do evento é %, se for calcula o numero na tela dividido por 100
        else if(e.target.innerHTML == "%"){
            //adiciona o operador de divisão e o número 100 aos números que foram digitados pelo usuário
            expression = expression + "/100";
            //calcula a expressão
            expression = eval(expression);
            document.querySelector("textarea").innerText = expression;
        }
        //nesse else entrarão todos os botões que não são operadores, ou seja, os números
        else{
            //a cada botão apertado, atualiza a string com o novo botão e exibe na tela o número antigo
            //mais o novo botão
            expression = expression + e.target.innerText;
            document.querySelector("textarea").innerText = expression;
        }
    })
})