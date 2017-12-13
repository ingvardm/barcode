import React, { Component } from 'react';
import { observer } from 'mobx-react'

import { Scanner, CameraPermissionsDialog } from '../../fragments'
import { 
    store,
    onBarCodeRead,
    onComponentDidMount,
    cameraPermissionTypes,
    requestPermissions,
    goToSettings,
    canGoToSettings
} from './model'

@observer class Home extends Component {
    componentDidMount = onComponentDidMount

    render() {

        switch (store.cameraPermissionStatus) {
            case cameraPermissionTypes.AUTHORIZED:
                return <Scanner onBarCodeRead={onBarCodeRead} />
        
            case cameraPermissionTypes.DENIED:
                return <CameraPermissionsDialog.DeniedDialog action={goToSettings}/>

            case cameraPermissionTypes.RESTRICTED:
                return <CameraPermissionsDialog.RestrictedDialog/>

            case cameraPermissionTypes.UNDETERMINED:
                return <CameraPermissionsDialog.UndeterminedDialog action={requestPermissions}/>
        }
    }
}

export default Home