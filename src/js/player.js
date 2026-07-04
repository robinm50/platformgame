
import { Resources } from "./resources";
import { Background } from "./background";
import { Actor, Animation, CollisionContact, CollisionType, DegreeOfFreedom, Keys, Side, SolverStrategy, SpriteSheet, Vector, range } from "excalibur";
import { Platform } from "./platform";
import { Enemy } from "./enemy";

export class Player extends Actor {
    maxSpeed = 200;
    speed = 200;
    grounded = false;
    constructor(x, y) {

        super({
            // width: Resources.Player.width, height: Resources.Player.height
            width: 400, height: 692

        })
        this.spawnPos = new Vector(x, y);
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

        this.pos = new Vector(x, y);
        this.z = 1;
        this.scale = new Vector(0.2, 0.2);
        this.body.useGravity = true;
        this.body.collisionType = CollisionType.Active;
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation);


    }

    onInitialize(engine) {

        // this.graphics.use(Resources.Player.toSprite())
        this.vel = new Vector(0, 0);

    }

 reset() {
        this.pos = this.spawnPos.clone();
        this.vel = new Vector(0, 0);
        // this.grounded = false;
    }

    
    onCollisionStart(self, other, side) {

        if (other.owner instanceof Background || other.owner instanceof Platform) {
            if (side === Side.Bottom) {
                this.grounded = true;
                this.vel.y = 0;
                console.log("Player is grounded");
            }
        }
        if (other.owner instanceof Enemy) {
            if (side !== Side.Bottom) {
                const ui = this.scene.ui;
                if (ui) {
                    ui.loselife();
                }
                console.log("Player collided with enemy");
            }
        }
    }


    onPreUpdate(engine) {
        if (this.pos.x >4600 ) { 
        engine.goToScene("gameover");
    }
        if(this.pos.x< -30){
engine.goToScene("gameover");
        }
    
        let Xspeed = 0;
        this.graphics.use("idle")
        if (this.vel.x > this.maxSpeed) {
            this.vel.x = this.maxSpeed;
        }
        if (this.vel.x < -this.maxSpeed) {
            this.vel.x = -this.maxSpeed;
        }

        if (engine.input.keyboard.isHeld(Keys.Left)) {
            // this.body.applyLinearImpulse(new Vector(-this.speed, 0))
            Xspeed = -this.speed
            this.graphics.use("walkleft")
        } else if (engine.input.keyboard.isHeld(Keys.Right)) {
            // this.body.applyLinearImpulse(new Vector(this.speed , 0))
            Xspeed = this.speed
            this.graphics.use("walkright")
        }
        this.vel.x = Xspeed



        if (engine.input.keyboard.wasPressed(Keys.Up) && this.grounded) {
            // this.body.applyLinearImpulse(new Vector(0, this.speed ))
            this.vel.y = -750;
            this.grounded = false;
        }

    }
}
