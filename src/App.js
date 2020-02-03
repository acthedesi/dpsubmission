import React from 'react';
import {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Question from './components/Question'
import RevealButton from './components/RevealButton'
import { render } from '@testing-library/react';
import './App.css'


var data = require('./data.json');


class App extends Component{

  constructor() {
    super();
    this.state = {
      answers: [],
      disabled: false
    }
  }

  componentDidMount() {
    let sampleAnswers = []
    for (let i = 0; i < data.questions.length; i++) {
      sampleAnswers.push('N')
    }
    this.setState({
      answers: sampleAnswers
    })
  }

  changeAnswer = (answer, i) => {
    let tempAnswers = this.state.answers;
    tempAnswers[i] = answer;
    this.setState({
      answers: tempAnswers
    })
  }
  
  checkAnswers = (answers) => {
    let frequencyMap = {
      A: 0,
      B: 0, 
      C: 0, 
      D: 0
    }
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === "N") {
            return "";
        } else {
          frequencyMap[answers[i]] = frequencyMap[answers[i]] + 1
        }
    } 
    return Object.keys(frequencyMap).reduce(function(a, b){ return frequencyMap[a] > frequencyMap[b] ? a : b });
  }

  setDisabled = (bool) => {
    this.setState({
      disabled: bool
    })
  }


  render() {
    console.log(this.state.answers);
    return (
      <div id="containerDiv">
        <div className="row col-md-10" >
            {data.questions.map((element, i) => <Question changeAnswer = {this.changeAnswer} key={i} index={i} question={element.prompt} disabled={this.state.disabled} options={element.options}/>)}
        </div>
        <RevealButton answers={this.state.answers} setDisabled={this.setDisabled} checkAnswers={this.checkAnswers} data={data.results} />
      </div>
    );
  }
}

export default App;

//props.user.work.map((user, i) => <ExperienceBlock key={i} work={props.user.work[i]} edu={false}/>)}