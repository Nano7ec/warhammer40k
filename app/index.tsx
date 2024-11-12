import { router } from "expo-router";
import {Image,StyleSheet, Dimensions, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const {width} = Dimensions.get('screen')

export default function Index() {
  return (
    <ScrollView style={style.container}>
      <Pressable onPress={()=> router.push('/BasicRule')}>
      <Image resizeMode="stretch" source={require('../assets/images/RuleBasic.png')} style={style.image}/>
      </Pressable>
      <Pressable onPress={()=> router.push('/ArmyTyranid')}>
      <Image resizeMode="stretch" source={require('../assets/images/ArmyTyrand.png')} style={style.image}/>
      </Pressable>
      <Pressable onPress={()=> router.push('/ArmyGreyK')} >
      <Image resizeMode="stretch" source={require('../assets/images/ArmyGrek.png')} style={style.image}/>
      </Pressable>
      <Pressable onPress={()=> router.push('./ArmyNecrons')}>
        <Image resizeMode="stretch" source={require('../assets/images/ArmyNecrons.png')} style={style.image}/>
      </Pressable>
      <Pressable onPress={()=> router.push('/ArmyOrks')}>
      <Image resizeMode="stretch" source={require('../assets/images/ArmyOrks.png')} style={style.image}/>
      </Pressable>
      <Pressable onPress={()=> router.push('/ArmySpaceMarine')}>
      <Image resizeMode="stretch" source={require('../assets/images/ArmySapceM.png')} style={style.image}/>
      </Pressable>
      <Pressable onPress={()=> router.push('/ArmySpaceW')}>
      <Image resizeMode="stretch" source={require('../assets/images/ArmySpaceW.png')} style={style.image}/>
      </Pressable>
      <Pressable onPress={()=> router.push('/ArmyBlacktemplars')}>
      <Image resizeMode="stretch" source={require('../assets/images/ArmyBlackT.png')} style={style.image}/>
      </Pressable>
      <Pressable onPress={()=> router.push('/ArmyCustodes')}>
      <Image resizeMode="stretch" source={require('../assets/images/ArmyCustodes.png')} style={style.image}/>
      </Pressable>
      <Pressable onPress={()=> router.push('/AmyAdepta')}>
      <Image resizeMode="stretch" source={require('../assets/images/ArmyAdepta.png')} style={style.image}/>      
      </Pressable>
      <Pressable onPress={()=> router.push('/ArmyMechanicus')}>
      <Image source={require ('../assets/images/ArmyAeldari.png')} style={style.image}/>
      </Pressable>
      <Pressable onPress={()=> router.push('/ArmyThou')}>
      <Image resizeMode="stretch" source={require("../assets/images/ArmyTousandS.png")}style={style.image}/>
      </Pressable>
    </ScrollView> 
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