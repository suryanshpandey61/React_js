export function display(){
    console.log("Function of Script.js");
}

function add(a,b){
    return a+b;
}
export {add};

function subtract(a,b){
    return a-b;
}
export default subtract;


export function changeName(){
    console.log("Change name fn of script.js");
}