import * as React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
 
export default function DarkAngels () {
    return (
        <ScrollView style={styles.scroll}>
            {/* Sección 1: Regla de Destacamento */}
            <Text style={styles.title}>REGLA DE DESTACAMENTO DE LOS ÁNGELES OSCUROS</Text>
            <Text style={styles.desc}>
                Los Ángeles Oscuros son famosos por su determinación férrea y su capacidad de resistir en el campo de batalla. Esta regla de Destacamento de la Fuerza de Tarea Unforgiven se aplica si tu Facción de Ejército es Adeptus Astartes.
            </Text>

            {/* Sección 2: Resolución Inquebrantable */}
            <Text style={styles.subtitle}>RESOLUCIÓN INQUEBRANTABLE</Text>
            <Text style={styles.desc}>
                Los Ángeles Oscuros son conocidos por su inquebrantable resolución, su tenacidad y disciplina estricta en combate. Mientras una unidad de Adeptus Astartes de tu ejército esté Impactada por la Batalla, cambia su característica de Control de Objetivos a 1, en lugar de 0.
            </Text>

            {/* Sección 3: Estratagemas */}
            <Text style={styles.title}>ESTRATAGEMAS</Text>
            <Text style={styles.desc}>
                Si estás usando la regla de Destacamento de la Fuerza de Tarea Unforgiven, puedes utilizar las siguientes Estratagemas:
            </Text>

            <Text style={styles.subtitle}>FURIA UNFORGIVEN</Text>
            <Text style={styles.desc}>
                Con una agresión concentrada, los Ángeles Oscuros castigan implacablemente al enemigo.
                {"\n"}<Text style={styles.highlight}>CUÁNDO:</Text> Fase de Disparo o Combate.
                {"\n"}<Text style={styles.highlight}>OBJETIVO:</Text> Una unidad de Adeptus Astartes de tu ejército que no haya sido seleccionada para disparar o combatir en esta fase.
                {"\n"}<Text style={styles.highlight}>EFECTO:</Text> Hasta el final de la fase, las armas equipadas por las miniaturas de tu unidad tienen la habilidad [IMPACTOS LETALES]. Además, si una o más unidades de Adeptus Astartes de tu ejército están Impactadas por la Batalla, una tirada de Impacto no modificada de 5+ será un Impacto Crítico.
            </Text>

            <Text style={styles.subtitle}>ARMADURA DE DESPRECIO</Text>
            <Text style={styles.desc}>
                La terquedad de los Adeptus Astartes combinada con su fisiología transhumana los convierte en enemigos implacables.
                {"\n"}<Text style={styles.highlight}>CUÁNDO:</Text> Fase de Disparo de tu oponente o la fase de Combate, justo después de que una unidad enemiga haya seleccionado sus objetivos.
                {"\n"}<Text style={styles.highlight}>OBJETIVO:</Text> Una unidad de Adeptus Astartes de tu ejército seleccionada como objetivo de uno o más ataques de la unidad atacante.
                {"\n"}<Text style={styles.highlight}>EFECTO:</Text> Hasta el final de la fase, cada vez que un ataque tenga como objetivo tu unidad, reduce en 1 la característica de Penetración de Armadura de ese ataque.
            </Text>

            {/* Sección 4: Mejoras */}
            <Text style={styles.title}>MEJORAS</Text>
            <Text style={styles.desc}>
                Si estás usando la regla de Destacamento de la Fuerza de Tarea Unforgiven, puedes usar las siguientes Mejoras:
            </Text>

            <Text style={styles.subtitle}>MANTO DE LOS HÉROES</Text>
            <Text style={styles.desc}>
                Este manto es un símbolo de las hazañas de los más grandes guerreros de los Ángeles Oscuros. El portador de este manto puede resistir incluso las heridas más graves para continuar su misión.
                {"\n"}<Text style={styles.highlight}>EFECTO:</Text> La primera vez que el portador es destruido, tira un D6 al final de la fase. Con un 2+, el portador vuelve al campo de batalla con 3 heridas restantes.
            </Text>

            <Text style={styles.subtitle}>TENACIDAD INQUEBRANTABLE</Text>
            <Text style={styles.desc}>
                Incluso para un Capítulo tan obstinado como los Ángeles Oscuros, este guerrero es famoso por su naturaleza inquebrantable. Mientras el portador lidere una unidad, suma 1 a las tiradas de Impacto y de Herida si su unidad ha perdido miembros.
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scroll: { flex: 1, backgroundColor: '#1a1a1a', padding: 5 },  // Fondo negro profundo
    title: { color: '#fff', fontWeight: 'bold', backgroundColor: '#004d00', fontSize: 20, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderColor: '#c0c0c0', borderWidth: 2 },  // Verde oscuro con bordes plateados
    subtitle: { color: '#fff', fontWeight: 'bold', backgroundColor: '#003300', fontSize: 18, padding: 5, marginTop: 6, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderColor: '#d4af37', borderWidth: 2 },  // Verde más oscuro con borde dorado
    desc: { fontSize: 16, backgroundColor: '#3b3b3b', color: '#dcdcdc', paddingLeft: 3, paddingRight: 3, paddingBottom: 3, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 },  // Fondo gris oscuro con texto gris claro
    highlight: { fontWeight: 'bold', color: '#d4af37' }  // Resaltado dorado
});

