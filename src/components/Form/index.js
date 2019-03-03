import React, { Component } from "react";
import "./style.css";
import Navbar from "../Navbar";
import Cards from "../Cards"
import Wrapper from "../Wrapper";
import characters from "../../characters.json";

class Form extends Component {
  // Setting the component's initial state
  state = {
    score: 0,
    topscore: 0,
    clickedOn: [],
    order: [0, 1,2,3,4,5,6,7,8,9,10,11],
    message: "Click on a picture to begin!",
    characters
  };

  handleClick = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (this.state.clickedOn.indexOf(event.target.id) < 0 ) {
      this.state.clickedOn.push(event.target.id);
      this.setState({ 
        score: this.state.score + 1,
        message: "Correct! Pick a different picture."
      });
    } else {
        if (this.state.score > this.state.topscore) {
          this.setState({topscore: this.state.score})
        }
        this.setState({
          score: 0,
          clickedOn: [],
          message: "Wrong! Please start over."
        });
    }
      let temporder = [];
      while (this.state.characters.length > temporder.length) {
        let number = Math.floor(Math.random()*this.state.characters.length);
        if (temporder.indexOf(number) < 0) {
          temporder.push(number);
        }
      }
      this.setState({order: temporder})   
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <Navbar score={this.state.score} topscore={this.state.topscore} message={this.state.message} />
        <Wrapper>
        {this.state.order.map(sequence => (
          <Cards
            clickFunction={this.handleClick}
            id={this.state.characters[sequence].name}
            image={this.state.characters[sequence].image}
            key={this.state.characters[sequence].name}  
          />
        ))}
        </Wrapper>
        
      </div>
    );
  }
}

export default Form;
