var expens={jan:10000,feb:15000,march:22000,april:23000,may:20000}
console.log(expens.march);
console.log(expens["march"]);
console.log(expens.may);
console.log(expens["may"]);
//june:25000
//adding a new property:value
expens.june=25000
console.log(expens);

expens.march+=3000;
console.log(expens);

// chk july is there or not
console.log("july" in expens);

//chk for july is present if not add july:25000
if("july" in expens){

}
else{
    expens.july=25000;
}
console.log(expens);
