import React from 'react'

const MoreFlightsBUtton = (props) => {



    return (
        <div className="ui buttons">
            <button onClick={props.firstFlights} className="ui labeled button">
                First Page
            </button>
            <button onClick={props.previousFlights} className="ui labeled icon button">
                <i className="left chevron icon"></i>
                Prev
            </button>
            <button onClick={props.nextFlights} className="ui right labeled icon button">
                Next
                <i className="right chevron icon"></i>
            </button>
        </div>
    )
}

export default MoreFlightsBUtton