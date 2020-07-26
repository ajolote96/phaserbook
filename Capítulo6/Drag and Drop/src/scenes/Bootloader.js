class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    init() {
        console.log('Scene Bootloader');
    }
    preload() {
        this.load.path = './assets/';
        this.load.image(['cubix', 'cubix_fondo']);
        this.load.image('drop', 'drop.png');
    }
    create() {
        this.cubix = this.add.image(100, 100, 'cubix').setInteractive();
        this.input.setDraggable(this.cubix);

        this.drop = this.add.image(100, 250, 'drop').setDepth(-1).setInteractive();
        this.drop.input.dropZone = true;

        const eventos = Phaser.Input.Events;

        this.input.on(eventos.DRAG_START, (pointer, obj, dragX, dragY) => {
            obj.setScale(.9);
        });

        this.input.on(eventos.DRAG, (pointer, obj, dragX, dragY) => {
            obj.x = dragX;
            obj.y = dragY;
        });
        this.input.on(eventos.DRAG_END, (pointer, obj, dropzone) => {
            if(!dropzone) {
                obj.x = obj.input.dragStartX;
                obj.y = obj.input.dragStartY;
            }
            obj.setScale(1);
        });

        this.input.on(eventos.DRAG_ENTER, (pointer, obj, dropzone) => {
            dropzone.setTint(0xff0000);
        });
        this.input.on(eventos.DRAG_LEAVE, (pointer, obj, dropzone) => {
            dropzone.clearTint();
        });
        this.input.on(eventos.DROP, (pointer, obj, dropzone) => {
            obj.x = dropzone.x;
            obj.y = dropzone.y;
        });
    }
    update(time, delta) {
       
    }
}

export default Bootloader;