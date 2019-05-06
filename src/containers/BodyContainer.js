import React from "react";
import { Route, Switch } from 'react-router-dom'
import Profile from './Profile'
import BookFlight from './BookFlight'
import SavedFlights from './SavedFlights'
// import Home from './Home'

class BodyContainer extends React.Component {

  state = {
    flights: ["default"],
    invalid: false,
    isLoading: false
  }

  handleSort = (sortOption) => {
      switch(sortOption){
        case "Price: Low to High":
          return this.sortPriceLowToHigh()
        case "Price: High to Low":
          return this.sortPriceHighToLow()
        case "Departure Time":
          return this.sortDepartureTime()
        case "Arrival Time":
          return this.sortArrivalTime()
        case "City: A-Z":
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

  sortDepartureTime = () => {
    const sortedFlights = [...this.state.flights].sort((a,b) => {
      return a.unx_dtime - b.unx_dtime
    })
    this.setState({
      flights: sortedFlights
    })
  }

  sortArrivalTime = () => {
    const sortedFlights = [...this.state.flights].sort((a,b) => {
      return a.unx_atime - b.unx_atime
    })
    this.setState({
      flights: sortedFlights
    })
  }

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
    return <Switch>
      <Route exact path='/' render={() => < BookFlight handleSearchFlight={this.handleSearchFlight} flights={this.state.invalid ? "invalid" : this.state.flights} handleSort={this.handleSort} />} />
      <Route path='/profile' render={() => < Profile />} />
      <Route path='/search-flights' render={() => < BookFlight handleSearchFlight={this.handleSearchFlight} flights={this.state.invalid ? "invalid" : this.state.flights} handleSort={this.handleSort} />} />
      <Route path='/my-flights' render={() => < SavedFlights />} />
    </Switch>
    // switch(this.props.currentPage){
    //   case "View my Profile":
    //     return < Profile />
    //   case "Book a Flight":
    //     return < BookFlight
    //     handleSearchFlight={this.handleSearchFlight}
    //     flights={this.state.invalid ? "invalid" : this.state.flights}
    //     handleSort={this.handleSort}
    //     />
    //   case "My Flights":
    //     return < SavedFlights />
    //   default:
    //     return < BookFlight
    //     handleSearchFlight={this.handleSearchFlight}
    //     flights={this.state.invalid ? "invalid" : this.state.flights}
    //     handleSort={this.handleSort}
    //     />
    // }
  }

  renderLoadingScreen = () => {
    return(
      <div className="ui active inverted dimmer">
        <div id="loading-text" className="ui text loader">Finding You Amazing Destinations!</div>
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
      body: JSON.stringify({start_location: formData.departure, date: formData.date, price: formData.budget, currency: formData.currency})
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
      <div className="main-body">
      {this.state.isLoading ? this.renderLoadingScreen(): this.renderCurrentPage()}
      </div>
    )
  }
}

export default BodyContainer
