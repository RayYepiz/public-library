function findAuthorById(authors, id) {
  let found = authors.find(author => author.id === id);
  return found
}

function findBookById(books, id) {
let findBook = books.find(book => book.id === id);
return findBook;
}

function findBooksReturned(books){
   let booksReturned = books
 .filter(
   (book) =>book.borrows
   .every((borrow) => borrow.returned === true)
   
    );return booksReturned
}
function findBooksBorrowed(books){
  let booksBorrowed = books
    .filter((book) =>book.borrows
            .some((borrow) => borrow.returned === false)
           
    );
   return booksBorrowed
}

function partitionBooksByBorrowedStatus(books) {
 let booksReturned = findBooksReturned(books);
  let booksBorrowed= findBooksBorrowed(books);
  
    let finalArray = [[...booksBorrowed], [...booksReturned]];
    return finalArray;
   }

function getBorrowersForBook(book, accounts) {
  return book.borrows
     .map((borrow) => {
      let account = accounts
      .find((account) => 
            account.id === borrow.id);
      return { ...borrow, ...account };
     })
     .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
