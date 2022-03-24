import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import {AntDesign, Ionicons} from '@expo/vector-icons'


export const Chats = ({name, timeAgo}) => {
    return(
        <SafeAreaView>
            <TouchableOpacity style={styles.container}>
                <View style={styles.contentContainer}>

                
                <View style={styles.user}>
                    <View style={styles.iconContainer}>
                        <AntDesign name="user" size={20} color="#263238"/>
                    </View>
                    <View>
                        <Text style={styles.title}>{name}</Text>
                        <View style={styles.newConatiner}>
                          <View style={styles.newSnap}/>
                          <Text style={styles.newSnapTxt}>New snap . {timeAgo} ago</Text>  
                        </View>
                    </View>
                </View>
                <View style={styles.replayIcon}>
                    <Ionicons name="camera-outline" size={30} color="#607D8B" />
                </View>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    contentContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    user: {
        flexDirection: "row",
        alignItems: "center"
    },

    title:{
        fontSize: 18,
        fontFamily: "Lato_700Bold"
    },

    iconContainer: {
        width: 45,
        height: 45,
        borderRadius: 45 / 2,
        padding: 10,
        borderColor: "#263238",
        borderWidth: 2,
        marginRight: 10 
    },
    newConatiner:{
        flexDirection: "row",
        alignItems: "center",
        
    },
    newSnap: {
        width: 16,
        height: 16,
        borderRadius: 5,
        backgroundColor: "#263238",
        marginRight: 10,
        marginVertical: 5
    },
    newSnapTxt: {
        color: "#607D8B"
    },
    replayIcon: {
        padding: 10,
        borderLeftWidth: 2,

    }
})