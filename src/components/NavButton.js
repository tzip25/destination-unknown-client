import React from "react";
import { Link } from 'react-router-dom'

class NavButton extends React.Component {

  menuClass = () => window.location.pathname === this.props.path ? "active item" : "item"

  render(){
    return(
      <Link to={this.props.path}>
        <div id="nav-link" className={this.menuClass()} >
          <i className={this.props.icon}></i>
          {this.props.buttonName}
        </div>
      </Link>
    )
  }
}

export default NavButton
