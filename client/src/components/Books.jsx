import React, { useEffect, useState } from 'react'
import axios from "axios"

const Books = () => {
  const [booksData, updateBooks] = useState([])

  useEffect(() => {
    const fetchAllBooks = async() => {
      try{
        const response = await axios.get("http://localhost:3000/")
        console.log(response)
      }catch(error){
        console.log(error)
      }
    }
    fetchAllBooks()
  }, [])

  return (
    <div>books</div>
  )
}

export default Books