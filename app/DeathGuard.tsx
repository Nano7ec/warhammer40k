import * as React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
 
export default function DeathGuard () {
    return (
        <ScrollView style={styles.scroll}>
            {/* Sección 1: Regla de Contagio */}
            <Text style={styles.title}>DON DE NURGLE (AURA)</Text>
            <Text style={styles.desc}>
                Los Death Guard propagan incontables infecciones, descomponiendo todo lo que tocan. Mientras una unidad enemiga esté dentro del rango de Contagio, resta 1 a su característica de Resistencia. El rango de Contagio aumenta con cada ronda de batalla.
                {"\n"}Ronda 1: Rango de Contagio = 3"
                {"\n"}Ronda 2: Rango de Contagio = 6"
                {"\n"}Ronda 3 en adelante: Rango de Contagio = 9"
            </Text>

            {/* Sección 2: Estratagemas */}
            <Text style={styles.title}>ESTRATAGEMAS DE LA COMPAÑÍA DE LA PESTE</Text>

            <Text style={styles.subtitle}>CORROSIÓN FÉRRICA</Text>
            <Text style={styles.desc}>
                Cuando el óxido se propaga, ni siquiera el blindaje más resistente es seguro.
                {"\n"}<Text style={styles.highlight}>CUÁNDO:</Text> En la fase de Disparo o de Combate.
                {"\n"}<Text style={styles.highlight}>OBJETIVO:</Text> Una unidad Death Guard que no haya sido seleccionada para disparar o combatir.
                {"\n"}<Text style={styles.highlight}>EFECTO:</Text> Aumenta la Penetración de Armadura de los ataques en 1. Si el objetivo está dentro del rango de un marcador de objetivo Infectado, mejora la Penetración en 2 en caso de Heridas Críticas.
            </Text>

            <Text style={styles.subtitle}>RESILIENCIA REPUGNANTE</Text>
            <Text style={styles.desc}>
                Los elegidos por Nurgle son inmunes al dolor, capaces de soportar daños atroces.
                {"\n"}<Text style={styles.highlight}>CUÁNDO:</Text> En la fase de Combate, después de que una unidad enemiga haya seleccionado sus objetivos.
                {"\n"}<Text style={styles.highlight}>OBJETIVO:</Text> Una unidad Death Guard que haya sido seleccionada como objetivo.
                {"\n"}<Text style={styles.highlight}>EFECTO:</Text> Reduce en 1 la característica de Daño de cada ataque asignado a un modelo de esa unidad.
            </Text>

            {/* Sección 3: Mejora */}
            <Text style={styles.title}>MEJORAS DE LA COMPAÑÍA DE LA PESTE</Text>

            <Text style={styles.subtitle}>PLAGA VIVIENTE</Text>
            <Text style={styles.desc}>
                Los bendecidos por Nurgle irradian una plaga que afecta a todos a su alrededor.
                {"\n"}<Text style={styles.highlight}>EFECTO:</Text> Añade 3" al alcance de las habilidades de Aura del portador, incluyendo el Don de Nurgle.
            </Text>

            <Text style={styles.subtitle}>PUTREFACCIÓN FÉTIDA</Text>
            <Text style={styles.desc}>
                El guerrero emana un hedor insoportable que debilita a los enemigos cercanos.
                {"\n"}<Text style={styles.highlight}>EFECTO:</Text> Mientras una unidad enemiga esté dentro del rango de Contagio del portador, tira un D6 cada vez que falle una prueba de Shock de Batalla: con 2-5 sufre 1 Herida Mortal; con 6, sufre D3 Heridas Mortales.
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scroll: { flex: 1, backgroundColor: '#0a1e0a', padding: 5 },  // Fondo oscuro verde profundo
    title: { color: '#fff', fontWeight: 'bold', backgroundColor: '#4a5230', fontSize: 20, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderColor: '#6b705c', borderWidth: 2 },  // Verde pútrido con bordes oscuros
    subtitle: { color: '#fff', fontWeight: 'bold', backgroundColor: '#3b4d3b', fontSize: 18, padding: 5, marginTop: 6, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderColor: '#93a97d', borderWidth: 2 },  // Verde apagado con borde claro
    desc: { fontSize: 16, backgroundColor: '#6b705c', color: '#e8eae6', paddingLeft: 3, paddingRight: 3, paddingBottom: 3, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 },  // Descripción con fondo verde grisáceo
    highlight: { fontWeight: 'bold', color: '#93a97d' }  // Resaltado en verde claro
});


