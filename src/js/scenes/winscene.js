import { Color, Font, Keys, Label, Scene, Vector, Keyboard } from "excalibur";
export class Winscene extends Scene {
    onInitialize(engine) {
        const label = new Label({
            text: "You Win!",
            x: engine.drawWidth / 2,
            y: engine.drawHeight / 2,
            font: new Font({ size: 48, color: Color.Green, family: 'sans-serif' })
        });
        label.anchor = new Vector(0.5, 0.5);
        this.add(label);

        const highscore = localStorage.getItem("highscore") || 0;

        const highscoreLabel = new Label({
            text: `Highscore: ${highscore}`,
            x: engine.drawWidth / 2,
            y: engine.drawHeight / 2 + 90,
            font: new Font({ size: 20, color: Color.White, family: 'sans-serif' })
        });
        highscoreLabel.anchor = new Vector(0.5, 0.5);
        this.add(highscoreLabel);

        const score = engine.score ?? 0;
        const scoreLabel = new Label({
            text: `huidige score: ${score}`,
            x: engine.drawWidth / 2,
            y: engine.drawHeight / 2 + 50,
            font: new Font({ size: 20, color: Color.White, family: 'sans-serif' })
        });
        scoreLabel.anchor = new Vector(0.5, 0.5);
        this.add(scoreLabel);

        const restartLabel = new Label({
            text: "Druk op ENTER om opnieuw te spelen",
            x: engine.drawWidth / 2,
            y: engine.drawHeight / 2 + 130,
            font: new Font({ size: 20, color: Color.White, family: 'sans-serif' })
        });
        restartLabel.anchor = new Vector(0.5, 0.5);
        this.add(restartLabel);
    }


    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Keys.Enter)) {

            engine.goToScene('levelone');
        }
    }

}