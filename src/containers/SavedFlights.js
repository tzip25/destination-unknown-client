import React from "react";
import Flight from '../components/Flight'
import v4 from 'uuid'

class SavedFlights extends React.Component {

  state = {
    flights: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/flights')
    .then(res=>res.json())
    .then(flights => {
      this.setState({
        flights: flights
      })
    })
  }

  upcomingFlights = () => {
    const upcomingFlights = this.state.flights.filter(flight => {
      return new Date(flight.departure_date) > new Date()
    })
    return upcomingFlights.sort((a,b) => {
      return new Date(a.departure_date) - new Date(b.departure_date)
    })
  }

  pastFlights = () => {
    const pastFlights = this.state.flights.filter(flight => {
      return new Date(flight.departure_date) < new Date()
    })
    return pastFlights.sort((a,b) => {
      return new Date(a.departure_date) - new Date(b.departure_date)
    })
  }

  renderflights = (flights) => {
    return flights.map(flight => < Flight key={v4()} flight={flight}/>)
  }

  render(){
    return(
      <div>
        <h1>Upcoming Flights</h1>
          {this.upcomingFlights().length !== 0 ? this.renderflights(this.upcomingFlights()): <h3>No Upcoming Flights</h3>}
        <h1>Past Flights</h1>
          {this.pastFlights().length !== 0 ? this.renderflights(this.pastFlights()): <h3>No Past Flights</h3>}
      </div>
    )
  }
}

export default SavedFlights
