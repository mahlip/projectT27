import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location'

import Weather from './components/Weather';


const API_KEY = '26cbfa757f74ad5a0f0b75d05ab2c0a1';

export default function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [weatherData, setCurrentWeatherData] = useState(null)
  const [unitSystem, setUnitSystem] = useState('metric')

  useEffect(() => {
    load()
  }, [])
  async function load() {
    try {
        let { status } = await Location.requestPermissionsAsync()

        if(status != 'granted'){
          setErrorMessage('Access to location is required to run this app.')
          return 
        }
        const location = await Location.getCurrentPositionAsync({})

        const {latitude, longitude} = location.coords
        
        const openWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${unitSystem}&cnt=10&appid=${API_KEY}`

        const response = await fetch(openWeatherUrl)

        const result = await response.json()

        if(response.ok){
          setCurrentWeatherData(result)
        } else{
            setErrorMessage(result.message)
        }

    } catch (error) {
      setErrorMessage(error.message)
    }
  }
  if(weatherData){
      return (
        <View style={styles.container}>
          <Weather weatherData={weatherData}/>
          <StatusBar style="auto" />
        </View>
      );
  }else {
    return (
        <View style={styles.container}>
          <Text>{errorMessage}</Text>
          <StatusBar style="auto" />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
