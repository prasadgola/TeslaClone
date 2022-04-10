import React from 'react';
import { View, Text, FlatList,Dimensions } from 'react-native';
import styles from './Styles.js';
import cars from './cars.js';
import CarItem from '../CarItems';



const CarsList = () => {
    return (
        <View style={styles.container}>
            {/* this is important line in touch */}
            <FlatList
            data={cars}
            renderItem={({item}) =>  <CarItem car={item}/>}
            // this is important line in touch
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
};

export default CarsList;