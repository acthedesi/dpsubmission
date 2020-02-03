import React from 'react'


function Option(props) {
    return (
        <div>     
            <label>
                <input type="checkbox" name="answerGroup" disabled={props.disabled} checked={props.checked} onChange={e =>  props.changeHandler(e.target.checked, props.val, props.index)} id="1"/>{props.val + ":" + props.options[props.val]}</label>
        </div>
    )
}

export default Option;