class Ball {
    constructor(x, y, r) {
        let options = {restitution: 0.95};
        this.r = r/2;
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
    }

    show() {
        fill(0, 0, 255);
        ellipse(this.body.position.x, this.body.position.y, this.r, this.r);
    }
}