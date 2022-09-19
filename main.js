const prompt = require('prompt-sync')({sigint:true});
//user input
let color1 = "none";
let color2 = "none";
let color3 = "none";
let input = "none"
let c = "c";
let d = "d";

//colors
let r = "red";
let b = "blue";
let y = "yellow";
let p = "purple";
let o = "orange";
let g = "green";

console.log("Do you want to combine colors or deconstruct them?");
input = prompt("Type 'c' to combine, or type 'd' to deconstruct: ");
input = input.toLowerCase();

if(input === c){
    console.log("Color Constructor:");
    console.log("---------------------");
    console.log("In order to create a new color, you to need enter two colors that you want to blend.");
    color1 = prompt("Input Color One: ");
    color1 = color1.toLowerCase();
    color2 = prompt("Input Color Two: ");
    color2 = color2.toLowerCase();
 
    if(color1 === r  &&  color2 === b || color1 === b  &&  color2 === r ){

        console.log(`output color: ${p} `)
    }
    else if (color1 === r  &&  color2 === y || color1 === y  &&  color2 === r ){
        console.log(`output color: ${o} `)

    }
    else if (color1 === b  &&  color2 === y ||  color1 === y && color2 === b){
        console.log(`output color: ${g} `)

    }
    else{
        console.log("error");
    }


}
else if(input === d) {

    console.log("Color Destructor:");
    console.log("---------------------");
    color3 = prompt("Input a color to deconstruct: ");
    color3 = color3.toLowerCase();
    
    if(color3 === p){

        console.log(`${r} + ${b} = ${p} `)
    }
    else if (color3 === o){
        console.log(`${r} + ${y} = ${o} `)

    }
    else if (color3 === g){
        console.log(`${b} + ${y} = ${g} `)

    }
    else{
        console.log("error");
    }
}
else{
    console.log("Bye!");
}
