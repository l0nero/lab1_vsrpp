let maxId = 2;

export const addUser = (firstName, lastName, email) => {
  return{
    type:'ADD_USER',
    id: ++maxId,
    firstName, 
    lastName, 
    email
  }
}

export const deletePerson = (id) => {
  return{
    type: 'DELETE_PERSON',
    id
  }
}
 