import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [refresh, setRefresh] = useState(true);
  const [newDog, setNewDog] = useState("");
  const [border, setBorder] = useState("#000");
  // set an empty array to hold dog url
  const [dogArray, setDogArray] = useState([]);
  // set empty counter and set to 0
  const [dogCounter, setDogCounter] = useState(0);

  // function to change border
  const changeBorder = () => {
    if (border === "#000") {
      setBorder("#e10000");
    } else {
      setBorder("#000");
    }
  };

  // function to append img to array
  const doggosSeen = (dog) => {
    // using the setter, add 1 count to dogCounter
    setDogCounter(dogCounter + 1);
    /* take the previous state i.e empty array
    and the function (=>) will
    ... (spread operator) - take a copy of the array then,
    expect the copy & a new 'dog' (url) to be presented
    */
    setDogArray((prevState) => [...prevState, dog]);
  };

  const doggosGone = () => {
    // using the setter, minus 1 count to dogCounter
    setDogCounter(dogCounter - 1);
    // find the length of the array so the code knows how many dogs there are
    setNewDog(dogArray[dogArray.length - 2]);
    /* using prevState
      (What it holds is the value of state before the setState was triggered by React)
      we then mutate the array and 'pop' (remove) the last element of the array
      in order to 'go back' an img
    */
    setDogArray((prevState) => {
      prevState.pop();
      return prevState;
    });
  };

  // useEffect for pulling API data
  useEffect(() => {
    const res = async () => {
      const fetchRes = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await fetchRes.json();
      //console.log(data);
      let dog = data.message;
      //console.log(dog);
      setNewDog(dog);
      doggosSeen(dog);
    };
    res();
    console.log(dogArray);
  }, [refresh]);


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
        <p>{dogCounter}</p>
        <img
          id="doggo"
          alt="A happy dog!"
          style={{ border: `5px solid ${border}` }}
          src={newDog}
          onClick={changeBorder}
        />
        <div className="buttonContainer">
          <button id="backButton" type="button" onClick={() => doggosGone()}>
            Go Back!
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
