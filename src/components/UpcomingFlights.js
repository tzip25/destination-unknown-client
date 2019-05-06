import React from 'react'
import Flight from './Flight'
import v4 from 'uuid'
import MoreFlightsButton from './MoreFlightsButton'


export default class UpcomingFlights extends React.Component {

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
                <h1>Upcoming Flights</h1>
                    {this.props.flights.length !== 0 ? this.renderflights(this.props.flights): <h3>No Upcoming Flights</h3>}

                    <MoreFlightsButton nextFlights={() => this.props.nextFlights("upcomingIndex", "upcomingFlights")} previousFlights={() => this.props.previousFlights("upcomingIndex", "upcomingFlights")} firstFlights={() => this.props.firstFlights("upcomingIndex", "upcomingFlights")}/>
            </div>
        )
    }
}