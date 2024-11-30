import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Dimensions, View, Pressable } from 'react-native';
 
const { width } = Dimensions.get('screen');

export default function GenestealerCults () {
  return (
    <View style={styles.container}>
      <Pressable onPress={()=> router.push('/GenestalerCults')}>
        <Image resizeMode="stretch" source={require('../assets/images/GenestealerCultsRules.png')} style={styles.image} />
      </Pressable>
      <Pressable onPress={()=> router.push('/MinGenestealerCults')}>
        <Image resizeMode="stretch" source={require('../assets/images/MinGenestealerCults.png')} style={styles.image} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#003366', paddingVertical: 0 },
  image: { width: width, height: 150, borderRadius: 20, marginBottom: 5 },
});

