class Game{
    constructor(){
        console.log("Hi");
    }

    getGameState(){
        var gameReference = database.ref('gameState');
        gameReference.on('value',function(data){
            gameState = data.val();
        });
    }

    updateGameState(state){
        var ref = database.ref('/');
        ref.update({
            gameState:state
        });
    }

    start(){
        if(gameState === 0){
            form = new Form();
            form.display();
            player = new Player();
            player.getCount();
        }
    }

    play(){
        form.hide();
    }
}