
import { Resources } from "./resources";
import { Background } from "./background";
import { Actor, Animation, CollisionType, DegreeOfFreedom, Keys, SolverStrategy, SpriteSheet, Vector, range } from "excalibur";

export class Player extends Actor {
    maxSpeed = 200;
    speed = 30;
    grounded = false;

    constructor() {

        super({
            // width: Resources.Player.width, height: Resources.Player.height
            width: 420, height: 692
        })
        const playerWalk = SpriteSheet.fromImageSource({
            image: Resources.playerWalk,
            grid: { rows: 4, columns: 4, spriteWidth: 420, spriteHeight: 692 }
        })
        const idle = playerWalk.sprites[6]
        const walkRight = Animation.fromSpriteSheet(playerWalk, range(0, 15), 100)
        const walkLeft = walkRight.clone()
        walkLeft.flipHorizontal = true
        
        this.graphics.add("idle", idle)
        this.graphics.add("walkright", walkRight)
         this.graphics.add("walkleft", walkLeft)
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
            this.graphics.use("walkleft")
        } else if (engine.input.keyboard.isHeld(Keys.Right)) {
            this.body.applyLinearImpulse(new Vector(this.speed * delta, 0))
            this.graphics.use("walkright")
        } else {
            this.vel.x = 0;
        }



        if (engine.input.keyboard.wasPressed(Keys.Up) && this.grounded) {
            this.body.applyLinearImpulse(new Vector(0, -260 * delta))
            this.grounded = false;
        }

    }
}
