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

  renderflights = () => {
    return this.state.flights.map(flight => < Flight key={v4()} flight={flight}/>)
  }

  render(){
    return(
      <div>
      {this.renderflights()}
      </div>
    )
  }
}

export default SavedFlights
