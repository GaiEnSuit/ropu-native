import React, { Component } from 'react';

// State
import { connect } from 'react-redux';
import { toggleLogInModal } from '../state/actions';

const mapDispatchToProps = dispatch => {
  return {
    toggleLogInModal: logInModal => dispatch(toggleLogInModal(logInModal))
  }
}

class LogInModalHandler extends Component {
  componentDidMount() {
    let logInModal = true;
    this.props.toggleLogInModal({logInModal})
  }

  render() {
    return null
  }
}

export default connect(null, mapDispatchToProps)(LogInModalHandler);
