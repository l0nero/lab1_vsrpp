import React from 'react';
import './App.css';
import Add from '../Add/Add';
import ListOfUsers from '../ListOfUsers/ListOfUsers';

class App extends React.Component {

  maxId = 2;

  state = {
    users: [
      { id: 1, firstName: 'Roman', lastName: 'Timofeev', email: 'roman@mail.ru' },
      { id: 2, firstName: 'Pavel', lastName: 'Ivanov', email: 'pavel2020@mail.ru' }
    ]
  }

  deletePerson = (id) => {
    this.setState(({ users }) => {
      let idToDel = users.findIndex(elem => elem.id === id);

      let beforeDelItem = users.slice(0, idToDel);
      let afterDelItem = users.slice(idToDel + 1);

      let newData = [...beforeDelItem, ...afterDelItem];

      return {
        users: newData
      }
    })
  }

  createUser(firstName, lastName, email) {
    return {
      id: ++this.maxId,
      firstName: firstName,
      lastName: lastName,
      email: email
    }
  }

  addUser = (firstName, lastName, email) => {
    const newItem = this.createUser(firstName, lastName, email);

    this.setState(({ users }) => {
      let newArr = [
        ...users,
        newItem
      ]
      return {
        users: newArr
      }
    })
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <Add addNewPerson={this.addUser} />
        <ListOfUsers data={users} onDelete={this.deletePerson} />
      </div>
    )
  }
}

export default App;
