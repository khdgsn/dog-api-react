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
    // When called with a value the state will be set (to what you have put it to) and the component will re-render.
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
      // The purpose of async/await is to simplify the syntax necessary to consume promise-based APIs.
      // The behavior of async/await is similar to combining generators and promises.
    const res = async () => {
      // What is 'const fetchRes'
        // the varable that is set to fetch which is where you are pulling the data from using an API
      // What does await & fetch do
        // await is telling the fetch method to wait until JavaScript has read all the code and not to go ahead with a call
      const fetchRes = await fetch('https://dog.ceo/api/breeds/image/random')

      // What is 'const data'
        // the variable in which the object is being stored (read below)
      // What is .json()
        // .json() tells JavaSvript to change data into JavaScript Objects so that your JS code can read that data
      const data = await fetchRes.json();
      //console.log(data);
      
      // What is data.message doing?
        // It is accessing the .mesasge property of data, which is the api that has been turned into a JS object so that the code can be read
      const dog = data.message
      //console.log(dog);
      
      // why call setNewDog with (dog)?
        // setNewDog is the new state that the code will go to once it has been re-rendered
        // We are using (dog) to tell it that that is the data we want used
      setNewDog(dog);
    }
    // Why call res()?
      // We now have to call the function so that when JS reads top-to-bottom it knows we want to input the res() function
      // We are effectively ending the cycle
    res()

  // what is [refresh]?
    // An optional array of dependencies, without it the useEffect can not read any arrays and access any data
  }, [refresh]);



  // create a variable and set the state so the border is white
    // It returns a pair of values: the current state (border) (#000000, black) and a function (setBorder) that updates it
  const [border, setBorder] = useState('#000000')

  // useEffect lets you perform side effects in function components
  useEffect(() => {
      console.log('use effect ran')
    // What is 'const changeBorder'?
        // It is a function that you can call to update the state (from black to white)
      const changeBorder = () => {
          // change the value of border
          const newBorder = '#ffffff'
          setBorder(newBorder)
          console.log('here')
        }
      // We now have to call the function so that when JS reads top-to-bottom it knows we want to input the function
      changeBorder()
      // An optional array of dependencies, without it the useEffect can not read any arrays and access any data
  }, [border])

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
        <img id="doggo" alt="A happy dog!" style={{border: '5px solid #000000'}} src={newDog} onMouseEnter={() => setBorder()} />
      </div>
    </div>
  );
}

export default App;
