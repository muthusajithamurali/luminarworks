


let displayNumber=(num)=>inpt.value+=num

// function evaluateExpression(){
//     let res=eval(inpt.value)
//     inpt.value=res;
// }

let evaluateExpression=()=>inpt.value==""?inpt.value=0:inpt.value=eval(inpt.value);

// function clearBox(){
//     inpt.value=""
// }

let clearBox=()=>inpt.value="";
// function removenumber(){
//     inpt.value=inpt.value.slice(0,-1)
// }

let removenumber=()=>inpt.value=inpt.value.slice(0,-1)