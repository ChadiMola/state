import "./App.css";
import React from "react";
import Profile from "./components/profile";

class app extends React.Component {
  state = {
    person: {
      fullName: "Chadi Mola",
      bio: "I am skilled at developing complex solutions",
      imgSrc: "./mypic.jpeg",
      profession: "Junior Full Stack JS Developer",
    },
    show: false,
  };

  handleClick = () => this.setState({ show: !this.state.show });
  render() {
    return (
      <>
        <button onClick={this.handleClick}> ClickMe</button>
        {this.state.show ? <Profile p={this.state.person}></Profile> : null}
      </>
    );
  }
}
export default app;
