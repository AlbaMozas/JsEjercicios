//Basandote en el html siguiente, 
//elimina el elemento que tenga la clase .fn-remove-me.


let removeall$$ = document.querySelectorAll(".fn-remove-me");

for (let i = 0; i < removeall$$.length; i++) {
    removeall$$[i].remove();   
}

// var body$$ = document.querySelector("body");
// var p$$ = document.querySelector(".fn-remove-me");
// body$$.removeChild(p$$);


//NO FUNCIONA//
// let removeall$$ = document.querySelectorAll(".fn-remove-me");
// removeall$$.remove();