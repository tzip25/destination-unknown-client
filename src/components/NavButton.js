import React from "react";
import { Link } from 'react-router-dom'

class NavButton extends React.Component {

  handleClick = () => this.props.handleNavClick(this.props.buttonName)
  menuClass = () => this.props.currentPage === this.props.buttonName ? "active yellow item" : "item"

  render(){
    return(
      <Link to={this.props.path}>
        <div id="nav-link" className={this.menuClass()} onClick={this.handleClick} >
          <i className={this.props.icon}></i>
          {this.props.buttonName}
        </div>
      </Link>
    )
  }
}

export default NavButton
