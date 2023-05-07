import React, { useState } from "react";

const CreateBooks = () => {
  const [isBookCreated, updateCreateBook] = useState(false);
  const [bookTitle, updateTitle] = useState("");
  const [bookDescription, updateDescription] = useState("");
  const [bookCover, updateCover] = useState("");
  const [bookPrice, updatePrice] = useState(0);

  const createNewBook = (event) => {
    event.preventDeafult();
    const bookData = {
      title: bookTitle,
      description: bookDescription,
      cover: bookCover,
      price: bookPrice,
    };

    const jsonData = JSON.stringify(bookData);

    const createNewBookJSON = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/create-books",
          jsonData
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
      <div>
        <h1>Create a Book</h1>
        <form onSubmit={createNewBook} className="m-5">
          <div>
            <label htmlFor="title">Book Title</label>
            <input id="title" className="border" type="text" />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea id="description" className="border" type="text" />
          </div>
          <div>
            <label htmlFor="price">Book Price</label>
            <input id="price" className="border" type="number" />
          </div>
          <div>
            <label htmlFor="cover">Cover Image</label>
            <input id="cover" className="border" type="text" />
          </div>
          <div>
            <label htmlFor="author">Author</label>
            <input id="author" className="border" type="text" />
          </div>
          <div>
            <div>
              <label htmlFor="inStock">In Stock</label>
              <input value={true} id="inStock" className="border" type="radio" />
            </div>
            <div>
              <label htmlFor="noStock">Out of Stock</label>
              <input value={false} id="noStock" className="border" type="radio" />
            </div>
          </div>
          <button onClick={createNewBook} type="submit">
            Create Book
          </button>
        </form>
      </div>
    );
  };

  return (
    <div className="text-2xl p-5 flex flex-col items-center">
      {isBookCreated ? (
        <div>Book Created Successfully</div>
      ) : (
        renderAddBookForm()
      )}
    </div>
  );
};

export default CreateBooks;
