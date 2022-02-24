import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const FetchDog = async () => {
    const [url] = useState([])

    useEffect(() => {
      const fetchUrl = async () => {
        const result = await fetch('https://dog.ceo/api/breeds/image/random')

        console.log(result.data)
        url(result.data)
      }

      fetchUrl()
    })
}
FetchDog();

function refreshPage() {
  window.location.reload();
}

    return (
      <div className="App">
          <title>Random Dog Generator</title>
          <div className="container">
            <h1>Random Dog Generator</h1>
            <div className="buttonContainer">
              <button id="dogButton" type="button" onClick={refreshPage}>Another Doggo Please!</button>
            </div>
            <ol id="dogCard"></ol>
            <img id="doggo" alt="A happy dog!"/>
        </div>
      </div>
  );
}

export default App;
