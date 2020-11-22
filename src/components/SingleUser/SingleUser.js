import React from 'react';
import PropTypes from 'prop-types';

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

SingleUser.propTypes = {
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string, 
    onDelete: PropTypes.func
}

SingleUser.defaultProps = {
    id: 0,
    firstName: 'no inf',
    lastName: 'no inf',
    email: 'no inf',
    onDelete: () => {}
}

export default SingleUser;