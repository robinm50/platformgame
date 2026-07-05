import { Actor, Color, Font, Keys, Label, Scene, Vector } from "excalibur";

export class Gameover extends Scene {
    onInitialize(engine) {
        const gameOverText = new Label({
            text: "Game Over",
            x: engine.drawWidth/2,
            y: engine.drawHeight/2 ,
            font: new Font({
                size: 72,
                color: Color.White,
                family: "sans-serif"
            })
        });
        gameOverText.anchor = new Vector(0.5, 0.5); 
        this.add(gameOverText);
    
        const score = engine.score ?? 0;
        this.scoreLabel = new Label({
            text: `Huidige score: ${score}`,
            x: engine.drawWidth / 2,
            y: engine.drawHeight / 2 + 60,
            font: new Font({ size: 20, color: Color.White, family: 'sans-serif' })
        });
        this.scoreLabel.anchor = new Vector(0.5, 0.5);
        this.add(this.scoreLabel);

        const highscore = Number(localStorage.getItem("highscore")) || 0;
        this.highscoreLabel = new Label({
            text: `Highscore: ${highscore}`,
            x: engine.drawWidth / 2,
            y: engine.drawHeight / 2 + 100,
            font: new Font({ size: 20, color: Color.White, family: 'sans-serif' })
        });
        this.highscoreLabel.anchor = new Vector(0.5, 0.5);
        this.add(this.highscoreLabel);

        const restartLabel = new Label({
            text: "Druk op ENTER om opnieuw te beginnen",
            x: engine.drawWidth/2,
            y: engine.drawHeight/2 + 140,
            font: new Font({ size: 20, color: Color.White, family: 'sans-serif' })
        });
        restartLabel.anchor = new Vector(0.5, 0.5);
        this.add(restartLabel);
    }
    onActivate(context) {
        const score = context.engine.score ?? 0;
        const highscore = Number(localStorage.getItem("highscore")) || 0;

        this.scoreLabel.text = `Huidige score: ${score}`;
        this.highscoreLabel.text = `Highscore: ${highscore}`;
    }
    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Keys.Enter)) {

            engine.goToScene('levelone');
        }
    }

    
}