import { router } from 'expo-router';
import {TouchableOpacity, Image, StyleSheet,Dimensions,View } from 'react-native';

const { width } = Dimensions.get('screen');

export default function ArmyTyrand(){
    return (
        <View style={styles.container}>
          {/* Imagen que navega a la pantalla BasicRule */}
          <TouchableOpacity onPress={() => router.push('/Tyranidos')}>
            <Image resizeMode="stretch" source={require('../assets/images/Tyranids.png')} style={styles.image} />
          </TouchableOpacity>
    
          {/* Imagen que navega a la pantalla ArmyTyranid */}
          <TouchableOpacity onPress={() => router.push('/MinT')}>
            <Image resizeMode="stretch" source={require('../assets/images/MinT.png')} style={styles.image} />
          </TouchableOpacity>
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