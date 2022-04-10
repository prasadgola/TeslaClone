import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './Styles.js'


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

      </View>
    );
};

export default CarItem;
 