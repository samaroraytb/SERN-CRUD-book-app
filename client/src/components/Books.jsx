import React, { useEffect, useState } from 'react'
import axios from "axios"

const Books = () => {
  const [booksData, updateBooks] = useState([])

  useEffect(() => {
    const fetchAllBooks = async() => {
      try{
        const response = await axios.get("http://localhost:3000/")
        updateBooks(response.data)
      }catch(error){
        console.log(error)
      }
    }
    fetchAllBooks()
  }, [])

  const isDataAvailable = booksData.length > 0
  
  return (
    <div className='text-2xl p-5 flex flex-col items-center'>
      {isDataAvailable ? (<div>Data Available </div>) : (<div>No Data Available</div>)}
    </div>
  )
}

export default Books