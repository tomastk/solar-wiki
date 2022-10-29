const infoRaw = 'Nuestro planeta de origen es el tercer planeta desde el Sol, y el unico lugar que conocemos hata ahora que está habitado por seres vivos. Si bien la Tierra es solo el quinto planeta más grande del sistema Solar, es el único que posee agua líquida en la superficie. Un poco más grande que el cercano Venus, la Tierra es el más grande los cuatro planetas más cercanos al Sol, todos los cuales están hehcos de roca y metal. El nombre Tierra tiene al menos 1000 años. Todos los planetas, excepto la Tierra, recibieron nombres de dioses griegos y romanos. Sin embargo, el nombre Tierra es una palabra germánica que simplemente significa "el suelo".'

const popCultureRaw = 'Los escritores exploran la naturaleza de nuestro planeta y posibles realidades alternativas en muchos libros, películas y programas de la televisión. La icónica película "El Planeta de los Simios" (y sus secuelas) tiene lugar en un futuro en el que los astronautas "descubren" un planeta habitado por simios muy inteligentes y humanos primitivos, solo para darse cuenta más tarde, para su consternación, de que fue la Tierra todo el tiempo. [br] En la serie de televisión de larga duración "Battlestar Galactica", los cansados supervivientes de una guerra con robots altamente evolucionados llamados Cylons están en una búsqueda para encontrar la Tierra, una colonia perdida hace mucho tiempo. [br] En otras historias, la Tierra ha sido abandonada o destruída, como en la serie de Joss Whedon "FireFly", o el libro y su adaptación cinematográfica "La guía del autopista galáctico". En la película animada "Titan A.E", la Tierra ha sido destruída por una especie alienígena, pero un constructor de planetas la recrea justo con todas las especies que viven en ella.'

const earth = {
  name: 'Tierra',
  distanceToSun: '150M km',
  timeFromLightToSun: '8.32 mins',
  planetType: 'Terrestre',
  durationOfYear: '365 días',
  infoParagraphs: infoRaw.split('[br]'),
  facts: [
    {
      title: 'Midiendo',
      content: 'Si el Sol fuera tan altyo como una puerta de entrada típica, la Tierra tendría el tamaño de una moneda de cinco centavos.'
    }, {
      title: 'Tercera Roca',
      content: 'La Tierra orbita alrededor de nuestro sol, una estrella. Es el tercer planeta desde el Sol a una distancia de aproximadamente 150 millones de KM.'
    }, {
      title: 'Mientras el mundo gira',
      content: 'Un día enla Tierra son 24 horas. La Tierra hace una órbita completa alrededor del Sol en aproximadamente 365 días.'
    },
    {
      title: 'Acuático',
      content: 'La Tierra es un planeta rocoso con una superficie sólida y dinámica de montañas, cañones, volcánes, llanuras y más. La mayor parte de está cubierta de agua.'
    },
    {
      title: 'Se respira fácilmente',
      content: 'La atmósfera de la Tierra está compuesta por un 78%  de nitrógeno, un 21% de oxígeno y un 1% de otros ingredientes, el equilibrio perfecto para vivir.'
    },
    {
      title: 'Con luna y sin anillos',
      content: 'Nuestro planeta cuenta con una luna y no tiene ningun anillo orbitando a su alrededor.'
    },
    {
      title: 'Ciencia orbital',
      content: 'Muchas naves espaciales en órbita estudian la Tierra desde arriba como un sistema completo, observando la atmósfera, el océano, los glaciares y la Tierra sólida.'
    },
    {
      title: 'Hogar, dulce hogar',
      content: 'La Tierra es el único lugar en el universo que puede albergar vida como la conocemos.'
    },
    {
      title: 'Escudo protector',
      content: 'Nuestra atmósfera nos proteje de los meteoritos entrantes, la mayoría de los cuales se desintegran en nuestra atmósfera antes de que puedan golpear en la superficie.'
    }
  ],
  popCultureParagraphs: popCultureRaw.split('[br]')
}

export default earth
