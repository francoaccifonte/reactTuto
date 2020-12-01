import React from "react";
import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  var helloWorld = "Welcome to the Road to learn React";
  const goodByeWorld = "How long will it take until you want to kill yourself?";
  return (
    <div className="App">
      <h2> {helloWorld} </h2> <h3> {goodByeWorld} </h3>{" "}
      <ShoppingList name="Mark" />
    </div>
  );
}

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1> Shopping List for {this.props.name} </h1>{" "}
        <Button onClick={this.sendLove()} variant="primary">
          Primary
        </Button>
        👋
      </div>
    );
  }

  sendLove(params) {
    console.log("The link was clicked.");
    // this.props.clickeao = true;
  }
}

export default App;
