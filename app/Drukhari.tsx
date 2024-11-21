import * as React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
 
export default function Durkhari () {
    return (
        <ScrollView style={styles.scroll}>
            {/* Sección 1: Regla del Ejército */}
            <Text style={styles.title}>REGLA DEL EJÉRCITO: PODER A TRAVÉS DEL DOLOR</Text>
            <Text style={styles.desc}>
                Los Drukhari son expertos en torturas precisas, venenos afilados y abominaciones arcanas. Se alimentan de las almas de los caídos y se vuelven más poderosos conforme se imbuyen de dolor.{"\n"}
                Obtienes **tokens de Dolor** en cada batalla, según el tamaño de la misma: {"\n"}
                ● **Patrulla de Combate**: 1 Token{"\n"}
                ● **Incursión**: 2 Tokens{"\n"}
                ● **Fuerza de Choque**: 3 Tokens{"\n"}
                ● **Asalto**: 4 Tokens{"\n"}
            </Text>

            <Text style={styles.subtitle}>HABILIDAD: EMPODERADOS POR EL DOLOR</Text>
            <Text style={styles.desc}>
                Puedes gastar tokens de Dolor para empoderar una unidad con la habilidad **Poder a través del Dolor** en una fase específica.{"\n"}
                ● **Fase de Movimiento o Carga**: Puedes repetir las tiradas de Avance o Carga.{"\n"}
                ● **Fase de Disparo o Combate**: Puedes repetir las tiradas de Impacto.
            </Text>

            {/* Sección 2: Estratagemas */}
            <Text style={styles.title}>ESTRATAGEMAS DE ASALTANTES DE LA REALIDAD</Text>
            <Text style={styles.desc}>
                Los Drukhari, maestros en la caza y el sufrimiento, utilizan estas estratagemas en combate para aumentar su letalidad:
            </Text>

            <Text style={styles.subtitle}>PRESAS DÉBILES</Text>
            <Text style={styles.desc}>
                Los Drukhari atacan a enemigos heridos con ferocidad.{"\n"}
                <Text style={styles.highlight}>CUÁNDO:</Text> Fase de Disparo.{"\n"}
                <Text style={styles.highlight}>OBJETIVO:</Text> Una unidad Kabal y una unidad enemiga que esté por debajo de la mitad de su fuerza.{"\n"}
                <Text style={styles.highlight}>EFECTO:</Text> Hasta el final de la fase, puedes repetir las tiradas de Herida.
            </Text>

            <Text style={styles.subtitle}>ESCAPAR Y REAGRUPAR</Text>
            <Text style={styles.desc}>
                Los Drukhari son maestros en tácticas de ataque y huida.{"\n"}
                <Text style={styles.highlight}>CUÁNDO:</Text> Al final de tu fase de Disparo.{"\n"}
                <Text style={styles.highlight}>OBJETIVO:</Text> Una unidad Drukhari.{"\n"}
                <Text style={styles.highlight}>EFECTO:</Text> La unidad puede moverse inmediatamente. No puede declarar carga ni embarcar en un transporte.
            </Text>

            {/* Sección 3: Mejoras */}
            <Text style={styles.title}>MEJORAS DE ASALTANTES DE LA REALIDAD</Text>
            <Text style={styles.desc}>
                Si estás utilizando la regla de Destacamento de Asaltantes de la Realidad, puedes emplear las siguientes mejoras:
            </Text>

            <Text style={styles.subtitle}>CRISOL DE MALEDICCIÓN</Text>
            <Text style={styles.desc}>
                Los Haemonculus liberan las almas de psíquicos torturados para desatar la locura en el enemigo.{"\n"}
                <Text style={styles.highlight}>EFECTO:</Text> Una vez por batalla, en la fase de Disparo, cada unidad enemiga en 12" debe realizar un chequeo de Batalla y sufre D3 Heridas Mortales si falla.
            </Text>

            <Text style={styles.subtitle}>EL ARTE DEL DOLOR</Text>
            <Text style={styles.desc}>
                Los Drukhari elevan la tortura a un arte, alargando el sufrimiento de sus enemigos para maximizar el placer antes de matarlos.{"\n"}
                <Text style={styles.highlight}>EFECTO:</Text> En tu fase de Mando, si el portador está en el campo de batalla, obtienes 1 token de Dolor.
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scroll: { flex: 1, backgroundColor: '#1a1a1a', padding: 5 },
    title: { color: '#fff', fontWeight: 'bold', backgroundColor: '#330033', fontSize: 20, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderColor: '#9b59b6', borderWidth: 2 },
    subtitle: { color: '#fff', fontWeight: 'bold', backgroundColor: '#222', fontSize: 18, padding: 5, marginTop: 6, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderColor: '#16a085', borderWidth: 2 },
    desc: { fontSize: 16, backgroundColor: '#444', color: '#ecf0f1', paddingLeft: 3, paddingRight: 3, paddingBottom: 3, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 },
    highlight: { fontWeight: 'bold', color: '#16a085' }
});


