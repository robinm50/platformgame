import { Actor, Color, Font, FontUnit, Label, Scene } from "excalibur";

export class Gameover extends Scene {
    onInitialize(engine) {
        const gameOverText = new Label({
            text: "Game Over",
            x: engine.halfDrawWidth,
            y: engine.halfDrawHeight,
            color: Color.White,
            font: new Font({
                size: 48,
                family: "sans-serif"
            })
        });
        this.add(gameOverText);
    }
}