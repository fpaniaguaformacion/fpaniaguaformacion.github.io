const TIME_TO_RESTORE_COL=1000;
class Car {
    constructor(sprite) {
        this.collisionable = true;
        this.sprite = new Image();
        this.sprite.src = sprite;
        this.widthPct = 0.1;
        this.width = window.innerWidth * this.widthPct;
        this.height = this.width * 2;
        this.xInitial = (window.innerWidth - this.width) / 2;
        this.x = this.xInitial;
        this.y = window.innerHeight - this.height*2;
        this.speed = 3;
        this.rectangle = new Rectangle(this.x, this.y, this.width, this.height);        
    }
    move(angle) {
        this.x = this.xInitial + angle * this.speed; 
        this.rectangle.x = this.x;
    }
    draw() {
        ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }
    receiveCollision(){
        this.collisionable = false;
        setTimeout(function(){
            car.collisionable = true;
        }, TIME_TO_RESTORE_COL);
    }
}