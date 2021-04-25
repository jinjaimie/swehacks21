import './index.css';
import React, { useState } from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';
import {CardInfo} from './Card';
import CardDeck from 'react-bootstrap/CardDeck'

const FAKE_DATA = [
  {
    url: "black-lives-matter",
    name: "Black Lives Matter",
    image: "blm.jpg"
  },
  {
    url: "stop-asian-hate",
    name: "Stop Asian Hate",
    image: "sah.jpg"
  }
]

function App() {
  const [data, setData] = useState(FAKE_DATA)
  return (
    <div>
      <header>

      </header>
      <main>
        <Switch>
          <Route path="/choices"><Choices /></Route>
          <Route path="/dashboard"><Dashboard data={data} /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/settings"><Settings /></Route>
          <Redirect to="/dashboard" />
        </Switch>
      </main>
    </div>
  );
}

function Dashboard(props) {
  let cardData = props.data.map( data => {
    return <CardInfo key={data.url} url={data.url} name={data.name} image={data.image}></CardInfo>
  })
  return (
    <CardDeck>
      {cardData}
    </CardDeck>
  )
}

function Login() {
  return (
    <div>

    </div>
  )
}

function Settings() {
  return (
    <div>

    </div>
  )
}

function Choices() {
  return (
    <div>

    </div>
  )
}

export default App;
