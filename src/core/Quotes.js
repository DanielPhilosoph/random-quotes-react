import React from "react";
import "./styles/Quotes.css";

export default class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.text = "";
    this.author = "";
    this.quotesList = [
      {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
      },
      {
        quote:
          "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein",
      },
      {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
      },
      {
        quote: "Be the change that you wish to see in the world.",
        author: " Mahatma Gandhi",
      },
      {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain",
      },
    ];
  }

  pickRandomQuote = () => {
    let randomIndex = Math.floor(Math.random() * this.quotesList.length);
    this.text = this.quotesList[randomIndex].quote;
    this.author = this.quotesList[randomIndex].author;
  };

  render() {
    this.pickRandomQuote();
    return (
      <div id="mainQuote">
        <div id="text" className="quote">
          "{this.text}"
        </div>
        <div id="author">- {this.author}</div>
        <br />
      </div>
    );
  }
}
