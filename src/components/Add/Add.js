import React from 'react';
import PropTypes from 'prop-types';

import './Add.css';


class Add extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        email: ''
    }

    onInputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })


    }

    onSubmit = (e) => {
        const { firstName, lastName, email } = this.state;
        e.preventDefault();
        this.props.addNewPerson(firstName, lastName, email);
    }

    render() {

        return (
            <div className="addForm">
                <form onSubmit={this.onSubmit}>
                    <div className="form-row">

                        <div className="col">
                            <label for="firstNameInput" >First Name</label>
                            <input
                                name="firstName"
                                className="form-control"
                                id="firstNameInput"
                                onChange={this.onInputChange}
                                required
                            />
                        </div>
                        <div className="col">
                            <label for="lastNameInput">Last Name</label>
                            <input
                                name="lastName"
                                className="form-control"
                                id="lastNameInput"
                                onChange={this.onInputChange}
                                required
                            />
                        </div>
                        <div className="col">
                            <label for="emailInput">Email</label>
                            <input
                                name="email"
                                type="email"
                                className="form-control"
                                id="emailInput"
                                onChange={this.onInputChange}
                                required
                            />
                        </div>
                        <div className="col-auto ">
                            <button type="submit" className="btn btn-info addBtn">
                                Add User
</button>
                        </div>
                    </div>
                </form>

            </div>
        );
    }
}

Add.propTypes = {
    addNewPerson: PropTypes.func,
}

Add.defaultProps = {
    addNewPerson: ()=>{},
}

export default Add;
