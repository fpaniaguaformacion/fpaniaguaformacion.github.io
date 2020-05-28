
var c;
var ctx;
var car;
var bg1;
var bg2;
var score = 0;
const RATIO_PUNTUACION = 0.1;
function inicializar() {
    inicializarContexto();
    inicializarObjetos();
    inicializarListener();

    setInterval(drawScreen,0.17);
    setInterval(incrementarPuntuacion,RATIO_PUNTUACION)
}
function inicializarContexto(){
    c = document.getElementById("canvas");
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    ctx = c.getContext("2d");
    ctx.imageSmoothingEnabled = false;
}
function inicializarObjetos(){
    car = new Car("car1.png");
    bg1 = new Background(0);
    bg2 = new Background(-window.innerHeight);
}
function inicializarListener(){
    window.addEventListener('deviceorientation', function(event) {
        //var alpha = event.alpha;
        //var beta = event.beta;
        var gamma = event.gamma;
        car.move(gamma);
    },true);
}

function drawScreen(){
    //Background
    bg1.move();
    bg2.move();
    bg1.draw();
    bg2.draw();
    //Score
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "12px 'Press Start 2P'";
    ctx.textAlign = "center";
    var txtScore = "";
    for (i=0;i<6-score.toString().length;i++){
        txtScore+="0";
    }
    txtScore+=score;
    ctx.fillText(txtScore, 50, 40);
    ctx.fillText("HI", window.innerWidth - 50, 20);
    ctx.fillText("000000", window.innerWidth - 50, 40);
    //GameObjects
    car.draw();
}

function vibrar() {
    window.navigator.vibrate(500);
}

function incrementarPuntuacion(){
    score++;
}

