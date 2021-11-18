import React from "react";
import Quotes from "./Quotes";
import "./styles/QuoteBox.css";

export default class QuoteBox extends React.Component {
  newQuote = () => {
    this.forceUpdate();
  };

  render() {
    return (
      <div id="quote-box">
        <Quotes />
        <button id="new-quote" onClick={this.newQuote}>
          NEW
        </button>
        <br />
        <br />
        <a href="http://twitter.com/intent/tweet" id="tweet-quote">
          Tweeter
        </a>
      </div>
    );
  }
}
