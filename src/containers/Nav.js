import React from "react";
import NavButton from '../components/NavButton'


class Nav extends React.Component {

  render(){
    return(
      <div className="ui secondary pointing menu">
        < NavButton currentPage={this.props.currentPage} buttonName={"View my Profile"} handleNavClick={this.props.handleNavClick} />
        < NavButton currentPage={this.props.currentPage} buttonName={"Book a Flight"} handleNavClick={this.props.handleNavClick} />
        < NavButton currentPage={this.props.currentPage} buttonName={"Saved Flights"} handleNavClick={this.props.handleNavClick} />
        <div className="right menu">
          <div className="ui item">Login</div>
        </div>
      </div>
    )
  }
}

export default Nav
