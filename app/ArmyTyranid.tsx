import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet,Dimensions,View, Pressable } from 'react-native';

const { width } = Dimensions.get('screen');

export default function ArmyTyrand(){
    return (
        <View style={styles.container}>
          {/* Imagen que navega a la pantalla BasicRule */}
          <Pressable onPress={() => router.push('/Tyranidos')}>
            <Image resizeMode="stretch" source={require('../assets/images/Tyranids.png')} style={styles.image} />
          </Pressable>
    
          {/* Imagen que navega a la pantalla ArmyTyranid */}
          <Pressable onPress={() => router.push('/MinT')}>
            <Image resizeMode="stretch" source={require('../assets/images/MinT.png')} style={styles.image} />
          </Pressable>
        </View>
      );
};
const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#5A756E', paddingVertical: 0},
    image:{
      width: width - 20,
      height: 150,
      borderRadius:20,
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
    }
  });