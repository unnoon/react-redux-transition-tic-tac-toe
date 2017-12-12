import { IAction } from '../types'

export default (player: string): IAction => ({
    type: 'WON',
    payload: {player},
})
