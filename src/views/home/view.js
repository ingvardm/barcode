import React, { Component } from 'react';
import { Platform } from 'react-native'
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
                if (Platform.OS === 'ios')
                    return <CameraPermissionsDialog.DeniedDialog action={canGoToSettings ? goToSettings : undefined}/>
                return <CameraPermissionsDialog.UndeterminedDialog action={requestPermissions}/>

            case cameraPermissionTypes.RESTRICTED:
                return <CameraPermissionsDialog.RestrictedDialog/>

            case cameraPermissionTypes.UNDETERMINED:
                return <CameraPermissionsDialog.UndeterminedDialog action={requestPermissions}/>
        }
    }
}

export default Home