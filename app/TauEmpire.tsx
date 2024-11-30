import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

export default function TauEmpire() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.Titulo}>
                REGLAS DEL EJÉRCITO
            </Text>
            <Text style={styles.Desc}>
                Los Cadres Cazadores del Imperio T’au luchan por el Bien Supremo, empleando tácticas precisas para superar a sus enemigos. Utilizan su característico marcador de luz para exponer posiciones enemigas y coordinar ataques devastadores.
            </Text>

            <Text style={styles.Titulo}>
                POR EL BIEN SUPREMO
            </Text>
            <Text style={styles.Desc}>
                {"\n"}Si la Facción de tu ejército es Imperio T’au, tus unidades pueden trabajar en conjunto en la fase de Disparo para optimizar su efectividad. Una unidad actúa como Observadora y la otra como Guiada. El enemigo seleccionado es la unidad Marcada.
                {"\n"}Efectos:
                {"\n"}1. Unidades Guiadas mejoran su Habilidad de Balística en +1 al atacar la unidad Marcada. Si la Observadora tiene la palabra clave **Markerlight**, los ataques ignoran cobertura.
                {"\n"}2. Si una unidad Guiada ataca a otro objetivo que no sea la unidad Marcada, empeora su Habilidad de Balística en -1.
            </Text>

            <Text style={styles.Titulo}>
                REGLA DE DESTACAMENTO - KAUYON
            </Text>
            <Text style={styles.Desc}>
                {"\n"}**Kauyon**: A partir de la tercera ronda de batalla, todas las armas a distancia de modelos T’au obtienen **Golpes Sostenidos 1**. Las unidades Guiadas obtienen **Golpes Sostenidos 2** en su lugar.
            </Text>

            <Text style={styles.Titulo}>
                ESTRATAGEMAS DEL KAUYON
            </Text>
            <Text style={styles.Desc}>
                {"\n"}• **Inyectores de Estimulación**: Mejora la Resistencia al Dolor (No Sentir Dolor 6+) para una unidad Battlesuit seleccionada hasta el final de la fase. 
                {"\n"}• **Golpear y Desvanecerse**: Permite a una unidad Battlesuit realizar un Movimiento Normal tras disparar, siempre que no esté en rango de Entablado.
                {"\n"}• **Coordinación de Ataque**: Incrementa en +1 la Habilidad de Balística de una unidad Observadora, y si tiene **Markerlight**, los ataques ignoran cobertura.
                {"\n"}• **Emboscada Cercana**: Mejora la Penetración de Armadura en +1 para ataques contra enemigos dentro de 9". No puede usarse en las dos primeras rondas de batalla.
            </Text>

            <Text style={styles.Titulo}>
                MEJORAS DEL DESTACAMENTO
            </Text>
            <Text style={styles.Desc}>
                {"\n"}• **Ejemplar del Kauyon**: Aplica la regla de Kauyon desde la segunda ronda en lugar de la tercera.
                {"\n"}• **Precisión del Cazador Paciente**: Incrementa en +1 las tiradas para Impactar y, a partir de la tercera ronda, también las tiradas para Herir.
                {"\n"}• **Neurochip Puretide**: Permite reutilizar un Estratagema ya empleado en otra unidad en la misma fase.
                {"\n"}• **Unidos en la Devastación**: Rango extendido para aplicar Golpes Letales cuando una unidad es Observadora.
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#E5E6E8', padding: 5 },
    Titulo: {
        color: '#fff',
        fontWeight: 'bold',
        backgroundColor: '#2C0069',
        fontSize: 20,
        padding: 5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginTop: 6
    },
    Desc: {
        fontSize: 18,
        backgroundColor: '#C5ACE3',
        color: '#000',
        padding: 3,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
});
