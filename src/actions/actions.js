import {bookDetails} from './constants';

let bookId = 1;
export const addBookDetails = (book) => {
    return {
    type: bookDetails.ADD_BOOK,
    id: bookId++,
    book
    }
};

export const searchBook = (searchTerm) => ({
    type: bookDetails.SEARCH_BOOK,
    searchTerm
})