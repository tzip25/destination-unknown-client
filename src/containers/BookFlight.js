import React from "react";
import BookFlightForm from '../components/BookFlightForm'

class BookFlight extends React.Component {

  render(){

    return(
      <div>
        < BookFlightForm handleSearchFlight={this.props.handleSearchFlight}/>
      in book flights
      </div>
    )
  }
}

export default BookFlight
