import React from 'react';
import './style.css';

const BookSearchForm = ({
  onSubmitHandler,
  searchTerm,
  onInputChange,
  error,
}) => {
  return (
    <form className="form-group row" onSubmit={onSubmitHandler}>
      <label className="col col-form-label">
        <span>Search for books by name or author</span>
				</label>
        <input
          type="search"
          placeholder="enter here"
          value={searchTerm}
          onChange={onInputChange}
          required
        />
        <button type="submit" className="btn btn-warning">Search</button>
      
      {error && (
        <div style={{ color: `red` }}>
          some error occurred, while fetching api
        </div>
      )}
    </form>
  );
};

export default BookSearchForm;