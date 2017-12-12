import '../styles/Fade.scss'

import * as React from 'react'

import { SFC }            from 'react'
import { CSSTransition  } from 'react-transition-group'

import { ITransition } from '../types'

/* tslint:disable-next-line:variable-name */
const Fade: SFC<ITransition> = ({ children, ...props }) => (
    <CSSTransition {...props} classNames='fade'  timeout={props.duration || 1000}>
        {children}
    </CSSTransition>
);

export default Fade
