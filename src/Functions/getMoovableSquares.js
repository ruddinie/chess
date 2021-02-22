import pawn from './moovable/pawn'
import bishop from './moovable/bishop'
import rook from './moovable/rook'
import queen from './moovable/queen'
import knight from './moovable/knight'
import king from './moovable/king'

export default function getMoovableSquares(gameState, row, column) {

    switch (gameState.piecePosition[row][column].toUpperCase()) {
            case 'B': return bishop(gameState.piecePosition, row, column);
            case 'R': return rook(gameState.piecePosition, row, column);
            case 'N': return knight(gameState.piecePosition, row, column);
            case 'Q': return queen(gameState.piecePosition, row, column);
            case 'K': return king(gameState.piecePosition, row, column, gameState.castle);
            case 'P': return pawn(gameState.piecePosition, row, column, gameState.enPassant);
    }
}