import React from "react";
import NavButton from '../components/NavButton'


class Nav extends React.Component {

  render(){
    return(
        <div className="ui inverted secondary pointing blue menu">
          <img className="item" src="./logo3.png" width="350"/>
          < NavButton currentPage={this.props.currentPage} buttonName={"View my Profile"} handleNavClick={this.props.handleNavClick} icon={"user icon"}/>
          < NavButton currentPage={this.props.currentPage} buttonName={"Book a Flight"} handleNavClick={this.props.handleNavClick} icon={"paper plane icon"} />
          < NavButton currentPage={this.props.currentPage} buttonName={"My Flights"} handleNavClick={this.props.handleNavClick} icon={"calendar icon"}/>
          <div className="right menu">
            <a className="item">
              Login
            </a>
          </div>
        </div>
    )
  }
}

export default Nav
