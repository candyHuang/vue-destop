import axios from 'axios'

const API_ROOT = process.env.NODE_ENV === 'production' ? window.GLOBLE_BASE : '/api'

export default {
  // get/save/query  module  list/byId/
  // App
  getAppAllAreas(data) {
    return axios.get(`${API_ROOT}/user/list`, {
      params: data
    })
  }

}
