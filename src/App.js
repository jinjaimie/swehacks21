import './index.css';
import React from 'react';
import {Switch, Redirect, Route, NavLink} from 'react-router-dom';
import { useParams } from 'react-router';
import {CardInfo} from './Card';
import {Details} from './Detail';
import CardDeck from 'react-bootstrap/CardDeck';

const FAKE_DATA = [
  {
    url: "black-lives-matter",
    name: "Black Lives Matter",
    image: "blm.jpg",
    description: "#BlackLivesMatter was founded in 2013 in response to the acquittal of Trayvon Martin’s murderer. Black Lives Matter Global Network Foundation, Inc. is a global organization in the US, UK, and Canada, whose mission is to eradicate white supremacy and build local power to intervene in violence inflicted on Black communities by the state and vigilantes. By combating and countering acts of violence, creating space for Black imagination and innovation, and centering Black joy, we are winning immediate improvements in our lives.",
    data: [{id:1,
            title: "Learn about the movement",
            info: "sfasdf"},
            {id:2,
              title: 'Find resources',
            info: "sfasdf"},
            {id:3,
              title: 'How to get involved',
            info: "sfasdf"},
            {id:4,
              title: 'Opportunities in Seattle',
            info: "sfasdf"},
            {id:5,
              title: 'Current news',
            info: "sfasdf"},
            {id:6,
              title: 'Stories',
            info: "sfasdf"}]
  },
  {
    url: "stop-asian-hate",
    name: "Stop Asian Hate",
    image: "sah.jpg",
    description: "In response to the alarming escalation in xenophobia and bigotry resulting from the COVID-19 pandemic, the Asian Pacific Planning and Policy Council (A3PCON), Chinese for Affirmative Action (CAA), and the Asian American Studies Department of San Francisco State University launched the Stop AAPI Hate reporting center on March 19, 2020. The center tracks and responds to incidents of hate, violence, harassment, discrimination, shunning, and child bullying against Asian Americans and Pacific Islanders in the United States.",
    data: [{id:1,
      title: "Learn about the movement",
      info: "sfasdf"},
      {id:2,
        title: 'Find resources',
      info: "sfasdf"},
      {id:3,
        title: 'How to get involved',
      info: "sfasdf"},
      {id:4,
        title: 'Opportunities in Seattle',
      info: "sfasdf"},
      {id:5,
        title: 'Current news',
      info: "sfasdf"},
      {id:6,
        title: 'Stories',
      info: "sfasdf"}]
  }
]

function App() {
  const data = FAKE_DATA // the user's personal interests
  //const [choices, setChoices] = useState(choiceOptions) // all available options
  return (
    <div>
      <header>
        <nav>
          <div className="links flex-container">
              <div><div id="title">Activate!</div></div>
              <NavLink exact to="/" activeClassName="activeClass">Dashboard</NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Switch>
          {//<Route exact path="/choices"><Dashboard data={choices} /></Route>
          //<Route path="/login"><Login /></Route>
          //<Route path="/settings"><Settings /></Route>
          }
          <Route path="/choices/:choice"><MoreInfo data={data}/></Route>
          <Route exact path="/"><Dashboard data={data} /></Route>
          <Redirect to="/" />
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
  let data = props.data.filter(data => data.url === currChoice)
  data = data[0]
  return (
    <Details name={data.name} image={data.image} description={data.description} data={data.data}/>
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

// function Login() {
//   return (
//     <div>

//     </div>
//   )
// }

// function Settings() {
//   return (
//     <div>

//     </div>
//   )
// }

export default App;
