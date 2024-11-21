import * as React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
 
export default function GenestealerCults () {
    return (
        <ScrollView style={styles.scroll}>
            {/* Sección 1: Regla del Ejército */}
            <Text style={styles.title}>REGLA DEL EJÉRCITO: EMBOSCADA DEL CULTO</Text>
            <Text style={styles.desc}>
                Si tu facción es Cultos Genestealer, cada vez que una unidad con esta habilidad es destruida, tira un D6. Con un 4+, esa unidad se coloca en **Emboscada del Culto**, permitiéndote colocar un marcador en cualquier lugar del campo de batalla, a más de 9" de unidades enemigas. {"\n"}
                Cuando un marcador permanece hasta la fase de refuerzos del enemigo, puedes desplegar de nuevo la unidad destruida utilizando la habilidad de Despliegue Rápido.
            </Text>

            {/* Sección 2: Hermanos de Progenie */}
            <Text style={styles.subtitle}>HERMANOS DE PROGENIE</Text>
            <Text style={styles.desc}>
                Puedes incluir unidades de Astra Militarum en tu ejército, aunque no tengan la palabra clave Cultos Genestealer. No pueden ser tu Señor de la Guerra ni tener Mejores.
            </Text>

            {/* Sección 3: Regla de Destacamento */}
            <Text style={styles.title}>REGLA DE DESTACAMENTO: DÍA DE LA ASCENSIÓN</Text>
            <Text style={styles.desc}>
                Cada vez que una unidad de Cultos Genestealer se despliega como refuerzo, sus armas obtienen las habilidades [IMPACTOS SOSTENIDOS 1] e [IGNORA COBERTURA] hasta el final de tu próxima fase de Combate.
            </Text>

            {/* Sección 4: Estratagemas */}
            <Text style={styles.subtitle}>LEALTAD INCUESTIONABLE</Text>
            <Text style={styles.desc}>
                Tus unidades de Cultos Genestealer se sacrifican por sus líderes.{"\n"}
                <Text style={styles.highlight}>CUÁNDO:</Text> Fase de Disparo o Combate del oponente.{"\n"}
                <Text style={styles.highlight}>OBJETIVO:</Text> Una unidad de Personajes del Culto.{"\n"}
                <Text style={styles.highlight}>EFECTO:</Text> Cada vez que el Personaje pierde una herida, una unidad aliada sufre una Herida Mortal en su lugar.
            </Text>

            <Text style={styles.subtitle}>TRAMPA COORDINADA</Text>
            <Text style={styles.desc}>
                Tus unidades cercan al enemigo, como una marea oscura de devoción.{"\n"}
                <Text style={styles.highlight}>CUÁNDO:</Text> Al inicio de tu fase de Disparo o Combate.{"\n"}
                <Text style={styles.highlight}>OBJETIVO:</Text> Dos unidades de Cultos Genestealer y una unidad enemiga.{"\n"}
                <Text style={styles.highlight}>EFECTO:</Text> Añade 1 a las tiradas de Herida cuando esas unidades ataquen al enemigo seleccionado.
            </Text>

            {/* Sección 5: Mejoras */}
            <Text style={styles.title}>MEJORAS DE ASCENSIÓN</Text>

            <Text style={styles.subtitle}>AGITANTE SIGILOSO</Text>
            <Text style={styles.desc}>
                Este líder es experto en eludir trampas.{"\n"}
                <Text style={styles.highlight}>EFECTO:</Text> Una vez por turno, si una unidad enemiga termina un movimiento a 9" de este modelo, tu unidad puede moverse hasta D6" como si fuera una fase de Movimiento normal.
            </Text>

            <Text style={styles.subtitle}>PLANIFICADOR METICULOSO</Text>
            <Text style={styles.desc}>
                Las estrategias de este líder son un genio oscuro.{"\n"}
                <Text style={styles.highlight}>EFECTO:</Text> Una vez por batalla, después de que tu oponente use una Estratagema, puedes aumentar su coste en 1 CP para futuros usos.
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scroll: { flex: 1, backgroundColor: '#2C2C2C', padding: 5 },
    title: { color: '#fff', fontWeight: 'bold', backgroundColor: '#3D3D3D', fontSize: 20, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderColor: '#9b59b6', borderWidth: 2 },
    subtitle: { color: '#fff', fontWeight: 'bold', backgroundColor: '#444', fontSize: 18, padding: 5, marginTop: 6, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderColor: '#16a085', borderWidth: 2 },
    desc: { fontSize: 16, backgroundColor: '#555', color: '#ecf0f1', paddingLeft: 3, paddingRight: 3, paddingBottom: 3, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 },
    highlight: { fontWeight: 'bold', color: '#16a085' }
});

