class Background {
    constructor(y) {
        this.sprite = new Image();
        this.sprite.src = "bg.png";
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.x = 0;
        this.y = y;
        this.speed = 2;
    }
    move() {
        this.y = this.y + this.speed;
        if (this.y > window.innerHeight){
            this.y = -window.innerHeight;
        }
    }
    draw() {
        ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }
}