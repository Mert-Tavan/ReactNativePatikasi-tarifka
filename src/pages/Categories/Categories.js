import React, {useState, useEffect} from "react";
import { FlatList, } from "react-native";
import Error from '../../components/Error'
import Loading from '../../components/Loading'
import useFetch from '../../hooks/useEffect'
import styles from './Categories.styles'
import CategoriesCard from '../../components/CategoriesCard'
//import {API_CATEGORIES_URL} from "@env"

API_CATEGORIES_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php'

const Categories = ({navigation}) => {

    const { data, loading, error } = useFetch(API_CATEGORIES_URL)

    if (loading) return <Loading />
    if (error) return <Error />

    const handleCategorySelect = (strCategory, strCategoryDescription) => navigation.navigate('Meals', {strCategory, strCategoryDescription})

    const renderCategory = ({ item }) => 
        <CategoriesCard 
            categories={item} 
            onSelect={() => handleCategorySelect(item.strCategory, item.strCategoryDescription)}
        />

    return (
        <FlatList
            data={data.categories}
            renderItem={renderCategory}
            keyExtractor={item => item.idCategory}
            style={styles.container}
        />
    )
}


export default Categories;