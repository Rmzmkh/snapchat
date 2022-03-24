import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Chats } from '../chats/Chats'
import { userData } from '../components/model/userModel'
import  Constants  from 'expo-constants'

const Chatscreen = () => {
    return(
        <SafeAreaView style={styles.screen}>
            <FlatList data={userData} keyExtractor={(item) => item.name} renderItem={({item}) => <Chats name={item.name} timeAgo={item.min} /> } ItemSeparatorComponent={() => <View style={styles.devider} />} />
        </SafeAreaView>
    )
}

export default Chatscreen

const styles = StyleSheet.create({

    screen: {
        marginTop: Constants.statusBarHeight
    },

    devider: {
        borderBottomWidth: 1,
        borderBottomColor: "#607D8B"
    }
})