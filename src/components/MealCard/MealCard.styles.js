import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginVertical: 5,
        justifyContent: 'flex-end'
    },
    image:{
        width: Dimensions.get('screen').width - 22,
        height: 200,
        borderRadius: 20,
        padding:10,
        justifyContent: 'center'
    },
    titleView: {
        position: 'absolute',
        width: Dimensions.get('screen').width - 22,
        backgroundColor: '#000000a0',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    title: {
        color: 'white',
        fontSize: 28,
        textAlign: 'right',
        margin: 3,
        marginEnd:10,
        fontWeight: 'bold',
    }
})