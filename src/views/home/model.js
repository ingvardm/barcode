import { Alert, Vibration } from 'react-native'
import { observable } from 'mobx'
import Permissions from 'react-native-permissions'

// permission is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
const cameraPermissionTypes = {
    AUTHORIZED: 'authorized',
    DENIED: 'denied',
    RESTRICTED: 'restricted',
    UNDETERMINED: 'undetermined'
}

const cameraPermissionName = 'camera'

class State {
    @observable cameraPermissionStatus = cameraPermissionTypes.UNDETERMINED
    @observable scannedBarcode
}

const store = new State()

var alertVisible = false
const vibrationDuration = 500

const onBarCodeRead = e => {
    if (alertVisible) return
    Vibration.vibrate(vibrationDuration)
    alertVisible = true
    Alert.alert(
        'Barcode Found!',
        `Type: ${e.type} Data: ${e.data}`,
        [
            { text: 'OK', onPress: () => alertVisible = false },
        ],
        { cancelable: false }
    )
}

onComponentDidMount = () => {
    Permissions.check(cameraPermissionName).then(response => {
        store.cameraPermissionStatus = response
        if (response === cameraPermissionTypes.UNDETERMINED) {
            Permissions.request(cameraPermissionName).then(response => {
                store.cameraPermissionStatus = response
            })
        }
    })
}

export { store, onBarCodeRead, onComponentDidMount, cameraPermissionTypes }