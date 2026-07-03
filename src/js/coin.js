import { Actor, CollisionType, DegreeOfFreedom, Vector } from "excalibur";
import { Resources } from "./resources";

export class Coin extends Actor {
    constructor(x,y) {
        super({
            width: Resources.coin.width, height: Resources.coin.height
        })
        this.graphics.use(Resources.coin.toSprite())
        this.z = 1;
        this.scale = new Vector(0.1, 0.1);
        this.body.useGravity = false;
        this.body.collisionType = CollisionType.Active;
           this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation);
            this.pos = new Vector(x, y);
    }
}