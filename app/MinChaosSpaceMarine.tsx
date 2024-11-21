import * as React from 'react';
import { Text, ScrollView, Image, Dimensions, StyleSheet, View } from 'react-native';
 
export default function MinChaosSpaceMarine () {
    return(
        <ScrollView style={{ flex: 1, backgroundColor: '#ff9f9f', padding: 7}}>
            {/**INICIA LA TABLA DE LA GRAMATICA */}
    <Text style={{textTransform: 'uppercase', textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#ff0000', fontSize: 24, padding: 5, borderRadius: 10 }}>
        Gramatica Usada
    </Text>
{/* Cabecera de la tabla */}
<View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c03f3f'}}>
    <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5, backgroundColor: '#ff0000', marginTop: 5}}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>Concepto</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5, backgroundColor: '#ff0000', marginTop: 5}}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>Abreviatura</Text>
        </View>
    </>
</View>

{/* Filas de la tabla */}
{/* Movimiento */}
<View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c03f3f', backgroundColor: '#c03f3f'}}>
    <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>Movimiento</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>M</Text>
        </View>
    </>
</View>

{/* Dureza */}
<View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c03f3f', backgroundColor: '#c03f3f'}}>
    <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>Dureza</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>T</Text>
        </View>
    </>
</View>

{/* Salvación */}
<View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c03f3f', backgroundColor: '#c03f3f'}}>
    <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>Salvación</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>SV</Text>
        </View>
    </>
</View>

{/* Heridas */}
<View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c03f3f', backgroundColor: '#c03f3f'}}>
    <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>Heridas</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>W</Text>
        </View>
    </>
</View>

{/* Liderazgo */}
<View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c03f3f', backgroundColor: '#c03f3f'}}>
    <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>Liderazgo</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>Ld</Text>
        </View>
    </>
</View>

{/* Objetivo de Control */}
<View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c03f3f', backgroundColor: '#c03f3f'}}>
    <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>Objetivo de Control</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>OC</Text>
        </View>
    </>
</View>

{/* Habilidad de Arma */}
<View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c03f3f', backgroundColor: '#c03f3f'}}>
    <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>Habilidad de Arma</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>WS</Text>
        </View>
    </>
</View>

{/* Habilidad de Disparo */}
<View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c03f3f', backgroundColor: '#c03f3f'}}>
    <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>Habilidad de Disparo</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>BS</Text>
        </View>
    </>
</View>

{/* Fuerza */}
<View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c03f3f', backgroundColor: '#c03f3f'}}>
    <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>Fuerza</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>S</Text>
        </View>
    </>
</View>

{/* Penetración de Armadura */}
<View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c03f3f', backgroundColor: '#c03f3f'}}>
    <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>Penetración de Armadura</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>AP</Text>
        </View>
    </>
</View>

{/* Daño */}
<View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#c03f3f', backgroundColor: '#c03f3f'}}>
    <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>Daño</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5}}>
            <Text style={{fontSize: 14, color: '#fff'}}>D</Text>
        </View>
    </>
</View>
{/** FINALIZACION DE LA TABLA DE LA GRAMATICA*/}

</ScrollView>
    );

}

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width * 1,  // Ajusta el ancho al 90% de la pantalla
        height: 80,  // Deja que la altura se ajuste automáticamente
        aspectRatio: 0.5,   // Mantiene las proporciones
        marginTop: 15,
    },
    Palabrasclave:{flex: 1, // Distribuye equitativamente el espacio entre columnas
        alignItems: 'center', // Centra el contenido horizontalmente
        justifyContent: 'center', // Centra el contenido verticalmente
        padding: 5,backgroundColor: '#ff0000',marginTop: 5,fontSize: 10},
    extra:{flexDirection: 'row', // Alinear elementos en fila
        borderBottomWidth: 1,borderBottomColor: '#c03f3f',backgroundColor: '#c03f3f',fontSize: 10}
});
