import { router } from "expo-router";
import {Image,StyleSheet, Dimensions, Pressable,View } from "react-native";

const {width} = Dimensions.get('screen')

export default function ArmyOrks(){
    return (
        <View style={style.container}>
            <Pressable onPress={()=> router.push('/Orks')}>
            <Image resizeMode="stretch" source={require('../assets/images/ArmyOrks.png')} style={style.image}/>
            </Pressable>
            <Pressable>
            <Image resizeMode="stretch" source={require('../assets/images/MinOrks.png')} style={style.image}/>
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