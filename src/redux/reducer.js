const initialState =  [
        { id: 1, firstName: 'Roman', lastName: 'Timofeev', email: 'roman@mail.ru' },
        { id: 2, firstName: 'Pavel', lastName: 'Ivanov', email: 'pavel2020@mail.ru' },
        { id: 3, firstName: 'Pavel', lastName: 'Ivanov', email: 'pavel2020@mail.ru' },
        { id: 4, firstName: 'Pavel', lastName: 'Ivanov', email: 'pavel2020@mail.ru' },
        { id: 5, firstName: 'Pavel', lastName: 'Ivanov', email: 'pavel2020@mail.ru' },
        { id: 6, firstName: 'Pavel', lastName: 'Ivanov', email: 'pavel2020@mail.ru' },
        { id: 7, firstName: 'Pavel', lastName: 'Ivanov', email: 'pavel2020@mail.ru' },
        { id: 8, firstName: 'Pavel', lastName: 'Ivanov', email: 'pavel2020@mail.ru' },
        { id: 9, firstName: 'Pavel', lastName: 'Ivanov', email: 'pavel2020@mail.ru' },
    ]

const userPageReducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_USER':
          return [...state,{
            id: action.id,
            firstName: action.firstName, 
            lastName: action.lastName, 
            email: action.email
          }]
          case 'DELETE_PERSON':
            return state.filter((user) => user.id !== action.id)
        default:
          return state;
      }
}

export default userPageReducer;