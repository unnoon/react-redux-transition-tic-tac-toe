import * as React from 'react'

import '../styles/Score.scss'

import { SFC } from 'react';

export interface IScoreProps
{
    scoreX: number
    scoreO: number
    turn: string
}

/* tslint:disable-next-line:variable-name */
const Score: SFC<IScoreProps> = ({scoreX, scoreO, turn}) => (
    <div className='score'>
        <span className='color-X'>{`X`}</span>
        <span className={`icon-arrow-left  ${turn === 'X' ? '' : 'hidden'}`}/>
        {`${scoreX} - ${scoreO}`}
        <span className={`icon-arrow-right ${turn === 'O' ? '' : 'hidden'}`}/>
        <span className='color-O'>{`O`}</span>
    </div>
);

export default Score
