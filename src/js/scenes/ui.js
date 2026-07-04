import { Actor, Color, Font, FontUnit, Label, ScreenElement, Text, Vector } from "excalibur";
import { Resources } from "../resources";
import{Gameover} from "./gameover";

export class UI extends ScreenElement {
    
    onInitialize(engine) {
          this.engine = engine;
        this.score = 0;
        this.scoreLabel = new Label({
            text: `Score: ${this.score}`,
            x: 1150, // Horizontale positie
            y: 50,  // Verticale positie
            font: new Font({
                size: 24, // Lettergrootte in pixels
                color: Color.White,
                family: 'sans-serif'
            })
        })
        this.addChild(this.scoreLabel)

        this.hearts = [];
        for (let i = 0; i < 3; i++) {
            const heart = new Actor();
            heart.scale = new Vector(0.1, 0.1);
            heart.graphics.use(Resources.heart.toSprite());
            heart.pos = new Vector(60 + (i * 70), 70);
            this.addChild(heart);
            this.hearts.push(heart);

        }
    }
    addScore(amount) {
        this.score += amount;
        this.scoreLabel.text = `Score: ${this.score}`;
    }

    loselife() {
        console.log("Player lost a life!");
        const heart = this.hearts.pop();
        heart.kill();
        if (this.hearts.length === 0) {
            this.engine.goToScene("gameover");
            console.log("Game Over!");
        }
    }
}