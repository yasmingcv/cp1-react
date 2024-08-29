/* eslint-disable react/prop-types */
import './button.css'

const Button = (props) => {
    return(
        <button className='btn-home'>
            {props.text}
        </button>
    )
}

export default Button