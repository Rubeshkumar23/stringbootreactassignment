import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        UserService.getUsers().then((response) =>{
            this.setState({ users: response.data})
        });
    }
    render(){
        return (
            <div>
                <h1 className = "text-center"> Student List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td>Student Id</td>
                            <td>Student First Name</td>
                            <td>Student Last Name</td>
                            <td>Student Email Id</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr key = {user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.firstname}</td>
                                    <td>{user.lastname}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}
export default UserComponent