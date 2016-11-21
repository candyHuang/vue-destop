import axios from 'axios'
import { API_ROOT } from 'src/const.js'

export default  {
	getAllAreas(data) {
	  return axios.get(`${API_ROOT}/user/list`, {
	    params: data
	  })
	}
}