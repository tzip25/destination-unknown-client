import React from "react";
import { Link } from 'react-router-dom'

class NavButton extends React.Component {

  menuClass = () => window.location.pathname === this.props.path ? "item active" : "item"

  render(){
    return(
      <Link to={this.props.path}>
      <a className={this.menuClass()} >
          <i className={this.props.icon}></i>
          {this.props.buttonName}
      </a>
      </Link>
    )
  }
}

export default NavButton
