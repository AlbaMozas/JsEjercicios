//Basandote en el siguiente array crea una lista ul > li con los textos del array y metelo en el html.
//js
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
//

let newUl$$ = document.createElement("ul");
document.body.appendChild(newUl$$);


for (let i = 0; i < apps.length; i++) {
    let newsLi$$ = document.createElement("li");
    newUl$$.appendChild(newsLi$$);
    newsLi$$.textContent = apps[i];  
}



