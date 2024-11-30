import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Dimensions, View, Pressable } from 'react-native';
 
const { width } = Dimensions.get('screen');

export default function ArmyDeathGuard() {
  return (
    <View style={styles.container}>
      <Pressable onPress={()=> router.push('/DeathGuard')}>
        <Image resizeMode="stretch" source={require('../assets/images/DeathGuardRules.png')} style={styles.image} />
      </Pressable>
      <Pressable onPress={()=> router.push('/MinDeathGuard')}>
      <Image resizeMode="stretch" source={require('../assets/images/MinDeathGuard.png')} style={styles.image} />
    </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#003366', paddingVertical: 0 },
  image: { width: width, height: 150, borderRadius: 20, marginBottom: 5 },
});
