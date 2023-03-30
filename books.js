function findAuthorById(authors, id) {
  for (item in authors) {
    if (authors[item].id === id) {return authors[item]}
  }
}

function findBookById(books, id) {
  for (item in books) {
    if (books[item].id === id) {return books[item]}
  }
}

function partitionBooksByBorrowedStatus(books) {
  let booksOut = books.filter((book) => 
    book.borrows.some((borrow) => borrow.returned === false))
  let booksReturned = books.filter((book) =>
    book.borrows.every((borrow) => borrow.returned === true))
  let bookStatus = [booksOut, booksReturned]
  return bookStatus
}

function getBorrowersForBook(book, accounts) {
  let findAccount = accounts.filter((account) => book.borrows.find((borrow) => borrow.id === account.id))
  const idArray = findAccount.map((account) => {
    const borrowed = book.borrows.find((borrow) => borrow.id === account.id)
    account.returned = borrowed.returned
    return account
  })
  return idArray                                                
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
