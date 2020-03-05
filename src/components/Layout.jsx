import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.PureComponent{
    render(){
        return (
            <React.Fragment>
            <Header />
            <Container>
                <Row>
                    <Col>
                    {this.props.children}
                    </Col>
                </Row>
            </Container>
            <Footer />
            </React.Fragment>
        )
    }
}
