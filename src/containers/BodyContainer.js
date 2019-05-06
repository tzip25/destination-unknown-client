import React from "react";
import { Route, Switch } from 'react-router-dom'
import Profile from './Profile'
import BookFlight from './BookFlight'
import SavedFlights from './SavedFlights'
import Login from './Login'
// import Home from './Home'

class BodyContainer extends React.Component {

  state = {
    flights: ["default"],
    invalid: false,
    isLoading: false,
    index: 0
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
      flights: sortedFlights,
      index: 0
    })
  }

  sortDepartureTime = () => {
    const sortedFlights = [...this.state.flights].sort((a,b) => {
      return a.unx_dtime - b.unx_dtime
    })
    this.setState({
      flights: sortedFlights,
      index: 0
    })
  }

  sortArrivalTime = () => {
    const sortedFlights = [...this.state.flights].sort((a,b) => {
      return a.unx_atime - b.unx_atime
    })
    this.setState({
      flights: sortedFlights,
      index: 0
    })
  }

  sortPriceHighToLow = () => {
    const sortedFlights = [...this.state.flights].sort((a,b) => {
      return b.price - a.price
    })
    this.setState({
      flights: sortedFlights,
      index: 0
    })
  }

  sortPriceLowToHigh = () => {
    const sortedFlights = [...this.state.flights].sort((a,b) => {
      return a.price - b.price
    })
    this.setState({
      flights: sortedFlights,
      index: 0
    })
  }

  nextFlights = () => {
    if (this.state.index + 10 >= this.state.flights.length) {
      return null
    } else {
      this.setState( prevState => {
        return {
          index: prevState.index + 10
        }
      }, () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
      })
    }
  }

  previousFlights = () => {
    if (this.state.index <= 0) {
      return null
    } else {
      this.setState( prevState => {
        return {
          index: prevState.index - 10
        }
      }, () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
      })
    }
  }

  firstFlights = () => {
    this.setState({
      index: 0
    }, () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0
    })
  }

  renderFlights = () => {
    return this.state.flights.slice(this.state.index, this.state.index + 10)
  }

  renderCurrentPage = () => {
    const bookFlightComponent = < BookFlight nextFlights={this.nextFlights} firstFlights={this.firstFlights} previousFlights={this.previousFlights} handleSearchFlight={this.handleSearchFlight} flights={this.state.invalid ? "invalid" : this.renderFlights()} handleSort={this.handleSort} />
    return <Switch>
      <Route exact path='/' render={() => bookFlightComponent} />
      <Route path='/profile' render={() => < Profile />} />
      <Route path='/search-flights' render={() => bookFlightComponent} />
      <Route path='/my-flights' render={() => < SavedFlights />} />
      <Route path='/login' render={() => < Login setCurrentUser={this.props.setCurrentUser}/>} />
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
