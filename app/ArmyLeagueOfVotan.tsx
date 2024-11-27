import { router } from "expo-router";
import React from "react";
import {Image, StyleSheet, Dimensions, View, Pressable } from "react-native";
const {width} = Dimensions.get ('screen');

export default function ArmyLeagueOfVotan (){
    return(
        <View style={styles.container}>
            <Pressable onPress={()=> router.push('/LeagueofVotan')}>
                <Image source={require ('../assets/images/ArmyLeagueofVotann.png')} style={styles.image}/>
            </Pressable>
            <Pressable onPress={()=>router.push('/MinLeagueofVotan')}>
                <Image source={require ('../assets/images/MinLeagueOfvotan.png')} style={styles.image}/>
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