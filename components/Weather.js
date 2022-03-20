import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import moment from 'moment-timezone'

export default function Weather({weatherData}) {
    // Getting daily weather data
    const {
        daily: [firstDay,secondDay,thirdDay,fourthDay,fifthDay,sixthDay,seventhDay]
    }= weatherData

    // Getting data from weather sub-array
    const {
        weather: [weatherOne]
    } = firstDay
    const {
        weather: [weatherTwo]
    } = secondDay
    const {
        weather: [weatherThree]
    } = thirdDay
    const {
        weather: [weatherFour]
    } = fourthDay
    const {
        weather: [weatherFive]
    } = fifthDay
    const {
        weather: [weatherSix]
    } = sixthDay
    const {
        weather: [weatherSeven]
    } = seventhDay

    const firstImg = {uri: 'http://openweathermap.org/img/wn/'+weatherOne.icon+'@2x.png'}
    const secondImg = {uri: 'http://openweathermap.org/img/wn/'+weatherTwo.icon+'@2x.png'}
    const thirdImg = {uri: 'http://openweathermap.org/img/wn/'+weatherThree.icon+'@2x.png'}
    const fourthImg = {uri: 'http://openweathermap.org/img/wn/'+weatherFour.icon+'@2x.png'}
    const fifthImg = {uri: 'http://openweathermap.org/img/wn/'+weatherFive.icon+'@2x.png'}
    const sixthImg = {uri: 'http://openweathermap.org/img/wn/'+weatherSix.icon+'@2x.png'}
    const seventhImg = {uri: 'http://openweathermap.org/img/wn/'+weatherSeven.icon+'@2x.png'}
    
    console.log(weatherData)

    return(
        <View>
            <View style = {styles.dayOne}>
                <Image source={firstImg} style={styles.image}/>
                <Text style = {styles.weekday}>{moment(firstDay.dt *1000).format('dddd')}</Text>
                <Text style = {styles.weather}>{weatherOne.description}</Text>
                <Text style = {styles.temperature}>{firstDay.temp.day}&#176;C</Text>
            </View>
            <View style = {styles.dayTwo}>
                <Image source={secondImg} style={styles.image}/>
                <Text style = {styles.weekday}>{moment(secondDay.dt *1000).format('dddd')}</Text>
                <Text style = {styles.weather}>{weatherTwo.description}</Text>
                <Text style = {styles.temperature}>{secondDay.temp.day}&#176;C</Text>
            </View>
            <View style = {styles.dayThree}>
                <Image source={thirdImg} style={styles.image}/>
                <Text style = {styles.weekday}>{moment(thirdDay.dt *1000).format('dddd')}</Text>
                <Text style = {styles.weather}>{weatherThree.description}</Text>
                <Text style = {styles.temperature}>{thirdDay.temp.day}&#176;C</Text>
            </View>
            <View style = {styles.dayFour}>
                <Image source={fourthImg} style={styles.image}/>
                <Text style = {styles.weekday}>{moment(fourthDay.dt *1000).format('dddd')}</Text>
                <Text style = {styles.weather}>{weatherFour.description}</Text>
                <Text style = {styles.temperature}>{fourthDay.temp.day}&#176;C</Text>
            </View>
            <View style = {styles.dayFive}>
                <Image source={fifthImg} style={styles.image}/>
                <Text style = {styles.weekday}>{moment(fifthDay.dt *1000).format('dddd')}</Text>
                <Text style = {styles.weather}>{weatherFive.description}</Text>
                <Text style = {styles.temperature}>{fifthDay.temp.day}&#176;C</Text>
            </View>
            <View style = {styles.daySix}>
                <Image source={sixthImg} style={styles.image}/>
                <Text style = {styles.weekday}>{moment(sixthDay.dt *1000).format('dddd')}</Text>
                <Text style = {styles.weather}>{weatherSix.description}</Text>
                <Text style = {styles.temperature}>{sixthDay.temp.day}&#176;C</Text>
            </View>
            <View style = {styles.daySeven}>
                <Image source={seventhImg} style={styles.image}/>
                <Text style = {styles.weekday}>{moment(seventhDay.dt *1000).format('dddd')}</Text>
                <Text style = {styles.weather}>{weatherSeven.description}</Text>
                <Text style = {styles.temperature}>{seventhDay.temp.day}&#176;C</Text>
            </View>
        </View>
    )
}

