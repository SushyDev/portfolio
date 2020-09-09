function Select() {
    if(document.getElementById("installer-window").style.display == "block") return;
    if(document.getElementById("installing-window").style.display == "block") return;
    if(document.getElementById("program-window").style.display == "block") return;
    document.getElementById('program-icon').classList.add("program-icon-clicked");
    document.getElementById('program-lable').classList.add("program-lable-clicked");
}

function Run() {
    if(document.getElementById("installer-window").style.display == "block") return;
    if(document.getElementById("installing-window").style.display == "block") return;
    if(document.getElementById("program-window").style.display == "block") return;
    document.getElementById('installer-window').style.display = 'block';
    document.getElementById('program-icon').classList.remove("program-icon-clicked");
    document.getElementById('program-lable').classList.remove("program-lable-clicked");
}

function Open() {
    document.getElementById('installer-window').style.display = 'none';
    document.getElementById('installing-window').style.display = 'block';
    document.body.style.cursor = "wait";

    setTimeout(() => {
        startPortfolio()
    }, 5000)
}

function Close() {
    document.getElementById('installer-window').style.display = 'none';
    document.getElementById('program-window').style.display = 'none';
}

function startPortfolio () {
    document.body.style.cursor = "default";
    document.getElementById('installing-window').style.display = 'none';
    document.getElementById('program-window').style.display = 'block';
}