import React, {useState} from 'react'
import ChoosePiece from './../Functions/ChoosePiece';
import movePiece from "./../Functions/movePiece";




export default function Tile({color, row, column, gameState,setgameState, playerState, setplayerState}) {

    const [isHighlighted, setisHighlighted] = useState(false);

    function handleClick(e) {

        if(
            (gameState.piecePosition[row][column] > {} && gameState.turn && gameState.piecePosition[row][column] !== "" && playerState.selectedTile === "") ||
            (gameState.piecePosition[row][column] < {} && !gameState.turn && gameState.piecePosition[row][column] !== "" && playerState.selectedTile === "") 
        )return 0;
        
                
        // console.log(playerState.legalMoves.find(e=> e.tile === playerState.selectedTile).possibleMoves.includes(e.currentTarget.id))
        console.log('alo')
        
        if(!!playerState.legalMoves.find(e=> e.tile === playerState.selectedTile) && playerState.legalMoves.find(e=> e.tile === playerState.selectedTile).possibleMoves.includes(e.currentTarget.id)){
            
            console.log('hora de se mexer!')
            movePiece(row, column, gameState,setgameState, playerState, setplayerState)
            
            

        }else if(playerState.selectedTile==e.currentTarget.id || gameState.piecePosition[row][column] == ""){
            setplayerState({
                ...playerState,
                selectedTile: '',
                selectedPiece: '',
                allowedTilesMoves: []
            })

        }else{
            setplayerState({
                ...playerState,
                selectedTile: e.currentTarget.id,
                selectedPiece: gameState.piecePosition[row][column],
            })
        }
        

    }

    // function handleRightClick(e) {
    //     e.preventDefault();
    //     // if(e.ctrlKey){
    //         // isHighlightedRed ? setisHighlightedRed(false) : setisHighlightedRed(true)
    //     // }
    // }


    return (
        <div 
            className={`${color}Tile ${isHighlighted ? "hilightedTile" : ""}`  }
            onMouseDown={handleClick}
            // onContextMenu={handleRightClick}
            id={String.fromCharCode(65+column)+(8-row)}>
            {
                gameState.piecePosition[row][column] ? ChoosePiece(gameState.piecePosition[row][column]) : <div className=""/>
            }

            
        </div>
    )
}
