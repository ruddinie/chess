import getAttackedTiles from './../getAttackedTiles'


export default function king(piecePosition, row, column, castle, whiteCheck, blackCheck) {
    let allowedSquares = [];

    for (let rowCheck = -1; rowCheck < 2; rowCheck++) {
        if(!!piecePosition[row+rowCheck]){
            for (let columnCheck = -1; columnCheck < 2; columnCheck++) {
            if(
                (piecePosition[row+rowCheck][column+columnCheck] > {} && piecePosition[row][column] < {}) || 
                (piecePosition[row+rowCheck][column+columnCheck] < {} && piecePosition[row][column] > {}) || 
                (piecePosition[row+rowCheck][column+columnCheck] === "")  
            )allowedSquares.push(String.fromCharCode(65+column+columnCheck)+(8-row-rowCheck));
           }
        }
    }

    //castleling moves


    if(piecePosition[row][column]<{}){
        if(
            castle.whiteKingCastle &&
            !whiteCheck &&
            // allowedSquares.includes("F1") &&
            piecePosition[7][6] === ""
        ) allowedSquares.push("G1");
        if(
            castle.whiteQueenCastle &&
            !whiteCheck &&
            // allowedSquares.includes("D1") &&
            piecePosition[7][2] === ""

        ) allowedSquares.push("C1");
    }else{
        if(
            castle.blackKingCastle &&
            !blackCheck &&
            // allowedSquares.includes("F8") &&
            piecePosition[0][6] === ""
        ) allowedSquares.push("G8");
        if(
            castle.blackQueenCastle &&
            !blackCheck &&
            // allowedSquares.includes("D1") &&
            piecePosition[0][2] === ""

        ) allowedSquares.push("C8");
    }


    return allowedSquares;

}
