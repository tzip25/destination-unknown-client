import React from 'react'
import Flight from './Flight'
import v4 from 'uuid'
import MoreFlightsButton from './MoreFlightsButton'

export default class PastFlights extends React.Component {

    renderflights = (flights) => {
        return (
          <>
            {flights.map(flight => < Flight key={v4()} flight={flight}/>)}
          </>
        )
      }

    render() {
        return(
            <div>
                <h1>Past Flights</h1>
                    {this.props.flights.length !== 0 ? this.renderflights(this.props.flights): <h3>No Past Flights</h3>}

                    <MoreFlightsButton nextFlights={() => this.props.nextFlights("pastIndex", "pastFlights")} previousFlights={() => this.props.previousFlights("pastIndex", "pastFlights")} firstFlights={() => this.props.firstFlights("pastIndex", "pastFlights")}/>
            </div>
        )
    }
}