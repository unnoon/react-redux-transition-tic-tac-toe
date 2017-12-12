import * as React from 'react'

import '../styles/Board.scss'

import { SFC } from 'react';

import Fade from '../animations/Fade'
import Flip from '../animations/Flip'

export interface IBoardProps
{
    board: string[][]
    enter: boolean
    turn: string
    won: boolean
    draw: boolean
    onSquareClick: (row: number, col: number, board: string[][], turn: string, won: boolean, draw: boolean) => any
    onExited: () => any
}

/* tslint:disable-next-line:variable-name */
const Board: SFC<IBoardProps> = ({board, won, draw, turn, onSquareClick, enter, onExited}) => (
    <Fade in appear><Flip in={enter} onExited={onExited}>
        <div className='board'>
            {board.map((row_data, row) =>
                <div className='board-row' key={row} data-index={row}>
                    {row_data.map((square, col) =>
                        <button className={`board-square color-${square === 'X' ? 'X' : 'O'}`} key={col} data-index={col} onClick={() => onSquareClick(row, col, board, turn, won, draw)}>{square}</button>)
                    }
                </div>)
            }
        </div>
    </Flip></Fade>
);

export default Board
