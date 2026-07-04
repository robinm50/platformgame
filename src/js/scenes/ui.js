import { Actor, Color, Font, Label, ScreenElement, Vector } from "excalibur";
import { Resources } from "../resources";


export class UI extends ScreenElement {

    onInitialize(engine) {
        this.engine = engine;
        this.createUI();
    }
    createUI() {
        this.score = 0;
        this.highscore = Number(localStorage.getItem("highscore")) || 0;

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
        this.engine.score = this.score;
        this.scoreLabel.text = `Score: ${this.score}`;
    }

    saveHighscore() {
        if (this.score > this.highscore) {
            this.highscore = this.score;
            localStorage.setItem("highscore", this.highscore);
        }
    }
    

    loselife() {
        console.log("Player lost a life!");
        const heart = this.hearts.pop();
        heart.kill();
        if (this.hearts.length === 0) {
            this.saveHighscore();
            this.engine.goToScene("gameover");
            // console.log("Game Over!");
        }
    }
    resetlevel() {
        this.hearts.forEach(heart => heart.kill());
        this.hearts = [];
        this.scoreLabel.kill();
        // if (this.highscoreLabel) {
        //     this.highscoreLabel.kill();
        // }
        this.createUI();

    }
}