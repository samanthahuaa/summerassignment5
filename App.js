import React from 'react';

import './App.css';
import Joke from './Joke'

import noodledadjoke from './public/noodledadjoke.jpg'
import nutsdadjokes from './public/nutsdadjokes.jpg'
import eveningnews from './public/eveningnews.png'
import koala from './public/koala.jpg'
import stick from './public/stick.png'

function App() {
  return (
    <div>
      <Joke
        question='What do you call a fake pasta?'
        answer='Impasta'
        img={noodledadjoke}
      />
      <Joke
        question='What did the pecan say to the walnut?'
        answer='We&#39;re friends because we&#39;re both nuts'
        img={nutsdadjokes}
      />
      <Joke 
        question='What is the definition of the early evening news?' 
        answer='It starts with the words "Good evening" then spends the next half an hour telling you why it isn&#39;t one'
        img={eveningnews}
      />
      <Joke 
        question='Why aren’t koalas actual bears?' 
        answer='They don’t meet the koalafications'
        img={koala}
      />
      <Joke 
        question='What&#39;s brown and sticky?' 
        answer='A stick'
        img={stick}
      />
    </div>
  );
}

export default App;
