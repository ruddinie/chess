export default function pawn(piecePosition, row, column, enPassant) {

    // String.fromCharCode(65+column)+(8-row)

    // console.log(piecePosition, row, column, enPassant)
    let allowedSquares = [];
    let isWhite = 0;

    piecePosition[row][column] > {} ? isWhite=-1 : isWhite=1;

    //fowardMove

    //checks if there's not a piece in front of it
    if(piecePosition[row-isWhite][column] == ""){
        allowedSquares.push(String.fromCharCode(65+column)+(8-row+isWhite))
        if((row==6 && isWhite == 1) || (row==1 && isWhite == -1)){ //initial position
            if(piecePosition[row-2*isWhite][column] == "") allowedSquares.push(String.fromCharCode(65+column)+(8-row+2*isWhite))
        }
    }

    //captures right
    if(piecePosition[row-isWhite][column+1] != ""){
        if((piecePosition[row-isWhite][column+1] > {} && isWhite == 1) || (piecePosition[row-isWhite][column+1] < {} && isWhite == -1)) {
            allowedSquares.push(String.fromCharCode(65+column+1)+(8-row+isWhite));
        }
    }

    //captures left
    if(piecePosition[row-isWhite][column-1] != ""){
        if((piecePosition[row-isWhite][column-1] > {} && isWhite == 1) || (piecePosition[row-isWhite][column-1] < {} && isWhite == -1)) {
            allowedSquares.push(String.fromCharCode(65+column-1)+(8-row+isWhite));
        }
    }

    //en passant

    if(
        enPassant == String.fromCharCode(65+column-1)+(8-row+isWhite) ||
        enPassant == String.fromCharCode(65+column+1)+(8-row+isWhite) 
    ){
        if(
            (piecePosition[row][column] > {} && enPassant.split("")[1] == '3') ||
            (piecePosition[row][column] < {} && enPassant.split("")[1] == '6') 
        
        )
            allowedSquares.push(enPassant);
    }

    return allowedSquares;
}

