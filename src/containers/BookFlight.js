import React from "react";
import BookFlightForm from '../components/BookFlightForm'
import Flight from '../components/Flight'
import Sort from '../components/Sort'
import MoreFlightsButton from '../components/MoreFlightsButton'


import v4 from 'uuid'

class BookFlight extends React.Component {

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
      return <div className="whereto">Adventure awaits...</div>
    } else {
      return (
        <div>
        < Sort handleSort={this.props.handleSort}/>
        {this.props.flights.map(flight => < Flight key={v4()} flight={flight} button={true}/>)}
        </div>
      )
    }
  }

  render(){
    return(
      <div>
        < BookFlightForm handleSearchFlight={this.props.handleSearchFlight}/>
        {this.renderflights()}
        {this.props.flights[0] === "default" ? null : <MoreFlightsButton nextTenFlights={this.props.nextTenFlights} previousTenFlights={this.props.previousTenFlights} firstTenFlights={this.props.firstTenFlights}/>}
      </div>
    )
  }
}

export default BookFlight
