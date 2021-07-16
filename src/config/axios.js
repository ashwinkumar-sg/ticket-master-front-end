import Axios from 'axios'

const axios = Axios.create({
   // baseURL : 'http://localhost:3085'
   baseURL: 'http://dct-ticket-master.herokuapp.com'

})

export default axios