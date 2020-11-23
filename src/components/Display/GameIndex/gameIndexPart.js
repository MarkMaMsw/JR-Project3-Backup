import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';


class GameIndexPart extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render(){
        return <Container id={this.props.text}>
            <Row>
                <Col xs={4}>{this.props.text}</Col>
                <Col xs={8}>Text for {this.props.text}</Col>
            </Row>
        </Container>
    }
}

export default GameIndexPart;