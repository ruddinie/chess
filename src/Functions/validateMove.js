import getKingsPosition from './getKingsPosition'

import pawn from './moovable/pawn'
import bishop from './moovable/bishop'
import rook from './moovable/rook'
import queen from './moovable/queen'
import knight from './moovable/knight'
import king from './moovable/king'

export default function validateMove(piecePosition, piece, tile, move, turn, castle, enPassant, whiteCheck, blackCheck) {
    // console.log(piece, tile, move);

    let piecePositionToValidate = [];

    for (var i = 0; i < piecePosition.length; i++){
        piecePositionToValidate[i] = piecePosition[i].slice();
    }

    
    piecePositionToValidate[8-tile[1]][tile.charCodeAt(0)-65] = "";
    piecePositionToValidate[8-move[1]][move.charCodeAt(0)-65] = piece;
    
    
    let attackedTiles = [];

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if(
                (turn && piecePositionToValidate[i][j]!= "" && piecePositionToValidate[i][j] > {})||
                (!turn && piecePositionToValidate[i][j]!= "" && piecePositionToValidate[i][j] < {})
            )attackedTiles= [...attackedTiles, String.fromCharCode(65+j)+(8-i)]

        }
    }

    attackedTiles.forEach(item => {
        let moveSet =[]
        // console.log(8-item[1], item.charCodeAt(0)-65, piecePositionToValidate[8-item[1]][item.charCodeAt(0)-65])
        switch (piecePositionToValidate[8-item[1]][item.charCodeAt(0)-65].toUpperCase()) {
            case 'B': moveSet = (bishop(piecePositionToValidate, 8-item[1], item.charCodeAt(0)-65)); break;
            case 'R': moveSet = (rook(piecePositionToValidate, 8-item[1], item.charCodeAt(0)-65)); break;
            case 'N': moveSet = (knight(piecePositionToValidate, 8-item[1], item.charCodeAt(0)-65)); break;
            case 'Q': moveSet = (queen(piecePositionToValidate, 8-item[1], item.charCodeAt(0)-65)); break;
            case 'K': moveSet = (king(piecePositionToValidate, 8-item[1], item.charCodeAt(0)-65, castle, whiteCheck, blackCheck)); break;
            case 'P': moveSet = (pawn(piecePositionToValidate, 8-item[1], item.charCodeAt(0)-65, enPassant)); break;
        }
        // console.log(moveSet);
 
        attackedTiles = [
            ...attackedTiles,
            ...moveSet
        ]
        attackedTiles.shift();

    });
    
    attackedTiles = attackedTiles.filter(e => e);
    
    let kingsPosition = getKingsPosition(piecePositionToValidate);
    
    if(turn){
        //vez das brancas
        if(attackedTiles.includes(String.fromCharCode(kingsPosition.whiteKing.col + 65)+(8-kingsPosition.whiteKing.row))){
            return false
        }else{
            //validate castle move
            if(piece === "K" && (move === "G1") && kingsPosition.whiteKing.row === 7 && kingsPosition.whiteKing.col === 6){
                return !attackedTiles.includes("F1")
            }

            if(piece === "K" && (move === "C1") && kingsPosition.whiteKing.row === 7 && kingsPosition.whiteKing.col === 2){
                return !attackedTiles.includes("D1")
            }
            return true
        }
    }else{
        //vez das pretas
        if(attackedTiles.includes(String.fromCharCode(kingsPosition.blackKing.col + 65)+(8-kingsPosition.blackKing.row))){
            return false
        }else{
            if(piece === "k" && (move === "G8") && kingsPosition.blackKing.row === 0 && kingsPosition.blackKing.col === 4){
                return !attackedTiles.includes("F8")
            }

            if(piece === "k" && (move === "C8") && kingsPosition.blackKing.row === 0 && kingsPosition.blackKing.col === 4){
                return !attackedTiles.includes("D8")
            }
            return true
        }
    }

    return true


    // console.log(piecePosition);

}
