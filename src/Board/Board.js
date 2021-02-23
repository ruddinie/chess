import React, { useState, useEffect } from 'react';

import { BoardBase } from './styles.js';
import BoardTiles from './BoardTiles';
import { Container} from 'react-bootstrap';

import kingsCheckVerifier from './../Functions/kingsCheckVerifier'
import getKingsPosition from '../Functions/getKingsPosition.js';
// import getAttackedTiles from '../Functions/getAttackedTiles.js';
import getLegalMoves from '../Functions/getLegalMoves.js';

// import {Row, Col} from 'b'
const style ={
  position:'absolute', 
  zIndex:-1, 
  height: 30+'rem', 
  width: 30+'rem', 
  transform: `translate(-5.5%, 5.5%)`
}
  
function Board() {
  const [gameState, setgameState] = useState({
    FEN:'',
    PGN:'',
    piecePosition:[
      ['r','n','b', 'q','k','b','n','r'],
      ['p','p','p', 'p','p','p','p','p'],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','N','','P','',''],
      ['P','P','P', 'P','P','','b','P'],
      ['R','','', '','K','','','R'],
    ],
    enPassant:'C6',
    enPassantPawn: 'C5',
    castle:{
      whiteKingCastle: true,
      whiteQueenCastle: true,
      blackKingCastle: true,
      blackQueenCastle: true,
    },

    moveCounter: 0,
    semiMoveCounter: 0,
    turn: true, //true -> white, false->black

    whiteCheck: false,
    blackCheck: false,

    gameResult: 0,

    //0 -> Playing
    //1 -> Draw
    //2 -> White Won
    //3 -> Black Won
    
  });


  const [playerState, setplayerState] = useState({
    selectedPiece: '',
    selectedTile: '',
    legalMoves: [],
  });

  useEffect(() => {
    console.log(gameState)

    //get all legal moves, in the following strutucre
    // [
    //   {
    //     piece: '',
    //     tile: '',
    //     possibleMoves: ['','', ...],
    //   },
    // ]
    kingsCheckVerifier(gameState, setgameState)
    getLegalMoves(gameState, setgameState, playerState, setplayerState);


  }, [gameState.turn])



  useEffect(() => { //show available tiles where you can move, when you select a piece

    
    //Clean Squares movable class from all Tiles (it gives a dot indicating the valid squares you can place a selected piece)
    for (let row = 0; row < 8; row++) {
      for (let column = 0; column < 8; column++) {

        document.getElementById(String.fromCharCode(65+column)+(8-row)).firstChild.classList.remove("movable")
      }
    }

    playerState.legalMoves.forEach((item) =>{
      if(item.tile === playerState.selectedTile){
        item.possibleMoves.forEach((item, index)=>{
          document.getElementById(item).firstChild.classList.add("movable")
        })
      }
      // if(item.tile == playerState.selectedTile) console.log(item.moves)
    })
    
    //applying movable class only in the valid tiles for the selected piece
    // playerState.allowedTilesMoves.forEach((item, index)=>{
    //   document.getElementById(item).firstChild.classList.add("movable")
    // })

    
  }, [playerState.selectedPiece, playerState.selectedTile])
  
  
  useEffect(() => {
      if(gameState.blackCheck){
        let king = getKingsPosition(gameState.piecePosition).blackKing
        document.getElementById(String.fromCharCode(65+king.col)+(8-king.row)).firstChild.classList.add("check")
      }else{
        let king = getKingsPosition(gameState.piecePosition).blackKing
        document.getElementById(String.fromCharCode(65+king.col)+(8-king.row)).firstChild.classList.remove("check")
      }
      // if(gameState.whiteCheck) console.log('White King Is InCheck');
  }, [gameState.blackCheck])


  useEffect(() => {
      if(gameState.whiteCheck){
        let king = getKingsPosition(gameState.piecePosition).whiteKing
        document.getElementById(String.fromCharCode(65+king.col)+(8-king.row)).firstChild.classList.add("check")
      }else{
        let king = getKingsPosition(gameState.piecePosition).whiteKing
        document.getElementById(String.fromCharCode(65+king.col)+(8-king.row)).firstChild.classList.remove("check")
      }
      // if(gameState.whiteCheck) console.log('White King Is InCheck');
  }, [gameState.whiteCheck])

  return (
      <Container style={{display:'flex', justifyContent:'center'}}>
            <svg  style={style} viewBox="0 0 100 100" class="coordinates outside"><text x="2" y="3.5" font-size="3.5" class="coordinate-grey">8</text><text x="2" y="16" font-size="3.5" class="coordinate-grey">7</text><text x="2" y="28.5" font-size="3.5" class="coordinate-grey">6</text><text x="2" y="41" font-size="3.5" class="coordinate-grey">5</text><text x="2" y="53.5" font-size="3.5" class="coordinate-grey">4</text><text x="2" y="66" font-size="3.5" class="coordinate-grey">3</text><text x="2" y="78.5" font-size="3.5" class="coordinate-grey">2</text><text x="2" y="91" font-size="3.5" class="coordinate-grey">1</text><text x="10.35" y="99.25" font-size="3.5" class="coordinate-grey">A</text><text x="22.85" y="99.25" font-size="3.5" class="coordinate-grey">B</text><text x="35.35" y="99.25" font-size="3.5" class="coordinate-grey">C</text><text x="47.85" y="99.25" font-size="3.5" class="coordinate-grey">D</text><text x="60.35" y="99.25" font-size="3.5" class="coordinate-grey">E</text><text x="72.85" y="99.25" font-size="3.5" class="coordinate-grey">F</text><text x="85.35" y="99.25" font-size="3.5" class="coordinate-grey">G</text><text x="97.85" y="99.25" font-size="3.5" class="coordinate-grey">H</text></svg>
            <BoardBase class="board">
                <BoardTiles 
                  gameState={gameState}
                  setgameState={setgameState}
                  playerState={playerState}
                  setplayerState={setplayerState}
                />
            </BoardBase>
        
      </Container>
  );
}

export default Board;