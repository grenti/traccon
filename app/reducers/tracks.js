const tracks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TRACK':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          completed: false
        }
      ];
    case 'TOGGLE_TRACK':
      return state.map(track => {
        if (track.id === action.id) {
          return Object.assign({}, track, {
            completed: !track.completed
          })
        }
        return track
      })
    default:
      return state
  }
}

export default tracks
