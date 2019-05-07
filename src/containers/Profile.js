import React from "react";
import withAuth from "../HOC/withAuth"

class Profile extends React.Component {

  render(){
    return(
      <div>
      <h1>User Profile Page</h1>
      </div>
    )
  }
}

export default withAuth(Profile)
