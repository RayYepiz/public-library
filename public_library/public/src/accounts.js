function findAccountById(accounts, id) {
   let found = accounts.find(acc => acc.id === id);
  return found
}

function sortAccountsByLastName(accounts) {
  
  let sorted = accounts.sort((a,b) => {
    if (a.name.last < b.name.last){return -1;}
    if(a.name.last > b.name.last){return 1;}
    return 0
  })
  return sorted
}

function getTotalNumberOfBorrows(account, books)  {
  const { id: accId } = account;

  return books.reduce((accumulator, book) => {
    return (
      accumulator +
      book.borrows
        .filter(borrow => borrow.id === accId)
        .reduce((accumulatorBorrows, borrow) => accumulatorBorrows + 1, 0)
    );
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
 let result = [];
 let borrowMatch = [];
 books.forEach((item) => {
  const borrowed = item.borrows;
  const book = {
   id: item.id,
   title: item.title,
   genre: item.genre,
   authorId: item.authorId,
   author: {},
   borrows: {}
  };
  const { id, title, genre, authorId, author, borrows } = book;

  borrowed.forEach((borrow) => {
   if (borrow.id === account.id && borrow.returned === false) {
    result.push(book);
    borrowMatch.push(borrow);
    book.borrows = borrowMatch;
    book.author = authors.filter((auth) => auth.id === book.authorId)[0];
   }
  });
 });
 return result;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
