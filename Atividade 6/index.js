var jogador =  prompt("Escolha uma opção: \n\n[1] Pedra\n\n[2] Tesoura\n\n[3] Papel");

var imagemJokenpoJogador = "images/jokenpo" + jogador + ".png";

var imagemJogador = document.querySelectorAll("img")[0];

imagemJogador.setAttribute("src", imagemJokenpoJogador);

var computador = Math.floor(Math.random() * 3 ) +1;

var imagemJokenpoComputador = "images/jokenpo" + computador + ".png";

var imagemComputador = document.querySelectorAll("img")[1];

imagemComputador.setAttribute("src", imagemJokenpoComputador);

    if (jogador == 1) {
       if (computador == 1) {document.querySelector("h1").innerHTML = "Empate !";}
       if (computador == 2) {document.querySelector("h1").innerHTML = "Você ganhou ! :)";}
       if (computador == 3) {document.querySelector("h1").innerHTML = "Computador ganhou ! :(";}
    }

    if (jogador == 2) {
        if (computador == 1) {document.querySelector("h1").innerHTML = "Computador ganhou ! :(";}
        if (computador == 2) {document.querySelector("h1").innerHTML = "Empate !";}
        if (computador == 3) {document.querySelector("h1").innerHTML = "Você ganhou ! :)";}
     }

     if (jogador == 3) {
        if (computador == 1) {document.querySelector("h1").innerHTML = "Você ganhou ! :)";}
        if (computador == 2) {document.querySelector("h1").innerHTML = "Computador ganhou ! :(";}
        if (computador == 3) {document.querySelector("h1").innerHTML = "Empate !";}
     }

     if (document.querySelector("h1").innerHTML == "Você ganhou ! :)") {
         document.querySelector("h1").style.color = "darkblue";
     } else if (document.querySelector("h1").innerHTML == "Computador ganhou ! :(") {
        document.querySelector("h1").style.color = "darkred";
     }
