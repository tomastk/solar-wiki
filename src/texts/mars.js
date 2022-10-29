const infoRaw = 'Marte es uno de los cuerpos más explorados de nuestro sistema solar, y es el único planeta al que hemos enviado rovers para recorrer el paisaje alienígena. Actualmente, la NASA tiene dos rovers (Curiosity y Perseverance), un módulo de aterrizaje (InSight) y un helicóptero (Ingenuity) que exploran la superficie de Marte. [br] El rover Perseverance, el rover más grande y avanzado que la NASA ha enviado a otro mundo, aterrizó en Marte el 18 de febrero de 2021, después de un viaje de 203 días atravesando 472 millones de kilómetros. El helicóptero Ingenuity viajó a Marte unido al vientre de Perseverance. Perseverance es una de las tres naves espaciales que llegaron a Marte en 2021. El orbitador Hope de los Emiratos Árabes Unidos llegó el 9 de febrero de 2021. La misión Tianwen-1 de China llegó el 10 de febrero de 2021 e incluye un orbitador, un módulo de aterrizaje, y un rover. Europa e India también tienen naves espaciales que estudian Marte desde la órbita. [br] En mayo de 2021, China se convirtió en la segunda nación en aterrizar con éxito en Marte cuando aterrizó su rover Zhurong Mars. Una flota internacional de ocho orbitadores está estudiando el Planeta Rojo desde arriba, incluidos tres orbitadores de la NASA: 2001 Mars Odyssey, Mars Reconnaissance Orbiter y MAVEN. [br] Estos exploradores robóticos han encontrado muchas pruebas de que Marte era mucho más húmedo y cálido, con una atmósfera más espesa, hace miles de millones de años.'

const popCultureRaw = 'Ningún otro planeta cautivó nuestra imaginación colectiva tanto como Marte. A fines del siglo XIX, cuando la gente observó por primera vez las características similares a canales en la superficie de Marte, muchos especularon que una especie alienígena inteligente residía allí. Esto condujo a numerosas historias sobre marcianos, algunos de los cuales invaden la Tierra, como en el drama de radio de 1938, -La guerra de los mundos-. Según una leyenda urbana perdurable, muchos oyentes creyeron que la historia era una cobertura noticiosa real de una invasión, lo que provocó un pánico generalizado. [br] Desde entonces, innumerables historias han tenido lugar en Marte o han explorado las posibilidades de sus habitantes marcianos. Películas como -Total Recall- (1990 y 2012) nos trasladan a un Marte terraformado ya una colonia en apuros que se queda sin aire. Una colonia marciana y la Tierra tienen una relación espinosa en la serie de televisión y novelas -The Expanse-. [br] Y en la novela de 2014 y su adaptación cinematográfica de 2015, -The Martian-, el botánico Mark Watney está varado solo en el planeta y lucha por sobrevivir hasta que una misión de rescate puede recuperarlo.'

const mars = {
  name: 'Marte',
  distanceToSun: '135M Km',
  timeFromLightToSun: '12.11 mins',
  planetType: 'Terrestre',
  durationOfYear: '687 días',
  infoParagraphs: infoRaw.split('[br]'),
  facts: [
    {
      title: 'Planeta Pequeño',
      content: 'Si el Sol fuera tan alto como una puerta de entrada típica, la Tierra tendría el tamaño de una moneda de diez centavos y Marte sería tan grande como una tableta de aspirina.'
    }, {
      title: 'Cuarta Roca',
      content: 'Marte orbita alrededor de nuestro Sol, una estrella. Marte es el cuarto planeta desde el Sol a una distancia promedio de aproximadamente 228 millones de km.'
    }, {
      title: 'Días largos',
      content: 'Un día en Marte dura un poco más de 24 horas. Marte hace una órbita completa alrededor del Sol (un año en tiempo marciano) en 687 días terrestres.'
    },
    {
      title: 'Terreno Accidentado',
      content: 'Marte es un planeta rocoso. Su superficie sólida ha sido alterada por volcanes, impactos, vientos, movimientos de la corteza y reacciones químicas.'
    },
    {
      title: 'Trae un traje espacial',
      content: 'Marte tiene una atmósfera delgada compuesta principalmente de dióxido de carbono (CO2), argón (Ar), nitrógeno (N2) y una pequeña cantidad de oxígeno y vapor de agua.'
    },
    {
      title: 'Dos lunas',
      content: 'Marte tiene dos lunas llamadas Fobos y Deimos'
    },
    {
      title: 'Muchas Misiones',
      content: 'Varias misiones han visitado este planeta, desde sobrevuelos y orbitadores hasta rovers en la superficie. El primer verdadero éxito de una misión a Marte fue el sobrevuelo del Mariner 4 en 1965. '
    },
    {
      title: 'Lugar dificil para vivir',
      content: 'En este momento, la superficie de Marte no puede albergar vida tal como la conocemos. Las misiones actuales están determinando el potencial de vida pasado y futuro de Marte.'
    },
    {
      title: 'Planeta Oxidado',
      content: 'Marte es conocido como el Planeta Rojo porque los minerales de hierro en el suelo marciano se oxidan, lo que hace que el suelo y la atmósfera se vean rojos.'
    }
  ],
  popCultureParagraphs: popCultureRaw.split('[br]')
}

export default mars
