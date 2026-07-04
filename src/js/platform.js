import { Actor, CollisionType, Shape, Vector } from "excalibur";
import { Resources } from "./resources";



export class Platform extends Actor {
    constructor(x, y) {
        super();
        this.pos = new Vector(x, y);
        this.scale = new Vector(0.4, 0.4);
         this.body.collisionType = CollisionType.Fixed;
    }

    onInitialize(engine) {
        
// this.body.bounciness = 0;
// this.body.friction = 1;
const sprite =Resources.platform.toSprite()
        this.graphics.use(sprite);

       
        const hitbox = Shape.Box(800,100 , Vector.Half, new Vector(0,20));
        this.collider.set(hitbox);
    }
}
