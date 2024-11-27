import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet,Dimensions,View, Pressable } from 'react-native';

const { width } = Dimensions.get('screen');

export default function ArmyChaosKnight (){
    return (
    <View style={styles.container}>
      {/* Imagen que navega a la pantalla BasicRule */}
      <Pressable>
        <Image resizeMode="stretch" source={require('../assets/images/armychaosknight.png')} style={styles.image} />
      </Pressable>

      {/* Imagen que navega a la pantalla BasicRule */}
      <Pressable onPress={()=> router.push('./MinChaosKnight')}>
        <Image resizeMode="stretch" source={require('../assets/images/minichaosknight.png')} style={styles.image} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#e0d2c4', paddingVertical: 0},
    image: {width: width, height: 150, borderRadius: 20, marginBottom: 10
    },
  });