/**
 *
 * HomeContainer Container
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';

import { NAMESPACE } from './constants';
import reducer from './reducer';
import saga from './sagas';

import { getName, getShowReversedAlert } from './selectors';
import { updateName, reverseName } from './actions';

import TextInput from '../../components/TextInput';
import SubmitInput from '../../components/SubmitInput';

export const HomeContainer = ({
  name,
  onHandleUpdateName,
  onHandleSubmit,
  showAlert,
}) => (
  <div>
    <p>Home Container</p>
    <div>
      <TextInput onChange={onHandleUpdateName} value={name} />
      <SubmitInput onClick={onHandleSubmit} value="Reverse" />
    </div>
    {showAlert ? <div>Name reversed!</div> : null}
  </div>
);

HomeContainer.propTypes = {
  name: PropTypes.string,
  onHandleUpdateName: PropTypes.func,
  onHandleSubmit: PropTypes.func,
  showAlert: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  name: getName,
  showAlert: getShowReversedAlert,
});

const mapDispatchToProps = (dispatch) => ({
  onHandleUpdateName: (event) => dispatch(updateName(event.target.value)),
  onHandleSubmit: () => {
    dispatch(reverseName());
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: NAMESPACE, reducer });
const withSaga = injectSaga({ key: NAMESPACE, saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(HomeContainer);
