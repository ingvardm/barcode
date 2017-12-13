import React from 'react'
import Message from './message'

export default CameraPermissionsUndeterminedDialog = props =>
    <Message 
        messageText="Please allow camera usage"
        button={{
            text: "Grant permissions",
            callback: ()=>{},
            color: "#841584"
        }}
    />