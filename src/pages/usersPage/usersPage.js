import React from 'react';
import Add from '../../components/Add/Add';
import ListOfUsers from '../../components/ListOfUsers/ListOfUsers';
import CustomPaginationActionsTable from '../../components/rgrComponent/rgrComponent';


class UsersPage extends React.Component {

    render() {
        return (
            <div>
                <Add />
                <ListOfUsers  />
                <CustomPaginationActionsTable/>
            </div>
        )
    }
}


export default UsersPage;