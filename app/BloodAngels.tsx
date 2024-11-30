import * as React from 'react';
import { Text, ScrollView,} from 'react-native';

export default function BloodAngels () {
    return( 
        <ScrollView style={{ flex: 1, backgroundColor: '#ff9f9f', padding: 7}}>
            <Text style={{textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#ff0000', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>ÁNGELES SANGRIENTOS – HIJOS DE SANGUINIUS
            </Text>
            <Text style={{ fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
            Los hijos del primarca alado Sanguinius, los Ángeles Sangrientos, descienden a la batalla con alas de fuego para ponerse entre los sirvientes del Emperador y las hordas herejes y alienígenas que buscan destruirlos. Maestros del asalto rápido, la ofensiva mecanizada y el golpe aéreo veloz, han forjado un legado de victorias que se extiende a lo largo de los siglos.

            Si la facción de tu ejército es Adeptus Astartes, puedes usar esta regla de destacamento "Hijos de Sanguinius".
            </Text>
            {/** ARMY RULE/ DEMONIO DEL CAOS */}
            <br/>
           {/** ------------------------------------ 1 ------------------------------------ */}
           <Text style={{textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#ff0000', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                Ángeles Sangrientos - Hijos de Sanguinius
            </Text>
            {"\n"}<Text style={{fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3 }}>
                ■ Si la facción de tu ejército es Adeptus Astartes, puedes usar esta regla de destacamento "Hijos de Sanguinius".
            </Text>
            {"\n"}<Text style={{fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3 }}>
                ■ Tu ejército puede incluir unidades de los Ángeles Sangrientos, pero no puede incluir unidades de Adeptus Astartes de otro capítulo.
            </Text>
            {"\n"}<Text style={{fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3 }}>
                ■ La Sed Roja: En batalla, esta rabia los impulsa hacia el enemigo y otorga gran fuerza a sus golpes.
            </Text>
            {"\n"}<Text style={{fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                ■ Cada vez que una unidad de Adeptus Astartes de tu ejército haga un movimiento de carga en este turno, hasta el final de la fase, se añade 1 a la característica de Fuerza y Ataques de las armas cuerpo a cuerpo.
            </Text>
            <br/>

            <Text style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: 20, backgroundColor: '#ff0000', color: '#fff', textTransform: 'uppercase', textAlign: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                Estratagemas de los Ángeles Sangrientos
            </Text>
            {"\n"}<Text style={{fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3 }}>
                ■ Sacrificio del Ángel: Cada vez que una unidad amiga de Adeptus Astartes ataque a la unidad enemiga que acaba de destruir tu unidad de Personaje, puedes volver a tirar la tirada de Impacto.
            </Text>
            {"\n"}<Text style={{fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3 }}>
                ■ Armadura del Desdén: Hasta el final de la fase, cada vez que un ataque apunte a tu unidad, empeora la Penetración de Armadura de ese ataque en 1.
            </Text>
            {"\n"}<Text style={{fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3 }}>
                ■ Asalto Agresivo: Hasta el final de la fase, cada vez que un modelo de tu unidad haga un movimiento de Consolidación, puede moverse hasta 6" en lugar de hasta 3".
            </Text>
            <br/>

            <Text style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: 20, backgroundColor: '#ff0000', color: '#fff', textTransform: 'uppercase', textAlign: 'center', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                Mejoras de los Ángeles Sangrientos
            </Text>
            {"\n"}<Text style={{fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3 }}>
                ■ Artesano de la Guerra: Aumenta la Penetración de Armadura de las armas del portador en 1, y el portador tiene una característica de Salvación de 2+.
            </Text>
            {"\n"}<Text style={{fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3 }}>
                ■ Visión de la Muerte: Mientras una unidad enemiga esté dentro del Rango de Compromiso de tu unidad, reduce a la mitad la característica de Control de Objetivos de los modelos de esa unidad.
            </Text>
            <br/>

            <Text style={{textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#ff0000', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                Astorath
            </Text>
            <Text style={{ fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3 }}>
                ■ Astorath es un Héroe Épico de los Ángeles Sangrientos que lleva consigo el hacha del ejecutor.
            </Text>
            {"\n"}<Text style={{fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3 }}>
                ■ Sus habilidades incluyen "Redentor de los Perdidos" y "Masa de la Perdición".
            </Text>
            {"\n"}<Text style={{fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3 }}>
                ■ Mientras esté liderando una unidad, cada vez que un modelo de esa unidad sea destruido por un ataque cuerpo a cuerpo, si ese modelo no ha peleado en esta fase, puede luchar después de que la unidad atacante haya terminado sus ataques.
            </Text>
            <br/>

            <Text style={{textTransform: 'uppercase',textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#ff0000', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                Baal Predator
            </Text>
            <Text style={{ fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3 }}>
                ■ El Baal Predator es un vehículo poderoso que se especializa en fuego rápido y ofensivas blindadas.
            </Text>
            {"\n"}<Text style={{fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3 }}>
                ■ Equipado con un cañón de tormenta Baal y una ametralladora pesada, este vehículo es capaz de asaltar al enemigo con gran potencia.
            </Text>
            {/** ARMY RULE/ DEMONIO DEL CAOS */}

            <br/>
            <Text style={{textTransform: 'uppercase', textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#ff0000', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                Estratagemas – Stratagems
            </Text>
            <Text style={{ fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3 }}>
                Si estás usando la regla de Destacamento "Hijos de Sanguinius", puedes usar estas Estratagemas de los Hijos de Sanguinius.
            </Text>

            {/**------------------------------------------- 1 ------------------------------------------- */}
            <Text style={{ fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3 }}>
                {"\n"}<Text style={{ fontStyle: 'italic', textTransform: 'uppercase', textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#c03f3f', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                SACRIFICIO DEL ÁNGEL.
                {"\n"} <Text style={{ fontSize: 16, textTransform: 'uppercase', textAlign: 'center', color: "#fff", fontWeight: 'bold' }}>HIJOS DE SANGUINIUS – ESTRATAGEMA DE HECHO ÉPICO</Text>
                </Text> {"\n"}
                Los Ángeles Sangrientos se pondrían encantados en el peligro para proteger a otros, ejemplificando el sacrificio de Sanguinius.
                {"\n"} <Text style={{ textTransform: 'uppercase', fontSize: 19, fontStyle: "italic" }}> CUANDO:</Text> Cualquier fase.
                {"\n"} <Text style={{ textTransform: 'uppercase', fontSize: 19, fontStyle: "italic" }}> OBJETIVO:</Text> Una unidad de Personaje de Adeptus Astartes de tu ejército que acaba de ser destruida.
                {"\n"} <Text style={{ textTransform: 'uppercase', fontSize: 19, fontStyle: "italic" }}> EFECTO:</Text> Hasta el final de la batalla, cada vez que una unidad amiga de Adeptus Astartes realice un ataque dirigido a la unidad enemiga que acaba de destruir tu unidad de Personaje, puedes volver a tirar la tirada de Impacto.
            </Text>

            {/**------------------------------------------- 2 ------------------------------------------- */}
            <Text style={{ fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3 }}>
                {"\n"}<Text style={{ fontStyle: 'italic', textTransform: 'uppercase', textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#c03f3f', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                ARMADURA DEL DESDÉN.
                {"\n"} <Text style={{ fontSize: 16, textTransform: 'uppercase', textAlign: 'center', color: "#fff", fontWeight: 'bold' }}>HIJOS DE SANGUINIUS – ESTRATAGEMA TÁCTICA DE BATALLA</Text>
                </Text> {"\n"}
                La beligerancia de los Adeptus Astartes combinada con su fisiología transhumana los convierte en enemigos inflexibles para enfrentar.
                {"\n"} <Text style={{ textTransform: 'uppercase', fontSize: 19, fontStyle: "italic" }}> CUANDO:</Text> Fase de Disparo de tu oponente o la fase de Pelea, justo después de que una unidad enemiga haya seleccionado sus objetivos.
                {"\n"} <Text style={{ textTransform: 'uppercase', fontSize: 19, fontStyle: "italic" }}> OBJETIVO:</Text> Una unidad de Adeptus Astartes de tu ejército que haya sido seleccionada como objetivo de uno o más de los ataques de la unidad enemiga.
                {"\n"} <Text style={{ textTransform: 'uppercase', fontSize: 19, fontStyle: "italic" }}> EFECTO:</Text> Hasta el final de la fase, cada vez que un ataque apunte a tu unidad, empeora la característica de Penetración de Armadura de ese ataque en 1.
            </Text>

            {/**------------------------------------------- 3 ------------------------------------------- */}
            <Text style={{ fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3 }}>
                {"\n"}<Text style={{ fontStyle: 'italic', textTransform: 'uppercase', textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#c03f3f', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                ONSLAUGHT AGRESIVO.
                {"\n"} <Text style={{ fontSize: 16, textTransform: 'uppercase', textAlign: 'center', color: "#fff", fontWeight: 'bold' }}>HIJOS DE SANGUINIUS – ESTRATAGEMA TÁCTICA DE BATALLA</Text>
                </Text> {"\n"}
                Los Hijos de Sanguinius siempre empujan hacia nuevos enemigos, la sed de sangre cantando en sus venas desatada en un dinamismo controlado.
                {"\n"} <Text style={{ textTransform: 'uppercase', fontSize: 19, fontStyle: "italic" }}> CUANDO:</Text> Fase de Pelea.
                {"\n"} <Text style={{ textTransform: 'uppercase', fontSize: 19, fontStyle: "italic" }}> OBJETIVO:</Text> Una unidad de Adeptus Astartes de tu ejército, justo antes de que esa unidad Consolide.
                {"\n"} <Text style={{ textTransform: 'uppercase', fontSize: 19, fontStyle: "italic" }}> EFECTO:</Text> Hasta el final de la fase, cada vez que un modelo de tu unidad haga un movimiento de Consolidación, puede moverse hasta 6" en lugar de hasta 3", siempre que tu unidad termine ese movimiento de Consolidación en Coherencia de Unidad y dentro del Rango de Compromiso de una o más unidades enemigas.
            </Text>

            {/**------------------------------------------- 4 ------------------------------------------- */}
            <Text style={{ fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3 }}>
                {"\n"}<Text style={{ fontStyle: 'italic', textTransform: 'uppercase', textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#c03f3f', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                ENFURECIDO RAMPAGE.
                {"\n"} <Text style={{ fontSize: 16, textTransform: 'uppercase', textAlign: 'center', color: "#fff", fontWeight: 'bold' }}>HIJOS DE SANGUINIUS – ESTRATAGEMA TÁCTICA DE BATALLA</Text>
                </Text> {"\n"}
                En tiempos de gran desesperación, la furia y ferocidad pueden ser los aliados más fuertes de un guerrero.
                {"\n"} <Text style={{ textTransform: 'uppercase', fontSize: 19, fontStyle: "italic" }}> CUANDO:</Text> Fase de Pelea.
                {"\n"} <Text style={{ textTransform: 'uppercase', fontSize: 19, fontStyle: "italic" }}> OBJETIVO:</Text> Una unidad de Adeptus Astartes de tu ejército que no haya sido seleccionada para pelear en esta fase.
                {"\n"} <Text style={{ textTransform: 'uppercase', fontSize: 19, fontStyle: "italic" }}> EFECTO:</Text> Hasta el final de la fase, las armas cuerpo a cuerpo equipadas por los modelos de tu unidad tienen las habilidades [LANZA] y [Golpes letales].
            </Text>
            <br/>
            {/** STRATAGEMS */}

            <br/>
                <Text style={{ textTransform: 'uppercase', textAlign: 'center', color: '#fff', fontWeight: 'bold', backgroundColor: '#ff0000', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
    HIJOS DE SANGUINIUS – MEJORAS DE LOS ÁNGELES SANGRIENTOS
</Text> 
{/** ENHANCEMENTS */}
<Text style={{ fontSize: 18, backgroundColor: '#c03f3f', color: '#fff', paddingLeft: 3, paddingRight: 3, paddingBottom: 3, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
    Si estás usando la regla de Destacamento de Hijos de Sanguinius, puedes usar estas Mejoras de los Hijos de Sanguinius.
    {/** ---------------------------------------- 1 ---------------------------------------- */}
    {"\n"}<Text style={{ fontStyle: 'italic', textTransform: 'uppercase', textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
        ARTESANO DE LA GUERRA
    </Text>
    {"\n"}Este guerrero es un verdadero artista tanto en el campo de batalla como fuera de él. Sus talentos se reflejan en la exquisita elaboración de su equipo de guerra, ya que insiste en forjar personalmente sus armas de guerra.
    {"\n"}<Text style={{ fontWeight: "bold", fontStyle: 'italic' }}>Modelo de Adeptus Astartes únicamente.</Text> Mejora la característica de Penetración de Armadura de las armas del portador en 1, y el portador tiene una característica de Salvación de 2+.
    <br/>
    {/** ---------------------------------------- 2 ---------------------------------------- */}
    {"\n"}<Text style={{ fontStyle: 'italic', textTransform: 'uppercase', textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
        VISAGE DE LA MUERTE
    </Text>
    {"\n"}Esta máscara exquisitamente elaborada es una cosa de belleza oscura para los Ángeles Sangrientos y un signo de la perdición inminente para sus enemigos. La expresión inmutable de la máscara inspira miedo e incertidumbre incluso en los enemigos más confiados.
    {"\n"}<Text style={{ fontWeight: "bold", fontStyle: 'italic' }}>Modelo de Adeptus Astartes únicamente.</Text> Mientras una unidad enemiga (excepto Monstruos y Vehículos) esté dentro del Rango de Compromiso de la unidad del portador, reduce a la mitad la característica de Control de Objetivos de los modelos de esa unidad.
    <br/>
    {/** ---------------------------------------- 3 ---------------------------------------- */}
    {"\n"}<Text style={{ fontStyle: 'italic', textTransform: 'uppercase', textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
        ARCHÁNGEL’S SHARD
    </Text>
    {"\n"}Cuando Sanguinius luchó contra Horus, su magnífica espada se rompió contra la coraza profana del Warmaster. Los fragmentos fueron recogidos y se forjaron nuevas espadas para incorporarlos, cada una de ellas regalada a un capítulo sucesor diferente.
    {"\n"}<Text style={{ fontWeight: "bold", fontStyle: 'italic' }}>Modelo de Adeptus Astartes únicamente.</Text> Las armas cuerpo a cuerpo del portador tienen las habilidades [ANTI-CAOS 5+] y [LANZA].
    <br/>
    {/** ---------------------------------------- 4 ---------------------------------------- */}
    {"\n"}<Text style={{ fontStyle: 'italic', textTransform: 'uppercase', textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: 24, padding: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
        ICONO DEL ÁNGEL
    </Text>
    {"\n"}Confiado a aquel cuyo fe en el primogenitor es profundo, el Icono del Ángel toma la forma de un pequeño santuario sobre la mochila del portador. Al mostrarlo, este guerrero recuerda a sus hermanos los herejes que huyeron tras derribar al Ángel, instándolos a no dejar escapar al enemigo.
    {"\n"}<Text style={{ fontWeight: "bold", fontStyle: 'italic' }}>Modelo de Adeptus Astartes únicamente.</Text> Cada vez que una unidad enemiga (excepto Monstruos y Vehículos) dentro del Rango de Compromiso de la unidad del portador sea seleccionada para Retroceder, los modelos de esa unidad deben realizar pruebas de Escape Desesperado como si su unidad estuviera Aterrada. Al hacerlo, si esa unidad enemiga también está Aterrada por otros medios, resta 1 de cada una de esas pruebas de Escape Desesperado.
</Text>
{/** ENHANCEMENTS */}
        </ScrollView>
    );
}
