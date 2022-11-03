import { useState } from 'react';
import './App.css';
import Count from './Count';
import Toggle from './Toggle';



function App() {
  const [name, setName] = useState("Anna");
  const [age, setAge] = useState(31);


  const updateData = () => {
    setName("Marina")
    setAge(7)
  }

return (
  <div>
    <h1>My name is {name}</h1>
    <h3>I am {age} years old.</h3>
    <button onClick={updateData}>Click</button>

    <Count />
    <Toggle />
  </div>
)

}

/*
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Anna"
    }
  
  }

  changeName() {
    this.setState({name: "Marina"})
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <button onClick={ () => this.changeName() }>CLICK</button>
      </div>
     );
  }
}
*/

export default App;

