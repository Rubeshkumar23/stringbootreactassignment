import userEvent from '@testing-library/user-event';
import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/api/users';

class Userservice {

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }
}

export default new Userservice();