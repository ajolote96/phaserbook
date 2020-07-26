const config = {
    title: 'Curso Phaser',
    url: 'http://google.es',
    version: '0.0.1',

    type: Phaser.AUTO,
    width: 640,
    height: 360,
    parent: 'contenedor',
    pixelArt: true,

    banner: {
        hidePhaser: false,
        text: '#fff00f',
        background: [
            '#16a085',
            '#2ecc71',
            '#e74c3c',
            '#000000',
        ]
    },

    scene: {}
};

const game = new Phaser.Game(config);