import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import { AntDesign, EvilIcons } from '@expo/vector-icons';

const Search = ({ onSearchHandlerEvent }) => {

    const [search, setSearch] = useState()
    const [error, setError] = useState ()
    const onSearchHandler = () => {
        const regEx = /[^\w\s]/
        if(regEx.test(search)){
            setError("solo de permiten Letras y/o números")
            setSearch("")
        }else{
            setError("")
            onSearchHandlerEvent(search)
        }
    }
    const onResetSearch = () => {
        setSearch ("")
        onSearchHandlerEvent(search)
    }

    return (
        <>
        <View style = {styles.searchCont}>
            <TextInput
                style={styles.textImput}
                onChangeText={setSearch}
                placeholder='Buscar...'
                value={search}
            />
            <TouchableOpacity onPress={()=>{onSearchHandler(search)}}>
                <AntDesign name="search1" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onResetSearch}>
                <EvilIcons name="close" size={24} color="black" />
            </TouchableOpacity>
        </View>
        {
            error
            ?
            <View>
                <Text>
                    {error}
                </Text>
            </View>
            :
            null
        }
        </>
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