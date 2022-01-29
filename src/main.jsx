import axios from 'axios'
const pokeurl = 'https://pokeapi.co/api/v2/pokemon'

export const getAll = async() => {
    const resp =await axios.get(`${pokeurl}?limit=50`)
console.log(resp.data)
return resp.data
}

export const getByName = async(name) => {
    const resp =await axios.get(`${pokeurl}/${name}`)
console.log(resp.data)
return resp.data
}




