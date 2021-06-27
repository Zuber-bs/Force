class Ground {
    constructor(x, y, w, h) {
        let options = {isStatic: true};
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, this.w, this.h, options);
        World.add(world, this.body);
    }

    show() {
        fill(0, 0, 255);
        rect(this.body.position.x, this.body.position.y, this.w, this.h);
    }

}