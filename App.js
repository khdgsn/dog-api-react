import { useState, useEffect } from "react";
import "./App.css";

function App() {
   // would this work though because page shoud always be reading a random api url, it should'nt be empty
  // set variable to an empty string
  const [refresh, setRefresh] = useState(true);
  // if variable refresh equals empty string then set it to random img using api
  /*
  if (refresh === "") {
    setRefresh("https://dog.ceo/api/breeds/image/random");
  }
  */

  // set variable to an empty string
  const [newDog, setNewDog] = useState("");
  // if variable url equals empty string, set setUrl to what you want it to show
  useEffect(() => {
    const res = async () => {
      const fetchRes = await fetch('https://dog.ceo/api/breeds/image/random')

      const data = await fetchRes.json();
      console.log(data);
    
      const dog = data.message
      console.log(dog);
      
      setNewDog(dog);
    }
    res()
  }, [refresh]);

  return (
    <div className="App">
      <title>Random Dog Generator</title>
      <div className="container">
        <h1>Random Dog Generator</h1>
        <div className="buttonContainer">
          <button id="dogButton" type="button" onClick={() => setRefresh(!refresh)}> 
            Another Doggo Please!
          </button>
        </div>
        <ol id="dogCard"></ol>
        <img id="doggo" alt="A happy dog!" src={newDog} />
      </div>
    </div>
  );
}

export default App;
