import React from 'react'
import {Pressable, Text, Image} from 'react-native'
import styles from './CategoriesCard.styles'

const CategoriesCard = ({categories, onSelect}) => {
    return(
        <Pressable style={styles.container} onPress={onSelect} >
            <Image source={{uri: categories.strCategoryThumb}} style={styles.image} />
            <Text style={styles.title} >{categories.strCategory}</Text>
        </Pressable>
    )
}

export default CategoriesCard