import React from 'react'

export const RulesOfGame = (props) => (
  <div>
    <h2>Rules of the Game</h2>
    <ul>
      <li>Maze is a square 2D matrix containing coridors(0), walls (1), your avatar (2) and exits (3)
        Example:
        <p>
          1 1 3 1 <br />
          1 0 0 1 <br />
          1 2 1 1 <br />
          1 1 0 1 <br />
        </p>
      </li>
      <li>
        Maze can have multiple exits, find the nearest
      </li>
      <li>
        Avatar can only move up, down, left, right
      </li>
      <li>
        Get neighbour API call reveals 8 nearest cells by default, where in the middle there is always - 2 value cell - avatar position, example output:
        ((1,0,3), (0,2,1), (1,0,1))
      </li>
      <li>
        Coordinate system start is at left bottom corner, all coordinates given in (x, y) format, coordinates start from 1
      </li>
    </ul>
    <h3>Python Lib docs</h3>
    <h4>Python maze lib docs</h4>
    <sub>
      Initialize Maze instance
    </sub>
    <p>
      from maze import Maze<br />
      m = Maze()<br />
    </p>
    <sub>
      At first, it is Start coordinates, otherwise this call gives current location:
    </sub>
    <p>
      m.getCurrentPosition()
    </p>

  </div>
);

export default RulesOfGame
