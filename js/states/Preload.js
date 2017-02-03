var AngryCoders = AngryCoders || {};

AngryCoders.PreloadState = {
    
        preload:function(){
           
           
            this.gameMidX = this.game.world.centerX;
            this.gameMidY = this.game.world.centerY;
             
            ///Add Sky
            this.game.stage.backgroundColor = SkyColor;
            
            ///Add Preload bar
            this.addPreloadBar();
          
            ///Create ground
            this.createGround();
            
            ///Add title
            this.addTitle();
            ///Add Entry Mascot and Tween
            this.addMascot();
            
            this.collisionGroup = this.add.group();
            this.collisionGroup.enableBody = true;
            
            //this.collisionGroup.physicsBodyType = Phaser.Physics.P2JS;
            
            this.collisionGroup.add(this.ground);
            this.collisionGroup.add(this.mascot);
            
            this.mascot.body.gravity.y = 0;
            
            ///Preload the assets for Game State
             
            
            
            
            
        },
        create:function(){
            this.t1.destroy();
            this.preloadBar.destroy();
            //console.log("Ready to start the game");
            
            this.playButton = this.game.add.button(this.game.world.centerX,this.game.world.centerY+80,'play',this.startGame,this);
            this.playButton.anchor.setTo(.5);
            this.playButton.scale.setTo(.5);
            
        },
        update:function(){
        this.physics.arcade.collide(this.mascot,this.ground);  
            
        },
        
        startGame:function(){
            
            var level = Math.floor(Math.random()*5);
            level = 'level'+level;
            this.game.state.start('Game',true,false,level);
            //alert("Starting Game");
        },
    
    
        ///Helper Functions
        addMascot:function(){
            
            this.mascot=this.add.sprite(w-250,h-300,'mascot');
            this.mascot.scale.setTo(.5);
            
           /*
	        var entryTween = this.game.add.tween(this.mascot);

            entryTween.to({y:h-this.mascot.height-100},1000,Phaser.Easing.Bounce.Out, true);
            entryTween.start();
            */
        
        },
        addTitle:function(){
            this.title = this.game.add.bitmapText(this.gameMidX,this.gameMidY-200,'carrier_command',"Happy\n\n Coders",40);
            this.title.anchor.setTo(.5);
        },
        addPreloadBar:function(){
            
            this.preloadBar = this.add.sprite(this.gameMidX,this.gameMidY,'bar');
            
            
            this.preloadBar.anchor.setTo(0.5);
            this.preloadBar.scale.setTo(500,2);
            
            ///Set the preload sprite on this.load object
            this.load.setPreloadSprite(this.preloadBar);
            this.t1 = this.add.text(this.gameMidX,this.gameMidY+20,"Loading...");
            
            this.t1.anchor.setTo(.5);
            
        },
        createGround:function(){
              this.ground = this.add.tileSprite(0,h-54,4*w,216,'tile');
                this.ground.scale.setTo(.25); 
        }
    
        
        
    
    
    
};