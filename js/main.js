var AngryCoders = AngryCoders || {};

AngryCoders.game = new Phaser.Game(1080,640,Phaser.AUTO);


AngryCoders.game.state.add('Boot',AngryCoders.BootState);
AngryCoders.game.state.add('Preload',AngryCoders.PreloadState);
AngryCoders.game.state.add('Game',AngryCoders.GameState);
AngryCoders.game.state.start('Boot');