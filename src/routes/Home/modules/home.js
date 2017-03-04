// ------------------------------------
// Constants
// ------------------------------------
export const HOME_PARSE_CODE = 'HOME_PARSE_CODE'
export const HOME_MOVE_ROBOT = 'HOME_MOVE_ROBOT'
export const HOME_ERR_HANDLER = 'HOME_ERR_HANDLER'
export const HOME_MAZE_CONFIG = 'HOME_MAZE_CONFIG'
// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const parseCode = (code) => {
  return (dispatch, getState) => {
    window.API.timeout = 0;

    return window.runCode(code)
      .then(function(output){
        dispatch({
          type: HOME_PARSE_CODE,
          payload: output
        });
      })
      .catch(function(err) {
        console.log(err);
        dispatch({
          type: HOME_ERR_HANDLER,
          payload: err
        });
      });
  }
}

export const moveRobot = (x, y) => {
  return {
    type    : HOME_MOVE_ROBOT,
    payload : {x: x, y: y}
  };
}

export const mazeConfig = (config) => {
  return {
    type    : HOME_MAZE_CONFIG,
    payload : config
  };
}

export const actions = {
  parseCode,
  moveRobot,
  mazeConfig
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [HOME_PARSE_CODE]    : (state, action) => {
    state.error = {};
    state.code = action.payload;
    return state;
  },
  [HOME_MOVE_ROBOT]: (state, action) => {
    state.currentPos = action.payload
    return state;
  },
  [HOME_ERR_HANDLER]: (state, action) => {
    state.error = action.payload;
    return state;
  },
  [HOME_MAZE_CONFIG]: (state, action) => {
    state.mazeConfig = action.payload;
    return state;
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  error: {},
  code: '',
  mazeConfig: {
    maze: []
  },
  currentPos: {x: 0, y: 0}
};

export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  let newState = Object.assign({}, state);

  return handler ? handler(newState, action) : state
}

