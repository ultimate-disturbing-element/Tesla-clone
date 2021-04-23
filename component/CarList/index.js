import React from 'react'
import {View,Text,FlatList, Dimensions} from 'react-native'
import CarItem from '../carItem';


import styles from './style';
import cars from './cars'

const CarList=(props)=>{
    return(
        <View style={styles.container}>
     <FlatList 
     data={cars}
     renderItem={({item})=><CarItem car={item}/>}
     snapToAlignment={'start'}
     decelerationRate={'fast'}
     showsVerticalScrollIndicator={false}
     snapToInterval={Dimensions.get('window').height}
     />
        </View>
    )
}

export default CarList;