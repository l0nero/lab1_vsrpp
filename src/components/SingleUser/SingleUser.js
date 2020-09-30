import React from 'react';

import './SingleUser.css';

class SingleUser extends React.Component {

    render() {

        const { id, firstName, lastName, email, onDelete } = this.props;

        return (
            <tr>
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td><button type="button" class="btn btn-info" onClick={onDelete}>Delete</button></td>
            </tr>
        )
    }
}

export default SingleUser;