import React from "react";
import NavButton from '../components/NavButton'
import { Link } from 'react-router-dom'

class Nav extends React.Component {

  loggedIn = () => {
    if(this.props.currentUser){
      return(
        <div className="right secondary menu">
        < NavButton
          buttonName={"My Flights"}
          icon={"calendar icon"}
          path={"/my-flights"}
        />
        <Link to="/login">
          <div
            onClick={this.props.logOut}
            id="nav-link"
            className={"item"} >
            Logout
          </div>
        </Link>
        </div>
      )
    } else {
      return (
          <div className="right menu">
          < NavButton
            buttonName={"Login / Signup"}
            icon={"user icon"}
            path={"/login"}
          />
          </div>
      )
    }
  }

  render()
  {
    return(
      <div>
        <div className="ui inverted secondary pointing blue menu">
        <img className="logo" src="./logo3.png" width="355px" alt="destination unknown logo"/>
          < NavButton
            buttonName={"Book a Flight"}
            icon={"paper plane icon"}
            path={"/search-flights"}
          />
          {this.loggedIn()}
        </div>
      </div>
    )
  }
}

export default Nav
