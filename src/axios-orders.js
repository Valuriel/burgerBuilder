import axios from 'axios';

/* firebase is used as a database to send requests */
const instance = axios.create({
    baseURL: 'https://react-burger-builder-ef336-default-rtdb.firebaseio.com/'
});

export default instance;