class Bootloader extends Phaser.Scene {
    constructor() {
        super({
            key: 'Bootloader'
        });
    }

    preload() {
        this.load.setPath('./assets/');

        this.load.image('bomb');
        this.load.image('life');
        this.load.image('tomato_item')
    }

    create() {
        this.add.image(10, 10, 'bomb').setOrigin(0);
        const tomato_item = this.add.image(60, 60, 'tomato_item');
        const life = this.add.image(200, 200, 'life');

        this.cameras.main
            .setViewport(0, 0, 100, 100)
            // .setSize(50, 50)
            .setBackgroundColor(0x00ff00);

        // FadeIn
        const camera1 = this.cameras.add(100, 0, 100, 100)
            .setBackgroundColor(0xff0000)
            .fadeIn(2000)
            .setZoom(2);
            camera1.scrollX = -20;
            camera1.scrollY = -20;
        camera1.on(Phaser.Cameras.Scene2D.Events.FADE_IN_COMPLETE, () => {
            console.log('Se ha finalizado el FADEIN');
        });

        // FadeOut
        const camera2 = this.cameras.add(200, 0, 100, 100)
            .setBackgroundColor(0xff0000)
            .fadeOut(2000);
            camera2.on(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
                this.cameras.remove(camera2);
            });

        // flash
        const camera3 = this.cameras.add(300, 0, 100, 100)
            .setBackgroundColor(0xfff00f)
            .flash(2000)
            .setRotation(90)

        // shake 
        const camera4 = this.cameras.add(0, 100, 100, 100);
        camera4.setBackgroundColor(0x00fff0)
        .shake(2000, .03);

        // Centro
        const camera5 = this.cameras.add(100, 100, 100, 100)
            .setBackgroundColor(0xff0055);
        setTimeout(() => {
            // camera5.centerOn(life.x, life.y);
            camera5.centerOnX(life.x);
            camera5.centerOnY(life.y);
        }, 2000);

        const camera6 = this.cameras.add(200, 100, 100, 100)
            .setBackgroundColor(0x5500ff);
        setTimeout(() => {
            camera6.pan(life.x, life.y, 3000, 'Sine.easeInOut');
        }, 2000);

        camera6.on(Phaser.Cameras.Scene2D.Events.PAN_COMPLETE, () => {
            camera6.zoomTo(3, 1000, 'Sine.easeInOut');
        });

        const camera7 = this.cameras.add(300, 100, 100, 100)
            .setBackgroundColor(0xfff0ff)
            .ignore(tomato_item);
    }
}
export default Bootloader;