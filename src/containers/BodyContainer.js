import React from "react";
import Profile from './Profile'
import BookFlight from './BookFlight'
import SavedFlights from './SavedFlights'

class BodyContainer extends React.Component {

  state = {
    flights: ["default"],
    invalid: false,
    isLoading: false
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

  renderLoadingScreen = () => {
    return(
      <div className="ui active inverted dimmer">
        <div className="ui text loader">Finding You Amazing Adventures!</div>
      </div>
    )
  }

  handleSearchFlight = (formData) => {
    this.setState({
      isLoading: true
     })
    fetch('http://localhost:3000/flightsSearch', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({start_location: formData.departure, date: formData.date, price: formData.budget})
    })
    .then(res=>res.json())
    .then(flights => {
      console.log(flights);
      if(flights[0] === "invalid"){
        this.setState({
          flights: [],
          invalid: true,
          isLoading: false
        })
      } else {
        this.setState({
          flights: flights,
          invalid: false,
          isLoading: false
        })
      }
    })
  }

  render(){
    return(
      <div>
      {this.state.isLoading ? this.renderLoadingScreen(): this.renderCurrentPage()}
      </div>
    )
  }
}

export default BodyContainer
