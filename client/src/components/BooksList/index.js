import React from "react";
import API from "../../utils/API";
import "./style.css";

const imageurlA = "https://books.google.com/books/content?id=";
const imageurlB = "&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api";
const linkurl = "https://www.google.com/books/edition/_/";

// Separate the UI specific transforming logic to utils folder
//import { bookAuthors } from '../utils';
const bookAuthors = (authors) => {
	if (authors) {
		if (authors.length <= 2) {
			authors = authors.join(" and ");
		} else if (authors.length > 2) {
			let lastAuthor = " and " + authors.slice(-1);
			authors.pop();
			authors = authors.join(", ");
			authors += lastAuthor;
		}
	} else {
		authors = "Author not provided";
	}
	return authors;
};

function handleSave(book) {
	console.log(book);
	API.saveBook({
		title: book.volumeInfo.title,
		authors: book.volumeInfo.authors,
		description: book.volumeInfo.description,
		image: book.volumeInfo.imageLinks
			? book.volumeInfo.imageLinks.thumbnail
			: "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482930.jpg",
		link: book.volumeInfo.infoLink,
	})
		.then((results) => {
			console.log(results);
		})
		.catch((err) => console.log(err));
}

function searchImages(book) {
	if (book.volumeInfo.imageLinks) {
		return book.volumeInfo.imageLinks.thumbnail
	}
		return "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482930.jpg"
}


const Book = ({ book, page }) => {
	console.log(book);
	return (
		<div className= "mg-5 border-bottom border-warning rounded-lg">
			<div className="row" key={book.id}>
				<div className="col title ">
					
					<button type="button" onClick={() => handleSave(book)} className="btn btn-warning save">
					{page === "search" ? "Save" : "Delete"}
					</button>
					<button type="button" className="btn btn-secondary view" >
						<a
							href={book.volumeInfo.infoLink}
							target="_blank"
						>
							View
						</a>
					</button>
				</div>
			</div>
			<div className="row">
				<div className="col">
				{page === "search" ? bookAuthors(book.volumeInfo.authors) : book.authors}
				</div>
			</div>
			<div className="row">
				<div className="col">{page === "search" ? book.volumeInfo.publishedDate : ""}</div>
			</div>
			<div className="row">
				<div className="col img-fluid">
					<img 
						alt={page === "search" ? book.volumeInfo.title : book.title}
						src={ page === "search" ? searchImages(book) : book.image }
					/>
					<span className="text">{page === "search" ? book.volumeInfo.description : book.description}</span>
				</div>
			</div>
		</div>
	);
};
const BooksList = ({ books, page }) => {
	return (
<ul>
      {books.items.map((book, index) => {
        return <Book book={book}  page={page} key={index} />;
      })}
    </ul>
	)
};
export default BooksList;
