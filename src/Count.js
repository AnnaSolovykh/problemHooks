//import { useState } from 'react';
import { Component } from 'react';
/*
function Count() {
    const [number, changeNumber] = useState(100)
  
    const updateData = () => {
      changeNumber(number - 5)
    }
  
    return (
      <div>
        <h2>{number}</h2>
        <button onClick={updateData}>Click</button>
      </div>
    )
  
  }
  
  export default Count; */

  export default class Count extends Component {
    state = {
        count: 100
    }

    updateData () {
        this.setState({count: this.state.count - 5})
    }

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                {/* <button onClick={() => this.setState({count: this.state.count - 5})}>Click</button> */}
                <button onClick={ () => this.updateData() }>Click</button>
            </div>
        )
    }

  }

 