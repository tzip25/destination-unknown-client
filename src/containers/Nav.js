import React from "react";
import NavButton from '../components/NavButton'

class Nav extends React.Component {
  render()
  {
    return(
        <div className="ui inverted pointing blue menu">
          <img className="item" src="./logo3.png" width="350px" alt="destination unknown logo"/>
          {this.props.currentUser ? < NavButton
            currentPage={this.props.currentPage}
            buttonName={"View my Profile"}
            handleNavClick={this.props.handleNavClick}
            icon={"user icon"} path={"/profile"}
          /> : < NavButton
          currentPage={this.props.currentPage}
          buttonName={"Login/Signup"}
          handleNavClick={this.props.handleNavClick}
          icon={"user icon"} path={"/login"}
        />}
          < NavButton
            currentPage={this.props.currentPage}
            buttonName={"Book a Flight"}
            handleNavClick={this.props.handleNavClick}
            icon={"paper plane icon"} path={"/search-flights"}
          />
          {this.props.currentUser ? < NavButton
            currentPage={this.props.currentPage}
            buttonName={"My Flights"}
            handleNavClick={this.props.handleNavClick}
            icon={"calendar icon"} path={"/my-flights"}
          />: null }
        </div>
    )
  }
}

export default Nav
