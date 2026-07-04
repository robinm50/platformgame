import { Color, Font, Keys, Label, Scene, Vector } from "excalibur";

export class Startscene extends Scene {
    onInitialize(engine) {
        const startLabel = new Label({
            text: "Druk op ENTER om te beginnen",
            x: engine.drawWidth / 2,
            y: engine.drawHeight / 2 + 60,
            font: new Font({ size: 20, color: Color.White, family: 'sans-serif' })
        });
        startLabel.anchor = new Vector(0.5, 0.5);
        this.add(startLabel);
    }
    onPreUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Keys.Enter)) {

            engine.goToScene('levelone');
        }
    }
}