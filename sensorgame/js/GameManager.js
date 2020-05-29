
var c;
var ctx;
var car;
var trees = new Array();
var bg1;
var bg2;
var score = 0;
var globalSpeed = 2;
var treeInterval;
const RATE_SCORE = 0.1;
const TIME_BETWEEN_TREES = 400;
const NUMER_OF_TREES = 4;
const LENGTH_VIBRATION = 1000;
function inicializar() {
    initContext();
    initObjects();
    initListeners();

    setInterval(gameLoop, 0.17);
    setInterval(increaseScore, RATE_SCORE);
    treeInterval = setInterval(createTree, TIME_BETWEEN_TREES);
}
function initContext() {
    c = document.getElementById("canvas");
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    ctx = c.getContext("2d");
    ctx.imageSmoothingEnabled = false;
}
function initObjects() {
    car = new Car("car1.png");
    bg1 = new Background(0);
    bg2 = new Background(-window.innerHeight);
}
function initListeners() {
    window.addEventListener('deviceorientation', function (event) {
        //var alpha = event.alpha;
        //var beta = event.beta;
        var gamma = event.gamma;
        car.move(gamma);
    }, true);
}

function gameLoop() {
    //Comprobar colisiones
    checkCollisions();

    //Draw Background
    bg1.move();
    bg2.move();
    trees.forEach(tree => {
        tree.move();
    });
    bg1.draw();
    bg2.draw();

    //Score
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "12px 'Press Start 2P'";
    ctx.textAlign = "center";
    var txtScore = "";
    for (i = 0; i < 6 - score.toString().length; i++) {
        txtScore += "0";
    }
    txtScore += score;
    ctx.fillText(txtScore, 50, 40);
    ctx.fillText("HI", window.innerWidth - 50, 20);
    ctx.fillText("000000", window.innerWidth - 50, 40);

    //Draw GameObjects
    trees.forEach(tree => {
        tree.draw();
    });
    car.draw();
}

function vibrate() {
    window.navigator.vibrate(LENGTH_VIBRATION);
}

function increaseScore() {
    score++;
}

function createTree() {
    if (trees.length < NUMER_OF_TREES) {
        trees.push(new Tree("tree1.png"));
    } else {
        clearInterval(treeInterval);
    }
}

function checkCollisions() {
    trees.forEach(tree => {
        if (hayColision(car, tree) && car.collisionable){
            score=0;
            car.receiveCollision();
            vibrate();
        }
    });
}

function hayColision(o1, o2){
    if (o1.x > o2.x && o1.x < o2.x+o2.width && o1.y > o2.y && o1.y < o2.y+o2.height){
        return true;
    }
    if (o1.x+o1.width > o2.x && o1.x+o1.width < o2.x+o2.width && o1.y > o2.y && o1.y < o2.y+o2.height){
        return true;
    }
}