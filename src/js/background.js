import { Actor, CollisionType, Shape, Vector } from "excalibur"
import { Resources } from './resources.js'

export class Background extends Actor {
    constructor(x) {
        super()
        this.pos = new Vector(x, 0);
         this.z = 0;
        this.anchor = new Vector(0, 0.23)
          this.body.collisionType = CollisionType.Fixed;
    }

    onInitialize(engine) {
        this.graphics.use(Resources.bg.toSprite());
      
        const hitbox = Shape.Box(1536, 70, Vector.Half, new Vector(768, 700))
        this.collider.set(hitbox)
    }
}