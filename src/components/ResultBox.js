import React from 'react'


function ResultBox(props) {
    if (props.maxCharacter == "A") {
        return (
            <div>
                {props.data[0]}
            </div>     
        )
    } else if (props.maxCharacter == "B") {
        return (
            <div>
                {props.data[1]}
            </div>     
        )
    } else if (props.maxCharacter == "C") {
        return (
            <div>
                {props.data[2]}
            </div>     
        )
    } else  {
        return (
            <div>
                {props.data[3]}
            </div>     
        )
    }
}

export default ResultBox;