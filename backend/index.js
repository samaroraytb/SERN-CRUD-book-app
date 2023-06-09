const express = require("express");
const {open} = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");
const cors = require("cors")

// Define Database 
const databasePath = path.join(__dirname, "books.db");

// Calling express
const app = express();
app.use(express.json());
app.use(cors())


// Initialization the Database and Server
let database = null;

const initializationDatabaseAndServer = async () => {
  try{
    database = await open({
      filename: databasePath,
      driver: sqlite3.Database,
    })
    app.listen(3000, console.log("Server is Running on http://localhost:3000/"))
  }catch(error){
    console.log(`Server Error: ${error.message}`);
    process.exit(1);
  }
}

initializationDatabaseAndServer();

// APIs

app.get("/", async (request, response) => {
  const queryToDisplayAllBooks = `SELECT * FROM books`
  const displayAllBooks = await database.all(queryToDisplayAllBooks);
  response.send(displayAllBooks)
})

// CREATE NEW BOOK API
app.post("/create-books", async (request, response) => {
  
  const { title, description, price, cover, author} = request.body;

  const queryToAddNewBook = `
  INSERT INTO books(title, description, cover, price, author)
  VALUES ('${title}', '${description}',  '${cover}', '${price}', '${author}');`;
  
  await database.run(queryToAddNewBook);
  response.send("Book Created Successfully!!");
});

