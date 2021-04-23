import React from 'react';
import {View,Text,ImageBackground} from 'react-native';
import styles from './styles'
import StyledButton from '../styledButton';

const CarItem=(props)=>{
  const {name,tagline,image}=props.car;
return(
      <View style={styles.carContainer}>
      <ImageBackground source={image}
      style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline}</Text>
      </View>
      <View style={styles.buttonContainer}>
      <StyledButton type="primary" content={"Custom Order"} />
      <StyledButton type="secondary" content={"Existing Inventory"} />
      </View>
     </View>
)
}

export default CarItem;