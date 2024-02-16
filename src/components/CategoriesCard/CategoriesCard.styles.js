import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        marginVertical: 5,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderBlockColor: 'grey',
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
    },
    image: {
        width: 120,
        height: 120,
        marginHorizontal: 10,
        resizeMode: 'center',
        borderRadius:50,
        backgroundColor: 'white',
    },
    title: {
        flex: 1,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
        color: 'black',
    }
})