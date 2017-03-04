import React from 'react';
import ReactAce from 'react-ace';
import {Grid, Row, Col, Button} from 'react-bootstrap';

import 'brace/mode/python';
import 'brace/theme/github';

export default class TextArea extends React.Component {
  constructor(){
    super()

    this.state = {
      textarea: 'Type here!'
    }
  }

  handleChange(code){
    this.setState({
      textarea: code
    })
  }
  handleCancelClick(e){
    e.preventDefault();
    window.stopCode();
  }

  handleGoClick(e){
    e.preventDefault();

    this.props.parseCode(this.state.textarea);

  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={4}>
            <ReactAce  mode="python"
                       theme="github"
                       name="PythonEditor"
                       height="29em"
                       width="40em"
                       value={this.state.textarea}
                       onChange={this.handleChange.bind(this)} />
          </Col>
        </Row>
        <Row>
          <Col md={1}>
            <Button bsStyle="primary" onClick={this.handleGoClick.bind(this)}>Go!</Button>
          </Col>
          <Col md={1}>
            <Button bsStyle="primary" onClick={this.handleCancelClick.bind(this)}>Stop!</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}
