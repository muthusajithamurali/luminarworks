var num=123;
var num1=num;
var res=0;
while(num!=0){
    let digit=num%10;
    res+=digit;
    num=Math.floor(num/10);
}