export function addContact (data) {
  return {
    type: 'ADD_CONTACT',
    data: data
  }
}

export function editContact (index, data) {
  return {
    type: 'EDIT_CONTACT',
    index: index,
    data: data
  }
}

export function deleteContact (index) {
  return {
    type: 'DELETE_CONTACT',
    index: index
  }
}

export function initContacts (data) {
  return {
    type: 'INIT_CONTACTS',
    data: data
  }
}