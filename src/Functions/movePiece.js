export default function movePiece(row, column, gameState,setgameState, playerState, setplayerState) {
    let newPiecePosition = [];
    
    for (var i = 0; i < gameState.piecePosition.length; i++){
        newPiecePosition[i] = gameState.piecePosition[i].slice();
    }

    let toMoveTile = String.fromCharCode(65+column)+(8-row)


    //remove castle moves, if king or any rook moves


    //if its castle
    if(playerState.selectedPiece === 'k' && toMoveTile === "G8" && gameState.castle.blackKingCastle){

        newPiecePosition[8-playerState.selectedTile[1]][playerState.selectedTile.charCodeAt(0) - 65] = ""
        newPiecePosition[0][7] = ""
        newPiecePosition[row][column] = playerState.selectedPiece;
        newPiecePosition[0][5] = "r";

    setgameState({
        ...gameState,
        piecePosition: newPiecePosition,
        turn: gameState.turn ? 0 : 1,
    })

    setplayerState({
        selectedPiece: '',
        selectedTile: '',
        legalMoves: [],
        })

        return 0;
    }

    if(playerState.selectedPiece === 'k' && toMoveTile === "C8" && gameState.castle.blackQueenCastle){

        newPiecePosition[8-playerState.selectedTile[1]][playerState.selectedTile.charCodeAt(0) - 65] = ""
        newPiecePosition[0][0] = ""
        newPiecePosition[row][column] = playerState.selectedPiece;
        newPiecePosition[0][3] = 'r';

    setgameState({
        ...gameState,
        piecePosition: newPiecePosition,
        turn: gameState.turn ? 0 : 1,
    })

    setplayerState({
        selectedPiece: '',
        selectedTile: '',
        legalMoves: [],
        })
        return 0;

    }

    if(playerState.selectedPiece === 'K' && toMoveTile === "G1" && gameState.castle.whiteKingCastle){

        newPiecePosition[8-playerState.selectedTile[1]][playerState.selectedTile.charCodeAt(0) - 65] = ""
        newPiecePosition[7][7] = ""
        newPiecePosition[row][column] = playerState.selectedPiece;
        newPiecePosition[7][5] = "R";

    setgameState({
        ...gameState,
        piecePosition: newPiecePosition,
        turn: gameState.turn ? 0 : 1,
    })

    setplayerState({
        selectedPiece: '',
        selectedTile: '',
        legalMoves: [],
        })

        return 0;
    }

    if(playerState.selectedPiece === 'K' && toMoveTile === "C1" && gameState.castle.whiteQueenCastle){

        newPiecePosition[8-playerState.selectedTile[1]][playerState.selectedTile.charCodeAt(0) - 65] = ""
        newPiecePosition[7][0] = ""
        newPiecePosition[row][column] = playerState.selectedPiece;
        newPiecePosition[7][3] = 'R';

    setgameState({
        ...gameState,
        piecePosition: newPiecePosition,
        turn: gameState.turn ? 0 : 1,
    })

    setplayerState({
        selectedPiece: '',
        selectedTile: '',
        legalMoves: [],
        })
        return 0;

    }


    //if its enPassant

    if (playerState.selectedPiece.toUpperCase() === 'P' && toMoveTile === gameState.enPassant) {
        newPiecePosition[8-playerState.selectedTile[1]][playerState.selectedTile.charCodeAt(0) - 65] = ""
        newPiecePosition[row][column] = playerState.selectedPiece;
        newPiecePosition[8-gameState.enPassantPawn[1]][gameState.enPassantPawn.charCodeAt(0) - 65] = '';

        setgameState({
            ...gameState,
            piecePosition: newPiecePosition,
            turn: gameState.turn ? 0 : 1,
        })
    
        setplayerState({
            selectedPiece: '',
            selectedTile: '',
            legalMoves: [],
            })

            return 0


    }
    

    //move piece
    newPiecePosition[8-playerState.selectedTile[1]][playerState.selectedTile.charCodeAt(0) - 65] = ""
    newPiecePosition[row][column] = playerState.selectedPiece;

    setgameState({
        ...gameState,
        piecePosition: newPiecePosition,
        turn: gameState.turn ? 0 : 1,
    })

    setplayerState({
        selectedPiece: '',
        selectedTile: '',
        legalMoves: [],
        })
}
