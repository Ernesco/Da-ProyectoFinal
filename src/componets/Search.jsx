import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import { AntDesign, EvilIcons } from '@expo/vector-icons';

const Search = ({onSearchHandlerEvent}) => {

    const [search, setSearch] = useState()

    return (
        <View style = {styles.searchCont}>
            <TextInput
                style={styles.textImput}
                onChangeText={setSearch}
                placeholder='Buscar...'
                value={search}
            />
            <TouchableOpacity onPress={()=>onSearchHandlerEvent(search)}>
                <AntDesign name="search1" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={null}>
                <EvilIcons name="close" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({

    searchCont:{
        flexDirection: "row",
        justifyContent: "space-between",
        padding:15,
    },
    textImput:{
        width: "80%",
        fontSize:18
    }
})