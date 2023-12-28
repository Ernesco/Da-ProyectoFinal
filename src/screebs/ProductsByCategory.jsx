import { FlatList, StyleSheet, Text, View } from 'react-native'
//import products_data from "../data/products_data.json"
import ProductsItem from '../componets/ProductsItem'
//import Header from '../componets/Header'
import { colors } from '../global/Color'
import { useState, useEffect } from 'react'
import Search from '../componets/Search'
import { useSelector, useDispatch } from 'react-redux'


const ProductsByCategory = ({ navigation, route }) => {

    const [productsByCategory, setProductsByCategory] = useState ([])
    const [search, setSearchEv] = useState ("")

    //const {category} = route.params

    const category = useSelector ( state => state.shopSlice.categorySelected)
    const productFilterCat = useSelector( state => state.shopSlice.productFilterCat)

    useEffect(() => {
        //const productFilterCat = products_data.filter(product => product.category===category)
        const productsFiltered = productFilterCat.filter(
            product=>product.title.toLowerCase())
        setProductsByCategory(productsFiltered)
    }, [category, search])

    const renderProductItem = ({ item }) => (
        <ProductsItem product={item} navigation={navigation}/>
    )

    const onSearch = (search) =>(
        setSearchEv (search)
    )

    return (
        <>
            <Search onSearchHandlerEvent = {onSearch}/>
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