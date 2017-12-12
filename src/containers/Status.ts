import { connect }      from 'react-redux'

import StatusView       from '../components/Status'
import { IStatusProps } from '../components/Status' /* don't remove TS4023*/

const mapStateToProps = (state) => (state.status as IStatusProps);

/* tslint:disable-next-line:variable-name */
const Status = connect(
    mapStateToProps,
)(StatusView);

export default Status
