import React from 'react';
import {Container, Row, Col} from 'reactstrap';

export default class Footer extends React.Component{
    render(){
        return (
            <React.Fragment>
            <Container fluid>
                <Row className="mt-4">
                <Col className="book-lib-app__footer">
                <div className="book-lib-app__footer-content">Copyright @ Aravind's Book Library</div>
                </Col>
                </Row>
            </Container>
            </React.Fragment>
        )
    }
}
