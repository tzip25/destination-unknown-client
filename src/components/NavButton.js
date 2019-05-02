import React from "react";

class NavButton extends React.Component {

  handleClick = () => this.props.handleNavClick(this.props.buttonName)
  menuClass = () => this.props.currentPage === this.props.buttonName ? "active blue item" : "item"

  render(){
    return(
      <div className={this.menuClass()} onClick={this.handleClick} >
      {this.props.buttonName}
      </div>
    )
  }
}

export default NavButton
