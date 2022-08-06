import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Board from '../../game/board';
import Game from '../../game/game';
import Player from '../../game/player';
import BackToStart from '../BackToStart/BackToStart';
import Box from '../Box/Box';
import Moves from '../Moves/Moves';
import Restart from '../Restart/Restart';
import Row from '../Row/Row';

const SIZE = 3

export default function Maingame() {

  const boardController = new Board();
  const player = new Player(SIZE);
  const game = new Game(player, boardController);

  const dispatch = useDispatch()
  const gameStart = useSelector((state) => state.gameStart)
  const isWin = useSelector((state) => state.isWin)

  const [playerStart, setPlayerStart] = useState([0, 0]);
  const [board, setBoard] = useState(game.generateBoard());
  const [moves, setMoves] = useState([]);
  const [winPosition, setWinPosition] = useState([]);
  const [choise, setChoise] = useState(false);

  
  useEffect(() => {
    setPlayerStart(game.startPosition());
    game.calculate(setMoves, setChoise);
    setWinPosition(game.player.getPosition());
  }, []);

  function checkWin(num) {
    if (choise) {
      const win = boardController.getNum(winPosition);
      if (num === win) {
        dispatch({type: 'SET_ISWIN', payload: {...isWin, status: true, right: win}})
      } else {
        dispatch({type: 'SET_ISWIN', payload: {...isWin, status: false, right: win, wrong: num}})
      }
      dispatch({type: 'SET_GAMESTART', payload: false})
    }
  }

  function restart() {
    game.restart(
      setMoves, 
      setPlayerStart, 
      setChoise
      );
      setBoard((prev) => [...prev]);
      setWinPosition(game.player.getPosition())
      dispatch({type: 'SET_GAMESTART', payload: true})
      dispatch({type: 'SET_ISWIN', payload: {...isWin, status: null, right: null, wrong: null}})
  }

  return (
    <>
     {!gameStart && <Restart restart={restart} />}
      {board.map((el, i) => (
        <Row key={i + 10} >
          {el.map((box, j) => (
            <Box
              key={el + i + j}
              gameStart={gameStart}
              isWin={isWin}
              checkWin={checkWin}
              box={box}
              playerStart={playerStart}
              row={i}
              col={j}
            />
          ))}
        </Row>
      ))}
      <Moves moves={moves} />
      <BackToStart />
    </>
  )
}
