import React from 'react'

const MoreFlightsBUtton = (props) => {



    return (
        <div className="ui buttons">
            <button onClick={props.firstTenFlights} className="ui labeled button">
                First Page
            </button>
            <button onClick={props.previousTenFlights} className="ui labeled icon button">
                <i className="left chevron icon"></i>
                Prev
            </button>
            <button onClick={props.nextTenFlights} className="ui right labeled icon button">
                Next
                <i className="right chevron icon"></i>
            </button>
        </div>
    )
}

export default MoreFlightsBUtton