import { IAction } from '../types'

export default (value: string, row: number, column: number): IAction => ({
    type: 'SET_SQUARE',
    payload: { row, column, value },
});
