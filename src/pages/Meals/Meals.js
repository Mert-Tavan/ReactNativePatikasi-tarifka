import React from 'react'
import { FlatList, View, Text } from 'react-native'
import styles from './Meals.styles'
import Error from '../../components/Error'
import Loading from '../../components/Loading'
import useFetch from '../../hooks/useEffect'
import MealCard from '../../components/MealCard'

API_MEALS_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='

const Meals = ({ route, navigation }) => {

    const { strCategory } = route.params
    const {data, loading, error} = useFetch(API_MEALS_URL+strCategory)

    if(loading) return <Loading />
    if(error) return <Error />

    const handleMealSelect = (idMeal) => navigation.navigate('Detail',{idMeal})

    const renderMeal = ({item}) => <MealCard meal={item} onSelect={() => handleMealSelect(item.idMeal)} />

    return (
        <View style={styles.container} >
            <FlatList 
                data={data.meals}
                keyExtractor={item => item.idMeal}
                renderItem={renderMeal}
            />
        </View>
    )
}

export default Meals