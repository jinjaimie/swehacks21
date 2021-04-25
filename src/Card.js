import {Card} from 'react-bootstrap';
import React from 'react';
import { NavLink } from 'react-router-dom';

export function CardInfo(props) {
    let img = "img/" + props.image;
    let name = props.name
    let url = props.url
    console.log(img)
    return (
        <NavLink to={"/choices/" + props.url}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </NavLink>
    );
}