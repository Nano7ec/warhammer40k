import * as React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

export default function Deathwatch() {
    return (
        <ScrollView style={styles.scroll}>
            {/* Sección 1: Regla de Destacamento */}
            <Text style={styles.title}>REGLA DE DESTACAMENTO: FUERZA DE TAREA LANZA NEGRA</Text>
            <Text style={styles.desc}>
                Si tu facción de ejército es Adeptus Astartes, puedes usar esta regla de Destacamento de la Fuerza de Tarea Lanza Negra.
                {"\n"}<Text style={styles.highlight}>RESTRICCIONES:</Text> Tu ejército puede incluir unidades de Deathwatch, pero no puede incluir unidades de Adeptus Astartes de otros capítulos. Tampoco puede incluir unidades como: Escuadrón de Asalto, Escuadrón de Motocicletas de Ataque, entre otros.
            </Text>

            {/* Sección 2: Tácticas de Misión */}
            <Text style={styles.subtitle}>TÁCTICAS DE MISIÓN</Text>
            <Text style={styles.desc}>
                A través de años de experiencia, la Deathwatch ha perfeccionado su conocimiento táctico. Al inicio de tu fase de Mando, puedes seleccionar una de las siguientes Tácticas de Misión, que estarán activas hasta el inicio de tu próxima fase de Mando:
            </Text>
            <Text style={styles.desc}>
                <Text style={styles.highlight}>FUROR TÁCTICAS:</Text> Las armas de tus unidades ganan la habilidad [IMPACTOS SOSTENIDOS 1]. {"\n"}
                <Text style={styles.highlight}>MALLEUS TÁCTICAS:</Text> Las armas de tus unidades ganan la habilidad [IMPACTOS LETALES]. {"\n"}
                <Text style={styles.highlight}>PURGATUS TÁCTICAS:</Text> Cada vez que una unidad de Adeptus Astartes haga un ataque y obtenga un impacto crítico, el ataque gana la habilidad [PRECISIÓN].
            </Text>

            {/* Sección 3: Estratagemas */}
            <Text style={styles.title}>ESTRATAGEMAS</Text>

            <Text style={styles.subtitle}>ARMADURA DEL DESPRECIO</Text>
            <Text style={styles.desc}>
                La fisiología transhumana de los Adeptus Astartes los convierte en adversarios formidables.
                {"\n"}<Text style={styles.highlight}>CUÁNDO:</Text> En la fase de Disparo de tu oponente o en la fase de Combate. {"\n"}
                <Text style={styles.highlight}>OBJETIVO:</Text> Una unidad de Adeptus Astartes de tu ejército seleccionada como objetivo de un ataque. {"\n"}
                <Text style={styles.highlight}>EFECTO:</Text> Hasta el final de la fase, reduce en 1 la característica de Penetración de Armadura de los ataques dirigidos a tu unidad.
            </Text>

            <Text style={styles.subtitle}>TELEPORTARIUM</Text>
            <Text style={styles.desc}>
                El teletransporte es un recurso excepcional de la Deathwatch.
                {"\n"}<Text style={styles.highlight}>CUÁNDO:</Text> Al final de la fase de Combate de tu oponente. {"\n"}
                <Text style={styles.highlight}>OBJETIVO:</Text> Hasta dos unidades de Kill Team o una unidad de Infantería Adeptus Astartes. {"\n"}
                <Text style={styles.highlight}>EFECTO:</Text> Retira las unidades del campo de batalla. En tu próxima fase de Movimiento, colócalas en cualquier lugar a más de 9" de las unidades enemigas.
            </Text>

            {/* Sección 4: Mejoras */}
            <Text style={styles.title}>MEJORAS</Text>

            <Text style={styles.subtitle}>LADRÓN DE SECRETOS</Text>
            <Text style={styles.desc}>
                Esta espada absorbe los secretos biológicos de sus víctimas, permitiendo que el portador mejore sus ataques.
                {"\n"}<Text style={styles.highlight}>EFECTO:</Text> Mejora en 1 la Fuerza, el Daño y la Penetración de las armas cuerpo a cuerpo del portador. Si destruyes un modelo enemigo con un ataque cuerpo a cuerpo, estas características mejoran en 2 en lugar de 1 hasta el final de la batalla.
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scroll: { flex: 1, backgroundColor: '#1a1a1a', padding: 5 }, // Fondo negro para representar los colores de Deathwatch
    title: { color: '#fff', fontWeight: 'bold', backgroundColor: '#333333', fontSize: 20, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderColor: '#d4af37', borderWidth: 2 }, // Títulos en blanco con fondo negro y bordes dorados
    subtitle: { color: '#fff', fontWeight: 'bold', backgroundColor: '#333333', fontSize: 18, padding: 5, marginTop: 6, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderColor: '#b22222', borderWidth: 2 }, // Subtítulos con borde rojo
    desc: { fontSize: 16, backgroundColor: '#2e2e2e', color: '#dcdcdc', paddingLeft: 3, paddingRight: 3, paddingBottom: 3, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }, // Descripción en gris claro con fondo gris oscuro
    highlight: { fontWeight: 'bold', color: '#b22222' } // Resaltado en rojo, acorde a detalles Deathwatch
});


