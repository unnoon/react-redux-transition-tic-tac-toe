import { AnyAction, combineReducers } from 'redux' /* don't remove AnyAction TS4023*/
import board                          from './board'
import boardEnter                     from './boardEnter'
import status                         from './status'

const tictactoe = combineReducers({
    status,
    board,
    boardEnter,
});

export default tictactoe
