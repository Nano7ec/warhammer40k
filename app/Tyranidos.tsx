import { Text, ScrollView,StyleSheet} from 'react-native';

export default function Tyranios(){
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.Titulo}>
                SYNAPSE
            </Text>
            <Text style={styles.Desc}>
                    Algunos Tiránidos sirven como conductos sinápticos o nodales a través de los cuales fluye una porción de la voluntad de hierro de la Mente Colmena, anulando los instintos naturales del enjambre para dirigir a las bestias guerreras a funcionar como un único organismo gestáltico en el campo de batalla.
                    {"\n"}Si tu Facción de Ejército es Tiránidos, mientras una unidad Tiránida de tu ejército esté a 6» o menos de una o más miniaturas de Sinapsis de tu ejército, se dice que esa unidad está dentro del Alcance de Sinapsis de tu ejército.
                    {"\n"}Cada vez que una unidad Tiránida de tu ejército realice un chequeo de Shock de Batalla, si está dentro del Alcance de Sinapsis de tu ejército, realiza ese chequeo con 3D6 en lugar de 2D6.
                </Text>
                <Text style={styles.Titulo}>
                SHADOW IN THE WARP
            </Text>
            <Text style={styles.Desc}>
            Los tiránidos inundan el campo de batalla con la firma psíquica de la flota colmena, un pavor gélido y alienígena que roe las mentes de sus presas y asfixia hasta el valor más incondicional.
                    {"\n"}Ante un horror tan insondable, muchos se vuelven locos o sufren daños neuronales catastróficos.
                    {"\n"}Si tu facción de ejército es Tiránidos, una vez por batalla, en la fase de Mando de cualquiera de los jugadores, si una o más unidades de tu ejército con esta habilidad están en el campo de batalla, puedes desatar el Shadow in the Warp. Cuando lo hagas, cada unidad enemiga en el campo de batalla debe efectuar un chequeo de Conmoción de batalla.
                </Text>
                <Text style={styles.Titulo}>
                SHADOW IN THE WARP
            </Text>
            <Text style={styles.Desc}>
            Los tiránidos inundan el campo de batalla con la firma psíquica de la flota colmena, un pavor gélido y alienígena que roe las mentes de sus presas y asfixia hasta el valor más incondicional.
                    {"\n"}Ante un horror tan insondable, muchos se vuelven locos o sufren daños neuronales catastróficos.
                    {"\n"}Si tu facción de ejército es Tiránidos, una vez por batalla, en la fase de Mando de cualquiera de los jugadores, si una o más unidades de tu ejército con esta habilidad están en el campo de batalla, puedes desatar el Shadow in the Warp. Cuando lo hagas, cada unidad enemiga en el campo de batalla debe efectuar un chequeo de Conmoción de batalla.
            </Text>
            <Text style={styles.Titulo}>
            REGLA DE DESTACAMENTO DE FLOTA DE INVASIÓN/DETACHMENT RULE
            </Text>
            <Text style={styles.Desc}>
            Si tu Facción de Ejército es Tiránidos, puedes usar esta regla de Destacamento de Flota de Invasión
            </Text>
            <Text style={styles.Titulo}>
            HYPER-ADAPTATIONS
            </Text>
            <Text style={styles.Desc}>
            Cada organismo guerrero de la raza Tiránida está moldeado por la inefable voluntad alienígena de la Mente Colmena.
                    {"\n"}Su carne y quitina son infinitamente mutables y se adaptan a cualquier forma que resulte más letal para la presa.
                    {"\n"}Al comienzo de la primera ronda de batalla, selecciona una de las siguientes Hiperadaptaciones para que esté activa para las unidades Tiránidas de tu ejército hasta el final de la batalla:
            </Text>

            <Text style={styles.Titulo}>
                HYPER-AGGRESSION
            </Text>

            <Text style={styles.Desc}>
                    Cada vez que una miniatura Tiránida con esta Hiperadaptación realice un ataque que tenga como objetivo una unidad enemiga de Monstruos o Vehículos, ese ataque tendrá la habilidad [HITS LETALES].
                </Text>
                <Text style={styles.Titulo}>
                    HIVE PREDATORS
                </Text>
                <Text style={styles.Desc}>
                    Cada vez que un modelo Tiránido con esta Hiperadaptación realice un ataque que tenga como objetivo una unidad de Personaje enemiga, si se consigue un Impacto Crítico, ese ataque tiene la habilidad [PRECISIÓN].
                </Text>
                <Text style={styles.Titulo}>
                    Stratagems
                </Text>
                <Text style={styles.Desc}>
                    Si estás usando la regla de Destacamento de Flota de Invasión, puedes usar estas Estratagemas de Flota de Invasión.
                </Text>
                <Text style={styles.Est}>
                    Regeneracion rapida
                </Text>
                <Text style={styles.Invacion}>
                    INVASION FLEET - BATTLE TACTIC STRATAGEM
                </Text>
                <Text style={styles.DescS}>
                    Las presas miran horrorizadas cómo la quitinosa armadura vuelve a crecer y la carne, los músculos y los tendones se unen como si nunca hubieran sido dañados.
                </Text>
                <Text style={styles.DescS}>
                    <Text style={styles.Azul}>CUÁNDO:</Text> En la fase de Disparo de tu oponente o la fase de Combate, justo después de que una unidad enemiga haya seleccionado sus objetivos.
                    {'\n'}<Text style={styles.Azul}>OBJETIVO:</Text> Una unidad Tyranids de tu ejército seleccionada como objetivo de uno o más ataques de la unidad atacante.
                    {'\n'}<Text style={styles.Azul}>EFECTO:</Text> Hasta el final de la fase, miniaturas de tu unidad tienen la habilidad Habilidad No sentir dolor 6+.
                    {'\n'}Si tu unidad está a distancia de sinapsis de tu ejército, hasta el final de la fase, las miniaturas de tu unidad tienen la habilidad Sentir dolor 5+.
                </Text>
                <Text style={styles.Est}>
                    ADRENAL SURGE
                </Text>
                <Text style={styles.Invacion}>
                    INVASION FLEET - BATTLE TACTIC STRATAGEM
                </Text>
                <Text style={styles.DescS}>
                    Estos organismos guerreros destruyen todo su adrenalina.
                </Text>
                <Text style={styles.DescS}>
                    <Text style={styles.Azul}>CUÁNDO:</Text> Fase de lucha.
                    {'\n'}<Text style={styles.Azul}>OBJETIVO:</Text> Hasta dos unidades tiránidas de tu ejército que estén dentro del Alcance de Sinapsis de tu ejército y sean elegibles para luchar, o otra unidad tiránida de tu ejército que pueda combatir.
                    {'\n'}<Text style={styles.Azul}>EFECTO:</Text> Hasta el fin de la fase, cada vez quevez que una miniatura de una de esas unidades seleccionadas, una tirada para golpear una tirada para golpear no modificada de 5+ supone un Impacto crítico.
                </Text>
                <Text style={styles.Est}>
                    FRENESÍ DE LA MUERTE
                </Text>
                <Text style={styles.Invacion}>
                    INVASION FLEET - BATTLE TACTIC STRATAGEM
                </Text>
                <Text style={styles.DescS}>
                    Los Tiránidos no se preocupan por la autoconservación, arremeten incluso en la muerte.
                </Text>
                <Text style={styles.DescS}>
                    <Text style={styles.Azul}>CUÁNDO:</Text> Fase de combate, justo después de que enemiga haya seleccionado sus objetivos.
                    {'\n'}<Text style={styles.Azul}>OBJETIVO:</Text> Una unidad Tyranids de tu ejército seleccionada como objetivo de uno o más ataques de la unidad atacante.
                    {'\n'}<Text style={styles.Azul}>EFECTO:</Text>Hasta el final de la fase, cada vez que fase, cada vez que una miniatura de tu unidad sea destruida, si ese modelo no ha luchado esta fase, tira un D6: con un 4+, no lo retires del juego.
                    {'\n'} El modelo destruido puede combatir después de que la unidad del modelo atacante haya terminado ataque, y entonces se retira del juego.
                </Text>
                <Text style={styles.Est}>
                    INVASIÓN
                </Text>
                <Text style={styles.Invacion}>
                    INVASION FLEET - BATTLE TACTIC STRATAGEM
                </Text>
                <Text style={styles.DescS}>
                    Los Tiránidos son una avalancha imparable de carne y quitina.
                </Text>
                <Text style={styles.DescS}>
                    <Text style={styles.Azul}>CUÁNDO:</Text> Fase de combate, justo antes de que una unidad de tu ejército se consolide.
                    {'\n'}<Text style={styles.Azul}>OBJETIVO:</Text> Una unidad Tyranids de tu ejército
                    {'\n'}<Text style={styles.Azul}>EFECTO:</Text> Hasta el final de la fase, cada vez que una miniatura de tu unidad Consolidación, puede mover hasta 6" en vez de hasta 3", siempre que tu unidad pueda terminar su movimiento de Consolidación en Coherencia Unidad y dentro del Alcance de Combate de una o más unidades enemigas.
                    {'\n'} Si tu unidad está dentro del Alcance de Sinapsis de tu ejército y no dentro del Alcance de Entablamiento de ninguna unidad enemiga, en lugar de hacer ese movimiento de Consolidación, puede
                </Text>
                <Text style={styles.Est2}>
                    VISIÓN SINÁPTICA
                </Text>
                <Text style={styles.Invacion}>
                    INVASION FLEET - STRATEGIC PLOY STRATAGEM
                </Text>
                <Text style={styles.DescS}> Guiados por los instintos de las bestias líderes, una parte del enjambre puede ser encargado de sus instintos de caza para destruir a un enemigo concreto.
                </Text>
                <Text style={styles.DescS}>
                    <Text style={styles.Azul2}>CUÁNDO:</Text> En tu fase de Mando.
                    {'\n'}<Text style={styles.Azul2}>OBJETIVO:</Text>  Hasta dos unidades tiránidas de tu ejército que estén a distancia de sinapsis de tu ejército, u otra unidad Tiránida de tu ejército.
                    {'\n'}<Text style={styles.Azul2}>EFECTO:</Text> Selecciona una Hiperadaptación. Hasta el final de la ronda de batalla, esa hiperadaptación está activa para esas unidades seleccionadas además de cualquier otra que pueda estar activa para tu ejército.
                    {'\n'}<Text style={styles.Azul2}>Restricciones:</Text>  No puedes seleccionar la misma hiperadaptación que seleccionaste al al comienzo de la primera ronda de batalla.
                </Text>
                <Text style={styles.Est2}>
                    ENDLESS SWARM
                </Text>
                <Text style={styles.Invacion}>
                    INVASION FLEET - STRATEGIC PLOY STRATAGEM
                </Text>
                <Text style={styles.DescS}> A medida que avanza la batalla, más organismos para reforzar los enjambres.
                </Text>
                <Text style={styles.DescS}>
                    <Text style={styles.Azul2}>CUÁNDO:</Text> En tu fase de Mando.
                    {'\n'}<Text style={styles.Azul2}>OBJETIVO:</Text>  Hasta dos unidades Endless Multitude de tu ejército que estén a Alcance de sinapsis de tu ejército, u otra unidad Multitud sin fin de tu ejército.
                    {'\n'}<Text style={styles.Azul2}>EFECTO:</Text> Hasta D3+3 miniaturas destruidas son destruidas a cada una de las unidades seleccionadas.
                </Text>

                <Text style={styles.Titulo}>
                    Mejoras
                </Text>
                <Text style={styles.Desc}>
                    Si estás usando la regla de Destacamento de Flota de Invasión, puedes usar estas Mejoras de Flota de Invasión.
                </Text>
                <Text style={styles.mejoras}>
                    Alienn cunning
                </Text>
                <Text style={styles.DescS}> A Esta bestia líder posee vías neuronales altamente sofisticadas que le permiten identificar estratégicos prioritarios y adaptar la posición guerreros para apoderarse de ellos antes de que el enemigo reconozca su valor.
                    {'\n'} Sólo modelo Tiránido. Después de que ambos jugadores hayan desplegado sus ejércitos, selecciona hasta tres unidades de tu ejército y redespliégalos.
                    {'\n'} Al hacerlo hacerlo, puedes colocar esas unidades en Reservas Estratégicas si si lo deseas, independientemente de cuántas unidades estén ya en Reservas estratégicas.
                </Text>

                <Text style={styles.mejoras}>
                    Adaptacion perfect
                </Text>
                <Text style={styles.DescS}> Esta criatura fue creada con un propósito: para erradicar por completo a los defensores del mundo presa.
                    {'\n'} Sólo modelo Tiránido. Una vez por turno, puedes repetir una tirada de Impacto, una tirada de Herida, una tirada de Daño, una tirada de Avance, una tirada de Carga o una tirada de salvación hecha por el portador.
                </Text>


                <Text style={styles.mejoras}>
                    SYNAPTIC LINCHPIN
                </Text>
                <Text style={{ backgroundColor: '#E5E6E8', color: '#000', fontSize: 18, paddingLeft: 3, paddingRight: 3, paddingBottom: 10 }}> Con una corteza cerebral que palpita con el irresistible poder de la Mente Colmena, este líder actúa como un faro sináptico ardiente para las criaturas menores del del enjambre, para dirigir mejor sus acciones y reaccionar al siempre cambiante estado de la batalla.
                    {'\n'} Sólo modelo Tiránido. Mientras una unidad Tiránida amiga esté a 9" o menos del portador, esa unidad está a distancia de sinapsis de tu ejército.
                </Text>

                <Text style={styles.mejoras}>
                    Adaptabilidad biologica
                </Text>
                <Text style={styles.DescS}> La misma arma rara vez funciona dos veces bestia líder dos veces, ya que su fisiología alienígena se adapta a un ritmo asombroso para contrarrestar los ataques del enemigo.
                    {'\n'}Sólo modelo Tiránido. El portador tiene la habilidad 5+.
                    {'\n'}Al inicio de cualquier turno, si el portador tiene menos que su número inicial de heridas restantes, hasta el final de la batalla, tiene la habilidad de No Sentir Dolor 4+ en su lugar.
                </Text>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {flex: 1, 
        backgroundColor: '#E5E6E8', 
        padding: 5},
        Titulo:{
            color: '#fff', 
            fontWeight: 'bold', 
            backgroundColor: '#2C0069', 
            fontSize: 20, padding: 5, 
            borderTopLeftRadius: 10, 
            borderTopRightRadius: 10, 
            marginTop: 6
        },
        Desc: {fontSize: 18, 
            backgroundColor: '#C5ACE3', 
            color: '#000000', 
            paddingLeft: 3, 
            paddingRight: 3, 
            paddingBottom: 3, 
            borderBottomLeftRadius: 10, 
            borderBottomRightRadius: 10 },
            DescS: {fontSize: 18, 
                backgroundColor: '#E5E6E8',  
                color: '#000000', 
                paddingLeft: 3, 
                paddingRight: 3, 
                paddingBottom: 3, 
                borderBottomLeftRadius: 10, 
                borderBottomRightRadius: 10 },
            Est: {
                color: '#1C594E', 
                fontWeight: 'bold', 
                backgroundColor: '#E5E6E8', 
                fontSize: 20, 
                padding: 5, 
                marginTop: 6, borderTopLeftRadius: 10, 
                borderTopRightRadius: 10,  
                paddingLeft: 3, 
                paddingRight: 3,
            },
            Est2: {
                color: '#0F4D6B', 
                fontWeight: 'bold', 
                backgroundColor: '#E5E6E8', 
                fontSize: 20, 
                padding: 5, 
                marginTop: 6, borderTopLeftRadius: 10, 
                borderTopRightRadius: 10,  
                paddingLeft: 3, 
                paddingRight: 3,
            },
            Invacion:{ fontWeight: 'bold', 
                backgroundColor: '#E5E6E8', 
                color: '#000', 
                fontSize: 18, 
                paddingLeft: 3, 
                paddingRight: 3 },
                Azul:{ color: '#1C594E', 
                    fontWeight: 'bold' },
                    Azul2:{
                        color: '#0F4D6B',
                        fontWeight: 'bold'
                    },
            mejoras:{ color: '#000', 
                fontWeight: 'bold', 
                backgroundColor: '#E5E6E8', 
                fontSize: 20, 
                padding: 5, 
                marginTop: 6, 
                borderTopLeftRadius: 10, 
                borderTopRightRadius: 10, 
                paddingLeft: 3, 
                paddingRight: 3 },
  });