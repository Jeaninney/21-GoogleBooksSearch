# 21-Google Books Search

## HOMEWORK 21 - MERN

## Description

This is a MERN application. I've used MongoDB to store the data. Express is used to run the server. The client-side code is all in React and it all uses Node.

It's a simple application that allows a user to search for books using the Google Boks API, and allows the user to store books in a database.

## User Story

As a person who enjoys reading books

I WANT to be able to view information about books and store that information

SO THAT I can remember which books I was interested in when I get suggestions from others.

GIVEN an application that retrieves information about books and stores selected information
WHEN I navigate to the Home page
THEN I am taken to the Search page with no results
WHEN I search for a book by title or author
THEN the results are displayed for the items that match my search terms
WHEN I click the View button
THEN I am take to the corresponding Google Books page 
WHEN I click the Save button
THEN the corresponding book information is stored in the database
WHEN I navigate to the Saved page
THEN the books I've saved are displayed
WHEN I click Delete
THEN the corresponding book is removed from the saved books

## Acceptance Criteria


DONE - Search Page - User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.

DONE - Saved Page - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.

DONE - Using mongoose, created a Book schema.

DONE - Books contain each of the following fields: title, authors, description, image, and link


DONE - The required routes have been incorporated. 
* /api/books (get) - returns all saved books as JSON. 
* /api/books (post) - Saves a new book to the database. 
* /api/books/:id (delete) - Deletes a book from the database by Mongo _id.
* (get) - Will loads the single HTML page in client/build/index.html. 
