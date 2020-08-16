import React from 'react'

function Joke(props) {
    return(
        <div>
            <h3>Question: {props.question}</h3>
            <h3>Answer: {props.answer}</h3>
            <img src={props.img} alt='Error' height='300px' width='500px'></img>
        </div>
    )
}

export default Joke