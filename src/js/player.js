
import { Resources } from "./resources";
 import { Background } from "./background";
import { Actor, CollisionType, DegreeOfFreedom, Keys, SolverStrategy, Vector } from "excalibur";

export class Player extends Actor {
    maxSpeed = 200;
    speed= 15;
    grounded = false;
    constructor() {

        super({
            width: Resources.Player.width, height: Resources.Player.height,

        });
        this.z = 1;
        this.scale = new Vector(0.4, 0.4);
this.body.mass= 7;
        this.body.useGravity = true;
        this.body.collisionType = CollisionType.Active;
       
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation);

    }

    onInitialize(engine) {

        this.graphics.use(Resources.Player.toSprite())

        this.vel = new Vector(0, 0);

    }
    onCollisionStart(self, other) {
        if (other.owner instanceof Background) {
            this.grounded = true;
            console.log("Player is grounded")
        }
    }

    onPreUpdate(engine, delta) {

        if (this.vel.x > this.maxSpeed) {
            this.vel.x = this.maxSpeed;
        }
        if (this.vel.x < -this.maxSpeed) {
            this.vel.x = -this.maxSpeed;
        }

        if (engine.input.keyboard.isHeld(Keys.Left)) {
            this.body.applyLinearImpulse(new Vector(-this.speed * delta, 0))



        }
        if (engine.input.keyboard.isHeld(Keys.Right)) {
         this.body.applyLinearImpulse(new Vector(this.speed * delta, 0))


        }

        if (engine.input.keyboard.wasPressed(Keys.Up) && this.grounded) {
            this.body.applyLinearImpulse(new Vector(0, -300 * delta))
            this.grounded = false;

        }



    }
}
