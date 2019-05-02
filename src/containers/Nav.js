import React from "react";
import NavButton from '../components/NavButton'


class Nav extends React.Component {

  render(){
    return(
      <div>
      < NavButton buttonName={"View My Profile"} handleNavClick={this.props.handleNavClick} />
      < NavButton buttonName={"Book a Flight"} handleNavClick={this.props.handleNavClick} />
      < NavButton buttonName={"Saved Flights"} handleNavClick={this.props.handleNavClick} />
      </div>
    )
  }
}

export default Nav
