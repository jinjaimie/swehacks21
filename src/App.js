import './index.css';
import React, { useState } from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';
import { useParams } from 'react-router';
import {CardInfo} from './Card';
import CardDeck from 'react-bootstrap/CardDeck'
import choiceOptions from './choices.json'

const FAKE_DATA = [
  {
    url: "black-lives-matter",
    name: "Black Lives Matter",
    image: "blm.jpg",
    description: "",
  },
  {
    url: "stop-asian-hate",
    name: "Stop Asian Hate",
    image: "sah.jpg"
  }
]

function App() {
  const [data, setData] = useState(FAKE_DATA)
  const [choices, setChoices] = useState(choiceOptions)
  return (
    <div>
      <header>

      </header>
      <main>
        <Switch>
          <Route path="/dashboard"><Dashboard data={choices} /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/settings"><Settings /></Route>
          <Route path="/:choice"><MoreInfo data={data}/></Route>
          <Redirect to="/dashboard" />
        </Switch>
      </main>
      <footer>
      <p>by Jaimie Jin, Isabella Heppe</p>
        <p>Copyright &copy; 2021</p>
      </footer>
    </div>
  );
}

function MoreInfo(props) {
  const params = useParams();
  const currChoice = params.choice;
  props.data.filter(data => data.url = currChoice)
  return (
    <div></div>
  )
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
