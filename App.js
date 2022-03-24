
import { NavigationContainer } from "@react-navigation/native"
import React from 'react'
import { StatusBar } from 'react-native'

import { BottomNav } from './app/navigations/BottomNav'
import {useFonts as useLatoFont, Lato_700Bold} from '@expo-google-fonts/lato'

const App = () => {

  const [latoFont] = useLatoFont({
    Lato_700Bold
  })

  if(!latoFont){
    return null
  }

  return(
    <NavigationContainer>
      <BottomNav />
      <StatusBar barStyle="dark-content" />
    </NavigationContainer>
  )
}

export default App