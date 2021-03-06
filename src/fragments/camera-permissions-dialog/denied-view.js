import React from 'react'
import Message from './message'

export default CameraPermissionsDeniedDialog = props =>
    <Message 
        messageText="Please allow camera usage"
        button={props.action ? {
            text: "Go to settings",
            callback: props.action,
            color: "#841584"
        } : null}
    />