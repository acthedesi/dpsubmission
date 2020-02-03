import React, {Component} from 'react'
import Option from './Option'
import './Options.css'



export default class Options extends Component {

    constructor() {
        super();
        this.state ={
            selected: ""
        }
    }

    changeHandler = (value, val, index) => {
        if (value) {
            this.setState({
                selected: val
            })
            this.props.changeAnswer(val, index)
        } else {
            this.setState({
                selected: ""
            })
            this.props.changeAnswer('N', index);        
        }
    };

    render() {
        // const a = this.state.selected === "A"
        // const b = this.state.selected === "B"
        // const c = this.state.selected === "C"
        // const d = this.state.selected === ""

    
    return (
            <div class="preview">
                <div class="questionsBox">
                    <div class="questions">{this.props.question}</div>
                    <ul class="answerList">
                        <li>
                            <Option val={"A"} checked={this.state.selected === "A"} disabled={this.props.disabled} changeHandler={this.changeHandler} index={this.props.index} options={this.props.options}/>
                        </li>
                        <li>
                            <Option val={"B"} checked={this.state.selected === "B"} disabled={this.props.disabled} changeHandler={this.changeHandler} index={this.props.index} options={this.props.options}/>
                        </li>
                        <li>
                            <Option val={"C"} checked={this.state.selected === "C"} disabled={this.props.disabled} changeHandler={this.changeHandler} index={this.props.index} options={this.props.options}/>
                        </li>
                        <li>
                            <Option val={"D"} checked={this.state.selected === "D"} disabled={this.props.disabled} changeHandler={this.changeHandler} index={this.props.index} options={this.props.options}/>
                        </li>
                    </ul>
                </div>
            </div>
        
        )
    }
}



{/* <div>

            
            
            <input type="checkbox" class="mycheckbox" /> 
            <label>{props.options.A}</label>
            <input type="checkbox" class="mycheckbox" />  
            <label>{props.options.B}</label>
            <input type="checkbox" class="mycheckbox" /> 
            <label>{props.options.C}</label>
            <input type="checkbox" class="mycheckbox" />
            <label>{props.options.D}</label>
        </div> */}