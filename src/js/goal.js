import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";
import { Player } from "./player";
import{ Winscene } from "./scenes/winscene";

export class Goal extends Actor {
    constructor(x, y) {
        super({
            // width: Resources.goal.width, height: Resources.goal.height
            width: 300, height: 200
        })
        this.graphics.use(Resources.goal.toSprite())
        this.scale = new Vector(0.2, 0.2);
        this.body.useGravity = false;
        this.pos = new Vector(x, y);
    }
    onInitialize(engine) {
          this.engine = engine;
    }
    onCollisionStart(self, other) {
        if (other.owner instanceof Player) {
            console.log("Goal reached by player!");
  
            const ui= this.scene.ui;
             console.log("ui gevonden:", ui);          // check dit
        console.log("huidige score:", ui?.score); 
            if(ui){
                ui.saveHighscore();
            }

            this.engine.goToScene("winscene");
            
        }
    }
}