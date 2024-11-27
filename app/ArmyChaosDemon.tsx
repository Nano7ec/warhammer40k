import { router} from "expo-router";
import React from "react";
import { Image, StyleSheet,Dimensions,View, Pressable } from 'react-native';

const { width } = Dimensions.get('window');

export default function ArmyChaosDemon (){
    return (
        <View style={styles.container}>
        {/* Imagen que navega a la pantalla BasicRule */}
        <Pressable onPress={()=> router.push('/ChaosDemon')}>
          <Image resizeMode="stretch" source={require('../assets/images/armychaosdaemons.png')} style={styles.image} />
        </Pressable>
  
        {/* Imagen que navega a la pantalla BasicRule */}
        <Pressable>
          <Image resizeMode="stretch" source={require('../assets/images/minichaosdaemons.png')} style={styles.image} />
        </Pressable>
  
      </View>   
    );
  };
  
  const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#7d8cc3', paddingVertical: 0},
    image: {width: width, height: 150, borderRadius: 20, marginBottom: 10
    },
  });