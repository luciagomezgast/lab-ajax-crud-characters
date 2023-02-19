class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios
    .get(this.BASE_URL + "/characters")
    .then(result=>{
      console.log("data :",result.data)
      return result.data;
    })
    .catch((err)=>console.log(err));
  }

  getOneRegister (id) {
    return axios
    .get(`${this.BASE_URL}/characters/${id}`)
    .then(result=>{
      return result.data
    })
    .catch((err)=>console.log(err));
  }

  createOneRegister ({name, occupation,weapon,cartoon}) {
return axios
.post(this.BASE_URL, {name, occupation,weapon,cartoon})
.then(result=>{
  return result.data
})
  }

  updateOneRegister () {

  }

  deleteOneRegister (id) {
    return axios
    .delete(`${this.BASE_URL}/characters/${id}`)
  }
}
