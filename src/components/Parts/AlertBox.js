import React from 'react';
import {Alert} from 'react-bootstrap';

export default class AlertBox extends React.Component {
  constructor(props) {
    super(props);

    this.alertShow.bind(this);
  }
  alertShow() {
    return Object.keys(this.props.error).length !== 0;
  }

  handleAlertDismiss() {
    this.setState({error: {}});
  }

  render() {
    if (this.alertShow()) {
      return (
        <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss.bind(this)} style={{textAlign: 'left'}}>
          <h4>Oh snap! You got a Python error!</h4>
          <p>{this.props.error.toString()}</p>
        </Alert>
      );
    }

    return null;
  }
};
