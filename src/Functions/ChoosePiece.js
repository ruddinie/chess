import { ReactComponent as Black_bishop } from './../svg/black_bishop.svg'
import { ReactComponent as Black_king } from './../svg/black_king.svg'
import { ReactComponent as Black_knight } from './../svg/black_knight.svg'
import { ReactComponent as Black_pawn } from './../svg/black_pawn.svg'
import { ReactComponent as Black_queen } from './../svg/black_queen.svg'
import { ReactComponent as Black_rook } from './../svg/black_rook.svg'
import { ReactComponent as White_bishop } from './../svg/white_bishop.svg'
import { ReactComponent as White_king } from './../svg/white_king.svg'
import { ReactComponent as White_knight } from './../svg/white_knight.svg'
import { ReactComponent as White_pawn } from './../svg/white_pawn.svg'
import { ReactComponent as White_queen } from './../svg/white_queen.svg'
import { ReactComponent as White_rook } from './../svg/white_rook.svg'



import React from 'react'

export default function ChoosePiece(piece) {
        switch (piece) {
            case 'r': return <Black_rook />; break;
            case 'b': return <Black_bishop />; break;
            case 'n': return <Black_knight />; break;
            case 'q': return <Black_queen />; break;
            case 'k': return <Black_king />; break;
            case 'p': return <Black_pawn/>; break;

            case 'R': return <White_rook />; break;
            case 'B': return <White_bishop />; break;
            case 'N': return <White_knight />; break;
            case 'Q': return <White_queen />; break;
            case 'K': return <White_king />; break;
            case 'P': return <White_pawn />; break;

            default: return null; break;
        }
    
}
