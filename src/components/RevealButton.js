import React, {useEffect, useState} from 'react'
import ResultBox from './ResultBox'




function RevealButton(props) {
    const [toggle, setToggle] = useState(false);
    // console.log(toggle);
    // console.log(props.answers);
    console.log(props.checkAnswers(props.answers));
    console.log(toggle);
    let maxCharacter = props.checkAnswers(props.answers);
    if (maxCharacter !== "") {
        
        if (toggle) {   
            return (
                <div>     
                    <button type="submit" onClick={() => {props.setDisabled(!toggle); setToggle(!toggle)}} className="btn btn-primary btn-block">Retake Quiz</button>
                    <ResultBox data={props.data} maxCharacter={maxCharacter}/>
                </div>           
            )
        } else {
            console.log("FUCK")
            return (
                <div>     
                    <button type="submit" onClick={() => {props.setDisabled(!toggle); setToggle(!toggle)}} className="btn btn-primary btn-block">Show Results</button>
                </div>
            )
        }
    } else {
        return (
            <div>     
                <button type="submit" className="btn btn-primary btn-block">Show Results</button>
            </div>
        )
    }
}

export default RevealButton