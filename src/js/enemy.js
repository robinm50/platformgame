import { Player } from "./player";
import { Resources } from "./resources";
import { Actor, CollisionType, DegreeOfFreedom, Keys, Side, SolverStrategy, Vector } from "excalibur";

export class Enemy extends Actor {
    constructor() {
        super({
            width: Resources.enemy.width, height: Resources.enemy.height,
            
        });
        this.scale = new Vector(0.6, 0.6);
        this.body.useGravity = true;
        this.body.collisionType = CollisionType.Active;
        this.body.friction = 1;
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation);
    }
    onInitialize(engine) {

        this.graphics.use(Resources.enemy.toSprite());

    }
onCollisionStart(self, other, side) {
  if (other.owner instanceof Player) {
    
    if (side === Side.Top) {
      // Speler springt op vijand van bovenaf
      this.kill();
      console.log("Enemy killed by player!")
    }

    // if (side === Side.Left) {
    //   // Botsing van links
    // }

    // if (side === Side.Right) {
    //   // Botsing van rechts
    // }

    // if (side === Side.Bottom) {
    //   // Botsing van onderen
    // }

  }
}
}

