import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'

const CreateBooks = () => {
  const [isBookCreated, updateCreateBook] = useState(false);
  const [bookTitle, updateTitle] = useState('')
  const [bookDescription, updateDescription] = useState('')
  const [bookCover, updateCover] = useState('')
  const [bookPrice, updatePrice] = useState(0)

  const createNewBook = event => {
    event.preventDeafult()
    const bookData = {
      id: uuidv4(),
      title: bookTitle,
      description: bookDescription,
      cover: bookCover,
      price: bookPrice,
    }

    const jsonData = JSON.stringify(bookData);

    const createNewBookJSON = async() => {
      try{
        const response = await axios.get("http://localhost:3000/create-books", jsonData)
        updateCreateBook(true);
      }catch(error){
        console.log(error)
      }
    }

    createNewBookJSON()
  }

  return (
    <div className="text-2xl p-5 flex flex-col items-center">
      {isBookCreated ? (
        <div>Book Created Successfully</div>
      ) : (
        <div>
          <h1>Create a Book</h1>
          <form onSubmit={createNewBook} className="m-5">
            <label htmlFor="title">Book Title</label>
            <input id="title" className="border" type="text" />
            <br />
            <label htmlFor="description">Description</label>
            <textarea id="description" className="border" type="text" />
            <br />
            <label htmlFor="price">Book Price</label>
            <input id="price" className="border" type="number" />
            <br />
            <label htmlFor="cover">Cover Image</label>
            <input id="cover" className="border" type="text" />
            <br />
            <button onClick={createNewBook} type="submit">Create</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreateBooks;
