import React from 'react'
import Lottie from 'lottie-react-native'

const Loading = () => {
    return <Lottie source={require('../../assets/loading.json')} autoPlay loop style={{backgroundColor:'#6d120d' }} />
}

export default Loading