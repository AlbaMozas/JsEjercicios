//Usa un for para remplazar todas las comidas que no sean veganas 
//con las comidas del array de frutas. 
//Recuerda no usar frutas duplicadas. 
//Finalmente, imprime el array resultante.

//const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
//const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [
    {name: "Salad", isVegan: true},
    {name: "Salmon", isVegan: false}, 
    {name: "Tofu", isVegan: true}, 
    {name: "Burger", isVegan: false}, 
    {name: "Rice", isVegan: true},
    {name: "Pasta", isVegan: true}
];

for (let i = 0; i < foodSchedule.length; i++) {
    const foodVegan = foodSchedule[i];
    let fruit = 0;
    if(foodVegan.isVegan === false){
        foodVegan.name = fruits[fruit];
        fruit++;
        foodVegan.isVegan = true;
    }
    
}
console.log(foodSchedule);