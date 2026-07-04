import { BoundingBox, Scene } from "excalibur";
import {  Vector } from "excalibur"
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
    enemies = [];
    coins = [];
    onInitialize(engine) {
        this.ui = new UI()
        this.add(this.ui)

        this.player = new Player(300, 550);
        this.add(this.player);
        // this.camera.strategy.lockToActorAxis(this.player, Axis.X);
        this.camera.strategy.lockToActor(this.player);
        this.camera.strategy.limitCameraBounds(
            new BoundingBox(0, -100, 4570, 720)
        );
        this.add(new Background(0));
        this.add(new Background(1536));
        this.add(new Background(3072));



        this.add(new Platform(600, 450));
        this.add(new Platform(1100, 300));
          this.add(new Platform(1500, 450));


        this.addEnemy(500, 400, 400, 900);
        this.addEnemy(900, 600, 800, 1600);

        this.addCoin(700, 400);
        this.addCoin(600,400);
        this.addCoin(800,400);


        const goal = new Goal(2000, 640);
        this.add(goal);

    }

    addEnemy(x, y, minX, maxX) {
        const enemy = new Enemy(x, y, minX, maxX);
        this.add(enemy);
        this.enemies.push(enemy);

    }

    addCoin(x, y) {
        const coin = new Coin(x, y);
        this.add(coin);
        this.coins.push(coin);
    }

    onActivate(engine) {
        this.ui.resetlevel();
        this.player.reset();
        for (const enemy of this.enemies) {
            enemy.reset(this);
        }
        for (const coin of this.coins) {
            coin.reset(this);
        }

    }


}