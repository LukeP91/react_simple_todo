export const types = {
  ADD: "ADD",
  REMOVE: "REMOVE"
}

export const actionCreators = {
  add: task => {
    return { type: types.ADD, payload: task };
  },
  remove: index => {
    return { type: types.REMOVE, payload: index };
  }
}

const initialState = {
  tasks: ["Click to remove", "Learn React", "Write Code", "Ship App"]
}

export const reducer = (state = initialState, action) => {
  const {tasks} = state;
  const { type, payload } = action;

  switch (type) {
    case types.ADD: {
      return {
        ...state,
        tasks: [payload, ...tasks]
      };
    }
    case types.REMOVE: {
      return {
        ...state,
        tasks: tasks.filter((task, i) => i !== payload)
      }
    }
    default: {

    }
  }
  return state;
}
