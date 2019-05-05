import React from "react";
import NavButton from '../components/NavButton'


class Nav extends React.Component {

  render(){
    return(
        <div className="ui inverted secondary pointing blue menu">
          <img className="item" src="./logo3.png" width="350" alt="destination unknown logo"/>
          < NavButton currentPage={this.props.currentPage} buttonName={"View my Profile"} handleNavClick={this.props.handleNavClick} icon={"user icon"}/>
          < NavButton currentPage={this.props.currentPage} buttonName={"Book a Flight"} handleNavClick={this.props.handleNavClick} icon={"paper plane icon"} />
          < NavButton currentPage={this.props.currentPage} buttonName={"My Flights"} handleNavClick={this.props.handleNavClick} icon={"calendar icon"}/>
          <div className="right menu">
            <div className="item">
              Login
            </div>
          </div>
        </div>
    )
  }
}

export default Nav
