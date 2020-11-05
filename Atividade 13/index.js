function valida() {

    var e = document.getElementById("cursos");
    var opcao = e.options[e.selectedIndex].text;
    if (opcao == "Sistemas Biomédicos") {
        openBiomedicos();
    } else if (opcao == "Logística") {
        openLogistica();
    } else if (opcao == "Fabricação Mecânica") {
        openFabricacao();
    }
}



function openBiomedicos() {
    window.open("biomedicos.html", "testWindow", "width=250, height=150, left=10, top=10");
}

function openFabricacao() {
    window.open("fabricacao.html", "testWindow", "width=250, height=150, left=10, top=10");
}

function openLogistica() {
    window.open("logistica.html", "testWindow", "width=250, height=150, left=10, top=10");
}
