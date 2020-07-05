import React from 'react';
import API from "../../utils/API";
// import API from "../utils/API";
import './style.css';

const imageurlA = "https://books.google.com/books/content?id=";
const imageurlB = "&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
const linkurl = "https://www.google.com/books/edition/_/"

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
}

 function handleSave(book) {
	console.log(book);
		API.saveBook({
	 
			title: book.volumeInfo.title,
			authors: book.volumeInfo.authors,
			description: book.volumeInfo.description,
			image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482930.jpg",
			link: book.volumeInfo.infoLink

		})
		.then(results => {
			console.log(results);
		})
			.catch(err => console.log(err));
	
};

const Book = ({ book, page }) => {
	console.log(book);
  return (
		<div>
			<div className='row' key={book.id}>
				<div className='col'>{ page==="search" ?  book.volumeInfo.title : book.title }
				<button onClick={()=>handleSave(book)} className="save">Save</button>
				{/* <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button> */}
						{/* <a className=" btn save" href={book.volumeInfo.infoLink} target="_blank">
							Save
						</a>
						 {/* onClick{...() => book.saveBook(book.id)} className='save'>Save */}
					{/* </button> */}
					{/* <button onClick{...() => book.viewBook(book.id)} className='view'>View</button> */}
					<button>
						<a className="btn view" href={book.volumeInfo.infoLink} target="_blank">
							View
						</a>
					</button>
				</div>
			</div>
			<div className='row'>
				<div className='col'>{book.volumeInfo.publishedDate}</div>
			</div>
			<div className='row'>
				<div className='col'>{bookAuthors(book.volumeInfo.authors)}</div>
			</div>
			<div className='row'>
				<div className='col img-fluid'>
					<img alt={`${book.volumeInfo.title} book`}
					// src={book.volumeInfo.imageLinks.thumbnail} />
					src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482930.jpg"} />
					<span className="text">{book.volumeInfo.description}</span>
				</div>
			</div>
		</div>
  )
};
const BooksList = ({ books, page }) => {
  return (
    <ul>
      {books.items.map((book, index) => {
        return <Book book={book}  page={page} key={index} />;
      })}
    </ul>
  );
};
export default BooksList;