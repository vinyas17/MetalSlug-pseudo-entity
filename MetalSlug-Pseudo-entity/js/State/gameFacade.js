var GameFacade = function() {
    //var mMenu = null;
    var mSelf = this;
    var mWorld = null;
    var mPlayer = null;
    var mEnemies = null;
    var mLaser = null;
    var mScore = null;
    
    this.create = function() {
        enablePhysics();
        
        //mMenu = new MainMenu();
        mWorld = new World();
        mPlayer = new Player(mWorld.getPhysicsReference());
        mEnemies = new Enemies(mWorld.getPhysicsReference(), mPlayer.getPhysicsReference());
        mLaser = new Disparar(mWorld.getPhysicsReference(), mPlayer.getPhysicsReference(), mEnemies.getPhysicsReference());
        mScore = new Score(/*mEnemies.getPhysicsReference()*/);
        
        mPlayer.registerListener(mSelf);
        
       
    };

    
    this.update = function() {
        //mMenu.update();
        mLaser.update();
        mEnemies.update();
        mPlayer.update();
        mScore.update();
        

    };
    
    /*this.killEnemy = function() {
        mScore.killEnemy();
    };*/
    
    var enablePhysics = function() {
        phaser.physics.startSystem(Phaser.Physics.ARCADE);
    };
   
    
};
    