import Cawl from "@/components/miniaturas/Mechanicus/Cawl";
import Corpuscarii from "@/components/miniaturas/Mechanicus/Corpuscarii";
import Datasmith from "@/components/miniaturas/Mechanicus/Datasmith";
import Fusilave from "@/components/miniaturas/Mechanicus/Fusilave";
import Kastelan from "@/components/miniaturas/Mechanicus/Kastelan";
import Stratoraptor from "@/components/miniaturas/Mechanicus/Stratoraptor";
import Transvector from "@/components/miniaturas/Mechanicus/Transvector";
import { router } from "expo-router";
import React from "react";
import {Text, ScrollView, StyleSheet, View} from 'react-native'

export default function MinMechanicus (){
    return (
        <ScrollView>
            <>
            <Text style={styles.border}>Gramatica usada</Text>
            {/* Cabecera de la tabla */}
            <View style={styles.tableRow}>
              <>
                <View style={styles.tableCelltop}>
                  <Text style={styles.headerText}>Palabra</Text>
                </View>
                <View style={styles.tableCelltop}>
                  <Text style={styles.headerText}>Acronimos</Text>
                </View>
              </>
            </View>
            {/* Filas de la tabla */}
            <View style={styles.tableRow}>
              <>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>
                    <Text style={styles.wapo}>Movimiento</Text>
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>M</Text>
                </View>
              </>
            </View>
            {/* Filas de la tabla */}
            <View style={styles.tableRow}>
              <>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>
                    <Text style={styles.wapo}>Dureza</Text>
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>T</Text>
                </View>
              </>
            </View>
    
            {/* Filas de la tabla */}
            <View style={styles.tableRow}>
              <>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>
                    <Text style={styles.wapo}>Salvacion</Text>
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>SV</Text>
                </View>
              </>
            </View>
    
            {/* Filas de la tabla */}
            <View style={styles.tableRow}>
              <>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>
                    <Text style={styles.wapo}>Heridas</Text>
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>W</Text>
                </View>
              </>
            </View>
    
            <View style={styles.tableRow}>
              <>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>
                    <Text style={styles.wapo}>Liderazgo</Text>
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>Ld</Text>
                </View>
              </>
            </View>
    
            <View style={styles.tableRow}>
              <>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>
                    <Text style={styles.wapo}>Potencial nominal</Text>
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>Oc</Text>
                </View>
              </>
            </View>
    
            <View style={styles.tableRow}>
              <>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>
                    <Text style={styles.wapo}>Arma distancia</Text>
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>AD</Text>
                </View>
              </>
            </View>
    
            <View style={styles.tableRow}>
              <>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>
                    <Text style={styles.wapo}>Armas cuerpo a cuerpo</Text>
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>ACC</Text>
                </View>
              </>
            </View>
    
            <View style={styles.tableRow}>
              <>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>
                    <Text style={styles.wapo}>Rango</Text>
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>R</Text>
                </View>
              </>
            </View>
    
            <View style={styles.tableRow}>
              <>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>
                    <Text style={styles.wapo}>Exito de conexion</Text>
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>BS</Text>
                </View>
              </>
            </View>
    
            <View style={styles.tableRow}>
              <>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>
                    <Text style={styles.wapo}>Fuerza</Text>
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>S</Text>
                </View>
              </>
            </View>
    
            <View style={styles.tableRow}>
              <>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>
                    <Text style={styles.wapo}>Penetracion de armadura</Text>
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>AP</Text>
                </View>
              </>
            </View>
    
            <View style={styles.tableRow}>
              <>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>
                    <Text style={styles.wapo}>Daño</Text>
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.cellText}>D</Text>
                </View>
              </>
            </View>
            </>
            <Fusilave/>
            <Stratoraptor/>
            <Transvector/>
            <Cawl/>
            <Corpuscarii/>
            <Datasmith/>
            <Kastelan/>
        </ScrollView>
      );
    };
    
    const styles = StyleSheet.create({
        border: {
          color: "#fff",
          fontWeight: "bold",
          backgroundColor: "#9F322A",
          fontSize: 20,
          padding: 5,
          marginTop: 6,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
        border2: {
            color: "#fff",
            fontWeight: "bold",
            backgroundColor: "#9F322A",
            fontSize: 20,
            padding: 5,
            marginTop: 6,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
        
          },
        descrip: {
          fontSize: 18,
          backgroundColor: "#FFFFFF",
          color: "#000000",
          paddingLeft: 3,
          paddingRight: 3,
          paddingBottom: 3,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        },
        italicdesc: {
            fontSize: 15,
            backgroundColor: "#FFFFFF",
            fontStyle: "italic",
            color: "#000000",
            paddingLeft: 3,
            paddingRight: 3,
            paddingBottom: 3,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          },
        tableRow: {
          flexDirection: "row", // Alinear elementos en fila
          borderBottomWidth: 1,
          borderBottomColor: "#9F322A",
        },
        tableCelltop: {
          flex: 1, // Distribuye equitativamente el espacio entre columnas
          alignItems: "center", // Centra el contenido horizontalmente
          justifyContent: "center", // Centra el contenido verticalmente
          padding: 5,
          backgroundColor: "#9F322A",
          marginTop: 5,
          fontSize: 10,
        },
        tableCell: {
          flex: 1, // Distribuye equitativamente el espacio entre columnas
          alignItems: "center", // Centra el contenido horizontalmente
          justifyContent: "center", // Centra el contenido verticalmente
          padding: 5,
          backgroundColor: "#FFFFFF",
          fontSize: 10,
        },
        headerText: {
          color: "#FFFFFF",
          fontWeight: "bold",
          fontSize: 20,
        },
        cellText: {
          fontSize: 14,
          color: "#000000",
        },
        wapo: {
          color: "#000000",
          fontWeight: "bold",
        },
        MinDes: {
          fontSize: 18,
          color: "#000000",
          paddingLeft: 3,
          paddingRight: 3,
          paddingBottom: 3,
        },
});
    