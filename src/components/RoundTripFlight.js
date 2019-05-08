import React from "react";

const RoundTripFlight = (props) => {

  const currencySymbol = () => props.flight[0].currency === "USD" ? "$" : "€"

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
            <td rowspan="3" className="flight-price">{currencySymbol()}{props.flight[0].price}</td>
            <td><img src={props.flight[1].airline_logo} width="35" alt="airline logo"/></td>
            <td className="flight-route">{props.flight[1].start_location} ({props.flight[1].start_airport}) → {props.flight[1].end_location} ({props.flight[1].end_airport})
            <br/>
            <span id="small-flight-text">{props.flight[1].airline}</span></td>
            <td>{props.flight[1].departure_time}<br/><span id="small-flight-text">{new Date(`${props.flight[1].departure_date} EDT`).toDateString()}</span></td>
            <td>{props.flight[1].arrival_time}<br/><span id="small-flight-text">{new Date(`${props.flight[1].arrival_date} EDT`).toDateString()}</span></td>
            {props.button ? <td rowspan="3"><div className="ui right floated button blue" onClick={() => props.handleClick(props.flight)}>Book Flight</div></td> : null}
          </tr>
          <tr>
            <td><img src={props.flight[2].airline_logo} width="35" alt="airline logo"/></td>
            <td className="flight-route">{props.flight[2].start_location} ({props.flight[2].start_airport}) → {props.flight[2].end_location} ({props.flight[2].end_airport})
            <br/>
            <span id="small-flight-text">{props.flight[2].airline}</span></td>
            <td>{props.flight[2].departure_time}<br/><span id="small-flight-text">{new Date(`${props.flight[2].departure_date} EDT`).toDateString()}</span></td>
            <td>{props.flight[2].arrival_time}<br/><span id="small-flight-text">{new Date(`${props.flight[2].arrival_date} EDT`).toDateString()}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RoundTripFlight
