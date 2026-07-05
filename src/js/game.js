import '../css/style.css'
import { Engine, Vector, DisplayMode, SolverStrategy} from "excalibur"
import {  ResourceLoader } from './resources.js'
import { Player } from './player.js'
// import { Background } from './background.js'
// import { Enemy } from './enemy.js'
// import { UI } from './scenes/ui.js'
import { levelOne } from './scenes/levelone.js'
import { Gameover } from './scenes/gameover.js'
import { Winscene } from './scenes/winscene.js'
import { Startscene } from './scenes/startscene.js'


export class Game extends Engine {

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
        this.addScene("startscene", new Startscene());
        this.addScene("levelone", new levelOne());
        this.addScene("gameover", new Gameover());
        this.addScene("winscene", new Winscene());
        this.goToScene("startscene");
       
    }
}
new Game()
