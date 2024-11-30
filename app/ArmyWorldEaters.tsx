import { router } from "expo-router";
import React from "react";
import { Pressable, Image, StyleSheet, Dimensions, View } from "react-native";

const {width} = Dimensions.get('screen');

export default function ArmyWorldEaters (){
    return (
        <View style={style.container}>
            <Pressable onPress={()=> router.push('/WorldEaters')}>
            <Image source={require('../assets/images/ArmyWorldE.png')} style={style.image}/>
            </Pressable>
            <Pressable>
            <Image source={require('../assets/images/MinWorldE.png')} style={style.image}/>
            </Pressable>
        </View>
        
    );
};

const style =StyleSheet.create({
    container: {flex:1,
      backgroundColor: '#5A756E',
      paddingVertical: 0},
      image:{
        width: width - 20,
        height: 150,
        borderRadius:20,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
      }
  });