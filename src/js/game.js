import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, SolverStrategy, Axis } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Player } from './player.js'
import { Background } from './background.js'
import { Enemy } from './enemy.js'
import { UI } from './scenes/ui.js'
import { levelOne } from './scenes/levelone.js'
import { Gameover } from './scenes/gameover.js'
import { Winscene } from './scenes/winscene.js'

export class Game extends Engine {
ui
    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen,
            physics: {
                solver: SolverStrategy.Realistic,
                gravity: new Vector(0, 1000),

            }
        });

        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.addScene("levelone", new levelOne());
        this.addScene("gameover", new Gameover());
        this.addScene("winscene", new Winscene());
        this.goToScene("levelone");
        // this.ui=new UI()
        // this.add(this.ui)

        // const player = new Player(-100);
        // this.add(player);
        // const background = new Background(-2286);
        // this.add(background);
        // const background1 = new Background(-750);
        // this.add(background1);
        // this.currentScene.camera.strategy.lockToActorAxis(player, Axis.X);

        // const background2 = new Background(786);
        // this.add(background2);

        // const enemy = new Enemy(800);
        // this.add(enemy);

    }
}
new Game()
