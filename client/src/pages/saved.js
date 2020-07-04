import React, { useEffect, useState } from "react";
import BooksList from '../components/BooksList';
import API from '../utils/API';
// import './App.css';

function Saved() {
	const [books, setBooks] = useState([])

	useEffect(() => {
		loadBooks()
	}, [])

	// Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };
	
	function deleteBook(id) {
    // add code here to remove a book using API
      API.deleteBook(id)
      .then(_ => loadBooks())
      .catch(err => {
        console.log(err);
      })
  }

	return (
		<div>
			{/* <SavedList books={books} /> */}
			</div>
	);
}

export default Saved;