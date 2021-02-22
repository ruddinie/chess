


export default function bishop(piecePosition, row, column) {
    let allowedSquares = [];
    //checkar cada diagonal e direção
    
    //diagonal primária, sentido para baixo
    let r = row ,c = column;
    while(1){

        if(!piecePosition[r+1] || !piecePosition[c+1]) break;
        // console.log("Checkando Quadrado "+String.fromCharCode(65+c+1)+(8-r-1))
        
        if(piecePosition[r+1][c+1] === ""){
            allowedSquares.push(String.fromCharCode(65+c+1)+(8-r-1));
            r+=1;
            c+=1;
            
        }else if(
            (piecePosition[r+1][c+1] > {} && piecePosition[row][column] < {}) ||
            (piecePosition[r+1][c+1] < {} && piecePosition[row][column] > {})
        ){
            allowedSquares.push(String.fromCharCode(65+c+1)+(8-r-1));
            break;
        }
        else{
            break;
        }
    }
    //diagonal primária, sentido para cima

    r = row ;
    c = column;
    while(1){

        if(!piecePosition[r-1] || !piecePosition[c+1]) break;

        // console.log("Checkando Quadrado "+String.fromCharCode(65+c+1)+(8-r+1))
        
        if(piecePosition[r-1][c+1] === ""){
            allowedSquares.push(String.fromCharCode(65+c+1)+(8-r+1));
            r-=1;
            c+=1;
            
        }else if(
            (piecePosition[r-1][c+1] > {} && piecePosition[row][column] < {}) ||
            (piecePosition[r-1][c+1] < {} && piecePosition[row][column] > {})
        ){
            allowedSquares.push(String.fromCharCode(65+c+1)+(8-r+1));
            break;
        }
        else{
            break;
        }
    }

    //diagonal secundaria, sentido para cima

    r = row ;
    c = column;
    while(1){

        if(!piecePosition[r-1] || !piecePosition[c-1]) break;

        // console.log("Checkando Quadrado "+String.fromCharCode(65+c-1)+(8-r+1))
        
        if(piecePosition[r-1][c-1] === ""){
            allowedSquares.push(String.fromCharCode(65+c-1)+(8-r+1));
            r-=1;
            c-=1;
            
        }else if(
            (piecePosition[r-1][c-1] > {} && piecePosition[row][column] < {}) ||
            (piecePosition[r-1][c-1] < {} && piecePosition[row][column] > {})
        ){
            allowedSquares.push(String.fromCharCode(65+c-1)+(8-r+1));
            break;
        }
        else{
            break;
        }
    }

    //diagonal secundaria, sentido para baixo

    r = row ;
    c = column;
    while(1){

        if(!piecePosition[r+1] || !piecePosition[c-1]) break;

        // console.log("Checkando Quadrado "+String.fromCharCode(65+c-1)+(8-r-1))
        
        if(piecePosition[r+1][c-1] === ""){
            allowedSquares.push(String.fromCharCode(65+c-1)+(8-r-1));
            r+=1;
            c-=1;
            
        }else if(
            (piecePosition[r+1][c-1] > {} && piecePosition[row][column] < {}) ||
            (piecePosition[r+1][c-1] < {} && piecePosition[row][column] > {})
        ){
            allowedSquares.push(String.fromCharCode(65+c-1)+(8-r-1));
            break;
        }
        else{
            break;
        }
    }



    return allowedSquares;
}
