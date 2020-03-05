import React from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Input} from 'reactstrap';
import {connect} from 'react-redux';

export class Home extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            visibleBooks: [],
            searchFlag: false 
        }
        this.searchBooks = this.searchBooks.bind(this);
    }
    searchBooks(e){
        let searchTerm = e.target.value;
        if(searchTerm.trim() !== ''){
            let filteredBooks = this.props.books.filter(function(book, index){
                return (book.bookName.toLowerCase().includes(searchTerm.toLowerCase())  || book.bookDesc.toLowerCase().includes(searchTerm.toLowerCase()) || book.bookAuthor.toLowerCase().includes(searchTerm.toLowerCase()));
            });

            this.setState({
                visibleBooks: filteredBooks,
                searchFlag: true
            });
        }
        else{
            let filteredBooks = this.props.books.filter(function(book, index){
                return '';
            });

            this.setState({
                visibleBooks: filteredBooks,
                searchFlag: false
            });
        }
    }
    render(){
        return (
            <React.Fragment>
            <Container>
                <Row className="mt-3">
                    <Col className="book-lib-app__content-wrapper">
                    <Row className="mt-2">
                        <Col><div className="book-lib-app__content-title">Home</div></Col>
                        </Row>
                    <Row className="mt-5">
                        <Col lg={{size: 6, offset: 3}} md={{size: 8, offset: 2}} sm="12" xs="12">
                        <Form>
                          <FormGroup>
                              <Input type="text" className="searchBook" name="search-book" id="search-book" placeholder="Search book by name, author..." onKeyUp={this.searchBooks}/>
                          </FormGroup>
                      </Form>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col lg={{size: 6, offset: 3}} md={{size: 8, offset: 2}} sm="12" xs="12">
                        {Array.isArray(this.state.visibleBooks) && this.state.searchFlag === true && this.state.visibleBooks.length === 0 &&
                         <Row className="book-lib-app__book">
                             <Col>
                             <div>
                         No results found
                     </div>
                             </Col>
                         </Row>
                         }
                         {this.state.visibleBooks.map((books) => 
                         <Row key={books.bookId} className='book-lib-app__book'>
                             <Col>
                                <div><span className="book-lib-app__book-txtLabel">Book name:</span> {books.bookName}</div>
                                <div><span className="book-lib-app__book-txtLabel">Description:</span> {books.bookDesc}</div>
                                <div><span className="book-lib-app__book-txtLabel">Author:</span> {books.bookAuthor}</div>
                             </Col>
                         </Row>
                         )}
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    books: state.books
});

export default connect(mapStateToProps, null)(Home);