const infoRaw = 'Urano es el séptimo planeta desde el Sol y tiene el tercer diámetro más grande de nuestro sistema solar. Fue el primer planeta encontrado con la ayuda de un telescopio, Urano fue descubierto en 1781 por el astrónomo William Herschel, aunque originalmente pensó que era un cometa o una estrella. [br] Dos años más tarde, el objeto fue aceptado universalmente como un nuevo planeta, en parte gracias a las observaciones del astrónomo Johann Elert Bode. Herschel intentó sin éxito llamar a su descubrimiento Georgium Sidus en honor al rey Jorge III. En su lugar, la comunidad científica aceptó la sugerencia de Bode de llamarlo Urano, el dios griego del cielo.'

const popCultureRaw = 'Urano es el "blanco" de no pocos chistes y juegos de palabras ingeniosos (y no tan ingeniosos), pero también es un destino frecuente en varias historias de ficción, como el videojuego Mass Effect y programas de televisión como "Doctor Who". El elemento radiactivo uranio recibió el nombre de Urano cuando se descubrió en 1789, apenas ocho años después de que se descubriera el planeta.'

const uranus = {
  name: 'Urano',
  distanceToSun: '1.700M km',
  timeFromLightToSun: '163 mins',
  planetType: 'Gigante de Hielo',
  durationOfYear: '30687 días',
  infoParagraphs: infoRaw.split('[br]'),
  facts: [
    {
      title: 'Enorme',
      content: 'Urano es unas cuatro veces más ancho que la Tierra. Si la Tierra fuera una manzana grande, Urano tendría el tamaño de una pelota de baloncesto.'
    }, {
      title: 'Séptimo en el camino',
      content: 'Urano orbita alrededor de nuestro Sol, una estrella, y es el séptimo planeta desde el Sol a una distancia de unos 2.900 millones de kilómetros.'
    }, {
      title: 'Un día corto, un año largo',
      content: 'Urano tarda unas 17 horas en girar una vez (un día uraniano), y unos 84 años terrestres en completar una órbita del Sol (un año uraniano).'
    },
    {
      title: 'Gigante de hielo',
      content: 'Urano es un gigante de hielo. La mayor parte de su masa es un fluido caliente y denso de materiales "helados" -agua, metano y amoníaco- sobre un pequeño núcleo rocoso.'
    },
    {
      title: 'Gaseoso',
      content: 'Urano tiene una atmósfera formada principalmente por hidrógeno molecular y helio atómico, con una pequeña cantidad de metano.'
    },
    {
      title: 'Muchas lunas y anillado',
      content: 'Urano tiene 27 lunas conocidas, y llevan el nombre de personajes de las obras de William Shakespeare y Alexander Pope. Urano tiene 13 anillos conocidos. Los anillos interiores son estrechos y oscuros y los exteriores tienen colores brillantes.'
    },
    {
      title: 'Un poco solitario',
      content: 'Voyager 2 es la única nave espacial que ha pasado por Urano. Ninguna nave espacial ha orbitado este lejano planeta para estudiarlo a fondo y de cerca.'
    },
    {
      title: 'Sin vida',
      content: 'Urano no puede albergar vida tal y como la conocemos.'
    },
    {
      title: 'Un dato curioso',
      content: 'Al igual que Venus, Urano gira de este a oeste. Pero Urano es único en el sentido de que gira sobre su costado.'
    }
  ],
  popCultureParagraphs: popCultureRaw.split('[br]')
}

export default uranus
