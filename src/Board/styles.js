import styled from 'styled-components';

export const BoardBase = styled.div`
  height: 30rem;
  width: 30rem;
  background-color: #bebe;
  margin: auto;
  outline: 4px #000 solid;
  flex-wrap: wrap;
  div{
    height: calc(100%/8);
    width: calc(100%/8);
    display: table-cell;
    vertical-align: middle;
    float: left;
    div{
      height:100%;
      width:100%;
      display:flex;
    }
  }
  .darkTile{
      background-color: #676767;
      display: flex;
      justify-content:center;
      align-items: center;
  }
  .whiteTile{
      background-color: #fafafa;
      display: flex;
      justify-content:center;
      align-items: center;
  }
  .hilightedTile{
      background-color: #6ab5ff;
  }
  .highlightedRed{
    background-color: #ff4a4a;
  }

  .check{
    background: radial-gradient(red, transparent)
  }
  svg.movable{
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    height: 100%;
    width: 100%;
    background-color: transparent;

    border-radius: 50%;
    border: solid 6px #c0c0c0;
  }


  .movable{
    height: 30%;
    width: 30%;
    border-radius: 100%;
    background-color: #c0c0c0;
  }
`;
