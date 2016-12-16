var AngryCoders = AngryCoders || {};

AngryCoders.PreloadState = {
    
        preload:function(){
            console.log("In Preload State");
            gameMidX = this.game.world.centerX;
            gameMidY = this.game.world.centerY;
            
            
            this.add.sprite(0,10,'sky').scale.setTo(.5);     
        
            this.preloadBar = this.add.sprite(gameMidX,gameMidY,'bar');
            this.preloadBar.anchor.setTo(0.5);
            this.preloadBar.scale.setTo(500,2);
            this.load.setPreloadSprite(this.preloadBar);
            this.t1 = this.add.text(gameMidX,gameMidY+20,"Loading...");
            this.t1.anchor.setTo(.5);
            
            this.mascot=this.add.sprite(w-250,10,'mascot');
            this.mascot.scale.setTo(.75);
            
           
	        var entryTween = this.game.add.tween(this.mascot);

            entryTween.to({y:h-this.mascot.height-100},1000,Phaser.Easing.Bounce.Out, true);
            
            entryTween.start();
            
            var tiles = this.add.tileSprite(0,h-108,2*w,216,'tile');
            tiles.scale.setTo(.5);
            
            this.title = this.game.add.bitmapText(gameMidX,gameMidY-200,'carrier_command',"Happy\n\n Coders",70);
            this.title.anchor.setTo(.5);
            
            
            
            
        },
        create:function(){
            this.t1.destroy();
            console.log("Ready to start the game");
            
            this.playButton = this.game.add.button(this.game.world.centerX,this.game.world.centerY+80,'play',this.startGame,this);
            this.playButton.anchor.setTo(.5);
            this.playButton.scale.setTo(.75);
            
            this.preloadBar.destroy();
        },
        
        startGame:function(){
            //this.game.state.start('');
            alert("Starting Game");
        }
        
        
    
    
    
};