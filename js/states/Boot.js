var AngryCoders = AngryCoders || {};
SkyColor = "8bd9ff";
WhiteColor = "#fff"


AngryCoders.BootState = {

    init:function(){
        //Set the background Color
        this.game.stage.backgroundColor = WhiteColor;
        //Set the scaling options
       //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        //physics engine P2JS
        this.game.physics.startSystem(Phaser.Physics.P2JS);

    },
    preload:function(){
        //Load assets for the loading screen.
        this.load.image('bar','assets/images/bar.png');
        this.load.image('floor','assets/images/floor.png');
        this.load.image('mascot','assets/images/mascot.png');
        this.load.image('tile','assets/images/brown_rock_c.png');
        this.load.image('play','assets/images/play.png');

        this.load.image('sky','assets/images/sky.png');
        //this.load.image('mountain','assets/images/mountain.png');

        this.load.bitmapFont('carrier_command', 'assets/bitmapFonts/carrier_command_b.png', 'assets/bitmapFonts/carrier_command.xml');

        this.load.bitmapFont('shortStack', 'assets/bitmapFonts/shortStack.png', 'assets/bitmapFonts/shortStack.xml');

        //Game Assets Load
        this.load.image('greentile','assets/images/green_rock_c.png');
    },
    create:function(){
        this.state.start('Preload');

    },



};
