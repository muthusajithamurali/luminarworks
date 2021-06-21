var a=[10,20,30,40]
var b=[10,11,12,20]

for(let i=0;i<a.length;i++){
    for(let j=0;j<b.length;j++){
        if(a[i]==b[j]){
            console.log(a[i],b[j]);
            
            break;
        }
    }
}


