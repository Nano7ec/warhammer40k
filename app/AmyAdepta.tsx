import { router } from "expo-router";
import React from "react";
import { Image ,View, StyleSheet, Dimensions, Pressable } from "react-native";
const {width} = Dimensions.get('screen')

export default function ArmyAdepta(){ 
    return(
        <View style={styles.container}>
            <Pressable onPress={()=> router.push('/Adepta')}>
                <Image resizeMode="stretch" source={require('../assets/images/ArmyAdepta.png')} style={styles.image}/>
            </Pressable>
            <Pressable onPress={()=> router.push('/MinAdepta')}>
            <Image resizeMode="stretch" source={require('../assets/images/MinAdepta.png')} style={styles.image}/>
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
  