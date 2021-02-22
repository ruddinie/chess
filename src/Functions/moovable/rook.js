
export default function rook(piecePosition, row, column) {
    let allowedSquares=[]

    let r = row ,c = column;

    //checkar quadrados na mesma linha para a direita

    while(1){

        if(!piecePosition[c+1]) break;

        // console.log("Checkando Quadrado "+String.fromCharCode(65+c+1)+(8-r))
        
        if(piecePosition[r][c+1] === ""){
            allowedSquares.push(String.fromCharCode(65+c+1)+(8-r));
            c+=1;
            
        }else if(
            (piecePosition[r][c+1] > {} && piecePosition[row][column] < {}) ||
            (piecePosition[r][c+1] < {} && piecePosition[row][column] > {})
        ){
            allowedSquares.push(String.fromCharCode(65+c+1)+(8-r));
            break;
        }
        else{
            break;
        }
    }
    //checkar quadrados na mesma linha para a esquerda
    c = column;
    while(1){

        if(!piecePosition[c-1]) break;

        // console.log("Checkando Quadrado "+String.fromCharCode(65+c-1)+(8-r))
        
        if(piecePosition[r][c-1] === ""){
            allowedSquares.push(String.fromCharCode(65+c-1)+(8-r));
            c-=1;
            
        }else if(
            (piecePosition[r][c-1] > {} && piecePosition[row][column] < {}) ||
            (piecePosition[r][c-1] < {} && piecePosition[row][column] > {})
        ){
            allowedSquares.push(String.fromCharCode(65+c-1)+(8-r));
            break;
        }
        else{
            break;
        }
    }
    //checkar quadrados na mesma coluna para cima

    c = column;
    while(1){

        if(!piecePosition[r-1]) break;

        // console.log("Checkando Quadrado "+String.fromCharCode(65+c)+(8-r+1))
        
        if(piecePosition[r-1][c] === ""){
            allowedSquares.push(String.fromCharCode(65+c)+(8-r+1));
            r-=1;
            
        }else if(
            (piecePosition[r-1][c] > {} && piecePosition[row][column] < {}) ||
            (piecePosition[r-1][c] < {} && piecePosition[row][column] > {})
        ){
            allowedSquares.push(String.fromCharCode(65+c)+(8-r+1));
            break;
        }
        else{
            break;
        }
    }
    
    //checkar quadrados na mesma coluna para baixo
    r=row;
    c = column;
    while(1){

        if(!piecePosition[r+1]) break;

        // console.log("Checkando Quadrado "+String.fromCharCode(65+c)+(8-r-1))
        
        if(piecePosition[r+1][c] === ""){
            allowedSquares.push(String.fromCharCode(65+c)+(8-r-1));
            r+=1;
            
        }else if(
            (piecePosition[r+1][c] > {} && piecePosition[row][column] < {}) ||
            (piecePosition[r+1][c] < {} && piecePosition[row][column] > {})
        ){
            allowedSquares.push(String.fromCharCode(65+c)+(8-r-1));
            break;
        }
        else{
            break;
        }
    }



    return allowedSquares;

}
