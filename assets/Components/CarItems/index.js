import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './Styles.js'
import StyledButtons from '../StyledButton'


const CarItem = () => {
    return (
      <View style={styles.carContainer}>
        
        <ImageBackground
          source={require('../../images/ModelS.jpeg')}
          style={styles.image}
        />
        
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at 69,490$</Text>
        </View>

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
    );
};

export default CarItem;
 