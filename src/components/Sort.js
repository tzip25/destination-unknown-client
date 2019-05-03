import React from "react";

class Sort extends React.Component {

  state ={
    sortBy: ""
  }

  sortBy = (e) => {
    this.setState({
      sortBy: e.target.value
    }, ()=> {
      this.props.handleSort(this.state.sortBy)
    })
  }

  render(){
    console.log(this.state);
    return(
      <div id="sort-dropdown">
      Sort by:
        <select onChange={this.sortBy}>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
        <option>City</option>
        <option>Departure Time</option>
        <option>Arrival Time</option>
        </select>
      </div>
    )
  }

}

export default Sort
