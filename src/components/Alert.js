import React from 'react'

function Alert(props) {
    const firstcapital = (word) =>{
        let text = word.toLowerCase();
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
           <strong>{firstcapital(props.alert.type)}</strong> {props.alert.msg}
        </div>
    )
}

export default Alert
