import React from "react";

class NavButton extends React.Component {

  handleClick = () => this.props.handleNavClick(this.props.buttonName)
  menuClass = () => this.props.currentPage === this.props.buttonName ? "active yellow item" : "item"

  render(){
    return(
      <a id="nav-link" className={this.menuClass()} onClick={this.handleClick} >
      <i className={this.props.icon}></i>
      {this.props.buttonName}
      </a>
    )
  }
}

export default NavButton
