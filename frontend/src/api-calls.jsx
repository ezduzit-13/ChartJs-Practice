import axios from 'axios'
const apiCalls = {}


apiCalls.url = 'http://localhost:8000/'

apiCalls.getRequest = async (url) => {
  let response = await fetch(url,{
    method:'GET',
    headers:{'Content-type': 'application/json'}
  })
  let data = response.json()
  return data
}

apiCalls.postRequest = async(url,obj) => {
  let response =  await fetch(url, {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(obj)
  })

  let data = await response.json()
  return data
}

apiCalls.putRequest = async (url,obj) => {
  let response =  await fetch(url, {
    method: 'PUT',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(obj)
  })
  
  let data = await response.json()
  return data
}

 apiCalls.deleteRequest  = (url)=>{
  axios.delete(url).then(()=>console.log('delete success'))
}

export default apiCalls

