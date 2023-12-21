import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Card from './Card'
import { colors } from '../global/Color'

const CategoryItems = ({ category, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Productos", {category})}>
            <Card style={styles.cardContainer} >
                <Text style={styles.text}>
                    {category}
                </Text>
            </Card>
        </TouchableOpacity>
    )
}

export default CategoryItems

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.secondary,
        padding: 20,
        margin: 10,
    },
    text: {
        textTransform: 'capitalize',
        fontSize: 18,
        fontFamily: "PermanentMarker-Regular"
    }
})