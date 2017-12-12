import * as React      from 'react'

import '../styles/App.scss'

import Board  from '../containers/Board';
import Score  from '../containers/Score';
import Status from '../containers/Status';

/* tslint:disable-next-line:variable-name */
const App = () => (
    <div className='app'>
        <Score/>
        <Board/>
        <Status/>
    </div>
);

export default App
