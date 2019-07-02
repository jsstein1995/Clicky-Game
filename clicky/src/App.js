import React, { Component } from 'react';
import cards from "./cards.json";
import Nav from "./Components/Navbar/";
import Jumbo from "./Components/Jumbo/";
import Wrap from "./Components/Wrapper/";
import Card from "./Components/Card/";
import Win from "./Components/Win/"
import "./App.css";

const disp0 = {
  display:"none"
}

class App extends Component {
  

  state = {
    cards,
    rules: true,
    playing: false,
    win: false,
    message: "Click on an image to begin!",
    score: 0,
    highscore: 0
  };

  playBtn = () => {
    console.log("Clicked Play!");
    this.setState({ rules: false });
    this.setState({ playing: true });
    this.setState({ win: false });
    this.setState({ score: 0 });

  }

  clickCount = id => {
    this.state.cards.find((x, i) => {
      if (x.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function () {
            this.setState({ message: "You guessed right!" });
            console.log("Score:" + this.state.score);
            if (this.state.score === 12) {
              this.setState({ highscore: 12 });
              this.setState({ message: "You win!" });
              this.setState({ win: true });
              this.setState({ playing: false });
            }
          });
          this.state.cards.sort(() => Math.random() - .7)
          return true;
        } else {
          this.gameOver();
          console.log("Game Over");
        }
      }
    });
  }

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function () {
        console.log("New High Score: " + this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    this.setState({ message: "You lose!" });
    this.setState({ score: 0 });
    return true;
  }

  render() {
    return (
      <div>
        <Nav scr={this.state.score} highscr={this.state.highscore} message={this.state.message} />
        <div className="container">
          {this.state.rules ? <Jumbo btn={this.playBtn} /> : null}
          {this.state.playing ? <Wrap>
            {this.state.cards.map(props => (
              <Card
                key={props.id}
                id={props.id}
                image={props.image}
                name={props.name}
                clickCount={this.clickCount}
              />
            ))}
          </Wrap> : null}
          {this.state.win ? <Win btn={this.playBtn} /> : null}
          <audio src="fs420.mp3" style={disp0} autoPlay></audio>
        </div>
      </div>

    )
  }

}

export default App;
