import React from 'react'

export default function Alert(props) {
    return (

        props.alert && <div className={`alert alert-${props.alert.type} z-1 position-fixed top-0 end-0 mx-3 my-5 p-3`} role="alert" id="alert-Tag">
            {props.alert.msg}
        </div>

    )
}
