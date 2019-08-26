import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    input: '',
  }

  inputChangedHandler = (event) => {
    this.setState( {input: event.target.value} );
  }

  deleteCharHandler = (index) => {
    const text = this.state.input.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({input: updatedText})
  }

  render() {
    const charList = this.state.input.split('').map((ch, index) => {
      return <Char 
        character={ch} 
        key={index} 
        clicked={() => this.deleteCharHandler(index)}/>;
    });

    return (
      <div className="App">
       <h1>Type here</h1>
       <input 
        type="text"
        onChange={(event) => this.inputChangedHandler(event)}
        value={this.state.input}/>
       <p>{this.state.input}</p>
       <Validation inputLength={this.state.input.length}/>
      {charList}
      </div>
    );
  }
}

export default App;
