import Card from 'react-bootstrap/Card';
import React from 'react';
import { NavLink } from 'react-router-dom';

export function CardInfo(props) {
    let img = "img/" + props.image;
    let name = props.name
    let url = props.url
    return (
        <NavLink to={"/choices/" + url}>
            <Card className="cardInfo">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </NavLink>
    );
}