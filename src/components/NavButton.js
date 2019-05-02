import React from "react";

class NavButton extends React.Component {


  render(){
    return(
      <button onClick={() => this.props.handleNavClick(this.props.buttonName)}>
      {this.props.buttonName}
      </button>
    )
  }
}

export default NavButton
