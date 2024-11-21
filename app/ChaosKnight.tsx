import { Text, ScrollView, StyleSheet} from 'react-native';

export default function ChaosKnight (){
    return(
        <ScrollView style={styles.Container}>
            <Text style={styles.Titulo}>CABALLEROS DEL CAOS
                {"\n"}<Text style={styles.Titulo}>REGLAS DEL EJÉRCITO</Text>
            </Text>
            <Text style={styles.Text}>
            Donde los Caballeros del Caos pisan, los cielos se oscurecen de forma antinatural y el temor del warp impregna el campo de batalla. Nadie es inmune a su toque sombrío, ya que aquellos que no quedan paralizados por el miedo y la desesperación son atormentados con alucinaciones y llevados a la locura.
            </Text>
            {/** ARMY RULE/ CABALLEROS DEL CAOS*/}
            <br/>
            {/** ------------------------------------ 1 ------------------------------------ */}
            <Text style={styles.Titulo}>HARBINGERS DEL MIEDO
            </Text>
            <Text style={styles.Text}>
            Si tu facción de ejército es Chaos Knights, cada modelo de tu ejército con esta habilidad obtiene un bono dependiendo de las habilidades activas de miedo en tu ejército (ver abajo). Una vez que una habilidad de miedo esté activa para tu ejército, esa habilidad se aplicará hasta el final de la batalla.
            </Text>
            {"\n"} <Text style={styles.Text}>
            ■ RONDA DE BATALLA 1 EN ADELANTE
            </Text>
            {"\n"} <Text style={styles.Text}>
            Desde la primera ronda de batalla en adelante, la habilidad Desesperación estará activa para tu ejército:
            {"\n"} <Text style={styles.Negritas}>DESESPERACIÓN (AURA)</Text>
            {"\n"} Mientras una unidad enemiga esté dentro de <Text style={{fontStyle: 'italic'}}>12"</Text> de este modelo, cada vez que esa unidad enemiga realice una prueba de <Text style={{fontStyle:'italic'}}>Battle-shock</Text> o de liderazgo, resta 1 a la prueba.
            </Text>
            {"\n"} <Text style={styles.Text}>
            ■ RONDA DE BATALLA 3 EN ADELANTE
            </Text>
            {"\n"} <Text style={styles.Text}>
            Desde la tercera ronda de batalla en adelante, la habilidad Doom y Oscuridad estará activa para tu ejército:
            {"\n"} <Text style={styles.Negritas}>DOOM Y OSCURIDAD
            </Text>
            {"\n"} ► Cada vez que este modelo realice un ataque, si el objetivo está bajo los efectos de <Text style={{fontStyle:'italic'}}>Battle-shock</Text>, suma 1 al resultado de Herida.
            {"\n"} ► Cada vez que un ataque apunte a este modelo, si la unidad que ataca está bajo los efectos de <Text style={{fontStyle:'italic'}}>Battle-shock</Text>, resta 1 a la tirada de Impacto.
            </Text>
            {/** HARBINGERS DEL MIEDO*/}
            <br/>
           { /**------------------------------------ 2 ------------------------------------  */}
           <Text style={styles.Titulo}>CAMINANTE SUPERPESADO
           </Text>
            <Text style={styles.Text}>
            Cada vez que un modelo con esta habilidad realice un movimiento Normal, Avance o Retroceso, puede moverse sobre modelos (excluyendo modelos Titanic) y elementos del terreno que tengan 4" o menos de altura como si no estuvieran allí.
            </Text> {/** CAMINANTE SUPER PESADO */}
            <br/>
            { /**------------------------------------ 3 ------------------------------------  */}
            <Text style={styles.Titulo}>CABALLEROS MALDITOS (DREADBLADES)
           </Text>
            <Text style={styles.Text}>
            Los Dreadblades a menudo vagan por la galaxia, tallando un camino de destrucción y masacrando enemigos junto a otras fuerzas del Caos cuando les place.
            {"\n"} Si cada modelo en tu ejército tiene la palabra clave <Text style={{fontStyle: 'italic'}}>Chaos</Text>, puedes incluir un modelo Titanic Chaos Knight o hasta 3 modelos War Dog en tu ejército, incluso si no tienen la palabra clave de Facción que seleccionaste en el paso de Selección de Facción de Ejército. Ninguno de estos modelos puede ser tu Señor de la Guerra, y no se les puede otorgar mejoras.
            </Text> {/** CABALLEROS MALDITOS (DREADBLADES) */}
            <br/>
            {/**------------------------------- REGLA DEL DESTACAMENTO ------------------------------- */}
            <Text style={styles.Titulo}>CABALLEROS DEL CAOS – TRAITORIS LANCE
                {"\n"} <Text style={styles.Titulo}>REGLA DEL DESTACAMENTO</Text>
           </Text>
           <Text style={styles.Text}>
           <Text style={styles.Titulo}>FORJADO EN EL TERROR (AURA)</Text>
           {"\n"}Los Caballeros del Caos son sirvientes de la sombra y el terror; dondequiera que caminen, el miedo y la locura se extienden.
           {"\n"} En la fase de Battle-shock de tu oponente, si una unidad enemiga que está por debajo de su Fuerza Inicial está dentro de 12" de un modelo Chaos Knight de tu ejército, esa unidad enemiga debe realizar una prueba de Battle-shock. Para los propósitos de esta habilidad, si una unidad tiene una Fuerza Inicial de 1, se considera por debajo de su Fuerza Inicial si ha perdido una o más heridas.
           {"\n"}{"\n"} <Text style={{textTransform: 'uppercase', fontStyle: 'italic', fontSize:19, fontWeight: 'bold'}}>NOTA DEL DISEÑADOR</Text>: Esto significa que todas las unidades enemigas dentro del rango de esta habilidad de Aura que hayan perdido uno o más modelos deben realizar una prueba de <Text style={{fontStyle: 'italic'}}>Battle-shock</Text> en la fase de Comando de tu oponente, no solo aquellas que están por debajo de la mitad de su fuerza.
            </Text> {/** FORJADO EN EL TERROR (AURA)*/}
            <br/>
            {/**------------------------------- MEJORAS ------------------------------- */}
            <Text style={styles.Titulo}>MEJORAS – ENHANCEMENTS
           </Text>
           <Text style={styles.Text}>
           Si estás usando la regla del Destacamento Lance Traitoris, puedes utilizar estas Mejoras del Lance Traitoris.
                {"\n"}{"\n"}<Text style={styles.Titulo}>SEÑOR DEL MIEDO</Text>
                    {"\n"}<Text style={styles.Text}>
                     Este tiránico Caballero es el epítome del poder del miedo, infundiendo tanto terror en sus secuaces como en el enemigo, asegurando una obediencia inquebrantable.
                    {"\n"}Solo modelo Chaos Knight. Al inicio de la fase de Combate, puedes seleccionar una unidad enemiga dentro del rango de Compromiso del portador; esa unidad enemiga debe realizar una prueba de Battle-shock.
                </Text> {/** SEÑOR DEL MIEDO*/}
                {"\n"}{"\n"}<Text style={styles.Titulo}>AURA DEL TERROR</Text>
                    {"\n"}<Text style={styles.Text}>
                    Este imponente Caballero está envuelto en tentáculos de energía warp que acarician las mentes de cualquier enemigo que se acerque, llevando a aquellos que son tocados a un estado de miedo abyecto. Dondequiera que este Caballero camine, esta aura de terror impregna y corrompe la tierra hasta que pueda ser purificada.
                    {"\n"}Solo modelo Chaos Knight. Si controlas un marcador de objetivo al final de tu fase de Comando, y el portador está dentro del rango de ese marcador de objetivo, ese marcador de objetivo se considera Tainted y permanece bajo tu control incluso si no tienes modelos dentro de su rango, hasta que tu oponente lo controle al inicio o final de cualquier turno. Además, mientras un marcador de objetivo esté Tainted y bajo tu control y la habilidad Desesperación esté activa para tu ejército, ese marcador de objetivo tiene la habilidad Desesperación como si fuera un modelo Chaos Knight de tu ejército (resta 1 a las pruebas de Battle-shock y Liderazgo realizadas por unidades enemigas dentro de 12" de él).
                </Text> {/** AURA DEL TERROR*/}
                {"\n"}{"\n"}<Text style={styles.Titulo}>LA MARCA DEL TRAIDOR</Text>
                    {"\n"}<Text style={styles.Text}>
                    Las oscuras hazañas y la heráldica manchada de sangre de este Caballero del Caos son susurradas en todas partes. Los rumores se extienden de que enfrentarlo es enfrentarse a una muerte dolorosa. Cada blasón en su casco proclama las atrocidades cometidas por el portador, y solo mirarlo provoca un terror antinatural y pesadillas abrumadoras.
                    {"\n"}Solo modelo Chaos Knight. La habilidad Doom y Oscuridad está activa para el portador desde la primera ronda de batalla, en lugar de desde la tercera.
                </Text> {/** LA MARCA DEL TRAIDOR*/}
            </Text> {/** Mejoras*/}
            <br/>
            {/**------------------------------- ESTRATAGEMAS ------------------------------- */}
            <Text style={styles.Titulo}>ESTRATAGEMAS DEL TRAITORIS LANCE – STRATAGEMS
           </Text>
           <Text style={styles.Text}>
           Si estás usando la regla del Destacamento Lance Traitoris, puedes usar estas Estratagemas del Lance Traitoris
                {"\n"}{"\n"}<Text style={styles.Titulo}>PERROS DEL MIEDO
                   {"\n"} <Text style={styles.Titulo}>ESTRATAGEMA TÁCTICA DE BATALLA DEL TRAITORIS LANCE</Text>
                </Text>
                    {"\n"}<Text style={styles.Text}>
                    Los pilotos de War Dog rodean a sus víctimas aterrorizadas y luego atacan en masa ferozmente.
                    {"\n"} <Text style={styles.Aparte}> CUANDO:</Text> Al inicio de tu fase de Disparo o de Combate.
                    {"\n"}<Text style={styles.Aparte}> OBJETIVO</Text> Dos o más unidades War Dog de tu ejército y una unidad enemiga que sea un objetivo elegible para cada una de esas unidades War Dog seleccionadas.
                    {"\n"} <Text style={styles.Aparte}> EFECTO</Text> Hasta el final de la fase, las unidades War Dog seleccionadas solo pueden atacar esa unidad enemiga, pero todas las armas equipadas por esos modelos War Dog obtienen la habilidad <Text style={{fontStyle:'italic', textTransform: 'uppercase'}}>GOLPES SOSTENIDOS 1</Text>. Además, si esa unidad enemiga está bajo los efectos de <Text style={{fontStyle:'italic'}}>Battle-shock</Text>, hasta el final de la fase, cada vez que un modelo War Dog seleccionado realice un ataque contra esa unidad enemiga, una tirada de impacto sin modificar de 5+ cuenta como un Impacto Crítico.
                </Text> {/** PERROS DEL MIEDO*/}

                {"\n"}{"\n"}<Text style={styles.Titulo}>DESDÉN POR LOS DÉBILES
                   {"\n"} <Text style={styles.Titulo}>ESTRATAGEMA TÁCTICA DE BATALLA DEL TRAITORIS LANCE</Text>
                </Text>
                    {"\n"}<Text style={styles.Text}>
                    Los pilotos de los Caballeros del Caos se niegan a ceder mientras queden enemigos por matar, ignorando despectivamente a aquellos que sucumben al miedo.
                    {"\n"} <Text style={styles.Aparte}> CUANDO:</Text> En la fase de Combate, justo después de que una unidad enemiga haya seleccionado sus objetivos.
                    {"\n"}<Text style={styles.Aparte}> OBJETIVO</Text> Una unidad de Chaos Knights de tu ejército que haya sido seleccionada como objetivo de uno o más ataques de la unidad atacante.
                    {"\n"} <Text style={styles.Aparte}> EFECTO</Text> Hasta el final de la fase, tu modelo obtiene la habilidad <Text style={{fontStyle:'italic'}}>No Hay Dolor 6+</Text>, y la habilidad <Text style={{fontStyle:'italic'}}>No Hay Dolor 5+</Text> contra ataques realizados por modelos bajo los efectos de <Text style={{fontStyle:'italic'}}>Battle-shock</Text>.
                </Text> {/** DESDÉN POR LOS DÉBILES*/}

                {"\n"}{"\n"}<Text style={styles.Titulo}>SOMBRAS DE TERROR
                   {"\n"} <Text style={styles.Titulo}>ESTRATAGEMA DE EQUIPO DE GUERRA DEL TRAITORIS LANCE</Text>
                </Text>
                    {"\n"}<Text style={styles.Text}>
                    Gritando con hambre fantasmal, entidades demoníacas descienden en un torbellino alado de sombras para desgarrar las almas de aquellos enemigos que muestran incluso un momento de miedo. Los raptores de almas desgarran a sus víctimas y, mientras se alimentan, canalizan esa fuerza vital para regenerar el daño de batalla o curar al piloto del Caballero en el que estas criaturas anidan.
                    {"\n"} <Text style={styles.Aparte}> CUANDO:</Text> Cualquier fase, justo después de que una unidad enemiga falle una prueba de Battle-shock.
                    {"\n"}<Text style={styles.Aparte}> OBJETIVO</Text> Una unidad Chaos Knights de tu ejército que esté a 12" de esa unidad enemiga.
                    {"\n"} <Text style={styles.Aparte}> EFECTO</Text> Tira seis dados D6. Por cada 4+, esa unidad enemiga sufre 1 herida mortal y este modelo recupera hasta 1 herida perdida.
                </Text> {/** SOMBRAS DE TERROR*/}
                
                {"\n"}{"\n"}<Text style={styles.Titulo}>UNA CORREA LARGA
                   {"\n"} <Text style={styles.Titulo}>ESTRATAGEMA ESTRATÉGICA DEL TRAITORIS LANCE</Text>
                </Text>
                    {"\n"}<Text style={styles.Text}>
                    Los War Dogs de los Chaos Knights temen más a sus señores que al enemigo, y obedecen bien a sus amos, pues conocen el precio de la desobediencia o la deslealtad.
                    {"\n"} <Text style={styles.Aparte}> CUANDO:</Text> En tu fase de Comando.
                    {"\n"}<Text style={styles.Aparte}> OBJETIVO</Text> Un modelo Abhorrent de tu ejército y hasta tres modelos War Dog de tu ejército.
                    {"\n"} <Text style={styles.Aparte}> EFECTO</Text> Hasta el inicio de tu próxima fase de Comando, esos modelos War Dog cuentan como estando dentro del rango de cualquier habilidad de Aura que tenga ese modelo Abhorrent.
                </Text> {/** UNA CORREA LARGA*/}

                {"\n"}{"\n"}<Text style={styles.Titulo}>CABALLEROS DE LAS SOMBRAS
                   {"\n"} <Text style={styles.Titulo}>ESTRATAGEMA DE HAZAÑA ÉPICA DEL TRAITORIS LANCE</Text>
                </Text>
                    {"\n"}<Text style={styles.Text}>
                    Como fantasmas oscuros, algunos Chaos Knights pueden moverse a través de paredes sólidas sin impedimentos.
                    {"\n"} <Text style={styles.Aparte}> CUANDO:</Text> En tu fase de Movimiento o de Carga.
                    {"\n"}<Text style={styles.Aparte}> OBJETIVO</Text> Hasta dos modelos War Dog de tu ejército o un modelo Titanic Chaos Knight de tu ejército.
                    {"\n"} <Text style={styles.Aparte}> EFECTO</Text> Hasta el final de la fase, los modelos seleccionados pueden moverse horizontalmente a través de modelos y elementos del terreno como si no estuvieran allí.
                </Text> {/** CABALLEROS DE LAS SOMBRAS*/}

                {"\n"}{"\n"}<Text style={styles.Titulo}>ESCUDO DIABÓLICO
                   {"\n"} <Text style={styles.Titulo}>ESTRATAGEMA DE EQUIPO DE GUERRA DEL TRAITORIS LANCE</Text>
                </Text>
                    {"\n"}<Text style={styles.Text}>
                    La sangre ectoplasmática fluye caliente a través de conductos resplandecientes mientras el Chaos Knight alimenta de poder a sus emisores de escudo.
                    {"\n"} <Text style={styles.Aparte}> CUANDO:</Text> En la fase de Disparo de tu oponente, justo después de que una unidad enemiga haya seleccionado sus objetivos.
                    {"\n"}<Text style={styles.Aparte}> OBJETIVO</Text> Una unidad de Chaos Knights de tu ejército que haya sido seleccionada como objetivo de uno o más ataques de la unidad atacante.
                    {"\n"} <Text style={styles.Aparte}> EFECTO</Text> Hasta el final de la fase, ese modelo Chaos Knights tiene una salvación invulnerable de 4+ contra ataques a distancia.
                </Text> {/** ESCUDO DIABÓLICO*/}

            </Text> {/** Estratagemas*/}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    Container:{ flex: 1, backgroundColor: '#c7b4a5', padding: 7},
    Titulo:{textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#5e4646', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 },
    Text: { fontSize: 18, backgroundColor: '#8a7371', color: '#000', paddingLeft: 3, paddingRight: 3, paddingBottom: 3, borderBottomLeftRadius: 10, borderBottomRightRadius: 10},
    Negritas: {fontStyle:'italic', fontWeight: 'bold', textTransform: 'uppercase', fontSize:19},
    Aparte: {textTransform: 'uppercase', fontSize: 19, fontStyle: "italic", fontWeight: 'bold'},

});