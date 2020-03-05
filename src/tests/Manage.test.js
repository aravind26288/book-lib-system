import React from 'React';
import Manage from '../components/Manage';
import Enzyme, {shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import {addBookDetails} from '../actions/actions';
import {bookDetails} from '../actions/constants';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
const mockStore = configureMockStore();
Enzyme.configure({adapter: new Adapter()});
const initialAppState = {
    books:[]
};

test('manage page handles adding book details', () => {
let actions;
const store = mockStore(initialAppState);
const manageComp = shallow(<Provider store={store}><Manage /></Provider>);
store.dispatch(addBookDetails({bookname: 'B 1', bookdesc: 'B 1 DESC', bookauthor: 'Aravind'}));
store.dispatch(addBookDetails({bookname: 'B 2', bookdesc: 'B 2 DESC', bookauthor: 'Aravind A'}));
store.dispatch(addBookDetails({bookname: 'B 3', bookdesc: 'B 3 DESC', bookauthor: 'Aravind B'}));
actions = store.getActions();
 expect(actions[0].type).toBe(bookDetails.ADD_BOOK);
})