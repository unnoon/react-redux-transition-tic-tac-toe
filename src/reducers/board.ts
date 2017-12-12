import { cloneDeep } from 'lodash';

import XDArray from 'bottom_line/classes/XDArray';

import { IAction } from '../types'

const board = (state = defaultState(), action: IAction) =>
{
    const payload = action.payload;

    switch (action.type)
    {
        case 'RESET'       : return defaultState();
        case 'SET_SQUARE'  : return setSquare(state, payload.value, payload.row, payload.column);
        default            : return state
    }
};

/**
 * Returns a clean board.
 *
 * @returns {string[][]}
 */
function defaultState(): string[][]
{
    return XDArray.dimensionalize([], [3, 3], '')
}

/**
 * Sets a mark to the board and returns a new instance of the updated board.
 *
 * @param {string[][]} boardState - The current board state.
 * @param {string}     value      - The value to set to the board.
 * @param {number}     row        - The column to set.
 * @param {number}     column     - The row to set.
 *
 * @returns {string[][]} A new instance of the updated board.
 */
function setSquare(boardState: string[][], value: string, row: number, column: number): string[][]
{
    const state = cloneDeep(boardState);

    state[row][column] = value;

    return state
}

export default board
