import {bookDetails} from '../actions/constants';
import {initialAppState} from '../appState';

const books = (state = initialAppState, action) => {
    switch(action.type){
        case bookDetails.ADD_BOOK:
            return {
                ...state,
                books: [
                    ...state.books,
                    {
                        bookId: action.id,
                        bookName: action.book['bookname'],
                        bookDesc: action.book['bookdesc'],
                        bookAuthor: action.book['bookauthor']
                    }
                ]
            }
        default:
            return state
    }
}

export default books;