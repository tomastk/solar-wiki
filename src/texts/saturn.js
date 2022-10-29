const infoRaw = 'Saturno es el sexto planeta desde el Sol y el segundo más grande de nuestro sistema solar. Adornado con miles de hermosos anillos, Saturno es único entre los planetas. No es el único planeta que tiene anillos -hechos de trozos de hielo y roca-, pero ninguno es tan espectacular ni tan complicado como el de Saturno. [br] Al igual que el gigante gaseoso Júpiter, Saturno es una enorme bola formada principalmente por hidrógeno y helio.'

const popCultureRaw = 'Tal vez el más emblemático de todos los planetas de nuestro sistema solar, Saturno está muy presente en la cultura pop. [br] Es el telón de fondo de numerosas historias de ciencia ficción, películas y programas de televisión, cómics y videojuegos, como "Cthulhu Mythos", "WALL-E", "2001: Una odisea del espacio", "Star Trek", "Dead Space 2" y "Final Fantasy VII". En la película de Tim Burton " Beetlejuice Y en la película de 2014 "Interstellar", el agujero de gusano que permite a los astronautas viajar a otra galaxia aparece cerca de Saturno. [br] Saturno es también el homónimo del sábado, posiblemente el mejor día de la semana.'

const saturn = {
  name: 'Saturno',
  distanceToSun: '916M km',
  timeFromLightToSun: '81 mins',
  planetType: 'Gaseoso',
  durationOfYear: '10759 días',
  infoParagraphs: infoRaw.split('[br]'),
  facts: [
    {
      title: 'Un planeta colosal',
      content: 'Nueve Tierras, una al lado de la otra, abarcarían casi el diámetro de Saturno. Esto no incluye los anillos de Saturno.'
    }, {
      title: 'En luz baja',
      content: 'Saturno es el sexto planeta desde nuestro Sol (una estrella) y orbita a una distancia de unos 1.400 millones de kilómetros del Sol.'
    }, {
      title: 'Días cortos, años largos',
      content: 'Saturno tarda unas 10,7 horas (no se sabe con exactitud) en girar sobre su eje una vez -un "día" de Saturno- y 29 años terrestres en orbitar alrededor del Sol.'
    },
    {
      title: 'Gigante gaseoso',
      content: 'Saturno es un planeta gigante gaseoso y, por tanto, no tiene una superficie sólida como la de la Tierra. Pero podría tener un núcleo sólido en alguna parte. '
    },
    {
      title: 'Aire caliente',
      content: 'La atmósfera de Saturno está formada principalmente por hidrógeno (H2) y helio (He).'
    },
    {
      title: 'Mini Sistema Solar',
      content: 'Saturno tiene 53 lunas conocidas y otras 29 que están pendientes de confirmación de su descubrimiento, es decir, un total de 82 lunas.'
    },
    {
      title: 'Anillos gloriosos',
      content: 'Saturno tiene el sistema de anillos más espectacular, con siete anillos y varios huecos y divisiones entre ellos.'
    },
    {
      title: 'Destino poco frecuente',
      content: 'Pocas misiones han visitado Saturno: Pioneer 11 y Voyagers 1 y 2 pasaron por allí; pero Cassini orbitó Saturno 294 veces entre 2004 y 2017.'
    },
    {
      title: 'Planeta sin vida',
      content: 'Saturno no puede albergar vida tal y como la conocemos, pero algunas de sus lunas tienen condiciones que podrían albergar vida.'
    }
  ],
  popCultureParagraphs: popCultureRaw.split('[br]')
}

export default saturn
