var AngryCoders = AngryCoders || {};

AngryCoders.GameState ={
  
    init:function(level){
        
        //Set the current level to 1 if not defined.
        this.currentLevel = level ? level:'level1';
        
        //Gravity
        this.physics.p2.gravity.y = 1000;
        //this.physics.arcade.gravity.y = 1000;
        
        this.blocksCG = this.physics.p2.createCollisionGroup();
        
        this.enemiesCG =
        this.physics.p2.createCollisionGroup();
        
        this.playerCG =
        this.physics.p2.createCollisionGroup();   
       // this.world.setBounds(0,0,1000,800);
        
        
    },
    preload:function(){
        console.log('Loading game assets');
        this.load.image('ball','assets/images/ballbird.png');
        this.load.image('floor','assets/images/floor.png');
        this.load.image('block','assets/images/block_cb.png'); 
        
        
        this.load.image('box', 'assets/images/box.png');    
        this.load.image('pig', 'assets/images/pig.png');
        this.load.image('pole', 'assets/images/pole.png');
        this.load.image('chicken', 'assets/images/bird.png');
        this.load.image('concreteBox', 'assets/images/concrete-box.png');
        this.load.image('sky', 'assets/images/sky.png');
        this.load.text('level1','assets/leveldata/level1.json');
         this.load.spritesheet('player', 'assets/images/android_spritesheet.png', 80, 100, 5);    
    },
    
    create:function(){
        
        /*
        for( x in this){
            console.log(x);
        }*/
        console.log(this.world.width);
        console.log(this.world.height);
        
        
        
        
        ///Add a group , add body and enable P2Physics
        this.blocks = this.add.group();
        this.blocks.enableBody = true;
        this.blocks.physicsBodyType = Phaser.Physics.P2JS;
        
      
        this.player = this.add.sprite(10,this.world.height-250,'player',1);
        
         this.player.animations.add('walking', [1, 0, 2, 3,4,3,2], 8, false);
        this.player.scale.setTo(2);
        //this.player.animations.play('walking');
        //this.player.animations.stop();
        //this.player.frame = 3;

        
        this.ball = this.add.sprite(150,101,'ball');
        this.blocks.add(this.ball);
       
        
        
        this.ball.body.setCollisionGroup(this.playerCG); this.ball.body.collides([this.blocksCG]);
        this.ball.scale.setTo(.75);
        this.ball.body.mass = 1;
        
        this.floor = this.add.tileSprite(this.world.width/2,this.world.height-24,this.world.width,48,'floor');
        this.blocks.add(this.floor);
       this.floor.body.setCollisionGroup(this.blocksCG);
        this.floor.body.collides([this.blocksCG,this.playerCG,this.enemiesCG]);
        
        this.floor.body.static = true;
        
        //Load leveldata
        this.loadLevel();
        
        this.game.camera.follow(this.ball);
        this.world.setBounds(0,0,1000,800);
    },
    update:function(){
        
           
    },
    
    setBallWeight:function(m){
        this.ball.body.mass = m;
    },
    jump:function(){
        this.ball.body.velocity.x = 400;
        this.ball.body.velocity.y = 00;
        
        
    },
    throwBall:function(v,angle){
        
        this.ball.body.velocity.x =
        v*Math.cos((angle*Math.PI)/180.0);
        
        this.ball.body.velocity.y=-v*Math.sin((angle*Math.PI)/180.0);
        //console.log("In throw ball "+xv+ xy);
    },
    
    render:function(){
        this.game.debug.spriteInfo(this.ball);
        /*
        this.game.debug.spriteInfo(this.ball);
        this.game.debug.pointer(this.game.input.activePointer );
        */
    },
    loadLevel:function(){
        this.levelData = JSON.parse(this.cache.getText('level1'));
        
        this.levelData.blocks.forEach(function(element){
            this.createBlock(element);
        },this);
        
    },
    createBlock:function(blockData){
        console.log("here");
        var block = new Phaser.Sprite(this.game,blockData.x,blockData.y-400,blockData.asset);
        this.blocks.add(block);
        
        block.body.mass = blockData.mass;
        block.body.setCollisionGroup(this.blocksCG);
        block.body.collides([this.blocksCG,this.playerCG,this.enemiesCG]);
        return block;
    },
    
};
function setMass(m){
    AngryCoders.GameState.ball.body.mass= m;
}



function kickBall(v,theta){
    AngryCoders.GameState.throwBall(v,theta);
    AngryCoders.GameState.player.animations.play('walking');
    
}
function resetBall(){
    AngryCoders.GameState.ball.position.x = 150;
}
function resetGame(){
    AngryCoders.game.state.start('Game');
}