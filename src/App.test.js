import React from 'React';
import App from './App';
import Enzyme, {shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import {addBookDetails} from './actions/actions';
import {bookDetails} from './actions/constants';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
const mockStore = configureMockStore();
Enzyme.configure({adapter: new Adapter()});
const initialAppState = {
    books:[]
};

test('manage page handles adding book details', () => {
const store = mockStore(initialAppState);
const appComp = shallow(<Provider store={store}><App /></Provider>);
 expect(appComp).toMatchSnapshot();
})