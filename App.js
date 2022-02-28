import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // what is useState?
    // It declares a “state variable”. This is a way to “preserve” some values between the function calls
    // The state doesn't have to be an object, it can be a string or a number if that is what you need
    // It returns a pair of values: the current state and a function that updates it
      // In this case, 'refresh' is the current state and 'setRefresh' is the function
    /* We declare a state variable called refresh, and set it to true.
    React will remember its current value between re-renders, and provide the most recent one to our function.
    If we want to update the current refresh, we can call setRefresh.
    */

  // Why is useState set to true?
    // When called with a s value the state will be set (to what you have put it to) and the component will re-render.
    // When refresh runs and the value is 'false' the function setRefresh is called into action
    // with this useState it will always expect a boolean value
  const [refresh, setRefresh] = useState(true);

  // Set variable to an empty string
    // With this useState it will always expect a string value
  const [newDog, setNewDog] = useState("");

  // What is useEffect?
    // The Effect Hook lets you perform side effects in function components
  useEffect(() => {
    // What is 'const res'?
      // It is a function that you can call
    // what does async do?
      //
    const res = async () => {
      // What is 'const fetchRes'
        // the varable that is set to fetch which is where you are pulling the data from using an API
      // What does await & fetch do
        // await is telling the fetch method to wait until JavaScript has read all the code and not to go ahead with a call
      const fetchRes = await fetch('https://dog.ceo/api/breeds/image/random')

      // What is 'const data'
        // the variable in which the object is being stored (read below)
      // What is .jons()
        // .json() tells JavaSvript to change data into JavaScript Objects so that your code can read that data 
      const data = await fetchRes.json();
      //console.log(data);
      
      // What is data.message doing?
        // is is accessing the .mesasge property of data, which is the api that has been turned into a JS object so that the code can be read
      const dog = data.message
      //console.log(dog);
      
      // why call setNewDog with (dog)?
      setNewDog(dog);
    }
    //why call res()?
    res()

  // what is [refresh]?
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
