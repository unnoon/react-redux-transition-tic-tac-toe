import find    from 'bottom_line/collections/find'
import each    from 'bottom_line/collections/each'
import delay   from 'bottom_line/functions/delay'

import { draw, setSquare, switchTurn, won, reset, leaveBoard, enterBoard } from '../actions'

import { connect }     from 'react-redux'
import { IBoardProps } from '../components/Board' /* don't remove TS4023*/
import BoardView       from '../components/Board'

const mapStateToProps = (state) => ({
    board:  state.board,
    turn:   state.status.turn,
    won:    state.status.won,
    draw:   state.status.draw,
    enter:  state.boardEnter,
});

const mapDispatchToProps = ( dispatch ) => ({
    /**
     * Handles a button click on one of the squares.
     *
     * @param {number}     row      - The selected row by the player.
     * @param {number}     col      - The selected column by the player.
     * @param {string[][]} board    - The current board.
     * @param {string}     turn     - The current player.
     * @param {boolean}    wonGame  - Boolean indicating a won game.
     * @param {boolean}    drawGame - Boolean indicating a draw game.
     *
     * @returns {any}
     */
    onSquareClick: (row, col, board, turn, wonGame, drawGame) =>
    {
        switch(true)
        {   // TODO thunk this stuff
            case wonGame || drawGame            : return dispatch(leaveBoard(), delay(600, () => dispatch(reset())));
            case !!board[row][col]              : return; // in case square already has a value return
            case gameWon(row, col, board, turn) : return dispatch(setSquare(turn, row, col)), dispatch(won(turn)); // NOTE the gameWon function sets the correct square to the current board state
            case gameDraw(board)                : return dispatch(setSquare(turn, row, col)), dispatch(draw());
            default                             : return dispatch(setSquare(turn, row, col)), dispatch(switchTurn());
        }
    },
    /**
     * After the exit animation of the board finishes, sets the state to enter so we can trigger an exit again.
     *
     * @returns {any}
     */
    onExited: () => dispatch(enterBoard()),
});

/* tslint:disable-next-line:variable-name */
const Board = connect(
    mapStateToProps,
    mapDispatchToProps,
)(BoardView);

/**
 * Calculates if the game is won by one of the players
 * NOTE as a side effect it sets the correct player value to the current board state.
 *
 * @param {number}     row    - The selected row by the player.
 * @param {number}     col    - The selected column by the player.
 * @param {string[][]} board  - The current board.
 * @param {string}     player - The current player.
 *
 * @returns {boolean} Boolean indicating if the current player has won.
 */
function gameWon(row: number, col: number, board: string[][], player: string): boolean
{
    board[row][col] = player; // make sure the current board is updated to calculate the gameWon

    // collect win lines
    const row_data =  board[row];
    const col_data = [board[0][col], board[1][col], board[2][col]];
    const d1_data  = [board[0][0],   board[1][1],   board[2][2]];
    const d2_data  = [board[0][2],   board[1][1],   board[2][0]];

    return !!find([row_data, col_data, d1_data, d2_data], (line) => (line[0] && line[0] === line[1] && line[0] === line[2]));
}

/**
 * Calculates if the current board represents a draw.
 *
 * @param {string[][]} board - The current board.
 *
 * @returns {boolean} Boolean indicating the if the game is a draw.
 */
function gameDraw(board: string[][]): boolean
{
    return !find(board, (row) => !each(row, (square) => !!square))
}

export default Board
