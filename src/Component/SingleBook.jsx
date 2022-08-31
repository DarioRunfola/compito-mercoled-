
import { Component } from 'react';
import {Button,Card } from 'react-bootstrap';


class SingleBook extends Component {
    render() {
        return (
            <Card style={{ width: '100%' }}>
                <Card.Img  src={this.props.book.img} />
                <Card.Body>
                    <Card.Title>{this.props.book.titles}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )

    }




}


export default SingleBook