import './index.css';
import React from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';

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
  return (
    <div>
      <header>

      </header>
      <main>
        <Switch>
          <Route path="/choices"></Route>
          <Route path="/dashboard"></Route>
          <Route path="/login"></Route>
          <Route path="/settings"></Route>
          <Redirect to="/dashboard" />
        </Switch>
      </main>
    </div>
  );
}

function Dashboard() {
  return (
    <div>

    </div>
  )
}

function Card(props) {
  let img = props.image
  let name = props.name
  let url = props.url
  return (
    <div>

    </div>
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
