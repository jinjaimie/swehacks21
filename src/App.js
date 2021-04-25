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

const FAKE_CHOICES = [
  {
    url: "black-lives-matter",
    name: "Black Lives Matter",
    image: "blm.jpg"
  },
  {
    url: "stop-asian-hate",
    name: "Stop Asian Hate",
    image: "sah.jpg"
  },
  {
    url: "fridays-for-future",
    name: "Fridays for Future",
    image: "fff.jpg"
  },
  {
    url: "animal-rights",
    name: "Animal Rights",
    image: "ar.jpg"
  },
  {
    url: "net-neutrality",
    name: "Net Neutrality",
    image: "nn.jpg"
  },
  {
    url: "womens-rights",
    name: "Women's Rights",
    image: "wr.jpg"
  }
]

function App() {
  const [data, setData] = useState([])
  return (
    <div>
      <header>

      </header>
      <main>
        <Switch>
          <Route path="/choices"><Dashboard data={FAKE_CHOICES}/></Route>
          <Route path="/dashboard"><Dashboard data={FAKE_DATA} /></Route>
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

export default App;
