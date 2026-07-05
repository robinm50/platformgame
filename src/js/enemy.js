import { IgnoreGroup } from "./coin";
import { Player } from "./player";
import { Resources } from "./resources";
import { Actor, Animation, CollisionType, DegreeOfFreedom, range, Side, SpriteSheet, Vector } from "excalibur";

export class Enemy extends Actor {

  constructor(x, y, minX, maxX) {
    super({
      width: 500, height: 500
    });
    this.body.group = IgnoreGroup;
    this.spawnPos = new Vector(x, y);
    this.pos = new Vector(x, y);
    this.scale = new Vector(0.25, 0.25);
    this.body.useGravity = true;
    this.body.collisionType = CollisionType.Active;
    this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation);
    this.speed = 70;
    this.direction = 1;
    this.minX = minX
    this.maxX = maxX
    this.z = 1
    this.vel = new Vector(this.speed * this.direction, 0);

    const enemyWalk = SpriteSheet.fromImageSource({
      image: Resources.enemy,
      grid: { rows: 4, columns: 4, spriteWidth: 594, spriteHeight: 578 }
    })
    
    const walkRight = Animation.fromSpriteSheet(enemyWalk, range(0, 15), 100)
    const walkLeft = walkRight.clone()
    walkLeft.flipHorizontal = true
    this.graphics.add("walkRight", walkRight)
    this.graphics.add("walkLeft", walkLeft)
  }

  onPreUpdate(engine) {
    if (this.pos.x <= this.minX) {
      this.direction = 1;
      this.graphics.use("walkRight")
    } else if (this.pos.x >= this.maxX) {
      this.direction = -1;
      this.graphics.use("walkLeft")
    }
    this.vel.x = this.speed * this.direction;
  }

  reset(scene) {
    this.pos = this.spawnPos.clone();
    this.vel = new Vector(0, 0);
    this.direction = 1;
    this.graphics.use("walkRight");
    this.body.collisionType = CollisionType.Active;
    if (!this.scene && scene) {
      scene.add(this);
    }
  }

  onCollisionStart(self, other, side) {
    if (other.owner instanceof Player) {

      if (side === Side.Top) {
        // Speler springt op vijand van bovenaf
        this.kill();
        console.log("Enemy killed by player!")
      }

    }

  }

}
