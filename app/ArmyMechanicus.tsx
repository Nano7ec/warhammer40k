import { router } from "expo-router";
import React from "react";
import {Image, Pressable, StyleSheet, Dimensions, View} from "react-native";
const {width} = Dimensions.get('screen');

export default function ArmyMechanicus (){
    return(
        <View style={styles.container}>
            <Pressable onPress={()=> router.push('/Mechanicus')}>
                <Image resizeMode="stretch" source={require("../assets/images/ArmyMecha.png")} style={styles.image}/>
            </Pressable>
            <Pressable>
                <Image resizeMode="stretch" source={require("../assets/images/MinMecha.png")} style={styles.image}/>
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