import React, { useEffect, useRef, useState } from 'react'

import { Camera } from 'expo-camera'
import * as Permissions from 'expo-permissions'
import { Text, TouchableOpacity, View, StyleSheet, Modal, Image } from 'react-native'

import AppIcon from '../components/appIcon/AppIcon'

const CameraScreen = () => {

    const [allowedCamera, setAllowedCamera] = useState(false)

    const [typeCamera, setTypeCamera] = useState('back')

    const [flashMode, setFlashMode] = useState('off')

    const [imagePreview, setImagePreview] = useState(null)
    const [isOpen, setIsopen] = useState(false)


    const changeFlashMode = () => {
        if (flashMode == "off") {
            setFlashMode('on')
        }else{
            setFlashMode('off')
        }
    }



    const changeCameraType = () => {
        if(typeCamera == "front"){
            setTypeCamera('back')
        }else if(typeCamera == "back"){
            setTypeCamera('front')
        }else{
            setTypeCamera('front')
        }
    }

    useEffect(()=> {
        allowPermission()
    }, [])

    const allowPermission = async () => {
        try {
            const camera = await Permissions.askAsync(Permissions.CAMERA)
            if(!camera.granted){
                return Permissions.askAsync(Permissions.CAMERA)
            }
            setAllowedCamera(true)
            

        } catch (error) {
            console.log("error loading the camera")
        }
    }

    const camRef = useRef(null)

    const takePicture = async () => {
        if (!camRef) {
            return
        }
        try{
            const pic = await camRef.current.takePictureAsync()
            setImagePreview(pic.uri)
            setIsopen(true)

        }catch(error){
            console.log('error taking picture')
        }
    }


    const closeImagePreview = () => {
        setImagePreview(null)
        setIsopen(false)
    }


    if (!allowedCamera){
        return(
            <View style={styles.notAllowed}>
            <TouchableOpacity style={styles.btn} onPress={allowPermission}>
                <Text style={styles.btnText}>Allow camera Permission</Text>
            </TouchableOpacity>
            </View>
        )
    }

        if(imagePreview) {
            return(
                <Modal animationType="fade" visible={isOpen}>
                    <Image source={{uri: imagePreview}} style={{height: "100%", width: "100%"}}/>
                    <View style={styles.actionBottom}>
                        <AppIcon IonName="send-outline" size={25} color="#eee" />
                        <AppIcon IonName="send-outline" size={25} color="#0e153a" style={styles.sendBtn} />
                    </View>
                    <View style={styles.closeBtn}>
                        <AppIcon AntName="closecircleo" size={30} color="#eee" onPress={closeImagePreview}/>
                    </View>
                </Modal>
            )
        }
    

    return(
        <View style= {{flex: 1}}>
            <Camera style = {{flex: 1}}
            type={typeCamera}
            flashMode={flashMode}
            ref={camRef}

        >

        
            <TouchableOpacity style={styles.captureBtn}onPress={takePicture}></TouchableOpacity>

            <View style={styles.header}>
                <AppIcon style={styles.headerIcon} AntName="user" color="#eee" size={24}/>
                <AppIcon style={styles.headerIcon} IonName="settings-outline" color="#eee" size={24}/>
            </View>

                <View style={styles.sideItem}>
                    <AppIcon style={styles.sideIcons} IonName="camera-outline" size={20} color="#eee" onPress={changeCameraType}/>
                    <AppIcon style={styles.sideIcons}  IonName="flash-outline" size={20} color="#eee" onPress={changeFlashMode}/>
                    <AppIcon style={styles.sideIcons}  IonName="musical-notes-outline" size={20} color="#eee"/>
                </View>
                
            </Camera>
        </View>
    )
}

const styles = StyleSheet.create({
    notAllowed: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    },
    btn: {
        padding: 20,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    btnText: {
        color: "#eee",
        fontSize: 18,
        fontWeight: "bold"
    },
    captureBtn: {
        position: "absolute",
        bottom: 20,
        width: 80,
        height: 80,
        borderRadius: 100,
        borderColor: "#eee",
        borderWidth: 6,
        alignSelf: "center"
    },
    header: {
        position: "absolute",
        top: 40,
        justifyContent: "space-between",
        padding: 10,
        flexDirection: "row",
        width: "100%"
    },
    headerIcon: {
        width: 50,
        height: 50,
    },
    sideItem: {
        position: "absolute",
        top: 110,
        right: 0,
        padding: 10,
        
    },
    sideIcons: {
        width: 45,
        height: 45,
        marginVertical: 10
    },
    actionBottom: {
        position: "absolute",
        bottom: 20,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    sendBtn: {
        backgroundColor: "yellow"
    },
    closeBtn: {
        padding: 10,
        position: "absolute",
        top: 40
    }
})

export default CameraScreen