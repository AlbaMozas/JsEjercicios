//Crea una arrow function que tenga dos parametros a y b
//y que por defecto el valor de a = 10 y de b = 5. 
//Haz que la función muestre por consola la suma de los dos parametros. 

// - Ejecuta esta función sin pasar ningún parametro
// - Ejecuta esta función pasando un solo parametro
// - Ejecuta esta función pasando dos parametros


const aMyFunction = ( a = 10, b = 5) => {
    console.log(a+b);
};

//- Ejecuta esta función sin pasar ningún parametro
aMyFunction();
//- Ejecuta esta función pasando un solo parametro
aMyFunction(6);
//- Ejecuta esta función pasando dos parametros
aMyFunction(3,4);


//Otra manera de hacerlo que no funciona:
    // const suma = (a, b) => a + b;
    // const sumando = suma(10, 5); 
    // console.log(sumando);

    // sumando();
    // sumando(3);
    // sumando(2,9);