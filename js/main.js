//var w = .7*window.innerWidth;
//var h = window.innerHeight;
var w = 800;
var h = 600;

var AngryCoders = AngryCoders || {};

AngryCoders.game = new Phaser.Game(w,h,Phaser.AUTO,'gamediv');
AngryCoders.game.state.add('Boot',AngryCoders.BootState);
AngryCoders.game.state.add('Preload',AngryCoders.PreloadState);
AngryCoders.game.state.add('Game',AngryCoders.GameState);

var level = Math.floor(Math.random()*5);
AngryCoders.game.state.start('Boot');