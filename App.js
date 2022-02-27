import { useState, useEffect } from 'react';
import './App.css';

function App() {

  // set variable to an empty string
  const [url, setUrl] = useState('')
    // if variable url equals empty string, set setUrl to what you want it to show
    useEffect(() => {
      if(url === ''){
        console.log('here')
        setUrl('https://dog.ceo/api/breeds/image/random');
      }
    });
  




  // would this work thought because page shoud always be reading a random api url, it should'nt be empty
  // set variable to an empty string
  const [refresh, setRefresh] = useState('')
    // if variable refresh equals empty string then set it to random img using api
    if(refresh === ''){
      console.log('refresh')
      setRefresh('https://dog.ceo/api/breeds/image/random')
    }

    return (
      <div className="App">
          <title>Random Dog Generator</title>
          <div className="container">
            <h1>Random Dog Generator</h1>
            <div className="buttonContainer">
              <button id="dogButton" type="button" onClick={setRefresh}>Another Doggo Please!</button>
            </div>
            <ol id="dogCard"></ol>
            <img id="doggo" alt="A happy dog!" src={url}/>
        </div>
      </div>
  );
}

export default App;
