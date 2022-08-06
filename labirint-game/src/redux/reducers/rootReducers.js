import { combineReducers } from 'redux';
import { gameStartReducer } from './gameStartReducer';
import { isWinReducer } from './isWinReducer';


const rootReducer = combineReducers({
  gameStart: gameStartReducer,
  isWin: isWinReducer,
});

export default rootReducer;
