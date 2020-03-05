import React from 'React';
import Home from '../components/Home';
import Enzyme, {mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import {addBookDetails} from '../actions/actions';
import {Provider} from 'react-redux';
import {bookDetails} from '../actions/constants';
import Adapter from 'enzyme-adapter-react-16';
const mockStore = configureMockStore();
Enzyme.configure({adapter: new Adapter()});
const initialAppState = {
    books:[]
};
describe('home page', () => {
    it('home page renders a search box', () => {
        let state;
        const store = mockStore(initialAppState);
        const homeComp = mount(<Provider store={store}><Home /></Provider>);
        store.dispatch(addBookDetails({bookname: 'B 1', bookdesc: 'B 1 DESC', bookauthor: 'Aravind'}));
        store.dispatch(addBookDetails({bookname: 'B 2', bookdesc: 'B 2 DESC', bookauthor: 'Accenture'}));
        store.dispatch(addBookDetails({bookname: 'B 3', bookdesc: 'B 3 DESC', bookauthor: 'Aravind B'}));
        let searchInput = 'Accenture';
        const searchInputComp = homeComp.find('#search-book').first();
        searchInputComp.simulate('keyup', {target: {name: 'search-book',value: searchInput}});
        state = store.getState();
         expect(homeComp).toMatchSnapshot();
        })
})