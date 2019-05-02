import React from "react";
import Profile from './Profile'
import BookFlight from './BookFlight'
import SavedFlights from './SavedFlights'

class BodyContainer extends React.Component {

  state = {
    flights: [],
    invalid: false
  }

  renderCurrentPage = () => {
    switch(this.props.currentPage){
      case "View my Profile":
        return < Profile />
      case "Book a Flight":
        return < BookFlight
        handleSearchFlight={this.handleSearchFlight}
        flights={this.state.invalid ? "invalid" : this.state.flights}
        />
      case "Saved Flights":
        return < SavedFlights />
      default:
        return < SavedFlights />
    }
  }

  handleSearchFlight = (formData) => {
    fetch('http://localhost:3000/flightsSearch', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({start_location: formData.departure, date: formData.date, price: formData.budget})
    })
    .then(res=>res.json())
    .then(flights => {
      if(flights[0] === "invalid"){
        this.setState({
          flights: [],
          invalid: true
        })
      } else {
        this.setState({
          flights: flights,
          invalid: false
        })
      }
    })
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
