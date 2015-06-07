var gameFacade = null;
var phaser = new Phaser.Game(
    947,
    631,
    Phaser.AUTO, 
    'mainContent',
    {
        preload: function() {
            
            //phaser.stage.backgroundColor = "#99cc33";
            phaser.load.image('enemy', 'assets/enemy.png');
            phaser.load.image('pixel', 'assets/pixel.png');
            phaser.load.image('laser', 'assets/laser.png'); //Disparar
            phaser.load.spritesheet('player', 'assets/CorrerSlug.png', 51, 53);
            phaser.load.tilemap('casa', 'assets/TiledMetalSlug.json', null, Phaser.Tilemap.TILED_JSON);
            phaser.load.image('background', 'assets/Casa.png');            
            phaser.load.image('Muro', 'assets/tileset.png');
            
            
            
        },
        
        create: function() {
            phaser.state.add('menu', MenuState);
            //gameFacade = new GameFacade();
            phaser.state.add('game', gameFacade);
            phaser.state.start('menu');
            
            //Tecles per disparar
            teclaDR1 = phaser.input.keyboard.addKey(Phaser.Keyboard.M); //Dreta
            teclaDL1 = phaser.input.keyboard.addKey(Phaser.Keyboard.N); //Esquerra
        },
        
        update: function() {
            if(gameFacade) {
                gameFacade.update();
            }
        }
    }
);