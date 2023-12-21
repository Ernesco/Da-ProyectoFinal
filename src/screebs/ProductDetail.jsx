import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import product_data from "../data/products_data.json"
import { useEffect, useState } from 'react'
//import Header from '../componets/Header'
import { colors } from '../global/Color'


const ProductDetail = ({ route }) => {
    const [productSelected, setProductSelected] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isPortrait, setIsPortrait] = useState(true)

    const { height, width } = useWindowDimensions()

    const productId = route.params


    useEffect(() => {
        const productFound = product_data.find(product => product.id === productId)
        setProductSelected(productFound)
        setIsLoading(false)

        height < width ? setIsPortrait(false) : setIsPortrait(true)

    }, [productId, height])

    return (
        <>
            {
                isLoading
                    ?
                    <ActivityIndicator />
                    :
                    <>
                        <ScrollView>
                            <Image
                                source={{ uri: productSelected.images[0] }}
                                resizeMode='cover'
                                style={isPortrait ? styles.imageProduct : styles.imageProductLandscape}
                            />

                            <View style={styles.detailContainer}>
                                <Text style={styles.title}>{productSelected.title}</Text>
                                <Text style={styles.description}>{productSelected.description}</Text>
                                <Text style={styles.price}>$ {productSelected.price}</Text>
                                <TouchableOpacity style={isPortrait ? styles.buyButton : styles.buyAlt} onPress={() => null}>
                                    <Text style={styles.buyText}>Comprar</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </>
            }
        </>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    imageProduct: {
        minWidth: 300,
        width: '100%',
        height: 200,

    },
    imageProductLandscape: {
        width: 200,
        height: 200,
    },
    detailContainer: {
        alignItems: 'center',
    },
    title: {
        fontFamily: 'PermanentMarker-Regular',
        fontSize: 32,
    },
    description: {
        fontFamily: 'PermanentMarker-Regular',
        fontSize: 20,
    },
    price: {
        fontFamily: 'PermanentMarker-Regular',
        fontSize: 32,
        color: colors.secondary
    },
    buyButton: {
        marginTop: 10,
        width: 200,
        padding: 10,
        alignItems: 'center',
        backgroundColor: colors.secondary,
        borderRadius: 10,
    },
    buyText: {
        color: '#fff'
    },
    buyAlt: {
        marginTop: 10,
        width: 200,
        padding: 10,
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 10,
    }

})
