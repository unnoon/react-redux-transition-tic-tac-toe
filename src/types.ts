import { EndHandler, EnterHandler, ExitHandler } from 'react-transition-group/Transition';

export interface IAction
{
    type: string
    payload?: any
    error?: Error
    meta?: any
}

export interface ITransition
{
    duration?:  number | { enter?: number, exit?: number },
    in?: boolean;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
    addEndListener?: EndHandler;
    onEnter?: EnterHandler;
    onEntering?: EnterHandler;
    onEntered?: EnterHandler;
    onExit?: ExitHandler;
    onExiting?: ExitHandler;
    onExited?: ExitHandler;
    [prop: string]: any;
}
