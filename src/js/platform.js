import { Actor, CollisionType, Shape, Vector } from "excalibur";
import { Resources } from "./resources";



export class Platform extends Actor {
    constructor(x, y) {
        super();
        this.pos = new Vector(x, y);
        this.scale = new Vector(0.4, 0.4);
        this.body.collisionType = CollisionType.Fixed;

        this.graphics.use(Resources.platform.toSprite());

        const hitbox = Shape.Box(800, 10, Vector.Half, new Vector(0, 10));
        this.collider.set(hitbox);
    }

}
