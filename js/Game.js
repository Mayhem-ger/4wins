class Game {
    constructor() {
        this.players = this.createPlayers();
        this.board = new Board();
        this.ready = false;
    }
    createPlayers(){
        const players=[new Player("Player1", 1, "#e15258", true), new Player("Player2", 2, "#e59a13")]
        return players;
    };

    get activePlayer () {
        return this.players.find(player => player.active)
    }

    startGame(){
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
        
    }

    handleKeydown() {
        
    }

}   
