const infoRaw = 'Jupiter tiene un largo historial de sorpresas para los científicos, desde 1610, cuando Galileo Galilei encontró las primeras lunas más allá de la Tierra. Ese descubrimiento cambió la forma de ver el universo. [br] Jupiter es, con diferencia, el planeta más grande del sistema solar, con más del doble de masa que todos los demás planetas juntos. Las conocidas rayas y remolinos de Jupiter son en realidad nubes frías y ventosas de amoníaco y agua, que flotan en una atmósfera de hidrógeno y helio. La emblemática Gran Mancha Roja de Jupiter es una gigantesca tormenta más grande que la Tierra que ha hecho estragos durante cientos de años. Una nave espacial, el orbitador Juno de la NASA, explora actualmente este mundo gigante.'

const popCultureRaw = 'Jupiter, el planeta más grande de nuestro sistema solar, también tiene una gran presencia en la cultura popular, incluyendo muchas películas, programas de televisión, videojuegos y cómics. Jupiter fue un destino notable en el espectáculo de ciencia ficción de los hermanos Wachowski "Jupiter Ascending", mientras que varias lunas jovianas sirven de escenario para "Cloud Atlas", "Futurama", "Power Rangers" y "Halo", entre muchas otras. En la película "Hombres de Negro", cuando el agente J -interpretado por Will Smith- menciona que creía que una de sus profesoras de la infancia era de Venus, el agente K -interpretado por Tommy Lee Jones- responde que en realidad es de una de las lunas de Jupiter.'

const jupiter = {
  name: 'Jupiter',
  distanceToSun: '460M km',
  timeFromLightToSun: '41 mins',
  planetType: 'Gaseoso',
  durationOfYear: '4333 días',
  infoParagraphs: infoRaw.split('[br]'),
  facts: [
    {
      title: 'El planeta más grande',
      content: 'Once Tierras podrían caber en el ecuador de Júpiter. Si la Tierra tuviera el tamaño de una uva, Júpiter tendría el tamaño de una pelota de baloncesto.'
    }, {
      title: 'Quinto planeta desde nuestra estrella',
      content: 'Júpiter orbita a unos 778 millones de kilómetros o 5,2 Unidades Astronómicas (UA) de nuestro Sol (la Tierra está a una UA del Sol).'
    }, {
      title: 'Días cortos, años largos',
      content: 'Júpiter gira una vez cada 10 horas aproximadamente (un día joviano), pero tarda unos 12 años terrestres en completar una órbita del Sol (un año joviano)..'
    },
    {
      title: '¿Qué hay en el interior?',
      content: 'Júpiter es un gigante gaseoso, por lo que carece de una superficie similar a la de la Tierra. Si tiene un núcleo interno sólido, es probable que sólo tenga el tamaño de la Tierra.'
    },
    {
      title: 'Planeta gigante, elementos livianos',
      content: 'La atmósfera de Júpiter está formada principalmente por hidrógeno (H2) y helio (He).'
    },
    {
      title: 'Muchas lunas y anillos',
      content: 'Jupiter tiene más de 75 lunas. En 1979, la misión Voyager descubrió el débil sistema de anillos de Júpiter. Los cuatro planetas gigantes de nuestro sistema solar tienen sistemas de anillos.'
    },
    {
      title: '¿Ingredientes para la vida?',
      content: 'Jupiter no puede albergar vida tal y como la conocemos. Pero algunas de las lunas de Júpiter tienen océanos bajo su corteza que podrían albergar vida.'
    },
    {
      title: 'Explorando Jupiter',
      content: 'Nueve naves espaciales han visitado Júpiter. Siete pasaron volando y dos han orbitado el gigante gaseoso. Juno, la más reciente, llegó a Júpiter en 2016.'
    },
    {
      title: 'Super Tormenta',
      content: 'La Gran Mancha Roja de Júpiter es una gigantesca tormenta que tiene aproximadamente el doble del tamaño de la Tierra y que lleva más de un siglo de actividad.'
    }
  ],
  popCultureParagraphs: popCultureRaw.split('[br]')
}

export default jupiter
