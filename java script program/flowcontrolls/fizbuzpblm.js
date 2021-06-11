var num=64;

// num/by 3 print fiz,num/5 print buz,num by 15 print fizbuzz
if(num%15==0){
    console.log("fizbuzz");
}
else if( num%3==0){
    console.log("fiz");
}
else if(num%5==0){
    console.log("buzz");
}
else{
    console.log("number")
}