import React from 'react';
import './App.css';
import Nav from './containers/Nav'
import BodyContainer from './containers/BodyContainer'


class App extends React.Component {

  state = {
    currentPage: ""
  }

  handleNavClick = (buttonName) => {
    this.setState({
      currentPage: buttonName
    })
  }

  render(){
    return (
      <div>
          < Nav currentPage={this.state.currentPage} handleNavClick={this.handleNavClick}/>
        <div className="main-body">
          < BodyContainer currentPage={this.state.currentPage}/>
        </div>
      </div>
    );
  }
}

export default App;
