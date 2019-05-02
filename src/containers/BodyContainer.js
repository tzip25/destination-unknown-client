import React from "react";
import Profile from './Profile'
import BookFlight from './BookFlight'
import SavedFlights from './SavedFlights'

class BodyContainer extends React.Component {

  state = {
    flights: [{start_location: "JFK"}]
  }

  renderCurrentPage = () => {
    switch(this.props.currentPage){
      case "View my Profile":
        return < Profile />
      case "Book a Flight":
        return < BookFlight
        handleSearchFlight={this.handleSearchFlight}
        flights={this.state.flights}
        />
      case "Saved Flights":
        return < SavedFlights />
      default:
        return < BookFlight
        handleSearchFlight={this.handleSearchFlight}
        flights={this.state.flights}
        />
    }
  }

  handleSearchFlight = (formData) => {
    fetch('http://localhost:3000/flightsSearch', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({start_location: formData.departure, date: formData.date, price: formData.budget})
    })
    .then(res=>res.json())
    .then(console.log)
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
