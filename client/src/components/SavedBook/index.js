const SavedBook = ({ book }) => {
  return (
		<div>
			<div className='row' key={book.id}>
				<div className='col'>{book.volumeInfo.title}
				<button onClick={handleSave({book})} className="save">Save</button>
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
						<a className="btn view" href={linkurl + book.id} target="_blank">
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
					src={imageurlA + book.id + imageurlB} />
					<span className="text">{book.volumeInfo.description}</span>
				</div>
			</div>
		</div>
  )
};

export default SavedBook;