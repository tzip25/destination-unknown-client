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

  handleSort = (sortOption) => {
      console.log("in handle sort");
      switch(sortOption){
        case "Price: Low to High":
          return this.sortPriceLowToHigh()
        case "Price: High to Low":
          return this.sortPriceHighToLow()
        case "Departure Time":
          return this.sortDepartureTime()
        case "Arrival Time":
          return this.sortArrivalTime()
        case "City":
          return this.sortCity()
        default:
          return this.sortPriceLowToHigh()
      }
  }

  sortCity = () => {
    const sortedFlights = [...this.state.flights].sort((a,b) => {
      return a.end_location.localeCompare(b.end_location)
    })
    this.setState({
      flights: sortedFlights
    })
  }

  // sortDepartureTime = () => {
  //   const sortedFlights = [...this.state.flights].sort((a,b) => {
  //     return b.departure_time - a.departure_time
  //   })
  //   this.setState({
  //     flights: sortedFlights
  //   })
  // }
  //
  // sortArrivalTime = () => {
  //   const sortedFlights = [...this.state.flights].sort((a,b) => {
  //     return b.arrival_time - a.arrival_time
  //   })
  //   this.setState({
  //     flights: sortedFlights
  //   })
  // }

  sortPriceHighToLow = () => {
    const sortedFlights = [...this.state.flights].sort((a,b) => {
      return b.price - a.price
    })
    this.setState({
      flights: sortedFlights
    })
  }

  sortPriceLowToHigh = () => {
    const sortedFlights = [...this.state.flights].sort((a,b) => {
      return a.price - b.price
    })
    this.setState({
      flights: sortedFlights
    })
  }


  renderCurrentPage = () => {
    switch(this.props.currentPage){
      case "View my Profile":
        return < Profile />
      case "Book a Flight":
        return < BookFlight
        handleSearchFlight={this.handleSearchFlight}
        flights={this.state.invalid ? "invalid" : this.state.flights}
        handleSort={this.handleSort}
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
