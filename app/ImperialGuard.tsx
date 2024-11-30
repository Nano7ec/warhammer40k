import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

export default function ImperialGuard() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.Titulo}>
                REGLAS DEL EJÉRCITO
            </Text>
            <Text style={styles.Desc}>
                Los regimientos de la Guardia Imperial están organizados con precisión militar y liderados por oficiales entrenados para emitir órdenes claras en medio de la batalla.
            </Text>

            <Text style={styles.Titulo}>
                VOZ DE MANDO
            </Text>
            <Text style={styles.Desc}>
                {"\n"}• **Habilidad:** Los modelos Oficiales pueden emitir órdenes a unidades amigas dentro de 6". Las órdenes pueden mejorar las características de las unidades, como movimiento, habilidades de combate y liderazgo.
                {"\n"}Órdenes disponibles:
                {"\n"}1. **¡MUEVANSE, MUEVANSE!**: +3" al Movimiento.
                {"\n"}2. **¡FIJAR BAYONETAS!**: Mejora la Habilidad de Armas en combate cuerpo a cuerpo en +1.
                {"\n"}3. **¡APUNTEN!**: Mejora la Habilidad de Balística en +1.
                {"\n"}4. **¡FUEGO EN RANGO!**: Aumenta el número de Ataques de armas de Fuego Rápido en +1.
                {"\n"}5. **¡CÚBRANSE!**: Mejora la salvación en +1 (máximo 3+).
                {"\n"}6. **¡DEBER Y HONOR!**: Mejora Liderazgo y Control de Objetivos en +1.
            </Text>

            <Text style={styles.Titulo}>
                REGLA DE DESTACAMENTO - REGIMIENTO COMBINADO
            </Text>
            <Text style={styles.Desc}>
                {"\n"}**Soldados Natos**: Si una unidad permanece estacionaria, las armas a distancia de los modelos en esa unidad obtienen [IMPACTOS LETALES] hasta el final del turno.
            </Text>

            <Text style={styles.Titulo}>
                MEJORAS DEL DESTACAMENTO
            </Text>
            <Text style={styles.Desc}>
                {"\n"}• **Máscara de Muerte de Ollanius**: Si la unidad del portador está bajo el efecto de conmoción, resta 1 al Control de Objetivos en lugar de establecerlo en 0.
                {"\n"}• **Comandante de Taladros**: Mientras lidera una unidad estacionaria, obtiene Impacto Crítico con tiradas de impacto no modificadas de 5+.
                {"\n"}• **Águila de Kurov**: Una vez por batalla, incrementa el coste de un Estratagema usado por el enemigo en 1 CP.
                {"\n"}• **Gran Estratega**: Permite emitir una orden adicional en la fase de mando.
            </Text>

            <Text style={styles.Titulo}>
                ESTRATAGEMAS DEL REGIMIENTO COMBINADO
            </Text>
            <Text style={styles.Desc}>
                {"\n"}• **¡REFUERZOS!**: Agrega una unidad idéntica a una destruida previamente al ejército en Reservas Estratégicas.
                {"\n"}• **CAMPOS DE FUEGO**: Incrementa la Penetración de Armadura en 1 para ataques contra un enemigo ya atacado por otra unidad amiga.
                {"\n"}• **FUEGO DE SUPRESIÓN**: Reduce en 1 la Habilidad de Impacto de una unidad enemiga golpeada por un ataque de una unidad de Infantería.
            </Text>

            <Text style={styles.Titulo}>
                UNIDADES DESTACADAS
            </Text>
            <Text style={styles.Desc}>
                {"\n"}• **Lord Solar Leontus**: Gana 1 CP al inicio de la fase de Mando. Puede redesplegar hasta 3 unidades después del despliegue inicial.
                {"\n"}• **Ursula Creed**: Permite usar un Estratagema en una unidad dentro de 12" sin coste en CP una vez por ronda.
                {"\n"}• **Comandante de Tanque**: Puede emitir órdenes a unidades de Escuadrón a 12". Tiene una habilidad especial que permite atacar después de ser destruido.
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
    },
    mejoras: {
        color: '#000',
        fontWeight: 'bold',
        backgroundColor: '#E5E6E8',
        fontSize: 18,
        padding: 5,
        marginTop: 6,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    }
});
