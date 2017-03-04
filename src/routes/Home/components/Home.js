import React from 'react';
import TextArea from './TextArea';
import {Grid, Row, Col} from 'react-bootstrap';
import MazeCanvas from './MazeCanvas';
import AlertBox from '../../../components/Parts/AlertBox';
import RulesOfGame from './RulesOfGame';

export const Home = (props) => (
  <Grid>
    <Row>
      <Col md={6}>
        <MazeCanvas mazeConfig={props.mazeConfig} currentPos={props.currentPos}/>
      </Col>
      <Col md={6}>
        <AlertBox error={props.error}/>
        <div>{props.code}</div>

        <TextArea parseCode={props.parseCode} moveRobot={props.moveRobot} />
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <RulesOfGame/>
      </Col>
    </Row>
  </Grid>
)

Home.propTypes = {
  mazeConfig  : React.PropTypes.object.isRequired,
  currentPos  : React.PropTypes.object.isRequired,
  code        : React.PropTypes.string.isRequired,
  error       : React.PropTypes.object.isRequired,

  parseCode   : React.PropTypes.func.isRequired,
  moveRobot   : React.PropTypes.func.isRequired
}

export default Home
