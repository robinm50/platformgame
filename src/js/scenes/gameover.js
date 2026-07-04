import { Actor, Color, Font, FontUnit, Keys, Label, Scene, Vector } from "excalibur";

export class Gameover extends Scene {
    onInitialize(engine) {
        const gameOverText = new Label({
            text: "Game Over",
            x: engine.DrawWidth/2,
            y: engine.DrawHeight/2,
            color: Color.White,
            font: new Font({
                size: 48,
                family: "sans-serif"
            })
        });
        gameOverText.anchor = new Vector(0.5, 0.5); // Center the label
        this.add(gameOverText);
    
        const restartLabel = new Label({
            text: "Druk op ENTER om opnieuw te beginnen",
            x: engine.drawWidth / 2,
            y: engine.drawHeight / 2 + 60,
            font: new Font({ size: 20, color: Color.White, family: 'sans-serif' })
        });
        restartLabel.anchor = new Vector(0.5, 0.5);
        this.add(restartLabel);
    }
    onActivate(context) {
        const engine = context.engine;
        this.keyHandler = (evt) => {
            if (evt.key === Keys.Enter) {
                engine.goToScene("levelone");
            }
        };
        engine.input.keyboard.on('press', this.keyHandler);
    }

    onDeactivate(context) {
        const engine = context.engine;
        engine.input.keyboard.off('press', this.keyHandler);
    }
}