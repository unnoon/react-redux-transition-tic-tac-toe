import { connect }     from 'react-redux'

import ScoreView       from '../components/Score'
import { IScoreProps } from '../components/Score' /* don't remove TS4023*/

const mapStateToProps = (state) => (
    {
        scoreX: state.status.scoreX,
        scoreO: state.status.scoreO,
        turn: state.status.turn,
    }
);

/* tslint:disable-next-line:variable-name */
const Score = connect(
    mapStateToProps,
)(ScoreView);

export default Score
