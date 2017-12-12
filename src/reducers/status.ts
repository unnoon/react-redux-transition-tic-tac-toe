import { IAction } from '../types'

const status = (state = restart(), action: IAction) =>
{
    const payload = action.payload;
    const turn    = state.turn;

    switch (action.type)
    {
        case 'DRAW'        : return {...state, draw: true};
        case 'RESET'       : return restart(state.scoreX, state.scoreO);
        case 'SWITCH_TURN' : return {...state, turn: turn === 'X' ? 'O' : 'X'};
        case 'WON'         : return {...state, [`score${turn}`]: state[`score${turn}`]+1, won: true};
        default            : return state
    }
};

/**
 * Returns a clean state.
 *
 * @param {number} scoreX - Optional starting score for X.
 * @param {number} scoreO - Optional starting score for O.
 *
 * @returns A clean state.
 */
function restart(scoreX = 0, scoreO = 0)
{
    return {
        turn: 'X',
        won: false,
        draw: false,
        scoreX,
        scoreO,
    }
}

export default status
