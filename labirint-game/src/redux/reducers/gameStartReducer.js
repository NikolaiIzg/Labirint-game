import initState from "../initState";


export const gameStartReducer = (state = initState, action) => {
const {type, payload} = action;

switch (type) {
  case 'SET_GAMESTART':
    return payload;
  default: 
    return state
}
}