const CurrentTemp = ({weatherData}) => {
    const img = {uri: 'http://openweathermap.org/img/wn/10d@2x.png'}
    return(
        <View>
            <View style = {styles.dayOne}>
                <Image source={img} style={styles.image}/>
                <Text style = {styles.weekday}>Monday</Text>
                <Text style = {styles.weather}>Rain</Text>
                <Text style = {styles.temperature}>{day}&#176;C</Text>
            </View>
            <View style = {styles.dayTwo}>
                <Image source={img} style={styles.image}/>
                <Text style = {styles.weekday}>Tuesday</Text>
                <Text style = {styles.weather}>Rain</Text>
                <Text style = {styles.temperature}>Day - &#176;C</Text>
            </View>
            <View style = {styles.dayThree}>
                <Image source={img} style={styles.image}/>
                <Text style = {styles.weekday}>Wednesday</Text>
                <Text style = {styles.weather}>Rain</Text>
                <Text style = {styles.temperature}>&#176;C</Text>
            </View>
            <View style = {styles.dayFour}>
                <Image source={img} style={styles.image}/>
                <Text style = {styles.weekday}>Thursday</Text>
                <Text style = {styles.weather}>Rain</Text>
                <Text style = {styles.temperature}>-5 &#176;C</Text>
            </View>
            <View style = {styles.dayFive}>
                <Image source={img} style={styles.image}/>
                <Text style = {styles.weekday}>Friday</Text>
                <Text style = {styles.weather}>Rain</Text>
                <Text style = {styles.temperature}>-5 &#176;C</Text>
            </View>
            <View style = {styles.daySix}>
                <Image source={img} style={styles.image}/>
                <Text style = {styles.weekday}>Saturday</Text>
                <Text style = {styles.weather}>Rain</Text>
                <Text style = {styles.temperature}>-5 &#176;C</Text>
            </View>
            <View style = {styles.daySeven}>
                <Image source={img} style={styles.image}/>
                <Text style = {styles.weekday}>Sunday</Text>
                <Text style = {styles.weather}>Rain</Text>
                <Text style = {styles.temperature}>-5 &#176;C</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dayOne:{
        flexDirection:"row",
        padding: 5,
        marginTop:485,
        backgroundColor: "#7B9EA8",
        width: 375,
        height: 90,
        alignItems:"center",
    },
    image: {
        width: 150,
        height: 75,
        marginLeft:-30,
        marginRight:"auto",
    },
    weekday:{
        fontSize: 16,
        color: "white",
        marginRight:"auto",
        marginTop:0,
        marginBottom:50,
        alignItems:"center",
    },
    weather:{
        fontSize:16,
        color:"white",
        marginLeft:-70,
        marginRight:"auto",
    },
    temperature:{
        fontSize: 16,
        color: "white",
        fontWeight:"100",
        marginLeft:"auto",
        marginRight:0,
        marginTop:"auto",
        marginBottom:"auto",
    },
    dayTwo:{
        flexDirection:"row",
        padding: 10,
        marginTop:5,
        backgroundColor: "#7B9EA8",
        width: 375,
        height: 90,
        alignItems:"center",
    },
    dayThree:{
        flexDirection:"row",
        padding: 10,
        marginTop:5,
        backgroundColor: "#7B9EA8",
        width: 375,
        height: 90,
        alignItems:"center",
    },
    dayFour:{
        flexDirection:"row",
        padding: 10,
        marginTop:5,
        backgroundColor: "#7B9EA8",
        width: 375,
        height: 90,
        alignItems:"center",
    },
    dayFive:{
        flexDirection:"row",
        padding: 10,
        marginTop:5,
        backgroundColor: "#7B9EA8",
        width: 375,
        height: 90,
        alignItems:"center",
    },
    daySix:{
        flexDirection:"row",
        padding: 10,
        marginTop:5,
        backgroundColor: "#7B9EA8",
        width: 375,
        height: 90,
        alignItems:"center",
    },
    daySeven:{
        flexDirection:"row",
        padding: 10,
        marginTop:5,
        backgroundColor: "#7B9EA8",
        width: 375,
        height: 90,
        alignItems:"center",
    },
})
