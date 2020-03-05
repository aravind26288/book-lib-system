import React from 'react';
import {
    Row,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
Table} from 'reactstrap';
import LoadingIndicator from './LoadingIndicator';
import {addBookDetails} from '../actions/actions';
import { connect } from 'react-redux';

class Manage extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            isAddModalOpen: false,
            loading: false,
            bookDetails: {}
        };
        this.addBookModal = this.addBookModal.bind(this);
        this.addBooks = this.addBooks.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.closeAddBookModal = this.closeAddBookModal.bind(this);
    }
    addBookModal(){
        this.setState({
            isAddModalOpen: true,
        });
    }
    handleInputChange(e){
        this.setState({
            bookDetails:{...this.state.bookDetails, [e.target.name]: e.target.value}
        })
    }
    closeAddBookModal(){
        this.setState({
            loading: false,
            isAddModalOpen: !this.state.isAddModalOpen
        })
    }
    addBooks(e){
        e.preventDefault();
        this.setState({
            loading: true
        });
        console.log(this.state.bookDetails);
        this.props.addBook(this.state.bookDetails);
        this.closeAddBookModal();
    }
    render(){
        return (
            <React.Fragment>
            <Row className="mt-3">
                <Col className="book-lib-app__content-wrapper">
                <Row>
                    <Col><div className="book-lib-app__content-title">Manage Books</div></Col>
                </Row>
                <Row className="mt-3">
                    <Col><Button className="book-lib-app__action-btn bg-dark-blue" onClick={this.addBookModal}>Add Book</Button></Col>
                </Row>
                <Row className="mt-3">
                <Col>
                 <Modal isOpen={this.state.isAddModalOpen}>
                 {this.state.loading &&
                 <LoadingIndicator />
                 }
                 <Form className="manage-books-form" onSubmit={this.addBooks}>
                     <ModalHeader className="manage-books-form__title">Add Book</ModalHeader>
                     <ModalBody>
                         
                             <FormGroup>
                                 <Label className="manage-books-form__label">Book Name</Label>
                                 <Input type="text" name="bookname" id="book-name" className="manage-books-form__input" onChange={this.handleInputChange}/>
                             </FormGroup>
                             <FormGroup>
                                 <Label className="manage-books-form__label">Book Description</Label>
                                 <Input type="text" name="bookdesc" id="book-desc" className="manage-books-form__input" onChange={this.handleInputChange}/>
                             </FormGroup>
                             <FormGroup>
                                 <Label className="manage-books-form__label">Author</Label>
                                 <Input type="text" name="bookauthor" id="book-author" className="manage-books-form__input" onChange={this.handleInputChange}/>
                             </FormGroup>
                         
                     </ModalBody>
                     <ModalFooter><Button className="book-lib-app__action-btn book-lib-app__action-btn--cancel" onClick={this.closeAddBookModal} type="button">Cancel</Button><Button className="book-lib-app__action-btn book-lib-app__action-btn--submit bg-dark-blue" type="submit">Add</Button></ModalFooter>
                     </Form>
                 </Modal>
                 </Col>
            </Row>
            <Row>
            <Col>
                 <Table className="book-lib-table" bordered striped>
                     <thead>
                         <tr>
                             <th className="txt-center" width="100">Sl. No</th>
                             <th className="txt-center">Book Name</th>
                             <th className="txt-center">Description</th>
                             <th className="txt-center">Author</th>
                         </tr>
                     </thead>
                     <tbody>
                         {Array.isArray(this.props.books) && this.props.books.length === 0 &&
                         <tr>
                             <td colSpan="4" align="center">No results</td>
                         </tr>
                         }
                         {this.props.books.map((books) => 
                         <tr key={books.bookId}>
                             <td className="book-lib-table-col txt-center">{books.bookId}</td>
                         <td className="book-lib-table-col txt-center">{books.bookName}</td>
                         <td className="book-lib-table-col txt-center">{books.bookDesc}</td>
                         <td className="book-lib-table-col txt-center">{books.bookAuthor}</td>
                         </tr>
                         )}
                     </tbody>
                 </Table>
                 </Col>
            </Row>
                </Col>
            </Row>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    books: state.books
});

const mapDispatchToProps = dispatch => ({
    addBook: book => {console.log(book); dispatch(addBookDetails(book))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Manage);