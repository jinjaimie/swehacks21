import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


export function Details(props) {
  console.log(props)
  let name = props.name;
  let desc = props.description;
  let img = "../img/" + props.image;
  let data = props.data.map(d => {
    return(
      <Card key={d.id} className="button-card">
      <Accordion.Toggle as={Card.Header} eventKey={d.id}>
        {d.title}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={d.id}>
        <Card.Body>{d.info}</Card.Body>
      </Accordion.Collapse>
    </Card>)
  })
  return (
    <div>
      <h1>{name}</h1>
      <img className="detail-img" src={img} alt={name} />
      <p className="desc">{desc}</p>
      <hr/>
      <Accordion>
        {data}
      </Accordion>
    </div>
  )
}