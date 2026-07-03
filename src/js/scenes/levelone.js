import { Scene } from "excalibur";
import { Actor, Engine, Vector, DisplayMode, SolverStrategy, Axis } from "excalibur"
import { UI } from "./ui";
import { Player } from "../player";
import { Resources } from "../resources";
import { Background } from "../background";
import { Enemy } from "../enemy";
import { Platform } from "../platform";
import { Coin } from "../coin";

export class levelOne extends Scene {
    ui;
    onInitialize(engine) {
        this.ui = new UI()
        this.add(this.ui)

        const player = new Player(-400, 550);
        this.add(player);
        const background = new Background(-2286);
        this.add(background);
        const background1 = new Background(-750);
        this.add(background1);
        this.camera.strategy.lockToActorAxis(player, Axis.X);

        const background2 = new Background(786);
        this.add(background2);

        const platform = new Platform(300, 600);
        this.add(platform);

        const enemy = new Enemy(100,550);
        this.add(enemy);

        const coin = new Coin(0,500);
        this.add(coin);
    }


    startGame() {

    }
}