import * as React from 'react';
import { Text, ScrollView, Image, Dimensions, StyleSheet, View } from 'react-native';
 export default function MinBloodAngel (){
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#ff9f9f', padding: 7}}>
            {/**INICIA LA TABLA DE LA GRAMATICA */}
    <Text style={styles.Titulo}>
        Gramatica Usada
    </Text>
{/* Cabecera de la tabla */}
<View style={styles.Cabecera}>
    <>
        <View style={styles.Tcabe}>
            <Text style={styles.Ctext}>Concepto</Text>
        </View>
        <View style={styles.Tcabe}>
            <Text style={styles.Ctext}>Abreviatura</Text>
        </View>
    </>
</View>

{/* Filas de la tabla */}
{/* Movimiento */}
<View style={styles.Tabla}>
    <>
        <View style={styles.Renglon}>
            <Text style={styles.Concepto}>Movimiento</Text>
        </View>
        <View style={styles.Renglon}>
            <Text style={styles.Abre}>M</Text>
        </View>
    </>
</View>

{/* Dureza */}
<View style={styles.Tabla}>
    <>
        <View style={styles.Renglon}>
            <Text style={styles.Concepto}>Dureza</Text>
        </View>
        <View style={styles.Renglon}>
            <Text style={styles.Abre}>T</Text>
        </View>
    </>
</View>

{/* Salvación */}
<View style={styles.Tabla}>
    <>
        <View style={styles.Renglon}>
            <Text style={styles.Concepto}>Salvación</Text>
        </View>
        <View style={styles.Renglon}>
            <Text style={styles.Abre}>SV</Text>
        </View>
    </>
</View>

{/* Heridas */}
<View style={styles.Tabla}>
    <>
        <View style={styles.Renglon}>
            <Text style={styles.Concepto}>Heridas</Text>
        </View>
        <View style={styles.Renglon}>
            <Text style={styles.Abre}>W</Text>
        </View>
    </>
</View>

{/* Liderazgo */}
<View style={styles.Tabla}>
    <>
        <View style={styles.Renglon}>
            <Text style={styles.Concepto}>Liderazgo</Text>
        </View>
        <View style={styles.Renglon}>
            <Text style={styles.Abre}>Ld</Text>
        </View>
    </>
</View>

{/* Objetivo de Control */}
<View style={styles.Tabla}>
    <>
        <View style={styles.Renglon}>
            <Text style={styles.Concepto}>Objetivo de Control</Text>
        </View>
        <View style={styles.Renglon}>
            <Text style={styles.Abre}>OC</Text>
        </View>
    </>
</View>

{/* Habilidad de Arma */}
<View style={styles.Tabla}>
    <>
        <View style={styles.Renglon}>
            <Text style={styles.Concepto}> Habilidad de Arma </Text>

        </View>
        <View style={styles.Renglon}>
            <Text style={styles.Abre}>WS</Text>
        </View>
    </>
</View>

{/* Habilidad de Disparo */}
<View style={styles.Tabla}>
    <>
        <View style={styles.Renglon}>
            <Text style={styles.Concepto}>Habilidad de Disparo</Text>
        </View>
        <View style={styles.Renglon}>
            <Text style={styles.Abre}>BS</Text>
        </View>
    </>
</View>

{/* Fuerza */}
<View style={styles.Tabla}>
    <>
        <View style={styles.Renglon}>
            <Text style={styles.Concepto}>Fuerza</Text>
        </View>
        <View style={styles.Renglon}>
            <Text style={styles.Abre}>S</Text>
        </View>
    </>
</View>

{/* Penetración de Armadura */}
<View style={styles.Tabla}>
    <>
        <View style={styles.Renglon}>
            <Text style={styles.Concepto}>Penetración de Armadura</Text>
        </View>
        <View style={styles.Renglon}>
            <Text style={styles.Abre}>AP</Text>
        </View>
    </>
</View>

{/* Daño */}
<View style={styles.Tabla}>
    <>
        <View style={styles.Renglon}>
            <Text style={styles.Concepto}>Daño</Text>
        </View>
        <View style={styles.Renglon}>
            <Text style={styles.Abre}>D</Text>
        </View>
    </>
</View>
</ScrollView>
    );
 };

 const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width * 1,  // Ajusta el ancho al 90% de la pantalla
        height: 80,  // Deja que la altura se ajuste automáticamente
        aspectRatio: 0.5,   // Mantiene las proporciones
        marginTop: 15,
    },
    Titulo: {textTransform: 'uppercase', textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#ff0000', fontSize: 24, padding: 5, borderRadius: 10 },
    Cabecera: {flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c03f3f'},
    Tcabe: {flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5, backgroundColor: '#ff0000', marginTop: 5},
    Ctext: {color: '#fff', fontWeight: 'bold', fontSize: 20},
    Tabla: {flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c03f3f', backgroundColor: '#c03f3f'},
    Renglon: {flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5},
    Concepto:{fontSize: 14, color: '#fff'},
    Abre: {fontSize: 14, color: '#fff'},

});