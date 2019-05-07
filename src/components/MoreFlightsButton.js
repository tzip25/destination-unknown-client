import React from 'react'

const MoreFlightsBUtton = (props) => {

    return (
      <div className="more-flights">
        <button onClick={props.firstFlights} className="ui gray compact icon button"><i className="angle double left icon"></i>Back To Page 1</button>
        <button onClick={props.previousFlights} className="ui gray compact icon button"><i className="left angle icon"></i></button>
        <button onClick={props.nextFlights} className="ui gray compact icon button"><i className="right angle icon"></i></button>
      </div>
    )
}

export default MoreFlightsBUtton
