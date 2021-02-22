
export default function getKingsPosition(piecePosition) {
    // console.log(piecePosition);

    
    let whiteKingsRow = 0, whiteKingsCloumn = 0;
    for (let i = 0; i < 8; i++) {
        if(piecePosition[i].indexOf("K") != -1){
            whiteKingsCloumn = piecePosition[i].indexOf("K");
            whiteKingsRow = i;
            break;
        }
    }

    let blackKingsRow = 0, blackKingsColoumn = 0;
    for (let i = 0; i < 8; i++) {
        if(piecePosition[i].indexOf("k") != -1){
            blackKingsColoumn = piecePosition[i].indexOf("k");
            blackKingsRow = i;
            break;
        }
    }
    
    return {
        whiteKing:{
            row: whiteKingsRow,
            col: whiteKingsCloumn,
        },
        blackKing:{
            row: blackKingsRow,
            col:blackKingsColoumn,
        }
    }
}
