import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

export default function ImperialAgents() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.Titulo}>
                REGLAS DEL EJÉRCITO
            </Text>
            <Text style={styles.Desc}>
                A lo largo del Imperio existen numerosas organizaciones marciales e instituciones secretas. Guerreros armados o agentes solitarios poseen habilidades especializadas y equipos únicos que les permiten ser asignados a ejércitos Imperiales más grandes. Algunos son reclutados por los comandantes por sus habilidades, mientras que otros son enviados por maestros ocultos con agendas específicas.
            </Text>

            <Text style={styles.Titulo}>
                AGENTES ASIGNADOS
            </Text>
            <Text style={styles.Desc}>
                Si cada modelo de tu ejército tiene la palabra clave *Imperium*, puedes incluir unidades de Agentes del Imperio incluso si no comparten la palabra clave de Facción seleccionada al crear el ejército. El número máximo de unidades que puedes incluir depende del tamaño de la batalla:
                {"\n"}• **Incursión**: 1 unidad de Retinue, 1 unidad de Personaje.
                {"\n"}• **Fuerza de Ataque**: 2 unidades de Retinue, 2 unidades de Personaje.
                {"\n"}• **Embate**: 3 unidades de Retinue, 3 unidades de Personaje.
                {"\n"}Además, no puedes seleccionar un asesino Vindicare, Culexus, Eversor o Callidus como tu Señor de la Guerra.
            </Text>

            <Text style={styles.Titulo}>
                ASSASSINOS DEL TEMPLO
            </Text>

            <Text style={styles.Est}>
                Vindicare Assassin
            </Text>
            <Text style={styles.Desc}>
                {"\n"}• **Habilidad Especial**: Deadshot – Cada vez que este modelo realiza un ataque a distancia, si logra un Impacto Crítico, añade 3 al daño. Además, la unidad impactada debe realizar un chequeo de Conmoción de Batalla.
                {"\n"}• **Habilidad única**: Shieldbreaker – Una vez por batalla, puede disparar un proyectil que ignora todas las salvaciones contra el ataque.
            </Text>

            <Text style={styles.Est}>
                Culexus Assassin
            </Text>
            <Text style={styles.Desc}>
                {"\n"}• **Habilidad Especial**: Psychic Assassin – Contra Psíquicos, cambia las características de ataque de su arma *Animus Speculum* a 6 ataques.
                {"\n"}• **Aura**: Horror Sin Alma – Las unidades enemigas a 6" sufren -1 en Liderazgo (-2 si son Psíquicos). Una vez por batalla, puede obligar a todas las unidades enemigas a 6" a realizar un chequeo de Conmoción de Batalla.
            </Text>

            <Text style={styles.Est}>
                Eversor Assassin
            </Text>
            <Text style={styles.Desc}>
                {"\n"}• **Habilidad Especial**: Frenzon – En la fase de Mando, selecciona entre tres efectos: puede disparar y cargar tras avanzar, obtiene precisión en sus armas, o gana Golpes Sostenidos 3.
            </Text>

            <Text style={styles.Est}>
                Callidus Assassin
            </Text>
            <Text style={styles.Desc}>
                {"\n"}• **Habilidad Especial**: Reign of Confusion – Una vez por batalla, después de que el oponente use una Estratagema, aumenta el coste en CP de esa Estratagema en 1 durante el resto de la batalla.
                {"\n"}• **Polymorphine**: Puede reposicionarse al final del turno enemigo y reaparecer en la fase de refuerzos del próximo turno.
            </Text>

            <Text style={styles.Titulo}>
                UNIDADES DE APOYO
            </Text>
            <Text style={styles.Desc}>
                {"\n"}• **Rogue Trader Entourage**: Exploradores y mercaderes que actúan en nombre del Imperio.
                {"\n"}• **Voidsmen-at-Arms**: Soldados altamente entrenados para combate en espacios confinados, como naves espaciales.
                {"\n"}• **Imperial Navy Breachers**: Equipados para asaltos peligrosos en abordajes y estructuras cerradas.
            </Text>

            <Text style={styles.Titulo}>
                HABILIDADES GENERALES
            </Text>
            <Text style={styles.Desc}>
                {"\n"}• **Masters of Close Confines**: Ataques contra el objetivo más cercano tienen Golpes Letales.
                {"\n"}• **Breaching Team**: Repite 1s en tiradas para Herir. Contra enemigos cerca de un objetivo, repite completamente las tiradas para Herir.
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
    Est: {
        color: '#1C594E',
        fontWeight: 'bold',
        backgroundColor: '#E5E6E8',
        fontSize: 20,
        padding: 5,
        marginTop: 6,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    }
});
