var MainMenu = function() {    
    var addBackground = function() {
        var backgroundImage = phaser.stage.backgroundColor = '#3498db';  
        //backgroundImage.scale.setTo(2,2);
    };
    
     var createStartText = function() {
        var startLabel = phaser.add.text(phaser.world.centerX, phaser.world.height-80, 'press the up arrow key to start', { font: '25px Arial', fill: '#ffffff' });
		startLabel.anchor.setTo(0.5, 0.5);

		phaser.add.tween(startLabel).to({angle: -2}, 500).to({angle:2}, 500).loop().start();   
    };
    
    var attachKeyboardCallback = function() {
        
        var upKey = phaser.input.keyboard.addKey(Phaser.Keyboard.UP);
		upKey.onDown.addOnce(onUpKeyDown, this);
    };
    
    var onUpKeyDown = function() {
        phaser.state.start('game');
    };
    
    (function() {
        addBackground();
        createStartText();
        attachKeyboardCallback();
    })()
};