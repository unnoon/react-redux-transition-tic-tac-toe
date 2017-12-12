import '../styles/Flip.scss'

import * as React from 'react'

import { SFC }            from 'react'
import { CSSTransition  } from 'react-transition-group'

import { ITransition } from '../types'

/* tslint:disable-next-line:variable-name */
const Flip: SFC<ITransition> = ({ children, ...props }) => (
    <CSSTransition {...props} classNames='flip' timeout={props.duration || 1000}>
        {children}
    </CSSTransition>
);

export default Flip
