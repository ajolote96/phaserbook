import Bootloader from './scenes/Bootloader.js';
import SceneA from './scenes/SceneA.js';
import SceneB from './scenes/SceneB.js';


const config = {
    title: 'Curso Phaser',
    url: 'http://google.es',
    version: '0.0.1',

    type: Phaser.AUTO,
    width: 640,
    height: 360,
    parent: 'contenedor',
    pixelArt: true,
    backgroundColor: '#34495e',

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

    scene: [Bootloader, SceneA, SceneB]
};

const game = new Phaser.Game(config);