var num=8;
var flag=0;

for(let i=2;i<num;i++){
    if(num%i==0){
        flag++;
        break;
    }
}
console.log(flag==0?"prime":"notprime");

