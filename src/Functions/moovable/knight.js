
export default function knight(piecePosition, row, column) {
    let allowedSquares = [];

    if(
        (!!piecePosition[row-1] )&&
        (
            (piecePosition[row-1][column+2] > {} && piecePosition[row][column] < {}) || 
            (piecePosition[row-1][column+2] < {} && piecePosition[row][column] > {}) || 
            (piecePosition[row-1][column+2] === "") 
        )
    )allowedSquares.push(String.fromCharCode(65+column+2)+(8-row+1));
    


    if(
        (!!piecePosition[row-1] )&&
        (
            (piecePosition[row-1][column-2] > {} && piecePosition[row][column] < {}) || 
            (piecePosition[row-1][column-2] < {} && piecePosition[row][column] > {}) || 
            (piecePosition[row-1][column-2] === "") 
        )
    )allowedSquares.push(String.fromCharCode(65+column-2)+(8-row+1));



    if(
        (!!piecePosition[row-2] )&&
        (
            (piecePosition[row-2][column-1] > {} && piecePosition[row][column] < {}) || 
            (piecePosition[row-2][column-1] < {} && piecePosition[row][column] > {}) || 
            (piecePosition[row-2][column-1] === "")
        )
    )allowedSquares.push(String.fromCharCode(65+column-1)+(8-row+2));

    if(
        (!!piecePosition[row-2] )&&
        (
            (piecePosition[row-2][column+1] > {} && piecePosition[row][column] < {}) || 
            (piecePosition[row-2][column+1] < {} && piecePosition[row][column] > {}) || 
            (piecePosition[row-2][column+1] === "")
        )
    )allowedSquares.push(String.fromCharCode(65+column+1)+(8-row+2));


    if(
        (!!piecePosition[row+2] )&&
        (
            (piecePosition[row+2][column+1] > {} && piecePosition[row][column] < {}) || 
            (piecePosition[row+2][column+1] < {} && piecePosition[row][column] > {}) || 
            (piecePosition[row+2][column+1] === "")
        )
    )allowedSquares.push(String.fromCharCode(65+column+1)+(8-row-2));

    if(
        (!!piecePosition[row+2] )&&
        (
            (piecePosition[row+2][column-1] > {} && piecePosition[row][column] < {}) || 
            (piecePosition[row+2][column-1] < {} && piecePosition[row][column] > {}) || 
            (piecePosition[row+2][column-1] === "")
        )
    )allowedSquares.push(String.fromCharCode(65+column-1)+(8-row-2));

    if(
        (!!piecePosition[row+1] )&&
        (
            (piecePosition[row+1][column-2] > {} && piecePosition[row][column] < {}) || 
            (piecePosition[row+1][column-2] < {} && piecePosition[row][column] > {}) || 
            (piecePosition[row+1][column-2] === "")
        )
    )allowedSquares.push(String.fromCharCode(65+column-2)+(8-row-1));

    if(
        (!!piecePosition[row+1] )&&
        (
            (piecePosition[row+1][column+2] > {} && piecePosition[row][column] < {}) || 
            (piecePosition[row+1][column+2] < {} && piecePosition[row][column] > {}) || 
            (piecePosition[row+1][column+2] === "")
        )
    )allowedSquares.push(String.fromCharCode(65+column+2)+(8-row-1));

    return allowedSquares;

}
