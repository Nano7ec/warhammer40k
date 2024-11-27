import { router } from "expo-router";
import { Route } from "expo-router/build/Route";
import React from "react";
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
      <Pressable onPress={()=> router.push('/ArmyWorldEaters')}>
      <Image source={require('../assets/images/ArmyWorldE.png')} style={style.image}/>
      </Pressable>
      <Pressable onPress={()=> router.push('/ArmyBloodAngel')}>
        <Image source={require('../assets/images/bloodangels.png')} style={style.image}/>
      </Pressable>
      <Pressable onPress={()=> router.push('/ArmyChaosDemon')}>
        <Image source={require('../assets/images/chaosdaemons.png')} style={style.image}/>
      </Pressable>
      <Pressable onPress={()=> router.push('/ArmyChaosKnight')}>
        <Image source={require('../assets/images/chaosknight.png')} style={style.image}/>
      </Pressable>
      <Pressable onPress={()=> router.push('/ArmyChaosSpaceMarine')}>
      <Image source={require('../assets/images/chaos_space_marines.png')} style={style.image}/>
      </Pressable>
      <Pressable onPress={()=> router.push('/ArmyDarkAngels')}>
      <Image source={require('../assets/images/ArmyDarkAngels.png')} style={style.image}/>
      </Pressable>
      <Pressable onPress={()=> router.push('/ArmyDeathGuard')}>
      <Image source={require('../assets/images/ArmyDeathGuard.png')} style={style.image}/>
      </Pressable>
      <Pressable onPress={()=> router.push('/ArmyDeathWatch')}>
      <Image source={require('../assets/images/ArmyDeathWatch.png')} style={style.image}/>
      </Pressable>
      <Pressable onPress={()=> router.push('/ArmyDurkhari')}>
      <Image source={require('../assets/images/ArmyDrukhari.png')} style={style.image}/>
      </Pressable>
      <Pressable onPress={()=> router.push('/ArmyGenestealerCults')}>
      <Image source={require('../assets/images/ArmyGenestealerCults.png')} style={style.image}/>
      </Pressable>
      <Pressable onPress={()=> router.push('/ArmyImperialKnight')}>
      <Image source={require('../assets/images/ArmyImperialKnight.png')} style={style.image}/>
      </Pressable>
      <Pressable onPress={()=> router.push('/ArmyImperialA')}>
      <Image resizeMode="stretch" source={require('../assets/images/ArmyImperialA.png')} style={style.image}/>
      </Pressable>
      <Pressable onPress={()=> router.push('/ArmyImperialGuard')}>
      <Image resizeMode="stretch" source={require('../assets/images/ArmyimperialG.png')} style={style.image}/>
      </Pressable>
      <Pressable onPress={()=> router.push('/ArmyTauEmpire')}>
      <Image resizeMode="stretch" source={require('../assets/images/ArmyTauEmpire.png')} style={style.image}/>
      </Pressable>
      <Pressable onPress={()=> router.push('/ArmyLeagueOfVotan')}>
      <Image resizeMode="stretch" source={require('../assets/images/ArmyLeagueofVotann.png')} style={style.image}/>
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