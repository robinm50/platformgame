import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, SolverStrategy, Axis } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Player } from './player.js'
import { Background } from './background.js'
import { Enemy } from './enemy.js'

export class Game extends Engine {

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen,
            physics: {
                solver: SolverStrategy.realistic,
                 gravity: new Vector(0, 1000),
              
            }
        });

        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        const player = new Player();
        this.add(player);

        const background = new Background(0);
        this.add(background);
        this.currentScene.camera.strategy.lockToActorAxis(player, Axis.X);

        // const background2 = new Background(1280);
        // this.add(background2);

        const enemy = new Enemy();
        this.add(enemy);
    }
}
new Game()
