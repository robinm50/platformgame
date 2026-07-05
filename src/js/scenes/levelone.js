import { BoundingBox, Scene } from "excalibur";
import { Vector } from "excalibur"
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
        this.camera.strategy.lockToActor(this.player);
        this.camera.strategy.limitCameraBounds(
            new BoundingBox(0, -100, 4570, 720)
        );
        
        this.add(new Background(0));
        this.add(new Background(1536));
        this.add(new Background(3072));



        this.add(new Platform(600, 450));
        this.add(new Platform(1100, 300));
        this.add(new Platform(1550, 450));
        this.add(new Platform(2130, 450));
        this.add(new Platform(2400, 200));
        this.add(new Platform(3500, 450));

        this.addEnemy(550, 400, 450, 900);
        this.addEnemy(900, 600, 800, 1600);
        this.addEnemy(1000, 250, 1000, 1250);
        this.addEnemy(1000, 250, 1000, 1800);
        this.addEnemy(1900, 600, 2000, 2300);
        setTimeout(() => this.addEnemy(2300, 0, 2000, 2600), 4000);
        this.addEnemy(2500, 600, 2300, 3350);
        this.addEnemy(2000, 600, 2300, 3350);
        this.addEnemy(3500, 600, 3350, 3650);

        this.addCoin(700, 400);
        this.addCoin(900, 550);
        this.addCoin(1000, 200);
        this.addCoin(1500, 400);
        this.addCoin(1500, 600);
        this.addCoin(2000, 600);
        this.addCoin(2300, 100);
        this.addCoin(2500, 600);
        this.addCoin(2700, 600);
        this.addCoin(3000, 600);
        this.addCoin(3400, 300);
        this.addCoin(3550, 600);

        const goal = new Goal(3950, 640);
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