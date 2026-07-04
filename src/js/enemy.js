import { Player } from "./player";
import { Resources } from "./resources";
import { Actor, Animation, CollisionType, DegreeOfFreedom, Keys, range, Side, SolverStrategy, SpriteSheet, Vector } from "excalibur";

export class Enemy extends Actor {

  constructor(x, y) {
    super({
      // width: Resources.enemy.width, height: Resources.enemy.height,
      width: 500, height: 500
    });
    this.spawnPos = new Vector(x, y);
    this.pos = new Vector(x, y);
    this.scale = new Vector(0.25, 0.25);
    this.body.useGravity = true;
    this.body.collisionType = CollisionType.Active;
    this.body.friction = 1;
    this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation);
  

    const enemyWalk = SpriteSheet.fromImageSource({
      image: Resources.enemy,
      grid: { rows: 4, columns: 4, spriteWidth: 594, spriteHeight: 578 }
    })
    const idle = enemyWalk.sprites[6]
    const walkRight = Animation.fromSpriteSheet(enemyWalk, range(0, 15), 100)
    this.graphics.add("idle", idle)
    this.graphics.add("walkRight", walkRight)
    this.graphics.use("idle")
  }
  onInitialize(engine) {

    // this.graphics.use(Resources.enemy.toSprite());

  }
  reset(scene) {
    this.pos = this.spawnPos.clone();
    this.vel = new Vector(0, 0);
if (this.isKilled()){
  this.unkill();
}
    this.body.collisionType = CollisionType.Active;
    this.graphics.use("idle");
if (!this.scene && scene) {
      scene.add(this);
    }
  }
  // this.alive = true;
  // this.graphics.visible = true;
  // this.body.collisionType = CollisionType.Active;


// die() {
//   this.alive = false;
//   this.graphics.visible = false;
//   this.body.collisionType = CollisionType.PreventCollision;
// }

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
