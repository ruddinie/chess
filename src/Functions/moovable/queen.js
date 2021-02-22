import bishop from './bishop'
import rook from './rook'

export default function queen(piecePosition, row, column) {
    return [...bishop(piecePosition, row, column), ...(rook(piecePosition, row, column))]
}
