//Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados
//y añade la propiedad isApproved a true o false en consecuencia. 
//Una vez lo tengas compruebalo con un console.log.


// const alumns = [
//     {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
// ]

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, 
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, 
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, 
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (let i = 0; i < alumns.length; i++) {
    aprovedAlum = 0
    const alumn = alumns[i];

    if(alumn.T1 === true){
        aprovedAlum++;
    }
    if(alumn.T2 === true){
        aprovedAlum++;
    }
    if(alumn.T3 === true){
        aprovedAlum++;
    }
    if(aprovedAlum > 2){
        alumn.isApproved = true;
    }
    else{
        alumn.isApproved = false;
    }
}
console.log(alumns);