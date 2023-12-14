import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Card from './Card'
import { colors } from '../global/Color'

const ProductsItem = ({ product }) => {
    return (
        <TouchableOpacity>
            <Card style={styles.cardContainer}>
                <Text style={styles.productTitle}> {product.title} </Text>
                <Image
                    style={styles.productImage}
                    resizeMode='cover'
                    source={{ uri: product.thumbnail }}
                />
            </Card>
        </TouchableOpacity>
    )
}

export default ProductsItem

const styles = StyleSheet.create({

    cardContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.secondary,
        padding: 20,
        margin: 10,
    },

    productTitle: {
        fontSize: 18,
        fontFamily: "PermanentMarker-Regular"
    },
    productImage: {
        width: 60,
        height: 60
    }
})