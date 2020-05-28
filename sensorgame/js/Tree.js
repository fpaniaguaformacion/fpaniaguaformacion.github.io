class Tree {
    constructor(sprite) {
        this.sprite = new Image();
        this.sprite.src = sprite;
        this.widthPct = 0.1;
        this.width = window.innerWidth * this.widthPct;
        this.height = this.width * 2;
        this.x = Math.random() * window.innerWidth;;
        this.y = -this.height;
    }
    move() {
        this.y = this.y + globalSpeed;
        if (this.y > window.innerHeight){
            this.x = Math.random() * window.innerWidth;;
            this.y = -this.height;
        }
    }
    draw() {
        ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }
}