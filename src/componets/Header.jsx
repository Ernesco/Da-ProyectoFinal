import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../global/Color'
import { Entypo } from '@expo/vector-icons';

const Header = ({title, navigation}) => {
    return (
        <View style = {styles.headerContainer}>
            <TouchableOpacity onPress={navigation.goBack}>
                <Entypo name="arrow-left" size={28} color="white" />
            </TouchableOpacity>
            <Text style = {styles.headerText}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({

    headerContainer: {
        height: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 30,
        backgroundColor: colors.primary,
    },
    headerText:{
        fontSize: 30,
        color: colors.colortext,
        fontFamily: "DancingScript-Bold"
    }
})