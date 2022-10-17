import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  const person = [
    {
      name: "sharmila",
      age: "22",
      sex: "female",
    },
    {
      name: "janaki",
      age: "19",
      sex: "female",
    },
    {
      name: "nagma",
      age: "22",
      sex: "female",
    },
    {
      name: "saba",
      age: "35",
      sex: "female",
    },
  ];
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
        <h2>Kalyanam.com</h2>
      </div>
      <FirstComponent
        name={person[0].name}
        age={person[0].age}
        sex={person[0].sex}
      />
      <FirstComponent
        name={person[1].name}
        age={person[1].age}
        sex={person[1].sex}
      />
      <FirstComponent
        name={person[2].name}
        age={person[2].age}
        sex={person[2].sex}
      />
      <FirstComponent
        name={person[3].name}
        age={person[3].age}
        sex={person[3].sex}
      />
    </div>
  );
}

export default App;
