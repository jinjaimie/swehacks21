import {Card} from 'react-bootstrap';
import React from 'react';

export function CardInfo(props) {
    let img = "img/" + props.image
    let name = props.name
    let url = props.url
    console.log(img)
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{url}</Card.Text>
        </Card.Body>
    </Card>
    );
}