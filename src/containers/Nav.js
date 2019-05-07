import React from "react";
import NavButton from '../components/NavButton'
import { Link } from 'react-router-dom'

class Nav extends React.Component {

  loggedIn = () => {
    if(this.props.currentUser){
      return(
        <>
        < NavButton
        buttonName={"My Flights"}
        icon={"calendar icon"}
        path={"/my-flights"}
        />
        < NavButton
          buttonName={"View my Profile"}
          icon={"user icon"}
          path={"/profile"}
        />
        <Link to="/login">
          <div onClick={this.props.logOut} id="nav-link" className={"item"} >
          Logout
          </div>
        </Link>
        </>
      )
    } else {
      return (< NavButton
        buttonName={"Login/Signup"}
        icon={"user icon"}
        path={"/login"}
      />
      )
    }
  }

  render()
  {
    return(
        <div className="ui inverted pointing blue menu">
          <img className="item" src="./logo3.png" width="350px" alt="destination unknown logo"/>
          < NavButton
            buttonName={"Book a Flight"}
            icon={"paper plane icon"}
            path={"/search-flights"}
          />
          {this.loggedIn()}
        </div>
    )
  }
}

export default Nav
