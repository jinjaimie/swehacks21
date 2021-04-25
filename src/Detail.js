import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


export function Details(props) {
  console.log(props)
  let name = props.name;
  let desc = props.description;
  let data = props.data.map(d => {
    return(
      <Card key={d.id}>
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
      <img className="detail-img" src={props.image} alt={name} />
      <p className="desc">{desc}</p>
      <hr/>
      <Accordion>
        {data}
      </Accordion>
    </div>
  )
}

function Btn(props) {
  let name = props.name;
  return (
    <div className='button-divs'>
      <h2>{name}</h2>
    </div>
  )
}