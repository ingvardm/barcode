import React, { Component } from 'react';
import { View } from 'react-native'
import Permissions from 'react-native-permissions'
import { observer } from 'mobx-react'

import { Scanner, CameraPermissionsDialog } from '../../fragments'
import styles from '../../styles'
import { 
    store,
    onBarCodeRead,
    onComponentDidMount,
    cameraPermissionTypes,
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
                return <CameraPermissionsDialog.DeniedDialog/>

            case cameraPermissionTypes.RESTRICTED:
                return <CameraPermissionsDialog.RestrictedDialog/>

            case cameraPermissionTypes.UNDETERMINED:
                return <CameraPermissionsDialog.UndeterminedDialog/>
        }
    }
}

export default Home