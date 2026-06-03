import { Actor, CollisionType, Shape, vec, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Background extends Actor {
    constructor(x) {
        super()
        this.pos = vec(x, 0);
        this.anchor = new Vector(0, 0.23)
    }
    
    onInitialize(engine) {
        this.graphics.use(Resources.bg.toSprite());
        this.body.collisionType = CollisionType.Fixed;
        const hitbox = Shape.Box(4000, 70, Vector.Half, new Vector(-700, 700))
        this.collider.set(hitbox)
    }
}