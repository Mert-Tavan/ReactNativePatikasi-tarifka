import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        width: Dimensions.get('screen').width,
        height: 230,
    },
    body: {
        flex: 1,
        margin: 10,
        justifyContent: 'space-between',
    },
    title: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    area: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#cd5559'
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#cd5559'
    },
    instructions: {
        textAlign: 'justify',
        padding: 10,

    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button_container: {
        backgroundColor: 'red',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: '100%', 
    },
    button_title: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }
})