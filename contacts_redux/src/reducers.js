var initialState = [];

function compare(a,b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  } 
  return 0;
}

export function contacts (state, action) {
  if (state === undefined) {
    return initialState;
  }
  switch (action.type) {
    case 'ADD_CONTACT':
      var new_state = [...state];
      new_state.push(action.data);
      new_state.sort(compare);
      
      return new_state;
    case 'EDIT_CONTACT':
      new_state = [...state];
      new_state.set(action.index, action.data);
      new_state.sort(compare);
      
      return new_state;
    case 'DELETE_CONTACT':
      new_state = [...state];
      new_state.splice(action.index, 1);
      new_state.sort(compare);
      
      return new_state;
    case 'INIT_CONTACTS':
      return action.data;
      
    default:
      return state;
  }
}


export default contacts;