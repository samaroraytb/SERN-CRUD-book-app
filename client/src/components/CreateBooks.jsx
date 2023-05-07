import React, { useState } from "react";
import { BsCurrencyRupee } from 'react-icons/bs'
import axios from "axios"

const CreateBooks = () => {
  const [isBookCreated, updateCreateBook] = useState(false);
  const [bookTitle, updateTitle] = useState("");
  const [bookDescription, updateDescription] = useState("");
  const [bookCover, updateCover] = useState("");
  const [bookPrice, updatePrice] = useState("");
  const [bookAuthor, updateAuthor] = useState('');


  const createBookClicked = (event) => {
    event.preventDefault();
    const bookData = {
      title: bookTitle,
      description: bookDescription,
      cover: bookCover,
      price: bookPrice,
      author: bookAuthor
    };
    
    // const jsonData = JSON.stringify(bookData);
    console.log(bookData.title)
    const createNewBookJSON = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/create-books",
          bookData
        );
        updateCreateBook(true);
      } catch (error) {
        console.log(error);
      }
    };

    createNewBookJSON();
  };

  const renderAddBookForm = () => {
    return (
      <form onSubmit={createBookClicked} className="bg-white p-5 rounded-xl text-center max-w-[500px] text-[#212B27]">
        <h1 className=" font-bold text-3xl">Create a Book</h1>
        <p className="text-[15px] h-[30px]">Hola! you are creating a new Book using SERN Book App</p>
        <input onChange={event => updateTitle(event.target.value)} value={bookTitle} type="text" placeholder="Title" />
        <textarea onChange={event => updateDescription(event.target.value)}  value={bookDescription} type="text" placeholder="Write some Description" />
        <div>
          <div>
            <BsCurrencyRupee />
            <input onChange={event => updatePrice(event.target.value)}  value={bookPrice} type="number" placeholder="Price" />
          </div>
          <input  onChange={event => updateAuthor(event.target.value)} value={bookAuthor} type="text" placeholder="Author Name" />
        </div>
        <input  onChange={event => updateCover(event.target.value)} value={bookCover} type="text" placeholder="Cover Image" />
        <button onClick={createBookClicked} type="submit">Create Book</button>
        <p>Don’t want to create? <button>Go Back</button></p>
      </form>
    );
  };

  return (
    <div className="text-2xl p-5 flex flex-col items-center bg-[#84C7AE] min-h-screen w-full justify-center font-Karla">
      {isBookCreated ? (
        <div>Book Created Successfully</div>
      ) : (
        renderAddBookForm()
      )}
    </div>
  );
};

export default CreateBooks;