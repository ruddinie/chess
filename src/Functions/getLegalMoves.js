import pawn from './moovable/pawn'
import bishop from './moovable/bishop'
import rook from './moovable/rook'
import queen from './moovable/queen'
import knight from './moovable/knight'
import king from './moovable/king'
import validateMove from './validateMove'

export default function getLegalMoves(gameState, setgameState, playerState, setplayerState) {
    // console.log('cheguei aqui');
    let moves = [];

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if(
                (gameState.turn && gameState.piecePosition[i][j]!= "" && gameState.piecePosition[i][j] < {})||
                (!gameState.turn && gameState.piecePosition[i][j]!= "" && gameState.piecePosition[i][j] > {})
            )moves= [...moves, String.fromCharCode(65+j)+(8-i)]

        }
    }

    moves.forEach(item => {
        let moveSet =[]
        // console.log(8-item[1], item.charCodeAt(0)-65, gameState.piecePosition[8-item[1]][item.charCodeAt(0)-65])
        switch (gameState.piecePosition[8-item[1]][item.charCodeAt(0)-65].toUpperCase()) {
            case 'B': moveSet = (bishop(gameState.piecePosition, 8-item[1], item.charCodeAt(0)-65)); break;
            case 'R': moveSet = (rook(gameState.piecePosition, 8-item[1], item.charCodeAt(0)-65)); break;
            case 'N': moveSet = (knight(gameState.piecePosition, 8-item[1], item.charCodeAt(0)-65)); break;
            case 'Q': moveSet = (queen(gameState.piecePosition, 8-item[1], item.charCodeAt(0)-65)); break;
            case 'K': moveSet = (king(gameState.piecePosition, 8-item[1], item.charCodeAt(0)-65, gameState.castle, gameState.whiteCheck, gameState.blackCheck)); break;
            case 'P': moveSet = (pawn(gameState.piecePosition, 8-item[1], item.charCodeAt(0)-65, gameState.enPassant)); break;
        }
        // console.log(moveSet);
 
        moves = [
            ...moves,
            {
                piece: gameState.piecePosition[8-item[1]][item.charCodeAt(0)-65],
                tile: item,
                possibleMoves: moveSet
            }
        ]
        moves.shift();
    });

    moves.forEach(item => {
        item.possibleMoves.forEach((move, index, object) => {
            // console.log(item.tile, move)
            if(!validateMove(gameState.piecePosition, item.piece, item.tile, move, gameState.turn, gameState.castle, gameState.enPassant, gameState.whiteCheck, gameState.blackCheck)){
                object[index] = ""
            }
            
        });
        item.possibleMoves = item.possibleMoves.filter(Boolean);
    })
    // console.log(moves)

    setplayerState({
        ...playerState,
        legalMoves: moves
    })



}
