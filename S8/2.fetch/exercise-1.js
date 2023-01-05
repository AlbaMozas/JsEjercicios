//Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch()
//y recibir los datos que devuelve. Imprimelo mediante un console.log(). Para ello, es necesario que crees un .html y un .js.

//.fetch = devolviendo una promesa que se cumple una vez que la respuesta está disponible.

const theFetch = fetch('https://api.agify.io?name=michael')

.then((response) => {return response.json();})

.then((theJson) => {console.log(theJson);});