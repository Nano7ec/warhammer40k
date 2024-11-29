import { router } from "expo-router";
import {Image, StyleSheet, Dimensions, View, Pressable } from "react-native";
const {width} = Dimensions.get ('screen');

export default function ArmyAeldari (){
    return(
        <View style={styles.container}>
            <Pressable onPress={()=> router.push('/Aeldari')}>
                <Image source={require ('../assets/images/ArmyAeldari.png')} style={styles.image}/>
            </Pressable>
            <Pressable onPress={()=> router.push('/MinAeldari')}>
                <Image source={require ('../assets/images/MinAeldari.png')} style={styles.image}/>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#5A756E", paddingVertical: 0 },
  image:{
    width: width - 20,
    height: 150,
    borderRadius:20,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  }
});