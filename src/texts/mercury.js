const infoRaw = 'El planeta más pequeño de nuestro sistema solar y el más cercano al Sol, Mercurio es solo un poco más grande que la Luna de la Tierra. Desde la superficie de Mercurio, el Sol parecería tres veces más grandes que visto desde la Tierra, y la luz del Sol sería hasta siete veces más brillante. [br]A pesar de su proximindad al Sol, Mercurio no es el planeta más caliente de nuestro sistema solar, este título pertenece al cercano Venus, gracias a su densa atmósfera. Debido a la óptica elíptica (en forma de huevo) de Mercurio y su lenta rotación, el Sol parece salir brevemente, ponerse y salir de nuevo desde algunas de las partes de la superficie del planeta. Lo mismo sucede a la inversa al atardecer.'

const popCultureRaw = 'El planeta más pequeño de nuestro sistema solar tiene una gran presencia en el imaginario colectivo. Mercurio ha inspirado a decenas de escritores de ciencia ficción, incluídos Isaac Asimov, C.S Lewis, Ray Bradbury, Arthur C. Clarke y H.P. Lovecraft. Los escritores de televisión y cine también han encontrado en el planeta un lugar ideal para contar historias. [br] En el programa de televisión animado "Invader Zim", de 2001, los extintos marcianos convierten a Mercurio en un prototipo de nave espacial gigante. Y en la película de 2007 "Sunshine", la nave espacial Ícaro II Entra en órbita alrededor de Mercurio para encontrarse con el Ícaro I.'

const neptune = {
  name: 'Mercurio',
  distanceToSun: '29262KM',
  timeFromLightToSun: '2.6181mins',
  planetType: 'Terrestre',
  durationOfYear: '88 días',
  infoParagraphs: infoRaw.split('[br]'),
  facts: [
    {
      title: 'Planeta Pequeño',
      content: 'Mercurio es el planeta más pequeño de nuestro sistema solar, solo un poco más grande que la Luna de la Tierra.'
    }, {
      title: 'Cerca del calor',
      content: 'Mercurio es el planeta que orbita más cerca del Sol.'
    }, {
      title: 'El planeta más rápido',
      content: 'Mercurio es el planeta más rapido de nuestro sistema solar, viaja por el espacio a casi 47km/s. Cuanto más cerca está un planeta del Sol, más rápido viaja. Dado que Mercurio es el planeta más rápido, tiene el año más corto: 88 días.'
    },
    {
      title: 'Superficie áspera',
      content: 'Mercurio es un planeta rocoso, más conocido como un planeta terrestre. Tiene una superficie sólida con cráteres, muy parecida a la Luna de la Tierra.'
    },
    {
      title: 'No se puede respirar ahí',
      content: 'La delgada atmósfera de Mercurio, o exósfera, está compuesta principalmente de oxigeno (O2), sodio, hidrógeno (H2), helio (HE) y potasio (K)'
    },
    {
      title: 'Sin lunas ni anillos',
      content: 'Mercurio no tiene ninguna luna y no tiene ningún anillo orbitando a su alrededor.'
    },
    {
      title: 'Dificil vivir aquí',
      content: 'Es poco probable que la vida tal como la conocemos pueda sobrevivir en Neptuno, debido a la radiación y las temperaturas extremas.'
    },
    {
      title: 'Gran Sol',
      content: 'De píe en la superficie de Mercurio en su máxima aproximación al Sol, nuestra estrella parecería tres veces más grandes que desde la Tierra.'
    },
    {
      title: 'Visitantes Robóticos',
      content: 'Dos misiones de la NASA han explorado Mercurio. Mariner 10 fue la primera en valor por Mercurio y MESSENGER fue la primera en orbitar. El Beepicolombo de la ESA está en camino a Mercurio.'
    }
  ],
  popCultureParagraphs: popCultureRaw.split('[br]')
}

export default neptune
