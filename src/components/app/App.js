import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthorizationPage from '../../pages/authorizationPage/authorizationPage';
import UsersPage from '../../pages/usersPage/usersPage';
import './App.css';



class App extends React.Component {


  render() {

    return (
      <BrowserRouter>
        <Route exact path="/" component={AuthorizationPage} />
        <Route path="/usersPage" component={UsersPage} />
      </BrowserRouter>
    )
  }
}

export default App;
