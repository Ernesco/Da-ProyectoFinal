import { FlatList, StyleSheet, Text, View } from 'react-native'
import products_data from "../data/products_data.json"
import ProductsItem from '../componets/ProductsItem'
import Header from '../componets/Header'
import { colors } from '../global/Color'
import { useState, useEffect } from 'react'


const ProductsByCategory = ({ category }) => {

    const [productsByCategory, setproductsByCategory] = useState ([])
    useEffect(() => {
        const productFilterCat = products_data.filter(product => product.category===category)
        setproductsByCategory(productFilterCat)
    }, [category])

    const renderProductItem = ({ item }) => (
        <ProductsItem product={item} />
    )

    return (
        <>
            <Header title="Productos" styles={styles.headerText} />
                <FlatList
                    data={productsByCategory}
                    renderItem={renderProductItem}
                    keyExtractor={item => item.id}
                />
        </>
    )
}

export default ProductsByCategory

const styles = StyleSheet.create({
    headerText: {
        fontSize: 30,
        color: colors.colortext,
        fontFamily: "DancingScript-Bold"
    }
})