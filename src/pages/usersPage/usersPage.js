import React from 'react';
import { connect } from 'react-redux';
import Add from '../../components/Add/Add';
import ListOfUsers from '../../components/ListOfUsers/ListOfUsers';
import { deletePerson } from '../../redux/actions';


class UsersPage extends React.Component {

    render() {
        return (
            <div>
                <Add />
                <ListOfUsers  />
            </div>
        )
    }
}


export default UsersPage;