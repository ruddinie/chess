


import getKingsPosition from './getKingsPosition'
import getAttackedTiles from './getAttackedTiles'

export default function kingsCheckVerifier(gameState, setgameState) {

    
    //find the kings

    let kingsPosition = getKingsPosition(gameState.piecePosition);

    //get Attacked Tiles

    let attackedTiles = getAttackedTiles(gameState.piecePosition, gameState.castle, gameState.enPassant, gameState.whiteCheck, gameState.blackCheck);

    // console.log(attackedTiles.includes(String.fromCharCode(65+kingsPosition.whiteKing.col)+(8-kingsPosition.whiteKing.row)))
    let whiteCheck = attackedTiles.includes(String.fromCharCode(65+kingsPosition.whiteKing.col)+(8-kingsPosition.whiteKing.row));
    let blackCheck = attackedTiles.includes(String.fromCharCode(65+kingsPosition.blackKing.col)+(8-kingsPosition.blackKing.row))
    
    setgameState({
        ...gameState,
        whiteCheck,
        blackCheck
    })

}
