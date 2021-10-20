import React, { Component } from "react";
import LoginC from "./LoginC";
class Home extends Component {
  state = {
    token_flag: false,
  };
  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token == null) {
      this.setState({ token_flag: true });
    }
    console.log(localStorage.getItem("token"));

    //read local store token
    //disable login <link>
  }
  render() {
    return (
      <div>
      {/*   <pre>{JSON.stringify(this.state)}</pre> */}
        {this.state.token_flag ? (
          <>
            <LoginC />
          </>
        ) : null}
      </div>
    );
  }
}

export default Home;