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
    }
    create() {
        this.cubix = this.physics.add.image(100, 100, 'cubix');
        this.evil_cubix = this.add.image(300, 100, 'cubix_fondo');
        this.physics.add.existing(this.evil_cubix);

        this.cubix.body.maxVelocity.x = 500;
        this.cubix.body.setMass(1);

        this.cubix.body.setCircle(40);
        this.cubix.body.setBounce(0.2);

        this.evil_cubix.body.setMass(1);
        this.evil_cubix.body.setSize(30, 30);
        this.evil_cubix.body.setOffset(30, 50);

        this.cubix.body.setCollideWorldBounds(true);
        this.evil_cubix.body.setCollideWorldBounds(true);

        this.cursor = this.input.keyboard.createCursorKeys();
        
        this.cursor.right.on('down', () => {
            this.cubix.body.setAcceleration(800);
        });

        this.cursor.up.on('down', () => {
            this.evil_cubix.body.setVelocityY(-400);
        });
        
        this.physics.add.collider(this.cubix, this.evil_cubix, () => {
            this.cubix.body.setVelocity(0);
            this.cubix.body.setAcceleration(0);
        });

    }
    update(time, delta) {
       
    }
}

export default Bootloader;