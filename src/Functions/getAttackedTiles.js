import pawn from './moovable/pawn'
import bishop from './moovable/bishop'
import rook from './moovable/rook'
import queen from './moovable/queen'
import knight from './moovable/knight'
import king from './moovable/king'



export default function getAttackedTiles(piecePosition, castle, enPassant, whiteCheck, blackCheck) {

    let attackedTiles = [];         
    let attackedTilesTEMP = [];
    
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            switch (piecePosition[i][j].toUpperCase()) {
                case 'B': attackedTilesTEMP = (bishop(piecePosition, i, j)); break;
                case 'R': attackedTilesTEMP = (rook(piecePosition, i, j)); break;
                case 'N': attackedTilesTEMP = (knight(piecePosition, i, j)); break;
                case 'Q': attackedTilesTEMP = (queen(piecePosition, i, j)); break;
                case 'K': attackedTilesTEMP = (king(piecePosition, i, j, castle, whiteCheck, blackCheck)); break;
                case 'P': attackedTilesTEMP = (pawn(piecePosition, i, j, enPassant)); break;
            }

            attackedTiles = attackedTiles.concat(...attackedTilesTEMP)

        }
        
    }

    let attackedTilesClean = attackedTiles.filter((v, i, a) => a.indexOf(v) === i);

    return attackedTilesClean;

}
