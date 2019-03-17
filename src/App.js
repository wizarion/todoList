import React, { Component } from 'react';
import List from './components/List'

class App extends Component {
  render() {
    return (
       <div style={{minHeight: "100vh", backgroundColor: "#f0efe9"}}>
          <List />
       </div>
    );
  }
}

export default App;
