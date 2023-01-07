const elBoss = {
  nombre: "Jose Luis",
  edad: 194,
  poderes: [
    {
      nombre: "Paranoia",
      description: "intentandome escapar de esta paranoia",
      imagenes: [
        {
          imagen1: {
            url: "has conseguido acceder a la primera imagen de la paranoia",
          },
        },
        {
          imagen2: {
            url: "has conseguido acceder a la segunda imagen de la paranoia",
          },
        },
      ],
    },
    {
      nombre: "Petrificasió",
      description: "Te mira y te petrifica",
      imagenes: [
        {
          imagen1: {
            url: "has conseguido acceder a la primera imagen de la petrificasió",
          },
        },
        {
          imagen2: {
            url: "has conseguido acceder a la segunda imagen de la petrificasió",
          },
        },
      ],
    },
    {
      nombre: "Fuego",
      description: "Pues eso, fuego",
      imagenes: [
        {
          imagen1: {
            url: "has conseguido acceder a la primera imagen del fueguito",
          },
        },
        {
          imagen2: {
            url: "has conseguido acceder a la segunda imagen del fueguito",
          },
        },
      ],
    },
  ],
  familiares: [
    {
      nombre: "Julian",
      edad: 342,
      parentesco: "Primo",
    },
    {
      nombre: "Paquito",
      edad: 312,
      parentesco: "Tío",
    },
    {
      nombre: "Emma",
      edad: 13,
      parentesco: "Sobrina",
    },
    {
      nombre: "Julia",
      edad: 100,
      parentesco: "Hermana",
    },
  ],
  reto: [
    [
      {
        sigueElReto: [
          {
            sigueElReto2: {
              sigueElReto3: {
                pareceQueSabesBucearEntreObjetos: {
                  definitivamenteSabes: [
                    "Jose",
                    "Luis,",
                    "te",
                    "miro",
                    "y",
                    23121,
                    "te",
                    "destruyo",
                    {
                      mensajeFinal:
                        "Enhorabuena!, si has llegado hasta aquí te costará mucho menos tratar los datos de la pokeapi en el proyecto final de JavaScript!",
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    ],
  ],
};

// EJERCICIO

// tenemos un objeto llamado elBoss, como hemos visto en clase con ejemplos muy sencillitos
// podemos recorrer arrays... bucear entre objetos... y tratar datos.
// Lo que tendrás que hacer a continuación solo es complicar un poco más lo que hemos visto antes,
// pero por mucho que te pueda asustar elBoss, es lo mismo!

// Requisitos para matar a elBoss

// vamos a imaginarnos que vamos a hablar con el mediante console.logs, cada vez que pongamos
// un console.log será como hablar con el.

// entonces: // le vamos a decir = console.log()
// 1: le vamos a decir "{su nombre}, te conozco y no me das ningún miedo!";
console.log( elBoss.nombre + ', te conozco y no me das ningún miedo!')

// 2: le vamos a decir "conozco tus poderes y lo que hacen!"
console.log ('conozco tus poderes y lo que hacen!')

// 3: le vamos a decir "tu primer poder es {su primer poder} y hace {la descripción de su poder}"
for (let i = 0; i < elBoss.poderes.length; i++) {
  console.log(`Tu ${[i+1]} poder es ${elBoss.poderes[i].nombre} y hace: ${elBoss.poderes[i].description}`)
  //Meter entre paréntesis todo con las comillas francesas ``el ${} sirve para meter los nombres y no usar comillas en el texto añadido
  //console.log('Tu' + i+1 + 'primer poder es: ' + elBoss.poderes[i].nombre + ' y hace: ' + elBoss.poderes[i].description)
  //console.log('Tu segundo poder es: ' + elBoss.poderes[1].nombre + ' y hace: ' + elBoss.poderes[1].description)
  //console.log('Tu tercer poder es: ' + elBoss.poderes[2].nombre + ' y hace: ' + elBoss.poderes[].description)
};

//"tu segundo poder es {su segundo poder} y hace {la descripción de su poder}"
console.log(`Tu segundo poder es: ${elBoss.poderes[1].nombre} y hace: ${elBoss.poderes[1].description}`)

//"tu tercero poder es {su tercero poder} y hace {la descripción de su poder}"
console.log(`Tu tercer poder es: ${elBoss.poderes[2].nombre} y hace ${elBoss.poderes[2].description}`)

// 4: le vamos a decir "También se tu punto más debil, tus familiares, y les conozco..."
console.log(`También se tu punto más debil, tus familiares, y les conozco...`)

// "conozco a tu {parentesco del primer familiar} {nombre del primer familiar}"
console.log(`Conozco a tu ${elBoss.familiares[0].parentesco} ${elBoss.familiares[0].nombre}`)

// "conozco a tu {parentesco del segundo familiar} {nombre del segundo familiar}"
console.log(`Conozco a tu ${elBoss.familiares[1].parentesco} ${elBoss.familiares[1].nombre}`)

// "conozco a tu {parentesco del tercero familiar} {nombre del tercero familiar}"
console.log(`Conozco a tu ${elBoss.familiares[2].parentesco} ${elBoss.familiares[2].nombre}`)

// "y conozco a tu {parentesco del cuarto familiar} {nombre del cuarto familiar}"
console.log(`y conozco a tu ${elBoss.familiares[3].parentesco} ${elBoss.familiares[3].nombre}`)

// 5: para matarlo tendrás que superar el reto y para ello tendrás que decirle las palabras
// mágicas para que el mensaje quede tal que así "Jose luis, te miro y te destruyo".

let mensajeFinal = '';

for (let i = 0; i < 8; i++) {
  if(i !== 5){
  mensajeFinal = mensajeFinal+elBoss.reto[0][0].sigueElReto[0].sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes[i] + ' ' }
};
console.log(mensajeFinal);


// Por último, como bonus, mostraremos por pantalla las urls de todas las imágenes de los poderes.
for(let i = 0; i < elBoss.poderes.length ; i++){  
  //console.log(elBoss.poderes[i].imagenes[0].imagen1.url/elBoss.poderes[i].imagenes[1].imagen2.url);
  for(a = 0; a < 2; a++){
    let imagenes = elBoss.poderes[i].imagenes[a];
    for (const img in imagenes) {
        const element = elBoss.poderes[i].imagenes[a][img];
        console.log(element.url);
    };
  } ;
};

// haremos la media de las edades de los familiares de elBoss.

let totalPersons = 0;

let totalAge = 0;

for(let i = 0 ;i < elBoss.familiares.length; i++){
  //console.log(elBoss.familiares[i].edad)
  totalAge += elBoss.familiares[i].edad; totalPersons++; 
};

console.log("Media de Edades:", totalAge / totalPersons)

// y mostraremos por pantalla el mensaje final

console.log(elBoss.reto[0][0].sigueElReto[0].sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes[8].mensajeFinal)
