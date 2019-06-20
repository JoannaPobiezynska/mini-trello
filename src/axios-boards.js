import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://mini-trello-dbdde.firebaseio.com'
})

export default instance;