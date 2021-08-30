import React from 'react'
import './Form.css';

const Form = (props) =>{

    return(
        <form onSubmit={props.getWeather}>
            <input type="text" placeholder="city..." name="city" />
            <input type="text" placeholder="country..."  name="country"/>
            <button>Get Weather</button>

        
        </form>
    )
}
export default Form;