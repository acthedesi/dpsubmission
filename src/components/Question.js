import React from 'react'
import Options from './Options'

function Question(props) {
    return (
       
        <div>     
            <Options options={props.options} question={props.question} index={props.index} disabled={props.disabled} changeAnswer = {props.changeAnswer} />
        </div>
    )
}

export default Question;