import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

export default function LeaguesOfVotann() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.Titulo}>
                REGLAS DEL EJÉRCITO
            </Text>
            <Text style={styles.Desc}>
                Los Kin son un pueblo práctico y calculador, incluso en la guerra. Sus líderes evalúan rápidamente las amenazas enemigas y asignan recursos cuidadosamente para maximizar las posibilidades de éxito. Una herramienta clave en su estrategia es el **Ojo de los Ancestros**.
            </Text>

            <Text style={styles.Titulo}>
                OJO DE LOS ANCESTROS
            </Text>
            <Text style={styles.Desc}>
                {"\n"}• Cuando una unidad enemiga destruye una unidad de Leagues of Votann, esa unidad enemiga recibe 1 ficha de Juicio (máximo de 2 fichas por unidad).
                {"\n"}• Los ataques contra unidades con fichas de Juicio obtienen beneficios:
                {"\n"}  1 ficha: +1 a la tirada para Impactar.
                {"\n"}  2 fichas: +1 a la tirada para Impactar y Herir.
            </Text>

            <Text style={styles.Titulo}>
                REGLA DE DESTACAMENTO: EFICIENCIA IMPLACABLE
            </Text>
            <Text style={styles.Desc}>
                {"\n"}Selecciona una unidad enemiga al inicio de la batalla. Esa unidad comienza con 2 fichas de Juicio.
                {"\n"}Si destruyes esa unidad antes de las fases de Mando especificadas, obtienes CP adicionales:
                {"\n"}• Antes de la fase 1 o 2: 3 CP.
                {"\n"}• Antes de la fase 3 o 4: 2 CP.
                {"\n"}• Antes de la fase 5: 1 CP.
            </Text>

            <Text style={styles.Titulo}>
                ESTRATAGEMAS DE OATHBAND
            </Text>
            <Text style={styles.Desc}>
                {"\n"}• **Orgullo del Guerrero**: Aumenta la Penetración de Armadura en ataques cuerpo a cuerpo por cada ficha de Juicio de la unidad enemiga objetivo.
                {"\n"}• **Retirada Ordenada**: Permite que una unidad que se haya Retirado dispare y cargue en el mismo turno.
                {"\n"}• **Sentencia Ancestral**: Los ataques a distancia de una unidad seleccionada obtienen **Golpes Sostenidos 1**, o **Golpes Sostenidos 2** contra objetivos con fichas de Juicio.
                {"\n"}• **Reprisal Reactiva**: Permite a una unidad disparar inmediatamente después de ser atacada por una unidad con fichas de Juicio.
            </Text>

            <Text style={styles.Titulo}>
                MEJORAS
            </Text>
            <Text style={styles.Desc}>
                {"\n"}• **Mirada Evaluadora**: Incrementa en 1 las fichas de Juicio para enemigos en un objetivo controlado.
                {"\n"}• **Una Lista Larga**: Al destruir una unidad enemiga con fichas de Juicio, selecciona otra visible para otorgarle una ficha.
                {"\n"}• **Carácter Inquebrantable**: Permite repetir chequeos de Batalla para la unidad del portador y elimina modificadores en sus características.
                {"\n"}• **Gracia del Caminante**: Si el portador es destruido, puede regresar al campo de batalla con todas sus heridas con una tirada exitosa.
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
