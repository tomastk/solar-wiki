const infoRaw = 'Oscuro, frío y azotado por vientos supersónicos, el gigante de hielo Neptuno es el octavo y más lejano planeta de nuestro sistema solar. A una distancia del Sol más de 30 veces superior a la de la Tierra, Neptuno es el único planeta de nuestro sistema solar que no es visible a simple vista y el primero predicho por las matemáticas antes de su descubrimiento. En 2011 Neptuno completó su primera órbita de 165 años desde su descubrimiento en 1846. La Voyager 2 de la NASA es la única nave espacial que ha visitado Neptuno de cerca. Pasó en 1989 en su camino de salida del sistema solar.'

const popCultureRaw = 'Aunque Neptuno es el planeta más alejado de nuestro Sol, es una parada frecuente en la cultura pop y la ficción. El planeta sirvió de telón de fondo para la película de ciencia ficción de 1997 "Event Horizon", mientras que en la serie de dibujos animados "Futurama", el personaje Robot Santa Claus tiene su base de operaciones en el polo norte de Neptuno. Los fans de "Dr. Who" recordarán que un episodio titulado "Sleep No More" está ambientado en una estación espacial que orbita alrededor de Neptuno. Y en el episodio piloto de "Star Trek: Enterprise", "Broken Bow", los espectadores se enteran de que a velocidad warp 4,5 es posible volar a Neptuno y volver a la Tierra en seis minutos'

const neptune = {
  name: 'Neptuno',
  distanceToSun: '2780M de Km',
  timeFromLightToSun: '248 mins',
  planetType: 'Gigante Gaseoso',
  durationOfYear: '60190 días',
  infoParagraphs: infoRaw.split('[br]'),
  facts: [
    {
      title: 'Gigante',
      content: 'Neptuno es unas cuatro veces más ancho que la Tierra. Si la Tierra fuera una manzana grande, Neptuno tendría el tamaño de una pelota de baloncesto.'
    }, {
      title: 'Octavo Planeta',
      content: 'Neptuno orbita alrededor de nuestro Sol, una estrella, y es el octavo planeta desde el Sol a una distancia de unos 4.500 millones de kilómetros).'
    }, {
      title: 'Día corto, año largo',
      content: 'Neptuno tarda unas 16 horas en girar una vez (un día neptuniano) y unos 165 años terrestres en orbitar alrededor del Sol (un año neptuniano).'
    },
    {
      title: 'Gigante de hielo',
      content: 'Neptuno es un gigante de hielo. La mayor parte de su masa es un fluido caliente y denso de materiales "helados" -agua, metano y amoníaco- sobre un pequeño núcleo rocoso.'
    },
    {
      title: 'Gaseoso',
      content: 'La atmósfera de Neptuno está formada principalmente por hidrógeno molecular, helio atómico y metano.'
    },
    {
      title: 'Lunas',
      content: 'Neptuno tiene 14 lunas conocidas que reciben el nombre de dioses y ninfas del mar en la mitología griega.'
    },
    {
      title: 'Anillado',
      content: 'Neptuno tiene al menos cinco anillos principales y otros cuatro arcos de anillos, que son cúmulos de polvo y escombros probablemente formados por la gravedad de una luna cercana. '
    },
    {
      title: 'Un Viaje hasta allí',
      content: ' Voyager 2 es la única nave espacial que ha visitado Neptuno. Ninguna nave espacial ha orbitado este lejano planeta para estudiarlo a fondo y de cerca.'
    },
    {
      title: 'Sin vida',
      content: 'Neptuno no puede albergar vida tal y como la conocemos'
    }
  ],
  popCultureParagraphs: popCultureRaw.split('[br]')
}

export default neptune
