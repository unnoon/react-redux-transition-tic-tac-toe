import { IAction } from '../types'

const boardEnter = (state: boolean = true, action: IAction): boolean =>
{
    switch (action.type)
    {
        case 'ENTER_BOARD' : return true;
        case 'LEAVE_BOARD' : return false;
        default            : return state;
    }
};

export default boardEnter
