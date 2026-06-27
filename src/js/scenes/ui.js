import { Actor, Color, Font, FontUnit, Label, ScreenElement, Text, Vector } from "excalibur";
import { Resources } from "../resources";

export class UI extends ScreenElement {

    onInitialize(engine) {
        const scoreLabel = new Label({
            text: 'Score: 0',
            x: 1150, // Horizontale positie
            y: 50,  // Verticale positie
            font: new Font({
                size: 24, // Lettergrootte in pixels
                color: Color.White,
                family: 'sans-serif'
            })
        })
        this.addChild(scoreLabel)
        for (let i = 0; i < 3; i++) {
            const heart = new Actor()
            heart.scale = new Vector(0.1, 0.1);
            heart.graphics.use(Resources.heart.toSprite())
            heart.pos = new Vector(60 + (i * 70), 70)
            this.addChild(heart)
        
        }
    }
}