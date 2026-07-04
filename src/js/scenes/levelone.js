import { Scene } from "excalibur";
import { Actor, Engine, Vector, DisplayMode, SolverStrategy, Axis } from "excalibur"
import { UI } from "./ui";
import { Player } from "../player";
import { Resources } from "../resources";
import { Background } from "../background";
import { Enemy } from "../enemy";
import { Platform } from "../platform";
import { Coin } from "../coin";
import { Goal } from "../goal";

export class levelOne extends Scene {
    ui;
    onInitialize(engine) {
        this.ui = new UI()
        this.add(this.ui)

        const player = new Player(768, 550);
        this.add(player);
        const background = new Background(0);
        this.add(background);
        const background1 = new Background(1536);
        this.add(background1);
        this.camera.strategy.lockToActorAxis(player, Axis.X);

        const background2 = new Background(3072);
        this.add(background2);

        const platform = new Platform(600, 600);
        this.add(platform);

        const enemy = new Enemy(600,550);
        this.add(enemy);

        const coin = new Coin(300,500);
        this.add(coin);

        const goal = new Goal(1200, 640);
        this.add(goal);
    }


    
}