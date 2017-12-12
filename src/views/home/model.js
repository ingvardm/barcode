import { Alert, Vibration } from 'react-native'

// const onBarCodeRead = e => console.log(`Barcode Found! Type: ${e.type} Data: ${e.data}`)

var alertVisible = false
const vibrationDuration = 500

const onBarCodeRead = e => {
    if(alertVisible) return
    Vibration.vibrate(vibrationDuration)
    alertVisible = true
    Alert.alert(
        'Barcode Found!',
        `Type: ${e.type} Data: ${e.data}`,
        [
          {text: 'OK', onPress: () => alertVisible = false},
        ],
        { cancelable: false }
      )
    // alert(`Barcode Found! Type: ${e.type} Data: ${e.data}`)
}
export { onBarCodeRead }