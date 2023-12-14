import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'
import Card from '../componets/Card'
import Header from '../componets/Header'
import categories_data from "../data/categories_data.json"
import CategoryItems from '../componets/CategoryItems'

const Categories = ({onSelectCategoryEve}) => {

    const renderCategoryItem = ({ item }) => (
        <CategoryItems category={ item } onSelectCategoryEve={onSelectCategoryEve}/>
    )

    return (
        <>
        <Header title="Categiorias" />
        <FlatList
            data = { categories_data }
            renderItem= { renderCategoryItem }
            keyExtractor = { item => item }
            />
        </>
    )
}

export default Categories

const styles = StyleSheet.create({})