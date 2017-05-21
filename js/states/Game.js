debug = false;
var AngryCoders = AngryCoders || {};

AngryCoders.worldWidth = 2000;
AngryCoders.worldHeight = 600;

AngryCoders.GameState = {

    init: function (level, chances) {


        //Set the current level to 1 if not defined.

        var level_no = 0;


        this.currentLevel = level ? level : 'level' + level_no;

        console.log(this.currentLevel);

        this.nextLevel = 'level' + (level_no + 1) % 5;
        console.log("Level gen" + this.nextLevel);


        //Gravity
        this.physics.p2.gravity.y = 1000;
        //this.physics.arcade.gravity.y = 1000;
        this.chances = this.chances ? chances : 3;

        //Adding blocksCG, enemiesCG and playerCG to the createCollisionGroup()

        this.blocksCG = this.physics.p2.createCollisionGroup();

        this.enemiesCG = this.physics.p2.createCollisionGroup();

        this.playerCG =  this.physics. p2.createCollisionGroup();

        this.world.setBounds(0, 0, AngryCoders.worldWidth, AngryCoders.worldHeight);

        this.textStyle = {font: "25px Arial", fill: "#ff0044"};

        // sets the position of the text Chances
        this.livesText = this.add.text(10, 10, 'Chances :' + this.chances, this.textStyle);

        // sets the position of the text Distance and Height

        this.distanceText = this.add.text(600, 10, "Distance:  \n Height: ", this.textStyle);

        //sticking game UI to the camera that scrolls as it moves around the world.

        this.distanceText.fixedToCamera = true;


        this.livesText.fixedToCamera = true;


    },
    preload: function () {
        console.log('Loading game assets');

        //Loading all the necessary resources to the game, i.e, images, json etc

        this.load.image('ball', 'assets/images/ballbird.png');
        this.load.image('floor', 'assets/images/floor.png');
        this.load.image('block', 'assets/images/block_cb.png');


        this.load.image('box', 'assets/images/box.png');
        this.load.image('pig', 'assets/images/pig.png');
        this.load.image('pole', 'assets/images/pole.png');
        this.load.image('chicken', 'assets/images/bird.png');
        this.load.image('concreteBox', 'assets/images/concrete-box.png');
        this.load.image('sky', 'assets/images/sky.png');
        this.load.text('level0', 'assets/leveldata/level0.json');
        this.load.text('level1', 'assets/leveldata/level1.json');
        this.load.text('level2', 'assets/leveldata/level2.json');
        this.load.text('level3', 'assets/leveldata/level3.json');
        this.load.text('level4', 'assets/leveldata/level4.json');

        this.load.spritesheet('player', 'assets/images/android_spritesheet.png', 80, 100, 5);

        this.load.image('topbox', 'assets/images/topblock.png');

        this.load.image('nextBtn', 'assets/images/btn_next.png')
    },


    create: function () {





        ///Add a group , add body and enable P2Physics
        this.blocks = this.add.group();
        var top = this.blocks.children[0];
        this.blocks.enableBody = true;
        this.blocks.physicsBodyType = Phaser.Physics.P2JS;


        this.player = this.add.sprite(10, this.world.height - 250, 'player', 1);

        this.player.animations.add('walking', [1, 0, 2, 3, 4, 3, 2], 8, false);
        this.player.scale.setTo(2);
        //this.player.animations.play('walking');
        //this.player.animations.stop();
        //this.player.frame = 3;


        this.ball = this.add.sprite(150, 101, 'ball');
        this.blocks.add(this.ball);

        /*
         this.button = this.add.button(this.world.width - 95, this.world.height-90, 'nextBtn', this.changeLevel, this);
         this.button.fixedToCamera = true;
         */

        this.ball.body.setCollisionGroup(this.playerCG);
        this.ball.body.collides([this.blocksCG]);
        this.ball.scale.setTo(.75);
        this.ball.body.mass = 1;


        this.floor = this.add.tileSprite(this.world.width / 2 - 600, this.world.height - 24, 800, 48, 'floor');
        this.blocks.add(this.floor);
        this.floor.body.setCollisionGroup(this.blocksCG);
        this.floor.body.collides([this.blocksCG, this.playerCG, this.enemiesCG]);

        this.floor.body.static = true;

        //Load leveldata
        this.loadLevel();

        this.game.camera.follow(this.ball);
        this.world.setBounds(0, 0, AngryCoders.worldWidth, AngryCoders.world);
    },
    update: function () {
        if (this.chances == 0) {
            alert("Game Over");
            resetGame(3);
        }
        // avoiding infinite fall
        else if (this.ball.position.y>1800) {
            this.chances-1;
            resetGame(this.chances-1);
        }
        //Even if both ball and the top box falls infinitely, you win
        else if(this.ball.position.y>1800 && this.blocks.children[this.blocks.length-1].position.y>1800 ){
              alert("You win");
              nextLevel();
        }
        //checking for any other blocks has been hit by the ball or not!
        for(i=1;i<this.blocks.length-1;i++ ){
            if(this.blocks.children[i].position.y == this.blocks.children[0].position.y ){
              //the base height of base block to any blocks, boundary condition.
              //alert("true");
              this.chances-1;
              resetGame(this.chances-1);
            }
            else if (this.blocks.children[0].position.y === this.blocks.children[this.blocks.length-1].position.y || this.blocks.children[this.blocks.length-1].position.y>1800 ) {
              alert("You win");
              nextLevel();
            }
        }
    },



    setBallWeight: function (m) {
        this.ball.body.mass = m;
    },
    jump: function () {
        this.ball.body.velocity.x = 400;
        this.ball.body.velocity.y = 0;


    },
    throwBall: function (v, angle) {

        this.ball.body.velocity.x =
            v * Math.cos((angle * Math.PI) / 180.0);

        this.ball.body.velocity.y = -v * Math.sin((angle * Math.PI) / 180.0);
        //console.log("In throw ball "+xv+ xy);
        this.livesText.setText("Chances :" + this.chances);
    },

    render: function () {
        if (debug == true) {
            this.game.debug.spriteInfo(this.ball);
        }
        /*
         this.game.debug.spriteInfo(this.ball);
         this.game.debug.pointer(this.game.input.activePointer );
         */
    },
    loadLevel: function () {
        this.levelData = JSON.parse(this.cache.getText(this.currentLevel));

        var numBlocks = 0;
        this.range = 0;
        this.levelData.blocks.forEach(function (element) {
            this.createBlock(element);
            this.range = element.x - this.ball.x;
            numBlocks++;
        }, this);

        this.height = numBlocks * 50;

        this.distanceText.setText("Distance: " + this.range + "\n Height :" + this.height, this.textStyle);
        console.log(this.height + "," + this.range);
        var code = editor.getValue();
        code = code.split("velocity = getVelocity(");
        var i = code[1].indexOf(")");
        code[1] = code[1].slice(i);
        code = code[0] + "velocity = getVelocity(" + this.height + "," + this.range + code[1];
        code = code.split("angle = getAngle(");
        i = code[1].indexOf(")");
        code[1] = code[1].slice(i);
        code = code[0] + "angle = getAngle(" + this.height + "," + this.range + code[1];
        editor.setValue(code, 1);
    },
    createBlock: function (blockData) {
        y = this.world.height / 2;
        var block = new Phaser.Sprite(this.game, blockData.x, blockData.y, blockData.asset);
        this.blocks.add(block);


        block.body.mass = blockData.mass;
        block.body.setCollisionGroup(this.blocksCG);
        block.body.collides([this.blocksCG, this.playerCG, this.enemiesCG]);
        return block;
    },

};
function setMass(m) {
    AngryCoders.GameState.ball.body.mass = m;
}


function kickBall(v, theta) {
    AngryCoders.GameState.throwBall(v, theta);
    AngryCoders.GameState.player.animations.play('walking');


}
function resetBall() {
    AngryCoders.GameState.ball.position.x = 150;
}
function resetGame(c) {
    var chances;
    if (c == undefined) {
        chances = AngryCoders.GameState.chances - 1;
    }
    else {
        chances = c;
    }

    var level = AngryCoders.GameState.currentLevel;
    AngryCoders.game.state.start('Game', true, false, level, chances);

}

function nextLevel() {
    AngryCoders.game.state.start('Game', true, false, AngryCoders.GameState.nextLevel, 3);

}

function sin(deg) {
    return Math.sin(deg * (Math.PI) / 180);
}
function cos(deg) {
    return Math.cos((deg * Math.PI) / 180);
}
function tan(deg) {
    return Math.tan(deg * Math.PI / 180);
}
function sqrt(n) {
    return Math.sqrt(n);
}
