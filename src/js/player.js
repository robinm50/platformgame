
import { Resources } from "./resources";
import { Background } from "./background";
import { Actor, Animation, CollisionType, DegreeOfFreedom, Keys, SolverStrategy, SpriteSheet, Vector,range} from "excalibur";

export class Player extends Actor {
    maxSpeed = 200;
    speed = 30;
    grounded = false;

    constructor() {

        super({
            // width: Resources.Player.width, height: Resources.Player.height
            width: 422, height: 686
        })
        const playerWalk = SpriteSheet.fromImageSource({
            image: Resources.playerWalk,
            grid: { rows: 3, columns: 3, spriteWidth: 422, spriteHeight: 686 }
        })
        const idle = playerWalk.sprites[0]
        const walk = Animation.fromSpriteSheet(playerWalk, range(1,8),100)
        this.graphics.add("idle", idle)
        this.graphics.add("walk", walk)
        this.graphics.use("idle")

        this.z = 1;
        this.scale = new Vector(0.2, 0.2);
        this.body.mass = 7;
        this.body.useGravity = true;
        this.body.collisionType = CollisionType.Active;
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation);

    }

    onInitialize(engine) {

        // this.graphics.use(Resources.Player.toSprite())
        this.vel = new Vector(0, 0);

    }
    onCollisionStart(self, other) {
        if (other.owner instanceof Background) {
            this.grounded = true;
            console.log("Player is grounded")
        }
    }

    onPreUpdate(engine, delta) {
 this.graphics.use("idle")
        if (this.vel.x > this.maxSpeed) {
            this.vel.x = this.maxSpeed;
        }
        if (this.vel.x < -this.maxSpeed) {
            this.vel.x = -this.maxSpeed;
        }

        if (engine.input.keyboard.isHeld(Keys.Left)) {
            this.body.applyLinearImpulse(new Vector(-this.speed * delta, 0))
            this.graphics.use("walk")
        } else if (engine.input.keyboard.isHeld(Keys.Right)) {
            this.body.applyLinearImpulse(new Vector(this.speed * delta, 0))
             this.graphics.use("walk")
        } else {
            this.vel.x = 0;
        }



        if (engine.input.keyboard.wasPressed(Keys.Up) && this.grounded) {
            this.body.applyLinearImpulse(new Vector(0, -250 * delta))
            this.grounded = false;
        }

    }
}
