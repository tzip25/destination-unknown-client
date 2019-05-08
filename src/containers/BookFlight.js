import React from "react";
import BookFlightForm from '../components/BookFlightForm'
import Flight from '../components/Flight'
import Sort from '../components/Sort'
import MoreFlightsButton from '../components/MoreFlightsButton'
import PurchaseFlight from '../components/PurchaseFlight'
import { Redirect, Router, Route } from 'react-router-dom'
import v4 from 'uuid'
import RoundTripFlight from '../components/RoundTripFlight'


class BookFlight extends React.Component {

  state = {
    bookFlight: false,
    currentFlight: {}
  }

  renderflights = () => {

    if (this.props.flights === "invalid") {
      return <div className="ui negative message error-message">
        <div className="header">Invalid search. Please enter a valid city</div>
      </div>
    } else if (this.props.flights.length === 0) {
      return <div className="ui yellow message error-message">
        <div className="header">No Matching Flights. Try Increasing your budget!</div>
    </div>
    } else if (this.props.flights[0] === "default") {
      return <div className="adventureAwaits">Adventure awaits...</div>
    } else if ( this.props.roundTripFlight === false){
      return (
        <div>
        < Sort handleSort={this.props.handleSort}/>
        {this.props.flights.map(flight => < Flight key={v4()} handleClick={this.handleClick} flight={flight} button={true}/>)}
        </div>
      )
    } else {
      return (
        <div>
        < Sort handleSort={this.props.handleSort}/>
        {this.props.flights.map(flight => < RoundTripFlight key={v4()} handleClick={this.handleClick} flight={flight} button={true}/>)}
        </div>
      )
    }
  }

    // booking/saving ticket function
    handleClick = (flight) => {

      const url = flight.length ? "http://localhost:3000/roundTrip": 'http://localhost:3000/flights'

      const token = localStorage.getItem("token")
      if(token){
        fetch(url, {
          method: 'POST',
          headers: {"Content-Type": "application/json", "Authorization": token},
          body: JSON.stringify(flight)
        })
        // .then(res => res.json())
        // .then(flight => {
        //   this.setState({
        //     bookFlight: true,
        //     currentFlight: flight
        //   })
        // })
      }
      flight.length ? window.open(flight[0].booking_url) : window.open(flight.booking_url)
    }



    renderBookflight = () => {
      if (this.state.bookFlight) {
        return (
          // <PurchaseFlight flight={this.state.currentFlight} />
          // this.props.history.push('/purchase-flight')
          <Redirect to={{
            pathname: '/purchase-flight',
            state: { flight: this.state.currentFlight }
        }}/>
          // <Route path='/purchase-flight' render={ () => <PurchaseFlight />} />
        )
      } else {
        return (
          <div>
          < BookFlightForm handleSearchFlight={this.props.handleSearchFlight}/>
          {this.renderflights()}
          {this.props.flights[0] === "default" ? null : <MoreFlightsButton nextFlights={this.props.nextFlights} previousFlights={this.props.previousFlights} firstFlights={this.props.firstFlights}/>}
        </div>
        )
      }
    }

  render(){
    // console.log(this.state.bookFlight)
    return(
      this.renderBookflight()
    )
  }
}

export default BookFlight
