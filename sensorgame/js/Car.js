const widthPct = 0.05;
const heightPct = 0.05;
const speed = 1;
class Car {
    constructor(sprite) {
        this.sprite = new Image();
        this.sprite.src = sprite;
        this.width = window.innerWidth * widthPct;
        this.height = this.width * 2;
        this.xInitial = (window.innerWidth - this.width) / 2;
        this.x = this.xInitial;
        this.y = window.innerHeight - this.height*2;
    }
    move(angle) {
        this.x = this.xInitial + angle * speed; 
    }
    draw(ctx) {
        ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }
}