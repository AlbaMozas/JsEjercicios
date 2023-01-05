//Convierte la siguiente promesa para esperar a ejecutar el console usando async-await.

// const runTimeOut = () => {
//     const promise = new Promise((resolve) => {
//         setTimeout(function () {
//             resolve();
//         }, 2000);
//     })

//     promise.then(() => {console.log('Time out!')})
// };

// runTimeOut();

 
const runTimeOut = async () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })

    await promise;
    console.log('Time out!');

    //promise.then(() => {console.log('Time out!')})
};

runTimeOut();