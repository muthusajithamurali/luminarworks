var arr=[7,8,9,10,11,12]
var element=11;

let flag=0;
var low=0,upp=arr.length-1;
while(low<=upp){
    let mid=Math.floor((low+upp)/2)
    if(element>arr[mid]){
        low=mid+1;
    }
    else if(element<arr[mid]){
        upp=mid-1;
    }
    else if(element==arr[mid]){
        flag++;
        break;
    }
}
console.log(flag==0?"found":"not found");