const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
	.post(booksController.create);
	
router.route("/books")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router.route("/:id")
// router.route("/books/:id")
  .get(booksController.findById)
  .put(booksController.update)
	.delete(booksController.remove);
	
// Loads index.html if no route is hit
router.route("*")
  .get(booksController.findAll)
	.post(booksController.create);

module.exports = router;