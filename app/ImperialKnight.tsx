import { Text, ScrollView, StyleSheet } from 'react-native';

export default function ImperialKnights() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.Titulo}>
                REGLAS DEL EJÉRCITO
            </Text>
            <Text style={styles.Desc}>
                Los Caballeros Imperiales luchan siguiendo un conjunto estricto de códigos que aseguran que, además de derrotar al enemigo, siempre se mantenga el honor.
            </Text>

            <Text style={styles.Titulo}>
                CÓDIGO CABALLERESCO
            </Text>
            <Text style={styles.Desc}>
                Si tu facción de ejército es Caballeros Imperiales, al final del paso de Leer los Objetivos de la Misión, debes seleccionar uno de los juramentos que estará activo para tu ejército. Los modelos de tu ejército con esta habilidad obtienen la habilidad asociada al juramento, y ganas la proeza asociada para completar.
            </Text>

            <Text style={styles.Titulo}>
                JURAMENTO: ABAJAR AL TIRANO
            </Text>
            <Text style={styles.Desc}>
                {"\n"}Habilidad: Cada vez que este modelo sea seleccionado para disparar o combatir, repite una tirada para Impactar de 1 y una tirada para Herir de 1.
                {"\n"}Proeza: Completa si el Señor de la Guerra enemigo es destruido.
            </Text>

            <Text style={styles.Titulo}>
                HABILIDADES DE BONDSMAN
            </Text>
            <Text style={styles.Desc}>
                Algunos modelos Questoris tienen una habilidad de Bondsman que puede utilizarse en la fase de Mando. Cada habilidad afecta a un modelo Armiger aliado dentro de 12". Ambas unidades están influenciadas por la habilidad hasta el inicio de tu próxima fase de Mando.
            </Text>

            <Text style={styles.Titulo}>
                CAMINANTE SUPERPESADO
            </Text>
            <Text style={styles.Desc}>
                Los modelos con esta habilidad pueden moverse sobre otros modelos (excluyendo modelos titánicos) y elementos de terreno de 4" o menos de altura como si no estuvieran allí.
            </Text>

            <Text style={styles.Titulo}>
                FLECHA NOBLE - REGLA DE DESTACAMENTO
            </Text>
            <Text style={styles.Desc}>
                {"\n"}Los modelos de Caballeros Imperiales obtienen la habilidad No Sentir Dolor 6+. Si tu ejército está Honrado, obtienen No Sentir Dolor 5+.
            </Text>

            <Text style={styles.Titulo}>
                ESTRATAGEMAS
            </Text>
            <Text style={styles.Desc}>
                {"\n"}• **Cargar con el peso:** Mejora las características de Movimiento, Resistencia, Salvación, Liderazgo y Control de Objetivos de un modelo seleccionado hasta el inicio de tu próxima fase de Mando. Se puede usar una vez por batalla.
                {"\n"}• **Rotar Escudos de Iones:** Da una salvación invulnerable de 4+ contra ataques a distancia a un modelo objetivo durante la fase de Disparo del oponente.
            </Text>

            <Text style={styles.Titulo}>
                MEJORAS
            </Text>
            <Text style={styles.mejoras}>
                {"\n"}• **Héroe Mítico:** Permite que un modelo Bondsman afecte a una unidad Armiger adicional.
                {"\n"}• **Estandarte de Macharius:** Los objetivos controlados permanecen bajo tu control incluso si no hay modelos en alcance, hasta que el enemigo los controle.
                {"\n"}• **Paragón Inquebrantable:** Reduce en 1 la penetración de armadura de los ataques asignados al portador.
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
