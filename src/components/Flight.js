import React from "react";

const Flight = (props) => {

  const {flight} = props
  const handleClick = () => {
    const token = localStorage.getItem("token")
    fetch('http://localhost:3000/flights', {
      method: 'POST',
      headers: {"Content-Type": "application/json", "Authorization": token},
      body: JSON.stringify(flight)
    })
    
    window.open(flight.booking_url)
  }

  const currencySymbol = () => flight.currency === "USD" ? "$" : "€"

  return(
      <div className="ui clearing segments flight-table">
      <table className="ui blue large table">
        <thead>
          <tr>
            <th>Price</th>
            <th></th>
            <th>Route</th>
            <th>Departure</th>
            <th>Arrival</th>
            {props.button ? <th></th> : null }
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="flight-price">{currencySymbol()}{flight.price}</td>
            <td><img src={flight.airline_logo} width="35" alt="airline logo"/></td>
            <td className="flight-route">{flight.start_location} ({flight.start_airport}) → {flight.end_location} ({flight.end_airport})
            <br/>
            <span id="small-flight-text">{flight.airline}</span></td>
            <td>{flight.departure_time}<br/><span id="small-flight-text">{new Date(`${flight.departure_date} EDT`).toDateString()}</span></td>
            <td>{flight.arrival_time}<br/><span id="small-flight-text">{new Date(`${flight.arrival_date} EDT`).toDateString()}</span></td>
            {props.button ? <td><div className="ui right floated button blue" onClick={handleClick}>Book Flight</div></td> : null}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Flight
