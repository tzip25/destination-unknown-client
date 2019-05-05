import React from "react";

const Flight = (props) => {

  const {flight} = props
  const handleClick = () => {
    fetch('http://localhost:3000/flights', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(flight)
    })
    .then(res=>res.json())
    .then(console.log)

    window.open(flight.booking_url)
  }

  return(
    <div className="ui clearing segments">
      <table className="ui blue table">
        <thead>
          <tr>
            <th>Airline</th>
            <th>Departure City / Airport</th>
            <th>Departure Date/Time</th>
            <th>Arrival Airport</th>
            <th>Arrival Date/Time</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{flight.airline}</td>
            <td>{flight.start_location} <br/> {flight.start_airport}</td>
            <td>{new Date(`${flight.departure_date} EDT`).toDateString()} <br/> {flight.departure_time}</td>
            <td>{flight.end_location} <br/> {flight.end_airport}</td>
            <td>{new Date(`${flight.arrival_date} EDT`).toDateString()} <br/> {flight.arrival_time}</td>
            <td>${flight.price}</td>
          </tr>
          {props.button ? <tr>
          <td colSpan="6">
          <div className="ui right floated button orange" onClick={handleClick}>Book Flight</div></td>
          </tr> : null}
        </tbody>
      </table>
    </div>
  )
}

export default Flight
