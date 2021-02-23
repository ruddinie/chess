import React, { useState } from 'react';

import Tile from './../Components/Tile';


export default function BoardTiles({gameState,setgameState, playerState, setplayerState}) {
    let tiles = [];
    // console.log(gameState);

    for (let row = 0; row < 8; row++) {
        for (let column = 0; column < 8; column++) {
            let color = '';
            (row+column)%2 === 0 ? color='white' : color="dark"
            // console.log(gameState.piecePosition[row][column]);
            tiles.push(<Tile row={row} 
                column={column} 
                color={color}
                gameState={gameState}
                setgameState={setgameState}
                playerState={playerState}
                setplayerState={setplayerState}
                />
            )
        }
    }
    



    return (
            tiles
    )
}

