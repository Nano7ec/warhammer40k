    import { router } from 'expo-router';
import React from 'react';
    import {Pressable, Image, StyleSheet,View, Dimensions } from 'react-native';
     
    const { width } = Dimensions.get('window');
    
    export default function ArmyChaosSpaceMarine (){
      return (
        <View style={styles.container}>
          {/* Imagen que navega a la pantalla BasicRule */}
          <Pressable onPress={()=> router.push('/ChaosSpaceMarine')}>
            <Image resizeMode="stretch" source={require('../assets/images/army_chaos_space_marines.png')} style={styles.image} />
          </Pressable>
    
          {/* Imagen que navega a la pantalla BasicRule */}
          <Pressable onPress={()=> router.push('/MinChaosSpaceMarine')}>
            <Image resizeMode="stretch" source={require('../assets/images/mini_chaos_space_marines.png')} style={styles.image} />
          </Pressable>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {flex: 1, backgroundColor: '#75332c', paddingVertical: 0},
      image: {width: width, height: 150, borderRadius: 20, marginBottom: 10
      },
    });
    