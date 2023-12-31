import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Card from './Card'
import { colors } from '../global/Color'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../features/shopSlice'

const CategoryItems = ({ category, navigation }) => {

    const dispach = useDispatch ()
    
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("Products", {category})
            dispach(setCategorySelected(category))
            }
            }>
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