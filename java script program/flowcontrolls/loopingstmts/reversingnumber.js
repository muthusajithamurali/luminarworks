var num=123;
//321

// while(num!=0){//123!=0 12!=0 1!=0 0!=0
//     let digit=num%10;//digit=123%10=3 12%10=2 1%10=1
//     console.log(digit);//321
//     num=math.floor(num/10)//num=123/10=12 12/10=1 1/10=0

// }
var res="";
while(num!=0){
    let digit=num%10;
    res+=digit
    num=Math.floor(num/10)
}