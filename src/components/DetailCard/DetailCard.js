import React from 'react'
import { Image, ScrollView, Text, View, Pressable, Linking } from 'react-native'
import styles from './DetailCard.styles'


const ButtonCard = ({title, url}) => {
    return(
        <Pressable style={styles.button_container} onPress={() => Linking.openURL(url) } >
            <Text style={styles.button_title} >{title}</Text>
        </Pressable>
    )
}

const DetailCard = ({ item }) => {

    return (
        <ScrollView style={styles.container} >
            <Image source={{ uri: item.strMealThumb }} style={styles.image} />
            <View style={styles.body}>
                <View>
                    <View style={styles.title} >
                        <Text style={styles.name} >{item.strMeal}</Text>
                        <Text style={styles.area} >{item.strArea}</Text>
                    </View>
                    
                    <Text style={styles.instructions} >{item.strInstructions}</Text>
                </View>
                <View style={styles.buttons}>
                    <ButtonCard title='Watch on Youtube' url={item.strYoutube} />
                </View>
            </View>
        </ScrollView>
    )
}


export default DetailCard

