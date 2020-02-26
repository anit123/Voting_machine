import React, { Component } from "react";
import "./Main.css";
export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      langueges: [
        {
          name: "PhP",
          vote: 0
        },
        {
          name: "JavaScript",
          vote: 0
        },
        {
          name: "React",
          vote: 0
        },
        {
          name: "Java",
          vote: 0
        },
        {
          name: "Python",
          vote: 0
        }
      ]
    };
  }

  vote (i) {
    let newLanguages=[...this.state.langueges]
    newLanguages[i].votes++;
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    this.setState({languages: newLanguages});
    
}

  render() {
    return (
      <>
        <h1>Vote Your Favourite Language</h1>
        <div className="languages">
          {
          this.state.langueges.map((lang, i) => 
            <div className="language" key={i}>
              <div className="voteCount">{lang.vote}
              </div>
              <div className="languageName">{lang.name}
              </div>
            
          
        
          <button onClick={this.vote.bind(this,i)}>Click Here</button>
          </div>
    )}
    </div>
    </>
    );
  }
}

export default Main;
