import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'
import CategoryItems from '../componets/CategoryItems'
import { useSelector } from 'react-redux'


const Categories = ({navigation}) => {

    const categories = useSelector(state => state.shopSlice.categories)

    const renderCategoryItem = ({ item }) => (
        <CategoryItems category={ item } navigation={navigation}/>
    )

    return (
        <>
        <FlatList style = {styles.Categories}
            data = { categories }
            renderItem= { renderCategoryItem }
            keyExtractor = { item => item }
            />
        </>
    )
}

export default Categories

const styles = StyleSheet.create({
    Categories:{
        marginBottom: 100,
    }

})