import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_API_URL}/api/queens/`


export const create = async (queen) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(queen),
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getAll = async () => {
  try {
    const res = await fetch(`${BASE_URL}`)
    return await res.json()
  } catch (error) {
    throw error
  }
}

export const getOne = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}${id}`)
    return await res.json()
  } catch (error) {
    throw error
  }
}

export const update = async (queen) => {
  try {
    const res = await fetch(`${BASE_URL}${queen.id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      }, 
      body: JSON.stringify(queen)
    })
    return await res.json()
  } catch (error) {
    throw error
  }
}

export const deleteOne = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return await res.json()
  } catch (error) {
    throw error
  }
}

export const addRead = async (id, data) => {
  try {
    const res = await fetch(`${BASE_URL}${id}/reads`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(data),
    })
    return await res.json()
  } catch (error) {
    throw error
  }
}

export const assocShow = async (queenId, showId) => {
  try {
    const res = await fetch(`${BASE_URL}${queenId}/shows/${showId}`, {
      method: "LINK",
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
    })
    return await res.json()
  } catch (error) {
    console.log(error)
    throw error
  }
}