import React from 'react';
// import API from "../../utils/API";
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

 
const Book = ({ book }) => {
  return (
		<div>
			<div className='row' key={book.id}>
				<div className='col'>{book.title}
					<button>
						<a className="btn view" href={linkurl + book.id} target="_blank">
							View
						</a>
					</button>
					<DeleteBtn />
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
					src={imageurlA + book.id + imageurlB} />
					<span className="text">{book.volumeInfo.description}</span>
				</div>
			</div>
		</div>
  )
};
const BooksList = ({ books }) => {
  return (
    <ul>
      {books.items.map((book, index) => {
        return <Book book={book} key={index} />;
      })}
    </ul>
  );
};
export default BooksList;