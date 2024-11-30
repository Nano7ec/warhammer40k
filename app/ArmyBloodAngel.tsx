import { router } from "expo-router";
import {Image, StyleSheet,Dimensions,View, Pressable } from 'react-native';

const { width } = Dimensions.get('window');

export default function ArmyBloodAngel () {
  return (
    <View style={styles.container}>
      {/* Imagen que navega a la pantalla Army */}
      <Pressable>
        <Image resizeMode="stretch" source={require('../assets/images/armybloodangels.png')} style={styles.image} />
      </Pressable>

      {/* Imagen que navega a la pantalla Miniaturas */}
      <Pressable onPress={()=> router.push('../MinBloodAngel')}>
        <Image resizeMode="stretch" source={require('../assets/images/minibloodangels.png')} style={styles.image} />
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ff9f9f', paddingVertical: 0},
  image: {width: width, height: 150, borderRadius: 20, marginBottom: 5
  },
});
