import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
// import { Input, TextArea, FormBtn } from "../components/Form";

function Saved() {
	// Setting our component's initial state
	const [books, setBooks] = useState([]);

	// Load all books and store them with setBooks
	useEffect(() => {
		loadBooks();
	}, []);

	// Loads all books and sets them to books
	function loadBooks() {
		API.getBooks()
			.then((res) => setBooks(res.data))
			.catch((err) => console.log(err));
	}

	// Deletes a book from the database with a given id, then reloads books from the db
	function deleteBook(id) {
		API.deleteBook(id)
			.then((res) => loadBooks())
			.catch((err) => console.log(err));
	}

	return (
		<Container fluid>
			<Jumbotron>
				<h1>My Saved Books</h1>
			</Jumbotron>

			
			{books.length ? (
            books.map(book => (
              <div className="outer" key={book._id}>
              <Row>  
              <Col size="md-6" key={book._id}>
                {book.title}
              </Col>
              <Col size="md-6">
                 <button onClick={() => deleteBook(book._id)} className="delete btn btn-danger">Delete</button>
                 <button className="btn btn-secondary"><a href={book.link} styletarget="_blank" rel="noopener noreferrer" className="view">View</a></button>
               </Col>
              </Row>
              <Row>
                <Col size="md-6">{book.authors}</Col>
              </Row> 
              <Row>
                <Col size="md-3">
                <img alt={`${book.title} book`}
           src={book.image} />
                </Col>
                <Col size="md-9">
          <span className="text">{book.description}</span> 
                </Col>
              </Row>
              </div>  
            ))) : (<h4>No Results to Display</h4>)}
		</Container>
	);
}

export default Saved;
