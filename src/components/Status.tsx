import * as React from 'react'

import '../styles/Status.scss'

import { SFC } from 'react';

export interface IStatusProps
{
    turn: string
    won: boolean
    draw: boolean
}

/* tslint:disable-next-line:variable-name */
const Status: SFC<IStatusProps> = ({turn, won, draw}) => (
    <div className='status'>
        {
            won  ? `${turn} won!!!! Click to restart.` :
            draw ? `Draw... Click to restart.` :
                   `${turn}'s turn.`
        }
    </div>
);

export default Status
