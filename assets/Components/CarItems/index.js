import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './Styles.js';
import StyledButtons from '../StyledButton';


const CarItem = (props) => {

    const { name, tagline, image } = props.car

    return (
      <View style={styles.carContainer}>
        
        <ImageBackground
          source={image}
          style={styles.image}
        />
        
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{tagline} </Text>
        </View>

        <View style={styles.buttonContainer}>
          <StyledButtons 
            type = 'primary'
            content = 'Customer Order'
            onPress = {() => {
              console.warn('hey there')
            }}
          />

          <StyledButtons 
            type = 'seconary'
            content = 'EXISTING INVENTORY'
            onPress = {() => {
              console.warn('hey ')
            }}
          />
        </View>

      </View>
    );
};

export default CarItem;
 