import initState from "../initState";


export const isWinReducer = (state = initState, action) => {
const {type, payload} = action;

switch (type) {
  case 'SET_ISWIN':
    return payload;
  default: 
    return state
}
}
