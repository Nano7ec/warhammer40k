import * as React from 'react';
import { Text, ScrollView, StyleSheet,View} from 'react-native';
 
export default function ChaosSpaceMarine () {
    return(
        <ScrollView style={styles.Container}>
            <Text style={styles.Titulos}>MARINES ESPACIALES DEL CAOS
                {"\n"}<Text style={styles.SubTitle}>REGLAS DEL EJÉRCITO</Text>
            </Text>
            <Text style={styles.Texto}>
            Los campeones profanos de los Herejes Astartes ruegan a los Dioses del Caos con fervor fanático, ofreciendo las ofrendas más viles a cambio de su poder.
            </Text>
            {/** ARMY RULE/ CABALLEROS DEL CAOS*/}
            <br/>

            {/** ------------------------------------ 1 ------------------------------------ */}
            <Text style={styles.Titulos}>PACTOS OSCUROS
            </Text>
            <Text style={styles.Texto}>
            Si tu facción es Herejes Astartes, cada vez que una unidad con esta habilidad sea seleccionada para disparar o luchar, puede hacer un Pacto Oscuro. Si lo hace, selecciona una de las siguientes habilidades para que las armas de esa unidad la obtengan hasta el final de la fase:
            {"\n"} ◘ GOLPES LETALES
            {"\n"} ◘ GOLPES SOSTENIDOS 1
            {"\n"}{"\n"} Cada vez que una unidad hace un Pacto Oscuro, después de resolver sus ataques, debe realizar una prueba de Liderazgo; si falla, esa unidad sufre D3 heridas mortales.
            </Text>
            {/** PACTOS OSCUROS*/}
            <br/>
            {/**------------------------------- REGLA DEL DESTACAMENTO ------------------------------- */}
            <Text style={styles.Titulos}>MARINES ESPACIALES DEL CAOS – ESCLAVOS DE LA OSCURIDAD
                {"\n"} <Text style={styles.SubTitle}>REGLA DEL DESTACAMENTO</Text>
           </Text>
           <Text style={styles.Texto}>
           Si tu facción del ejército es Herejes Astartes, puedes usar esta regla de Destacamento "Esclavos de la Oscuridad".
           {"\n"}{"\n"}<Text style={{fontSize:19,fontStyle:'italic', textTransform: 'uppercase',fontWeight:'bold'}}>MARCAS DEL CAOS</Text>
           {"\n"}Al alistar tu ejército, cada vez que selecciones una unidad de Herejes Astartes para incluir en tu ejército, si esa unidad no es un Héroe Épico y no tiene ya una o más de las palabras clave enumeradas a continuación, debes seleccionar una de las palabras clave de la lista para que esa unidad la obtenga (anota qué unidades obtienen qué palabras clave en tu lista del ejército). Cada vez que una unidad con una de estas palabras clave haga un Pacto Oscuro, obtiene la habilidad asociada a continuación hasta el final de la fase.
            <br/>
            </Text> 
            {/* Cabecera de la tabla */}
            <View style={styles.Tabla}>
                <>
                <View style={styles.Cabecera}>
                    <Text style={styles.Ttabla}> Palabra clave</Text>
                </View>
                <View style={styles.Cabecera}>
                    <Text style={styles.Ttabla}> Habilidad </Text>
                </View>
                </>
            </View>
            {/* Filas de la tabla */}
            <View style={styles.Fila}>
            <>
                <View style={styles.PalabraClave}>
                    <Text style={{fontSize: 14, color: '#000'}}>Khorne</Text>
                </View>
                <View style={styles.PalabraClave}>
                    <Text style={{fontSize: 14, color: '#000'}}> <Text style={{fontWeight:'bold',fontStyle:'italic'}}>Furia Sangrienta</Text>: En la fase de combate, si las armas de esta unidad obtuvieron la habilidad [GOLPES LETALES] en esta fase como resultado de un Pacto Oscuro, cada vez que un modelo de esta unidad haga un ataque, una tirada no modificada de 5+ para Impactar, obtiene un Impacto Crítico.</Text>
                </View>
            </>
            </View>

            <View style={{flexDirection: 'row', // Alinear elementos en fila
                        borderBottomWidth: 1,borderBottomColor: '#2C0069'}}>
                <>
                    <View style={styles.Habi}>
                        <Text style={{fontSize: 14, color: '#000'}}>Tzeentch</Text>
                    </View>
                    <View style={styles.Habi}>
                        <Text style={{fontSize: 14, color: '#000'}}> <Text style={{fontWeight: 'bold', fontStyle:'italic'}}>Fuego Warp</Text>: En la fase de disparo, si las armas de esta unidad obtuvieron la habilidad [GOLPES LETALES] en esta fase como resultado de un Pacto Oscuro, cada vez que un modelo de esta unidad haga un ataque, una tirada no modificada de 5+ para Impactar, obtiene un Impacto Crítico.</Text>
                    </View>
                </>
            </View>

            <View style={{flexDirection: 'row', // Alinear elementos en fila
                        borderBottomWidth: 1,borderBottomColor: '#2C0069'}}>
                <>
                    <View style={styles.Habi}>
                    <Text style={{fontSize: 14, color: '#000'}}>Nurgle</Text>
                    </View>
                    <View style={styles.Habi}>
                    <Text style={{fontSize: 14, color: '#000'}}> <Text style={{fontWeight:'bold', fontStyle:'italic'}}>Propagación de la Enfermedad</Text>: En la fase de disparo, si las armas de esta unidad obtuvieron la habilidad [GOLPES SOSTENIDOS 1] en esta fase como resultado de un Pacto Oscuro, cada vez que un modelo de esta unidad haga un ataque, una tirada no modificada de 5+ para Impactar, obtiene un Impacto Crítico.</Text>        
                    </View>
                </>
            </View>

            <View style={{flexDirection: 'row', // Alinear elementos en fila
                        borderBottomWidth: 1,borderBottomColor: '#2C0069'}}>
                        <>
                            <View style={styles.Habi}>
                                <Text style={{fontSize: 14, color: '#000'}}>Slaanesh</Text>
                            </View>
                            <View style={styles.Habi}>
                                <Text style={{fontSize: 14, color: '#000'}}> <Text style={{fontWeight: 'bold',fontStyle:'italic'}}>Crueldad Excesiva</Text>: En la fase de combate, si las armas de esta unidad obtuvieron la habilidad [GOLPES SOSTENIDOS 1] en esta fase como resultado de un Pacto Oscuro, cada vez que un modelo de esta unidad haga un ataque, una tirada no modificada de 5+ para Impactar, obtiene un Impacto Crítico.</Text>
                            </View>
                        </>
            </View>

            <View style={{flexDirection: 'row', // Alinear elementos en fila
                        borderBottomWidth: 1,borderBottomColor: '#2C0069'}}>
                        <>
                            <View style={styles.Habi}>
                                <Text style={{fontSize: 14, color: '#000'}}>Caos Indiviso</Text>
                            </View>
                            <View style={styles.Habi}>
                                <Text style={{fontSize: 14, color: '#000'}}> <Text style={{fontWeight: 'bold', fontStyle:'italic'}}>Gloria al Caos</Text>: Cada vez que un modelo de esta unidad haga un ataque, repite una tirada de Impacto de 1.</Text>
                            </View>
                        </>
            </View>
            {/** FINALIZACION DE LA TABLA */}
            <br/>
            <Text style={styles.Titulos}>RESTRICCIONES
            </Text>
            <Text style={styles.Texto}>
            {"\n"} ◘ No puedes seleccionar la palabra clave Khorne para una unidad Psíquica
            {"\n"} ◘ Una unidad de Personaje con la habilidad Líder solo puede ser unida a una unidad de Guardia del Cuerpo si ambas unidades comparten una de las mismas palabras clave de la lista anterior.
            </Text>{/**RESTRICCIONES */}
            {/** REGLAS DE DESTACAMIENTO*/}
            <br/>
            {/**------------------------------- ESTRATAGEMAS ------------------------------- */}
            <Text style={styles.Titulos}>MARINES ESPACIALES DEL CAOS – ESCLAVOS DE LA OSCURIDAD
                {"\n"}<Text style={styles.SubTitle}>ESTRATAGEMAS</Text>
           </Text>
           <Text style={styles.Texto}>
           Si estás usando la regla del Destacamento "Esclavos de la Oscuridad", puedes usar estas Estratagemas.
                
                {"\n"}{"\n"}<Text style={{fontSize:19,fontStyle:'italic', textTransform: 'uppercase', fontWeight: 'bold'}}>RITOS INFERNALES
                   {"\n"} <Text style={{fontSize:16, fontStyle:'italic'}}>ESCLAVOS DE LA OSCURIDAD – ESTRATAGEMA TÁCTICA DE BATALLA</Text>
                </Text>
                    {"\n"}<Text style={{ fontSize: 18, color: '#000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                    Con ofrecimientos horrendos y promesas ritualizadas, los Marines Espaciales del Caos buscan la protección de sus amos infernales.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> cuando:</Text> En la fase de Disparo de tu oponente o en la fase de Combate, justo después de que una unidad enemiga haya seleccionado sus objetivos.
                    {"\n"}<Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> objetivo:</Text> Una unidad de Herejes Astartes de tu ejército que fue seleccionada como objetivo de uno o más de los ataques de la unidad atacante.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> Efecto:</Text> Hasta el final de la fase, cada vez que un ataque seleccione tu unidad, empeora el valor de Penetración de Armadura de ese ataque en 1.
                </Text> {/** RITOS INFERNALES*/}

                {"\n"}{"\n"}<Text style={{fontSize:19,fontStyle:'italic', textTransform: 'uppercase', fontWeight: 'bold'}}>CELO PROFANO
                   {"\n"} <Text style={{fontSize:16, fontStyle:'italic'}}>ESCLAVOS DE LA OSCURIDAD – ESTRATAGEMA TÁCTICA DE BATALLA</Text>
                </Text>
                    {"\n"}<Text style={{ fontSize: 18, color: '#000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                    Fervientes seguidores mortales se agolpan alrededor de los campeones del Caos, condenando sus almas en busca de promesas de poder oscuro.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> cuando:</Text> En tu fase de Disparo o en la fase de Combate.
                    {"\n"}<Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> objetivo:</Text> Una unidad de Herejes Astartes de tu ejército que no ha sido seleccionada para disparar o luchar en esta fase.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> Efecto:</Text> Hasta el final de la fase, cada vez que un modelo de tu unidad haga un ataque, repite una tirada para Impactar de 1 y repite una tirada para Herir de 1. Si tu unidad es una unidad de Caos Indiviso, puedes en su lugar repetir la tirada para Impactar y puedes repetir la tirada para Herir para ese ataque.
                </Text> {/** CELO PROFANO*/}

                {"\n"}{"\n"}<Text style={{fontSize:19,fontStyle:'italic', textTransform: 'uppercase', fontWeight: 'bold'}}>ODIO ETERNO
                   {"\n"} <Text style={{fontSize:16, fontStyle:'italic'}}>ESCLAVOS DE LA OSCURIDAD – ESTRATAGEMA DE JUGADA ESTRATÉGICA</Text>
                </Text>
                    {"\n"}<Text style={{ fontSize: 18, color: '#000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                    Los Herejes Astartes están impulsados por el odio, una ira abrasadora que arde ferozmente dentro de ellos hasta el momento de su muerte. Incluso cuando su fuerza vital se escapa por terribles heridas, este odio los impulsa a luchar una vez más. Aquellos Herejes Astartes que están bajo el yugo del Dios de la Sangre sienten esta enemistad en mayor medida que los demás, estallando en violencia justo cuando el enemigo cree que finalmente los ha derrotado.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> cuando:</Text> En la fase de Combate, justo después de que una unidad enemiga haya seleccionado sus objetivos.
                    {"\n"}<Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> objetivo:</Text> Una unidad de Herejes Astartes de tu ejército que fue seleccionada como objetivo de uno o más de los ataques de la unidad atacante.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> Efecto:</Text> Hasta el final de la fase, cada vez que un modelo de tu unidad sea destruido, si ese modelo no ha luchado en esta fase, tira un D6, añadiendo 1 al resultado si es una unidad de Khorne: con un 4+, no retires el modelo del juego. Ese modelo destruido puede luchar después de que la unidad del modelo atacante haya terminado de hacer sus ataques, y luego es retirado del juego.
                </Text> {/** ODIO ETERNO*/}
                
                {"\n"}{"\n"}<Text style={{fontSize:19,fontStyle:'italic', textTransform: 'uppercase', fontWeight: 'bold'}}>TRANSFORMACIÓN DE PIEL
                   {"\n"} <Text style={{fontSize:16, fontStyle:'italic'}}>ESCLAVOS DE LA OSCURIDAD – ESTRATAGEMA DE HAZAÑA ÉPICA</Text>
                </Text>
                    {"\n"}<Text style={{ fontSize: 18, color: '#000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                    Con los Dioses Oscuros y los poderes del caos de su lado, los Marines Espaciales del Caos pueden engañar a la muerte por completo. Sus enemigos observan con horror cómo heridas letales se curan, huesos rotos se juntan con crujidos y chasquidos repulsivos, y armaduras destrozadas se reconstruyen. Tras esta bendición, los Herejes Astartes se convierten en algo mucho más (y mucho menos) de lo que alguna vez fueron.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> cuando:</Text> En tu fase de Mando.
                    {"\n"}<Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> objetivo:</Text> Una unidad de Herejes Astartes de tu ejército.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> Efecto:</Text> Un modelo de tu unidad recupera hasta 3 heridas perdidas. Además, si tu unidad es de Tzeentch y está por debajo de su Fortaleza Inicial, un modelo destruido (excluyendo modelos de Personaje) es regresado a tu unidad con todas sus heridas restauradas.
                </Text> {/** TRANSFORMACIÓN DE PIEL*/}

                {"\n"}{"\n"}<Text style={{fontSize:19,fontStyle:'italic', textTransform: 'uppercase', fontWeight: 'bold'}}>VELOCIDAD SOBRENATURAL
                   {"\n"} <Text style={{fontSize:16, fontStyle:'italic'}}>ESCLAVOS DE LA OSCURIDAD – ESTRATAGEMA DE JUGADA ESTRATÉGICA</Text>
                </Text>
                    {"\n"}<Text style={{ fontSize: 18,color: '#000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                    Algunos Herejes Astartes parecen moverse con una velocidad imposible, desplazando sus cuerpos y armas de un lugar a otro en un abrir y cerrar de ojos.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> cuando:</Text> En tu fase de Movimiento.
                    {"\n"}<Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> objetivo:</Text> Una unidad de Herejes Astartes de tu ejército.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> Efecto:</Text> Hasta el final del turno, tu unidad es elegible para disparar y declarar una carga en un turno en el que se retiró del combate. Además, si tu unidad es de Slaanesh, hasta el final del turno, tu unidad es elegible para disparar y declarar una carga en un turno en el que Avanzó.
                </Text> {/** VELOCIDAD SOBRENATURAL*/}

                {"\n"}{"\n"}<Text style={{fontSize:19,fontStyle:'italic', textTransform: 'uppercase', fontWeight: 'bold'}}>OBSCURIDAD OSCURA
                   {"\n"} <Text style={{fontSize:16, fontStyle:'italic'}}>ESCLAVOS DE LA OSCURIDAD – ESTRATAGEMA DE JUGADA ESTRATÉGICA</Text>
                </Text>
                    {"\n"}<Text style={{ fontSize: 18, color: '#000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                    Niebla sofocante cargada con los gritos de almas torturadas; densas nubes de moscas hinchadas; lluvias sangrientas y remolinos de llamas que arden en mil colores. Estos fenómenos nacidos del caos pueden aparecer en el campo de batalla en un instante y desaparecer igual de rápido. Todos sirven para ocultar a los Herejes Astartes de sus aterrados enemigos.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> cuando:</Text> En la fase de Disparo de tu oponente, justo después de que una unidad enemiga haya seleccionado sus objetivos.
                    {"\n"}<Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> objetivo:</Text> Una unidad de Herejes Astartes de tu ejército que fue seleccionada como objetivo de uno o más ataques de la unidad enemiga.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'}}> Efecto:</Text> Hasta el final de la fase, tu unidad obtiene la habilidad Sigilo. Además, si tu unidad es de Nurgle, hasta el final de la fase, tu unidad solo puede ser seleccionada como objetivo de un ataque a distancia si el modelo atacante está a 12" o menos.
                  </Text>  
                </Text> {/** OBSCURIDAD OSCURA*/}
                {/**FIN DE LAS ESTRATAGEMAS */}
                <br/>
                {/**------------------------------- MEJORAS ------------------------------- */}
                <Text style={styles.Titulos}>MEJORAS – ESCLAVOS DE LA OSCURIDAD
           </Text>
           <Text style={styles.Texto}>
           Si estás usando la regla del Destacamento "Esclavos de la Oscuridad", puedes usar estas Mejoras para tus Herejes Astartes:

                {"\n"}{"\n"}<Text style={{fontSize:19,fontStyle:'italic', textTransform: 'uppercase', fontWeight: 'bold'}}>TALISMÁN DE SANGRE ARDIENTE</Text>
                    {"\n"}<Text style={{ fontSize: 18, color: '#000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                    Este talismán constantemente gotea una sangre espesa y burbujeante. El aire a su alrededor está tan cargado del hedor carniceril que imbuye los miembros del portador con ferocidad y fuerza sobrenaturales, un don bien recibido por aquellos que ansían reclamar los cráneos más dignos para Khorne.
                    {"\n"}<Text style={{fontWeight:'bold',fontStyle:'italic'}}>Solo para modelos de Herejes Astartes de Khorne</Text>. Añade 1 a las características de Ataques y Fuerza de las armas de combate cuerpo a cuerpo del portador. Cada vez que la unidad del portador haga un Pacto Oscuro, hasta el final de la fase, en lugar de añadir 1, añade D3 a las características de Ataques y Fuerza de las armas cuerpo a cuerpo del portador.
                </Text> {/** TALISMÁN DE SANGRE ARDIENTE*/}

                {"\n"}{"\n"}<Text style={{fontSize:19,fontStyle:'italic', textTransform: 'uppercase', fontWeight: 'bold'}}>OJO DE TZEENTCH</Text>
                    {"\n"}<Text style={{ fontSize: 18, color: '#000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                    El Ojo de Tzeentch es una reliquia que ha estado expuesta a energías psíquicas salvajes durante diez milenios. Los campeones que miran dentro de las profundidades inquebrantables del artefacto pueden vislumbrar los secretos del caos.
                    {"\n"}<Text style={{fontWeight:'bold',fontStyle:'italic'}}>Solo para modelos de Herejes Astartes de Tzeentch</Text>. Cada vez que la unidad del portador haga un Pacto Oscuro, realiza una prueba de Liderazgo para el portador: si la prueba se supera, ganas 1 Punto de Mando (CP).
                </Text> {/** OJO DE TZEENTCH*/}

                {"\n"}{"\n"}<Text style={{fontSize:19,fontStyle:'italic', textTransform: 'uppercase', fontWeight: 'bold'}}>ORBES DE NO-VIDA</Text>
                    {"\n"}<Text style={{ fontSize: 18, color: '#000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                    Dentro de estas esferas de vidrio se encuentra un virus de devorador de vida diluido. Aunque se agota rápidamente cuando la esfera se rompe, todo lo que esté cerca que no esté tocado por las bendiciones de Nurgle —carne, armadura y hueso— es consumido por la cepa viral devastadora.
                    {"\n"}<Text style={{fontWeight:'bold',fontStyle:'italic'}}>Solo para modelos de Herejes Astartes de Nurgle</Text>. Al final de la fase de Combate, tira un D6 por cada unidad enemiga a 6" del portador, añadiendo 1 al resultado si la unidad del portador hizo un Pacto Oscuro en esa fase: con un 4+, esa unidad enemiga sufre D3 heridas mortales.
                </Text> {/** ORBES DE NO-VIDA*/}

                {"\n"}{"\n"}<Text style={{fontSize:19,fontStyle:'italic', textTransform: 'uppercase', fontWeight: 'bold'}}>ELÍXIR INTOXICANTE</Text>
                    {"\n"}<Text style={{ fontSize: 18, color: '#000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                    Este dispensador está lleno de un líquido que se repone por sí solo y se bombea en el torrente sanguíneo del portador por pintas. Algunos dicen que el líquido, que otorga un poder físico impío a quienes lo consumen, es un néctar destilado de los propios jardines del placer de Slaanesh, pues mientras aumenta las habilidades del portador, los enemigos atrapados en sus vapores soporíferos quedan paralizados por el terror y el éxtasis.
                    {"\n"}<Text style={{fontWeight:'bold',fontStyle:'italic'}}>Solo para modelos de Herejes Astartes de Slaanesh</Text>. El portador tiene la habilidad Dolor No Sentido (5+). Cada vez que el portador dispara o combate, si la unidad del portador hizo un Pacto Oscuro en esa fase, después de que el portador haya resuelto esos ataques, selecciona una unidad enemiga que haya sido impactada por uno o más de esos ataques; esa unidad enemiga debe realizar una prueba de Choque de Batalla.
                </Text> {/** ELÍXIR INTOXICANTE*/}

                {"\n"}{"\n"}<Text style={{fontSize:19,fontStyle:'italic', textTransform: 'uppercase', fontWeight: 'bold'}}>LIBER HERETICUS</Text>
                    {"\n"}<Text style={{ fontSize: 18, color: '#000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3,borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                    Este tomo maldito contiene un conocimiento prohibido que, según dicen, ha sido absorbido mientras el artefacto consumía las mentes de aquellos que se arriesgaron a leerlo. Aquellos con la fuerza suficiente para dominarlo pueden usarlo para potenciar sus rituales.
                    {"\n"}<Text style={{fontWeight:'bold',fontStyle:'italic'}}>Solo para modelos de Herejes Astartes Caos Indiviso</Text>. Cada vez que la unidad del portador haga un Pacto Oscuro, las armas de esa unidad ganan las habilidades [GOLPES LETALES] y [GOLPES SOSTENIDOS 1] hasta el final de la fase, en lugar de ganar solo una de esas habilidades.
                </Text> {/** LIBER HERETICUS*/}
                <br/>
                {/**FIN DE LAS MEJORAS */}

            </Text> {/** Estratagemas*/}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    Container: { flex: 1, backgroundColor: '#75332c', padding: 7},
    Titulos: {textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#676b6c', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 },
    SubTitle: {textTransform: 'uppercase', fontSize:20,fontStyle:'italic'},
    Texto: { fontSize: 18, backgroundColor: '#6f7773', color: '#000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3, borderBottomLeftRadius: 10, borderBottomRightRadius: 10},
    Tabla: {flexDirection: 'row', // Alinear elementos en fila
        borderBottomWidth: 1,borderBottomColor: '#676b6c',},
    Cabecera: {flex: 1, // Distribuye equitativamente el espacio entre columnas
        alignItems: 'center', // Centra el contenido horizontalmente
        justifyContent: 'center', // Centra el contenido verticalmente
        padding: 5,backgroundColor: '#676b6c',marginTop: 5,fontSize: 10},
    Ttabla: {color: '#fff', fontWeight: 'bold', fontSize: 20},
    Fila:{flexDirection: 'row', // Alinear elementos en fila
        borderBottomWidth: 1,borderBottomColor: '#2C0069'},
    PalabraClave: {flex: 1, // Distribuye equitativamente el espacio entre columnas
        alignItems: 'center', // Centra el contenido horizontalmente
        justifyContent: 'center', // Centra el contenido verticalmente
        padding: 5,backgroundColor: '#6f7773',fontSize: 10},
    Habi: {flex: 1, // Distribuye equitativamente el espacio entre columnas
        alignItems: 'center', // Centra el contenido horizontalmente
        justifyContent: 'center', // Centra el contenido verticalmente
        padding: 5,backgroundColor: '#6f7773',fontSize: 10}
  });

