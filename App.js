import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [refresh, setRefresh] = useState(true);
  const [newDog, setNewDog] = useState("");
  const [border, setBorder] = useState("#000");
  // const [arr, newArr] = useState([]);

  // function to change border
  const changeBorder = () => {
    if(border === "#000") {
      setBorder("#e10000");
    } else {
      setBorder("#000");
    }
  };

  // useEffect for pulling API data
/*
  useEffect(() => {
    const res = async () => {
      const fetchRes = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await fetchRes.json();
      //console.log(data);
      const dog = data.message;
      //console.log(dog);
      setNewDog(dog);
    };
    res();
  }, [refresh]);
  */

  return (
    <div className="App">
      <title>Random Dog Generator</title>
      <div className="container">
        <h1>Random Dog Generator</h1>
        <div className="buttonContainer">
          <button
            id="dogButton"
            type="button"
            onClick={() => setRefresh(!refresh)}
          >
            Another Doggo Please!
          </button>
        </div>
        <ol id="dogCard"></ol>
        <p>Click the cute dog!</p>
        <img
          id="doggo"
          alt="A happy dog!"
          style={{ border: `5px solid ${border}` }}
          src={newDog}
          onClick={changeBorder}
        />
        <div className="buttonContainer">
          <button
          id="backButton"
          type="button"
          >
            Go Back!
          </button>
        </div>
        <p>...</p>
      </div>
    </div>
  );
}

export default App;
