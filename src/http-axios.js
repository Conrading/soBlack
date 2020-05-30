import axios from 'axios'

export default axios.create({
    baseURL: "http://localhost:5071",
    headers: {"Content-type": "application/json",}
});