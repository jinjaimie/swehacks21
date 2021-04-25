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
      <img src={img}></img>
      <p>{desc}</p>
      <Btn name='Learn about the movement' />
      <Btn name='Find Resources' />
      <Btn name='How to get involved' />
      <Btn name='Opportunities in Seattle' />
      <Btn name='Current News' />
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