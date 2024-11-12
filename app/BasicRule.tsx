import { Text,ScrollView,StyleSheet } from "react-native";

export default function BasicRule(){
    return (
        <ScrollView style={styles.scroll}>
            <>
                <Text style={styles.title}>
                    Como jugar
                </Text>
                <Text style={styles.desc}>
                    Normalmente ganar un juego requiere Mantener objetivos, reclamar ubicaciones importantes en el campo de batalla, o eliminar unidades enemigas clave.
                    {"\n"}Comenzemos con lo simple, eliminar al ejercito rival.
                    {"\n"}Durante el juego los jugadores Toman turnos alternados, se decide el primer jugador deacuerdo a una tirada de dados.
                    {"\n"}En cada turno cada unidad puede: Moverse, Disparar, Cargar y Atacar.
                    {"\n"}Cada unidad Tiene una pagina de datos, Las paginas de datos te dicen todo lo que necesitas asber sobre una unidad y lo que pueden hacer durante el juego, descubriremos lo que cada seccion significa.
                </Text>
            </>
            <>
                <Text style={styles.title}>
                    MISIONES
                </Text>
                <Text style={styles.desc}>
                    Para jugar una partida de Warhammer 40,000, primero debes seleccionar una misión.
                    {'\n'}La misión te indicará cómo reunir a tus ejércitos, crear tu campo de batalla y desplegarlos.
                    {'\n'}También te indicará las reglas especiales que se aplican a la batalla y (¡lo más importante!) lo que debes hacer para ganar.
                    {'\n'}Puedes obtener más información sobre las misiones en la página "Misiones" de este sitio.
                </Text>
            </>
            <>
                <Text style={styles.title}>
                    EJÉRCITO
                </Text>
                <Text style={styles.desc}>
                    Cada jugador de una partida de Warhammer 40,000 dirige un ejército de miniaturas Citadel, a las que en adelante denominaremos «miniaturas».
                    {'\n'}La misión que hayas seleccionado te indicará el tamaño que debe tener tu ejército.
                    {'\n'}Una buena medida del tamaño de un ejército es su nivel de poder, que se determina sumando el índice de poder de cada unidad del ejército.
                    {'\n'}El índice de poder de una unidad se puede encontrar en su hoja de datos.
                    {'\n'}Warhammer 40,000 está diseñado para jugarse con ejércitos de un tamaño determinado.
                    {'\n'}Si la potencia combinada de todas las miniaturas que tú y tu oponente queréis utilizar en una batalla es inferior a 15 o superior a 300, entonces puede que Kill Team o Apocalypse, respectivamente, se adapten mejor a la escala del juego.
                    {'\n'}Puedes obtener más información sobre estos juegos en warhammer-community.com.
                    {'\n'}<Text style={{ color: 'red' }}>■</Text>EJÉRCITO: Colección de modelos bajo tu mando.
                </Text>
            </>

            <>
                <Text style={styles.title}>
                    FICHAS TÉCNICAS
                </Text>
                <Text style={styles.desc}>
                    Las reglas que necesitarás para usar los modelos de tu ejército en una partida se presentan en las hojas de datos.
                    {'\n'}Cada unidad tiene una hoja de datos; necesitarás las hojas de datos de todas las unidades de tu ejército.
                    {'\n'}Puedes encontrar más información sobre las hojas de datos en la página "Hojas de datos".
                </Text>
            </>

            <>
                <Text style={styles.title}>
                    PALABRAS CLAVE
                </Text>
                <Text style={styles.desc}>
                    Todas las hojas de datos tienen una lista de palabras clave, separadas en palabras clave de facción y otras palabras clave.
                    {'\n'}Las primeras se pueden usar como guía para ayudar a decidir qué modelos incluir en tu ejército, pero por lo demás ambos conjuntos de palabras clave son funcionalmente iguales.
                    {'\n'}En cualquier caso, las palabras clave aparecen en NEGRITA DE PALABRAS CLAVE en las reglas.
                    {'\n'}Las palabras clave a veces están vinculadas a (o "etiquetadas" por) una regla. Por ejemplo, una regla podría decir que se aplica a "unidades de INFANTERÍA".
                    {'\n'}Esto significa que solo se aplica a unidades que tienen la palabra clave INFANTERÍA en su hoja de datos. La pluralización (o no) de palabras clave no afecta a las unidades a las que se aplica la regla en cuestión.
                    {'\n'}Algunas hojas de datos tienen palabras clave que se presentan entre corchetes angulares, como -CAPÍTULO-, -LEGIÓN- y -MARCA DEL CAOS-.
                    {'\n'}Esto es una forma abreviada de las palabras clave que puedes seleccionar tú mismo (con ciertas restricciones, como se describe en la publicación que contiene esa hoja de datos).
                    {'\n'}Debes decidir cuáles serán estas palabras clave en el momento en que se añada dicha unidad a tu ejército (ya sea antes de la batalla o durante ella).
                    {'\n'}Si otra regla utiliza palabras clave entre corchetes angulares, entonces esa palabra clave coincide con la palabra clave que seleccionaste de la unidad utilizando esa regla.
                    {'\n'}Algunas unidades pueden incluir modelos que tienen diferentes palabras clave.
                    {'\n'}Si bien una unidad tiene modelos con diferentes palabras clave, se considera que tiene todas las palabras clave de todos sus modelos y, por lo tanto, se ve afectada por cualquier regla que se aplique a las unidades con cualquiera de esas palabras clave.
                    {'\n'}Si una regla solo se aplica a los modelos con una palabra clave específica, entonces solo se aplica a los modelos de esa unidad que tengan la palabra clave correcta.
                    {'\n'}<Text style={{ color: 'red' }}>■</Text>Palabras clave: Aparecen en las reglas en fuente negrita de palabras clave.
                    {'\n'}<Text style={{ color: 'red' }}>■</Text>las reglas con palabras clave se aplican a las unidades y modelos con esa palabra clave.
                    {'\n'}<Text style={{ color: 'red' }}>■</Text>Las -palabras clave- las eliges tú cuando se agrega una unidad a tu ejército.
                </Text>
            </>

            <>
                <Text style={styles.title}>
                    UNIDADES
                </Text>
                <Text style={styles.desc}>
                    Los modelos se mueven y luchan en unidades.
                    {'\n'}Una unidad puede tener uno o más modelos elegidos de una única hoja de datos. Todas las unidades del mismo ejército son unidades amigas, y todos los modelos del mismo ejército son modelos amigos.
                    {'\n'}Todas las unidades del ejército de tu oponente son unidades enemigas, y todos los modelos del ejército de tu oponente son modelos enemigos.
                    {'\n'}Si una regla afecta a "unidades" o "modelos" sin especificar si son amigos o enemigos, entonces afecta a "todas las unidades" o "todos los modelos", independientemente del ejército en el que se encuentren.
                    {'\n'}<Text style={{ color: 'red' }}>■</Text>Unidad: Un grupo de modelos de la misma hoja de datos.
                    {'\n'}<Text style={{ color: 'red' }}>■</Text>Modelos amigos = todos los modelos en el mismo ejército.
                    {'\n'}<Text style={{ color: 'red' }}>■</Text>Modelos enemigos = todos los modelos en el ejército de tu oponente.
                    {'\n'}<Text style={{ color: 'red' }}>■</Text>Unidades amigas = todas las unidades del mismo ejército.
                    {'\n'}<Text style={{ color: 'red' }}>■</Text>Unidades enemigas = todas las unidades del ejército oponente.
                </Text>
            </>

            <>
                <Text style={styles.title}>
                    COHERENCIA DE LA UNIDAD
                </Text>
                <Text style={styles.desc}>
                    Una unidad que tenga más de una miniatura debe desplegarse y finalizar cualquier tipo de movimiento como un solo grupo, con todas las miniaturas a 2" horizontalmente y 5" verticalmente de al menos otra miniatura de su unidad.
                    {'\n'}Mientras una unidad tenga seis o más miniaturas, todas las miniaturas deben estar a 2" horizontalmente y 5" verticalmente de al menos otras dos miniaturas de su unidad.
                    {'\n'}Esto se llama coherencia de unidad.
                    {'\n'}Si una unidad no puede finalizar ningún tipo de movimiento en coherencia de unidad, ese movimiento no se puede realizar.
                    {'\n'}Las unidades se mueven principalmente en la fase de Movimiento, pero también se pueden mover en la fase de Carga y en la fase de Lucha.
                    {'\n'}Algunas reglas permiten añadir miniaturas a una unidad durante la batalla; dichas miniaturas siempre deben colocarse en coherencia con la unidad a la que se van a añadir.
                    {'\n'}A veces no habrá espacio suficiente para colocar todas las miniaturas de una unidad o no será posible colocar todas las miniaturas de forma que estén en coherencia con la unidad.
                    {'\n'}En este caso, las miniaturas que no se puedan colocar se considerarán destruidas.

                    {'\n'}<Text style={{ color: 'red' }}>■</Text>Coherencia de la unidad: 2" horizontalmente + 5" verticalmente.
                    {'\n'}<Text style={{ color: 'red' }}>■</Text>Cada modelo debe estar en coherencia con otro modelo de su propia unidad.
                    {'\n'}<Text style={{ color: 'red' }}>■</Text>Mientras la unidad tenga 6 o más modelos, cada modelo debe estar en coherencia con otros 2 modelos de la propia unidad.

                </Text>
            </>

            <>
                <Text style={styles.title}>
                    GAMA DE COMPROMISO
                </Text>
                <Text style={styles.desc}>
                    El rango de combate representa la zona de amenaza que presentan las miniaturas a sus enemigos.
                    {'\n'}Mientras una miniatura se encuentre a 1" horizontalmente y 5" verticalmente de una miniatura enemiga, esas miniaturas se encuentran dentro del rango de combate entre sí.
                    {'\n'}Mientras dos miniaturas enemigas se encuentren dentro del rango de combate entre sí, las unidades de esas miniaturas también se encuentran dentro del rango de combate entre sí.
                    {'\n'}Las miniaturas no se pueden colocar dentro del rango de combate de las miniaturas enemigas.

                    {'\n'}<Text style={{ color: 'red' }}>■</Text>Rango de compromiso: 1" horizontalmente + 5" verticalmente.
                    {'\n'}<Text style={{ color: 'red' }}>■</Text>Los modelos no se pueden colocar dentro del rango de combate de los modelos enemigos.

                </Text>
            </>

            <>
                <Text style={styles.title}>
                    CAMPO DE BATALLA
                </Text>
                <Text style={styles.desc}>
                    Todas las batallas de Warhammer 40,000 se libran en campos de batalla rectangulares.
                    {'\n'}Puede ser cualquier superficie sobre la que puedan estar de pie las miniaturas: una mesa de comedor, por ejemplo, o el suelo. Tu misión te indicará el tamaño del campo de batalla necesario, pero será proporcional al tamaño de los ejércitos que utilices. Los campos de batalla estarán poblados de elementos del terreno.

                </Text>
            </>

            <>
                <Text style={styles.title}>
                    CARACTERÍSTICAS DEL TERRENO
                </Text>
                <Text style={styles.desc}>
                    El escenario de un campo de batalla se puede representar con miniaturas de la gama Warhammer 40,000.
                    {'\n'}Estas miniaturas se denominan elementos del terreno para diferenciarlas de las miniaturas que forman un ejército.
                    {'\n'}Los elementos del terreno se colocan en el campo de batalla antes de que comience la batalla.
                    {'\n'}Puedes obtener más información sobre los elementos del terreno en el libro de reglas básico de Warhammer 40000.
                    {'\n'}A menos que la misión que estás jugando te indique lo contrario, puedes crear un campo de batalla emocionante usando cualquier elemento de terreno de tu colección que desees.
                    {'\n'}En general, recomendamos tener un elemento en el campo de batalla por cada área de 12" x 12" (redondeando hacia arriba).
                    {'\n'}No te preocupes si tu campo de batalla no cumple con estos requisitos, pero ten en cuenta que jugar en un campo de batalla que sea un páramo estéril o esté repleto de elementos de terreno puede dar ventaja a un bando o al otro.



                </Text>
            </>

            <>
                <Text style={styles.title}>
                    CARACTERÍSTICAS DEL TERRENO
                </Text>
                <Text style={styles.desc}>
                    El escenario de un campo de batalla se puede representar con miniaturas de la gama Warhammer 40,000.
                    {'\n'}Estas miniaturas se denominan elementos del terreno para diferenciarlas de las miniaturas que forman un ejército.
                    {'\n'}Los elementos del terreno se colocan en el campo de batalla antes de que comience la batalla.
                    {'\n'}Puedes obtener más información sobre los elementos del terreno en el libro de reglas básico de Warhammer 40000.
                    {'\n'}A menos que la misión que estás jugando te indique lo contrario, puedes crear un campo de batalla emocionante usando cualquier elemento de terreno de tu colección que desees.
                    {'\n'}En general, recomendamos tener un elemento en el campo de batalla por cada área de 12" x 12" (redondeando hacia arriba).
                    {'\n'}No te preocupes si tu campo de batalla no cumple con estos requisitos, pero ten en cuenta que jugar en un campo de batalla que sea un páramo estéril o esté repleto de elementos de terreno puede dar ventaja a un bando o al otro.
                </Text>
            </>


        </ScrollView>
    );
};
const styles = StyleSheet.create({
    scroll: { flex: 1, 
        backgroundColor: '#B29BCC', 
        padding: 5 },
    desc: { fontSize: 18, 
        backgroundColor: '#F2F2F2', 
        color: '#000000', 
        paddingLeft: 3, 
        paddingRight: 3, 
        paddingBottom: 5, 
        borderBottomLeftRadius: 10, 
        borderBottomRightRadius: 10,
        marginBottom: 10
    },
    title: { color: '#fff', fontWeight: 'bold', backgroundColor: '#3E5459', fontSize: 20, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10, marginTop: 5 },

});