const infoRaw = 'Venus es el segundo planeta desde el Sol y es el vecino planetario más cercano a la Tierra. Es uno de los cuatro planetas terrestres y a menudo se lo llama "El gemelo de la Tierra" porque es similar en tamaño y densidad. Sin embargo, estos no son gemelos idénticos: existen diferencias radicales entre los planetas. [br] Venus tiene una atmósfera espesa y tóxica llena de dioxido de carbono y está perpetuamente envuelta en espesas nubes amarillentas de ácido sulfórico que atrapan el calor y provocan un efecto invernadero descontrolado. Es el planeta más caliente de nuestro sistema solar, aunque Mercurio está más cerca del Sol. Las temperaturas de la superficie de Venus son de unos 900 grados Fahrenheit, lo suficientemente calientes como para derretir el plomo. [br] La superficie es de un color oxidado y está salpicada de montañas intensamente trituradas y miles de grandes volcánes. Los científicos creen que es posible que algunos volcánes todavía estén activos. [br] Otra gran diferencia con la Tierra: Venus gira sobre su eje hacia atrás, en comparación con la mayoría de otros planetas del sistema solar. Esto significa que en Venus el sol sale por el oeste y se pone por el este, al contrario de lo que experimentamos en la Tierra. [br] Venus fue el primer planeta en ser explorado por una nave espacial: el Mariner II de la NASA sobrevoló con éxito y escaneó el mundo cubierto de nubes el 14 de diciembre de 1962. Desde entonces, numerosas nubes espaciales de los EE.UU. y otras agencias espaciales han explorado Venus, incluída la NASA Magellan, que cartografió la superficie del planeta con radar. Las naves espaciales soviéticas realizaron los aterrizajes más exitosos en la superficie de Venus hasta la fecha, pero no sobrevivieron mucho debido al calor extremo y la presión aplastante. Una sorda estadounidense, una de las Pioneer Venus Multiprobes de la NASA sobrevivió durante aproximadamente una hora después de impactar la superficie en 1978. Las misiones de Venus más recientes incluyen Venus Express de ESA (que estuvo en órbita desde 2006 hasta 2016) y Akatsuki Venus Climate Orbiter de Japón (en órbita desde 2016). La sonda solar Parker de la NASA ha realizado muchos sobrevuelos sobre Venus. El 9 de febrero de 2022, la NASA anunció que la nave espacial había capturado sus primeras imágenes de luz visible de la superficie de Venus desde el espacio durante su sobrevuelo de febrero de 2021.'

const neptune = {
  name: 'Venus',
  distanceToSun: '66910244KM',
  timeFromLightToSun: '6mins',
  planetType: 'Terrestre',
  durationOfYear: '225 días',
  infoParagraphs: infoRaw.split('[br]'),
  facts: [
    {
      title: 'Gemelo tóxico',
      content: 'Venus es a menudo llamado el gemelo de la Tierra porque son similares en tamaño y estructura, pero Venus tiene un calor superficial extremo y una atmósfera densa y tóxica.'
    }, {
      title: 'Segunda roca',
      content: 'Venus es el segundo planeta más cercano al Sol, orbitando a una distancia de aproximadamente 108 millones de kilometros.'
    }, {
      title: 'Días largos, años cortos',
      content: 'Venus gira muy lentamente sobre su eje: un dia en Venus dura 243 días terrestres. Sin embargo, el planeta gira alrededor del Sol más rápido que la Tierra, por lo que un año equivale a 225 días terrestres.'
    },
    {
      title: 'Terreno Diverso',
      content: 'Venus tiene una superficie sólida cubierta de volcánes, grietas y montañas, con extensas llanuras volcánicas y vastas mesetas.'
    },
    {
      title: 'Superficie joven',
      content: 'La superficie promedio de Venus tiene aproximadamente 150 millones de años. Esto es un enigma para los científicos, no saben qué quizo que Venus resurgiera por completo.'
    },
    {
      title: 'Efecto invernadero',
      content: 'La espesa atmósfera de Venus atrapa el calor creando un efecto invernadero desbordante, lo que lo convierte en el planeta más caliente del sistema solar con tempraturas capaces de derretir el plomo.'
    },
    {
      title: 'Nubes apestosas',
      content: 'Venus está permanentemente envuelto en espesas nubes tóxicas de ácido sulfórico. ¡Huelen a huevo podrido!'
    },
    {
      title: 'Exploración efímera',
      content: 'Venus fue el primer planeta explorado por una nave espacial y fue intensamente estudiado al principio de la historia de la exploración espacial, pero los módulos de exploración solo sobrevivieron un par de horas.'
    },
    {
      title: 'La vida en Venus',
      content: 'Es poco probable que haya vida como la conocemos, pero podrían haber indicadores de vida microbiana en las nubes.'
    }
  ]
}

export default neptune
