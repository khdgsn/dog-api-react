import { useState } from 'react';
import './App.css';

function App() {

  const [url, setUrl] = useState('')
    if(url === ''){
      console.log('here')
      setUrl('https://dog.ceo/api/breeds/image/random');
    }

  const [refresh, setRefresh] = useState('')
    if(refresh === ''){
      console.log(refresh)
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
            <img id="doggo" alt="A happy dog!" />
        </div>
      </div>
  );
}

export default App;
