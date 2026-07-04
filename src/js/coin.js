import { Actor, CollisionGroupManager, CollisionType, DegreeOfFreedom, Shape, Vector } from "excalibur";
import { Resources } from "./resources";
import { Player } from "./player";
import { UI } from "./scenes/ui";
export const IgnoreGroup = CollisionGroupManager.create("ignore-enemy-coin");
export class Coin extends Actor {

    constructor(x, y) {
        super({
            width: Resources.coin.width, height: Resources.coin.height
        })
        this.body.group = IgnoreGroup;
        this.graphics.use(Resources.coin.toSprite())
        this.z = 0;
        this.scale = new Vector(0.1, 0.1);
        this.body.useGravity = false;
        this.body.collisionType = CollisionType.Active;
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation);
        this.pos = new Vector(x, y);
        this.spawnPos = new Vector(x, y);
    }
onInitialize(engine){
    //  const width = Resources.coin.width * this.scale.x*6;
    //     const height = Resources.coin.height * this.scale.y*6;
    //     const hitbox = Shape.Box(width, height, Vector.Half);
    //     this.collider.set(hitbox);
}
    onCollisionStart(self, other) {
        if (other.owner instanceof Player) {
            const ui = this.scene.ui;
            console.log("Coin collected by player!");
            this.kill();

            ui.addScore(10);
        }
    }
    reset(scene) {
        this.pos = this.spawnPos.clone();
        this.vel = new Vector(0, 0);
        this.body.collisionType = CollisionType.Active;
        if (!this.scene && scene) {
            scene.add(this);
        }
    }
}