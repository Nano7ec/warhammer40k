import { Text, ScrollView, StyleSheet,} from 'react-native';

export default function ChaosDemons () {
    return( 
        <ScrollView style={styles.Container}>
            <Text style={styles.Titulo}>Demonios del caos
            </Text>
            <Text style={styles.Text}>
            Cuando los demonios irrumpen en el espacio real, torbellinos de energía del vórtice se derraman a su paso. La emoción manifestada y las fuerzas desatadas y pesadillescas retuercen todo lo que tocan, remodelando el paisaje en formas extrañas mientras atormentan a los seres mortales hasta la locura. Estar atrapado en tales tempestades es soportar condiciones completamente anáthemas a las leyes fundamentales de la realidad, provocando un terror primal incluso en los guerreros más impasibles.
            </Text>
            {/** ARMY RULE/ DEMONIO DEL CAOS */}
            <br/>
           {/** ------------------------------------ 1 ------------------------------------ */}
           <Text style={styles.Titulo}>La sombra del caos
            </Text>
            <Text style={styles.Text}>
            Si la Facción de tu Ejército es Legiones Daemónicas, ciertas áreas del campo de batalla se consideran dentro de la Sombra del Caos de tu ejército, de la siguiente manera:
            </Text>
            {"\n"} <Text style={styles.Text}>
            ■ Tu zona de despliegue siempre está dentro de la Sombra del Caos de tu ejército.
            </Text>
            {"\n"} <Text style={styles.Text}>
            ■ Al inicio de cualquier fase, si controlas al menos la mitad de los marcadores de objetivos dentro de Tierra de Nadie, hasta el final de esa fase, Tierra de Nadie estará dentro de la Sombra del Caos de tu ejército.
            </Text>
            {"\n"} <Text style={styles.Text}>
            ■ Al inicio de cualquier fase, si controlas al menos la mitad de los marcadores de objetivos dentro de la zona de despliegue de tu oponente, hasta el final de esa fase, la zona de despliegue de tu oponente estará dentro de la Sombra del Caos de tu ejército.
            </Text>
            {/**SOMBRA DEL CAOS */}
            <br/>
            <Text style={styles.Habilidad}>
            Manifestacion demoniaca
            </Text>
            {"\n"} <Text style={styles.Text}>
            Mientras una unidad de Legiones Daemónicas de tu ejército esté dentro de la Sombra del Caos de tu ejército, cada vez que esa unidad realice una prueba de Choque de Batalla, suma 1 a esa prueba y, si la prueba se supera, una miniatura en esa unidad recupera hasta D3 heridas perdidas (si esa unidad es una unidad de Línea de Batalla y se supera la prueba, en su lugar pueden devolverse hasta D3 miniaturas destruidas a esa unidad).
            </Text>
            {/**MANIFESTACION DEMONIACA */}
            <br/>
            <Text style={styles.Habilidad}>
            TERROR DAEMÓNICO
            </Text>
            {"\n"} <Text style={styles.Text}>
            Mientras una unidad enemiga esté dentro de la Sombra del Caos de tu ejército, cada vez que esa unidad realice una prueba de conmoción (Battle-shock), resta 1 a esa prueba y, si la prueba falla, esa unidad enemiga sufre D3 heridas mortales.
            </Text>
            {/**TERROR DAEMÓNICO */}
            <br/>
            {/** ------------------------------------ 2 ------------------------------------ */}
            <Text style={styles.Titulo}>Pacto demoniaco
            </Text>
            <Text style={styles.Text}>
            Cuando los siervos mortales de los Dioses Oscuros marchan a la guerra, los más favorecidos pueden encontrarse acompañados por entidades demoníacas.
            </Text>
            {"\n"}<Text style={styles.Text}>
            Si todas las miniaturas de tu ejército tienen la palabra clave Caos, puedes incluir unidades de Legiones Daemónicas en tu ejército, incluso si no tienen la palabra clave de Facción que seleccionaste en el paso de Selección de Facción del Ejército. El costo combinado en puntos de dichas unidades que puedes incluir depende del tamaño de tu batalla, como se muestra a continuación.
            </Text>
            {"\n"} <Text style={styles.Text}>
            ■ Incursión - Hasta 250 pts
            </Text>
            {"\n"} <Text style={styles.Text}>
            ■ Fuerza de Combate - Hasta 500 pts
            </Text>
            {"\n"} <Text style={styles.Text}>
            ■ Embate - Hasta 750 pts
            </Text>
            {"\n"}<Text style={styles.Text}>
            Ninguno de estos modelos puede ser tu Señor de la Guerra, y no pueden recibir Mejoras. Además:
            </Text>
            {"\n"} <Text style={styles.Text}>
            ■ Si la Facción de tu Ejército es Devoradores de Mundos, solo puedes incluir unidades de Legiones Daemónicas de Khorne utilizando estas reglas.
            </Text>
            {"\n"} <Text style={styles.Text}>
            ■ Si la Facción de tu Ejército es Mil Hijos, solo puedes incluir unidades de Legiones Daemónicas de Tzeentch utilizando estas reglas.
            </Text>
            {"\n"} <Text style={styles.Text}>
            ■ Si la Facción de tu Ejército es Guardia de la Muerte, solo puedes incluir unidades de Legiones Daemónicas de Nurgle utilizando estas reglas.
            </Text>
            {"\n"} <Text style={styles.Text}>
            ■ Si tu Señor de la Guerra es Lucius el Eterno, solo puedes incluir unidades de Legiones Daemónicas de Slaanesh utilizando estas reglas.
            </Text>
            {/**PACTO DEMONIACO */}
            <br/>
            {/**----------------------------------------------------------------------------------------- */}
            <Text style={styles.Titulo}>Demonios DEL CAOS – REGLAS DEL DESTACAMENTO DE INCURSIÓN demoniaca
            </Text>
            <Text style={styles.Text}>
            Si la Facción de tu Ejército es Legiones Daemónicas, puedes usar esta regla de Destacamento de Incursión Demoníaca.
            </Text>
            {"\n"}<Text style={{ fontSize: 20, backgroundColor: '#3b3d5e', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3, textTransform: 'uppercase', fontStyle: 'italic',fontWeight: 'bold'}}>
            WARP RIFTS
            </Text>
            {"\n"}<Text style={styles.Text}>
            Las legiones demoníacas desgarran la tela del espacio real, entidades malévolas parpadeando en existencia como fantasmas de una pesadilla. Peor aún, a medida que el terror y el pánico se apoderan de sus víctimas, sus almas mortales se convierten en presas cada vez más fáciles para las entidades que emergen del vórtice.
            </Text>
            {"\n"}<Text style={styles.Text}>
            Cada vez que una unidad de <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>Legiones Daemonica</Text> de tu ejército se despliegue en el campo de batalla usando la habilidad de Ataque Profundo, si se despliega completamente dentro de la Sombra del Caos de tu ejército, puede ser colocada en cualquier lugar que esté a más de 6" de distancia horizontalmente de todos los modelos enemigos, en lugar de más de 9".
            </Text>
            {/** ARMY RULE/ DEMONIO DEL CAOS */}
            <br/>
            <Text style={styles.Titulo}>EstrataGemas – Stratagems
            </Text>
            <Text style={styles.Text}>
            Si estás usando la regla de Destacamento de Incursión Demoníaca, puedes usar estas Estratagemas de Incursión Demoníaca.
            </Text>
            {/**------------------------------------------- 1 ------------------------------------------- */}
            <Text style={styles.Text}>
            {"\n"}<Text style={{  fontStyle: 'italic',textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#3b3d5e',fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    REALIDAD CORROMPIDA.
                    {"\n"} <Text style={styles.TText}>INCURSION DEMONÍACA – ESTRATAGEMA ESTRATÉGICA</Text>
                    </Text> {"\n"}
                    Los demonios sienten instintivamente la necesidad de despojar y corromper cada rincón del espacio real, para así sostener mejor sus formas de otro mundo.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> cuando:</Text>Al inicio de cualquier fase de Comando.
                    {"\n"}<Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> objetivo:</Text> Una unidad de Legiones Daemonica de tu ejército que esté dentro del rango de un marcador de objetivo que controles.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> Efecto:</Text> Ese marcador de objetivo se considera Corrompido y permanece bajo tu control, incluso si no tienes modelos dentro de su rango, hasta que tu oponente lo controle al inicio o al final de cualquier turno. Además, mientras un marcador de objetivo esté Corrompido y bajo tu control, el área del campo de batalla dentro de 6" de ese marcador de objetivo se considera que está dentro de la Sombra del Caos de tu ejército.
            </Text>
            {/**------------------------------------------- 2 ------------------------------------------- */}
            {"\n"}<Text style={styles.Text}>
            {"\n"}<Text style={{  fontStyle: 'italic',textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#3b3d5e',fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    OLEADA DEL VORTICE.
                    {"\n"} <Text style={styles.TText}>INCURSION DEMONÍACA – ESTRATAGEMA ESTRATÉGICA</Text>
                    </Text> {"\n"}
                    Los vientos del vórtice soplan con fuerza, invigorando a los demonios y dándoles velocidad y ferocidad sobrenaturales.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> cuando:</Text>Tu fase de Carga.
                    {"\n"}<Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> objetivo:</Text> Una unidad de Legiones Daemonica de tu ejército que esté dentro de la Sombra del Caos de tu ejército.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> Efecto:</Text> Hasta el final de la fase, tu unidad es elegible para declarar una carga incluso si Avanzó este turno.
            </Text>
            {/**------------------------------------------- 3 ------------------------------------------- */}
            {"\n"}<Text style={styles.Text}>
            {"\n"}<Text style={{  fontStyle: 'italic',textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#3b3d5e',fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    TRAGO DE TERROR.
                    {"\n"} <Text style={styles.TText}>INCURSION DEMONÍACA – ESTRATAGEMA DE TÁCTICA DE BATALLA</Text>
                    </Text> {"\n"}
                    El creciente miedo de su presa mortal sirve como un elixir embriagador para los seguidores demoníacos, cada trago invigorando sus formas con poder mortal.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> cuando:</Text>Tu fase de Disparo o la fase de Combate.
                    {"\n"}<Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> objetivo:</Text> Una unidad de Legiones Daemonica de tu ejército que no haya sido seleccionada para disparar o combatir en esta fase.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> Efecto:</Text> Hasta el final de la fase, mejora la característica de Penetración de Armadura de las armas equipadas por los modelos en esa unidad en 1. Además, hasta el final de la fase, cada vez que tal arma apunte a una unidad que esté Batalla-impactada, puedes volver a tirar el dado para herir.
            </Text>
            {/**------------------------------------------- 4 ------------------------------------------- */}
            {"\n"}<Text style={styles.Text}>
            {"\n"}<Text style={{  fontStyle: 'italic',textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#3b3d5e',fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                DENIZEN DE LOS VORTICES.
                    {"\n"} <Text style={styles.TText}>INCURSION DEMONÍACA – ESTRATAGEMA ESTRATÉGICA</Text>
                    </Text> {"\n"}
                    Siempre al acecho en el vórtice, los demonios esperarán hasta que las barreras entre reinos se debiliten antes de desgarrar su camino hacia el espacio real.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> cuando:</Text>Tu fase de Movimiento.
                    {"\n"}<Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> objetivo:</Text> Una unidad de Legiones Daemonica de tu ejército que llegue utilizando la habilidad de Ataque Profundo esta fase.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> Efecto:</Text> Tu unidad puede ser colocada en cualquier lugar del campo de batalla que esté a más de 3" de distancia horizontalmente de todos los modelos enemigos.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> Restricciones:</Text> Una unidad objetivo de esta Estratagemas no es elegible para declarar una carga en el mismo turno.
            </Text>
             {/**------------------------------------------- 5 ------------------------------------------- */}
             {"\n"}<Text style={styles.Text}>
            {"\n"}<Text style={{  fontStyle: 'italic',textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#3b3d5e',fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                EL REINO DEL CAOS.
                    {"\n"} <Text style={styles.TText}>INCURSION DEMONÍACA – ESTRATAGEMA DE TÁCTICA DE BATALLA</Text>
                    </Text> {"\n"}
                    Cuando las energías del vórtice se filtran en el espacio real, las Legiones Daemonica pueden abrir portales en el aire aparentemente delgado, regresando a sus paisajes infernales solo para materializarse en medio de sus enemigos un latido después.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> cuando:</Text>Al final del turno de tu oponente.
                    {"\n"}<Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> objetivo:</Text> Hasta dos unidades de Legiones Daemonica de tu ejército que estén dentro de la Sombra del Caos de tu ejército, o una unidad más de Legiones Daemonica de tu ejército.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> Efecto:</Text> Retira las unidades objetivo del campo de batalla y colócalas en Reservas Estratégicas. Regresarán al campo de batalla en el paso de Refuerzos de tu próxima fase de Movimiento utilizando la habilidad de Ataque Profundo.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> Restricciones:</Text> No puedes seleccionar unidades que estén dentro del Rango de Compromiso de una o más unidades enemigas con esta Estratagemas.
            </Text>
             {/**------------------------------------------- 6 ------------------------------------------- */}
             {"\n"}<Text style={styles.Text}>
            {"\n"}<Text style={{  fontStyle: 'italic',textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#3b3d5e',fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
            INVULNERABILIDAD DEMONÍACA.
                    {"\n"} <Text style={styles.TText}>INCURSION DEMONÍACA – ESTRATAGEMA DE TÁCTICA DE BATALLA</Text>
                    </Text> {"\n"}
                    Los demonios son locura personificada. Sus cuerpos están hechos de la esencia del vórtice y son difíciles de destruir mediante medios convencionales.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> cuando:</Text>La fase de Disparo de tu oponente, justo después de que una unidad enemiga haya seleccionado sus objetivos.
                    {"\n"}<Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> objetivo:</Text> Una unidad de Legiones Daemonica de tu ejército que fue seleccionada como objetivo de uno o más ataques de esa unidad enemiga.
                    {"\n"} <Text style={{textTransform: 'uppercase', fontSize: 19, fontStyle: "italic"}}> Efecto:</Text> Hasta el final de la fase, cada vez que se realice una tirada de salvación invulnerable para un modelo en tu unidad, vuelve a tirar una salvación de 1.
            </Text>
            <br/>
            {/** STRATAGEMS */}
            <br/>
                <Text style={{  textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#11183f', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                DEMONIOS DEL CAOS – MEJORAS DE INCURSION DEMONÍACA
                </Text> {/**ENHANCEMENTS */}
                <Text style={{ fontSize: 18, backgroundColor: '#3b3d5e', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                Si estás usando la regla de Destacamento de Incursión Demoníaca, puedes usar estas Mejoras de Incursión Demoníaca.
                    {/** ---------------------------------------- 1 ---------------------------------------- */}
                    {"\n"}<Text style={{  fontStyle: 'italic',textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>A’RGATH, EL REY DE LAS ESPADAS</Text>
                    {"\n"}Cuando un demonio está atado dentro de un arma por su maestro infernal, rara vez se somete voluntariamente a esta terrible encarcelación. No se puede decir lo mismo de A’rgath. Una vida de masacres y dedicación celosa llevó a este carnicero a obtener la condición de demonio. Tal fue su devoción a Khorne que, en lugar de aceptar la inmortalidad como Príncipe Demoníaco, eligió tomar la forma de una espada mortal para derramar la sangre vital de los mayores enemigos de Khorne. Con su mano guiada por el espíritu de A’rgath, el portador de esta arma se convierte en casi imparable. Incontables son los campeones rivales y héroes mortales que han caído ante su poder.
                    {"\n"} <Text style={{fontWeight: "bold", fontStyle: 'italic'}}>Modelo de Legiones Daemonica de Khorne únicamente.</Text> Añade 1 a las características de Ataques y Fuerza de las armas cuerpo a cuerpo del portador. Mientras el portador esté dentro de la Sombra del Caos de tu ejército, añade 2 a las características de Ataques y Fuerza de las armas cuerpo a cuerpo del portador.
                    <br/>
                    {/** ---------------------------------------- 2 ---------------------------------------- */}
                    {"\n"}<Text style={{  fontStyle: 'italic',textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>EL BASTÓN ETERNO</Text>
                    {"\n"}Este bastón arde con llamas vibrantes del vórtice. Tan pronto como su maestro toma el arma eldritch, ellos también se ven envueltos en el mismo fuego demoníaco. Desde dentro de este infierno magenta, el portador demoníaco del Bastón Eterno lanza torrentes abrasadores del fuego rosa de Tzeentch, convirtiendo armaduras en cenizas e inmolando o mutando irrevocablemente la carne debajo.
                    {"\n"} <Text style={{fontWeight: "bold", fontStyle: 'italic'}}>Modelo de Legiones Daemonica de Tzeentch únicamente.</Text> Añade 1 a la característica de Fuerza de las armas a distancia del portador y aumenta la característica de Rango de tales armas en 3". Mientras el portador esté dentro de la Sombra del Caos de tu ejército, añade 2 a la característica de Fuerza de las armas a distancia del portador y aumenta la característica de Rango de tales armas en 6" en su lugar.
                    <br/>
                    {/** ---------------------------------------- 3 ---------------------------------------- */}
                    {"\n"}<Text style={{  fontStyle: 'italic',textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>EL REGALO INFINITO</Text>
                    {"\n"}Solo los demonios de plaga más consumados reciben el Regalo Infinito. Una enfermedad de malignidad indescriptible y benificencia repulsiva, cambia de forma constantemente de plaga a infestación a malestar. La única constante es su capacidad de reconstruir el cuerpo de su sufridor incluso a partir de las heridas más catastróficas. Un momento, las bacterias infernales pueden multiplicarse como el fuego hasta que su masa gélida llena una herida carnosa con carne demoníaca fresca. Al siguiente, vapores pestilenciales pueden brotar de la hendidura del demonio, velando su masa devastada antes de rasgarse y revelar una forma curada de sus recientes heridas.
                    {"\n"} <Text style={{fontWeight: "bold", fontStyle: 'italic'}}>Modelo de Legiones Daemonica de Nurgle únicamente.</Text>   El portador tiene la habilidad de <Text style={{fontStyle: "italic", textTransform: 'uppercase'}}>No Sentir Dolor 5+</Text>. Mientras el portador esté dentro de la Sombra del Caos de tu ejército, el portador tiene la habilidad de <Text style={{fontStyle: "italic", textTransform: 'uppercase'}}>No Sentir Dolor 4+</Text> en su lugar.
                    <br/>
                    {/** ---------------------------------------- 4 ---------------------------------------- */}
                    {"\n"}<Text style={{  fontStyle: 'italic',textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>LADRÓN DE ALMAS</Text>
                    {"\n"}Esta glotona espada devora las almas de sus víctimas antes de vigorizar la forma corpórea de su portador. Su codicia proviene del hambriento Guardián de Secretos atrapado en su interior, una arrogante entidad que intentó devorar suficientes almas Aeldari para desafiar al mismo Slaanesh. Como castigo por la monstruosa arrogancia del demonio, Slaanesh lo aprisionó dentro de Ladrón de Almas, condenando al Guardián de Secretos a sostener a otros demonios con su frenético apetito sin retener nada para sí mismo.
                    {"\n"} <Text style={{fontWeight: "bold", fontStyle: 'italic'}}>Solo para modelo de Legiones Daemonica de Slaanesh.</Text>  Cada vez que el portador destruye un modelo enemigo con un ataque cuerpo a cuerpo, <Text style={{fontStyle: "italic", textTransform: 'uppercase'}}>tira un D6</Text>, sumando 1 al resultado si el portador está dentro de la Sombra del Caos de tu ejército. Con un <Text style={{fontStyle: "italic", textTransform: 'uppercase'}}>4+</Text>, el portador recupera 1 herida perdida.
                </Text>{/**ENHANCEMENTS */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    Container:{ flex: 1, backgroundColor: '#7d8cc3', padding: 7},
    Titulo:{textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#11183f', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 },
    Text:{ fontSize: 18, backgroundColor: '#3b3d5e', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3, borderBottomLeftRadius: 10, borderBottomRightRadius: 10},
    Habilidad:{ fontStyle: 'italic',fontWeight: 'bold',fontSize: 20, backgroundColor: '#3b3d5e', color: '#fff', textTransform: 'uppercase', textAlign: 'center',borderTopLeftRadius: 10, borderTopRightRadius: 10},
TText: {fontSize:16, textTransform: 'uppercase', textAlign:'center', color : "#fff", fontWeight: 'bold'},

});
