import {mazeConfig, moveRobot} from '../routes/Home/modules/home';

export default class Maze {
  constructor(store) {
    this.timeout = 0;
    this._store = store;

    this._curPos = this.getInitPosition();

    this._maze = [
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
  }

  configMaze() {
    this._store.dispatch(mazeConfig.apply(mazeConfig, [{maze: this._maze}]));
    this._store.dispatch(moveRobot.apply(moveRobot, [this.getInitPosition().x,this.getInitPosition().y]));
  }

  getMaze() {
    return this._maze;
  }

  getInitPosition() {
    return {x: 2, y: 2};
  }

  getExitPosition() {
    return {x: 10, y: 10};
  }

  getCurrentPosition() {
    return this._curPos;
  }

  setCurrentPosition(x, y) {
    console.log('Setting position: ', x, y);
    if(this.checkFree(x,y)) {
      this._curPos = {x: x, y: y};
      console.log(this._curPos);
      this._store.dispatch(moveRobot.apply(moveRobot, [x, y]));
    }

    return this._curPos;
  }
  checkInMaze(x,y) {
    return x in this._maze && y in this._maze[x];
  }
  checkFree(x, y) {
    console.log(x, ',', y);
    console.log(this._maze[y][x])
    return this._maze[y][x] === 0;
  }

  move(dx, dy) {
    const _this = this;
    console.log('Timeout: ', this.timeout);
    setTimeout(function() {

      const pos = {
        x: _this.getCurrentPosition().x + dx,
        y: _this.getCurrentPosition().y + dy
      }

      if(_this.checkInMaze(pos.x, pos.y) && _this.checkFree(pos.x, pos.y)) {
        _this.setCurrentPosition(pos.x, pos.y);
      }
    }, this.timeout);

    this.timeout += 500;
  }

  up() {
    this.move(0,-1);
  }

  down() {
    this.move(0,1);
  }

  left() {
    this.move(-1,0);
  }

  right() {
    this.move(1,0);
  }
}
