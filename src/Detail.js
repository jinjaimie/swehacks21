import React from 'react';

export function Details(props) {
  console.log(props)
  let name = props.name;
  let img = "img/" + props.image;
  let url = props.url;
  let desc = props.description;
  console.log(img)
  return (
    <div>
      <h1>{name}</h1>
      <img className="detail-img" src={img}></img>
      <p className="desc">{desc}</p>
      <hr/>
      <Btn name='Learn about the movement' />
      <Btn name='Find resources' />
      <Btn name='How to get involved' />
      <Btn name='Opportunities in Seattle' />
      <Btn name='Current news' />
      <Btn name='Stories' />
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