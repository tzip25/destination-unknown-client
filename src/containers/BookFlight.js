import React from "react";
import BookFlightForm from '../components/BookFlightForm'
import Flight from '../components/Flight'
import v4 from 'uuid'

class BookFlight extends React.Component {

  renderflights = () => {
    return this.props.flights.map(flight => < Flight key={v4()} flight={flight} button={true}/>)
  }

  render(){
    return(
      <div>
        < BookFlightForm handleSearchFlight={this.props.handleSearchFlight}/>
        {this.renderflights()}
      </div>
    )
  }
}

export default BookFlight
