import { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <h2>{this.props.titel}</h2>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Card;
