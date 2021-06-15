var first=0,second=1,n=10,third;
console.log("fibonacci series");
for(let i=1;i<=n;i++){
    console.log(first);
    third=first+second;
    first=second;
    second=third;
}