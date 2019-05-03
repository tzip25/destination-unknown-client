import React from "react";
import BookFlightForm from '../components/BookFlightForm'
import Flight from '../components/Flight'
import v4 from 'uuid'

class BookFlight extends React.Component {

  state = {
    isLoading: true
  }

  renderLoadingScreen = () => {
    return(
      <div className="ui active inverted dimmer">
        <div className="ui text loader">Finding You Amazing Adventures!</div>
      </div>
    )
  }

  renderflights = () => {
    return this.props.flights === "invalid" ?
    <div className="ui negative message">
      <div className="header">Invalid search. Please enter a valid city</div>
    </div>
    :
    this.props.flights.map(flight => < Flight key={v4()} flight={flight} button={true}/>)
  }

  componentDidMount(){
    this.setState({
      isLoading: false
    })
  }

  render(){
    return(
      <div>
        < BookFlightForm handleSearchFlight={this.props.handleSearchFlight}/>
        {this.state.isLoading ? this.renderLoadingScreen() : this.renderflights()}
      </div>
    )
  }
}

export default BookFlight
