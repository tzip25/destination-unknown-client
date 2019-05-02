import React from "react";
import Profile from './Profile'
import BookFlight from './BookFlight'
import SavedFlights from './SavedFlights'

class BodyContainer extends React.Component {

  state = {
    flights: []
  }

  renderCurrentPage = () => {
    switch(this.props.currentPage){
      case "View my Profile":
        return < Profile />
      case "Book a Flight":
        return < BookFlight handleSearchFlight={this.handleSearchFlight}/>
      case "Saved Flights":
        return < SavedFlights />
      default:
        return < BookFlight handleSearchFlight={this.handleSearchFlight}/>
    }
  }

  handleSearchFlight = (arg) => {
    console.log(arg);
  }

  render(){
    return(
      <div>
      {this.renderCurrentPage()}
      </div>
    )
  }
}

export default BodyContainer
